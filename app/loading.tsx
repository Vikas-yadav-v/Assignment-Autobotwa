import { Navigation } from "@/components/landing/navigation"
import { Shimmer, ShimmerCard } from "@/components/common/shimmer"

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <Shimmer className="h-16 w-3/4 mx-auto" />
          <Shimmer className="h-6 w-2/3 mx-auto" />
          <div className="flex gap-4 justify-center">
            <Shimmer className="h-12 w-32" />
            <Shimmer className="h-12 w-32" />
          </div>
        </div>
      </section>

      {/* Features Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-12 w-64 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </section>

      {/* Testimonials Shimmer */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-12 w-64 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </section>

      {/* Pricing Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-12 w-64 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </section>
    </div>
  )
}
