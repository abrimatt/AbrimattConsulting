import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Download } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Article Header */}
        <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/insights"
              className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>

            <div className="space-y-6">
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Strategy
              </Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary leading-tight">
                Strategic Planning in Uncertain Times: A Framework for Success
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how to build robust strategies that can adapt to changing market conditions and unexpected
                challenges while maintaining focus on long-term objectives.
              </p>

              <div className="flex items-center justify-between py-6 border-t border-b">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Emma Rodriguez</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>January 10, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-100 mb-8">
                <img
                  src="/strategic-planning-framework-diagram.png"
                  alt="Strategic Planning Framework"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In today's rapidly evolving business landscape, traditional strategic planning approaches often fall
                  short. Organizations need frameworks that can withstand uncertainty while providing clear direction
                  for growth and adaptation.
                </p>

                <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
                  The Challenge of Modern Strategic Planning
                </h2>

                <p>
                  The pace of change in modern business has accelerated dramatically. Market disruptions, technological
                  advances, and global events can quickly render traditional five-year plans obsolete. Organizations
                  need strategic frameworks that are both robust and flexible.
                </p>

                <Card className="my-8 bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-3">Key Insight</h3>
                    <p className="text-muted-foreground">
                      "The most successful organizations don't just plan for the future—they build the capability to
                      adapt their plans as the future unfolds."
                    </p>
                  </CardContent>
                </Card>

                <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
                  A Framework for Adaptive Strategy
                </h2>

                <p>Our recommended framework consists of four key components:</p>

                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <strong>Core Purpose Definition:</strong> Establish unchanging organizational purpose and values
                    that guide all decisions
                  </li>
                  <li>
                    <strong>Scenario Planning:</strong> Develop multiple future scenarios and corresponding strategic
                    responses
                  </li>
                  <li>
                    <strong>Agile Execution:</strong> Implement strategies in short cycles with regular review and
                    adjustment points
                  </li>
                  <li>
                    <strong>Continuous Monitoring:</strong> Establish early warning systems to detect changes in market
                    conditions
                  </li>
                </ol>

                <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">
                  Implementation Best Practices
                </h2>

                <p>
                  Successful implementation requires commitment from leadership and buy-in across the organization. Here
                  are the key practices we've observed in successful transformations:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Start with a clear communication strategy</li>
                  <li>Invest in change management capabilities</li>
                  <li>Create cross-functional planning teams</li>
                  <li>Establish regular review cycles</li>
                  <li>Build scenario planning into quarterly reviews</li>
                </ul>

                <Card className="my-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="font-heading font-semibold text-lg text-primary">
                      Download Our Strategic Planning Toolkit
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get our comprehensive guide with templates and frameworks for implementing adaptive strategic
                      planning.
                    </p>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Download className="mr-2 h-4 w-4" />
                      Download Free Toolkit
                    </Button>
                  </CardContent>
                </Card>

                <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">Conclusion</h2>

                <p>
                  Strategic planning in uncertain times requires a fundamental shift from rigid long-term plans to
                  adaptive frameworks that can evolve with changing conditions. Organizations that master this approach
                  will be better positioned to thrive regardless of what the future brings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-primary mb-8">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Building Resilient Organizations",
                  category: "Strategy",
                  readTime: "6 min read",
                },
                {
                  title: "Change Management Best Practices",
                  category: "Leadership",
                  readTime: "4 min read",
                },
                {
                  title: "Digital Strategy Framework",
                  category: "Digital",
                  readTime: "7 min read",
                },
              ].map((article) => (
                <Card key={article.title} className="hover:shadow-md transition-shadow bg-background">
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {article.category}
                    </Badge>
                    <h3 className="font-heading font-semibold text-primary">{article.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
