import { PageLayout } from "@/components/common/page-layout"
import { PageHero } from "@/components/common/page-hero"
import { JobListing, type JobOpening } from "@/components/careers/job-listing"

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Build the next generation of our platform and work with cutting-edge technologies.",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, intuitive experiences that delight millions of developers worldwide.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Scale our infrastructure to handle billions of requests with reliability and efficiency.",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers succeed and build lasting relationships with enterprise clients.",
  },
  {
    id: 5,
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Tell our story and grow our brand presence in the developer community.",
  },
]

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        title="Join Our Team"
        description="Help us build the future of software development. We're looking for talented, passionate people to join our mission."
      />

      {/* Benefits Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Competitive Salary", description: "Top-tier compensation and equity packages" },
              { title: "Health Benefits", description: "Comprehensive medical, dental, and vision coverage" },
              { title: "Remote Friendly", description: "Work from anywhere in the world" },
              { title: "Learning Budget", description: "$2,000 annual budget for courses and conferences" },
              { title: "Unlimited PTO", description: "Take the time you need to recharge" },
              { title: "Latest Equipment", description: "MacBook Pro and accessories of your choice" },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
