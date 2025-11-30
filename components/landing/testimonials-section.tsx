import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import type { Testimonial } from "@/models/testimonial.interface"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="px-6 py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance tracking-[-0.02em] leading-[0.95]">
            Loved by teams
            <br />
            <span className="text-muted-foreground">around the world</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Join thousands of developers building the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border border-border bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <CardContent className="pt-6 pb-6 px-6 relative">
                <Quote className="w-8 h-8 text-primary/20 mb-6" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-8 leading-relaxed text-base font-light italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex-shrink-0">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&query=professional+headshot+portrait`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
