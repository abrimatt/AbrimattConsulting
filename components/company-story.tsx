import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users, Globe } from "lucide-react"

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through strategic IT consulting",
    icon: Calendar,
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Successfully completed our first enterprise SAP implementation project",
    icon: Award,
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 20+ IT consultants across multiple technology specializations",
    icon: Users,
  },
  {
    year: "2024",
    title: "Technology Leadership",
    description: "Established as a leading SAP and Microsoft solutions partner in Nigeria",
    icon: Globe,
  },
]

export function CompanyStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a small consulting firm to a trusted partner for businesses worldwide, our story is one of continuous
            growth and unwavering commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            return (
              <Card key={milestone.year} className="relative border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">{milestone.year}</div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </CardContent>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="font-heading font-bold text-2xl text-primary">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses of all sizes to achieve their full potential through strategic consulting,
              innovative solutions, and measurable results. We believe that every challenge is an opportunity for
              growth, and every business has the potential to excel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Expert Consultants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
