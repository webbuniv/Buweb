'use client'

import { Button } from "flowbite-react"
import { motion } from "framer-motion"
import { Book, Library, Users } from 'lucide-react'
import Link from "next/link"

export function GuidedTourSection() {
  const features = [
    {
      icon: Book,
      title: "Faculties and Departments",
      description: "Visit our diverse faculties and departments, each a hub of knowledge and innovation."
    },
    {
      icon: Library,
      title: "Research Centers",
      description: "Explore our world-class research centers, contributing to groundbreaking discoveries and solutions."
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Witness the vibrant student culture, with a range of clubs, societies, and events."
    }
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              University Guided Tour
            </h2>
            <p className="text-lg text-gray-700">
              Join our guided tours to experience the rich history and dynamic culture of our university. 
              Discover the stories behind our iconic buildings and monuments that have been witnesses to 
              decades of academic and cultural evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full hover:shadow-lg transition-shadow">
                  <div>
                    <feature.icon className="w-8 h-8 text-red-600 mb-2" />
                    <div>{feature.title}</div>
                  </div>
                  <div>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/guided-tour-2013" passHref>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book a Guided Tour
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

