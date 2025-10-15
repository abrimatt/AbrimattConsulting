export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export function generateMetadata({ title, description, keywords, ogImage = "/og-image.png", canonical }: PageMetadata) {
  const siteName = "Abrimatt Consulting Ltd"
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const baseUrl = "https://www.abrimatt.com"

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || "/",
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@abrimattconsult",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abrimatt Consulting Ltd",
    url: "https://www.abrimatt.com",
    logo: "https://www.abrimatt.com/abrimatt-logo-2-transparent.png",
    description:
      "Expert business consulting services specializing in SAP solutions, digital transformation, and enterprise technology implementation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Street",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      postalCode: "00100",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-712-345-678",
      contactType: "customer service",
      email: "info@abrimatt.com",
      availableLanguage: ["English"],
    },
    sameAs: ["https://www.linkedin.com/company/abrimattconsultingltd", "https://x.com/abrimattconsult"],
    foundingDate: "2019",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50",
    },
  }
}
