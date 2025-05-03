import Link from "next/link"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">A</span>lisina Sadat
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Full-stack developer specializing in creating modern, responsive web applications. Building exceptional
              digital experiences with the latest technologies.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/alisina-sadat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/alisina123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
        
            </div>
            <div className="mt-4">
              <a
                href="mailto:alisina123kpu@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                alisina.sadet@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Alisina Sadat. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
