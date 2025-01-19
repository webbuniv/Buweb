"use client"

import React, { useState, useEffect } from 'react'
import AgricProgramTwo from '@/components/AgricultureProgramTwo'
import { ChevronDown } from 'lucide-react'

const AgriProgramTwoPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat lg:mt-[80px]"
        style={{ backgroundImage: 'url(/images/agric/a.jpeg)' }}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{ opacity: Math.min(scrollPosition / 300, 0.7) }}
        />
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl lg:text-6xl animate-fade-in-down">
            Agriculture
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up">
            Opportunities and joint research collaborations
          </p>
          <button 
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 animate-bounce"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Explore Programs <ChevronDown className="inline-block ml-2" />
          </button>
        </div>
      </div>
      <AgricProgramTwo />
    </>
  )
}

export default AgriProgramTwoPage

