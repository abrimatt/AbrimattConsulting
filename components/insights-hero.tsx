import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp } from "lucide-react"

export function InsightsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-accent">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">Industry Insights & Thought Leadership</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
              Business Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Stay ahead of industry trends with our expert insights, strategic guidance, and actionable resources
              designed to drive your business forward.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search insights and resources..."
                className="pl-10 pr-4 py-3 bg-background border-border"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Strategy", "Digital Transformation", "Leadership", "Operations", "Finance"].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={
                  category === "All"
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-transparent hover:bg-accent/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
