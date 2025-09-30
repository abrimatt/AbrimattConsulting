import { requireAdmin } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, ArrowLeft, Mail, Shield, UserPlus } from "lucide-react"
import Link from "next/link"
import { AdminNav } from "@/components/admin/admin-nav"

export default async function AdminUsersPage() {
  await requireAdmin()
  const supabase = await createClient()

  const { data: allUsers } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })

  const admins = allUsers?.filter((u) => u.role === "admin") || []
  const customers = allUsers?.filter((u) => u.role === "customer") || []

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Button asChild variant="ghost" size="sm" className="mb-2">
              <Link href="/admin/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage all system users and administrators</p>
          </div>
          <Button asChild>
            <Link href="/admin/users/new">
              <UserPlus className="h-4 w-4 mr-2" />
              Create User
            </Link>
          </Button>
        </div>

        {/* Admin Users Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Administrators ({admins.length})
          </h2>
          {admins.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {admins.map((admin) => (
                <Card key={admin.id} className="border-blue-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {admin.first_name} {admin.last_name}
                      </CardTitle>
                      <Badge className="bg-blue-600">Admin</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{admin.email}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-xs text-gray-500">
                          Created {new Date(admin.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-blue-200">
              <CardContent className="text-center py-8">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No administrators</h3>
                <p className="text-gray-600 mb-4">Create an admin account to get started.</p>
                <Button asChild>
                  <Link href="/admin/users/new">Create Admin</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Customer Users Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-600" />
            Customers ({customers.length})
          </h2>
          {customers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {customers.map((customer) => (
                <Card key={customer.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {customer.first_name} {customer.last_name}
                      </CardTitle>
                      <Badge variant="secondary">Customer</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{customer.email}</span>
                      </div>
                      {customer.company_name && (
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Company:</span> {customer.company_name}
                        </div>
                      )}
                      <div className="pt-2 border-t">
                        <p className="text-xs text-gray-500">
                          Joined {new Date(customer.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No customers yet</h3>
                <p className="text-gray-600">Customer accounts will appear here once they register.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
