"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react"

const navigationItems = [
  {
    title: "About",
    href: "/about",
    items: [
      { title: "Our Story", href: "/about/story", description: "Learn about our rich history and mission" },
      { title: "Leadership", href: "/about/leadership", description: "Meet our administrative team and faculty" },
      { title: "Campus Life", href: "/about/campus-life", description: "Discover vibrant student life at Bugema" },
      { title: "Why Bugema", href: "/about/why-bugema", description: "What makes us unique and special" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    items: [
      { title: "Schools & Faculties", href: "/academics/schools", description: "Explore our academic divisions" },
      { title: "Programs", href: "/academics/programs", description: "Undergraduate and graduate programs" },
      { title: "Research", href: "/academics/research", description: "Research opportunities and publications" },
      { title: "Academic Calendar", href: "/academics/calendar", description: "Important dates and deadlines" },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    items: [
      { title: "Apply Now", href: "/admissions/apply", description: "Start your application process today" },
      { title: "Requirements", href: "/admissions/requirements", description: "Admission requirements and criteria" },
      { title: "Tuition & Fees", href: "/admissions/fees", description: "Cost information and payment plans" },
      { title: "Financial Aid", href: "/admissions/financial-aid", description: "Scholarships and financial support" },
    ],
  },
  {
    title: "Campus Life",
    href: "/campus-life",
    items: [
      { title: "Student Services", href: "/campus-life/services", description: "Support services for students" },
      { title: "Housing", href: "/campus-life/housing", description: "On-campus accommodation options" },
      { title: "Sports & Recreation", href: "/campus-life/sports", description: "Athletic programs and facilities" },
      { title: "Clubs & Organizations", href: "/campus-life/clubs", description: "Student clubs and activities" },
    ],
  },
]

export function ThreeDNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{
                  rotateY: 180,
                  scale: 1.1,
                }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="h-7 w-7 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900 dark:text-white">Bugema University</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Excellence in Service</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <NavigationMenuTrigger className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl px-4 py-2">
                        {item.title}
                      </NavigationMenuTrigger>
                    </motion.div>
                    <NavigationMenuContent>
                      <motion.div
                        className="grid w-[400px] gap-3 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20"
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <motion.div
                              whileHover={{
                                scale: 1.02,
                                x: 5,
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 focus:bg-accent focus:text-accent-foreground group"
                              >
                                <div className="text-sm font-semibold leading-none text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {subItem.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400 mt-1">
                                  {subItem.description}
                                </p>
                              </Link>
                            </motion.div>
                          </NavigationMenuLink>
                        ))}
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-xl border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/admissions/apply">Apply Now</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden w-10 h-10 p-0 rounded-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="space-y-6">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="space-y-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center text-lg">
                      {item.title}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </h3>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <motion.div
                          key={subItem.title}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            href={subItem.href}
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="flex flex-col space-y-4 pt-6 border-t border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" asChild onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/admissions/apply">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
