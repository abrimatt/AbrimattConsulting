"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Empowering Business Excellence",
    subtitle: "Transform Your Operations with Expert IT Consulting",
    description: "Comprehensive SAP solutions, cybersecurity, and custom development services for growing businesses.",
    cta: "Get Started",
    ctaLink: "/consultation",
    image: "/corporate-team-meeting-dark.png",
  },
  {
    id: 2,
    title: "SAP Solutions That Scale",
    subtitle: "From Business One to S/4HANA Public Cloud",
    description: "Streamline your operations with industry-leading ERP solutions tailored for your business needs.",
    cta: "Explore Products",
    ctaLink: "/products",
    image: "/sap-dashboard-corporate.png",
  },
  {
    id: 3,
    title: "Secure Your Digital Future",
    subtitle: "Advanced Cybersecurity Solutions",
    description: "Protect your business with Fortinet, Sophos, and Cisco Firepower security solutions.",
    cta: "Learn More",
    ctaLink: "/products/cybersecurity-solutions",
    image: "/cybersecurity-corporate-dark.png",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4">{slide.title}</h1>
                <h2 className="text-xl md:text-2xl text-gray-200 mb-6">{slide.subtitle}</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl">{slide.description}</p>
                <Link href={slide.ctaLink}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
