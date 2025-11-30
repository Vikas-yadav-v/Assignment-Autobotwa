export interface PricingPlan {
  name: string
  description: string
  price: string
  priceSubtext?: string
  buttonText: string
  buttonVariant: "default" | "outline"
  isPopular?: boolean
  features: { text: string }[]
}
