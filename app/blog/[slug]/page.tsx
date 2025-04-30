import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "science-behind-effective-diet-planning": {
      title: "The Science Behind Effective Diet Planning",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/img-blog-post-1.png",
      category: "Nutrition Science",
      content: `
        <h2>Understanding Nutritional Science</h2>
        <p>Effective diet planning is rooted in nutritional science, which studies how nutrients in food affect our bodies and health. When we talk about personalized diet plans, we're referring to meal plans that are tailored to an individual's specific nutritional needs, health goals, and preferences.</p>
        
        <p>DietWise leverages advanced AI algorithms to analyze your unique profile and create diet plans that are scientifically optimized for your body. This approach is far more effective than generic, one-size-fits-all diets that don't account for individual differences.</p>
        
        <h2>The Role of AI in Personalized Nutrition</h2>
        <p>Artificial intelligence has revolutionized the way we approach diet planning. By processing vast amounts of nutritional data and learning from user feedback, AI systems like DietWise can identify patterns and make recommendations that would be impossible for humans to calculate manually.</p>
        
        <p>When you use DietWise, the AI considers factors such as your age, weight, height, activity level, health conditions, and dietary preferences to create a meal plan that's specifically designed to help you reach your goals while ensuring you get all the nutrients your body needs.</p>
        
        <h2>Macronutrients and Micronutrients: Finding the Right Balance</h2>
        <p>One of the key aspects of effective diet planning is finding the right balance of macronutrients (proteins, carbohydrates, and fats) and micronutrients (vitamins and minerals). The optimal ratio varies depending on your goals and individual needs.</p>
        
        <p>For example, someone looking to build muscle might need a higher protein intake, while someone with specific health conditions might need to focus on certain micronutrients. DietWise takes all these factors into account when generating your personalized meal plans.</p>
        
        <h2>Adapting to Your Body's Response</h2>
        <p>Perhaps the most powerful aspect of AI-driven diet planning is the ability to adapt based on your body's response. As you track your progress in DietWise, the AI learns from the data and adjusts your meal plans accordingly.</p>
        
        <p>This continuous optimization process ensures that your diet remains effective even as your body changes or your goals evolve. It's like having a nutritionist who's constantly monitoring your progress and making adjustments to keep you on track.</p>
        
        <h2>Conclusion: The Future of Nutrition is Personalized</h2>
        <p>The science is clear: personalized nutrition is more effective than generic diet plans. By leveraging AI technology, DietWise makes personalized nutrition accessible to everyone, not just those who can afford personal nutritionists.</p>
        
        <p>Ready to experience the science of personalized nutrition for yourself? <a href="https://dietwise.abwebtech.com/">Try DietWise today</a> and discover how AI-powered diet planning can transform your approach to nutrition and help you achieve your health goals more effectively than ever before.</p>
      `,
    },
    "common-diet-myths-debunked": {
      title: "5 Common Diet Myths Debunked",
      date: "June 2, 2023",
      readTime: "4 min read",
      image: "/img-blog-post-2.jpg",
      category: "Myth Busting",
      content: `
        <p>In the world of nutrition and dieting, misinformation spreads quickly. Let's separate fact from fiction by debunking some of the most common diet myths with science-backed evidence.</p>
        
        <h2>Myth #1: All Calories Are Created Equal</h2>
        <p>Many people believe that "a calorie is a calorie" regardless of its source. However, research shows that different foods go through different metabolic pathways and have varying effects on hunger, hormones, and health.</p>
        
        <p>For example, protein calories are more filling and require more energy to digest than fat calories. DietWise understands these nuances and creates meal plans that optimize the types of calories you consume, not just the total amount.</p>
        
        <h2>Myth #2: Eating Fat Makes You Fat</h2>
        <p>The low-fat diet craze of the past few decades was based on the oversimplified idea that eating fat leads to body fat. In reality, healthy fats are essential for optimal health and can actually help with weight management by increasing satiety.</p>
        
        <p>DietWise incorporates healthy fats like avocados, nuts, and olive oil into meal plans, recognizing their important role in a balanced diet.</p>
        
        <h2>Myth #3: You Need to Eat Every 2-3 Hours to Boost Metabolism</h2>
        <p>The idea that frequent, small meals "stoke the metabolic fire" has been widely promoted. However, studies show that meal frequency has little to no effect on metabolism or fat burning.</p>
        
        <p>What matters more is your total daily caloric intake and the quality of those calories. DietWise helps you find an eating schedule that works for your lifestyle and preferences, whether that's three square meals or six smaller ones.</p>
        
        <h2>Myth #4: Carbs Are Bad for You</h2>
        <p>Low-carb diets have been popular for weight loss, leading many to believe that all carbohydrates are unhealthy. The truth is that the type of carbs matters significantly.</p>
        
        <p>Whole, unprocessed carbohydrates from fruits, vegetables, and whole grains are highly nutritious and beneficial for most people. DietWise helps you choose the right types and amounts of carbohydrates for your specific needs and goals.</p>
        
        <h2>Myth #5: Detox Diets Cleanse Your Body</h2>
        <p>The concept of "detoxing" through special diets or juice cleanses is not supported by scientific evidence. Your body has its own sophisticated detoxification system, primarily involving the liver and kidneys.</p>
        
        <p>Rather than temporary "detox" regimens, DietWise focuses on sustainable, nutrient-dense eating plans that support your body's natural processes and overall health.</p>
        
        <h2>The DietWise Approach: Evidence-Based Nutrition</h2>
        <p>At DietWise, we're committed to cutting through the noise and providing evidence-based nutrition guidance. Our AI-powered platform creates personalized meal plans based on scientific research, not fads or myths.</p>
        
        <p>Ready to experience a more rational, effective approach to nutrition? <a href="https://dietwise.abwebtech.com/">Try DietWise today</a> and let our AI help you navigate the complex world of nutrition with confidence.</p>
      `,
    },
    "balanced-diet-busy-schedule": {
      title: "How to Maintain a Balanced Diet with a Busy Schedule",
      date: "June 18, 2023",
      readTime: "6 min read",
      image: "/img-blog-post-3.jpg",
      category: "Lifestyle",
      content: `
        <p>Maintaining a balanced diet while juggling a busy schedule can feel like an impossible task. Between work deadlines, family responsibilities, and social commitments, nutrition often takes a backseat. But with the right strategies and tools like DietWise, eating healthy can become manageable even for the busiest individuals.</p>
        
        <h2>Plan Ahead with Smart Meal Prep</h2>
        <p>One of the most effective strategies for busy individuals is meal prepping. Dedicating a few hours on the weekend to prepare meals for the week can save countless hours and prevent unhealthy food choices made out of convenience.</p>
        
        <p>DietWise can generate meal prep-friendly recipes and shopping lists tailored to your nutritional needs, making the planning process effortless. The app even considers your available prep time when suggesting meals.</p>
        
        <h2>Embrace Simple, Nutrient-Dense Meals</h2>
        <p>Healthy eating doesn't have to be complicated or time-consuming. Focus on simple meals that combine protein, healthy fats, and complex carbohydrates. For example, a quick bowl with quinoa, grilled chicken, avocado, and vegetables provides balanced nutrition in minutes.</p>
        
        <p>DietWise specializes in recommending simple yet nutritious meal options that can be prepared quickly while meeting your specific dietary requirements.</p>
        
        <h2>Strategic Snacking</h2>
        <p>When you're constantly on the move, strategic snacking can help maintain energy levels and prevent overeating at mealtimes. Keep nutrient-dense snacks like nuts, Greek yogurt, or fruit readily available.</p>
        
        <p>DietWise can recommend personalized snack options based on your nutritional needs and schedule, ensuring you have the right fuel at the right times throughout your busy day.</p>
        
        <h2>Leverage Technology for Efficiency</h2>
        <p>In today's digital age, technology can be a powerful ally in maintaining a healthy diet. DietWise uses AI to learn your preferences, schedule, and nutritional needs, then creates customized meal plans that fit seamlessly into your busy life.</p>
        
        <p>The app can adjust recommendations based on your available time each day, suggesting quicker meals on your busiest days and more elaborate options when you have more time.</p>
        
        <h2>Practice Mindful Eating, Even Briefly</h2>
        <p>Even with a packed schedule, try to practice mindful eating whenever possible. Taking just a few minutes to eat without distractions can improve digestion and satisfaction from meals, reducing the likelihood of unhealthy snacking later.</p>
        
        <p>DietWise includes reminders and tips for mindful eating practices that can be incorporated even into the busiest schedules.</p>
        
        <h2>Conclusion: Healthy Eating is Possible, Even for the Busiest People</h2>
        <p>With the right strategies and tools, maintaining a balanced diet with a busy schedule is absolutely achievable. DietWise was designed specifically for people who want to prioritize their nutrition without sacrificing their productivity or adding stress to their already full plates.</p>
        
        <p>Ready to transform your approach to healthy eating? <a href="https://dietwise.abwebtech.com/">Try DietWise today</a> and discover how our AI-powered assistant can help you maintain optimal nutrition, no matter how busy your life gets.</p>
      `,
    },
  }

  // Replace email addresses in content
  for (const slug in posts) {
    if (posts.hasOwnProperty(slug)) {
      posts[slug].content = posts[slug].content.replace(/[\w.-]+@[\w.-]+\.\w+/g, "abwebtech.team@gmail.com")
    }
  }

  // @ts-ignore
  return posts[slug] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | DietWise",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | DietWise Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Blog Post Not Found</h1>
            <p className="text-slate-700 dark:text-slate-300 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2 block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {post.date}
              </span>
              <span className="mx-3">•</span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {post.readTime}
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto" />
          </div>

          <div
            className="prose prose-emerald dark:prose-invert max-w-none prose-lg prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-emerald-600 dark:prose-a:text-emerald-400 hover:prose-a:text-emerald-700 dark:hover:prose-a:text-emerald-300 mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-8">
            <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Ready to transform your diet?</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Try DietWise today and get personalized meal plans tailored to your unique needs and goals.
              </p>
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="https://dietwise.abwebtech.com/">Launch DietWise App</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
