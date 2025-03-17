"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import translations from "@/translations"

type TranslationContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string, params?: Record<string, string>) => string
  translateDatabaseContent: (content: any) => any
}

const TranslationContext = createContext<TranslationContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  translateDatabaseContent: (content) => content,
})

export const useTranslation = () => useContext(TranslationContext)

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Get saved language preference or browser language
    const savedLanguage = localStorage.getItem("preferred-language")
    const browserLanguage = navigator.language.split("-")[0]
    const supportedLanguages = ["en", "sw", "fr", "ar", "es"]

    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else if (supportedLanguages.includes(browserLanguage)) {
      setLanguage(browserLanguage)
    }

    // Set HTML lang attribute
    document.documentElement.lang = language

    // Handle RTL for Arabic
    if (language === "ar") {
      document.documentElement.dir = "rtl"
      document.body.classList.add("rtl")
    } else {
      document.documentElement.dir = "ltr"
      document.body.classList.remove("rtl")
    }
  }, [language])

  // Translation function
  const t = (key: string, params?: Record<string, string>) => {
    // Split the key by dots to access nested properties
    const keys = key.split(".")

    // Get the translation object for the current language
    let translation = translations[language] || translations.en

    // Navigate through the nested properties
    for (const k of keys) {
      translation = translation?.[k]
      if (!translation) break
    }

    // If translation not found, fallback to English or the key itself
    if (!translation) {
      translation = translations.en
      for (const k of keys) {
        translation = translation?.[k]
        if (!translation) break
      }

      // If still not found, return the key
      if (!translation) return key
    }

    // Replace parameters if any
    if (params && typeof translation === "string") {
      return Object.entries(params).reduce((acc, [param, value]) => acc.replace(`{{${param}}}`, value), translation)
    }

    return translation as string
  }

  // Function to translate database content
  const translateDatabaseContent = (content: any) => {
    if (!content) return content

    // If content is an array, translate each item
    if (Array.isArray(content)) {
      return content.map((item) => translateDatabaseContent(item))
    }

    // If content is an object with translations
    if (content && typeof content === "object") {
      // Check if the object has language keys
      if (content[language] || content.translations) {
        // Direct language keys (e.g., { en: "Hello", fr: "Bonjour" })
        if (content[language]) {
          return content[language]
        }

        // Translations object (e.g., { translations: { en: "Hello", fr: "Bonjour" } })
        if (content.translations && content.translations[language]) {
          return content.translations[language]
        }

        // Fallback to English or the default content
        return content.en || content.translations?.en || content.default || content
      }

      // Recursively translate nested objects
      const translatedContent = { ...content }
      for (const key in translatedContent) {
        if (Object.prototype.hasOwnProperty.call(translatedContent, key)) {
          translatedContent[key] = translateDatabaseContent(translatedContent[key])
        }
      }
      return translatedContent
    }

    // Return primitive values as is
    return content
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, translateDatabaseContent }}>
      {children}
    </TranslationContext.Provider>
  )
}

