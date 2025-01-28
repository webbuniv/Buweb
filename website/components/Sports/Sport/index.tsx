"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaFootballBall } from "react-icons/fa"

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden lg:mt-[80px]">
      <Image
        src="/images/life/football/foota.jpg"
        alt="Football Stadium"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Bugema University Sports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl mb-8"
          >
            Where Passion Meets Performance
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="inline-block"
          >
            <FaFootballBall className="text-6xl md:text-8xl text-yellow-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

