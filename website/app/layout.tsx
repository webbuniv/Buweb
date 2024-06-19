'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Model from "@/components/model/Model";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

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
          <Header />
          {children}
          <Footer />
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  );
}

import { Providers } from "./providers";import Head from "./head";

