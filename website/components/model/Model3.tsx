"use client"

import type React from "react"
import { useState } from "react"
import { X, ArrowRight, GraduationCap, MapPin, Globe, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BiX } from "react-icons/bi"

interface CampusModalProps {
  is3visible: boolean
  onClose: () => void
  children?: React.ReactNode
}

type CampusType = "main" | "kampala" | "arua"

const CampusModal = ({ is3visible, onClose }: CampusModalProps) => {
  const [selectedCampus, setSelectedCampus] = useState<CampusType>("main")

  if (!is3visible) return null

  const campusData = {
    main: {
      name: "Main Campus",
      location: "Bugema, Uganda",
      description:
        "Our flagship campus offers a comprehensive learning environment with state-of-the-art facilities and a vibrant student community.",
      students: "5,000+",
      programs: "50+",
      image: [
        "/images/nav/gate.jpg",
        "/images/hero/land1.jpg",
        "/images/hero/mm.jpg",
        "/images/hero/env3.jpg",
        "/images/hero/env2.jpg",
        "/images/hero/env1.jpg",
      ],
      link: "/",
    },
    kampala: {
      name: "Kampala Campus",
      location: "Kampala City, Uganda",
      description:
        "Located in the heart of the capital, offering convenient access to urban opportunities and professional networking.",
      students: "3,000+",
      programs: "30+",
      image: ["/images/nav/gate.jpg"],
      link: "https://kampalacampus.bugemauniv.ac.ug/",
    },
    arua: {
      name: "Arua Campus",
      location: "Arua City, Uganda",
      description: "Serving the West Nile region with quality education and fostering local community development.",
      students: "2,000+",
      programs: "20+",
      image: ["/images/nav/gate.jpg"],
      link: "#",
    },
  }

  const quickLinks = [
    { label: "Apply Now", href: "https://apply.bugemauniv.ac.ug", icon: GraduationCap },
    { label: "Students Portal", href: "https://erms.bugemauniv.ac.ug/student/login/", icon: Users },
    { label: "E-Learning", href: "https://elearning.bugemauniv.ac.ug/", icon: Globe },
    { label: "Library", href: "https://library.bugemauniv.ac.ug/", icon: GraduationCap },
  ]

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const currentCampus = campusData[selectedCampus]

  return (
    <div
      className="fixed inset-0 z-40 flex items-center  justify-center   backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-full  max-h-[100vh] overflow-hidden animate-in zoom-in-95 duration-300">
        <Card className="relative bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 border-0 shadow-2xl overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-32 right-20 z-10 p-2 bg-black hover:bg-black text-white rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Close modal"
          >
             <BiX className="text-3xl hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="relative grid mt-[8%] px-[76px] md:grid-cols-[300px,1fr] gap-6 overflow-hidden">
            {/* Sidebar - Campus Selection */}
            <div className="bg-white/30 p-8 md:p-10 border-r border-gray-700/50">
              <div className="space-y-2 mb-2">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Explore Campuses</h3>
                <h2 className="text-2xl font-bold text-gray-500">Find Your Perfect Fit</h2>
              </div>

              <div className="space-y-4">
                {(Object.keys(campusData) as CampusType[]).map((campus) => (
                  <button
                    key={campus}
                    onClick={() => setSelectedCampus(campus)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      selectedCampus === campus
                        ? "bg-white text-gray-900 shadow-lg"
                        : "bg-white/5 text-gray-600 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          selectedCampus === campus
                            ? "bg-blue-500 text-white"
                            : "bg-white/10 text-gray-400 group-hover:bg-white/20"
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h3
                          className={`font-semibold text-lg ${
                            selectedCampus === campus ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {campusData[campus].name}
                        </h3>
                        <p className={`text-sm ${selectedCampus === campus ? "text-gray-600" : "text-gray-400"}`}>
                          {campusData[campus].location}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-10 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-gray-500 leading-relaxed">
                  One institution, many worlds. Explore our different campuses and discover opportunities.
                </p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="overflow-y-auto max-h-[100vh]">
              {/* Campus Header */}
              <div className="mb-8 animate-in fade-in slide-in-from-right duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentCampus.name}</h2>
                </div>
                <p className="text-gray-600 text-lg max-w-2xl">{currentCampus.description}</p>
              </div>

          

              {/* Campus Image */}
              <div className="mb-8 animate-in fade-in slide-in-from-right duration-500 delay-200">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                 <div className="flex gap-2" >
                         <Image
                    src={currentCampus.image[0] || "/placeholder.svg"}
                    alt={currentCampus.name}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="grid grid-cols-3 gap-2" >
                        { currentCampus.image.map((img, index) => (
                          <Image
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={currentCampus.name}
                    width={600}
                    height={400}
                    className="w-full h-[150px] object-cover rounded-md transition-transform duration-500 hover:scale-105"
                  />))}
                  </div>
                 </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg font-semibold">{currentCampus.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-in fade-in slide-in-from-right duration-500 delay-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="grid sm:grid-cols-4 gap-4">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <Link key={index} href={link.href} target="_blank">
                        <Card className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-blue-500 group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {link.label}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CampusModal