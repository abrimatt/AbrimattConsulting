import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
                Streamline Your Business with Expert IT Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empower your small or medium enterprise with end-to-end IT solutions including SAP, Microsoft, managed
                IT services, and cybersecurity to drive sustainable growth.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                "SAP Business Solutions & Implementation",
                "Managed IT Services & Network Security",
                "Microsoft & QuickBooks Integration",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                Get IT Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Our Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">Trusted by SMEs across Nigeria</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-sm font-medium">Manufacturing</div>
                <div className="text-sm font-medium">Retail</div>
                <div className="text-sm font-medium">Healthcare</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8 flex items-center justify-center">
              <img
                src="/it-professionals-sap-network.png"
                alt="IT professionals implementing SAP solutions and managing network infrastructure"
                className="rounded-xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              SAP Certified
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              20+ IT Experts
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
