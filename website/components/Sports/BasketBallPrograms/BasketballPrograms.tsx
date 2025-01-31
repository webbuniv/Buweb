"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const programs = [
  { title: "Varsity Team", image: "/images/life/basketball/baska.jpg" },
  { title: "Intramural League", image: "/images/life/basketball/baskb.jpg" },
  { title: "Training Camps", image: "/images/life/basketball/baskc.jpg" },
  { title: "Community Outreach", image: "/images/life/basketball/baskd.jpg" },
]

export const BasketballPrograms = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Basketball Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">
                  Discover the excitement and opportunities in our {program.title.toLowerCase()} program.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

