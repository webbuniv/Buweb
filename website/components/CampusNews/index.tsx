'use client'

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Pause, Play, ArrowLeftRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const newsData = [
  {
    category: "Entreprenuership Class Exhibition",
    title: "Showcasing Innovative Business Ideas by Students",
    link: "/exhibition",
    imageSrc: "/images/exhibition/e.jpeg",
    altText: "Exhibition showcase",
  },
  {
    category: "Sports",
    title: "Bugema University sports play a vital role in student life.",
    link: "/sports/sports",
    imageSrc: "/images/life/football/footf.jpg",
    altText: "Sports activities",
  },
  {
    category: "Students Clubs",
    title: "Unleashing Potential: Discovering the Diverse Clubs",
    link: "/clubs/clubs",
    imageSrc: "/images/club/r.jpg",
    altText: "Student clubs activities",
  },
  {
    category: "Quick Links",
    items: [
      {
        title: "Join",
        description: "Become part of our community",
        color: "bg-blue-400/90",
        imageSrc: "/images/club/r.jpg",
        link: "https://erms.bugemauniv.ac.ug/application/"
      },
      {
        title: "Visit",
        description: "Tour our campus",
        color: "",
        imageSrc: "/images/club/r.jpg",
        link: "/visit"
      },
      {
        title: "Donate",
        description: "Support our mission",
        color: "bg-blue-600/80",
        imageSrc: "/images/club/r.jpg",
        link: "/donate"
      }
    ]
  }
]

const CampusNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [direction, setDirection] = useState(1)

  // Create a circular array for continuous looping
  const getCircularNews = () => {
    const firstThree = newsData.slice(0, 3)
    return [...firstThree, ...firstThree, ...firstThree]
  }

  const rotateNews = useCallback(() => {
    if (isPlaying && !isHovering) {
      setCurrentIndex((prev) => {
        const next = prev + direction
        // Reset to middle set when reaching edges
        if (next >= 6) return 3
        if (next < 0) return 2
        return next
      })
    }
  }, [isPlaying, isHovering, direction])

  useEffect(() => {
    const interval = setInterval(rotateNews, 3000)
    return () => clearInterval(interval)
  }, [rotateNews])

  const handleManualRotation = () => {
    setDirection((prev) => prev * -1) // Toggle direction
    setCurrentIndex((prev) => {
      const next = prev + direction
      if (next >= 6) return 3
      if (next < 0) return 2
      return next
    })
  }

  const cardVariants = {
    enter: (custom: { direction: number; index: number }) => ({
      x: custom.direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      zIndex: custom.index,
    }),
    center: (custom: { index: number }) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: custom.index,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    exit: (custom: { direction: number; index: number }) => ({
      x: custom.direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      zIndex: custom.index,
      transition: {
        duration: 0.5
      }
    })
  }

  return (
    <section className="py-16 px-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Campus Life
          </motion.h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
              aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button
              onClick={handleManualRotation}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
              aria-label="Change rotation direction"
            >
              <ArrowLeftRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full relative">
              <AnimatePresence mode="popLayout" initial={false}>
                {getCircularNews().slice(currentIndex, currentIndex + 3).map((news, idx) => (
                  <motion.article
                    key={`${news.category}-${currentIndex + idx}`}
                    custom={{ direction, index: idx }}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    onHoverStart={() => setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all perspective-1000"
                    style={{
                      position: 'relative',
                      zIndex: idx
                    }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={news.imageSrc || "/placeholder.svg"}
                        alt={news.altText}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                        {news.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2">
                        {news.title}
                      </h3>
                      <Link
                        href={news.link}
                        className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      >
                        Learn More <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-4">
            {newsData[3].items.map((item, idx) => (
              <Link
                key={item.title}
                href={item.link}
                className="group block relative h-24 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div 
                  className={cn(
                    "absolute inset-0 flex items-center justify-between p-6 transition-all duration-300",
                    item.color,
                    "group-hover:bg-opacity-90"
                  )}
                >
                  <div className="text-white">
                    <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusNews

