"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", { email, interests })
    setIsSubscribed(true)
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest])
    } else {
      setInterests(interests.filter((i) => i !== interest))
    }
  }

  const interestOptions = [
    "Strategic Planning",
    "Digital Transformation",
    "Leadership Development",
    "Financial Advisory",
    "Operations Excellence",
    "Change Management",
  ]

  if (isSubscribed) {
    return (
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border-accent/20">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-primary">Welcome to Our Community!</h3>
                <p className="text-muted-foreground">
                  Thank you for subscribing. You'll receive our latest insights and resources directly in your inbox.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsSubscribed(false)}
                className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-background border-accent/20">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-primary mb-4">Stay Informed</h2>
              <p className="text-lg text-muted-foreground">
                Get the latest business insights, industry trends, and exclusive resources delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-primary">What interests you most?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <label htmlFor={interest} className="text-sm text-muted-foreground cursor-pointer">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">Weekly</div>
                    <div className="text-sm text-muted-foreground">Industry Insights</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">Monthly</div>
                    <div className="text-sm text-muted-foreground">Resource Roundup</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">Exclusive</div>
                    <div className="text-sm text-muted-foreground">Subscriber Content</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
