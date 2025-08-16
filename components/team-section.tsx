import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Managing Director & Founder",
    image: "/team-sarah-mitchell.png",
    bio: "15+ years of strategic consulting experience with Fortune 500 companies. MBA from London Business School.",
    expertise: ["Strategic Planning", "Digital Transformation", "Change Management"],
  },
  {
    name: "David Chen",
    role: "Senior Partner, Operations",
    image: "/team-david-chen.png",
    bio: "Former McKinsey consultant with expertise in operational excellence and process optimization.",
    expertise: ["Process Optimization", "Lean Six Sigma", "Supply Chain"],
  },
  {
    name: "Emma Rodriguez",
    role: "Partner, Financial Advisory",
    image: "/team-emma-rodriguez.png",
    bio: "CPA and former investment banker specializing in financial strategy and M&A advisory.",
    expertise: ["Financial Planning", "M&A Advisory", "Risk Management"],
  },
  {
    name: "James Thompson",
    role: "Senior Consultant, Technology",
    image: "/team-james-thompson.png",
    bio: "Technology strategist with 12+ years helping organizations navigate digital transformation.",
    expertise: ["Digital Strategy", "IT Transformation", "Data Analytics"],
  },
  {
    name: "Lisa Park",
    role: "Principal, Human Capital",
    image: "/team-lisa-park.png",
    bio: "Organizational psychologist focused on talent management and organizational development.",
    expertise: ["Talent Strategy", "Leadership Development", "Culture Change"],
  },
  {
    name: "Michael Brown",
    role: "Senior Consultant, Strategy",
    image: "/team-michael-brown.png",
    bio: "Former strategy director at a FTSE 100 company with expertise in market expansion and growth strategy.",
    expertise: ["Market Strategy", "Business Development", "Competitive Analysis"],
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of seasoned professionals brings together decades of experience across industries and
            functional areas to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-primary">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-semibold text-sm text-primary">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
