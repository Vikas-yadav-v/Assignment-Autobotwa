import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Feature } from "@/models/feature.interface"

interface FeaturesSectionProps {
  features: Feature[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  const getFeatureImage = (title: string) => {
    if (title.includes("Deploy")) return "/assets/images/feature-deploy.jpg"
    if (title.includes("Security")) return "/assets/images/feature-security.jpg"
    if (title.includes("AI")) return "/assets/images/feature-ai.jpg"
    return "/placeholder.svg?height=300&width=400"
  }

  return (
    <section id="features" className="px-6 py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance tracking-[-0.02em] leading-[0.95]">
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance font-light leading-relaxed">
            Built from the ground up for modern development workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="border border-border bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="pt-4 pb-6 px-6 relative">
                  <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image
                      src={getFeatureImage(feature.title) || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
