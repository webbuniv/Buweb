"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaScroll, FaMoneyCheckDollar, FaWpforms } from "react-icons/fa6"
import { IoBookOutline } from "react-icons/io5"

const services = [
  {
    icon: FaWpforms,
    title: "Admissions",
    description: "Embark on your journey towards excellence.",
    buttonText: "Apply Now",
    href: "http://erms.bugemauniv.ac.ug/application",
    bgColor: "bg-blue-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
    delay: 0.1,
  },
  {
    icon: FaMoneyCheckDollar,
    title: "Financial Information",
    description: "Providing quality education that is affordable for all students.",
    buttonText: "Explore",
    href: "/finances.pdf",
    bgColor: "bg-red-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    delay: 0.2,
    external: true,
  },
  {
    icon: IoBookOutline,
    title: "Student Portal",
    description: "Access all your information and notifications",
    buttonText: "Login",
    href: "https://erms.bugemauniv.ac.ug/student/",
    bgColor: "bg-blue-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
    delay: 0.3,
    external: true,
  },
  {
    icon: FaScroll,
    title: "Programs",
    description: "With over 100 academic programs delivering world-class education.",
    buttonText: "Learn More",
    href: "https://unche.or.ug/institution/bugema-university/",
    bgColor: "bg-red-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    delay: 0.4,
    external: true,
  },
]

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`
                  ${service.bgColor} 
                  rounded-xl p-8 text-center text-white
                  transform transition-all duration-300
                  hover:scale-105 hover:shadow-2xl
                  focus-within:scale-105 focus-within:shadow-2xl
                  group cursor-pointer
                `}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center justify-center h-full min-h-[280px]">
                  <motion.div
                    className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>

                  <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">{service.title}</h3>

                  <p className="mb-6 text-base text-white/90 leading-relaxed">{service.description}</p>

                  <Link
                    href={service.href}
                    {...(service.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="inline-block"
                  >
                    <motion.button
                      className={`
                        px-6 py-3 text-white font-medium rounded-lg
                        ${service.buttonColor}
                        transition-all duration-200
                        focus:outline-none focus:ring-4 focus:ring-white/20
                        shadow-lg hover:shadow-xl
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service.buttonText}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
