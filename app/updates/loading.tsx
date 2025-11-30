import { Navigation } from "@/components/landing/navigation"
import { Shimmer } from "@/components/common/shimmer"

export default function UpdatesLoading() {
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

      {/* Updates Timeline Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-muted pb-12">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-muted" />
                <div className="space-y-4">
                  <Shimmer className="h-6 w-32" />
                  <Shimmer className="h-8 w-3/4" />
                  <Shimmer className="h-4 w-full" />
                  <Shimmer className="h-4 w-5/6" />
                  <div className="flex gap-2 mt-4">
                    <Shimmer className="h-6 w-24" />
                    <Shimmer className="h-6 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
