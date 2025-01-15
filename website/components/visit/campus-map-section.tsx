'use client'

import { motion } from "framer-motion"
import { MapPin, School, Users, FlaskConical } from 'lucide-react'
import Link from "next/link"

export function CampusMapSection() {
  const highlights = [
    {
      icon: MapPin,
      title: "Historic Landmarks",
      description: "Find our iconic buildings and monuments that have been witnesses to decades of academic and cultural evolution."
    },
    {
      icon: School,
      title: "Academic Hubs",
      description: "Navigate through our diverse colleges, schools and departments, each a beacon of knowledge and innovation across various disciplines."
    },
    {
      icon: Users,
      title: "Student Life and Community Spaces",
      description: "Find our gardens & parks, accommodation halls, restaurants & communal areas where ideas flourish and friendships blossom."
    },
    {
      icon: FlaskConical,
      title: "Research and Cultural Centers",
      description: "Locate our innovation & research facilities and cultural centers that embody our commitment to advancing knowledge and celebrating diversity."
    }
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              The Campus Map
            </h2>
            <p className="text-lg text-gray-700">
              Our campus map has been set up to guide you through our sprawling grounds to help you
              discover the various facilities situated across the university grounds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-red-600" />
                      {item.title}
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="https://www.bugemauniv.ac.ug" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover more on our interactive map
              <MapPin className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

