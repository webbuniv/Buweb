"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useTranslation } from "@/context/translation-context"
import { ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English" },
  { code: "sw", name: "Swahili" },
  { code: "fr", name: "French" },
  // { code: "ar", name: "العربية" },
  { code: "es", name: "Español" },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useTranslation()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)

    // Store language preference
    localStorage.setItem("preferred-language", langCode)
  }

  if (!mounted) return null

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium cursor-pointer transition-all">
        <Globe size={16} />
        <span>{currentLanguage.name}</span>
        <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md p-2">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`text-sm cursor-pointer p-2 rounded-md hover:bg-gray-100 ${language === lang.code ? "font-bold" : ""}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
