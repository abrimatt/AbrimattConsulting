import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Zap, Users, BarChart3, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CybersecuritySolutionsPage() {
  const solutions = [
    {
      name: "Fortinet FortiGate",
      description: "Comprehensive cybersecurity platform with AI/ML-powered security and high-performance protection.",
      features: [
        "Unified firewall, IPS, VPN, and web filtering",
        "Real-time threat intelligence from FortiGuard Labs",
        "Proprietary ASIC processors for high performance",
        "AI/ML-powered security with integrated sandboxing",
        "Deep SSL/TLS inspection",
        "Lower total cost of ownership",
      ],
      icon: Shield,
      bestFor: "High-throughput environments and organizations of all sizes",
    },
    {
      name: "Sophos Firewall",
      description: "User-centric cybersecurity approach with intuitive solutions designed for ease of use.",
      features: [
        "Endpoint protection and firewall integration",
        "Advanced threat protection with sandboxing",
        "Deep packet inspection and log management",
        "Competitive pricing for SMBs ($400-$1,500)",
        "Strong customer support with phone and live chat",
        "Xstream bundle for comprehensive protection",
      ],
      icon: Lock,
      bestFor: "Small to medium-sized businesses seeking ease of use",
    },
    {
      name: "Cisco Firepower",
      description: "Enterprise-grade cybersecurity with advanced threat intelligence and comprehensive analytics.",
      features: [
        "Network, cloud, and endpoint security suite",
        "Advanced threat intelligence from Cisco Talos",
        "SecureX platform for integrated defense",
        "Comprehensive detection with Sourcefire technology",
        "Central management and analytics",
        "Unified visibility and automation",
      ],
      icon: Eye,
      bestFor: "Large enterprises requiring deeply integrated solutions",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security approach with real-time threat intelligence and AI-powered detection.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized hardware and software integration for minimal latency and maximum throughput.",
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Flexible deployment options that grow with your business needs and security requirements.",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Deep insights into network traffic, threats, and security posture with actionable intelligence.",
    },
  ]

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Education",
    "Government",
    "Retail",
    "Energy",
    "Professional Services",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Component */}
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Enterprise Cybersecurity
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive Cybersecurity Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Protect your business with industry-leading cybersecurity solutions from Fortinet, Sophos, and Cisco.
                Advanced threat protection, high-performance firewalls, and comprehensive security management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/consultation">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/cybersecurity-dashboard-monitoring.png"
                alt="Cybersecurity Dashboard"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Leading Cybersecurity Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from industry-leading cybersecurity solutions tailored to your organization's size and security
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{solution.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium text-foreground">Best For:</p>
                      <p className="text-sm text-muted-foreground">{solution.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Cybersecurity Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection with industry-leading technology and expert implementation support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Industries We Protect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted cybersecurity solutions across diverse industries with specific compliance and security
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-4 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors">
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a comprehensive security assessment and discover how our cybersecurity solutions can protect your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Security Assessment
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Our Security Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
