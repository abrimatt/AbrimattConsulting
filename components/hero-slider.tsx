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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2397.jpg-8moug0doQ5COA57IFxnTUSL7NYi2ue.jpeg",
  },
  {
    id: 2,
    title: "Smart Warehouse & Logistics Solutions",
    subtitle: "Automated Inventory Management | Real-Time Tracking",
    description:
      "Optimize supply chain operations with intelligent barcode systems, IoT sensors, and predictive analytics for seamless warehouse management.",
    cta: "Explore Solutions",
    ctaLink: "/products",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/warehouse-smiling-colleagues-scanning-cardboard-box-barcode-chatting%20-%20Copy.jpg-75r0yLfBNE3qhbnTs8DJE2zjfRokRa.jpeg",
  },
  {
    id: 3,
    title: "Enterprise Architecture Excellence",
    subtitle: "Scalable Infrastructure | Cloud-Native Solutions",
    description:
      "Build robust enterprise foundations with modern architectural patterns, microservices, and cloud-first strategies for sustainable growth.",
    cta: "View Architecture",
    ctaLink: "/products",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/low-angle-view-skyscrapers.jpg-uiiEdPpQJr3rqpJeBGsDTrYo41YcfI.jpeg",
  },
  {
    id: 4,
    title: "Strategic IT Consulting",
    subtitle: "Digital Strategy | Technology Leadership | Innovation",
    description:
      "Partner with our expert consultants to develop comprehensive IT strategies, optimize business processes, and accelerate digital innovation.",
    cta: "Start Consultation",
    ctaLink: "/contact",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-2.jpg-zZ241GWEdLOMhRMplY0OoxRPQxfU0n.jpeg",
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
