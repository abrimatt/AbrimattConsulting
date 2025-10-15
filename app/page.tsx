import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesOverview } from "@/components/services-overview"
import { IndustriesSection } from "@/components/industries-section"
import { CompanyValues } from "@/components/company-values"
import { Footer } from "@/components/footer"
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo"
import type { Metadata } from "next"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientLogos } from "@/components/client-logos"
import { StatsBanner } from "@/components/stats-banner"

export const metadata: Metadata = generateSEOMetadata({
  title: "Expert Business Consulting & Enterprise Solutions",
  description:
    "Transform your business with Abrimatt Consulting Ltd. Specializing in SAP implementation, digital transformation, cybersecurity, and enterprise technology solutions across East Africa.",
  keywords: [
    "business consulting",
    "SAP consulting",
    "digital transformation",
    "enterprise solutions",
    "IT consulting Kenya",
    "business process optimization",
    "ERP implementation",
    "cybersecurity solutions",
  ],
  canonical: "/",
})

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Navigation />
      <main>
        <HeroSlider />
        <ClientLogos />
        <ServicesOverview />
        <StatsBanner />
        <IndustriesSection />
        <TestimonialsSection />
        <CompanyValues />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
