import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import type { Insight } from "@/app/insights/page"

type InsightsGridProps = {
  insights: Insight[]
}

export function InsightsGrid({ insights }: InsightsGridProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Expert perspectives on the challenges and opportunities facing modern businesses.
          </p>
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
                    src={insight.featured_image || "/placeholder.svg"}
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
                        <span>{insight.author_name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(insight.published_at)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{insight.read_time} min</span>
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
