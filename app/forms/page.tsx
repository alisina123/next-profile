"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PageWrapper } from "../pageWrapper"
import { Plus, X, Send } from "lucide-react"

export default function DynamicForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
    skills: [] as string[],
    skillInput: "",
    experience: [] as Array<{ title: string; description: string }>,
    experienceTitle: "",
    experienceDesc: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addSkill = () => {
    if (formData.skillInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, formData.skillInput.trim()],
        skillInput: "",
      }))
    }
  }

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addExperience = () => {
    if (formData.experienceTitle.trim() && formData.experienceDesc.trim()) {
      setFormData((prev) => ({
        ...prev,
        experience: [
          ...prev.experience,
          {
            title: formData.experienceTitle.trim(),
            description: formData.experienceDesc.trim(),
          },
        ],
        experienceTitle: "",
        experienceDesc: "",
      }))
    }
  }

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }))
  }

  const handleKeyPress = (e: React.KeyboardEvent, type: "skill" | "experience") => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (type === "skill") {
        addSkill()
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    alert("Profile submitted! Check console for details.")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="container relative z-10 py-12 md:py-20 max-w-3xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Create Your <span className="text-primary">Profile</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Add your personal information, skills, and experience dynamically.
            </p>
          </motion.div>

          {/* Main Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur border-0 shadow-xl">
              <CardHeader className="pb-6 border-b border-border">
                <CardTitle className="text-2xl">Profile Information</CardTitle>
                <CardDescription>Fill in your details and add skills dynamically</CardDescription>
              </CardHeader>

              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info Section */}
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="fullName" className="text-sm font-semibold">
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="rounded-lg border-border focus:border-primary"
                        />
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="email" className="text-sm font-semibold">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="rounded-lg border-border focus:border-primary"
                        />
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="phone" className="text-sm font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="rounded-lg border-border focus:border-primary"
                        />
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="bio" className="text-sm font-semibold">
                          Bio
                        </Label>
                        <Input
                          id="bio"
                          name="bio"
                          placeholder="A short bio about yourself"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="rounded-lg border-border focus:border-primary"
                        />
                      </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border pt-8">
                      <h3 className="text-lg font-bold text-foreground mb-6">Add Your Skills</h3>

                      <motion.div className="space-y-4" variants={itemVariants}>
                        <div className="flex gap-2">
                          <Input
                            name="skillInput"
                            placeholder="e.g., React, TypeScript, Node.js"
                            value={formData.skillInput}
                            onChange={handleInputChange}
                            onKeyPress={(e) => handleKeyPress(e, "skill")}
                            className="rounded-lg border-border focus:border-primary"
                          />
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              type="button"
                              onClick={addSkill}
                              className="bg-primary hover:bg-primary/90 text-white rounded-lg whitespace-nowrap"
                            >
                              <Plus size={18} className="mr-1" /> Add Skill
                            </Button>
                          </motion.div>
                        </div>

                        {/* Skills Display */}
                        {formData.skills.length > 0 && (
                          <motion.div className="flex flex-wrap gap-2 pt-2">
                            {formData.skills.map((skill, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <Badge className="bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-primary/90">
                                  {skill}
                                  <motion.button
                                    type="button"
                                    onClick={() => removeSkill(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <X size={14} />
                                  </motion.button>
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Experience Section */}
                    <div className="border-t border-border pt-8">
                      <h3 className="text-lg font-bold text-foreground mb-6">Add Experience</h3>

                      <motion.div className="space-y-4" variants={itemVariants}>
                        <div className="space-y-3">
                          <Input
                            name="experienceTitle"
                            placeholder="Job Title (e.g., Full Stack Developer)"
                            value={formData.experienceTitle}
                            onChange={handleInputChange}
                            className="rounded-lg border-border focus:border-primary"
                          />
                          <Textarea
                            name="experienceDesc"
                            placeholder="Describe your role and responsibilities..."
                            value={formData.experienceDesc}
                            onChange={handleInputChange}
                            className="rounded-lg border-border focus:border-primary min-h-24"
                          />
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              type="button"
                              onClick={addExperience}
                              className="bg-primary hover:bg-primary/90 text-white rounded-lg w-full"
                            >
                              <Plus size={18} className="mr-2" /> Add Experience
                            </Button>
                          </motion.div>
                        </div>

                        {/* Experience Display */}
                        {formData.experience.length > 0 && (
                          <motion.div className="space-y-3 pt-4">
                            {formData.experience.map((exp, index) => (
                              <motion.div
                                key={index}
                                className="p-4 bg-primary/5 border border-primary/20 rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                                  </div>
                                  <motion.button
                                    type="button"
                                    onClick={() => removeExperience(index)}
                                    className="ml-3 p-1 hover:bg-primary/20 rounded-lg transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <X size={18} className="text-primary" />
                                  </motion.button>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="flex gap-3 pt-6 border-t border-border"
                    variants={itemVariants}
                  >
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-6 text-lg font-semibold"
                      >
                        <Send size={20} className="mr-2" /> Submit Profile
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Info Section */}
                  <motion.div
                    className="p-4 bg-green-50 border border-green-200 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-green-800">
                      <span className="font-semibold">Ready to submit?</span> Your profile will be saved securely when you click submit.
                    </p>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
