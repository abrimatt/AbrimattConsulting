import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, Headphones, Users } from "lucide-react"

const resources = [
  {
    title: "Strategic Planning Toolkit",
    description: "Comprehensive guide with templates and frameworks for developing effective business strategies.",
    type: "PDF Guide",
    icon: FileText,
    category: "Strategy",
    downloads: "2.3k",
  },
  {
    title: "Digital Transformation Roadmap",
    description: "Step-by-step methodology for planning and executing successful digital transformation initiatives.",
    type: "Whitepaper",
    icon: FileText,
    category: "Digital",
    downloads: "1.8k",
  },
  {
    title: "Change Management Masterclass",
    description: "60-minute webinar covering best practices for leading organizational change initiatives.",
    type: "Webinar",
    icon: Video,
    category: "Leadership",
    downloads: "950",
  },
  {
    title: "Financial Modeling Templates",
    description: "Excel templates for building robust financial models and conducting scenario analysis.",
    type: "Templates",
    icon: FileText,
    category: "Finance",
    downloads: "1.2k",
  },
  {
    title: "Leadership in Crisis Podcast Series",
    description: "6-part podcast series featuring interviews with executives who led through major disruptions.",
    type: "Podcast",
    icon: Headphones,
    category: "Leadership",
    downloads: "750",
  },
  {
    title: "Process Optimization Checklist",
    description: "Practical checklist for identifying inefficiencies and streamlining business processes.",
    type: "Checklist",
    icon: FileText,
    category: "Operations",
    downloads: "1.5k",
  },
]

export function ResourcesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Free Resources</h2>
          <p className="text-lg text-muted-foreground">
            Download our collection of tools, templates, and guides to accelerate your business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const IconComponent = resource.icon
            return (
              <Card key={resource.title} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {resource.category}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg text-primary group-hover:text-accent transition-colors">
                      {resource.title}
                    </CardTitle>
                    <p className="text-sm text-accent font-medium mt-1">{resource.type}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Browse All Resources
          </Button>
        </div>
      </div>
    </section>
  )
}
