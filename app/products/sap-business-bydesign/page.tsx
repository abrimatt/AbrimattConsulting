import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Cloud, BarChart3, Users, Globe, Zap, Shield } from "lucide-react"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "SAP Business ByDesign - Abrimatt Consulting Ltd",
  description:
    "Cloud-based ERP solution for growing SMEs. Scalable, integrated business management with real-time analytics and automatic updates.",
}

const features = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Fully cloud-based solution with no infrastructure investment required",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "In-memory computing for instant insights and informed decision-making",
  },
  {
    icon: Users,
    title: "Integrated Business Functions",
    description: "Finance, HR, CRM, Project Management, and Operations in one platform",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your business data from anywhere with internet connection",
  },
  {
    icon: Zap,
    title: "Automatic Updates",
    description: "Four automatic upgrade releases per year with latest features",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SAP-grade security with robust data backup and recovery management",
  },
]

const benefits = [
  "Scalable solution that grows with your business",
  "Cost-effective subscription model with no upfront infrastructure costs",
  "Seamless document flow between all business modules",
  "User-friendly interface requiring minimal training",
  "Real-time visibility into all business operations",
  "Continuous innovation with automatic updates",
  "Enhanced data visibility and employee utilization",
  "Improved invoice management and goods tracking",
]

const businessFunctions = [
  "Accounting & Finance",
  "Human Resources",
  "Project Management",
  "Sourcing & Purchasing",
  "Production Planning",
  "Logistics & Supply Chain",
  "Marketing & Sales (CRM)",
  "Customer Support & Services",
]

export default function SAPBusinessByDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Cloud ERP Solution</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                SAP Business ByDesign
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The complete cloud-based ERP solution designed for growing small and medium-sized enterprises. Scale
                your business operations with integrated functionality and real-time insights.
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
              <img
                src="/sap-bydesign-cloud-dashboard.png"
                alt="SAP Business ByDesign Cloud Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Cloud-First Business Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SAP Business ByDesign delivers comprehensive ERP functionality through the cloud, providing scalability,
              accessibility, and continuous innovation.
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

      {/* Business Functions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Integrated Business Functions
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            All your key business processes integrated in one cloud platform with seamless data flow between modules.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessFunctions.map((func) => (
              <Card key={func} className="border-border hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6 pb-4">
                  <h3 className="font-semibold text-foreground text-center">{func}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Why Choose SAP Business ByDesign?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built for growing businesses, SAP Business ByDesign provides the flexibility and scalability you need
                without the complexity and cost of traditional ERP systems.
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
              <img
                src="/business-team-cloud-collaboration.png"
                alt="Cloud Business Collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Cloud Advantages for Growing Businesses
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience the benefits of cloud-based ERP with SAP's enterprise-grade platform designed specifically for
            SMEs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">No Infrastructure Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Eliminate upfront hardware costs and ongoing maintenance. Start using your ERP system immediately with
                  our cloud infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Continuous Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive four automatic updates per year with new features, compliance updates, and security
                  enhancements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Global Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access your business data from anywhere, supporting remote work and global operations with enterprise
                  security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Scale Your Business in the Cloud?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover how SAP Business ByDesign can accelerate your growth with cloud-based ERP. Schedule a personalized
            demo with our SAP experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Cloud Demo
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
