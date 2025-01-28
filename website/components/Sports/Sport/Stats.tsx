"use client"

import React from "react"
import { motion } from "framer-motion"

const stats = [
  { label: "Sports Events per year", value: "50+" },
  { label: "Teams Participating", value: "10+" },
  { label: "Expert Coaches", value: "25+" },
  { label: "Registered Players", value: "60+" },
  { label: "Sponsors", value: "8+" },
]

const Stats = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <motion.h3 whileHover={{ scale: 1.1 }} className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </motion.h3>
              <p className="text-blue-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

