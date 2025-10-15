import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Business Consulting Services - Digital Transformation & IT Solutions",
  description:
    "Comprehensive business consulting services including digital transformation, SAP implementation, process optimization, financial advisory, and custom application development.",
  keywords: [
    "business consulting services",
    "digital transformation",
    "SAP implementation",
    "process optimization",
    "IT consulting",
    "business analysis",
    "change management",
  ],
  canonical: "/services",
})

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Digital Transformation",
        description: "Transform your business with cutting-edge digital solutions",
        provider: {
          "@type": "Organization",
          name: "Abrimatt Consulting Ltd",
        },
      },
      {
        "@type": "Service",
        name: "SAP Implementation",
        description: "Expert SAP Business One, ByDesign, and S/4HANA implementation",
        provider: {
          "@type": "Organization",
          name: "Abrimatt Consulting Ltd",
        },
      },
      {
        "@type": "Service",
        name: "Process Optimization",
        description: "Streamline operations and maximize efficiency",
        provider: {
          "@type": "Organization",
          name: "Abrimatt Consulting Ltd",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
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
