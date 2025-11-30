import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: "50K+", label: "Developers" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" },
]

export function HeroSection() {
  return (
    <section className="relative px-6 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[128px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 border border-border hover:border-primary/30 transition-colors">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted by 50,000+ developers worldwide</span>
          </div>
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-foreground mb-10 text-center text-balance leading-[0.9] tracking-[-0.02em]">
          Ship products
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            lightning fast
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto text-center text-balance leading-relaxed font-light">
          The complete platform for teams who refuse to compromise. Build, deploy, and scale with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
          <Button
            size="lg"
            className="text-base px-10 h-14 gap-2 min-w-[220px] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Start building free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-10 h-14 bg-card/50 backdrop-blur-sm min-w-[220px] hover:bg-card transition-all"
          >
            Watch demo
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10 bg-card">
            <div className="aspect-video relative bg-gradient-to-br from-primary/20 via-accent/20 to-background">
              <Image
                src="/assets/images/modern-analytics-dashboard.png"
                alt="Product Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
