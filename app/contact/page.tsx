import { PageLayout } from "@/components/common/page-layout"
import { PageHero } from "@/components/common/page-hero"
import { IconCard } from "@/components/common/icon-card"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"

const CONTACT_INFO = [
  { icon: Mail, title: "Email", content: "hello@velocity.com" },
  { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
  { icon: MessageSquare, title: "Live Chat", content: "Available 24/7" },
  { icon: MapPin, title: "Office", content: "San Francisco, CA" },
]

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team is here to help you with any questions or concerns you may have.
                </p>
              </div>

              <div className="space-y-6">
                {CONTACT_INFO.map((item) => (
                  <IconCard key={item.title} icon={item.icon} title={item.title} description={item.content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
