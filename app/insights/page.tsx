import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InsightsHero } from "@/components/insights-hero"
import { FeaturedInsights } from "@/components/featured-insights"
import { InsightsGrid } from "@/components/insights-grid"
import { ResourcesSection } from "@/components/resources-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { createClient } from "@/lib/supabase/server"

export const revalidate = 60 // Revalidate every 60 seconds

export type Insight = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string | null
  category: string
  author_name: string
  author_avatar: string | null
  published_at: string
  is_featured: boolean
  read_time: number
  status: string
}

export default async function InsightsPage() {
  const supabase = await createClient()

  const { data: featuredInsights } = await supabase
    .from("insights")
    .select("*")
    .eq("status", "published")
    .eq("is_featured", true)
    .order("published_at", { ascending: false })
    .limit(2)

  const { data: allInsights } = await supabase
    .from("insights")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(6)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <InsightsHero />
        <FeaturedInsights insights={featuredInsights || []} />
        <InsightsGrid insights={allInsights || []} />
        <ResourcesSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
