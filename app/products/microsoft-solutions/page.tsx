import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Cloud, Users, Brain, Shield, BarChart3, FileText, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Microsoft Solutions - Abrimatt Consulting Ltd",
  description:
    "Comprehensive Microsoft 365, Copilot, and Dynamics 365 solutions to transform your business operations with AI-powered productivity and intelligent business applications.",
}

export default function MicrosoftSolutionsPage() {
  const solutions = [
    {
      title: "Microsoft 365 with Copilot",
      description: "AI-powered productivity suite that transforms how your team works",
      icon: Brain,
      features: [
        "AI-powered email management in Outlook",
        "Intelligent meeting summaries in Teams",
        "Automated document creation in Word",
        "Data insights in Excel with Copilot",
        "Smart presentation building in PowerPoint",
      ],
    },
    {
      title: "Dynamics 365 Sales",
      description: "AI-driven CRM that accelerates your sales processes",
      icon: BarChart3,
      features: [
        "AI-generated lead and opportunity summaries",
        "Personalized email generation from CRM data",
        "Real-time meeting insights and tips",
        "Automated follow-up recommendations",
        "Predictive sales analytics",
      ],
    },
    {
      title: "Dynamics 365 Customer Service",
      description: "Intelligent service platform that enhances customer experiences",
      icon: Users,
      features: [
        "AI-powered case summaries and resolutions",
        "Automated email thread analysis",
        "Smart knowledge base suggestions",
        "Real-time customer sentiment analysis",
        "Proactive service recommendations",
      ],
    },
    {
      title: "Dynamics 365 Finance & Operations",
      description: "Comprehensive ERP with AI-driven financial insights",
      icon: FileText,
      features: [
        "AI-powered collections management",
        "Automated invoice processing",
        "Predictive cash flow analysis",
        "Supply chain optimization insights",
        "Real-time financial reporting",
      ],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "50% Faster Implementation",
      description: "Quick deployment with pre-configured templates and AI-assisted setup",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Built-in artificial intelligence that learns from your data and processes",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security features with compliance and data protection built-in",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Platform",
      description: "Scalable cloud infrastructure with automatic updates and maintenance",
    },
  ]

  const integrationFeatures = [
    "Seamless data flow between Outlook, Teams, and Dynamics 365",
    "AI-powered meeting preparation with CRM context",
    "Automated task creation from email conversations",
    "Real-time collaboration with shared customer insights",
    "Unified reporting across all Microsoft applications",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">AI-Powered Business Solutions</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Microsoft Solutions with AI Copilot
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your business operations with Microsoft 365, Copilot AI, and Dynamics 365. Boost productivity
                by 50% with intelligent automation and AI-powered insights across your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/microsoft-365-copilot-dashboard.png"
                alt="Microsoft 365 Copilot Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Comprehensive Microsoft Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leverage the full power of Microsoft's AI-enhanced business applications to streamline operations, enhance
              productivity, and drive intelligent decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon
              return (
                <Card key={solution.title} className="border-2 hover:border-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-heading text-xl">{solution.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{solution.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Microsoft Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of AI-powered business applications with proven results and enterprise-grade
              reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Seamless Integration Across Your Workflow
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Microsoft Copilot works intelligently across Outlook, Teams, and Dynamics 365 to provide contextual
                insights and automate routine tasks, allowing your team to focus on high-value activities.
              </p>

              <div className="space-y-4">
                {integrationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Integration Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/teams-copilot-dynamics.png"
                alt="Microsoft Integration Workflow"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of organizations already benefiting from Microsoft's AI-powered business solutions. Schedule
            a personalized demo to see how Copilot can revolutionize your workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Your Demo
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
