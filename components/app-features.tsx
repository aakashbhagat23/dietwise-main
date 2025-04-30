import { Brain, LineChart, Target, Utensils, Filter, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "AI Diet Generator",
    description:
      "Our advanced AI creates personalized meal plans based on your body goals, health conditions, and lifestyle preferences.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "Nutrition Tracking",
    description: "Track your calories, macros, and micronutrients with ease to stay on top of your dietary goals.",
    development: true,
  },
  {
    icon: <Target className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "Custom Goal Setting",
    description:
      "Set specific health and fitness goals and let DietWise help you achieve them through smart diet planning.",
    development: true,
  },
  {
    icon: <Utensils className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "Recipe Library",
    description:
      "Access a growing library of delicious, nutritious recipes that match your dietary needs and preferences.",
    development: true,
  },
  {
    icon: <Filter className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "Dietary Filters",
    description: "Filter meal plans based on dietary preferences like vegan, keto, low-carb, gluten-free, and more.",
    development: true,
  },
  {
    icon: <BookOpen className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "Health Insights",
    description: "Get daily nutritional tips and health insights tailored to your specific dietary needs and goals.",
    development: true,
  },
]

const AppFeatures = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            DietWise combines cutting-edge AI technology with nutritional science to make healthy eating effortless,
            accessible, and data-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <div className="mb-4">{feature.icon}</div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                {feature.development && (
                  <span className="ml-2 px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full">
                    Under Development
                  </span>
                )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link href="https://dietwise.abwebtech.com/">Experience All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AppFeatures
