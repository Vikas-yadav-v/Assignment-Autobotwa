import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { Calendar, Tag } from "lucide-react"

const UPDATES = [
  {
    date: "March 15, 2024",
    version: "v2.5.0",
    title: "Performance Improvements & New Features",
    items: [
      "50% faster build times with improved caching",
      "New analytics dashboard with real-time insights",
      "Enhanced security features with automatic vulnerability scanning",
      "Support for custom build commands",
    ],
  },
  {
    date: "March 1, 2024",
    version: "v2.4.0",
    title: "UI Enhancements & Bug Fixes",
    items: [
      "Redesigned dashboard with improved navigation",
      "Dark mode improvements across all pages",
      "Fixed deployment status update delays",
      "Improved error messages and debugging tools",
    ],
  },
  {
    date: "February 15, 2024",
    version: "v2.3.0",
    title: "Enterprise Features",
    items: [
      "SSO support for enterprise customers",
      "Advanced team permissions and roles",
      "Audit logs for compliance tracking",
      "Custom domain SSL certificate automation",
    ],
  },
  {
    date: "February 1, 2024",
    version: "v2.2.0",
    title: "Developer Experience Updates",
    items: [
      "New CLI tool with interactive commands",
      "Improved API documentation",
      "Webhook retry mechanism",
      "GraphQL API beta release",
    ],
  },
  {
    date: "January 15, 2024",
    version: "v2.1.0",
    title: "Infrastructure & Scaling",
    items: [
      "Global CDN expansion to 25 new regions",
      "Auto-scaling improvements",
      "Database connection pooling",
      "99.99% uptime SLA for Enterprise plans",
    ],
  },
]

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Product Updates</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay up to date with the latest features, improvements, and fixes.
            </p>
          </div>
        </section>

        {/* Updates Timeline */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {UPDATES.map((update, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== UPDATES.length - 1 && (
                    <div className="absolute left-[19px] top-12 w-0.5 h-full bg-border" />
                  )}

                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                      <div className="w-4 h-4 bg-primary-foreground rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {update.date}
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            <Tag className="w-3 h-3" />
                            {update.version}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">{update.title}</h3>

                        <ul className="space-y-3">
                          {update.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex gap-3">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="px-6 mt-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates and announcements.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" type="email" className="h-12" />
              <Button className="h-12 px-8">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
