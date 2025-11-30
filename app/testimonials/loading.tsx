import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { Shimmer, ShimmerCard } from "@/components/common/shimmer"

export default function TestimonialsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Shimmer className="h-8 w-48 mx-auto mb-8 rounded-full" />
          <Shimmer className="h-20 w-full max-w-3xl mx-auto mb-6" />
          <Shimmer className="h-8 w-full max-w-2xl mx-auto" />
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
