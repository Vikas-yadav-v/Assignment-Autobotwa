import { Navigation } from "@/components/landing/navigation"
import { Shimmer, ShimmerImage } from "@/components/common/shimmer"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Shimmer */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Shimmer className="h-14 w-2/3 mx-auto" />
          <Shimmer className="h-6 w-3/4 mx-auto" />
        </div>
      </section>

      {/* Featured Post Shimmer */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <ShimmerImage className="h-full min-h-[400px]" />
              <div className="p-8 space-y-4">
                <Shimmer className="h-6 w-24" />
                <Shimmer className="h-8 w-full" />
                <Shimmer className="h-5 w-5/6" />
                <Shimmer className="h-10 w-32 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Shimmer */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card border rounded-lg overflow-hidden">
                <ShimmerImage />
                <div className="p-6 space-y-4">
                  <Shimmer className="h-6 w-3/4" />
                  <Shimmer className="h-4 w-full" />
                  <Shimmer className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
