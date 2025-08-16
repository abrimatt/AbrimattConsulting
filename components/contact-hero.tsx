import { Mail, Phone, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
              Let's Start the Conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business? We're here to help. Reach out to discuss your challenges and discover
              how our expertise can drive your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div className="text-center">
                <div className="font-heading font-semibold text-primary">Email Us</div>
                <div className="text-sm text-muted-foreground">info@abrimatt.com</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div className="text-center">
                <div className="font-heading font-semibold text-primary">Call Us</div>
                <div className="text-sm text-muted-foreground">+234 909 996 5559</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div className="text-center">
                <div className="font-heading font-semibold text-primary">Visit Us</div>
                <div className="text-sm text-muted-foreground">Ikeja, Lagos Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
