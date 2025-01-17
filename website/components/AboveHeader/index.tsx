"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaCalendarAlt, FaGraduationCap, FaUserCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaTwitch } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"
import { LinearText } from "./LinearText"
import { Search } from "./Search"
import { useTypingEffect } from "@/utils/hooks"

const statements = [
  "Greetings from Bugema University",
  "Get Your Admission Now",
  "January Intake is Ongoing",
  "Step Into Excellence",
]

const EnhancedNavbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const displayedText = useTypingEffect(statements)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 -mt-[10px]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <LinearText text={displayedText} />
            <Search />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <AnimatedNavLink href="/calendar" icon={<FaCalendarAlt size={14} />}>
              Calendar
            </AnimatedNavLink>
            <AnimatedNavLink href="https://elearning.bugemauniv.ac.ug/" icon={<RiComputerLine size={14} />}>
              eLearning
            </AnimatedNavLink>
            <AnimatedNavLink href="https://erms.bugemauniv.ac.ug/buerms/default.aspx/" icon={<FaUserCircle size={14} />}>
              StaffPortal
            </AnimatedNavLink>
            <DropdownNavLink
              items={[
                { label: "Login", href: "https://erms.bugemauniv.ac.ug/student/login/" },
                { label: "Register", href: "https://erms.bugemauniv.ac.ug/student/registration/" },
              ]}
            >
              StudentsPortal
            </DropdownNavLink>
            <motion.a
              href="https://erms.bugemauniv.ac.ug/application/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ApplyNow
            </motion.a>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-2">
            <SocialIcon href="https://facebook.com" icon={<FaFacebookF size={14} />} />
            <SocialIcon href="https://twitter.com" icon={<FaTwitter size={14} />} />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram size={14} />} />
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn size={14} />} />
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center space-x-2">
            <Search />
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={navbarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navbarOpen && <MobileMenu closeMenu={() => setNavbarOpen(false)} />}
        </AnimatePresence>
      </div>
    </header>
  )
}

const AnimatedNavLink: React.FC<{ href: string; icon: React.ReactNode; children: React.ReactNode }> = ({ href, icon, children }) => (
  <motion.a
    href={href}
    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span>{children}</span>
  </motion.a>
)

const DropdownNavLink: React.FC<{ children: React.ReactNode; items: { label: string; href: string }[] }> = ({ children, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
      >
        <FaGraduationCap size={14} />
        <span>{children}</span>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={12} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-xs transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
)

const MobileMenu: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className="lg:hidden bg-white"
  >
    <nav className="flex flex-col space-y-3 py-4 px-4">
      <a href="https://erms.bugemauniv.ac.ug/buerms/default.aspx/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm">
        <FaUserCircle size={14} />
        <span>Staff Portal</span>
      </a>
      <div>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm">
          <FaGraduationCap size={14} />
          <span>Students Portal</span>
        </button>
        <div className="mt-2 pl-6">
          <a href="https://erms.bugemauniv.ac.ug/student/login/" className="block text-gray-600 hover:text-blue-600 text-xs">Login</a>
          <a href="https://erms.bugemauniv.ac.ug/student/registration/" className="block text-gray-600 hover:text-blue-600 text-xs">Register</a>
        </div>
      </div>
      <a href="https://erms.bugemauniv.ac.ug/application/" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-700 transition-colors duration-300">
        Apply Online
      </a>
      <div className="flex items-center space-x-4 pt-2">
        <SocialIcon href="https://www.facebook.com" icon={<FaFacebookF size={14} />} />
        <SocialIcon href="https://twitter.com/UnivBugema" icon={<FaTwitch size={14} />} />
        <SocialIcon href="https://www.tiktok.com/@BugemaUniv" icon={<FaTiktok size={14} />} />
        <SocialIcon href="https://www.linkedin.com" icon={<FaLinkedinIn size={14} />} />
        <SocialIcon href="https://youtube.com/@bugemauniversity3502" icon={<FaYoutube size={14} />} />
      </div>
    </nav>
  </motion.div>
)

export default EnhancedNavbar

