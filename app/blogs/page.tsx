"use client"

import { useState } from "react"
import { PageWrapper } from "../pageWrapper"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 15",
    description: "Learn how to leverage the latest features of Next.js 15 to build blazing-fast web applications with optimal performance and excellent developer experience.",
    category: "Next.js",
    author: "Alisina Sadat",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    image: "/images/blog-1.jpg",
    slug: "nextjs-15-guide",
    tags: ["Next.js", "React", "Performance"]
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Responsive Design",
    description: "Discover the power of utility-first CSS and how Tailwind CSS can significantly speed up your design-to-code workflow with practical examples.",
    category: "CSS",
    author: "Alisina Sadat",
    date: "Feb 8, 2025",
    readTime: "6 min read",
    image: "/images/blog-2.jpg",
    slug: "tailwind-responsive",
    tags: ["Tailwind CSS", "Design", "Web Development"]
  },
  {
    id: 3,
    title: "Full-Stack Development: Best Practices & Tips",
    description: "Explore essential practices for full-stack development including architecture patterns, security considerations, and deployment strategies.",
    category: "Development",
    author: "Alisina Sadat",
    date: "Feb 5, 2025",
    readTime: "10 min read",
    image: "/images/blog-3.jpg",
    slug: "fullstack-best-practices",
    tags: ["Full-Stack", "Architecture", "Best Practices"]
  },
  {
    id: 4,
    title: "React Hooks: Deep Dive into State Management",
    description: "Understand React Hooks deeply and learn how to manage complex state patterns using custom hooks and context API.",
    category: "React",
    author: "Alisina Sadat",
    date: "Feb 3, 2025",
    readTime: "9 min read",
    image: "/images/blog-4.jpg",
    slug: "react-hooks-guide",
    tags: ["React", "Hooks", "State Management"]
  },
  {
    id: 5,
    title: "Database Design for Scalable Applications",
    description: "Learn how to design efficient database schemas that can scale with your application growth and maintain optimal query performance.",
    category: "Database",
    author: "Alisina Sadat",
    date: "Feb 1, 2025",
    readTime: "7 min read",
    image: "/images/blog-5.jpg",
    slug: "database-design",
    tags: ["Database", "PostgreSQL", "Scaling"]
  },
  {
    id: 6,
    title: "Docker and Containerization for Modern Development",
    description: "Get started with Docker and learn how containerization can improve your development workflow and deployment process.",
    category: "DevOps",
    author: "Alisina Sadat",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    image: "/images/blog-6.jpg",
    slug: "docker-guide",
    tags: ["Docker", "DevOps", "Containerization"]
  },
]

const categories = ["All", "Next.js", "React", "CSS", "Database", "DevOps", "Development"]

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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

        <div className="container relative z-10 px-4 py-12 md:py-20 mx-auto">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              My <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Insights, tutorials, and thoughts on web development, technology, and building amazing digital products.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="mb-12 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants} whileHover={{ y: -8 }}>
                <Link href={`/blogs/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white border border-border">
                    {/* Card Image Area */}
                    <motion.div
                      className="relative h-40 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden border-b border-border"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-primary/20">{post.id}</div>
                        </div>
                      </div>
                    </motion.div>

                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge className="bg-primary text-white text-xs">{post.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-lg">{post.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground text-sm line-clamp-2">{post.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-primary/5 border-primary/20 text-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="space-y-2 pt-3 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar size={13} />
                          {post.date}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          <motion.div
                            className="text-primary flex items-center gap-1 text-sm font-medium"
                            whileHover={{ x: 5 }}
                          >
                            Read <ArrowRight size={14} />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground text-lg">No posts found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}
