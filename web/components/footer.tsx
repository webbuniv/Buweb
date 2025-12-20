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
  { name: "Facebook", href: "https://facebook.com/bugemauniversity", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/bugemauniv", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/bugemauniversity", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/bugemauniversity", icon: Youtube },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* University Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-bugema-blue to-bugema-gold rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">Bugema University</div>
                  <div className="text-sm text-slate-400">Excellence in Service</div>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Providing quality holistic Christian education for over 50 years, preparing students for productive
                lives of service to God and humanity.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-bugema-gold flex-shrink-0" />
                  <span className="text-slate-300">P.O. Box 6529, Kampala, Uganda</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-bugema-gold flex-shrink-0" />
                  <span className="text-slate-300">+256 414 540 163</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-bugema-gold flex-shrink-0" />
                  <span className="text-slate-300">info@bugemauniv.ac.ug</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-bugema-gold transition-colors duration-300 text-sm group flex items-center"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-slate-800"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-bold text-xl mb-2">Stay Connected</h3>
                <p className="text-slate-300">
                  Subscribe to our newsletter for the latest news, events, and updates from Bugema University.
                </p>
              </div>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email address"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-bugema-gold"
                />
                <Button className="bg-bugema-gold hover:bg-bugema-gold/90 text-black">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-bugema-blue transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-slate-400">
              <p>&copy; {currentYear} Bugema University. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-bugema-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-bugema-gold transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
