"use client"

import type React from "react"

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const footerLinks = {
  academics: [
    { name: "Schools & Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Library", href: "/library" },
    { name: "Research", href: "/research" },
    { name: "Online Learning", href: "/online" },
  ],
  student: [
    { name: "Student Life", href: "/student-life" },
    { name: "Housing", href: "/housing" },
    { name: "Dining", href: "/dining" },
    { name: "Sports & Recreation", href: "/sports" },
    { name: "Clubs & Organizations", href: "/clubs" },
    { name: "Career Services", href: "/careers" },
  ],
  about: [
    { name: "About Bugema", href: "/about" },
    { name: "History", href: "/history" },
    { name: "Leadership", href: "/leadership" },
    { name: "News & Events", href: "/news" },
    { name: "Alumni", href: "/alumni" },
    { name: "Employment", href: "/employment" },
  ],
  resources: [
    { name: "Student Portal", href: "/portal" },
    { name: "Faculty Portal", href: "/faculty" },
    { name: "IT Services", href: "/it" },
    { name: "Health Services", href: "/health" },
    { name: "Security", href: "/security" },
    { name: "Parking", href: "/parking" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/bugema", color: "hover:text-blue-600" },
  { icon: Twitter, href: "https://twitter.com/bugema", color: "hover:text-sky-500" },
  { icon: Instagram, href: "https://instagram.com/bugema", color: "hover:text-pink-600" },
  { icon: Linkedin, href: "https://linkedin.com/school/bugema", color: "hover:text-blue-700" },
  { icon: Youtube, href: "https://youtube.com/bugema", color: "hover:text-red-600" },
]

const quickStats = [
  { icon: Users, number: "15,000+", label: "Students" },
  { icon: BookOpen, number: "50+", label: "Programs" },
  { icon: Award, number: "30+", label: "Years" },
  { icon: GraduationCap, number: "25,000+", label: "Alumni" },
]

export default function ModernFooter() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Bugema University</h2>
                  <p className="text-gray-400">Transforming Lives Through Education</p>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                For over three decades, we've been committed to providing world-class education that empowers students
                to become leaders and innovators in their fields.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-2">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-blue-100 mb-6">Get the latest updates on admissions, events, and university news.</p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe to Newsletter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Academics */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Academics</h3>
              <ul className="space-y-3">
                {footerLinks.academics.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Life */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Student Life</h3>
              <ul className="space-y-3">
                {footerLinks.student.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Address</h4>
                    <p className="text-gray-400 text-sm">
                      P.O. Box 6529
                      <br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">
                      +256 414 290 881
                      <br />
                      +256 772 290 881
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">
                      info@bugema.ac.ug
                      <br />
                      admissions@bugema.ac.ug
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-gray-700`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">© 2024 Bugema University. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
