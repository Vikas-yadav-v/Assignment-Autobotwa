import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Code, Zap, Shield, Database, Globe } from "lucide-react"

const DOC_CATEGORIES = [
  {
    title: "Getting Started",
    icon: Zap,
    links: [
      { title: "Quick Start Guide", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Configuration", href: "#" },
      { title: "First Deployment", href: "#" },
    ],
  },
  {
    title: "API Reference",
    icon: Code,
    links: [
      { title: "REST API", href: "#" },
      { title: "GraphQL API", href: "#" },
      { title: "Webhooks", href: "#" },
      { title: "SDK Documentation", href: "#" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    links: [
      { title: "Authentication", href: "#" },
      { title: "Authorization", href: "#" },
      { title: "Best Practices", href: "#" },
      { title: "Compliance", href: "#" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    links: [
      { title: "Setup", href: "#" },
      { title: "Migrations", href: "#" },
      { title: "Queries", href: "#" },
      { title: "Performance", href: "#" },
    ],
  },
  {
    title: "Deployment",
    icon: Globe,
    links: [
      { title: "Deploy to Production", href: "#" },
      { title: "Custom Domains", href: "#" },
      { title: "Environment Variables", href: "#" },
      { title: "CI/CD Integration", href: "#" },
    ],
  },
  {
    title: "Guides",
    icon: BookOpen,
    links: [
      { title: "Best Practices", href: "#" },
      { title: "Troubleshooting", href: "#" },
      { title: "Migration Guide", href: "#" },
      { title: "Advanced Topics", href: "#" },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Documentation</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Everything you need to know to build with Velocity.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search documentation..." className="h-14 pl-12 text-base" />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOC_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">{category.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {category.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 bg-muted-foreground group-hover:bg-primary rounded-full transition-colors" />
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="px-6 mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Popular Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "How to Deploy Your First App",
                  description: "Step-by-step guide to deploying your application in minutes.",
                  time: "5 min read",
                },
                {
                  title: "Setting Up Custom Domains",
                  description: "Configure custom domains and SSL certificates for your projects.",
                  time: "8 min read",
                },
                {
                  title: "Environment Variables Guide",
                  description: "Learn how to manage environment variables securely across environments.",
                  time: "6 min read",
                },
                {
                  title: "Optimizing Performance",
                  description: "Tips and tricks to make your applications lightning fast.",
                  time: "10 min read",
                },
              ].map((guide) => (
                <div
                  key={guide.title}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
                  <span className="text-xs text-muted-foreground">{guide.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
