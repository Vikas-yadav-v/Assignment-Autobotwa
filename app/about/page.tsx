import { PageLayout } from "@/components/common/page-layout"
import { PageHero } from "@/components/common/page-hero"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="Building the Future of Development"
        description="We're on a mission to empower developers worldwide with tools that make building and shipping software effortless."
      />

      {/* Mission Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe that great software shouldn't be hard to build. That's why we've created a platform that
                eliminates the complexity of modern development, allowing teams to focus on what truly matters: creating
                exceptional products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startups to enterprises, we're helping developers ship faster, scale smarter, and build with
                confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-border">
              <img
                src="/team-collaboration-workspace.png"
                alt="Team collaboration"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Team First", description: "We succeed together" },
              { icon: Target, title: "Focus", description: "Quality over quantity" },
              { icon: Award, title: "Excellence", description: "Never settle for good enough" },
              { icon: Heart, title: "Empathy", description: "Build with users in mind" },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented people to join our team.
          </p>
          <Button size="lg" className="h-12 px-8">
            View Open Positions
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
