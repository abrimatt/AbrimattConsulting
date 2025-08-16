import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
              Expert Consulting Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your business with our comprehensive suite of consulting services. From strategic planning to
              digital transformation, we deliver results that matter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/consultation">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <div className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
