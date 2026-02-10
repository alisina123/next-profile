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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                  Hi, I'm Alisina Sadat
                </h1>
                <h2 className="text-2xl md:text-3xl mt-4 text-secondary font-semibold">Full-Stack Developer & Creative Builder</h2>
              </motion.div>

              <motion.p className="text-lg text-muted-foreground max-w-md leading-relaxed" variants={itemVariants}>
                I craft exceptional and accessible digital experiences. Specialized in modern, responsive applications
                with a focus on performance, design, and user experience.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-secondary/10">
                  <Link href="/about">
                    View Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div className="flex items-center gap-6 pt-4" variants={itemVariants}>
                <motion.a
                  href="www.linkedin.com/in/alisina-sadat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/alisina123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={24} />
                  <span className="sr-only">GitHub</span>
                </motion.a>
               
                <motion.a
                  href="/cv/alisina.pdf"
                  download="alisina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
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
          <motion.div className="mt-20 md:mt-32" variants={itemVariants} initial="hidden" animate="visible">
            <h3 className="text-lg font-semibold text-foreground mb-6">Technologies I work with</h3>
            <motion.div className="flex flex-wrap gap-3">
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
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-full text-sm font-medium text-foreground border border-primary/20 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
