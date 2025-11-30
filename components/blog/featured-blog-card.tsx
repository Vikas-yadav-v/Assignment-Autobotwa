import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "./blog-card"

interface FeaturedBlogCardProps {
  post: BlogPost
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="grid md:grid-cols-2">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
            Featured
          </div>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          <Button className="w-fit">
            Read Article <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
