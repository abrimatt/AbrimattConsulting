"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarDays, Clock, Users, Building2 } from "lucide-react"

export function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    companySize: "",
    products: [] as string[],
    preferredDate: "",
    preferredTime: "",
    currentSystems: "",
    challenges: "",
    budget: "",
    timeline: "",
  })

  const products = [
    "SAP Business One",
    "SAP Business ByDesign",
    "SAP S/4HANA Public Cloud",
    "Microsoft Solutions",
    "Cybersecurity Solutions",
    "Cliq Restaurant Solution",
  ]

  const industries = [
    "Manufacturing",
    "Retail & Distribution",
    "Professional Services",
    "Healthcare",
    "Construction",
    "Food & Beverage",
    "Finance & Banking",
    "Education",
    "Government",
    "Other",
  ]

  const handleProductChange = (product: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      products: checked ? [...prev.products, product] : prev.products.filter((p) => p !== product),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-2">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-heading text-primary">Request Your Personalized Demo</CardTitle>
          <CardDescription className="text-lg">
            See our solutions in action with a customized demonstration tailored to your business needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Company Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, companySize: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
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

            {/* Products of Interest */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Products of Interest *</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {products.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <Checkbox
                      id={product}
                      checked={formData.products.includes(product)}
                      onCheckedChange={(checked) => handleProductChange(product, checked as boolean)}
                    />
                    <Label htmlFor={product} className="text-sm font-normal">
                      {product}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Preferences */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                Demo Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredTime: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentSystems">Current Systems/Software</Label>
                  <Textarea
                    id="currentSystems"
                    placeholder="Tell us about your current business systems..."
                    value={formData.currentSystems}
                    onChange={(e) => setFormData((prev) => ({ ...prev, currentSystems: e.target.value }))}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="challenges">Business Challenges</Label>
                  <Textarea
                    id="challenges"
                    placeholder="What challenges are you looking to solve?"
                    value={formData.challenges}
                    onChange={(e) => setFormData((prev) => ({ ...prev, challenges: e.target.value }))}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under ₦50,000</SelectItem>
                      <SelectItem value="50k-200k">₦50,000 - ₦200,000</SelectItem>
                      <SelectItem value="200k-500k">₦200,000 - ₦500,000</SelectItem>
                      <SelectItem value="500k-1m">₦500,000 - ₦1,000,000</SelectItem>
                      <SelectItem value="1m+">₦1,000,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Implementation Timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                      <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                      <SelectItem value="long">Long-term (6+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Clock className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                We'll contact you within 24 hours to schedule your personalized demo
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
