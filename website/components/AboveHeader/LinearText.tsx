import type React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/translation-context"

interface LinearTextProps {
  text: string
}

export const LinearText: React.FC<LinearTextProps> = ({ text }) => {
  const { language } = useTranslation()

  // Adjust text size based on language to ensure it fits on one line
  const textSizeClass =
    language === "ar"
      ? "text-base md:text-lg"
      : language === "sw"
        ? "text-sm md:text-base lg:text-lg"
        : "text-lg md:text-xl lg:text-2xl"

  // Adjust font weight based on language
  const fontWeightClass = language === "ar" ? "font-bold" : "font-semibold"

  // Adjust text direction for RTL languages
  const textDirectionClass = language === "ar" ? "rtl" : "ltr"

  return (
    <motion.div
      className={`overflow-hidden ${textDirectionClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className={`${textSizeClass} ${fontWeightClass} text-blue-700 whitespace-nowrap`}
        initial={{ x: "100%" }}  // Start off-screen (to the right)
        animate={{ x: "-100%" }}  // Scroll to the left, fully out of the view
        transition={{
          duration: 10,  // Adjust the duration for speed (longer = slower)
          ease: "linear",  // Continuous scrolling effect
          repeat: Infinity,  // Infinite loop
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  )
}
