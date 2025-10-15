"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Ltd",
    content:
      "Abrimatt Consulting transformed our business operations with their SAP implementation. Their expertise and dedication to our success was evident throughout the entire project. We've seen a 40% increase in operational efficiency.",
    rating: 5,
    image: "/professional-woman-ceo.png",
  },
  {
    id: "2",
    name: "Michael Ochieng",
    role: "Operations Director",
    company: "East Africa Logistics",
    content:
      "The digital transformation strategy developed by Abrimatt has positioned us ahead of our competitors. Their team's deep understanding of both technology and business processes is unmatched in the region.",
    rating: 5,
    image: "/professional-man-director.jpg",
  },
  {
    id: "3",
    name: "Amina Hassan",
    role: "CFO",
    company: "Horizon Financial Services",
    content:
      "Working with Abrimatt on our financial systems integration was seamless. They delivered on time, within budget, and exceeded our expectations. The ROI has been remarkable.",
    rating: 5,
    image: "/professional-woman-cfo.png",
  },
]

export function TestimonialsSection() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abrimatt Consulting Ltd",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length,
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
      },
      reviewBody: testimonial.content,
    })),
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See what our clients say about their experience working with Abrimatt Consulting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
