import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  LineChart,
  Target,
  Utensils,
  Filter,
  BookOpen,
  Zap,
  Calendar,
  ShoppingCart,
  UserCircle,
  BarChart,
  Clock,
} from "lucide-react"

export const metadata = {
  title: "Features | DietWise",
  description:
    "Explore the powerful features of DietWise, the AI-powered diet planning assistant that helps you create personalized meal plans and achieve your health goals.",
}

const features = [
  {
    icon: <Brain className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "AI Diet Generator",
    description:
      "Our advanced AI creates personalized meal plans based on your body goals, health conditions, and lifestyle preferences. The more you use DietWise, the better it understands your needs and preferences.",
  },
  {
    icon: <LineChart className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Nutrition Tracking",
    description:
      "Track your calories, macros, and micronutrients with ease to stay on top of your dietary goals. DietWise automatically calculates nutritional information for all your meals and provides daily, weekly, and monthly insights.",
    development: true,
  },
  {
    icon: <Target className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Custom Goal Setting",
    description:
      "Set specific health and fitness goals and let DietWise help you achieve them through smart diet planning. Whether you want to lose weight, build muscle, or manage a health condition, DietWise adapts to your unique objectives.",
    development: true,
  },
  {
    icon: <Utensils className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Recipe Library",
    description:
      "Access a growing library of delicious, nutritious recipes that match your dietary needs and preferences. Each recipe includes detailed nutritional information and can be easily added to your meal plan.",
    development: true,
  },
  {
    icon: <Filter className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Dietary Filters",
    description:
      "Filter meal plans based on dietary preferences like vegan, keto, low-carb, gluten-free, and more. DietWise ensures that all your dietary restrictions and preferences are respected in your personalized meal plans.",
    development: true,
  },
  {
    icon: <BookOpen className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Health Insights",
    description:
      "Get daily nutritional tips and health insights tailored to your specific dietary needs and goals. Learn about the nutritional benefits of different foods and how they impact your health.",
    development: true,
  },
  {
    icon: <Zap className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Smart Recommendations",
    description:
      "Receive intelligent food suggestions based on your preferences, nutritional needs, and previous choices. DietWise learns from your feedback to continuously improve its recommendations.",
    development: true,
  },
  {
    icon: <Calendar className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Meal Planning Calendar",
    description:
      "Plan your meals for days, weeks, or even months in advance with our intuitive calendar interface. Easily adjust your meal plan as needed and get automatic shopping lists.",
    development: true,
  },
  {
    icon: <ShoppingCart className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Automated Shopping Lists",
    description:
      "Generate comprehensive shopping lists based on your meal plan with a single click. Organize ingredients by category and easily check items off as you shop.",
    development: true,
  },
  {
    icon: <UserCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Personalized Profile",
    description:
      "Create a detailed profile with your dietary preferences, allergies, health conditions, and goals. DietWise uses this information to tailor all recommendations specifically to you.",
    development: true,
  },
  {
    icon: <BarChart className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Progress Tracking",
    description:
      "Monitor your progress toward your health and fitness goals with visual charts and detailed analytics. Track changes in weight, body measurements, energy levels, and more.",
    development: true,
  },
  {
    icon: <Clock className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
    title: "Time-Based Meal Suggestions",
    description:
      "Get meal suggestions based on the time of day and your schedule. DietWise can recommend quick breakfast options for busy mornings or more elaborate dinner recipes when you have more time.",
    development: true,
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Powerful Features for Your <span className="text-emerald-600 dark:text-emerald-400">Health Journey</span>
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            DietWise combines cutting-edge AI technology with nutritional science to make healthy eating effortless,
            accessible, and data-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col"
            >
              <div className="mb-4">{feature.icon}</div>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                {feature.development && (
                  <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full">
                    Under Development
                  </span>
                )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to Transform Your Diet?</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience all these powerful features and more by launching the DietWise app today. Start your journey to
            better health with personalized nutrition.
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link href="https://dietwise.abwebtech.com/">Launch DietWise App</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
