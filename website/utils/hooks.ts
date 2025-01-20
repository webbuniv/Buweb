import { useState, useEffect } from 'react'

export const useTypingEffect = (statements: string[], typingSpeed = 100, pauseDuration = 2000) => {
  const [currentStatement, setCurrentStatement] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [letterIndex, setLetterIndex] = useState(0)

  useEffect(() => {
    if (letterIndex < statements[currentStatement].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + statements[currentStatement][letterIndex])
        setLetterIndex(letterIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setLetterIndex(0)
        setDisplayedText('')
        setCurrentStatement((prev) => (prev + 1) % statements.length)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }
  }, [letterIndex, currentStatement, statements, typingSpeed, pauseDuration])

  return displayedText
}

export const useSearch = (initialItems: string[]) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  useEffect(() => {
    const results = initialItems.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm, initialItems])

  return { searchTerm, setSearchTerm, searchResults }
}

