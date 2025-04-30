import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DietWise - AI-Powered Diet Planning Assistant",
  description:
    "Transform your health with DietWise, the AI-powered diet planning assistant that creates personalized meal plans based on your goals, health conditions, and lifestyle.",
  openGraph: {
    title: "DietWise - AI-Powered Diet Planning Assistant",
    description:
      "Transform your health with DietWise, the AI-powered diet planning assistant that creates personalized meal plans based on your goals, health conditions, and lifestyle.",
    url: "https://dietwise.abwebtech.com",
    siteName: "DietWise",
    images: [
      {
        url: "/images/dietwise-og.png",
        width: 1200,
        height: 630,
        alt: "DietWise - AI-Powered Diet Planning Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DietWise - AI-Powered Diet Planning Assistant",
    description:
      "Transform your health with DietWise, the AI-powered diet planning assistant that creates personalized meal plans based on your goals, health conditions, and lifestyle.",
    images: ["/images/dietwise-og.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dietwise.abwebtech.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
