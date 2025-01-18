import React from 'react'
import { motion } from 'framer-motion'
import { BookOpenIcon, CashIcon, AcademicCapIcon } from '@heroicons/react/outline'

const ProgramInfo = () => {
  const features = [
    {
      icon: <BookOpenIcon className="h-8 w-8 text-blue-500" />,
      title: 'Hands-on Experience',
      description: 'Gain practical skills while working in various university departments.',
    },
    {
      icon: <CashIcon className="h-8 w-8 text-green-500" />,
      title: 'Financial Support',
      description: 'Earn credits towards your tuition fees through the work program.',
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-purple-500" />,
      title: 'Academic Growth',
      description: 'Balance work and studies to enhance your overall university experience.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-blue-600 font-bold text-center mb-12">Why Join Our Work Program?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl text-blue-600 font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramInfo

