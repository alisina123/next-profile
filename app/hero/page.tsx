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

          {/* Tech Stack Section */}
          <motion.div className="mt-24 md:mt-32 pt-16 border-t border-border" variants={itemVariants} initial="hidden" animate="visible">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-2">Technologies I Work With</h3>
              <p className="text-muted-foreground text-lg">Frontend, Backend, Tools & Platforms</p>
            </div>

            {/* Tech Categories */}
            <motion.div className="space-y-8">
              {[
                {
                  category: "Frontend",
                  icon: "⚛️",
                  tech: ["JavaScript", "React.js", "TypeScript", "Next.js", "Tailwind CSS", "ShadCN UI"],
                },
                {
                  category: "Backend",
                  icon: "🔌",
                  tech: ["Node.js", "Express", "Java", "Spring Boot", "Python", "Rest API"],
                },
                {
                  category: "Database & Tools",
                  icon: "💾",
                  tech: ["PostgreSQL", "MongoDB", "Docker", "Git", "GitHub", "Figma"],
                },
              ].map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + sectionIndex * 0.15 }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-2xl">{section.icon}</span>
                    <h4 className="text-xl font-semibold text-foreground">{section.category}</h4>
                  </div>
                  <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {section.tech.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25 + sectionIndex * 0.15 + index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg text-center hover:border-primary/40 hover:shadow-md hover:bg-primary/15 transition-all duration-300 cursor-pointer group">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{tech}</p>
                        </div>
                      </motion.div>
                    ))}
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
