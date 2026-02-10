"use client"

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { Download, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "../pageWrapper"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Floating accent elements */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                  Hi, I'm <span className="text-primary">Alisina Sadat</span>
                </h1>
                <p className="text-xl md:text-2xl mt-3 text-muted-foreground font-medium">Full-Stack Developer & Creative Builder</p>
              </motion.div>

              <motion.p className="text-lg text-muted-foreground max-w-2xl leading-relaxed" variants={itemVariants}>
                I craft exceptional and accessible digital experiences with clean code and beautiful designs. Specialized in modern, responsive applications with a focus on performance, user experience, and scalable solutions.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3 pt-6" variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="rounded-lg bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Me
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="rounded-lg hover:bg-primary/5 border-2 hover:border-primary">
                    <Link href="/about">
                      View Resume <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div className="flex items-center gap-4 pt-8" variants={itemVariants}>
                <span className="text-sm font-medium text-muted-foreground">Connect:</span>
                <motion.a
                  href="https://linkedin.com/in/alisina-sadat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/alisina123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="/cv/alisina.pdf"
                  download="alisina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/30 text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  <span>CV</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div className="relative flex justify-center md:justify-end" variants={imageVariants}>
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl"
                animate={floatingVariants.animate}
              >
                <Image src="/images/alisina.png" alt="Alisina Sadat" fill className="object-cover" priority />
              </motion.div>
              <motion.div
                className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 -bottom-4 -right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Skills section */}
          <motion.div className="mt-24 md:mt-32 pt-16 border-t border-border" variants={itemVariants} initial="hidden" animate="visible">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Tech Stack</h3>
              <p className="text-muted-foreground">Tools and technologies I work with</p>
            </div>
            <motion.div className="flex flex-wrap gap-2">
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
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <motion.div
                    className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
