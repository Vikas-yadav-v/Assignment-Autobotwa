import { Zap, Shield, Sparkles } from "lucide-react"
import type { Feature } from "@/models/feature.interface"
import type { Testimonial } from "@/models/testimonial.interface"
import type { PricingPlan } from "@/models/pricing.interface"
import type { NavLink } from "@/models/navigation.interface"
import type { FooterData } from "@/models/footer.interface"

// Types
// export interface Feature {
//   icon: LucideIcon
//   title: string
//   description: string
// }

// export interface Testimonial {
//   name: string
//   role: string
//   company: string
//   content: string
//   initials: string
//   rating: number
// }

// export interface PricingPlan {
//   name: string
//   description: string
//   price: string
//   priceSubtext?: string
//   buttonText: string
//   buttonVariant: "default" | "outline"
//   isPopular?: boolean
//   features: { text: string }[]
// }

// Features Data
export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Deploy",
    description: "Deploy in seconds with edge-optimized infrastructure. Zero configuration required.",
  },
  {
    icon: Shield,
    title: "Fort Knox Security",
    description: "Enterprise-grade protection with automated compliance and real-time threat detection.",
  },
  {
    icon: Sparkles,
    title: "AI Acceleration",
    description: "Smart optimization that learns from your patterns. 10x productivity boost guaranteed.",
  },
]

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Kim",
    role: "CTO",
    company: "TechFlow",
    content: "Game changer. Our deployment time went from hours to literal seconds. The team velocity is unreal.",
    initials: "AK",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "VP Engineering",
    company: "Scale AI",
    content:
      "Best decision we made this year. Productivity is through the roof and our infrastructure costs dropped 40%.",
    initials: "SM",
    rating: 5,
  },
  {
    name: "Jordan Chen",
    role: "Lead Developer",
    company: "Innovate Co",
    content: "Incredible platform. The developer experience is leagues ahead of anything else. Highly recommend.",
    initials: "JC",
    rating: 5,
  },
]

// Pricing Plans Data
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    description: "For side projects",
    price: "$0",
    priceSubtext: "/mo",
    buttonText: "Get started",
    buttonVariant: "outline",
    features: [
      { text: "Up to 3 projects" },
      { text: "100GB bandwidth" },
      { text: "Community support" },
      { text: "SSL certificates" },
    ],
  },
  {
    name: "Pro",
    description: "For growing teams",
    price: "$29",
    priceSubtext: "/mo",
    buttonText: "Get started",
    buttonVariant: "default",
    isPopular: true,
    features: [
      { text: "Unlimited projects" },
      { text: "1TB bandwidth" },
      { text: "Priority support" },
      { text: "Advanced analytics" },
      { text: "Custom domains" },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    buttonText: "Contact sales",
    buttonVariant: "outline",
    features: [
      { text: "Unlimited everything" },
      { text: "Dedicated support" },
      { text: "SLA guarantee" },
      { text: "Custom integrations" },
      { text: "Advanced security" },
      { text: "Priority features" },
    ],
  },
]

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { href: "/features", label: "Features" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/pricing", label: "Pricing" },
]

// Footer Data
export const FOOTER_SECTIONS: FooterData = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/help" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "#" },
      { label: "Updates", href: "/updates" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
}
