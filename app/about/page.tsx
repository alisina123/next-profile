"use client"

import { sleep } from "@/lib/utils"
import { PageWrapper } from "../pageWrapper"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <PageWrapper>
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background elements */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0" />
      </motion.div>
      <div className="container relative z-10 py-12 md:py-16">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Professional <span className="text-primary">Resume</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Full-stack developer with 6+ years of experience building modern web applications and enterprise solutions. Specialized in JavaScript, React, Next.js, and scalable system architecture.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button asChild className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl">
              <a href="/cv/alisina.pdf" download="alisina.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="lg:col-span-2 space-y-12">
            <section>
              <motion.h2 className="text-2xl font-bold mb-6 text-foreground" variants={itemVariants}>
                Work Experience
              </motion.h2>

              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden border-l-4 border-l-primary bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="font-bold text-lg">Software Engineer</h3>
                        <div className="text-muted-foreground">Mar 2024 - Present</div>
                      </div>
                      <div className="text-muted-foreground mb-4">Virginia, United States Remote</div>
                      <p className="mb-4">
                        Building a full-stack educational platform dedicated to empowering Afghan girls through accessible online learning. Implementing social media integration, real-time chat, class management, staff dashboards, and community interaction features.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Shadcn UI</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">Spring Boot</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden border-l-4 border-l-primary/70 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="font-bold text-lg">Full Stack Developer</h3>
                        <div className="text-muted-foreground">Feb 2022 - Present</div>
                      </div>
                      <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                      <p className="mb-4">
                        I develop and implement an inventory management system for the Government of Afghanistan using
                        Odoo ERP. This involves designing and customizing the ERP solution to meet the specific needs of
                        the government sector, ensuring efficient and effective inventory tracking and management.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary">Odoo ERP</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden border-l-4 border-l-primary/50 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="font-bold text-lg">Web Designer</h3>
                        <div className="text-muted-foreground">Jan 2018 - Dec 2018</div>
                      </div>
                      <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                      <p className="mb-4">
                        Developed multiple responsive websites for the company, focusing on user experience and modern web design practices.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary">HTML/CSS</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">WordPress</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden border-l-4 border-l-primary/30 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="font-bold text-lg">Software Developer</h3>
                        <div className="text-muted-foreground">Oct 2016 - Jan 2018</div>
                      </div>
                      <div className="text-muted-foreground mb-4">Kabul, Afghanistan</div>
                      <p className="mb-4">
                        I was responsible for designing, developing, and analyzing the leave request management system and
                        employee report management system in Parliament House.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary">PHP</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                        <Badge variant="secondary">jQuery</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </section>
          </div>

          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate={isLoaded ? "visible" : "hidden"}>
            <section>
              <motion.h2 className="text-2xl font-bold mb-6 text-foreground" variants={itemVariants}>
                Education
              </motion.h2>
              <motion.div variants={itemVariants}>
                <Card className="bg-white hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg">Bachelor of Computer Science</h3>
                      <div className="text-muted-foreground">2013 - 2016</div>
                    </div>
                    <p>Kabul Polytechnic University</p>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            <section>
              <motion.h2 className="text-2xl font-bold mb-6 text-foreground" variants={itemVariants}>
                Skills
              </motion.h2>

              <motion.div className="space-y-6" variants={itemVariants}>
                <div>
                  <h3 className="font-medium mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Python</Badge>
                    <Badge>PHP</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Redux</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>HTML/CSS</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Strapi</Badge>
                    <Badge>REST API</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MongoDB</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>MySQL</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Odoo ERP</Badge>
                    <Badge>Agile/Scrum</Badge>
                  </div>
                </div>
              </motion.div>
            </section>

            <section>
              <motion.h2 className="text-2xl font-bold mb-6 text-foreground" variants={itemVariants}>
                Contact
              </motion.h2>

              <motion.div variants={itemVariants}>
                <Card className="bg-white hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">📧</span>
                      <a href="mailto:alisina123kpu@gmail.com" className="hover:text-primary transition-colors">
                        alisina123kpu@gmail.com
                      </a>
                    </p>
                    <div className="pt-2">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
