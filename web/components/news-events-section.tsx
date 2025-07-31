"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, ArrowRight, Newspaper, Users, Trophy, BookOpen } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Bugema University Launches New AI Research Center",
    excerpt:
      "The university unveils a state-of-the-art artificial intelligence research facility to advance technological innovation in East Africa.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Research+Center",
    date: "2024-01-15",
    category: "Research",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "International Student Exchange Program Expands",
    excerpt:
      "New partnerships with universities in Europe and Asia create more opportunities for global learning experiences.",
    image: "/placeholder.svg?height=300&width=400&text=Student+Exchange",
    date: "2024-01-12",
    category: "International",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "Bugema Wins National University Sports Championship",
    excerpt:
      "Our athletics team brings home multiple gold medals from the national inter-university sports competition.",
    image: "/placeholder.svg?height=300&width=400&text=Sports+Championship",
    date: "2024-01-10",
    category: "Sports",
    readTime: "4 min read",
  },
]

const events = [
  {
    id: 1,
    title: "Annual Graduation Ceremony 2024",
    description: "Join us as we celebrate the achievements of our graduating class of 2024.",
    image: "/placeholder.svg?height=300&width=400&text=Graduation+2024",
    date: "2024-03-15",
    time: "10:00 AM",
    location: "Main Campus Auditorium",
    category: "Academic",
    featured: true,
  },
  {
    id: 2,
    title: "International Research Conference",
    description: "A three-day conference featuring leading researchers from around the world.",
    image: "/placeholder.svg?height=300&width=400&text=Research+Conference",
    date: "2024-02-20",
    time: "9:00 AM",
    location: "Conference Center",
    category: "Research",
    featured: false,
  },
  {
    id: 3,
    title: "Cultural Festival 2024",
    description: "Celebrate diversity with performances, food, and exhibitions from our international community.",
    image: "/placeholder.svg?height=300&width=400&text=Cultural+Festival",
    date: "2024-02-28",
    time: "2:00 PM",
    location: "Campus Grounds",
    category: "Cultural",
    featured: false,
  },
  {
    id: 4,
    title: "Career Fair & Job Expo",
    description: "Connect with top employers and explore career opportunities across various industries.",
    image: "/placeholder.svg?height=300&width=400&text=Career+Fair",
    date: "2024-03-05",
    time: "10:00 AM",
    location: "Sports Complex",
    category: "Career",
    featured: false,
  },
]

const categoryIcons = {
  Research: BookOpen,
  International: Users,
  Sports: Trophy,
  Academic: BookOpen,
  Cultural: Users,
  Career: Users,
}

export function NewsEventsSection() {
  const [activeTab, setActiveTab] = useState("news")

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Stay Updated
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            News &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the latest happenings, achievements, and upcoming events at Bugema University.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white shadow-lg rounded-xl p-1">
              <TabsTrigger
                value="news"
                className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                <Newspaper className="h-4 w-4" />
                <span>Latest News</span>
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                <Calendar className="h-4 w-4" />
                <span>Upcoming Events</span>
              </TabsTrigger>
            </TabsList>

            {/* News Content */}
            <TabsContent value="news">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {newsItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group"
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white">{item.category}</Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{formatDate(item.date)}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{item.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                          <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* View All News Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center mt-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="/news">
                    View All News
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </TabsContent>

            {/* Events Content */}
            <TabsContent value="events">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Featured Event */}
                  {events
                    .filter((event) => event.featured)
                    .map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
                          <div className="grid lg:grid-cols-2 gap-0">
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                              <div className="flex items-center mb-4">
                                <Badge className="bg-white/20 text-white border-white/30">Featured Event</Badge>
                              </div>
                              <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                              <p className="text-lg opacity-90 mb-6">{event.description}</p>
                              <div className="space-y-3 mb-8">
                                <div className="flex items-center">
                                  <Calendar className="h-5 w-5 mr-3" />
                                  <span>{formatDate(event.date)}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-5 w-5 mr-3" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-5 w-5 mr-3" />
                                  <span>{event.location}</span>
                                </div>
                              </div>
                              <Button size="lg" variant="secondary" className="w-fit">
                                Register Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </Button>
                            </div>
                            <div className="relative">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20" />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}

                  {/* Other Events */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events
                      .filter((event) => !event.featured)
                      .map((event, index) => {
                        const CategoryIcon = categoryIcons[event.category as keyof typeof categoryIcons] || Calendar
                        return (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group"
                          >
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                              <div className="relative">
                                <Image
                                  src={event.image || "/placeholder.svg"}
                                  alt={event.title}
                                  width={400}
                                  height={200}
                                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                  <Badge className="bg-white/90 text-gray-800">
                                    <CategoryIcon className="h-3 w-3 mr-1" />
                                    {event.category}
                                  </Badge>
                                </div>
                              </div>
                              <CardContent className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                  {event.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                                <div className="space-y-2 text-sm text-gray-500 mb-4">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>{formatDate(event.date)}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>{event.location}</span>
                                  </div>
                                </div>
                                <Button variant="outline" size="sm" className="w-full group bg-transparent">
                                  Learn More
                                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )
                      })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* View All Events Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center mt-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Link href="/events">
                    View All Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
