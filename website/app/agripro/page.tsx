"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AgricPro from '@/components/AgriculturePro'
import { ChevronDown, Leaf, Sun, Cloud, Droplet } from 'lucide-react'

const AgriProPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [weatherData, setWeatherData] = useState({ temp: 25, humidity: 60, condition: 'Sunny' })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-50">
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/agric/crop.jpeg)' }}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{ opacity: Math.min(scrollPosition / 300, 0.7) }}
        />
        <div className="container mx-auto text-center text-white relative z-10 px-4">
          <Leaf className="inline-block w-16 h-16 mb-4 animate-bounce text-blue-400" />
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl animate-fade-in-down">
            Agriculture at Bugema University
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Cultivating knowledge, growing futures, and nurturing sustainable practices through research and innovation.
          </p>
          <button 
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300 animate-pulse"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Explore Our Programs <ChevronDown className="inline-block ml-2" />
          </button>
        </div>
      </div>

      <div className="bg-blue-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Sun className="text-yellow-500" />
              <span className="text-lg font-semibold">{weatherData.temp}°C</span>
            </div>
            <div className="flex items-center space-x-4">
              <Cloud className="text-blue-500" />
              <span className="text-lg">{weatherData.condition}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Droplet className="text-blue-500" />
              <span className="text-lg">{weatherData.humidity}% Humidity</span>
            </div>
          </div>
        </div>
      </div>

      <AgricPro />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-xl">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-xl">Acres Cultivated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-xl">Research Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgriProPage

