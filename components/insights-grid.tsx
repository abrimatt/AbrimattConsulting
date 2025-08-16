import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const insights = [
  {
    title: "Strategic Planning in Uncertain Times: A Framework for Success",
    excerpt:
      "Discover how to build robust strategies that can adapt to changing market conditions and unexpected challenges.",
    category: "Strategy",
    author: "Emma Rodriguez",
    date: "January 10, 2025",
    readTime: "5 min read",
    image: "/strategic-planning-framework.png",
  },
  {
    title: "The ROI of Change Management: Measuring Transformation Success",
    excerpt: "Learn how to quantify the impact of change management initiatives and demonstrate value to stakeholders.",
    category: "Leadership",
    author: "James Thompson",
    date: "January 8, 2025",
    readTime: "7 min read",
    image: "/change-management-roi.png",
  },
  {
    title: "Financial Modeling for Growth: Best Practices and Common Pitfalls",
    excerpt: "Essential techniques for creating accurate financial models that support strategic decision-making.",
    category: "Finance",
    author: "Lisa Park",
    date: "January 5, 2025",
    readTime: "6 min read",
    image: "/financial-modeling-growth.png",
  },
  {
    title: "Operational Excellence: Streamlining Processes for Maximum Efficiency",
    excerpt:
      "Proven methodologies for identifying bottlenecks and optimizing business processes across your organization.",
    category: "Operations",
    author: "Michael Brown",
    date: "January 3, 2025",
    readTime: "8 min read",
    image: "/operational-excellence.png",
  },
  {
    title: "Leadership in the Digital Age: Skills for Tomorrow's Executives",
    excerpt: "Essential leadership competencies for navigating digital transformation and leading remote teams.",
    category: "Leadership",
    author: "Sarah Mitchell",
    date: "December 28, 2024",
    readTime: "5 min read",
    image: "/digital-leadership.png",
  },
  {
    title: "Data-Driven Decision Making: From Analytics to Action",
    excerpt: "How to build a data-driven culture and translate insights into strategic business decisions.",
    category: "Strategy",
    author: "David Chen",
    date: "December 25, 2024",
    readTime: "9 min read",
    image: "/data-driven-decisions.png",
  },
]

export function InsightsGrid() {
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
              key={insight.title}
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
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10 text-accent">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  )
}
