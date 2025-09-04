import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Building, Calendar, Home, Users, } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
  const quickLinks = [
    { icon: Home, label: "Home", href: "/", description: "Return to homepage" },
//     { icon: BookOpen, label: "Academics", href: "/academics", description: "Programs & Courses" },
    { icon: Users, label: "Admissions", href: "https://erms.bugemauniv.ac.ug/application/", description: "Apply Now" },
    { icon: Calendar, label: "Events", href: "/events", description: "Campus Events" },
    { icon: Building, label: "Campus Life", href: "/studentlife", description: "Student Life" },
//     { icon: GraduationCap, label: "Alumni", href: "/alumni", description: "Alumni Network" },
  ]
const Notfound = () => {
  return (
    <main className=" bg-gray-400 w-full mx-auto  sm:px-6  py-12">
        <div className="text-center mb-12 mt-[10%]">
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-blue-100 dark:text-blue-900/30 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Oops! Page Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            The page you're looking for does not exist. Don't worry, we'll help you find your way
            back to your academic journey.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link href={link.href} key={index} >
              <Card
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <link.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{link.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
  )
}

export default Notfound