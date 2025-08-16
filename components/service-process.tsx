import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Cog, TrendingUp } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We begin by thoroughly understanding your business, challenges, and objectives through comprehensive analysis.",
    step: "01",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "Our experts craft tailored strategies and solutions based on industry best practices and your unique needs.",
    step: "02",
  },
  {
    icon: Cog,
    title: "Implementation",
    description:
      "We work alongside your team to execute the strategy with precision, ensuring smooth adoption and minimal disruption.",
    step: "03",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Growth",
    description: "Continuous monitoring and refinement to maximize results and drive sustainable long-term growth.",
    step: "04",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Our Proven Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach that ensures consistent results and measurable success for every client engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={step.title} className="relative bg-background border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
