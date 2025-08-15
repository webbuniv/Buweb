"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Users,
  BookOpen,
  Building,
  Microscope,
} from "lucide-react"

const navigationData = [
  {
    title: "Schools",
    href: "/schools",
    icon: GraduationCap,
    submenu: [
      {
        title: "Academic Schools",
        items: [
          {
            title: "School of Graduate Studies, Research & Publications",
            href: "/schools/graduate",
            description: "Advanced degrees and research programs",
          },
          {
            title: "School of Business",
            href: "/schools/business",
            description: "Business administration and entrepreneurship",
          },
          {
            title: "School of Agriculture and Applied Sciences",
            href: "/schools/agriculture",
            description: "Sustainable agriculture and food security",
          },
          {
            title: "School of Education",
            href: "/schools/education",
            description: "Teacher training and educational leadership",
          },
          {
            title: "School of Social Sciences",
            href: "/schools/social",
            description: "Humanities and social development",
          },
          {
            title: "School of Theology and Religious Studies",
            href: "/schools/theology",
            description: "Spiritual formation and ministry",
          },
          {
            title: "School of Health and Allied Sciences",
            href: "/schools/health",
            description: "Healthcare and medical sciences",
          },
          {
            title: "School of Science and Technology",
            href: "/schools/science",
            description: "STEM education and innovation",
          },
        ],
      },
      {
        title: "Quick Actions",
        items: [
          {
            title: "Apply Now",
            href: "https://apply.bugemauniv.ac.ug",
            external: true,
            description: "Start your application today",
          },
          {
            title: "Student Portal",
            href: "https://erms.bugemauniv.ac.ug/student/login/",
            external: true,
            description: "Access your student account",
          },
          {
            title: "E-Learning",
            href: "https://elearning.bugemauniv.ac.ug/",
            external: true,
            description: "Online learning platform",
          },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Academic+Excellence",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Student Life",
    href: "/student-life",
    icon: Users,
    submenu: [
      {
        title: "Campus Life",
        items: [
          { title: "Student Life Overview", href: "/student-life", description: "Campus community and activities" },
          { title: "Religious Matters", href: "/religious", description: "Spiritual growth and worship" },
          { title: "News", href: "/news", description: "Latest campus news and updates" },
          { title: "Events", href: "/events", description: "Upcoming campus events" },
          { title: "Gallery", href: "/gallery", description: "Campus life in pictures" },
        ],
      },
      {
        title: "Sports",
        items: [
          { title: "Football", href: "/sports/football", description: "University football team" },
          { title: "Netball", href: "/sports/netball", description: "Netball competitions" },
          { title: "Volleyball", href: "/sports/volleyball", description: "Volleyball tournaments" },
          { title: "Basketball", href: "/sports/basketball", description: "Basketball league" },
          { title: "Table Tennis", href: "/sports/table-tennis", description: "Table tennis club" },
        ],
      },
      {
        title: "Clubs & Organizations",
        items: [
          { title: "IT Club", href: "/clubs/it", description: "Technology and innovation" },
          { title: "Food & Nutrition", href: "/clubs/nutrition", description: "Health and wellness" },
          { title: "BUNSA", href: "/clubs/bunsa", description: "Student association" },
          { title: "International Associations", href: "/clubs/international", description: "Global connections" },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Student+Life",
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "Research",
    href: "/research",
    icon: Microscope,
    submenu: [
      {
        title: "Research Areas",
        items: [
          { title: "Publications", href: "/publications", description: "Academic publications and journals" },
          {
            title: "Blogs",
            href: "https://blog.bugemauniv.ac.ug",
            external: true,
            description: "Research insights and articles",
          },
          { title: "Agriculture Research", href: "/agriculture", description: "Agricultural innovation studies" },
        ],
      },
      {
        title: "Resources",
        items: [
          { title: "Research Centers", href: "/research/centers", description: "Specialized research facilities" },
          {
            title: "E-Library",
            href: "https://e-library.bugemauniv.ac.ug/",
            external: true,
            description: "Digital library resources",
          },
          { title: "Academic Publications", href: "/research/publications", description: "Scholarly works and papers" },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Research+Innovation",
    color: "from-purple-600 to-violet-700",
  },
  {
    title: "Admissions",
    href: "/admissions",
    icon: BookOpen,
    submenu: [
      {
        title: "Apply",
        items: [
          {
            title: "Application Portal",
            href: "https://erms.bugemauniv.ac.ug/application",
            external: true,
            description: "Submit your application online",
          },
          { title: "How to Apply", href: "/admissions/how-to-apply", description: "Step-by-step application guide" },
          { title: "Requirements", href: "/admissions/requirements", description: "Admission requirements" },
        ],
      },
      {
        title: "Fees & Funding",
        items: [
          {
            title: "Tuition Fees",
            href: "https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx",
            external: true,
            description: "Current fee structure",
          },
          { title: "Funding Your Studies", href: "/work-program", description: "Financial assistance options" },
          {
            title: "NHCE Fees",
            href: "https://imis.unche.or.ug:81/frmTrnStudentPayment.aspx",
            external: true,
            description: "National Higher Education fees",
          },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Join+Bugema",
    color: "from-orange-600 to-red-700",
  },
  {
    title: "Campuses",
    href: "/campuses",
    icon: Building,
    submenu: [
      {
        title: "Our Campuses",
        items: [
          { title: "Main Campus - Seeta", href: "/", description: "Primary campus in Mukono" },
          {
            title: "Kampala Campus",
            href: "https://kc.bugemauniv.ac.ug/",
            external: true,
            description: "Urban campus in Kampala",
          },
          { title: "Arua Campus", href: "/campuses/arua", description: "Northern Uganda campus" },
        ],
      },
      {
        title: "Campus Services",
        items: [
          { title: "Hospital", href: "/hospital", description: "Medical services and care" },
          { title: "Sports Facilities", href: "/sports", description: "Athletic and recreation facilities" },
          { title: "Library Services", href: "/library", description: "Academic resources and study spaces" },
        ],
      },
    ],
    image: "/placeholder.svg?height=300&width=400&text=Our+Campuses",
    color: "from-cyan-600 to-blue-700",
  },
]

export function ProfessionalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

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

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const closeAllMenus = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  const getMenuPosition = (index: number, totalItems: number) => {
    const isLastTwo = index >= totalItems - 2
    return isLastTwo ? "right-0" : "left-1/2 transform -translate-x-1/2"
  }

  return (
    <>
      <motion.nav
        ref={navRef}
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
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
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
              {navigationData.map((item, index) => (
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
                    <item.icon className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
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

                  {/* Enhanced Mega Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full mt-2 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden ${getMenuPosition(index, navigationData.length)}`}
                          style={{
                            transformStyle: "preserve-3d",
                            maxWidth: "min(90vw, 1152px)",
                          }}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 min-h-[400px]">
                            {/* Menu Items */}
                            <div className="col-span-2 p-8 bg-gradient-to-br from-gray-50 to-white">
                              <div className="mb-6">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div
                                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                                  >
                                    <item.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  Explore our comprehensive {item.title.toLowerCase()} offerings
                                </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {item.submenu.map((section) => (
                                  <div key={section.title} className="space-y-4">
                                    <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                                      {section.title}
                                    </h4>
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
                                            className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                                            onClick={closeAllMenus}
                                          >
                                            <div className="flex items-start justify-between">
                                              <div className="flex-1">
                                                <div className="flex items-center text-gray-800 group-hover:text-blue-600 font-medium text-sm mb-1">
                                                  <span>{subItem.title}</span>
                                                  {subItem.external && (
                                                    <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                  )}
                                                </div>
                                                {subItem.description && (
                                                  <p className="text-xs text-gray-500 group-hover:text-gray-600">
                                                    {subItem.description}
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Featured Section */}
                            <div
                              className={`relative bg-gradient-to-br ${item.color} p-8 flex flex-col justify-center items-center text-white overflow-hidden`}
                            >
                              {/* Background Pattern */}
                              <div className="absolute inset-0 opacity-10">
                                <div
                                  className="absolute inset-0"
                                  style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                  }}
                                />
                              </div>

                              <div className="relative z-10 text-center">
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.1 }}
                                  className="mb-6"
                                >
                                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <item.icon className="h-10 w-10 text-white" />
                                  </div>
                                </motion.div>

                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  <h4 className="font-bold text-2xl mb-3">{item.title}</h4>
                                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                                    Discover excellence in {item.title.toLowerCase()} at Bugema University. Join
                                    thousands of students in their journey to success.
                                  </p>

                                  <div className="space-y-3">
                                    <Button asChild className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                                      <Link href={item.href} onClick={closeAllMenus}>
                                        Explore {item.title}
                                      </Link>
                                    </Button>

                                    <div className="flex items-center justify-center space-x-4 text-xs opacity-80">
                                      <div className="flex items-center">
                                        <Users className="h-3 w-3 mr-1" />
                                        <span>15,000+ Students</span>
                                      </div>
                                      <div className="flex items-center">
                                        <GraduationCap className="h-3 w-3 mr-1" />
                                        <span>75+ Years</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>

                              {/* Decorative Elements */}
                              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg" />
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
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
              >
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
                          className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 font-medium flex-1 rounded-lg hover:bg-blue-50 transition-colors"
                          onClick={closeAllMenus}
                        >
                          <item.icon className="h-5 w-5 mr-3 opacity-70" />
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
                            className="pl-4 space-y-3 border-l-2 border-blue-100"
                          >
                            {item.submenu.map((section) => (
                              <div key={section.title} className="space-y-2">
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-2 bg-gray-50 rounded-lg">
                                  {section.title}
                                </div>
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    target={subItem.external ? "_blank" : undefined}
                                    rel={subItem.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    onClick={closeAllMenus}
                                  >
                                    <div>
                                      <div className="font-medium">{subItem.title}</div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                                      )}
                                    </div>
                                    {subItem.external && <ExternalLink className="h-3 w-3 ml-2" />}
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
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+256 414 540 163</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>info@bugemauniv.ac.ug</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
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
