"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Users, MapPin } from "lucide-react"

const newsItems = [
  {
    id: 1,
    type: "news",
    title: "Bugema University Hosts International Research Conference",
    excerpt:
      "Leading researchers from across Africa gather to discuss sustainable development solutions and innovation in higher education.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Research",
  },
  {
    id: 2,
    type: "event",
    title: "31st Graduation Ceremony",
    excerpt: "Join us as we celebrate the achievements of our graduating class of 2024 in a memorable ceremony.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-02-20",
    time: "10:00 AM",
    location: "Main Campus Auditorium",
    category: "Graduation",
  },
  {
    id: 3,
    type: "news",
    title: "New Partnership with Leading Tech Companies",
    excerpt:
      "Bugema University announces strategic partnerships to enhance technology education and provide internship opportunities.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Partnership",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Open Day 2024",
    date: "2024-02-15",
    time: "9:00 AM - 4:00 PM",
    location: "Main Campus",
    attendees: "500+ expected",
  },
  {
    id: 2,
    title: "Career Fair",
    date: "2024-02-25",
    time: "10:00 AM - 3:00 PM",
    location: "Student Center",
    attendees: "50+ employers",
  },
  {
    id: 3,
    title: "Research Symposium",
    date: "2024-03-05",
    time: "8:00 AM - 5:00 PM",
    location: "Conference Hall",
    attendees: "200+ participants",
  },
]

const NewsEventsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Latest News &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings at Bugema University and upcoming events you won't want to miss
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News & Featured Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Latest News</h3>
              <Link
                href="/news"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === "news"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      {item.readTime && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>

                    <Link
                      href={`/${item.type}/${item.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h3>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-blue-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">{event.title}</h4>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>{event.location}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm group"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Stay Connected</h4>
              <p className="text-blue-100 mb-6">
                Don't miss out on important updates and events. Subscribe to our newsletter.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsEventsSection
