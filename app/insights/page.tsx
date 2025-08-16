import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InsightsHero } from "@/components/insights-hero"
import { FeaturedInsights } from "@/components/featured-insights"
import { InsightsGrid } from "@/components/insights-grid"
import { ResourcesSection } from "@/components/resources-section"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <InsightsHero />
        <FeaturedInsights />
        <InsightsGrid />
        <ResourcesSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
