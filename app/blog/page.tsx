import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Effective Diet Planning",
    excerpt:
      "Discover how AI-powered tools like DietWise use nutritional science to create personalized meal plans that actually work.",
    image: "/img-blog-post-1.png",
    date: "May 15, 2023",
    readTime: "5 min read",
    slug: "science-behind-effective-diet-planning",
    category: "Nutrition Science",
  },
  {
    id: 2,
    title: "5 Common Diet Myths Debunked",
    excerpt:
      "Let's separate fact from fiction when it comes to popular dieting advice and how tools like DietWise can help you make informed choices.",
    image: "/img-blog-post-2.jpg",
    date: "June 2, 2023",
    readTime: "4 min read",
    slug: "common-diet-myths-debunked",
    category: "Myth Busting",
  },
  {
    id: 3,
    title: "How to Maintain a Balanced Diet with a Busy Schedule",
    excerpt:
      "Struggling to eat healthy with a packed calendar? Learn how DietWise can help you plan nutritious meals even on your busiest days.",
    image: "/img-blog-post-3.jpg",
    date: "June 18, 2023",
    readTime: "6 min read",
    slug: "balanced-diet-busy-schedule",
    category: "Lifestyle",
  },
  {
    id: 4,
    title: "Understanding Macros: A Beginner's Guide",
    excerpt:
      "Learn the basics of macronutrients and how tracking them with DietWise can help you reach your health and fitness goals faster.",
    image: "/img-blog-post-4.jpg",
    date: "July 5, 2023",
    readTime: "7 min read",
    slug: "understanding-macros-beginners-guide",
    category: "Nutrition Basics",
  },
  {
    id: 5,
    title: "The Psychology of Eating: How AI Can Help Build Better Habits",
    excerpt:
      "Explore the psychological aspects of eating habits and how AI tools like DietWise can help you develop healthier relationships with food.",
    image: "/diet-ai-1.jpg",
    date: "July 22, 2023",
    readTime: "8 min read",
    slug: "psychology-eating-ai-better-habits",
    category: "Psychology",
  },
  {
    id: 6,
    title: "Seasonal Eating: Why It Matters for Your Health and the Planet",
    excerpt:
      "Discover the benefits of eating seasonally and how DietWise can help you incorporate seasonal foods into your personalized meal plans.",
    image: "/diet-ai-2.jpg",
    date: "August 10, 2023",
    readTime: "5 min read",
    slug: "seasonal-eating-health-planet",
    category: "Sustainable Nutrition",
  },
]

export const metadata = {
  title: "Diet & Nutrition Blog | DietWise",
  description:
    "Explore our collection of expert articles on nutrition, diet planning, healthy eating habits, and how AI can transform your approach to food.",
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Diet & Nutrition Blog</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Expert insights, tips, and advice to help you on your health journey
          </p>
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
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">{post.category}</span>
                  <div className="text-slate-500 dark:text-slate-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
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
    </div>
  )
}
