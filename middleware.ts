import { useTranslation } from "@/context/translation-context"

/**
 * Utility function to translate database content
 * This can be used in server components or API routes
 *
 * @param content The database content to translate
 * @param language The target language code
 * @returns Translated content
 */
export function translateDatabaseContent(content: any, language = "en") {
  if (!content) return content

  // If content is an array, translate each item
  if (Array.isArray(content)) {
    return content.map((item) => translateDatabaseContent(item, language))
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
        translatedContent[key] = translateDatabaseContent(translatedContent[key], language)
      }
    }
    return translatedContent
  }

  // Return primitive values as is
  return content
}

/**
 * Example of how to structure database content for translation
 *
 * @example
 * // Single field with translations
 * const title = {
 *   en: "Welcome to our website",
 *   fr: "Bienvenue sur notre site web",
 *   sw: "Karibu kwenye tovuti yetu",
 *   ar: "مرحبا بكم في موقعنا",
 *   es: "Bienvenido a nuestro sitio web"
 * }
 *
 * // Object with multiple translated fields
 * const post = {
 *   id: 1,
 *   createdAt: "2023-01-01",
 *   translations: {
 *     en: {
 *       title: "Hello World",
 *       content: "This is a post"
 *     },
 *     fr: {
 *       title: "Bonjour le monde",
 *       content: "Ceci est un post"
 *     }
 *   }
 * }
 */

/**
 * Hook for translating database content in client components
 *
 * @returns A function to translate database content
 */
export function useDatabaseTranslation() {
  const { language, translateDatabaseContent } = useTranslation()

  return {
    translateDb: (content: any) => translateDatabaseContent(content),
  }
}

