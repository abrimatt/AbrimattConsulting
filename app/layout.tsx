import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { BackToTop } from "@/components/back-to-top"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Abrimatt Consulting Ltd - Expert Business Consulting Services",
    template: "%s | Abrimatt Consulting Ltd",
  },
  description:
    "Transform your business with expert consulting services. Specializing in SAP solutions, digital transformation, and enterprise technology across East Africa.",
  generator: "v0.app",
  applicationName: "Abrimatt Consulting",
  referrer: "origin-when-cross-origin",
  keywords: [
    "business consulting",
    "SAP consulting Kenya",
    "digital transformation",
    "enterprise solutions",
    "IT consulting",
    "ERP implementation",
  ],
  authors: [{ name: "Abrimatt Consulting Ltd", url: "https://www.abrimatt.com" }],
  creator: "Abrimatt Consulting Ltd",
  publisher: "Abrimatt Consulting Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.abrimatt.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abrimatt.com",
    siteName: "Abrimatt Consulting Ltd",
    title: "Abrimatt Consulting Ltd - Expert Business Consulting Services",
    description:
      "Transform your business with expert consulting services. Specializing in SAP solutions, digital transformation, and enterprise technology.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abrimatt Consulting Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abrimattconsult",
    creator: "@abrimattconsult",
    title: "Abrimatt Consulting Ltd - Expert Business Consulting Services",
    description:
      "Transform your business with expert consulting services. Specializing in SAP solutions, digital transformation, and enterprise technology.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
