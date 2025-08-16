import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Calendar, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Office Information */}
        <Card className="border-border">
          <CardContent className="p-6 space-y-6">
            <h3 className="font-heading font-bold text-xl text-primary">Our Office</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary">Lagos Office</div>
                  <div className="text-sm text-muted-foreground">
                    25, Shobo Arobiodun Street
                    <br />
                    Ikeja, Lagos
                    <br />
                    Nigeria
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary">+234 909 996 5559</div>
                  <div className="text-sm text-muted-foreground">Main Office</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary">info@abrimatt.com</div>
                  <div className="text-sm text-muted-foreground">General Inquiries</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary">Business Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM WAT
                    <br />
                    Saturday: 9:00 AM - 1:00 PM WAT
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border">
          <CardContent className="p-6 space-y-6">
            <h3 className="font-heading font-bold text-xl text-primary">Quick Actions</h3>

            <div className="space-y-3">
              <Link href="/consultation">
                <Button className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Free Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Request a Callback
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                Download Our Brochure
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="border-border">
          <CardContent className="p-6 space-y-6">
            <h3 className="font-heading font-bold text-xl text-primary">Connect With Us</h3>

            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Follow us for industry insights, company updates, and thought leadership content.
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="p-6 text-center space-y-4">
            <h3 className="font-heading font-semibold text-lg text-primary">Urgent Matter?</h3>
            <p className="text-sm text-muted-foreground">
              For urgent business matters outside of business hours, please call our emergency line.
            </p>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <Phone className="mr-2 h-4 w-4" />
              Emergency: +234 909 996 5559
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
