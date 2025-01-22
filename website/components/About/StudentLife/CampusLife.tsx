"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const campusLifeData = [
  {
    title: 'Academic Excellence',
    description: 'Engage in cutting-edge research and collaborative learning environments.',
    image: '/images/graduation/gradsb1.jpg',
  },
  {
    title: 'Cultural Diversity',
    description: 'Experience a rich tapestry of cultures from over 17 countries.',
    image: '/images/gala/gaa.jpg',
  },
  {
    title: 'Sports & Recreation',
    description: 'Participate in a wide range of sports and recreational activities.',
    image: '/images/life/football/new.jpeg',
  },
  {
    title: 'Community Service',
    description: 'Make a difference through various community outreach programs.',
    image: '/images/features/hos.jpg',
  },
]

const CampusLife: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Campus Life at Bugema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campusLifeData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CampusLife

