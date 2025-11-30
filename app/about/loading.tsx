import { Navigation } from "@/components/landing/navigation"
import { Shimmer, ShimmerCard, ShimmerText } from "@/components/common/shimmer"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Shimmer */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Shimmer className="h-14 w-2/3 mx-auto" />
          <Shimmer className="h-6 w-3/4 mx-auto" />
        </div>
      </section>

      {/* Mission Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-10 w-48 mx-auto mb-8" />
          <div className="max-w-3xl mx-auto">
            <ShimmerText />
          </div>
        </div>
      </section>

      {/* Values Shimmer */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-10 w-48 mx-auto mb-12" />
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
