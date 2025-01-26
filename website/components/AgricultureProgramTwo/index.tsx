"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ChevronRight } from 'lucide-react'

const newsData = [
  {
    category: "Sports",
    title: "Bugema University sports play a vital role in student life",
    link: "/studentlife",
    imageSrc: "/images/agric/agri.jpg",
    altText: "Students playing sports",
  },
  {
    category: "Business",
    title: "Why advertisers pay more to reach viewers who watch less",
    link: "/",
    imageSrc: "/images/agric/agri.jpg",
    altText: "Business meeting",
  },
  {
    category: "Health & Medicine",
    title: "Study finds high blood pressure drug may prevent epilepsy",
    link: "/",
    imageSrc: "/images/agric/agri.jpg",
    altText: "Medical research",
  },
  {
    category: "Commencement 2024",
    title: "Congratulations, graduates!",
    link: "/",
    imageSrc: "/images/agric/agri.jpg",
    altText: "Graduation ceremony",
  },
]

const categories = ["All", "Sports", "Business", "Health & Medicine", "Events"]

const AgricProgramTwo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNews = newsData.filter(
    (news) =>
      (activeCategory === "All" || news.category === activeCategory) &&
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="px-8 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Research Collaborations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Microsoft collaborates with the global research community through programs, events, learning opportunities, and joint research endeavors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } transition duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 pl-12 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredNews.map((news, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={news.imageSrc || "/placeholder.svg"}
                  alt={news.altText}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <Link href={news.link}>
                    <p className="text-white text-lg font-semibold hover:underline">Read More</p>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-500 font-semibold mb-2">
                  {news.category}
                </div>
                <h3 className="text-xl text-gray-800 font-bold mb-4">
                  <Link href={news.link}>
                    <p className="hover:text-blue-500 transition duration-300">{news.title}</p>
                  </Link>
                </h3>
                <Link href={news.link}>
                  <p className="inline-flex items-center text-blue-500 hover:underline">
                    Learn more <ChevronRight className="ml-1" />
                  </p>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No articles found. Please try a different search term or category.
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/studentlife">
            <p className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
              More About Student Life
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AgricProgramTwo

