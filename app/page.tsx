import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { Footer } from "@/components/landing/footer"
import { FEATURES, TESTIMONIALS, PRICING_PLANS } from "@/lib/constants/landing-data"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection features={FEATURES} />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <PricingSection plans={PRICING_PLANS} />
      <Footer />
    </div>
  )
}
