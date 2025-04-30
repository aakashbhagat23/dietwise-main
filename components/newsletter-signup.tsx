"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <section className="py-16 bg-emerald-600 dark:bg-emerald-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Nutrition Tips in Your Inbox</h2>
          <p className="text-emerald-100 mb-8">
            Subscribe to our newsletter for weekly diet tips, healthy recipes, and exclusive DietWise updates.
          </p>

          {isSubmitted ? (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 flex flex-col items-center">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Thank You for Subscribing!</h3>
              <p className="text-slate-700 dark:text-slate-300">
                You'll start receiving our nutrition tips and updates soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-0 focus-visible:ring-2 focus-visible:ring-emerald-400"
              />
              <Button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
