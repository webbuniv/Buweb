"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, MapPin, User, Eye, BookOpen, Users } from "lucide-react"
import Image from "next/image"

const newsItems = [
  {
    id: 1,
    title: "Bugema University Hosts International Conference on Sustainable Agriculture",
    excerpt:
      "Leading experts from across Africa gathered to discuss innovative approaches to sustainable farming and food security.",
    category: "Research",
    date: "2024-01-15",
    author: "Dr. Sarah Mukasa",
    views: "2.4k",
    image: "/placeholder.svg?height=300&width=400&text=Agriculture+Conference",
    featured: true,
  },
  {
    id: 2,
    title: "New State-of-the-Art Medical Simulation Lab Opens",
    excerpt:
      "The latest addition to our medical school provides students with hands-on training using advanced simulation technology.",
    category: "Facilities",
    date: "2024-01-12",
    author: "Prof. James Okello",
    views: "1.8k",
    image: "/placeholder.svg?height=300&width=400&text=Medical+Lab",
    featured: false,
  },
  {
    id: 3,
    title: "Student Innovation Challenge Winners Announced",
    excerpt:
      "Celebrating the creativity and ingenuity of our students with solutions addressing real-world challenges.",
    category: "Students",
    date: "2024-01-10",
    author: "Dr. Grace Namuddu",
    views: "3.2k",
    image: "/placeholder.svg?height=300&width=400&text=Innovation+Challenge",
    featured: false,
  },
  {
    id: 4,
    title: "Partnership with Global Tech Companies Announced",
    excerpt:
      "New collaborations will provide students with internship opportunities and access to cutting-edge technology.",
    category: "Partnerships",
    date: "2024-01-08",
    author: "Prof. Michael Ssebunya",
    views: "2.1k",
    image: "/placeholder.svg?height=300&width=400&text=Tech+Partnership",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Graduation Ceremony 2024",
    description: "Join us as we celebrate the achievements of our graduating class of 2024.",
    date: "2024-03-15",
    time: "10:00 AM",
    location: "University Main Auditorium",
    category: "Academic",
    image: "/placeholder.svg?height=200&width=300&text=Graduation+Ceremony",
    attendees: 500,
  },
  {
    id: 2,
    title: "International Students Cultural Festival",
    description:
      "A vibrant celebration of our diverse international community with food, music, and cultural displays.",
    date: "2024-02-20",
    time: "2:00 PM",
    location: "Campus Central Grounds",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300&text=Cultural+Festival",
    attendees: 300,
  },
  {
    id: 3,
    title: "Research Symposium: Innovation in Healthcare",
    description: "Faculty and students present groundbreaking research in medical technology and healthcare solutions.",
    date: "2024-02-28",
    time: "9:00 AM",
    location: "Science Complex Auditorium",
    category: "Research",
    image: "/placeholder.svg?height=200&width=300&text=Research+Symposium",
    attendees: 200,
  },
  {
    id: 4,
    title: "Career Fair 2024",
    description: "Connect with leading employers and explore career opportunities across various industries.",
    date: "2024-03-05",
    time: "10:00 AM",
    location: "Sports Complex",
    category: "Career",
    image: "/placeholder.svg?height=200&width=300&text=Career+Fair",
    attendees: 800,
  },
]

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

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: "bg-blue-600",
      Facilities: "bg-emerald-600",
      Students: "bg-amber-500",
      Partnerships: "bg-blue-600",
      Academic: "bg-blue-600",
      Cultural: "bg-amber-500",
      Career: "bg-emerald-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 backdrop-blur-sm border border-blue-600/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Latest News & Upcoming Events
          </motion.div>

          <motion.h2
            className="heading-lg text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay Connected with{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
              Campus Life
            </span>
          </motion.h2>

          <motion.p
            className="text-body max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the latest happenings, achievements, and upcoming events at Bugema University. From groundbreaking
            research to student accomplishments and exciting campus activities.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger
                value="news"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Latest News
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Featured Article */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="lg:row-span-2"
                >
                  <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={newsItems[0].image || "/placeholder.svg"}
                        alt={newsItems[0].title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">Featured</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <Badge variant="outline" className="border-blue-600/30 text-blue-600">
                          {newsItems[0].category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(newsItems[0].date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{newsItems[0].views}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {newsItems[0].title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{newsItems[0].excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{newsItems[0].author}</span>
                        </div>
                        <Button variant="ghost" className="group/btn hover:bg-blue-600/10 hover:text-blue-600">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Other Articles */}
                <div className="space-y-6">
                  {newsItems.slice(1).map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="perspective-1000"
                    >
                      <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="flex">
                          <div className="relative flex-shrink-0 w-32 h-32">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <CardContent className="flex-1 p-6">
                            <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                              <Badge
                                variant="outline"
                                className={`text-xs ${getCategoryColor(article.category)} text-white border-0`}
                              >
                                {article.category}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{formatDate(article.date)}</span>
                              </div>
                            </div>

                            <h4 className="font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                              {article.title}
                            </h4>

                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>

                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">{article.author}</span>
                              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                <Eye className="h-3 w-3" />
                                <span>{article.views}</span>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 50, rotateX: -30 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.03, rotateY: 5 }}
                    className="perspective-1000"
                  >
                    <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={`${getCategoryColor(event.category)} text-white`}>{event.category}</Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-amber-500" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-amber-500 transition-colors duration-300">
                          {event.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-emerald-600" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-blue-600" />
                            <span>{event.attendees} expected attendees</span>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white group/btn">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white group"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 group bg-transparent"
            >
              View All Events
              <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
