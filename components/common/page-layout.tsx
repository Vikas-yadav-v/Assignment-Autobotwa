import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">{children}</main>
      <Footer />
    </div>
  )
}
