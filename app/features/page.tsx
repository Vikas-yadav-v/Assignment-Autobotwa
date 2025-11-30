import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { FeaturesSection } from "@/components/landing/features-section"
import { PageHero } from "@/components/common/page-hero"
import { FEATURES } from "@/lib/constants/landing-data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        badge="Platform Features"
        title="Built for the modern web"
        subtitle="Discover all the powerful features that make Velocity the best platform for deploying and scaling your applications."
      />

      <FeaturesSection features={FEATURES} />

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to experience the difference?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers already building faster with Velocity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/get-started">
                Get started for free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
