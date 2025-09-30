import { createClient } from "@/lib/supabase/server"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()

  const { data: insight } = await supabase
    .from("insights")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .single()

  if (!insight) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/insights">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Insights
              </Button>
            </Link>

            <div className="mb-8">
              <Badge className="mb-4 bg-accent/10 text-accent">{insight.category}</Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary mb-6 text-balance">
                {insight.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty">{insight.excerpt}</p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{insight.author_name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(insight.published_at)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{insight.read_time} min read</span>
                </div>
              </div>
            </div>

            {insight.featured_image && (
              <div className="aspect-video rounded-lg overflow-hidden mb-12">
                <img
                  src={insight.featured_image || "/placeholder.svg"}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {insight.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
