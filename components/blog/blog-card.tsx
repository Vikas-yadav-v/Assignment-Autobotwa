import { Calendar, Clock } from "lucide-react"

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image?: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-5">
        <div className="inline-block px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium mb-3">
          {post.category}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>
      </div>
    </div>
  )
}
