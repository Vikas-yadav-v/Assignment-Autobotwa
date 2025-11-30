import { PageLayout } from "@/components/common/page-layout"
import { PageHero } from "@/components/common/page-hero"
import { FeaturedBlogCard } from "@/components/blog/featured-blog-card"
import { BlogCard, type BlogPost } from "@/components/blog/blog-card"

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips to Optimize Your Deployment Pipeline",
    excerpt: "Learn how to speed up your deployments and reduce downtime with these proven strategies.",
    category: "Engineering",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "/deployment-pipeline-dashboard.jpg",
  },
  {
    id: 2,
    title: "The Future of Serverless Architecture",
    excerpt: "Exploring the next generation of serverless computing and what it means for developers.",
    category: "Technology",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    image: "/serverless-cloud-architecture.jpg",
  },
  {
    id: 3,
    title: "Security Best Practices for Modern Apps",
    excerpt: "Essential security measures every development team should implement today.",
    category: "Security",
    date: "Mar 8, 2024",
    readTime: "6 min read",
    image: "/security-shield-protection.png",
  },
  {
    id: 4,
    title: "Scaling to 1 Million Users: A Case Study",
    excerpt: "How we helped a startup scale from zero to millions of users in just 6 months.",
    category: "Case Study",
    date: "Mar 5, 2024",
    readTime: "10 min read",
    image: "/growth-chart-analytics.jpg",
  },
  {
    id: 5,
    title: "Developer Experience: Why It Matters",
    excerpt: "The impact of great developer experience on productivity and team satisfaction.",
    category: "Culture",
    date: "Mar 1, 2024",
    readTime: "4 min read",
    image: "/developer-coding-workspace.jpg",
  },
  {
    id: 6,
    title: "AI-Powered Development Tools",
    excerpt: "How artificial intelligence is transforming the way we build software.",
    category: "AI",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image: "/artificial-intelligence-technology.png",
  },
]

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero title="Blog" description="Insights, tutorials, and updates from the Velocity team." />

      {/* Featured Post */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <FeaturedBlogCard post={BLOG_POSTS[0]} />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
