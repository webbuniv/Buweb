"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Mail, User, MapPin } from "lucide-react"

const newsData = [
  {
    id: 1,
    title: "Bugema University Launches New AI Research Center",
    excerpt:
      "The university unveils state-of-the-art facilities for artificial intelligence and machine learning research.",
    date: "2024-01-15",
    category: "Research",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "International Partnership with European Universities",
    excerpt: "New collaboration opens doors for student exchange programs and joint research initiatives.",
    date: "2024-01-10",
    category: "Partnership",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Outstanding Performance in National University Rankings",
    excerpt: "Bugema University climbs to top 5 in latest national university rankings for academic excellence.",
    date: "2024-01-05",
    category: "Achievement",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "2 min read",
  },
]

const eventsData = [
  {
    id: 1,
    title: "31st Graduation Ceremony",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Main Campus Auditorium",
    description: "Join us as we celebrate the achievements of our graduating class of 2024.",
    category: "Graduation",
    featured: true,
  },
  {
    id: 2,
    title: "International Students Orientation",
    date: "2024-02-01",
    time: "9:00 AM",
    location: "Student Center",
    description: "Welcome session for new international students joining our diverse community.",
    category: "Orientation",
    featured: false,
  },
  {
    id: 3,
    title: "Research Symposium 2024",
    date: "2024-02-20",
    time: "2:00 PM",
    location: "Conference Hall",
    description: "Annual research symposium showcasing innovative projects and findings.",
    category: "Research",
    featured: false,
  },
]

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news")
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.05'%3E%3Cpath d='M9 0h2v20H9V0zm25.426.402l.571 1.93-19.252 5.68-.57-1.93L34.426.402zM53.12 4.094a5 5 0 0 1 7.08 7.08l-13.077 13.077a5 5 0 0 1-7.08-7.08L53.12 4.094zm32.32 0a5 5 0 0 1 0 7.08L72.361 24.253a5 5 0 0 1-7.08-7.08L78.36 4.094a5 5 0 0 1 7.08 0zm7.08 32.32a5 5 0 0 1-7.08 0L72.361 23.333a5 5 0 0 1 7.08-7.08l13.078 13.077a5 5 0 0 1 0 7.08zM60.254 24.253a5 5 0 0 1-7.08 7.08L40.097 18.256a5 5 0 0 1 7.08-7.08l13.077 13.077z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              News & Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at Bugema University
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg border border-gray-100 dark:border-slate-700">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "news"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News/Events Content */}
          <div className="lg:col-span-2">
            {activeTab === "news" ? (
              <div className="space-y-8">
                {newsData.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                            {article.category}
                          </span>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <Link href={`/news/${article.id}`}>{article.title}</Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                        <Link
                          href={`/news/${article.id}`}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {eventsData.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                      event.featured
                        ? "border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
                        : "border-gray-100 dark:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              event.featured
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {event.category}
                          </span>
                          {event.featured && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        {event.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* View All Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link
                href={activeTab === "news" ? "/news" : "/events"}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View All {activeTab === "news" ? "News" : "Events"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Newsletter Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white sticky top-8"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-blue-100">
                  Subscribe to our newsletter and never miss important updates, events, and announcements.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-blue-100 text-sm text-center">
                  Join 5,000+ students and alumni who stay connected with Bugema University
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsEventsSection
