import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ProfessionalNavbar } from "@/components/professional-navbar"
import { TopContactBar } from "@/components/top-contact-bar"
import { ThreeDFooter } from "@/components/3d-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bugema University - Excellence in Service",
  description:
    "Quality holistic Christian education preparing students for productive lives of service to God and humanity. Join our diverse community from over 17 countries.",
  keywords: "Bugema University, Christian education, Uganda university, higher education, academic excellence",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <TopContactBar />
            <ProfessionalNavbar />
            <main className="flex-1">{children}</main>
            <ThreeDFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
