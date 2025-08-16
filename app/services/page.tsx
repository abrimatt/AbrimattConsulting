import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServiceProcess />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  )
}
