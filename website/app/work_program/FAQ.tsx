'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/solid'

const faqs = [
  {
    question: 'How many hours can I work per week?',
    answer: 'Students are typically allowed to work up to 20 hours per week during the academic year and full-time during breaks.',
  },
  {
    question: 'How does the credit system work?',
    answer: 'For every hour worked, you earn a predetermined amount of credit towards your tuition fees. The exact rate may vary depending on the type of work.',
  },
  {
    question: 'Can international students participate in the work program?',
    answer: 'Yes, international students are eligible to participate in the work program, subject to visa regulations.',
  },
  {
    question: 'How do I apply for the work program?',
    answer: 'You can apply through the universitys online portal. The application process includes submitting your resume and indicating your areas of interest.',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-blue-600 font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-blue-500 rounded-lg focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-b-lg"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

