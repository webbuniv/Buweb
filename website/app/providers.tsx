"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { TranslationProvider } from "@/context/translation-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <TranslationProvider>{children}</TranslationProvider>
    </ThemeProvider>
  )
}

