
import type React from "react"
import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import AboveHeader from "@/components/AboveHeader"
import Script from "next/script"
import ScrollToTop from "@/components/ScrollToTop"
import "react-modal-video/css/modal-video.css"
import "../styles/index.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: {
    template: "%s | Bugema University",
    default: "Bugema University - Excellence in Education",
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
      "Discover academic excellence at Bugema University, a leading institution of higher learning in Uganda.",
    siteName: "Bugema University",
    images: [
      {
        url: "/bu_logo.png",
        width: 1200,
        height: 630,
        alt: "Bugema University Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugema University - Excellence in Education",
    description:
      "Discover academic excellence at Bugema University, a leading institution of higher learning in Uganda.",
    images: ["/bu_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/bu_logo.png",
    shortcut: "/bu_logo.png",
    apple: "/bu_logo.png",
  },
  category: "Education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="dark:bg-black overflow-x-hidden">
        <Providers>
          <AboveHeader />
          <Header />
          {children}
          <Footer />
        </Providers>
        <ScrollToTop />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TE9HEEZ2BK');
            `,
          }}
        />
      </body>
    </html>
  )
}

