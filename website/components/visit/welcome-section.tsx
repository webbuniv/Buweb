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
            <h1 className="text-4xl md:text-5xl font-bold  mb-6">
              Welcome to Bugema University
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square relative overflow-hidden rounded-lg"
                >
                  <Image
                    src="/images/vc/vc-1.jpeg"
                    alt={`Bugema University`}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square relative overflow-hidden rounded-lg"
                >
                  <Image
                    src="/images/features/banner.png"
                    alt={`Bugema University`}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                </motion.div>
            </div>

            <div className="bg-white/95 backdrop-blur">
              <div className="p-6">
                <p className="text-lg text-gray-700">
                In year 2000, the university had student population of 800. There was a need to expand the offerings in various departments especially in the Department of Education. As a result, the following teaching courses were introduced in education: Geography, Mathematics, Chemistry, Biology, Physics, English Language and Literature in English. The school of Social Sciences also expanded to include Development Studies. During the AAA evaluation of 2004 the student population was 1,236. Students come from 15 countries of Africa.
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
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
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
                "Visit Bugema"
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-100"
                >
                  <Link 
                    href="#" 
                    className="block py-2 text-blue-600 hover:text-blue-700 transition-colors"
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

