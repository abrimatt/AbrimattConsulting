import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Settings, Zap, Workflow, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ProcessOptimizationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary">Process Optimization</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Streamline operations and eliminate inefficiencies to maximize productivity
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Our process optimization services help organizations streamline their operations, reduce waste, and
                  improve efficiency. We analyze existing workflows and implement solutions that drive productivity
                  while reducing costs and improving quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-primary mb-6">What We Deliver</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Workflow,
                        title: "Workflow Design",
                        description: "Optimized workflows that eliminate bottlenecks and improve efficiency",
                      },
                      {
                        icon: Zap,
                        title: "Automation Solutions",
                        description: "Strategic automation to reduce manual work and human error",
                      },
                      {
                        icon: Settings,
                        title: "Quality Improvement",
                        description: "Enhanced quality control processes and standards",
                      },
                      {
                        icon: DollarSign,
                        title: "Cost Reduction",
                        description: "Systematic cost reduction through process improvements",
                      },
                    ].map((item) => {
                      const IconComponent = item.icon
                      return (
                        <Card key={item.title} className="border-border">
                          <CardHeader>
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                              <IconComponent className="h-5 w-5 text-accent" />
                            </div>
                            <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl text-primary mb-6">Our Approach</h2>
                  <div className="space-y-6">
                    {[
                      {
                        step: "01",
                        title: "Process Assessment",
                        description:
                          "Comprehensive evaluation of current processes to identify inefficiencies and improvement opportunities.",
                      },
                      {
                        step: "02",
                        title: "Workflow Redesign",
                        description: "Designing optimized workflows that eliminate waste and improve productivity.",
                      },
                      {
                        step: "03",
                        title: "Technology Integration",
                        description: "Implementing automation and technology solutions to enhance process efficiency.",
                      },
                      {
                        step: "04",
                        title: "Continuous Improvement",
                        description:
                          "Establishing monitoring systems and continuous improvement frameworks for ongoing optimization.",
                      },
                    ].map((step) => (
                      <div key={step.step} className="flex space-x-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-primary mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-heading">Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Increased operational efficiency",
                        "Reduced operational costs",
                        "Improved quality standards",
                        "Faster turnaround times",
                        "Enhanced customer satisfaction",
                        "Scalable processes",
                      ].map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="font-heading font-semibold text-lg">Ready to Get Started?</h3>
                    <p className="text-sm text-muted-foreground">
                      Schedule a consultation to discuss your process optimization needs.
                    </p>
                    <Link href="/consultation">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
