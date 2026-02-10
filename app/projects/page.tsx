"use client"

import { useState } from "react"
import { PageWrapper } from "../pageWrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Project type definition
type Project = {
  id: number
  title: string
  description: string
  image: string
  demoUrl: string
  githubUrl: string
  category: string[]
  technologies: string[]
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: ["web", "fullstack"],
    technologies: ["React", "Next js", "Stripe"],
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "A collaborative task management application with real-time updates and team collaboration features.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   category: ["web", "frontend"],
  //   technologies: ["React", "Redux", "Firebase"],
  // },
  // {
  //   id: 3,
  //   title: "Property Listing Portal",
  //   description: "A real estate platform for listing and searching properties with advanced filtering options.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   category: ["web", "fullstack"],
  //   technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
  // },
  {
    id: 4,
    title: "Inventory Management System",
    description: "A comprehensive inventory management system for tracking products, orders, and suppliers.",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: ["web", "backend"],
    technologies: ["Odoo ERP", "Python","Postgres Sql"],
  },
  // {
  //   id: 5,
  //   title: "Health Tracking Dashboard",
  //   description: "A dashboard for tracking health metrics with data visualization and progress tracking.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   category: ["web", "frontend"],
  //   technologies: ["React", "Chart.js", "Tailwind CSS"],
  // },
  {
    id: 6,
    title: "Learning Management System",
    description: "An educational platform for course creation, student enrollment, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: ["web", "fullstack"],
    technologies: ["Next.js", "Spring Boot"],
  },
]

// Available categories for filtering
const categories = ["all", "web", "frontend", "backend", "fullstack", "mobile"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

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
      <div className="relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="container relative z-10 py-12 md:py-16">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              My Projects
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore my portfolio of projects showcasing my skills and experience in web development. Each project
              represents a unique challenge and solution.
            </p>
          </motion.div>

          {/* Category filter buttons */}
          <motion.div
            className="flex justify-center flex-wrap gap-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-full capitalize transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-lg"
                      : "hover:border-primary"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state when no projects match the filter */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected category. Try selecting a different category.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden group hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
              >
                <Badge key={tech} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4 gap-2">
          <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-white">
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          </motion.div>
          <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-white">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
