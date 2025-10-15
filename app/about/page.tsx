import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { CompanyValues } from "@/components/company-values"
import { BusinessExpertise } from "@/components/business-expertise"
import { CompanyStats } from "@/components/company-stats"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Leading Business Consulting Firm in East Africa",
  description:
    "Learn about Abrimatt Consulting Ltd's journey since 2019. We deliver innovative business solutions, SAP expertise, and digital transformation services to enterprises across Kenya and East Africa.",
  keywords: [
    "about Abrimatt",
    "consulting firm Kenya",
    "business consulting company",
    "SAP partner East Africa",
    "enterprise consulting",
  ],
  canonical: "/about",
})

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
