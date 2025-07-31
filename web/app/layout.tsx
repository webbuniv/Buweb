import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThreeDNavbar } from "@/components/3d-navbar"
import { ThreeDFooter } from "@/components/3d-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bugema University - Excellence in Service",
  description:
    "Quality holistic Christian education preparing students for productive lives of service to God and humanity. Join our diverse community of over 15,000 students from 17+ countries.",
  keywords: "Bugema University, Christian education, Uganda university, higher education, academic excellence",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThreeDNavbar />
          {children}
          <ThreeDFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
