import { requireAdmin } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SupportTicketActions } from "@/components/admin/support-ticket-actions"
import { MessageSquare, ArrowLeft, User, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { AdminNav } from "@/components/admin/admin-nav"

export default async function AdminSupportTicketsPage() {
  await requireAdmin()
  const supabase = await createClient()

  const { data: supportTickets } = await supabase
    .from("support_tickets")
    .select(
      `
      *,
      profiles!support_tickets_user_id_fkey(first_name, last_name, email, company_name, phone)
    `,
    )
    .order("created_at", { ascending: false })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-orange-100 text-orange-800"
      case "in_progress":
        return "bg-blue-100 text-blue-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800"
      case "high":
        return "bg-orange-100 text-orange-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "technical":
        return <AlertCircle className="h-4 w-4" />
      case "billing":
        return <Clock className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="mb-2">
            <Link href="/admin/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Support Tickets Management</h1>
          <p className="text-gray-600">View and manage all customer support tickets</p>
        </div>

        {supportTickets && supportTickets.length > 0 ? (
          <div className="space-y-4">
            {supportTickets.map((ticket) => (
              <Card key={ticket.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getCategoryIcon(ticket.category)}
                      {ticket.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                        {ticket.priority}
                      </Badge>
                      <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Customer Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">Customer</p>
                          <p className="text-sm text-gray-600">
                            {ticket.profiles?.first_name} {ticket.profiles?.last_name}
                          </p>
                          <p className="text-xs text-gray-500">{ticket.profiles?.email}</p>
                          {ticket.profiles?.phone && <p className="text-xs text-gray-500">{ticket.profiles.phone}</p>}
                        </div>
                      </div>
                      {ticket.profiles?.company_name && (
                        <div>
                          <p className="text-sm font-medium">Company</p>
                          <p className="text-sm text-gray-600">{ticket.profiles.company_name}</p>
                        </div>
                      )}
                    </div>

                    {/* Ticket Details */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Category</p>
                          <p className="text-sm text-gray-600 capitalize">{ticket.category.replace("_", " ")}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Created</p>
                          <p className="text-sm text-gray-600">{new Date(ticket.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Last Updated</p>
                        <p className="text-sm text-gray-600">{new Date(ticket.updated_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium mb-2">Description</p>
                    <p className="text-sm text-gray-600">{ticket.description}</p>
                  </div>

                  <div className="mt-4">
                    <SupportTicketActions ticketId={ticket.id} currentStatus={ticket.status} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No support tickets yet</h3>
              <p className="text-gray-600">Support tickets from customers will appear here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
