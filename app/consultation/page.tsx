import { Navigation } from "@/components/navigation"
import { ConsultationForm } from "@/components/consultation-form"
import { Footer } from "@/components/footer"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ConsultationForm />
      <Footer />
    </div>
  )
}
