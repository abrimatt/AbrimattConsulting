import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactCTA } from "@/components/contact-cta"
import { ContactFAQ } from "@/components/contact-faq"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Get Expert Business Consulting Support",
  description:
    "Contact Abrimatt Consulting Ltd for expert business consulting, SAP implementation, and IT solutions. Located in Nairobi, Kenya. Call +254-712-345-678 or email info@abrimatt.com",
  keywords: [
    "contact Abrimatt",
    "business consulting Kenya",
    "SAP support Nairobi",
    "IT consulting contact",
    "enterprise solutions support",
  ],
  canonical: "/contact",
})

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Abrimatt Consulting Ltd",
    image: "https://www.abrimatt.com/abrimatt-logo-2-transparent.png",
    "@id": "https://www.abrimatt.com",
    url: "https://www.abrimatt.com",
    telephone: "+254-712-345-678",
    email: "info@abrimatt.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Street",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      postalCode: "00100",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: ["https://www.linkedin.com/company/abrimattconsultingltd", "https://x.com/abrimattconsult"],
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </div>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactCTA />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  )
}
