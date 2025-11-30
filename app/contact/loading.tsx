import { Navigation } from "@/components/landing/navigation"
import { Shimmer } from "@/components/common/shimmer"

export default function ContactLoading() {
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

      {/* Contact Form Shimmer */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Shimmer */}
            <div className="space-y-6">
              <Shimmer className="h-10 w-48 mb-8" />
              <div className="space-y-4">
                <Shimmer className="h-10 w-full" />
                <Shimmer className="h-10 w-full" />
                <Shimmer className="h-10 w-full" />
                <Shimmer className="h-32 w-full" />
                <Shimmer className="h-12 w-32 mt-6" />
              </div>
            </div>

            {/* Contact Info Shimmer */}
            <div className="space-y-8">
              <Shimmer className="h-10 w-48 mb-8" />
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shimmer className="h-12 w-12 rounded-full flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Shimmer className="h-5 w-24" />
                    <Shimmer className="h-4 w-48" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shimmer className="h-12 w-12 rounded-full flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Shimmer className="h-5 w-24" />
                    <Shimmer className="h-4 w-48" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shimmer className="h-12 w-12 rounded-full flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Shimmer className="h-5 w-24" />
                    <Shimmer className="h-4 w-48" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
