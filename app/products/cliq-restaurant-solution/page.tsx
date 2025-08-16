import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, ShoppingCart, BarChart3, Smartphone, CreditCard, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function CliqRestaurantSolutionPage() {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Menu Management",
      description: "Easily manage your restaurant menu with categories, items, pricing, and availability controls.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Order Management",
      description: "Streamline order processing from taking orders to kitchen preparation and delivery.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Table Reservations",
      description: "Manage table bookings, seating arrangements, and customer preferences efficiently.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Integrated POS System",
      description: "Complete point-of-sale solution for processing orders, payments, and receipts.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Kitchen Order Tickets (KOTs)",
      description: "Direct kitchen order management with real-time updates and preparation tracking.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "QR Code Menus",
      description: "Contactless dining experience with QR code menus and mobile ordering capabilities.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Reports",
      description: "Comprehensive analytics and reporting for sales, inventory, and performance insights.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Staff Management",
      description: "Manage staff roles, permissions, schedules, and performance tracking.",
    },
  ]

  const benefits = [
    "Increase operational efficiency by up to 40%",
    "Reduce order processing time and errors",
    "Improve customer satisfaction with faster service",
    "Real-time inventory and sales tracking",
    "Seamless payment processing with multiple gateways",
    "Cloud-based solution accessible anywhere",
    "Customizable to match your restaurant brand",
    "24/7 technical support and maintenance",
  ]

  const integrations = [
    "Stripe Payment Gateway",
    "Razorpay Payment Processing",
    "Kitchen Display Systems",
    "Inventory Management Systems",
    "Accounting Software Integration",
    "Customer Loyalty Programs",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Restaurant Management Solution
              </Badge>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Cliq Restaurant Solution
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your restaurant operations with our comprehensive Table Track Kitchen solution. Streamline
                everything from order management to payment processing with our all-in-one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/restaurant-pos-system-interface.png"
                alt="Cliq Restaurant Solution Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Restaurant Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run your restaurant efficiently, from front-of-house to kitchen operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose Cliq Restaurant Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our Table Track Kitchen solution is designed specifically for restaurants, cafes, and food service
                businesses looking to modernize their operations and improve customer experience.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/restaurant-staff-using-pos.png"
                alt="Restaurant Staff Using Cliq Solution"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your existing systems and popular third-party services for a complete solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center border-border hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{integration}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of restaurants already using Cliq Restaurant Solution to streamline their operations and
            delight their customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Schedule Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
