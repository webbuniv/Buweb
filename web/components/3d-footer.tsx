"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Send,
  Heart,
  Award,
  Users,
} from "lucide-react"

const footerSections = [
  {
    title: "Quick Links",
    icon: ArrowRight,
    links: [
      { name: "About Us", href: "/about" },
      { name: "Academic Programs", href: "/academics" },
      { name: "Admissions", href: "/admissions" },
      { name: "Campus Life", href: "/campus-life" },
      { name: "Research", href: "/research" },
      { name: "Alumni", href: "/alumni" },
    ],
  },
  {
    title: "Schools & Faculties",
    icon: Award,
    links: [
      { name: "School of Business", href: "/schools/business" },
      { name: "School of Health Sciences", href: "/schools/health" },
      { name: "School of Education", href: "/schools/education" },
      { name: "School of Technology", href: "/schools/technology" },
      { name: "School of Agriculture", href: "/schools/agriculture" },
      { name: "Graduate Studies", href: "/schools/graduate" },
    ],
  },
  {
    title: "Student Resources",
    icon: Users,
    links: [
      { name: "Student Portal", href: "/portal" },
      { name: "Library Services", href: "/library" },
      { name: "Academic Calendar", href: "/calendar" },
      { name: "Career Services", href: "/careers" },
      { name: "Health Services", href: "/health" },
      { name: "Counseling", href: "/counseling" },
    ],
  },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/bugemauniversity",
    icon: Facebook,
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/bugemauniv",
    icon: Twitter,
    color: "hover:bg-sky-500",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/bugemauniversity",
    icon: Instagram,
    color: "hover:bg-pink-600",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/bugemauniversity",
    icon: Youtube,
    color: "hover:bg-red-600",
  },
]

const FloatingParticle = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
  <motion.div
    className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${className}`}
    animate={{
      y: [-20, -60, -20],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

export function ThreeDFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.2}
            className={`left-${Math.random() * 100}% top-${Math.random() * 100}%`}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* University Info */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <motion.div
                className="flex items-center space-x-4 mb-8"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <div className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Bugema University
                  </div>
                  <div className="text-sm text-slate-300">Excellence in Service</div>
                </div>
              </motion.div>

              <motion.p
                className="text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Providing quality holistic Christian education for over 75 years, preparing students for productive
                lives of service to God and humanity across the globe.
              </motion.p>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "P.O. Box 6529, Kampala, Uganda", color: "text-blue-400" },
                  { icon: Phone, text: "+256 414 540 163", color: "text-green-400" },
                  { icon: Mail, text: "info@bugemauniv.ac.ug", color: "text-purple-400" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-sm group cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <contact.icon
                      className={`h-5 w-5 ${contact.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + sectionIndex * 0.1 }}
                className="preserve-3d"
              >
                <motion.h3
                  className="font-bold text-xl mb-8 text-white flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <section.icon className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  {section.title}
                </motion.h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <motion.div whileHover={{ x: 10, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link
                          href={link.href}
                          className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm group flex items-center"
                        >
                          <span className="group-hover:gradient-text transition-all duration-300">{link.name}</span>
                          <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stay Connected
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Subscribe to our newsletter for the latest news, events, and updates from Bugema University. Join our
                  community of learners and stay informed about opportunities.
                </p>
              </motion.div>
              <motion.div
                className="flex space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400 backdrop-blur-sm"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links & Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotateY: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 group border border-white/20 hover:border-white/40`}
                  >
                    <social.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 text-sm text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span>&copy; {currentYear} Bugema University. Made with love.</span>
              </div>
              <div className="flex space-x-6">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">
                    Terms of Service
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
