import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, ShoppingCart, Truck, Building, Heart, GraduationCap, Banknote, Fuel } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Streamline production processes with integrated ERP and inventory management systems.",
    },
    {
      icon: ShoppingCart,
      title: "Retail & Distribution",
      description: "Optimize supply chain and customer management with comprehensive retail solutions.",
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Enhance fleet management and cargo tracking with specialized logistics software.",
    },
    {
      icon: Building,
      title: "Professional Services",
      description: "Improve client management and project tracking with tailored business applications.",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure patient data management and compliance with healthcare-specific IT solutions.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Digital transformation for educational institutions with modern learning management systems.",
    },
    {
      icon: Banknote,
      title: "Finance",
      description: "Robust financial management and compliance solutions for banking and finance sectors.",
    },
    {
      icon: Fuel,
      title: "Energy & Oil Gas",
      description: "Specialized solutions for energy sector operations and regulatory compliance.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experience spans diverse industries, enabling us to deliver targeted IT solutions that address specific
            sector challenges and drive operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Card key={industry.title} className="border hover:border-accent/50 transition-colors group">
              <CardHeader className="pb-4">
                <div className="mb-3 p-2 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
