import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.abrimatt.com"
  const currentDate = new Date()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Service pages
  const services = [
    "hospitality-management",
    "web-development",
    "custom-application-development",
    "digital-transformation",
    "strategic-planning",
    "process-optimization",
    "financial-advisory",
    "business-analysis",
    "change-management",
  ]

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Product pages
  const products = [
    "sap-business-one",
    "sap-business-bydesign",
    "sap-s4hana-public-cloud",
    "microsoft-solutions",
    "cybersecurity-solutions",
    "cliq-restaurant-solution",
  ]

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...mainPages, ...servicePages, ...productPages]
}
