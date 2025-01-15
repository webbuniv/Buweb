'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function WelcomeSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
              Welcome to Bugema University, a beacon of academic excellence & heritage in Africa.
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square relative overflow-hidden rounded-lg"
                >
                  <Image
                    src="/images/club/r.jpg"
                    alt={`Campus life ${index}`}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            <div className="bg-white/95 backdrop-blur">
              <div className="p-6">
                <p className="text-lg text-gray-700">
                  Founded in 1922, our university has been at the forefront of education and research on
                  the continent, shaping leaders and innovators across various fields. As one of
                  Africas most prestigious and historic universities, Bugema University invites you
                  to explore our vibrant campus, rich in history and innovation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-red-600 mb-6">
              Learn more about Bugema University
            </h2>
            <nav className="space-y-3">
              {[
                "About Bugema University",
                "History",
                "Get in Touch",
                "Social Networks",
                "How to Apply",
                "Institutes",
                "Visit Makerere"
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-100"
                >
                  <Link 
                    href="#" 
                    className="block py-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

