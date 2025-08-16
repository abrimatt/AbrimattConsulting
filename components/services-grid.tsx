import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, BarChart3, Settings, Users, Smartphone, DollarSign, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Develop comprehensive strategies that align with your business objectives and market opportunities.",
    features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy", "Risk Assessment"],
    href: "/services/strategic-planning",
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    description: "Data-driven insights to optimize performance and identify new opportunities for growth.",
    features: ["Performance Metrics", "Process Analysis", "ROI Optimization", "KPI Development"],
    href: "/services/business-analysis",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Streamline operations and eliminate inefficiencies to maximize productivity and reduce costs.",
    features: ["Workflow Design", "Automation Solutions", "Quality Improvement", "Cost Reduction"],
    href: "/services/process-optimization",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Guide your organization through transformational changes with minimal disruption.",
    features: ["Change Strategy", "Stakeholder Engagement", "Training Programs", "Communication Plans"],
    href: "/services/change-management",
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology solutions and digital strategies.",
    features: ["Technology Assessment", "Digital Strategy", "Implementation Support", "Training & Adoption"],
    href: "/services/digital-transformation",
  },
  {
    icon: DollarSign,
    title: "Financial Advisory",
    description: "Expert financial guidance to improve profitability and ensure sustainable growth.",
    features: ["Financial Planning", "Investment Strategy", "Cost Management", "Performance Analysis"],
    href: "/services/financial-advisory",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">
            Comprehensive Consulting Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across multiple domains to provide holistic solutions for your business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg hover:bg-primary transition-all duration-300 border-border"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl text-primary group-hover:text-white transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground group-hover:text-white/90 transition-colors mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent group-hover:text-white flex-shrink-0 transition-colors" />
                        <span className="text-muted-foreground group-hover:text-white/90 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-white/10 text-primary group-hover:text-white hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
