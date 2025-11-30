"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check, Mail, User, Building2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function GetStartedPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "Starter"

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get Started with {plan}
            </h1>
            <p className="text-xl text-muted-foreground">Fill out the form below and we'll get you set up in minutes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Your Information</CardTitle>
                <CardDescription>Tell us a bit about yourself and your company</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name
                    </Label>
                    <Input id="name" placeholder="John Doe" className="h-12" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="h-12" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Company Name
                    </Label>
                    <Input id="company" placeholder="Acme Inc." className="h-12" required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Start Free Trial
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                      </div>
                      <span className="text-muted-foreground">14-day free trial, no credit card required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                      </div>
                      <span className="text-muted-foreground">Full access to all {plan} features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                      </div>
                      <span className="text-muted-foreground">Dedicated onboarding support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                      </div>
                      <span className="text-muted-foreground">Cancel anytime, no questions asked</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Our team is here to help you get started. Contact us at:
                  </p>
                  <a href="mailto:support@example.com" className="text-primary hover:underline font-medium">
                    support@example.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
