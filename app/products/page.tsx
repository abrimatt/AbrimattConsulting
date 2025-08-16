import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, Cloud, ShoppingCart, Globe, Users, UtensilsCrossed } from "lucide-react"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Products - Abrimatt Consulting Ltd",
  description:
    "Comprehensive SAP and Microsoft solutions for small and medium enterprises. Transform your business with our proven software solutions.",
}

const products = [
  {
    title: "SAP Business One",
    description: "Complete ERP solution designed specifically for small and medium-sized enterprises",
    icon: Building2,
    href: "/products/sap-business-one",
    features: [
      "Financial Management",
      "Sales & Customer Management",
      "Purchasing & Inventory",
      "Production Planning",
      "Reporting & Analytics",
    ],
    ideal: "Small to medium businesses looking for comprehensive ERP functionality",
  },
  {
    title: "SAP Business ByDesign",
    description: "Cloud-based ERP solution that grows with your business needs",
    icon: Cloud,
    href: "/products/sap-business-bydesign",
    features: [
      "Cloud-Native Architecture",
      "Scalable Solution",
      "Industry-Specific Functionality",
      "Mobile Access",
      "Integrated Analytics",
    ],
    ideal: "Growing companies needing flexible, cloud-based ERP",
  },
  {
    title: "SAP Customer Checkout",
    description: "Modern point-of-sale solution for retail businesses",
    icon: ShoppingCart,
    href: "/products/sap-customer-checkout",
    features: [
      "Modern POS Interface",
      "Inventory Integration",
      "Customer Management",
      "Payment Processing",
      "Real-time Reporting",
    ],
    ideal: "Retail businesses needing modern POS capabilities",
  },
  {
    title: "Magento eCommerce",
    description: "Feature-rich eCommerce platform for online businesses",
    icon: Globe,
    href: "/products/magento-ecommerce",
    features: [
      "Flexible eCommerce Platform",
      "Multi-store Management",
      "Advanced SEO",
      "Mobile Responsive",
      "Payment Gateway Integration",
    ],
    ideal: "Businesses looking to establish or enhance online presence",
  },
  {
    title: "Microsoft Solutions",
    description: "Comprehensive Microsoft ecosystem integration and support",
    icon: Users,
    href: "/products/microsoft-solutions",
    features: [
      "Office 365 Integration",
      "Azure Cloud Services",
      "Power Platform",
      "Teams Collaboration",
      "Security Solutions",
    ],
    ideal: "Organizations leveraging Microsoft technologies",
  },
  {
    title: "Cliq Restaurant Solution",
    description: "Complete restaurant management system powered by Table Track Kitchen technology",
    icon: UtensilsCrossed,
    href: "/products/cliq-restaurant-solution",
    features: [
      "Menu & Order Management",
      "Table Reservations",
      "Integrated POS System",
      "QR Code Menus",
      "Kitchen Order Tickets",
    ],
    ideal: "Restaurants, cafes, and food service businesses",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Enterprise Software Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your business operations with our comprehensive portfolio of SAP and Microsoft solutions, designed
            specifically for small and medium enterprises.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule Product Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Our Product Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of proven enterprise solutions, each designed to address specific business needs and
              drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <Card
                  key={product.title}
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-xl">{product.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Ideal For:</h4>
                        <p className="text-sm text-muted-foreground">{product.ideal}</p>
                      </div>

                      <Link href={product.href}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experts help you choose the right solution for your business needs. Schedule a consultation to
            discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Product Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
