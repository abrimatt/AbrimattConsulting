"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Loader2, CheckCircle } from "lucide-react"
import { createBrowserClient } from "@/lib/supabase/client"

export function NewsletterFooter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const supabase = createBrowserClient()

      const { error: insertError } = await supabase.from("newsletter_subscribers").insert({
        email,
        source: "footer",
        status: "active",
      })

      if (insertError) {
        if (insertError.code === "23505") {
          setError("Already subscribed!")
        } else {
          throw insertError
        }
      } else {
        setIsSuccess(true)
        setEmail("")
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (err) {
      console.error("Newsletter signup error:", err)
      setError("Failed to subscribe")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="border-b border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-foreground/10 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest insights and updates delivered to your inbox
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[280px]"
              disabled={isLoading || isSuccess}
            />
            <Button type="submit" variant="secondary" disabled={isLoading || isSuccess} className="whitespace-nowrap">
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : isSuccess ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
        {error && <p className="text-sm text-destructive-foreground mt-2 text-center md:text-right">{error}</p>}
      </div>
    </div>
  )
}
