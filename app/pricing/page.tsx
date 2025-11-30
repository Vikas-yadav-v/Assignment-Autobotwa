import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { PricingSection } from "@/components/landing/pricing-section"
import { PageHero } from "@/components/common/page-hero"
import { PRICING_PLANS } from "@/lib/constants/landing-data"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        badge="Pricing"
        title="Simple, transparent pricing"
        subtitle="Choose the plan that's right for you. All plans include a 14-day free trial."
      />

      <PricingSection plans={PRICING_PLANS} />

      {/* FAQ Section */}
      <section className="px-6 py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all paid plans include a 14-day free trial. No credit card required.",
              },
              {
                question: "What happens after the trial ends?",
                answer:
                  "You'll be automatically enrolled in your chosen plan. You can cancel anytime before the trial ends.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
