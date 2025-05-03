// pages/api/sendMail.js
import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body

    // Configure the transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Replace with your SMTP server
      port: 587, // Typically 587 or 465
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // Your email
        pass: "your-email-password", // Your email password
      },
    })

    try {
      // Send the email
      const info = await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`, // Sender address
        to: "alisina123kpu@gmail.com", // List of recipients
        subject: `New Contact Form Submission from ${firstName} ${lastName}`, // Subject line
        text: message, // Plain text body
        html: `<p>${message}</p>`, // HTML body
      })

      console.log("Message sent: %s", info.messageId)
      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      console.error("Error sending email:", error)
      res.status(500).json({ message: "Error sending email", error: error.message })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
