import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config() // Load environment variables from .env file

export async function POST(req) {
  try {
    const { firstName, lastName, email, message } = await req.json()

    // Debug: Log request body
    console.log("Received request:", { firstName, lastName, email, message })

    // Debug: Check environment variables
    console.log("EMAIL_USER:", process.env.EMAIL_USER)
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS)

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Environment variables not set correctly")
      return new Response(JSON.stringify({ message: "Email user or password not set in environment variables" }), {
        status: 500,
      })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for port 587
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app-specific password
      },
    })

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "alisina123kpu@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("Message sent: %s", info.messageId)
      return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 })
    } catch (error) {
      console.error("Error sending email:", error)
      return new Response(JSON.stringify({ message: "Error sending email", error: error.message }), { status: 500 })
    }
  } catch (error) {
    console.error("Error in POST request:", error)
    return new Response(JSON.stringify({ message: "Internal Server Error", error: error.message }), { status: 500 })
  }
}

export function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 })
}
