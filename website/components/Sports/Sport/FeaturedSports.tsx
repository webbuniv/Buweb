"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaFootballBall, FaBasketballBall, FaVolleyballBall } from "react-icons/fa"
import { GiTennisRacket } from "react-icons/gi"

const sports = [
  { name: "Football", icon: FaFootballBall, color: "bg-green-500" },
  { name: "Basketball", icon: FaBasketballBall, color: "bg-orange-500" },
  { name: "Volleyball", icon: FaVolleyballBall, color: "bg-yellow-500" },
  { name: "Tennis", icon: GiTennisRacket, color: "bg-blue-500" },
]

const FeaturedSports = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Sports</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`${sport.color} rounded-lg p-6 text-white text-center`}
            >
              <sport.icon className="text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">{sport.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSports

