import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Cloud, Zap, Shield, BarChart3, Cog, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function SAPS4HANAPublicCloudPage() {
  const keyFeatures = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Ready-to-Run Cloud ERP",
      description: "Out-of-the-box solution with industry best practices built-in",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Implementation",
      description: "Initial scope delivery in 30 days or less with 50% cost reduction",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Built-in AI & Analytics",
      description: "Machine learning, RPA, and real-time analytics powered by SAP Joule AI",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Enhanced security, compliance, and automatic backup & disaster recovery",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Automatic Updates",
      description: "Continuous innovation with quarterly updates managed by SAP",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Architecture",
      description: "Open and extensible with ready-to-go APIs for easy integration",
    },
  ]

  const businessAreas = [
    {
      title: "Finance & Accounting",
      description: "AI-driven financial transformation with real-time insights and global compliance",
      features: [
        "Real-time financial reporting",
        "Automated reconciliation",
        "Global compliance management",
        "Predictive analytics",
      ],
    },
    {
      title: "Procurement & Supply Chain",
      description: "Modernized procurement with AI-based insights and inventory optimization",
      features: ["Intelligent sourcing", "Automated purchasing", "Supply chain visibility", "Vendor management"],
    },
    {
      title: "Manufacturing & Operations",
      description: "Smart manufacturing with predictive maintenance and AI-driven capabilities",
      features: ["Production planning", "Quality management", "Predictive maintenance", "IoT integration"],
    },
    {
      title: "Sales & Distribution",
      description: "Personalized customer experiences with streamlined lead-to-cash workflows",
      features: ["Customer relationship management", "Order management", "Pricing optimization", "Sales analytics"],
    },
  ]

  const benefits = [
    "50% reduction in implementation costs",
    "30-day initial deployment timeline",
    "Automatic quarterly updates",
    "Built-in AI and machine learning",
    "Real-time analytics and reporting",
    "Enhanced security and compliance",
    "Scalable cloud architecture",
    "Industry best practices included",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Component */}
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Enterprise Cloud ERP</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">SAP S/4HANA Public Cloud</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your enterprise with the world's most advanced cloud ERP solution. Built for high-growth and
                mid-to-large businesses seeking digital transformation with AI-driven innovations and industry best
                practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Request Demo
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sap-s4hana-dashboard.png"
                alt="SAP S/4HANA Public Cloud Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose SAP S/4HANA Public Cloud?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of intelligent ERP with built-in AI, industry best practices, and rapid deployment
              capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Comprehensive Business Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline operations across all business functions with integrated, AI-powered modules designed for
              modern enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Proven Business Impact</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of organizations worldwide who have transformed their operations with SAP S/4HANA Public
                Cloud and achieved measurable results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sap-s4hana-enterprise-dashboard.png"
                alt="Business Success with SAP S/4HANA"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how SAP S/4HANA Public Cloud can accelerate your digital transformation and drive sustainable
            growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
