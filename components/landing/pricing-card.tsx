"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import type { PricingPlan } from "@/models/pricing.interface"
import Link from "next/link"

interface PricingCardProps {
  plan: PricingPlan
  isSelected: boolean
  onSelect: (planName: string) => void
}

export function PricingCard({ plan, isSelected, onSelect }: PricingCardProps) {
  return (
    <Card
      className={`${
        plan.isPopular
          ? "border-2 border-primary bg-card relative lg:scale-105 shadow-2xl shadow-primary/20"
          : "border border-border bg-card hover:border-primary/20"
      } ${
        isSelected
          ? "ring-4 ring-primary ring-offset-4 ring-offset-background"
          : "hover:shadow-xl hover:shadow-primary/5"
      } group cursor-pointer transition-all duration-300`}
    >
      {plan.isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {isSelected && (
        <div className="absolute -top-5 right-8 z-10">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
            <Check className="w-6 h-6 stroke-[3]" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <CardContent className="pt-6 pb-6 px-6 relative">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {plan.name}
          </h3>
          <p className="text-muted-foreground text-base font-light">{plan.description}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold text-foreground tracking-tight">{plan.price}</span>
            {plan.priceSubtext && (
              <span className="text-muted-foreground text-base font-light">{plan.priceSubtext}</span>
            )}
          </div>
        </div>

        <Link href={`/get-started?plan=${plan.name}`} className="block mb-8">
          <Button
            onClick={() => onSelect(plan.name)}
            variant={plan.buttonVariant}
            className={`w-full h-12 text-base font-semibold ${
              plan.buttonVariant === "outline"
                ? "bg-card/50 backdrop-blur-sm hover:bg-card"
                : "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            } ${isSelected ? "ring-2 ring-primary ring-offset-2" : ""} transition-all`}
            aria-pressed={isSelected}
          >
            {isSelected ? (
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Selected
              </span>
            ) : (
              plan.buttonText
            )}
          </Button>
        </Link>

        <ul className="space-y-4" aria-label="Plan features">
          {plan.features.map((feature, index) => (
            <li key={`${plan.name}-feature-${index}`} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary stroke-[3]" />
              </div>
              <span className="text-muted-foreground text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
