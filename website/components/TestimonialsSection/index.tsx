"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Nakamya",
    role: "Business Administration Graduate",
    year: "Class of 2023",
    country: "Uganda",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Bugema University transformed my perspective on business and leadership. The practical approach to learning and the diverse community prepared me for the global marketplace.",
    rating: 5,
    program: "Bachelor of Business Administration",
  },
  {
    id: 2,
    name: "James Ochieng",
    role: "Software Engineer at Tech Corp",
    year: "Class of 2022",
    country: "Kenya",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The Computer Science program at Bugema gave me the technical skills and problem-solving mindset I needed to excel in the tech industry. The faculty support was exceptional.",
    rating: 5,
    program: "Bachelor of Computer Science",
  },
  {
    id: 3,
    name: "Grace Uwimana",
    role: "Public Health Officer",
    year: "Class of 2021",
    country: "Rwanda",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "My experience at Bugema University was life-changing. The Health Sciences program equipped me with both theoretical knowledge and practical skills to make a real impact in healthcare.",
    rating: 5,
    program: "Bachelor of Public Health",
  },
  {
    id: 4,
    name: "Michael Banda",
    role: "Agricultural Extension Officer",
    year: "Class of 2023",
    country: "Malawi",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The Agriculture program at Bugema is outstanding. The hands-on approach and modern farming techniques I learned are helping me transform farming practices in my community.",
    rating: 5,
    program: "Bachelor of Agricultural Sciences",
  },
  {
    id: 5,
    name: "Fatima Hassan",
    role: "Primary School Teacher",
    year: "Class of 2022",
    country: "Tanzania",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Bugema University's Education program prepared me to be not just a teacher, but an educator who can inspire and nurture young minds. The multicultural environment was invaluable.",
    rating: 5,
    program: "Bachelor of Education",
  },
]

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Floating Quote Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-16"
        >
          <Quote className="w-16 h-16 text-white" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 right-16"
        >
          <Quote className="w-20 h-20 text-white" />
        </motion.div>
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
            Hear from our graduates who are making a difference in their communities and careers worldwide
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial()
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial()
                  }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
                  <div className="text-center">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-8"
                    >
                      <Quote className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic"
                    >
                      "{testimonials[currentTestimonial].quote}"
                    </motion.blockquote>

                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex justify-center space-x-1 mb-8"
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </motion.div>

                    {/* Student Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                    >
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                          <Image
                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {testimonials[currentTestimonial].country.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-blue-300 font-medium mb-1">{testimonials[currentTestimonial].role}</p>
                        <p className="text-gray-300 text-sm">
                          {testimonials[currentTestimonial].program} • {testimonials[currentTestimonial].year}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentTestimonial ? 1 : -1)
                setCurrentTestimonial(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Graduate Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">85%</div>
            <div className="text-gray-300">Employment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25K+</div>
            <div className="text-gray-300">Alumni Worldwide</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
