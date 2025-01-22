"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const events = [
  { date: 'May 15', title: 'Spring Festival', description: 'Annual celebration of arts and culture' },
  { date: 'June 5', title: 'Career Fair', description: 'Connect with potential employers' },
  { date: 'July 10', title: 'Sports Day', description: 'Inter-university sports competition' },
  { date: 'August 20', title: 'Orientation Week', description: 'Welcome event for new students' },
]

const EventCalendar: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-600 mr-2" />
                <span className="text-lg font-semibold text-blue-600">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventCalendar

