
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
import { GraduationCountdownPopup } from "@/components/graduation-countdown-popup"

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
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
          <GraduationCountdownPopup />
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

