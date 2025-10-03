import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-heading font-bold text-xl">Abrimatt Consulting Ltd</div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering businesses through strategic consulting and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/abrimattconsultingltd"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/abrimattconsult"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Strategic Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Business Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Change Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@abrimatt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+234 909 996 5559</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">Ikeja, Lagos Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              &copy; 2025 Abrimatt Consulting Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/login"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Customer Login
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link
                href="/admin"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
