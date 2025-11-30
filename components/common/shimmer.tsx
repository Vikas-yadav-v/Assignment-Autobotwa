import { cn } from "@/lib/utils"

interface ShimmerProps {
  className?: string
}

export function Shimmer({ className }: ShimmerProps) {
  return <div className={cn("animate-pulse bg-muted rounded-md", className)} />
}

export function ShimmerCard({ className }: ShimmerProps) {
  return (
    <div className={cn("bg-card border rounded-lg p-6 space-y-4", className)}>
      <Shimmer className="h-6 w-3/4" />
      <Shimmer className="h-4 w-full" />
      <Shimmer className="h-4 w-5/6" />
      <Shimmer className="h-10 w-32 mt-4" />
    </div>
  )
}

export function ShimmerText({ className }: ShimmerProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Shimmer className="h-4 w-full" />
      <Shimmer className="h-4 w-5/6" />
      <Shimmer className="h-4 w-4/5" />
    </div>
  )
}

export function ShimmerImage({ className }: ShimmerProps) {
  return <Shimmer className={cn("w-full aspect-video", className)} />
}

export function ShimmerAvatar({ className }: ShimmerProps) {
  return <Shimmer className={cn("w-12 h-12 rounded-full", className)} />
}
