"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User, Loader2 } from "lucide-react"
import { apiService, type BlogPost } from "@/lib/api"
import Link from "next/link"

const fallbackInsights = [
  {
    id: 1,
    title: "Strategic Planning in Uncertain Times: A Framework for Success",
    excerpt:
      "Discover how to build robust strategies that can adapt to changing market conditions and unexpected challenges.",
    category: "Strategy",
    author: "Emma Rodriguez",
    date: "January 10, 2025",
    read_time: "5 min read",
    image: "/strategic-planning-framework.png",
    slug: "strategic-planning-framework",
    created_at: "2025-01-10",
    updated_at: "2025-01-10",
  },
  {
    id: 2,
    title: "The ROI of Change Management: Measuring Transformation Success",
    excerpt: "Learn how to quantify the impact of change management initiatives and demonstrate value to stakeholders.",
    category: "Leadership",
    author: "James Thompson",
    date: "January 8, 2025",
    read_time: "7 min read",
    image: "/change-management-roi.png",
    slug: "roi-change-management",
    created_at: "2025-01-08",
    updated_at: "2025-01-08",
  },
  {
    id: 3,
    title: "Financial Modeling for Growth: Best Practices and Common Pitfalls",
    excerpt: "Essential techniques for creating accurate financial models that support strategic decision-making.",
    category: "Finance",
    author: "Lisa Park",
    date: "January 5, 2025",
    read_time: "6 min read",
    image: "/financial-modeling-growth.png",
    slug: "financial-modeling-growth",
    created_at: "2025-01-05",
    updated_at: "2025-01-05",
  },
  {
    id: 4,
    title: "Operational Excellence: Streamlining Processes for Maximum Efficiency",
    excerpt:
      "Proven methodologies for identifying bottlenecks and optimizing business processes across your organization.",
    category: "Operations",
    author: "Michael Brown",
    date: "January 3, 2025",
    read_time: "8 min read",
    image: "/operational-excellence.png",
    slug: "operational-excellence",
    created_at: "2025-01-03",
    updated_at: "2025-01-03",
  },
  {
    id: 5,
    title: "Leadership in the Digital Age: Skills for Tomorrow's Executives",
    excerpt: "Essential leadership competencies for navigating digital transformation and leading remote teams.",
    category: "Leadership",
    author: "Sarah Mitchell",
    date: "December 28, 2024",
    read_time: "5 min read",
    image: "/digital-leadership.png",
    slug: "digital-leadership",
    created_at: "2024-12-28",
    updated_at: "2024-12-28",
  },
  {
    id: 6,
    title: "Data-Driven Decision Making: From Analytics to Action",
    excerpt: "How to build a data-driven culture and translate insights into strategic business decisions.",
    category: "Strategy",
    author: "David Chen",
    date: "December 25, 2024",
    read_time: "9 min read",
    image: "/data-driven-decisions.png",
    slug: "data-driven-decisions",
    created_at: "2024-12-25",
    updated_at: "2024-12-25",
  },
]

export function InsightsGrid() {
  const [insights, setInsights] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await apiService.getBlogPosts(1, 6)
        setInsights(response.data)
      } catch (err) {
        console.error("Failed to fetch blog posts:", err)
        setError("Failed to load blog posts")
        setInsights(fallbackInsights)
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">
              Expert perspectives on the challenges and opportunities facing modern businesses.
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading insights...</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Expert perspectives on the challenges and opportunities facing modern businesses.
          </p>
          {error && (
            <p className="text-sm text-amber-600 mt-2">
              Currently showing cached content. Please check your connection.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              className="group hover:shadow-lg transition-all duration-300 bg-background border-border"
            >
              <CardContent className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden bg-slate-100">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {insight.category}
                  </Badge>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{insight.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{insight.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{insight.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{insight.read_time}</span>
                    </div>
                  </div>
                  <Link href={`/insights/${insight.slug}`}>
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10 text-accent">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/insights/all">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Insights
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
