"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, ArrowRight, Users, BookOpen, Zap } from "lucide-react"
import Image from "next/image"

const newsData = [
  {
    id: 1,
    title: "Bugema University Launches New Engineering Program",
    excerpt:
      "The university introduces cutting-edge engineering courses to meet industry demands and prepare students for the future of technology.",
    image: "/placeholder.svg?height=300&width=400&text=Engineering+Program",
    category: "Academic",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "International Partnership with European Universities",
    excerpt:
      "Bugema University signs MOU with leading European institutions for student exchange and research collaboration.",
    image: "/placeholder.svg?height=300&width=400&text=International+Partnership",
    category: "Partnership",
    date: "2024-01-10",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Research Excellence Award for Agriculture Faculty",
    excerpt:
      "Faculty members receive national recognition for groundbreaking research in sustainable agriculture practices.",
    image: "/placeholder.svg?height=300&width=400&text=Research+Award",
    category: "Research",
    date: "2024-01-08",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "New Library Complex Opens to Students",
    excerpt:
      "State-of-the-art library facility with modern technology and expanded study spaces now available for all students.",
    image: "/placeholder.svg?height=300&width=400&text=Library+Complex",
    category: "Campus",
    date: "2024-01-05",
    readTime: "2 min read",
    featured: false,
  },
]

const eventsData = [
  {
    id: 1,
    title: "Annual Graduation Ceremony 2024",
    description: "Join us as we celebrate the achievements of our graduating class of 2024 in a memorable ceremony.",
    image: "/placeholder.svg?height=300&width=400&text=Graduation+Ceremony",
    date: "2024-03-15",
    time: "10:00 AM",
    location: "University Auditorium",
    category: "Academic",
    attendees: "2000+",
    featured: true,
  },
  {
    id: 2,
    title: "International Students Cultural Festival",
    description:
      "Celebrate diversity with cultural performances, food, and exhibitions from our international student community.",
    image: "/placeholder.svg?height=300&width=400&text=Cultural+Festival",
    date: "2024-02-20",
    time: "2:00 PM",
    location: "Campus Grounds",
    category: "Cultural",
    attendees: "500+",
    featured: false,
  },
  {
    id: 3,
    title: "Career Fair and Job Expo 2024",
    description: "Connect with top employers and explore career opportunities across various industries.",
    image: "/placeholder.svg?height=300&width=400&text=Career+Fair",
    date: "2024-02-28",
    time: "9:00 AM",
    location: "Sports Complex",
    category: "Career",
    attendees: "1000+",
    featured: false,
  },
  {
    id: 4,
    title: "Research Symposium: Innovation in Agriculture",
    description: "Showcase of cutting-edge research in sustainable agriculture and food security solutions.",
    image: "/placeholder.svg?height=300&width=400&text=Research+Symposium",
    date: "2024-03-05",
    time: "8:30 AM",
    location: "Conference Hall",
    category: "Research",
    attendees: "300+",
    featured: false,
  },
]

const categoryColors = {
  Academic: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Partnership: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Research: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Campus: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  Cultural: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  Career: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
}

export function NewsEventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const [activeTab, setActiveTab] = useState("news")

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          className="absolute top-20 left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full text-blue-600 dark:text-blue-400 font-medium backdrop-blur-sm border border-blue-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Latest Updates
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            News &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Events
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay updated with the latest happenings, achievements, and upcoming events at Bugema University
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 sm:mb-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger value="news" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Latest </span>News
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Upcoming </span>Events
              </TabsTrigger>
            </TabsList>

            {/* News Tab */}
            <TabsContent value="news" className="space-y-6 sm:space-y-8">
              {/* Featured News */}
              {newsData
                .filter((news) => news.featured)
                .map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    className="transform-gpu"
                  >
                    <Card className="overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="relative overflow-hidden order-2 md:order-1">
                          <Image
                            src={news.image || "/placeholder.svg"}
                            alt={news.title}
                            width={400}
                            height={300}
                            className="w-full h-48 sm:h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <Badge
                            className={`absolute top-4 left-4 ${categoryColors[news.category as keyof typeof categoryColors]}`}
                          >
                            {news.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6 sm:p-8 flex flex-col justify-center order-1 md:order-2">
                          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4 gap-2 sm:gap-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(news.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {news.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {news.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{news.excerpt}</p>
                          <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white group/btn self-start w-full sm:w-auto">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}

              {/* News Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {newsData
                  .filter((news) => !news.featured)
                  .map((news, index) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, y: 50, rotateX: -20 }}
                      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
                      className="transform-gpu"
                    >
                      <Card className="overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full">
                        <div className="relative overflow-hidden">
                          <Image
                            src={news.image || "/placeholder.svg"}
                            alt={news.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <Badge
                            className={`absolute top-4 left-4 ${categoryColors[news.category as keyof typeof categoryColors]}`}
                          >
                            {news.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(news.date)}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                            {news.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {news.excerpt}
                          </p>
                          <Button variant="outline" size="sm" className="group/btn bg-transparent w-full sm:w-auto">
                            Read More
                            <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6 sm:space-y-8">
              {/* Featured Event */}
              {eventsData
                .filter((event) => event.featured)
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    className="transform-gpu"
                  >
                    <Card className="overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="relative overflow-hidden order-2 md:order-1">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={400}
                            height={300}
                            className="w-full h-48 sm:h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <Badge
                            className={`absolute top-4 left-4 ${categoryColors[event.category as keyof typeof categoryColors]}`}
                          >
                            {event.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6 sm:p-8 flex flex-col justify-center order-1 md:order-2">
                          <div className="space-y-2 sm:space-y-3 mb-6">
                            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-4">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatDate(event.date)}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {event.time}
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-4">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.location}
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                {event.attendees} expected
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                          <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white group/btn self-start w-full sm:w-auto">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}

              {/* Events Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {eventsData
                  .filter((event) => !event.featured)
                  .map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 50, rotateX: -20 }}
                      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
                      className="transform-gpu"
                    >
                      <Card className="overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full">
                        <div className="relative overflow-hidden">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <Badge
                            className={`absolute top-4 left-4 ${categoryColors[event.category as keyof typeof categoryColors]}`}
                          >
                            {event.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4 sm:p-6">
                          <div className="space-y-2 mb-4">
                            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-3">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatDate(event.date)}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {event.time}
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.location}
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {event.description}
                          </p>
                          <Button variant="outline" size="sm" className="group/btn bg-transparent w-full sm:w-auto">
                            Register
                            <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
