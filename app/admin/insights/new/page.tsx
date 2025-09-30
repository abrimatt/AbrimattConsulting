import { createClient } from "@/lib/supabase/server"
import { requireAdmin } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function NewInsightPage() {
  const user = await requireAdmin()

  async function createInsight(formData: FormData) {
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

    const { error } = await supabase.from("insights").insert({
      title,
      slug,
      excerpt,
      content,
      category,
      featured_image: featured_image || null,
      author_id: user.id,
      author_name: `${user.user_metadata.first_name} ${user.user_metadata.last_name}`,
      author_avatar: user.user_metadata.avatar_url || null,
      read_time,
      is_featured,
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    })

    if (error) {
      console.error("Error creating insight:", error)
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
          <h1 className="text-3xl font-bold text-primary">Create New Insight</h1>
          <p className="text-muted-foreground mt-2">Write and publish a new blog post or insight</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Insight Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createInsight} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input id="title" name="title" placeholder="Enter insight title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input id="slug" name="slug" placeholder="url-friendly-slug" required />
                <p className="text-xs text-muted-foreground">
                  URL-friendly version of the title (e.g., "my-blog-post")
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea id="excerpt" name="excerpt" placeholder="Brief summary of the insight" rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Full content (supports Markdown)"
                  rows={15}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input id="category" name="category" placeholder="e.g., Strategy, Operations" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="read_time">Read Time (minutes) *</Label>
                  <Input id="read_time" name="read_time" type="number" placeholder="5" defaultValue="5" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  name="featured_image"
                  placeholder="https://example.com/image.jpg or /local-image.jpg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <select id="status" name="status" className="w-full px-3 py-2 border rounded-md" required>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 pt-8">
                  <input type="checkbox" id="is_featured" name="is_featured" className="h-4 w-4" />
                  <Label htmlFor="is_featured" className="cursor-pointer">
                    Feature this insight
                  </Label>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <Link href="/admin/insights">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" className="bg-accent hover:bg-accent/90">
                  Create Insight
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
