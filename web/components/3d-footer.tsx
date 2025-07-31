"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react"

const footerLinks = {
  academics: [
    { title: "Schools & Faculties", href: "/schools" },
    { title: "Undergraduate Programs", href: "/programs/undergraduate" },
    { title: "Graduate Programs", href: "/programs/graduate" },
    { title: "Online Learning", href: "/online" },
    { title: "Academic Calendar", href: "/calendar" },
    { title: "Course Catalog", href: "/catalog" },
  ],
  admissions: [
    { title: "Apply Now", href: "/apply" },
    { title: "Admission Requirements", href: "/requirements" },
    { title: "Tuition & Fees", href: "/tuition" },
    { title: "Financial Aid", href: "/financial-aid" },
    { title: "Scholarships", href: "/scholarships" },
    { title: "Campus Tours", href: "/tours" },
  ],
  studentLife: [
    { title: "Campus Life", href: "/campus-life" },
    { title: "Housing & Dining", href: "/housing" },
    { title: "Student Organizations", href: "/organizations" },
    { title: "Athletics & Sports", href: "/athletics" },
    { title: "Health Services", href: "/health" },
    { title: "Career Services", href: "/career" },
  ],
  resources: [
    { title: "Library", href: "/library" },
    { title: "Research", href: "/research" },
    { title: "Alumni Network", href: "/alumni" },
    { title: "News & Events", href: "/news" },
    { title: "Publications", href: "/publications" },
    { title: "Contact Us", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/bugemauniversity", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/bugemauniv", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/bugemauniversity", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/bugemauniversity", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/school/bugema-university", label: "LinkedIn" },
]

const quickStats = [
  { icon: Users, value: "15,000+", label: "Students" },
  { icon: BookOpen, value: "120+", label: "Programs" },
  { icon: Award, value: "75+", label: "Years" },
  { icon: GraduationCap, value: "50,000+", label: "Alumni" },
]

export function ThreeDFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Stay Connected with Bugema</h3>
              <p className="text-xl text-white/80 mb-8">
                Get the latest news, events, and updates from our university community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* University Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=BU"
                  alt="Bugema University"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <div className="text-xl font-bold">Bugema University</div>
                  <div className="text-sm text-white/70">Excellence in Service</div>
                </div>
              </Link>

              <p className="text-white/80 leading-relaxed">
                For over 75 years, Bugema University has been providing quality holistic Christian education that
                prepares students for productive lives of service to God and humanity.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Seeta-Mukono, Uganda, East Africa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">+256 414 540 524</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">info@bugemauniv.ac.ug</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon className="h-5 w-5 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Academics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-blue-400">Academics</h4>
              <ul className="space-y-3">
                {footerLinks.academics.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Admissions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-emerald-400">Admissions</h4>
              <ul className="space-y-3">
                {footerLinks.admissions.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Student Life */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-amber-400">Student Life</h4>
              <ul className="space-y-3">
                {footerLinks.studentLife.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-purple-400">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10"
          >
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-white/70">© 2024 Bugema University. All rights reserved.</div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-white/70 hover:text-white transition-colors">
                  Accessibility
                </Link>
                <Link href="/sitemap" className="text-white/70 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
