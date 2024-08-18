'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Model from "@/components/model/Model";
import Script from 'next/script';
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import Head from "./head";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head />
      <body className="dark:bg-black overflow-x-hidden" >
        <Providers>
          <Analytics />
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
  );
}



