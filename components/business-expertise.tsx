import { CheckCircle, Users, TrendingUp, Shield, Clock, Award } from "lucide-react"

export function BusinessExpertise() {
  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: "Strategic Business Growth",
      description:
        "We analyze your current operations and identify opportunities for sustainable growth through technology optimization and process improvement.",
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description:
        "Our team ensures your business stays compliant with industry regulations while implementing robust security measures to protect your data.",
    },
    {
      icon: Users,
      title: "Operational Excellence",
      description:
        "We streamline your workflows, eliminate inefficiencies, and implement best practices that enhance productivity across all departments.",
    },
    {
      icon: Clock,
      title: "Digital Transformation",
      description:
        "From legacy system modernization to cloud migration, we guide your business through every step of digital evolution.",
    },
  ]

  const clientBenefits = [
    "Reduced operational costs by up to 40%",
    "Improved system efficiency and reliability",
    "Enhanced data security and compliance",
    "Streamlined business processes",
    "24/7 technical support and monitoring",
    "Scalable solutions that grow with your business",
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How We Transform Your Business Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of specialized experience in IT consulting, we've helped numerous SMEs across Nigeria
            optimize their operations, reduce costs, and achieve sustainable growth through strategic technology
            implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-lg p-8 shadow-sm border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Proven Results for Our Clients</h3>
              <p className="text-muted-foreground mb-6">
                Our comprehensive approach to business management has consistently delivered measurable results. We
                don't just implement technology; we transform how businesses operate, making them more efficient,
                secure, and profitable.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Award className="h-5 w-5" />
                <span className="font-semibold">20+ Successful Implementations</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">What Our Clients Achieve:</h4>
              <ul className="space-y-3">
                {clientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business operations with proven expertise?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
