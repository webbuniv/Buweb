"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Nakamya",
    program: "Bachelor of Business Administration",
    year: "Class of 2023",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Bugema University provided me with not just academic knowledge, but also the practical skills and confidence I needed to excel in the business world. The faculty's dedication and the diverse student community made my experience truly transformative.",
    country: "Uganda",
  },
  {
    id: 2,
    name: "James Mwangi",
    program: "Master of Public Health",
    year: "Class of 2022",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The research opportunities and hands-on experience I gained at Bugema University were invaluable. The program prepared me to address real-world health challenges and make a meaningful impact in my community.",
    country: "Kenya",
  },
  {
    id: 3,
    name: "Grace Uwimana",
    program: "Bachelor of Computer Science",
    year: "Class of 2023",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The technology programs at Bugema University are cutting-edge and industry-relevant. The professors are not just teachers but mentors who guided me through every step of my journey. I'm now working as a software developer at a leading tech company.",
    country: "Rwanda",
  },
  {
    id: 4,
    name: "Michael Ochieng",
    program: "Bachelor of Agriculture",
    year: "Class of 2021",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Bugema University's agriculture program combines traditional knowledge with modern techniques. The practical training and research opportunities helped me develop sustainable farming solutions that are now benefiting farmers in my region.",
    country: "Uganda",
  },
  {
    id: 5,
    name: "Fatima Al-Zahra",
    program: "Bachelor of Nursing",
    year: "Class of 2022",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The nursing program at Bugema University provided excellent clinical training and theoretical foundation. The supportive environment and quality education prepared me to serve patients with compassion and competence.",
    country: "Sudan",
  },
]

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our graduates about their transformative experiences at Bugema University
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Student Info */}
                <div className="text-center md:text-left">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden border-4 border-white/20"
                  >
                    <img
                      src={currentData.image || "/placeholder.svg"}
                      alt={currentData.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">{currentData.name}</h3>
                  <p className="text-blue-300 text-sm mb-2">{currentData.program}</p>
                  <p className="text-gray-400 text-sm mb-3">{currentData.year}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-1 mb-2">
                    {[...Array(currentData.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                    {currentData.country}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <div className="md:col-span-2">
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-200 leading-relaxed italic"
                  >
                    "{currentData.quote}"
                  </motion.blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Graduate Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Employment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
