import { createClient } from "@/lib/supabase/server"
import { requireAdmin } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AdminNav } from "@/components/admin/admin-nav"

export default async function AdminInsightsPage() {
  await requireAdmin()

  const supabase = await createClient()

  const { data: insights } = await supabase.from("insights").select("*").order("created_at", { ascending: false })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link href="/admin/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Manage Insights</h1>
            <p className="text-muted-foreground mt-2">Create and manage blog posts and insights</p>
          </div>
          <Link href="/admin/insights/new">
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              New Insight
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Insights ({insights?.length || 0})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights?.map((insight) => (
                <div
                  key={insight.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    {insight.featured_image && (
                      <img
                        src={insight.featured_image || "/placeholder.svg"}
                        alt={insight.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg">{insight.title}</h3>
                        <Badge className={getStatusColor(insight.status)}>{insight.status}</Badge>
                        {insight.is_featured && <Badge variant="secondary">Featured</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{insight.excerpt}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>By {insight.author_name}</span>
                        <span>•</span>
                        <span>{insight.category}</span>
                        <span>•</span>
                        <span>{formatDate(insight.created_at)}</span>
                        <span>•</span>
                        <span>{insight.read_time} min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link href={`/insights/${insight.slug}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/admin/insights/edit/${insight.id}`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <form action={`/api/insights/${insight.id}`} method="DELETE">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </div>
              ))}
              {!insights ||
                (insights.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No insights found. Create your first insight to get started.</p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
