"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  GraduationCap,
} from "lucide-react"

const ModernFooter = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Academic Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Student Life", href: "/student-life" },
    { name: "Research", href: "/research" },
    { name: "Alumni", href: "/alumni" },
  ]

  const academicLinks = [
    { name: "School of Business", href: "/schools/business" },
    { name: "School of Health Sciences", href: "/schools/health" },
    { name: "School of Education", href: "/schools/education" },
    { name: "School of Agriculture", href: "/schools/agriculture" },
    { name: "School of Technology", href: "/schools/technology" },
    { name: "Graduate Studies", href: "/schools/graduate" },
  ]

  const resourceLinks = [
    { name: "Library", href: "/library" },
    { name: "Student Portal", href: "/student-portal" },
    { name: "Online Learning", href: "/online-learning" },
    { name: "Career Services", href: "/career-services" },
    { name: "Campus Map", href: "/campus-map" },
    { name: "Contact Us", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/bugemauniversity", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/bugemauniv", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/bugemauniversity", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/school/bugema-university", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/bugemauniversity", label: "YouTube" },
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* University Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bugema University</h3>
                  <p className="text-gray-400 text-sm">Excellence in Education</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming lives through quality education since 1999. Join our community of over 10,000 students from
                17+ countries pursuing excellence in higher education.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Seeta-Mukono, Uganda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+256 414 290 881</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">info@bugemauniv.ac.ug</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Academic Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Academic Programs</h4>
              <ul className="space-y-3">
                {academicLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 mb-8">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold mb-4 text-gray-400">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bugema University. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default ModernFooter
