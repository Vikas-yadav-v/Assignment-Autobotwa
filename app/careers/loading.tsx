import { Navigation } from "@/components/landing/navigation"
import { Shimmer, ShimmerCard } from "@/components/common/shimmer"

export default function CareersLoading() {
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

      {/* Benefits Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-10 w-48 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </section>

      {/* Job Listings Shimmer */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Shimmer className="h-10 w-64 mx-auto mb-12" />
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <Shimmer className="h-6 w-64" />
                    <Shimmer className="h-4 w-32" />
                  </div>
                  <Shimmer className="h-10 w-32" />
                </div>
                <Shimmer className="h-4 w-full" />
                <div className="flex gap-2">
                  <Shimmer className="h-6 w-20" />
                  <Shimmer className="h-6 w-24" />
                  <Shimmer className="h-6 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
