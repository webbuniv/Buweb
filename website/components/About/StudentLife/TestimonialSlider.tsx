"use client"


import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Computer Science Student',
    quote: 'Bugema University has provided me with incredible opportunities to grow both academically and personally.',
    avatar: '/',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Business Administration Graduate',
    quote: 'The diverse community at Bugema has broadened my perspective and prepared me for a global career.',
    avatar: '/',
  },
  {
    id: 3,
    name: 'David Johnson',
    role: 'Environmental Science Researcher',
    quote: 'The research facilities and support at Bugema have been instrumental in my academic journey.',
    avatar: '/',
  },
]

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Student Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img
              src={testimonials[currentIndex].avatar || ""}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-6"
            />
            <blockquote className="text-xl italic mb-4">&quot;{testimonials[currentIndex].quote}&quot;</blockquote>
            <p className="font-semibold">{testimonials[currentIndex].name}</p>
            <p className="text-blue-200">{testimonials[currentIndex].role}</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider

