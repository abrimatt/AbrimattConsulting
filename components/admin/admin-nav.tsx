import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogoutButton } from "@/components/auth/logout-button"
import { Building2 } from "lucide-react"

export function AdminNav() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/admin/dashboard" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Abrimatt CRM Management</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              <Button asChild variant="ghost">
                <Link href="/admin/customers">Customers</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/admin/demo-requests">Demo Requests</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/admin/support-tickets">Support Tickets</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/admin/insights">Insights</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/admin/users">Users</Link>
              </Button>
            </nav>
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  )
}
