import { requireAdmin } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogoutButton } from "@/components/auth/logout-button"
import { Users, Calendar, MessageSquare, Building2, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function AdminDashboardPage() {
  await requireAdmin()
  const supabase = await createClient()

  // Get dashboard statistics
  const [
    { count: totalCustomers },
    { count: totalDemoRequests },
    { count: pendingDemoRequests },
    { count: totalSupportTickets },
    { count: openSupportTickets },
    { count: totalCompanies },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "customer"),
    supabase.from("demo_requests").select("*", { count: "exact", head: true }),
    supabase.from("demo_requests").select("*", { count: "exact", head: true }).eq("status", "pending"),
    supabase.from("support_tickets").select("*", { count: "exact", head: true }),
    supabase.from("support_tickets").select("*", { count: "exact", head: true }).eq("status", "open"),
    supabase.from("companies").select("*", { count: "exact", head: true }),
  ])

  // Get recent demo requests
  const { data: recentDemoRequests } = await supabase
    .from("demo_requests")
    .select(
      `
      *,
      profiles!demo_requests_user_id_fkey(first_name, last_name, email, company_name)
    `,
    )
    .order("created_at", { ascending: false })
    .limit(5)

  // Get recent support tickets
  const { data: recentSupportTickets } = await supabase
    .from("support_tickets")
    .select(
      `
      *,
      profiles!support_tickets_user_id_fkey(first_name, last_name, email, company_name)
    `,
    )
    .order("created_at", { ascending: false })
    .limit(5)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Abrimatt CRM Management</p>
              </div>
            </div>
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
                  <Link href="/admin/companies">Companies</Link>
                </Button>
              </nav>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCustomers || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demo Requests</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalDemoRequests || 0}</div>
              <p className="text-xs text-muted-foreground">{pendingDemoRequests || 0} pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSupportTickets || 0}</div>
              <p className="text-xs text-muted-foreground">{openSupportTickets || 0} open</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Companies</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCompanies || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalDemoRequests && totalDemoRequests > 0
                  ? Math.round(((totalCustomers || 0) / totalDemoRequests) * 100)
                  : 0}
                %
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4h</div>
              <p className="text-xs text-muted-foreground">to first response</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Demo Requests */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recent Demo Requests
                </CardTitle>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/admin/demo-requests">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {recentDemoRequests && recentDemoRequests.length > 0 ? (
                <div className="space-y-4">
                  {recentDemoRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{request.product_interest}</p>
                          <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {request.profiles?.first_name} {request.profiles?.last_name}
                        </p>
                        <p className="text-xs text-gray-500">{request.profiles?.company_name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          {request.preferred_date ? new Date(request.preferred_date).toLocaleDateString() : "Date TBD"}
                        </p>
                        <p className="text-xs text-gray-400">{new Date(request.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No demo requests yet</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Support Tickets */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Support Tickets
                </CardTitle>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/admin/support-tickets">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {recentSupportTickets && recentSupportTickets.length > 0 ? (
                <div className="space-y-4">
                  {recentSupportTickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{ticket.title}</p>
                          <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                            {ticket.priority}
                          </Badge>
                          <span className="text-xs text-gray-500">{ticket.category}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {ticket.profiles?.first_name} {ticket.profiles?.last_name}
                        </p>
                        <p className="text-xs text-gray-500">{ticket.profiles?.company_name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">{new Date(ticket.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No support tickets yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
