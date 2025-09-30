import { createClient } from "@/lib/supabase/server"
import { requireAdmin } from "@/lib/auth"
import { redirect, notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function EditInsightPage({ params }: { params: { id: string } }) {
  await requireAdmin()
  const supabase = await createClient()

  // Fetch the insight
  const { data: insight, error } = await supabase.from("insights").select("*").eq("id", params.id).single()

  if (error || !insight) {
    notFound()
  }

  async function updateInsight(formData: FormData) {
    "use server"

    const supabase = await createClient()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const featured_image = formData.get("featured_image") as string
    const read_time = Number.parseInt(formData.get("read_time") as string)
    const is_featured = formData.get("is_featured") === "on"
    const status = formData.get("status") as string

    const updateData: any = {
      title,
      slug,
      excerpt,
      content,
      category,
      featured_image: featured_image || null,
      read_time,
      is_featured,
      status,
      updated_at: new Date().toISOString(),
    }

    // Update published_at if status changed to published
    if (status === "published" && insight.status !== "published") {
      updateData.published_at = new Date().toISOString()
    }

    const { error } = await supabase.from("insights").update(updateData).eq("id", params.id)

    if (error) {
      console.error("Error updating insight:", error)
      return
    }

    redirect("/admin/insights")
  }

  async function deleteInsight() {
    "use server"

    const supabase = await createClient()

    const { error } = await supabase.from("insights").delete().eq("id", params.id)

    if (error) {
      console.error("Error deleting insight:", error)
      return
    }

    redirect("/admin/insights")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/admin/insights">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">Edit Insight</h1>
          <p className="text-muted-foreground mt-2">Update your blog post or insight</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Insight Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={updateInsight} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter insight title"
                  defaultValue={insight.title}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input id="slug" name="slug" placeholder="url-friendly-slug" defaultValue={insight.slug} required />
                <p className="text-xs text-muted-foreground">
                  URL-friendly version of the title (e.g., "my-blog-post")
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Brief summary of the insight"
                  rows={3}
                  defaultValue={insight.excerpt}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Full content (supports Markdown)"
                  rows={15}
                  defaultValue={insight.content}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    name="category"
                    placeholder="e.g., Strategy, Operations"
                    defaultValue={insight.category}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="read_time">Read Time (minutes) *</Label>
                  <Input
                    id="read_time"
                    name="read_time"
                    type="number"
                    placeholder="5"
                    defaultValue={insight.read_time}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  name="featured_image"
                  placeholder="https://example.com/image.jpg or /local-image.jpg"
                  defaultValue={insight.featured_image || ""}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <select
                    id="status"
                    name="status"
                    className="w-full px-3 py-2 border rounded-md"
                    defaultValue={insight.status}
                    required
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 pt-8">
                  <input
                    type="checkbox"
                    id="is_featured"
                    name="is_featured"
                    className="h-4 w-4"
                    defaultChecked={insight.is_featured}
                  />
                  <Label htmlFor="is_featured" className="cursor-pointer">
                    Feature this insight
                  </Label>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t">
                <form action={deleteInsight}>
                  <Button type="submit" variant="destructive">
                    Delete Insight
                  </Button>
                </form>
                <div className="flex space-x-4">
                  <Link href="/admin/insights">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" className="bg-accent hover:bg-accent/90">
                    Update Insight
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
