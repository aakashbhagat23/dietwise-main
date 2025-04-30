import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DietWise</h3>
            <p className="text-slate-300 mb-6">
              Your AI-powered diet planning assistant that helps you craft personalized meal plans tailored to your body
              goals, health conditions, and lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" />
                <span className="text-slate-300">abwebtech.team@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" />
                <span className="text-slate-300">123 Nutrition Ave, Health City, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* App CTA */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Started</h3>
            <p className="text-slate-300 mb-4">Ready to transform your diet and health? Launch the DietWise app now!</p>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
              <Link href="https://dietwise.abwebtech.com/">Launch App</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400">&copy; {new Date().getFullYear()} DietWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
