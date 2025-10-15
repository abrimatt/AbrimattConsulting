"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { SearchDialog } from "@/components/search-dialog"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ]

  const productItems = [
    { href: "/products/sap-business-one", label: "SAP Business One" },
    { href: "/products/sap-business-bydesign", label: "SAP Business ByDesign" },
    { href: "/products/sap-s4hana-public-cloud", label: "SAP S/4HANA Public Cloud" },
    { href: "/products/sap-customer-checkout", label: "SAP Customer Checkout" },
    { href: "/products/cybersecurity-solutions", label: "Cybersecurity Solutions" },
    { href: "/products/microsoft-solutions", label: "Microsoft Solutions" },
    { href: "/products/cliq-restaurant-solution", label: "Cliq Restaurant Solution" },
  ]

  return (
    <>
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <nav className="sticky top-0 z-[60] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/abrimatt-logo.png"
                alt="Abrimatt Consulting Ltd."
                width={175}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                About
              </Link>

              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isProductsOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-background border rounded-md shadow-lg py-2 z-[70]"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {productItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/insights"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </Link>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Search className="h-4 w-4" />
              </Button>

              <Link
                href="/auth/login"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Login
              </Link>

              <Link href="/consultation">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Schedule Consultation</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="text-muted-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <Link
                  href="/"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div className="px-3 py-2">
                  <div className="font-medium text-foreground mb-2">Products</div>
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/insights"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/auth/login"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>

                <div className="px-3 py-2">
                  <Link href="/consultation">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
