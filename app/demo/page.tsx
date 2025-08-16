import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DemoForm } from "@/components/demo-form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Demo - Abrimatt Consulting Ltd",
  description:
    "Schedule a personalized demo of our IT solutions including SAP, Microsoft, cybersecurity, and restaurant management systems.",
}

export default function DemoPage() {
  const benefits = [
    {
      icon: Clock,
      title: "30-Minute Demo",
      description: "Focused demonstration tailored to your specific business needs",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Led by our certified consultants with deep product knowledge",
    },
    {
      icon: Zap,
      title: "Live Environment",
      description: "See real functionality with your own data scenarios",
    },
    {
      icon: CheckCircle,
      title: "No Obligation",
      description: "Free demonstration with no commitment required",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            See Our Solutions in Action
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience firsthand how our IT solutions can transform your business operations. Schedule a personalized
            demo with our experts and discover the perfect fit for your organization.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <Card key={benefit.title} className="border-border">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <DemoForm />
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              What to Expect from Your Demo
            </h2>
            <p className="text-lg text-muted-foreground">
              Our personalized demonstrations are designed to show you exactly how our solutions address your specific
              business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Discovery Call</h3>
                <p className="text-muted-foreground">
                  We'll discuss your current challenges, business goals, and specific requirements to customize the
                  demo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Live Demonstration</h3>
                <p className="text-muted-foreground">
                  See the solutions in action with scenarios relevant to your industry and business processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Next Steps</h3>
                <p className="text-muted-foreground">
                  Receive a customized proposal with implementation timeline, pricing, and support options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
