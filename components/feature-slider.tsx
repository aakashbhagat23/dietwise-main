"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: 1,
    title: "AI Diet Generator",
    description: "Get personalized meal plans created by our advanced AI based on your unique needs and preferences.",
    image: "/diet-ai-1.jpg",
  },
  {
    id: 2,
    title: "Nutrition Tracking",
    description: "Easily track your calories, macros, and micronutrients to stay on top of your dietary goals.",
    image: "/diet-ai-2.jpg",
    development: true,
  },
  {
    id: 3,
    title: "Custom Goal Setting",
    description:
      "Set specific health and fitness goals and let DietWise help you achieve them through smart diet planning.",
    image: "/diet-ai-3.jpg",
    development: true,
  },
  {
    id: 4,
    title: "Dietary Filters",
    description: "Filter meal plans based on dietary preferences like vegan, keto, low-carb, and more.",
    image: "/diet-ai-4.jpg",
    development: true,
  },
  {
    id: 5,
    title: "Recipe Library",
    description: "Access a growing library of delicious, nutritious recipes that match your dietary needs.",
    image: "/diet-ai-5.jpg",
    development: true,
  },
]

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Key Features
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 bg-white dark:bg-slate-800 flex flex-col justify-center">
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                        {feature.development && (
                          <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full">
                            Under Development
                          </span>
                        )}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-6">{feature.description}</p>
                      <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white self-start">
                        <Link href="https://dietwise.abwebtech.com/">Try Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-slate-700 transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          </button>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-slate-700 transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-emerald-600 dark:bg-emerald-400"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-emerald-400 dark:hover:bg-emerald-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSlider
