"use client"

import React, { useState, useEffect } from "react"

const images = [
  "/images/agric/ho.jpg",
  "/images/agric/hom.jpg",
  "/images/agric/home.jpg",
]

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Cultivating Tomorrows Leaders
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">
          Join our world-class agriculture programs and shape the future of sustainable farming
        </p>
        <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 animate-fade-in-up animation-delay-600">
          Explore Programs
        </button>
      </div>
    </section>
  )
}

export default HeroSection

