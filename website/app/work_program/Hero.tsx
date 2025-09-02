'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden md:mt-[9px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/workp/DSC_0267.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Fund Your Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Through Bugema Universitys Work Program
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
        >
          Learn More
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDownIcon className="h-10 w-10 text-white" />
      </motion.div>
    </div>
  )
}

export default Hero

