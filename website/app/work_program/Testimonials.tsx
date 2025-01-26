import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Computer Science Student',
    image: '/images/testimonials/john.jpg',
    quote: 'The work program has been an incredible opportunity to gain real-world experience while funding my education.',
  },
  {
    name: 'Jane Smith',
    role: 'Business Administration Student',
    image: '/images/testimonials/jane.jpg',
    quote: 'Ive developed valuable skills and made great connections through the universitys work program.',
  },
  {
    name: 'Michael Johnson',
    role: 'Engineering Student',
    image: '/images/testimonials/michael.jpg',
    quote: 'Balancing work and studies has taught me time management skills that will be invaluable in my future career.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-blue-600 font-bold text-center mb-12">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

