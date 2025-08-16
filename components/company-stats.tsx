import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries",
  },
  {
    icon: Users,
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding client expectations",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global reach with local expertise",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Proven track record of excellence",
  },
]

export function CompanyStats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            These numbers represent more than statistics – they represent the trust our clients place in us and the
            results we deliver together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.label} className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                    <div className="font-heading font-semibold text-lg text-primary-foreground">{stat.label}</div>
                    <p className="text-sm text-primary-foreground/80 leading-relaxed">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
