"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Building2, Phone, Mail } from "lucide-react"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    businessChallenges: "",
    currentSystems: "",
    teamSize: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Consultation scheduled:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Schedule Your Free Consultation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a 30-minute consultation with our IT experts to discuss your business needs and discover how we can
            help optimize your operations.
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-primary flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Consultation Details
            </CardTitle>
            <p className="text-muted-foreground">
              Fill out the form below and we'll contact you within 24 hours to confirm your appointment.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Business Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Consultation Preferences */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Consultation Preferences
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="consultationType">Consultation Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("consultationType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sap-business-one">SAP Business One Implementation</SelectItem>
                      <SelectItem value="sap-bydesign">SAP Business ByDesign</SelectItem>
                      <SelectItem value="sap-s4hana">SAP S/4HANA Public Cloud</SelectItem>
                      <SelectItem value="microsoft-solutions">Microsoft 365 & Dynamics</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity Solutions</SelectItem>
                      <SelectItem value="restaurant-pos">Restaurant POS System</SelectItem>
                      <SelectItem value="general-it">General IT Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am-11am">9:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11am-1pm">11:00 AM - 1:00 PM</SelectItem>
                        <SelectItem value="1pm-3pm">1:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm-5pm">3:00 PM - 5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Business Challenges */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessChallenges">Current Business Challenges *</Label>
                  <Textarea
                    id="businessChallenges"
                    rows={3}
                    placeholder="Describe the main challenges your business is facing..."
                    value={formData.businessChallenges}
                    onChange={(e) => handleInputChange("businessChallenges", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentSystems">Current Systems & Software</Label>
                  <Textarea
                    id="currentSystems"
                    rows={2}
                    placeholder="Tell us about your current IT systems, software, and tools..."
                    value={formData.currentSystems}
                    onChange={(e) => handleInputChange("currentSystems", e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Free Consultation
              </Button>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">What to Expect:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 30-minute consultation with our IT experts</li>
                  <li>• Assessment of your current business processes</li>
                  <li>• Tailored recommendations for your specific needs</li>
                  <li>• No obligation - completely free consultation</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours to confirm
                your consultation.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
