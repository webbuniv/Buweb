"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, Users, MapPin, Mail, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const newsItems = [
  {
    id: 1,
    title: "Bugema University Launches New AI Research Center",
    excerpt:
      "The university unveils a state-of-the-art artificial intelligence research facility to advance technology education and innovation in East Africa.",
    date: "2024-01-15",
    category: "Research",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "International Partnership with Oxford University Announced",
    excerpt:
      "Students will now have access to exchange programs and joint research opportunities with one of the world's leading universities.",
    date: "2024-01-10",
    category: "Partnerships",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Bugema Students Win National Innovation Competition",
    excerpt:
      "A team of computer science students took first place in the Uganda National Innovation Challenge with their healthcare app solution.",
    date: "2024-01-08",
    category: "Student Success",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "2 min read",
  },
  {
    id: 4,
    title: "New Sustainable Agriculture Program Launched",
    excerpt:
      "The university introduces cutting-edge sustainable farming techniques and climate-smart agriculture practices in its curriculum.",
    date: "2024-01-05",
    category: "Programs",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "5 min read",
  },
]

const events = [
  {
    id: 1,
    title: "Annual Graduation Ceremony 2024",
    date: "2024-02-15",
    time: "09:00 AM",
    location: "Main Campus Auditorium",
    description:
      "Join us as we celebrate the achievements of our graduating class of 2024. Over 3,000 students will receive their degrees.",
    attendees: "5,000+ expected",
    category: "Graduation",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "International Education Fair",
    date: "2024-02-20",
    time: "10:00 AM",
    location: "Student Center",
    description:
      "Explore study abroad opportunities, meet international university representatives, and learn about exchange programs.",
    attendees: "2,000+ expected",
    category: "Education",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Tech Innovation Summit 2024",
    date: "2024-02-25",
    time: "08:30 AM",
    location: "Innovation Hub",
    description:
      "Industry leaders, students, and faculty come together to discuss the latest trends in technology and innovation.",
    attendees: "1,500+ expected",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Career Development Workshop Series",
    date: "2024-03-01",
    time: "02:00 PM",
    location: "Business School",
    description:
      "Professional development workshops covering resume writing, interview skills, and career planning strategies.",
    attendees: "500+ expected",
    category: "Career",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function NewsEventsSection() {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news")
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='1' fillRule='evenodd'%3E%3Cpath d='M20 20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm0-20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            <Bell className="w-4 h-4 mr-2" />
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings at Bugema University. From groundbreaking research to exciting
            events, discover what's making headlines in our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg mb-8 w-fit">
              <button
                onClick={() => setActiveTab("news")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === "news" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Latest News
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === "events" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Upcoming Events
              </button>
            </div>

            {/* News Content */}
            {activeTab === "news" && (
              <div className="space-y-8">
                {newsItems.map((item, index) => (
                  <article
                    key={item.id}
                    className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      index === 0 ? "lg:flex" : ""
                    }`}
                  >
                    <div className={`${index === 0 ? "lg:w-1/2" : ""} relative`}>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          index === 0 ? "h-64 lg:h-full" : "h-48"
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className={`p-6 ${index === 0 ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center" : ""}`}>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>

                      <h3
                        className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                          index === 0 ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>

                      <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Events Content */}
            {activeTab === "events" && (
              <div className="space-y-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      <div className="md:w-2/3 p-6">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees}</span>
                          </div>
                          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Register Now
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="opacity-90">Get the latest news and events delivered to your inbox</p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe Now
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                {[
                  "Academic Calendar",
                  "Admission Requirements",
                  "Student Portal",
                  "Library Resources",
                  "Campus Map",
                  "Contact Information",
                ].map((link, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{link}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Facebook", followers: "25K+", color: "bg-blue-600" },
                  { name: "Twitter", followers: "15K+", color: "bg-sky-500" },
                  { name: "Instagram", followers: "20K+", color: "bg-pink-600" },
                  { name: "LinkedIn", followers: "10K+", color: "bg-blue-700" },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`p-4 ${social.color} text-white rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    <div className="text-center">
                      <div className="font-bold">{social.followers}</div>
                      <div className="text-sm opacity-90">{social.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
