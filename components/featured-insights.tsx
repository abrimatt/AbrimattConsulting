"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Digital Transformation in 2025",
    excerpt:
      "Explore the emerging trends and technologies that will shape digital transformation strategies in the coming year.",
    category: "Digital Transformation",
    author: "Sarah Mitchell",
    date: "January 15, 2025",
    read_time: "8 min read",
    image: "/digital-transformation.png",
    slug: "digital-transformation-2025",
  },
  {
    id: 2,
    title: "Building Resilient Supply Chains: Lessons from Global Disruptions",
    excerpt: "How leading companies are reimagining their supply chain strategies to withstand future disruptions.",
    category: "Operations",
    author: "David Chen",
    date: "January 12, 2025",
    read_time: "6 min read",
    image: "/supply-chain-warehouse.png",
    slug: "supply-chain-resilience",
  },
]

export function FeaturedInsights() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Featured Insights</h2>
          <p className="text-lg text-muted-foreground">
            Our latest thinking on the trends and challenges shaping business today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden bg-slate-100">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">By {post.author}</div>
                    <Link href={`/insights/${post.slug}`}>
                      <Button variant="ghost" className="group-hover:bg-accent/10 text-accent p-2">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
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
