"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Search, Phone, Mail, MapPin, ExternalLink } from "lucide-react"

const navigationData = [
  {
    title: "Schools",
    href: "/schools",
    submenu: [
      {
        title: "Academic Schools",
        items: [
          { title: "School of Graduate Studies, Research & Publications", href: "/schools/graduate" },
          { title: "School of Business", href: "/schools/business" },
          { title: "School of Agriculture and Applied Sciences", href: "/schools/agriculture" },
          { title: "School of Education", href: "/schools/education" },
          { title: "School of Social Sciences", href: "/schools/social" },
          { title: "School of Theology and Religious Studies", href: "/schools/theology" },
          { title: "School of Health and Allied Sciences", href: "/schools/health" },
          { title: "School of Science and Technology", href: "/schools/science" },
        ],
      },
      {
        title: "Quick Actions",
        items: [
          { title: "Apply Now", href: "https://apply.bugemauniv.ac.ug", external: true },
          { title: "Student Portal", href: "https://erms.bugemauniv.ac.ug/student/login/", external: true },
          { title: "E-Learning", href: "https://elearning.bugemauniv.ac.ug/", external: true },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Academic+Excellence",
  },
  {
    title: "Student Life",
    href: "/student-life",
    submenu: [
      {
        title: "Campus Life",
        items: [
          { title: "Student Life Overview", href: "/student-life" },
          { title: "Religious Matters", href: "/religious" },
          { title: "News", href: "/news" },
          { title: "Events", href: "/events" },
          { title: "Gallery", href: "/gallery" },
        ],
      },
      {
        title: "Sports",
        items: [
          { title: "Football", href: "/sports/football" },
          { title: "Netball", href: "/sports/netball" },
          { title: "Volleyball", href: "/sports/volleyball" },
          { title: "Woodball", href: "/sports/woodball" },
          { title: "Basketball", href: "/sports/basketball" },
          { title: "Table Tennis", href: "/sports/table-tennis" },
        ],
      },
      {
        title: "Clubs & Associations",
        items: [
          { title: "IT Club", href: "/clubs/it" },
          { title: "Food & Nutrition", href: "/clubs/nutrition" },
          { title: "BUNSA", href: "/clubs/bunsa" },
          { title: "International Associations", href: "/clubs/international" },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Student+Life",
  },
  {
    title: "Research",
    href: "/research",
    submenu: [
      {
        title: "Research Areas",
        items: [
          { title: "Publications", href: "/publications" },
          { title: "Blogs", href: "https://blog.bugemauniv.ac.ug", external: true },
          { title: "Agriculture Research", href: "/agriculture" },
        ],
      },
      {
        title: "Resources",
        items: [
          { title: "Research Centers", href: "/research/centers" },
          { title: "E-Library", href: "https://e-library.bugemauniv.ac.ug/", external: true },
          { title: "Academic Publications", href: "/research/publications" },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Research+Innovation",
  },
  {
    title: "Admissions",
    href: "/admissions",
    submenu: [
      {
        title: "Apply",
        items: [
          { title: "Application Portal", href: "https://erms.bugemauniv.ac.ug/application", external: true },
          { title: "How to Apply", href: "/admissions/how-to-apply" },
          { title: "Requirements", href: "/admissions/requirements" },
        ],
      },
      {
        title: "Fees & Funding",
        items: [
          {
            title: "Tuition Fees",
            href: "https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx",
            external: true,
          },
          { title: "Funding Your Studies", href: "/work-program" },
          { title: "NHCE Fees", href: "https://imis.unche.or.ug:81/frmTrnStudentPayment.aspx", external: true },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Join+Bugema",
  },
  {
    title: "Campuses",
    href: "/campuses",
    submenu: [
      {
        title: "Our Campuses",
        items: [
          { title: "Main Campus - Seeta", href: "/" },
          { title: "Kampala Campus", href: "https://kc.bugemauniv.ac.ug/", external: true },
          { title: "Arua Campus", href: "/campuses/arua" },
        ],
      },
      {
        title: "Campus Services",
        items: [
          { title: "Hospital", href: "/hospital" },
          { title: "Sports Facilities", href: "/sports" },
          { title: "Library Services", href: "/library" },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Our+Campuses",
  },
]

export function ProfessionalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const closeAllMenus = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
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
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllMenus}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/placeholder.svg?height=50&width=50&text=BU"
                  alt="Bugema University Logo"
                  width={50}
                  height={50}
                  className="transition-transform duration-300"
                />
              </motion.div>
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
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50 group"
                  >
                    <span className="relative">
                      {item.title}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    {item.submenu && (
                      <motion.div
                        animate={{ rotate: activeDropdown === item.title ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </motion.div>
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {/* Menu Items */}
                            <div className="col-span-2 p-8">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {item.submenu.map((section) => (
                                  <div key={section.title}>
                                    <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                                      {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                      {section.items.map((subItem) => (
                                        <motion.li
                                          key={subItem.title}
                                          whileHover={{ x: 5 }}
                                          transition={{ type: "spring", stiffness: 300 }}
                                        >
                                          <Link
                                            href={subItem.href}
                                            target={subItem.external ? "_blank" : undefined}
                                            rel={subItem.external ? "noopener noreferrer" : undefined}
                                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm py-1 group"
                                            onClick={closeAllMenus}
                                          >
                                            <span>{subItem.title}</span>
                                            {subItem.external && (
                                              <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Featured Image */}
                            <div className="relative bg-gradient-to-br from-blue-600 to-emerald-600 p-8 flex items-center justify-center">
                              <div className="text-center text-white">
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.1 }}
                                >
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    width={200}
                                    height={150}
                                    className="rounded-lg mb-4 mx-auto"
                                  />
                                </motion.div>
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-sm opacity-90">Discover excellence in {item.title.toLowerCase()}</p>
                              </div>
                            </div>
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
                <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </Button>
            </div>
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
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="container mx-auto px-4 py-4 max-h-[80vh] overflow-y-auto">
                <div className="space-y-4">
                  {navigationData.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex-1"
                          onClick={closeAllMenus}
                        >
                          {item.title}
                        </Link>
                        {item.submenu && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                          >
                            <motion.div
                              animate={{ rotate: activeDropdown === item.title ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </Button>
                        )}
                      </div>

                      <AnimatePresence>
                        {item.submenu && activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2 border-l-2 border-blue-100"
                          >
                            {item.submenu.map((section) => (
                              <div key={section.title} className="space-y-1">
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-1">
                                  {section.title}
                                </div>
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    target={subItem.external ? "_blank" : undefined}
                                    rel={subItem.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    onClick={closeAllMenus}
                                  >
                                    <span>{subItem.title}</span>
                                    {subItem.external && <ExternalLink className="ml-2 h-3 w-3" />}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+256 414 540 163</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>info@bugemauniv.ac.ug</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>Seeta-Mukono, Uganda</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={closeAllMenus}
          />
        )}
      </AnimatePresence>
    </>
  )
}
