import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Shield, Settings, Users } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: Database,
      title: "SAP Solutions",
      description:
        "Complete SAP implementation including S/4HANA Public Cloud, Business ByDesign, and Business One for streamlined operations.",
      features: ["SAP S/4HANA Public Cloud", "SAP Business ByDesign", "SAP Business One"],
    },
    {
      icon: Shield,
      title: "Cybersecurity & Network",
      description:
        "Comprehensive security solutions with Sophos Firewall and Cisco infrastructure to protect your business assets.",
      features: ["Sophos Firewall", "Cisco Network Solutions", "Security Monitoring"],
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      description:
        "End-to-end IT management including system administration, network engineering, and technical support.",
      features: ["24/7 IT Support", "Network Management", "System Administration"],
    },
    {
      icon: Users,
      title: "Business Applications",
      description:
        "Microsoft Office 365, QuickBooks, and Odoo implementations tailored for small and medium enterprises.",
      features: ["Microsoft 365", "QuickBooks Integration", "Odoo ERP"],
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">
            Comprehensive IT Solutions for SMEs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From SAP implementation to managed IT services, we provide end-to-end technology solutions that help small
            and medium enterprises thrive in today's digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-sm leading-relaxed">{service.description}</CardDescription>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
