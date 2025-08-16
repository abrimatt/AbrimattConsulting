export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  category: string
  author: string
  date: string
  read_time: string
  image: string
  slug: string
  created_at: string
  updated_at: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  status: string
}

class ApiService {
  private baseUrl: string

  constructor() {
    // Use environment variable for Laravel API URL, fallback to localhost
    this.baseUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL || "http://localhost:8000/api"
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options?.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("API request failed:", error)
      throw error
    }
  }

  // Fetch all blog posts
  async getBlogPosts(page = 1, limit = 10): Promise<ApiResponse<BlogPost[]>> {
    return this.request<ApiResponse<BlogPost[]>>(`/blog-posts?page=${page}&limit=${limit}`)
  }

  // Fetch featured blog posts
  async getFeaturedPosts(): Promise<ApiResponse<BlogPost[]>> {
    return this.request<ApiResponse<BlogPost[]>>("/blog-posts/featured")
  }

  // Fetch single blog post by slug
  async getBlogPost(slug: string): Promise<ApiResponse<BlogPost>> {
    return this.request<ApiResponse<BlogPost>>(`/blog-posts/${slug}`)
  }

  // Fetch posts by category
  async getPostsByCategory(category: string): Promise<ApiResponse<BlogPost[]>> {
    return this.request<ApiResponse<BlogPost[]>>(`/blog-posts/category/${category}`)
  }
}

export const apiService = new ApiService()
