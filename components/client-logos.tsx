import Image from "next/image"

const clients = [
  { name: "SAP", logo: "/sap-logo.png" },
  { name: "Microsoft", logo: "/microsoft-logo.png" },
  { name: "Cisco", logo: "/cisco-logo.png" },
  { name: "Oracle", logo: "/oracle-logo.png" },
  { name: "IBM", logo: "/ibm-logo.png" },
  { name: "Salesforce", logo: "/salesforce-logo.png" },
]

export function ClientLogos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-y">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Trusted Technology Partners
          </p>
          <h3 className="font-heading font-bold text-2xl text-foreground">We Work with Industry Leaders</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
