"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PageWrapper } from "../pageWrapper"
import { ChevronRight, ChevronLeft, Check, X } from "lucide-react"

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    relativeName: "",
    relativeRelation: "",
    relativePhone: "",
    relativeAddress: "",
    skills: [] as string[],
    skillInput: "",
    experience: "",
    bio: "",
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Form submitted successfully! Check console for details.")
  }

  const isStep1Valid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.address.trim() &&
    formData.city.trim() &&
    formData.country.trim()

  const isStep2Valid =
    formData.relativeName.trim() &&
    formData.relativeRelation.trim() &&
    formData.relativePhone.trim() &&
    formData.relativeAddress.trim()

  const isStep3Valid = formData.skills.length > 0 && formData.experience.trim() && formData.bio.trim()

  const canProceed = currentStep === 1 ? isStep1Valid : currentStep === 2 ? isStep2Valid : isStep3Valid

  const steps = [
    { number: 1, title: "Personal Info", description: "Your basic information" },
    { number: 2, title: "Relative Info", description: "Emergency contact details" },
    { number: 3, title: "Skills", description: "Your expertise & experience" },
  ]

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

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="container relative z-10 py-12 md:py-20 max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Build Your <span className="text-primary">Profile</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete your information step by step. Take your time to fill in accurate details.
            </p>
          </motion.div>

          {/* Step Indicators */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    currentStep === step.number
                      ? "bg-primary text-white border-primary shadow-lg"
                      : currentStep > step.number
                      ? "bg-primary/10 border-primary/50 text-foreground"
                      : "bg-card border-border text-muted-foreground"
                  }`}
                  onClick={() => currentStep > step.number && setCurrentStep(step.number)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        currentStep > step.number
                          ? "bg-white/20"
                          : currentStep === step.number
                          ? "bg-white/20"
                          : "bg-primary/20"
                      }`}>
                        {currentStep > step.number ? (
                          <Check size={16} />
                        ) : (
                          step.number
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{step.title}</p>
                        <p className={`text-xs ${currentStep === step.number ? "text-white/70" : "text-muted-foreground"}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur border-0 shadow-xl">
              <CardHeader className="pb-6 border-b border-border">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {currentStep === 1 && "Let us know who you are. We'll use this information to contact you."}
                    {currentStep === 2 && "Provide emergency contact information for verification purposes."}
                    {currentStep === 3 && "Share your technical skills and professional experience."}
                  </CardDescription>
                </motion.div>
              </CardHeader>

              <CardContent className="pt-8">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {/* Step 1: Personal Info */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <motion.div
                          className="grid md:grid-cols-2 gap-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="lastName" className="text-sm font-semibold">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
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
                            <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="+1 (555) 123-4567"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="md:col-span-2 space-y-2" variants={itemVariants}>
                            <Label htmlFor="address" className="text-sm font-semibold">Street Address</Label>
                            <Input
                              id="address"
                              name="address"
                              placeholder="123 Main Street"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="city" className="text-sm font-semibold">City</Label>
                            <Input
                              id="city"
                              name="city"
                              placeholder="New York"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="country" className="text-sm font-semibold">Country</Label>
                            <Input
                              id="country"
                              name="country"
                              placeholder="United States"
                              value={formData.country}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Step 2: Relative Info */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <motion.div
                          className="p-4 bg-primary/5 border border-primary/20 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Note:</span> This information will be kept confidential and used only for emergency purposes.
                          </p>
                        </motion.div>

                        <motion.div
                          className="grid md:grid-cols-2 gap-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="relativeName" className="text-sm font-semibold">Relative's Name</Label>
                            <Input
                              id="relativeName"
                              name="relativeName"
                              placeholder="Jane Doe"
                              value={formData.relativeName}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="relativeRelation" className="text-sm font-semibold">Relationship</Label>
                            <Input
                              id="relativeRelation"
                              name="relativeRelation"
                              placeholder="Sister"
                              value={formData.relativeRelation}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="relativePhone" className="text-sm font-semibold">Phone Number</Label>
                            <Input
                              id="relativePhone"
                              name="relativePhone"
                              placeholder="+1 (555) 123-4567"
                              value={formData.relativePhone}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>

                          <motion.div className="md:col-span-2 space-y-2" variants={itemVariants}>
                            <Label htmlFor="relativeAddress" className="text-sm font-semibold">Address</Label>
                            <Input
                              id="relativeAddress"
                              name="relativeAddress"
                              placeholder="456 Oak Avenue"
                              value={formData.relativeAddress}
                              onChange={handleInputChange}
                              className="rounded-lg border-border focus:border-primary"
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Step 3: Skills & Experience */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <motion.div
                          className="space-y-3"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div className="space-y-2" variants={itemVariants}>
                            <Label htmlFor="skillInput" className="text-sm font-semibold">Add Your Skills</Label>
                            <div className="flex gap-2">
                              <Input
                                id="skillInput"
                                name="skillInput"
                                placeholder="e.g., React, TypeScript, Node.js"
                                value={formData.skillInput}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                className="rounded-lg border-border focus:border-primary"
                              />
                              <Button
                                type="button"
                                onClick={addSkill}
                                className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                              >
                                Add
                              </Button>
                            </div>
                          </motion.div>

                          {/* Skills Display */}
                          {formData.skills.length > 0 && (
                            <motion.div
                              className="space-y-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <p className="text-sm font-medium text-foreground">Your Skills ({formData.skills.length})</p>
                              <div className="flex flex-wrap gap-2">
                                {formData.skills.map((skill, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    <Badge className="bg-primary/10 text-primary border border-primary/20 py-1.5 px-3 flex items-center gap-2 hover:bg-primary/20 cursor-pointer transition-colors"
                                      onClick={() => removeSkill(index)}
                                    >
                                      {skill}
                                      <X size={14} className="ml-1" />
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>

                        <motion.div className="space-y-2" variants={itemVariants}>
                          <Label htmlFor="experience" className="text-sm font-semibold">Years of Experience</Label>
                          <Input
                            id="experience"
                            name="experience"
                            type="number"
                            placeholder="5"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="rounded-lg border-border focus:border-primary"
                          />
                        </motion.div>

                        <motion.div className="space-y-2" variants={itemVariants}>
                          <Label htmlFor="bio" className="text-sm font-semibold">Professional Bio</Label>
                          <Textarea
                            id="bio"
                            name="bio"
                            placeholder="Tell us about your professional background, achievements, and what you're passionate about..."
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={5}
                            className="rounded-lg border-border focus:border-primary resize-none"
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <motion.div
                    className="flex gap-4 mt-10 pt-8 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="button"
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                      variant="outline"
                      className="flex items-center gap-2 rounded-lg hover:border-primary"
                    >
                      <ChevronLeft size={18} />
                      Previous
                    </Button>

                    <div className="flex-1" />

                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!canProceed}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg disabled:opacity-50"
                      >
                        Next
                        <ChevronRight size={18} />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!canProceed}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg disabled:opacity-50"
                      >
                        <Check size={18} />
                        Submit
                      </Button>
                    )}
                  </motion.div>

                  {/* Progress Bar */}
                  <motion.div className="mt-6 w-full bg-border rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-primary h-full"
                      initial={{ width: "33%" }}
                      animate={{ width: `${(currentStep / 3) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              {
                icon: "🔒",
                title: "Secure",
                description: "Your data is encrypted and secure.",
              },
              {
                icon: "⚡",
                title: "Fast",
                description: "Quick and easy form completion.",
              },
              {
                icon: "✓",
                title: "Verified",
                description: "Information validated at each step.",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl mb-2">{info.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
