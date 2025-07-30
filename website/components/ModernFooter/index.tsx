"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
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

  const studentResources = [
    { name: "Student Portal", href: "https://erms.bugemauniv.ac.ug/student/login" },
    { name: "E-Learning", href: "https://elearning.bugemauniv.ac.ug/" },
    { name: "Library", href: "https://www.myloft.xyz/" },
    { name: "E-Library", href: "https://e-library.bugemauniv.ac.ug/" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Campus Map", href: "/campus-map" },
  ]

  const downloads = [
    {
      name: "Fees Structure",
      href: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67766a4000002ce65dcb/view?project=674dcf7b003d57db960a&project=674dcf7b003d57db960a&mode=admin",
    },
    { name: "Nursing Fees Structure", href: "/docs/NUR.pdf" },
    { name: "Official Bulletin", href: "/docs/Bulletin.pdf" },
    { name: "School of Graduates Bulletin", href: "/docs/School.pdf" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/bugemauniversity",
      icon: Facebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/UnivBugema",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@bugemauniversity3502",
      icon: Youtube,
      color: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/school/bugema-university",
      icon: Linkedin,
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bugemauniversity",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* University Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bugema</h3>
                  <p className="text-blue-300">University</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Excellence in higher education since 1999. Empowering minds and transforming lives through quality
                education and holistic development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">P.O. Box 6529, Kampala, Uganda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+256-312-351-400" className="text-gray-300 hover:text-white transition-colors">
                    +256-312-351-400
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@bugemauniv.ac.ug" className="text-gray-300 hover:text-white transition-colors">
                    info@bugemauniv.ac.ug
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Student Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Student Resources</h4>
              <ul className="space-y-3">
                {studentResources.map((resource, index) => (
                  <motion.li
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={resource.href}
                      target={resource.href.startsWith("http") ? "_blank" : "_self"}
                      rel={resource.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Downloads & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Downloads */}
              <div>
                <h4 className="text-xl font-bold mb-6">Downloads</h4>
                <ul className="space-y-3">
                  {downloads.map((download, index) => (
                    <motion.li
                      key={download.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={download.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {download.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for the latest news and updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
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
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">© 2024 Bugema University. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">Empowering minds, transforming lives since 1999</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default ModernFooter
