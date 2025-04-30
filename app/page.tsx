import Hero from "@/components/hero"
import FeatureSlider from "@/components/feature-slider"
import AppFeatures from "@/components/app-features"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeatureSlider />
      <AppFeatures />
      <Testimonials />
      <BlogSection />
      <NewsletterSignup />
    </div>
  )
}
