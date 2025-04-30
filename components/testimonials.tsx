import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lost 15kg in 3 months",
    content:
      "DietWise completely transformed my approach to eating. The personalized meal plans were exactly what I needed, and the AI recommendations helped me stay on track even with my busy schedule.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Managing Type 2 Diabetes",
    content:
      "As someone with diabetes, finding the right diet was always a challenge. DietWise made it simple by creating meal plans that help me manage my blood sugar while still enjoying delicious food.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Fitness Enthusiast",
    content:
      "The nutrition tracking feature is a game-changer for my fitness goals. I can easily monitor my macros and make adjustments to my diet as needed. DietWise has become an essential part of my training regimen.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-500"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
