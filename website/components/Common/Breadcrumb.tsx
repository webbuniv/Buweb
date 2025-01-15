'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  pageName: string
  description: string
  breadcrumbs: { name: string; href: string }[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName, description, breadcrumbs }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-4xl"
              >
                {pageName}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark"
              >
                {description}
              </motion.p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <motion.nav 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex" 
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                      <Link 
                        href={breadcrumb.href} 
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        {breadcrumb.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.nav>
          </div>
        </div>
      </div>
      <BackgroundShapes />
    </section>
  )
}

const BackgroundShapes: React.FC = () => (
  <>
    <span className="absolute top-0 left-0 z-[-1]">
      <svg
        width="287"
        height="254"
        viewBox="0 0 287 254"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
          fill="url(#paint0_linear_111:578)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_111:578"
            x1="-40.5"
            y1="117"
            x2="301.926"
            y2="-97.1485"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute right-0 top-0 z-[-1]">
      <svg
        width="628"
        height="258"
        viewBox="0 0 628 258"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
          fill="url(#paint0_linear_0:1)"
        />
        <path
          opacity="0.1"
          d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
          fill="url(#paint1_linear_0:1)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0:1"
            x1="644"
            y1="221"
            x2="429.946"
            y2="37.0429"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0:1"
            x1="18.3648"
            y1="166.016"
            x2="105.377"
            y2="32.3398"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </>
)

export default Breadcrumb

