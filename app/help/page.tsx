import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, HelpCircle, Book, MessageCircle, Mail } from "lucide-react"

const FAQ_ITEMS = [
  {
    question: "How do I get started with Velocity?",
    answer:
      "Getting started is easy! Sign up for a free account, connect your repository, and deploy your first project in under 5 minutes. Check out our Quick Start guide for detailed instructions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal and wire transfers for enterprise customers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll retain access until the end of your billing period.",
  },
  {
    question: "Do you offer discounts for startups?",
    answer:
      "Yes! We offer special pricing for qualified startups. Contact our sales team to learn more about our startup program and eligibility requirements.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 email support for all plans, priority support for Pro users, and dedicated support channels for Enterprise customers. Our average response time is under 2 hours.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with SOC 2, GDPR, and other industry standards to keep your data safe.",
  },
]

const SUPPORT_OPTIONS = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides and API references",
    action: "Browse Docs",
    href: "/docs",
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Connect with other developers",
    action: "Join Community",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help from our support team",
    action: "Contact Us",
    href: "/contact",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Help Center</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions and get the help you need.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search for help..." className="h-14 pl-12 text-base" />
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {SUPPORT_OPTIONS.map((option) => (
                <div
                  key={option.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={option.href}>{option.action}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 mt-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to assist you with any questions.
            </p>
            <Button size="lg" className="h-12 px-8" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
