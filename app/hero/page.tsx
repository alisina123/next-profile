"use client"

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { Download, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "../pageWrapper"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 z-0" />

        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm <span className="text-primary">Alisina Sadat</span>
                </h1>
                <h2 className="text-2xl md:text-3xl mt-4 text-muted-foreground">Full-Stack Developer</h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-md">
                I build exceptional and accessible digital experiences for the web. Specialized in creating modern,
                responsive applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/about">
                    View Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href="www.linkedin.com/in/alisina-sadat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/alisina123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaGithub size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
               
                <a
                  href="/cv/alisina.pdf"
                  download="alisina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Download size={20} />
                  <span>CV</span>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image src="/images/alisina.png" alt="Alisina Sadat" fill className="object-cover" priority />
              </div>
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 -bottom-4 -right-4" />
            </div>
          </div>

          {/* Skills section */}
          <div className="mt-20 md:mt-32">
            <h3 className="text-lg font-medium text-muted-foreground mb-6">Technologies I work with</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React.js",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "ShadCN UI",
                "PostgreSQL",
                "Java",
                "Spring Boot",
                "Rest API",
                "Python",
                "Odoo ERP",
                "Docker",
                "Git",
                "GitHub",
                "Figma",
              ].map((skill) => (
                <div key={skill} className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
