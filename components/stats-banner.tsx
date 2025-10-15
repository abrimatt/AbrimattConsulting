import { Users, Building2, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Served",
    description: "Across East Africa",
  },
  {
    icon: Building2,
    value: "200+",
    label: "Projects Completed",
    description: "Successfully delivered",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Client Satisfaction",
    description: "Rated excellent",
  },
]

export function StatsBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-full">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <div className="font-heading font-bold text-4xl mb-2">{stat.value}</div>
                <div className="font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-primary-foreground/80">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
