import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Lightbulb, Target, Users, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We put our clients' needs at the center of everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with the highest ethical standards and maintain complete transparency in all our dealings.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and cutting-edge solutions to solve complex business challenges.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that create lasting value for our clients.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering partnerships built on trust and mutual respect.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for excellence in every project, continuously improving our methods and expertise.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide every decision we make and every relationship we build. They are the foundation of
            our success and the promise we make to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <Card key={value.title} className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
