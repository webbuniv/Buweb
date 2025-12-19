"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronRight, Users, Trophy, Heart, Crown } from "lucide-react"
import football from "/public/images/nav/sports/football.jpg"
import image from "/public/images/nav/culturee.jpg"
import bucosa from "/public/images/nav/bucosa.jpg"
import palm_girls from "/public/images/nav/palm-girls.jpg"
import volley2c from "/public/images/nav/sports/volley2c.jpg"
import basket from "/public/images/nav/sports/basket.jpg"
import netball from "/public/images/nav/sports/netball.jpg"
import woodball from "/public/images/nav/sports/woodball.jpg"
import { BiX } from "react-icons/bi"

interface NavigationModalProps {
  issvisible: boolean
  onClose: () => void
        children?: React.ReactNode
}

type TabType = "students-life" | "sports" | "clubs" | "leadership"
type SportType = "football" | "netball" | "volleyball" | "woodball" | "basketball" | "table-tennis"

const UniversityNavigationModal = ({ issvisible, onClose, children }: NavigationModalProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("students-life")
  const [hoveredSport, setHoveredSport] = useState<SportType>("football")

  if (!issvisible) return null

  const tabs = [
    { id: "students-life" as TabType, label: "Students Life", icon: Users },
    { id: "sports" as TabType, label: "Sports", icon: Trophy },
    { id: "clubs" as TabType, label: "Clubs & Associations", icon: Heart },
    { id: "leadership" as TabType, label: "Student Leadership", icon: Crown },
  ]

  const studentsLifeLinks = [
    { label: "Students Life", href: "/studentlife" },
    { label: "Funding Your Studies", href: "/work_program" },
    { label: "NHCE Fees", href: "https://imis.unche.or.ug:81/frmTrnStudentPayment.aspx" },
    { label: "Religious Matters", href: "/religious/religious" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
  ]

  const sportsLinks = [
    { label: "Football", href: "/sports/football", key: "football" as SportType },
    { label: "Net Ball", href: "/sports/netball", key: "netball" as SportType },
    { label: "Volleyball", href: "/sports/volleyball", key: "volleyball" as SportType },
    { label: "Wood Ball", href: "/sports/woodball", key: "woodball" as SportType },
    { label: "Basketball", href: "/sports/basketball", key: "basketball" as SportType },
    { label: "Table Tennis", href: "/sports/tabletenis", key: "table-tennis" as SportType },
  ]

  const clubsLinks = [
    { label: "IT Club", href: "#" },
    { label: "Food & Nutrition", href: "#" },
    { label: "BUNSA", href: "#" },
    { label: "International Associations", href: "#" },
  ]

  const sportImages = {
    football: football,
    netball: netball,
    volleyball: volley2c,
    woodball: woodball,
    basketball: basket,
    "table-tennis": football,
  }

  const featuredImages = [
    { src: image, alt: "Culture", label: "Cultural Events" },
    { src: bucosa, alt: "BUCOSA", label: "BUCOSA" },
    { src: palm_girls, alt: "Palm Girls", label: "Student Activities" },
  ]

  return (
    <div className="fixed inset-0 z-30 bg-gradient-to-br from-red-100 via-green-100 to-purple-100 bg-opacity-50   backdrop-blur-sm  fade-in duration-300" onClick={onClose}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl" />
      <div
        className="fixed top-[16%] gap-2 left-[5%] right-[5%]   h-[100vh] bg-white/60 overflow-hidden animate-in slide-in-from-top-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 group z-10 w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          aria-label="Close modal"
        >
           <BiX className="text-3xl group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="flex px-2 h-full">
          {/* Sidebar Navigation */}
          <div className="w-1/4 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Life at Bugema</h2>

            <nav className="space-y-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "text-gray-700 hover:bg-white hover:shadow-md"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                        activeTab === tab.id ? "text-white" : "text-gray-600"
                      }`}
                    />
                    <span className="font-medium text-sm">{tab.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ml-auto transition-transform ${activeTab === tab.id ? "translate-x-1" : ""}`}
                    />
                  </button>
                )
              })}
            </nav>

            {/* Featured Images */}
            <div className="mt-8 space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</h3>
              {featuredImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-20 rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-medium">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-12">
              {/* Students Life Tab */}
              {activeTab === "students-life" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Students Life</h2>
                  <p className="text-gray-600 mb-8">Explore everything about campus life and student services</p>

                  <div className="grid grid-cols-2 gap-4">
                    {studentsLifeLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-blue-600">{link.label}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Sports Tab */}
              {activeTab === "sports" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Sports & Athletics</h2>
                  <p className="text-gray-600 mb-8">Join our competitive sports programs and teams</p>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Sports Links */}
                    <div className="space-y-3">
                      {sportsLinks.map((sport, index) => (
                        <Link
                          key={index}
                          href={sport.href}
                          onClick={onClose}
                          onMouseEnter={() => setHoveredSport(sport.key)}
                          className="group flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
                        >
                          <span className="font-medium text-gray-900 group-hover:text-green-600">{sport.label}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>

                    {/* Sport Image Preview */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={sportImages[hoveredSport] || "/placeholder.svg"}
                        alt={hoveredSport}
                        fill
                        className="object-cover transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                        <h3 className="text-white text-2xl font-bold capitalize">{hoveredSport.replace("-", " ")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Clubs & Associations Tab */}
              {activeTab === "clubs" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Clubs & Associations</h2>
                  <p className="text-gray-600 mb-8">Connect with student organizations and special interest groups</p>

                  <div className="grid grid-cols-2 gap-4">
                    {clubsLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-purple-600">{link.label}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Leadership Tab */}
              {activeTab === "leadership" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Student Leadership</h2>
                  <p className="text-gray-600 mb-8">Learn about student government and leadership opportunities</p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Student Government</h3>
                      <p className="text-gray-600 text-sm">
                        Get involved in student representation and decision-making
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Programs</h3>
                      <p className="text-gray-600 text-sm">Develop your leadership skills through our programs</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversityNavigationModal
