"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Search } from "lucide-react"

const navigationData = [
  {
    title: "About",
    href: "/about",
    submenu: [
      {
        title: "University Overview",
        items: [
          { title: "Our History", href: "/about/history" },
          { title: "Mission & Vision", href: "/about/mission" },
          { title: "Core Values", href: "/about/values" },
          { title: "Leadership", href: "/about/leadership" },
          { title: "Governance", href: "/about/governance" },
        ],
      },
      {
        title: "Campus Life",
        items: [
          { title: "Student Life", href: "/student-life" },
          { title: "Campus Facilities", href: "/facilities" },
          { title: "Housing & Dining", href: "/housing" },
          { title: "Health Services", href: "/health" },
          { title: "Campus Safety", href: "/safety" },
        ],
      },
      {
        title: "Quick Links",
        items: [
          { title: "Why Choose Bugema", href: "/why-bugema" },
          { title: "Accreditation", href: "/accreditation" },
          { title: "Rankings", href: "/rankings" },
          { title: "Alumni", href: "/alumni" },
          { title: "Employment", href: "/employment" },
        ],
      },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    submenu: [
      {
        title: "Schools & Faculties",
        items: [
          { title: "School of Agriculture", href: "/schools/agriculture" },
          { title: "School of Business", href: "/schools/business" },
          { title: "School of Education", href: "/schools/education" },
          { title: "School of Health Sciences", href: "/schools/health" },
          { title: "School of Science & Technology", href: "/schools/science" },
          { title: "School of Social Sciences", href: "/schools/social" },
          { title: "School of Theology", href: "/schools/theology" },
          { title: "Graduate School", href: "/schools/graduate" },
        ],
      },
      {
        title: "Programs",
        items: [
          { title: "Undergraduate Programs", href: "/programs/undergraduate" },
          { title: "Graduate Programs", href: "/programs/graduate" },
          { title: "Diploma Programs", href: "/programs/diploma" },
          { title: "Certificate Programs", href: "/programs/certificate" },
          { title: "Online Programs", href: "/programs/online" },
        ],
      },
      {
        title: "Academic Resources",
        items: [
          { title: "Academic Calendar", href: "/calendar" },
          { title: "Course Catalog", href: "/catalog" },
          { title: "Library", href: "/library" },
          { title: "Research", href: "/research" },
          { title: "Academic Policies", href: "/policies" },
        ],
      },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    submenu: [
      {
        title: "Apply",
        items: [
          { title: "Undergraduate Admission", href: "/admissions/undergraduate" },
          { title: "Graduate Admission", href: "/admissions/graduate" },
          { title: "International Students", href: "/admissions/international" },
          { title: "Transfer Students", href: "/admissions/transfer" },
          { title: "Application Requirements", href: "/admissions/requirements" },
        ],
      },
      {
        title: "Financial Information",
        items: [
          { title: "Tuition & Fees", href: "/admissions/tuition" },
          { title: "Financial Aid", href: "/admissions/financial-aid" },
          { title: "Scholarships", href: "/admissions/scholarships" },
          { title: "Payment Plans", href: "/admissions/payment" },
          { title: "Cost Calculator", href: "/admissions/calculator" },
        ],
      },
      {
        title: "Visit & Connect",
        items: [
          { title: "Campus Tours", href: "/visit" },
          { title: "Virtual Tour", href: "/virtual-tour" },
          { title: "Information Sessions", href: "/info-sessions" },
          { title: "Contact Admissions", href: "/admissions/contact" },
          { title: "Request Information", href: "/request-info" },
        ],
      },
    ],
  },
  {
    title: "Student Life",
    href: "/student-life",
    submenu: [
      {
        title: "Campus Experience",
        items: [
          { title: "Residence Halls", href: "/student-life/housing" },
          { title: "Dining Services", href: "/student-life/dining" },
          { title: "Campus Activities", href: "/student-life/activities" },
          { title: "Student Organizations", href: "/student-life/organizations" },
          { title: "Leadership Opportunities", href: "/student-life/leadership" },
        ],
      },
      {
        title: "Sports & Recreation",
        items: [
          { title: "Athletics", href: "/athletics" },
          { title: "Intramural Sports", href: "/sports/intramural" },
          { title: "Recreation Center", href: "/recreation" },
          { title: "Fitness Programs", href: "/fitness" },
          { title: "Outdoor Adventures", href: "/outdoor" },
        ],
      },
      {
        title: "Support Services",
        items: [
          { title: "Academic Support", href: "/support/academic" },
          { title: "Career Services", href: "/career" },
          { title: "Counseling Services", href: "/counseling" },
          { title: "Health Center", href: "/health" },
          { title: "Disability Services", href: "/disability" },
        ],
      },
    ],
  },
  {
    title: "Research",
    href: "/research",
    submenu: [
      {
        title: "Research Areas",
        items: [
          { title: "Agricultural Research", href: "/research/agriculture" },
          { title: "Health Sciences Research", href: "/research/health" },
          { title: "Technology Innovation", href: "/research/technology" },
          { title: "Social Sciences Research", href: "/research/social" },
          { title: "Environmental Studies", href: "/research/environment" },
        ],
      },
      {
        title: "Research Support",
        items: [
          { title: "Research Centers", href: "/research/centers" },
          { title: "Funding Opportunities", href: "/research/funding" },
          { title: "Research Ethics", href: "/research/ethics" },
          { title: "Publications", href: "/research/publications" },
          { title: "Conferences", href: "/research/conferences" },
        ],
      },
    ],
  },
  {
    title: "News & Events",
    href: "/news",
    submenu: [
      {
        title: "News",
        items: [
          { title: "University News", href: "/news" },
          { title: "Press Releases", href: "/news/press" },
          { title: "Faculty News", href: "/news/faculty" },
          { title: "Student News", href: "/news/students" },
          { title: "Alumni News", href: "/news/alumni" },
        ],
      },
      {
        title: "Events",
        items: [
          { title: "Campus Events", href: "/events" },
          { title: "Academic Calendar", href: "/calendar" },
          { title: "Conferences", href: "/events/conferences" },
          { title: "Graduation", href: "/graduation" },
          { title: "Alumni Events", href: "/events/alumni" },
        ],
      },
    ],
  },
]

export function ProfessionalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-white shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=50&width=50&text=BU"
                alt="Bugema University Logo"
                width={50}
                height={50}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-blue-900 group-hover:text-blue-700 transition-colors">
                Bugema University
              </div>
              <div className="text-xs text-gray-600 -mt-1">Excellence in Service</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationData.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Mega Menu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-2xl border border-gray-200 p-8"
                        style={{ left: "50%", transform: "translateX(-50%)" }}
                      >
                        <div className="grid grid-cols-3 gap-8">
                          {item.submenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                                {section.title}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm py-1"
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              Student Portal
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Apply Now
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-4">
                {navigationData.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((section) => (
                          <div key={section.title} className="space-y-1">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4">
                              {section.title}
                            </div>
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
