import { requireAdmin } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DemoRequestActions } from "@/components/admin/demo-request-actions"
import { Calendar, ArrowLeft, Clock, MessageSquare, User } from "lucide-react"
import Link from "next/link"

export default async function AdminDemoRequestsPage() {
  await requireAdmin()
  const supabase = await createClient()

  const { data: demoRequests } = await supabase
    .from("demo_requests")
    .select(
      `
      *,
      profiles!demo_requests_user_id_fkey(first_name, last_name, email, company_name, phone)
    `,
    )
    .order("created_at", { ascending: false })

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
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="mb-2">
            <Link href="/admin/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Demo Requests Management</h1>
          <p className="text-gray-600">View and manage all customer demo requests</p>
        </div>

        {demoRequests && demoRequests.length > 0 ? (
          <div className="space-y-4">
            {demoRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{request.product_interest}</CardTitle>
                    <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
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
                            {request.profiles?.first_name} {request.profiles?.last_name}
                          </p>
                          <p className="text-xs text-gray-500">{request.profiles?.email}</p>
                          {request.profiles?.phone && <p className="text-xs text-gray-500">{request.profiles.phone}</p>}
                        </div>
                      </div>
                      {request.profiles?.company_name && (
                        <div>
                          <p className="text-sm font-medium">Company</p>
                          <p className="text-sm text-gray-600">{request.profiles.company_name}</p>
                        </div>
                      )}
                    </div>

                    {/* Request Details */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Preferred Date</p>
                            <p className="text-sm text-gray-600">
                              {request.preferred_date
                                ? new Date(request.preferred_date).toLocaleDateString()
                                : "Not specified"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Preferred Time</p>
                            <p className="text-sm text-gray-600">{request.preferred_time || "Not specified"}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Requested</p>
                        <p className="text-sm text-gray-600">{new Date(request.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  {request.message && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-gray-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Additional Information</p>
                          <p className="text-sm text-gray-600">{request.message}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <DemoRequestActions requestId={request.id} currentStatus={request.status} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No demo requests yet</h3>
              <p className="text-gray-600">Demo requests from customers will appear here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
