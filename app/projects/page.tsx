"use client"

import { useState } from "react"
import { PageWrapper } from "../pageWrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

  return (
    <PageWrapper>
      <div className="container py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground">
            Explore my portfolio of projects showcasing my skills and experience in web development. Each project
            represents a unique challenge and solution.
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full capitalize"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state when no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              No projects match the selected category. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button asChild variant="outline" size="sm">
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Eye className="mr-2 h-4 w-4" />
            Demo
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
