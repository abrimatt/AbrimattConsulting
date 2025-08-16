import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
                Empowering Business Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Abrimatt Consulting, we believe every business has untapped potential. Our mission is to unlock that
                potential through strategic insights, innovative solutions, and unwavering commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8 flex items-center justify-center">
              <img
                src="/professional-team-meeting-office.png"
                alt="Abrimatt Consulting team in action"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              5+ Years
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              500+ Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
