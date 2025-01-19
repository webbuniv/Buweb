"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-blue overflow-hidden lg:mt-[80px]">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/campus-life.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Student Life at Bugema
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Knowledge Meets Opportunity
        </motion.p>
        <motion.button
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore Campus Life
        </motion.button>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}

export default Hero

