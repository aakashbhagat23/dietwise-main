import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Effective Diet Planning",
    excerpt:
      "Discover how AI-powered tools like DietWise use nutritional science to create personalized meal plans that actually work.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 15, 2023",
    readTime: "5 min read",
    slug: "science-behind-effective-diet-planning",
  },
  {
    id: 2,
    title: "5 Common Diet Myths Debunked",
    excerpt:
      "Let's separate fact from fiction when it comes to popular dieting advice and how tools like DietWise can help you make informed choices.",
    image: "/placeholder.svg?height=300&width=500",
    date: "June 2, 2023",
    readTime: "4 min read",
    slug: "common-diet-myths-debunked",
  },
  {
    id: 3,
    title: "How to Maintain a Balanced Diet with a Busy Schedule",
    excerpt:
      "Struggling to eat healthy with a packed calendar? Learn how DietWise can help you plan nutritious meals even on your busiest days.",
    image: "/placeholder.svg?height=300&width=500",
    date: "June 18, 2023",
    readTime: "6 min read",
    slug: "balanced-diet-busy-schedule",
  },
]

const BlogSection = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Diet & Nutrition Blog
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Expert insights to help you on your health journey
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950"
          >
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
