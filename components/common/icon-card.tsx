import type { LucideIcon } from "lucide-react"

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
