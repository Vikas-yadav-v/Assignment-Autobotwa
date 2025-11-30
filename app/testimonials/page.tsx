import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PageHero } from "@/components/common/page-hero"
import { TESTIMONIALS } from "@/lib/constants/landing-data"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        badge="Customer Stories"
        title="Trusted by industry leaders"
        subtitle="See why developers and teams worldwide choose Velocity for their deployment needs."
      />

      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* Stats Section */}
      <section className="px-6 py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">4.9/5</p>
              <p className="text-muted-foreground">Average rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">10,000+</p>
              <p className="text-muted-foreground">Happy customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">99.9%</p>
              <p className="text-muted-foreground">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Join our growing community</h2>
          <p className="text-xl text-muted-foreground mb-8">Start building amazing things today</p>
          <Button size="lg" asChild>
            <Link href="/get-started">Get started for free</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
