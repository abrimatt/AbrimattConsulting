"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search, FileText, Package, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  title: string
  description: string
  href: string
  type: "page" | "service" | "product" | "insight"
}

const searchableContent: SearchResult[] = [
  // Pages
  { title: "Home", description: "Expert business consulting and enterprise solutions", href: "/", type: "page" },
  {
    title: "About Us",
    description: "Learn about Abrimatt Consulting Ltd and our mission",
    href: "/about",
    type: "page",
  },
  { title: "Contact", description: "Get in touch with our team", href: "/contact", type: "page" },
  { title: "Services", description: "Comprehensive business consulting services", href: "/services", type: "page" },
  { title: "Products", description: "Enterprise software solutions", href: "/products", type: "page" },
  { title: "Insights", description: "Business insights and industry trends", href: "/insights", type: "page" },

  // Services
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions",
    href: "/services/digital-transformation",
    type: "service",
  },
  {
    title: "Strategic Planning",
    description: "Develop comprehensive strategies for business growth",
    href: "/services/strategic-planning",
    type: "service",
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and maximize efficiency",
    href: "/services/process-optimization",
    type: "service",
  },
  {
    title: "Financial Advisory",
    description: "Expert financial consulting and planning services",
    href: "/services/financial-advisory",
    type: "service",
  },
  {
    title: "Business Analysis",
    description: "Data-driven insights for informed decision making",
    href: "/services/business-analysis",
    type: "service",
  },
  {
    title: "Change Management",
    description: "Navigate organizational change successfully",
    href: "/services/change-management",
    type: "service",
  },

  // Products
  {
    title: "SAP Business One",
    description: "Complete ERP solution for SMEs",
    href: "/products/sap-business-one",
    type: "product",
  },
  {
    title: "SAP Business ByDesign",
    description: "Cloud-based ERP that grows with your business",
    href: "/products/sap-business-bydesign",
    type: "product",
  },
  {
    title: "SAP S/4HANA Public Cloud",
    description: "Next-generation intelligent ERP",
    href: "/products/sap-s4hana-public-cloud",
    type: "product",
  },
  {
    title: "Microsoft Solutions",
    description: "Microsoft ecosystem integration and support",
    href: "/products/microsoft-solutions",
    type: "product",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security solutions for your business",
    href: "/products/cybersecurity-solutions",
    type: "product",
  },
  {
    title: "Cliq Restaurant Solution",
    description: "Complete restaurant management system",
    href: "/products/cliq-restaurant-solution",
    type: "product",
  },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    const searchQuery = query.toLowerCase()
    const filtered = searchableContent.filter(
      (item) => item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery),
    )

    setResults(filtered.slice(0, 8))
  }, [query])

  const getIcon = (type: string) => {
    switch (type) {
      case "service":
        return <Briefcase className="h-4 w-4" />
      case "product":
        return <Package className="h-4 w-4" />
      case "insight":
        return <FileText className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Search</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b pb-4">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <Input
            placeholder="Search for services, products, or pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
            autoFocus
          />
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Start typing to search...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className="space-y-2 py-4">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  onClick={() => {
                    onOpenChange(false)
                    setQuery("")
                  }}
                  className="block p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="p-2 bg-primary/10 rounded-md text-primary mt-1">{getIcon(result.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {result.title}
                          </h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{result.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-4 text-xs text-muted-foreground text-center">
          Press <kbd className="px-2 py-1 bg-muted rounded">ESC</kbd> to close
        </div>
      </DialogContent>
    </Dialog>
  )
}
