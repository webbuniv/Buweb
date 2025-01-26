"use client"

import React, { useState } from "react"
import { ArrowRight, Leaf, Users, Book } from 'lucide-react'
import HeroSection from "./HeroSection"
import StatisticsSection from "./StatisticsSection"
import FeaturedProgram from "./FeaturedProgram"
import NewsGrid from "./NewsGrid"

const AgriculturePrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState("undergraduate")

  const tabContent = {
    undergraduate: {
      title: "Undergraduate Programs",
      items: [
        { icon: <Leaf />, text: "Bachelor of Science in Agriculture" },
        { icon: <Leaf />, text: "Bachelor of Science in Horticulture" },
        { icon: <Leaf />, text: "Bachelor of Science in Agricultural Economics" },
      ],
    },
    graduate: {
      title: "Graduate Programs",
      items: [
        { icon: <Book />, text: "Master of Science in Sustainable Agriculture" },
        { icon: <Book />, text: "Master of Science in Agricultural Biotechnology" },
        { icon: <Book />, text: "PhD in Agricultural Sciences" },
      ],
    },
    research: {
      title: "Research Opportunities",
      items: [
        { icon: <Users />, text: "Sustainable Farming Practices" },
        { icon: <Users />, text: "Climate-Resilient Crop Development" },
        { icon: <Users />, text: "Precision Agriculture Technologies" },
      ],
    },
  }

  return (
    <div className="bg-gray-100 text-gray-800 lg:mt-[80px]">
      <HeroSection />
      <StatisticsSection />
      <FeaturedProgram />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Programs</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex border-b">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-4 px-6 text-center font-semibold ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{tabContent[activeTab].title}</h3>
              <ul className="space-y-4">
                {tabContent[activeTab].items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-500">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <NewsGrid />
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Future?</h2>
          <p className="mb-8">Join our agriculture programs and cultivate a sustainable tomorrow.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Apply Now <ArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default AgriculturePrograms

