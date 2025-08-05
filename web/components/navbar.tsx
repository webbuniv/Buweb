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
      { title: "Our Story", href: "/about/story", description: "Learn about our history and mission" },
      { title: "Leadership", href: "/about/leadership", description: "Meet our administrative team" },
      { title: "Campus Life", href: "/about/campus-life", description: "Discover student life at Bugema" },
      { title: "Why Bugema", href: "/about/why-bugema", description: "What makes us unique" },
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
      { title: "Apply Now", href: "/admissions/apply", description: "Start your application process" },
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

export function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-bugema-blue to-bugema-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground">Bugema University</div>
              <div className="text-xs text-muted-foreground -mt-1">Excellence in Service</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-foreground hover:text-bugema-blue transition-colors">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <Link
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button size="sm" className="bg-bugema-blue hover:bg-bugema-blue/90" asChild>
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>

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
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t"
          >
            <div className="container mx-auto container-padding py-6">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center">
                      {item.title}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </h3>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-bugema-blue transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    className="bg-bugema-blue hover:bg-bugema-blue/90"
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
