import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThreeDNavbar } from "@/components/3d-navbar"
import { ThreeDFooter } from "@/components/3d-footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Bugema University",
    default: "Bugema University - Excellence in Service",
  },
  description:
    "Bugema University is a premier institution of higher learning in Uganda, offering quality education with a focus on academic excellence, research, and holistic development.",
  keywords: [
    "Bugema University",
    "Uganda university",
    "higher education",
    "academic excellence",
    "research publications",
    "university admissions",
    "undergraduate programs",
    "graduate programs",
    "Christian education",
    "holistic development",
  ],
  authors: [{ name: "Bugema University" }],
  creator: "Bugema University",
  publisher: "Bugema University",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bugemauniv.ac.ug/",
    title: "Bugema University - Excellence in Education",
    description:
      "Discover academic excellence at Bugema University, a leading institution of higher learning in Uganda offering holistic Christian education.",
    siteName: "Bugema University",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Bugema University Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugema University - Excellence in Service",
    description:
      "Discover academic excellence at Bugema University, a leading institution of higher learning in Uganda.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <ThreeDNavbar />
            <main className="page-transition">{children}</main>
            <ThreeDFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
