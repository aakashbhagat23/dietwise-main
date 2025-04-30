import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Transform Your Health With <span className="text-emerald-600 dark:text-emerald-400">Smart Dieting</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-lg">
              DietWise is your AI-powered diet planning assistant that creates personalized meal plans based on your
              goals, health conditions, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="https://dietwise.abwebtech.com/">
                  Open DietWise App <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950"
              >
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/image-hero.png"
                  alt="DietWise App Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-400 rounded-full opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-400 rounded-full opacity-10"></div>
    </section>
  )
}

export default Hero
