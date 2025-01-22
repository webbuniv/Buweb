import React from 'react'
import { motion } from 'framer-motion'
import { HeartIcon, BeakerIcon, UserGroupIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const services = [
  {
    icon: <HeartIcon className="h-12 w-12 text-blue-500" />,
    title: 'Emergency Care',
    description: '24/7 emergency services with state-of-the-art facilities and expert staff.',
  },
  {
    icon: <BeakerIcon className="h-12 w-12 text-green-500" />,
    title: 'Laboratory Services',
    description: 'Advanced diagnostic testing and analysis for accurate results.',
  },
  {
    icon: <UserGroupIcon className="h-12 w-12 text-purple-500" />,
    title: 'Specialized Clinics',
    description: 'Expert care in various medical specialties to address specific health needs.',
  },
]

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <div className="text-center">
                <Link href="/hospital/services" className="text-blue-500 hover:text-blue-600 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview

