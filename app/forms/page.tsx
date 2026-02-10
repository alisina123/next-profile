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
import { ChevronRight, ChevronLeft, Check } from "lucide-react"

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    // Relative Info
    relativeName: "",
    relativeRelation: "",
    relativePhone: "",
    relativeAddress: "",
    // Skills
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
    // Here you would typically send the data to a backend
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

  return (
    <PageWrapper>
      <div className="container py-12 md:py-16 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Complete Your <span className="text-primary">Profile</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill out your information in simple steps. It only takes a few minutes.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Step {currentStep} of 3
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((currentStep / 3) * 100)}% Complete
            </span>
          </div>
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/80"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mt-6">
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: step * 0.1 }}
              >
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all ${
                    step < currentStep
                      ? "bg-primary text-white"
                      : step === currentStep
                        ? "bg-primary text-white border-2 border-primary/50"
                        : "bg-border text-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step < currentStep ? (
                    <Check size={20} />
                  ) : (
                    step
                  )}
                </motion.div>
                <span className="text-xs font-medium text-foreground">
                  {step === 1 ? "Personal" : step === 2 ? "Relative" : "Skills"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border border-border shadow-lg">
              <CardHeader className="border-b border-border bg-white">
                <CardTitle>
                  {currentStep === 1
                    ? "Personal Information"
                    : currentStep === 2
                      ? "Relative Information"
                      : "Skills & Experience"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1
                    ? "Tell us about yourself"
                    : currentStep === 2
                      ? "Emergency contact information"
                      : "Share your professional skills"}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main Street"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="New York"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="border border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            name="country"
                            placeholder="United States"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="border border-border focus:border-primary"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Relative Information */}
                  {currentStep === 2 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="relativeName">Relative's Name *</Label>
                        <Input
                          id="relativeName"
                          name="relativeName"
                          placeholder="e.g., Jane Doe"
                          value={formData.relativeName}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="relativeRelation">Relationship *</Label>
                        <Input
                          id="relativeRelation"
                          name="relativeRelation"
                          placeholder="e.g., Mother, Father, Sibling"
                          value={formData.relativeRelation}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="relativePhone">Phone Number *</Label>
                        <Input
                          id="relativePhone"
                          name="relativePhone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.relativePhone}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="relativeAddress">Address *</Label>
                        <Input
                          id="relativeAddress"
                          name="relativeAddress"
                          placeholder="Street address"
                          value={formData.relativeAddress}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-sm text-foreground">
                          This information is used for emergency contact purposes and will be kept confidential.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Skills & Experience */}
                  {currentStep === 3 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="space-y-3">
                        <Label>Skills *</Label>
                        <div className="flex gap-2">
                          <Input
                            name="skillInput"
                            placeholder="e.g., React, JavaScript, Design"
                            value={formData.skillInput}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault()
                                addSkill()
                              }
                            }}
                            className="border border-border focus:border-primary"
                          />
                          <Button
                            type="button"
                            onClick={addSkill}
                            className="bg-primary hover:bg-primary/90 text-white"
                          >
                            Add
                          </Button>
                        </div>

                        {formData.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {formData.skills.map((skill, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <Badge
                                  className="bg-primary text-white cursor-pointer hover:bg-primary/90 px-3 py-1"
                                  onClick={() => removeSkill(index)}
                                >
                                  {skill} ✕
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input
                          id="experience"
                          name="experience"
                          placeholder="e.g., 5 years"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="border border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio *</Label>
                        <Textarea
                          id="bio"
                          name="bio"
                          placeholder="Tell us about your professional background and expertise..."
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="min-h-[120px] border border-border focus:border-primary"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <motion.div
                    className="flex justify-between gap-4 pt-6 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft size={18} />
                      Previous
                    </Button>

                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!canProceed}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
                      >
                        Next
                        <ChevronRight size={18} />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!canProceed}
                        className="bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
                      >
                        Submit Form
                      </Button>
                    )}
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Form Summary (Optional) */}
        <motion.div
          className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-foreground">
            <span className="font-medium">💡 Tip:</span> All fields marked with * are required. You can go back to previous steps to edit your information.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
