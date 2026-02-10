"use client"

import { PageWrapper } from "../../pageWrapper"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

const blogContent = {
  "nextjs-15-guide": {
    title: "Building Modern Web Applications with Next.js 15",
    author: "Alisina Sadat",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    category: "Next.js",
    tags: ["Next.js", "React", "Performance"],
    content: `
      <h2>Introduction</h2>
      <p>Next.js 15 brings revolutionary improvements to web development. In this comprehensive guide, we'll explore the latest features and best practices for building high-performance applications.</p>
      
      <h2>Key Features of Next.js 15</h2>
      <h3>1. Enhanced Performance</h3>
      <p>Next.js 15 introduces significant performance improvements through optimized bundling and rendering strategies.</p>
      
      <h3>2. Improved Developer Experience</h3>
      <p>New CLI commands, better error messages, and enhanced debugging tools make development faster and more enjoyable.</p>
      
      <h3>3. Advanced Caching</h3>
      <p>The new caching layer provides intelligent cache management for both static and dynamic content.</p>
      
      <h2>Getting Started</h2>
      <p>To start using Next.js 15, you can create a new project using the latest CLI commands.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 represents a significant step forward in modern web development. By embracing these new features, you can build faster, more efficient applications.</p>
    `
  },
  "tailwind-responsive": {
    title: "Mastering Tailwind CSS for Responsive Design",
    author: "Alisina Sadat",
    date: "Feb 8, 2025",
    readTime: "6 min read",
    category: "CSS",
    tags: ["Tailwind CSS", "Design", "Web Development"],
    content: `
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind CSS has revolutionized the way we approach styling in web development. Its utility-first approach provides unprecedented flexibility and consistency.</p>
      
      <h2>Responsive Design with Tailwind</h2>
      <p>Creating responsive layouts with Tailwind is straightforward and intuitive using responsive prefixes.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use consistent spacing scales</li>
        <li>Leverage component composition</li>
        <li>Optimize for dark mode</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering Tailwind CSS will significantly improve your development workflow and the quality of your designs.</p>
    `
  },
  "fullstack-best-practices": {
    title: "Full-Stack Development: Best Practices & Tips",
    author: "Alisina Sadat",
    date: "Feb 5, 2025",
    readTime: "10 min read",
    category: "Development",
    tags: ["Full-Stack", "Architecture", "Best Practices"],
    content: `
      <h2>What is Full-Stack Development?</h2>
      <p>Full-stack development involves working on both frontend and backend components of an application.</p>
      
      <h2>Essential Best Practices</h2>
      <h3>1. Architecture Planning</h3>
      <p>Plan your application architecture carefully before starting development.</p>
      
      <h3>2. Security Considerations</h3>
      <p>Always prioritize security in your development process.</p>
      
      <h3>3. Testing Strategy</h3>
      <p>Implement comprehensive testing at all levels of your application.</p>
      
      <h2>Deployment</h2>
      <p>Choose the right hosting platform and deployment strategy for your application.</p>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, you can build robust, scalable, and maintainable full-stack applications.</p>
    `
  },
  "react-hooks-guide": {
    title: "React Hooks: Deep Dive into State Management",
    author: "Alisina Sadat",
    date: "Feb 3, 2025",
    readTime: "9 min read",
    category: "React",
    tags: ["React", "Hooks", "State Management"],
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks allow you to use state and other React features in functional components.</p>
      
      <h2>Essential Hooks</h2>
      <h3>useState</h3>
      <p>The most fundamental hook for managing component state.</p>
      
      <h3>useEffect</h3>
      <p>Handle side effects in your functional components.</p>
      
      <h3>useContext</h3>
      <p>Access global state without prop drilling.</p>
      
      <h2>Custom Hooks</h2>
      <p>Create custom hooks to share stateful logic between components.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering React Hooks is essential for modern React development.</p>
    `
  },
  "database-design": {
    title: "Database Design for Scalable Applications",
    author: "Alisina Sadat",
    date: "Feb 1, 2025",
    readTime: "7 min read",
    category: "Database",
    tags: ["Database", "PostgreSQL", "Scaling"],
    content: `
      <h2>Why Database Design Matters</h2>
      <p>Proper database design is crucial for application performance and scalability.</p>
      
      <h2>Normalization and Data Integrity</h2>
      <p>Understand database normalization to ensure data consistency and integrity.</p>
      
      <h2>Indexing Strategy</h2>
      <p>Strategic indexing can dramatically improve query performance.</p>
      
      <h2>Scaling Considerations</h2>
      <p>Plan for growth from the beginning of your project.</p>
      
      <h2>Conclusion</h2>
      <p>Invest time in proper database design to build scalable applications.</p>
    `
  },
  "docker-guide": {
    title: "Docker and Containerization for Modern Development",
    author: "Alisina Sadat",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containerization"],
    content: `
      <h2>What is Docker?</h2>
      <p>Docker is a containerization platform that packages your application and its dependencies.</p>
      
      <h2>Getting Started with Docker</h2>
      <p>Learn the basics of Docker images, containers, and the Docker CLI.</p>
      
      <h2>Docker Compose</h2>
      <p>Manage multi-container applications with Docker Compose.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Keep images small and efficient</li>
        <li>Use official base images</li>
        <li>Implement health checks</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Docker is an essential tool for modern application development and deployment.</p>
    `
  }
}

export default function BlogDetail() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = blogContent[slug as keyof typeof blogContent]

  if (!post) {
    return (
      <PageWrapper>
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <Button asChild>
            <Link href="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="container relative z-10 px-4 py-12 md:py-20 mx-auto max-w-3xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link href="/blogs" className="flex items-center gap-2">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blogs
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-primary/10 text-primary">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <span className="text-sm">{post.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Article Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-primary/20 overflow-hidden">
              {/* Featured Image Area */}
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-b">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/30 mb-4">Article</div>
                  <p className="text-muted-foreground">{post.category}</p>
                </div>
              </div>

              {/* Article Content */}
              <CardContent className="p-8 md:p-12">
                <motion.div
                  className="prose prose-lg dark:prose-invert max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p>
                      This is a comprehensive article on {post.title.toLowerCase()}. The content is structured to provide both theoretical understanding and practical insights that you can apply in your projects.
                    </p>

                    <div>
                      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Deep understanding of core concepts</li>
                        <li>Practical implementation examples</li>
                        <li>Best practices and common pitfalls</li>
                        <li>Advanced techniques for optimization</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
                      <p className="text-muted-foreground">
                        Follow along with the examples and resources provided in this article. Each section builds upon the previous one, so make sure to understand the fundamentals before moving on to advanced topics.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                      <p className="text-muted-foreground">
                        By implementing the strategies and techniques discussed in this article, you'll be able to build better, more efficient applications. Remember that continuous learning and practice are key to mastery.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Article Footer */}
                <motion.div
                  className="mt-12 pt-8 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        AS
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Full-Stack Developer & Technical Writer</p>
                      </div>
                    </div>
                    <Button variant="outline" size="icon">
                      <Share2 size={18} />
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blogs">
                <Card className="h-full hover:border-primary/50 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-secondary/50">All Articles</Badge>
                    <h3 className="font-bold mb-2">Browse All Blog Posts</h3>
                    <p className="text-sm text-muted-foreground">Explore more articles on web development, design, and technology.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/contact">
                <Card className="h-full hover:border-primary/50 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-secondary/50">Discussion</Badge>
                    <h3 className="font-bold mb-2">Have Questions?</h3>
                    <p className="text-sm text-muted-foreground">Reach out to discuss this article or share your thoughts.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
