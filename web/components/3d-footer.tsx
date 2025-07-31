"use client"

import { motion } from "framer-motion"
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
} from "lucide-react"

const footerSections = [
  {
    title: "Quick Links",
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
  { name: "Facebook", href: "https://facebook.com/bugemauniversity", icon: Facebook, color: "hover:text-blue-500" },
  { name: "Twitter", href: "https://twitter.com/bugemauniv", icon: Twitter, color: "hover:text-sky-500" },
  { name: "Instagram", href: "https://instagram.com/bugemauniversity", icon: Instagram, color: "hover:text-pink-500" },
  { name: "YouTube", href: "https://youtube.com/bugemauniversity", icon: Youtube, color: "hover:text-red-500" },
]

export function ThreeDFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* University Info */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl">Bugema University</div>
                  <div className="text-sm text-blue-200">Excellence in Service</div>
                </div>
              </motion.div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Providing quality holistic Christian education for over 75 years, preparing students for productive
                lives of service to God and humanity.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "P.O. Box 6529, Kampala, Uganda" },
                  { icon: Phone, text: "+256 414 540 163" },
                  { icon: Mail, text: "info@bugemauniv.ac.ug" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-sm group cursor-pointer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <contact.icon className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <h3 className="font-bold text-xl mb-8 text-white">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ x: 5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group flex items-center"
                        >
                          <span>{link.name}</span>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stay Connected
                </h3>
                <p className="text-gray-300 text-lg">
                  Subscribe to our newsletter for the latest news, events, and updates from Bugema University.
                </p>
              </div>
              <motion.div
                className="flex space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 rounded-xl backdrop-blur-sm"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links & Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 180,
                    z: 20,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group ${social.color} backdrop-blur-sm`}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-current transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <motion.p whileHover={{ scale: 1.05 }} className="flex items-center">
                &copy; {currentYear} Bugema University. Made with{" "}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="mx-1"
                >
                  <Heart className="h-4 w-4 text-red-500" />
                </motion.span>
                for education
              </motion.p>
              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                  <motion.div
                    key={link}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
