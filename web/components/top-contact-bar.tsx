"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function TopContactBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-900 text-white py-2 text-sm border-b border-blue-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center space-x-6 text-xs md:text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+256 414 540 524</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@bugemauniv.ac.ug</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Seeta-Mukono, Uganda</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Link href="https://facebook.com/bugemauniversity" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://twitter.com/bugemauniv" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="https://instagram.com/bugemauniversity" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="https://youtube.com/bugemauniversity" className="hover:text-blue-300 transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
            <div className="h-4 w-px bg-blue-700"></div>
            <Link href="/student-portal" className="hover:text-blue-300 transition-colors text-xs">
              Student Portal
            </Link>
            <Link href="/staff-portal" className="hover:text-blue-300 transition-colors text-xs">
              Staff Portal
            </Link>
            <Link href="/library" className="hover:text-blue-300 transition-colors text-xs">
              Library
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
