import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

export function ServiceCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl">Ready to Transform Your Business?</h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Let's discuss how our consulting services can help you achieve your business objectives and drive
                  sustainable growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>

              <div className="pt-8 border-t border-primary-foreground/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-heading font-bold">Free</div>
                    <div className="text-sm text-primary-foreground/80">Initial Consultation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold">24/7</div>
                    <div className="text-sm text-primary-foreground/80">Support Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold">100%</div>
                    <div className="text-sm text-primary-foreground/80">Satisfaction Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
