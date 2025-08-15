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
import { Menu, X, GraduationCap, ChevronDown, BookOpen, Users, Award, Building } from "lucide-react"

const navigationItems = [
  {
    title: "About",
    href: "/about",
    icon: Users,
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
    icon: BookOpen,
    items: [
      { title: "Schools & Faculties", href: "/academics/schools", description: "Explore our 8 academic divisions" },
      { title: "Programs", href: "/academics/programs", description: "120+ undergraduate and graduate programs" },
      { title: "Research", href: "/academics/research", description: "Cutting-edge research opportunities" },
      { title: "Academic Calendar", href: "/academics/calendar", description: "Important dates and deadlines" },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    icon: Award,
    items: [
      { title: "Apply Now", href: "/admissions/apply", description: "Start your application journey today" },
      { title: "Requirements", href: "/admissions/requirements", description: "Admission criteria and prerequisites" },
      { title: "Tuition & Fees", href: "/admissions/fees", description: "Transparent cost information" },
      { title: "Financial Aid", href: "/admissions/financial-aid", description: "Scholarships and support available" },
    ],
  },
  {
    title: "Campus Life",
    href: "/campus-life",
    icon: Building,
    items: [
      { title: "Student Services", href: "/campus-life/services", description: "Comprehensive support services" },
      { title: "Housing", href: "/campus-life/housing", description: "Modern on-campus accommodation" },
      { title: "Sports & Recreation", href: "/campus-life/sports", description: "Athletic programs and facilities" },
      { title: "Clubs & Organizations", href: "/campus-life/clubs", description: "Join our vibrant community" },
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
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-600 via-amber-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 preserve-3d"
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="h-7 w-7 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <motion.div
                  className="font-bold text-xl text-foreground group-hover:gradient-text transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Bugema University
                </motion.div>
                <div className="text-xs text-muted-foreground -mt-1">Excellence in Service</div>
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
                      whileHover={{ scale: 1.05, rotateX: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <NavigationMenuTrigger className="text-foreground hover:text-blue-600 transition-colors duration-300 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl px-4 py-2 group">
                        <item.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        {item.title}
                      </NavigationMenuTrigger>
                    </motion.div>
                    <NavigationMenuContent>
                      <motion.div
                        className="grid w-[500px] gap-3 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
                        initial={{ opacity: 0, y: 20, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.items.map((subItem, subIndex) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <motion.div
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-amber-50 dark:hover:from-blue-900/20 dark:hover:to-amber-900/20 group"
                              >
                                <div className="text-sm font-semibold leading-none text-foreground group-hover:text-blue-600 transition-colors duration-300">
                                  {subItem.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800 transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/admissions/apply">Apply Now</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden w-10 h-10 p-0"
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
            initial={{ opacity: 0, height: 0, rotateX: -90 }}
            animate={{ opacity: 1, height: "auto", rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: -90 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-white/20 preserve-3d"
          >
            <div className="container mx-auto container-padding py-8">
              <div className="space-y-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <motion.h3
                      className="font-bold text-lg text-foreground flex items-center group cursor-pointer"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      {item.title}
                      <ChevronDown className="h-4 w-4 ml-auto group-hover:rotate-180 transition-transform duration-300" />
                    </motion.h3>
                    <div className="pl-8 space-y-3">
                      {item.items.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.title}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + subIndex * 0.05 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <Link
                            href={subItem.href}
                            className="block text-muted-foreground hover:text-blue-600 transition-colors duration-300 py-2 group"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="font-medium group-hover:text-foreground transition-colors duration-300">
                              {subItem.title}
                            </div>
                            <div className="text-sm opacity-70">{subItem.description}</div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col space-y-4 pt-6 border-t border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/admissions/apply">Apply Now</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
