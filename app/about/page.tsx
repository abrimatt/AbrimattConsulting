import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { CompanyValues } from "@/components/company-values"
import { BusinessExpertise } from "@/components/business-expertise"
import { CompanyStats } from "@/components/company-stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyStory />
        <CompanyValues />
        <BusinessExpertise />
        <CompanyStats />
      </main>
      <Footer />
    </div>
  )
}
