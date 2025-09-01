import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Building2, BarChart3, Users, ShoppingCart, Package, Calculator } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "SAP Business One - Abrimatt Consulting Ltd",
  description:
    "Complete ERP solution for small and medium enterprises. Streamline operations with integrated financial management, sales, purchasing, and inventory control.",
}

const features = [
  {
    icon: Calculator,
    title: "Financial Management",
    description: "Complete accounting, budgeting, and financial reporting capabilities",
  },
  {
    icon: Users,
    title: "Sales & Customer Management",
    description: "Manage leads, opportunities, and customer relationships effectively",
  },
  {
    icon: ShoppingCart,
    title: "Purchasing & Procurement",
    description: "Streamline vendor management and procurement processes",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory tracking and warehouse management",
  },
  {
    icon: Building2,
    title: "Production Planning",
    description: "Plan and manage manufacturing operations efficiently",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Advanced reporting and analytics for informed decision-making",
  },
]

const benefits = [
  "Unified view of your entire business operations",
  "Reduced operational costs and improved efficiency",
  "Real-time visibility into financial performance",
  "Streamlined business processes across departments",
  "Scalable solution that grows with your business",
  "Industry-specific functionality and best practices",
]

const industries = [
  "Manufacturing",
  "Retail & Distribution",
  "Professional Services",
  "Healthcare",
  "Construction",
  "Food & Beverage",
]

export default function SAPBusinessOnePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Component */}
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Enterprise ERP Solution</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">SAP Business One</h1>
              <p className="text-xl text-muted-foreground mb-8">
                The complete ERP solution designed specifically for small and medium-sized enterprises. Manage your
                entire business from financials to operations in one integrated platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-2xl">
                <img
                  src="/sap-business-one-interface.png"
                  alt="SAP Business One Dashboard Interface"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                  Live Demo Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Comprehensive Business Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SAP Business One provides all the functionality you need to run your business efficiently, from financial
              management to customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Why Choose SAP Business One?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                SAP Business One delivers immediate value by integrating all your business processes into a single,
                easy-to-use solution that provides real-time visibility and control.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/business-team-sap-analysis.png" alt="Business Analytics" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            SAP Business One is successfully deployed across various industries, with industry-specific functionality to
            meet unique business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Badge key={industry} variant="outline" className="px-4 py-2 text-sm">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover how SAP Business One can streamline your operations and drive growth. Schedule a personalized demo
            with our SAP experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/demo">Schedule Demo</Link>
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
