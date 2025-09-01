import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesOverview } from "@/components/services-overview"
import { IndustriesSection } from "@/components/industries-section"
import { CompanyValues } from "@/components/company-values"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSlider />
        <ServicesOverview />
        <IndustriesSection />
        <CompanyValues />
      </main>
      <Footer />
    </div>
  )
}
