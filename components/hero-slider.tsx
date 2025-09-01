"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Next-Generation IT Solutions",
    subtitle: "Accelerate Digital Transformation with Enterprise Technology",
    description:
      "Deploy cutting-edge SAP ecosystems, advanced cybersecurity frameworks, and scalable cloud infrastructure to drive operational excellence.",
    cta: "Schedule Consultation",
    ctaLink: "/consultation",
    image: "/corporate-team-meeting-dark.png",
  },
  {
    id: 2,
    title: "Enterprise SAP Architecture",
    subtitle: "S/4HANA | Business ByDesign | Business One",
    description:
      "Implement intelligent ERP solutions with real-time analytics, AI-driven insights, and seamless integration across your technology stack.",
    cta: "Explore Solutions",
    ctaLink: "/products",
    image: "/sap-dashboard-corporate.png",
  },
  {
    id: 3,
    title: "Zero-Trust Security Framework",
    subtitle: "Fortinet | Sophos | Cisco Firepower Integration",
    description:
      "Deploy multi-layered cybersecurity architecture with advanced threat detection, network segmentation, and automated incident response.",
    cta: "Security Assessment",
    ctaLink: "/products/cybersecurity-solutions",
    image: "/cybersecurity-corporate-dark.png",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000) // reverted slider timing from 15000ms to 10000ms (10 seconds)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4 text-balance">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">{slide.subtitle}</h2>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">{slide.description}</p>
                <Link href={slide.ctaLink}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
