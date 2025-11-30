"use client"

import { useState, useCallback } from "react"
import { Sparkles } from "lucide-react"
import type { PricingPlan } from "@/models/pricing.interface"
import { PricingCard } from "./pricing-card"

interface PricingSectionProps {
  plans: PricingPlan[]
}

const TRUST_BADGES = ["Acme Corp", "TechStart", "InnovateLab", "FutureBuild"]

export function PricingSection({ plans }: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePlanSelect = useCallback((planName: string) => {
    setSelectedPlan(planName)
  }, [])

  return (
    <section
      id="pricing"
      className="px-6 py-16 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
          </div>
          <h2
            id="pricing-heading"
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance tracking-[-0.02em] leading-[0.95]"
          >
            Simple pricing.
            <br />
            <span className="text-muted-foreground">No surprises.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Choose the plan that fits your ambition
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isSelected={selectedPlan === plan.name}
              onSelect={handlePlanSelect}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {TRUST_BADGES.map((company) => (
              <div key={company} className="text-2xl font-bold text-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
