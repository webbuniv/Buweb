"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronRight, X, Maximize2, Leaf, Droplet, Sun } from 'lucide-react'

const newsData = [
  {
    category: "Crops",
    title: "Innovative Crop Rotation Techniques",
    description: "Discover the latest methods in crop rotation for improved soil health and yield.",
    link: "#",
    imageSrc: "/images/agric/cro.jpeg",
    altText: "Crop rotation field",
  },
  {
    category: "Crops",
    title: "Sustainable Pest Management",
    description: "Learn about eco-friendly approaches to manage pests in agricultural systems.",
    link: "#",
    imageSrc: "/images/agric/crop.jpeg",
    altText: "Pest management in crops",
  },
  {
    category: "Irrigation",
    title: "Advanced Irrigation Systems",
    description: "Explore cutting-edge irrigation technologies for water conservation.",
    link: "/",
    imageSrc: "/images/agric/cropp.jpeg",
    altText: "Irrigation system in a field",
  },
  {
    category: "Organic Farming",
    title: "Organic Farming Practices",
    description: "Understand the principles and benefits of organic farming methods.",
    link: "#",
    imageSrc: "/images/agric/croro.jpeg",
    altText: "Organic farm produce",
  },
  {
    category: "Technology",
    title: "Precision Agriculture",
    description: "Discover how smart farming technologies are revolutionizing agriculture.",
    link: "#",
    imageSrc: "/images/agric/crroo.jpeg",
    altText: "Smart farming technology",
  },
  {
    category: "Research",
    title: "Climate-Resilient Crops",
    description: "Learn about the development of crop varieties adapted to changing climates.",
    link: "#",
    imageSrc: "/images/agric/ddd.jpeg",
    altText: "Climate-resilient crops",
  },
  {
    category: "Soil Management",
    title: "Soil Health Management",
    description: "Explore techniques for maintaining and improving soil health in agriculture.",
    link: "/",
    imageSrc: "/images/agric/agrr.jpeg",
    altText: "Soil testing and management",
  },
  {
    category: "Sustainability",
    title: "Agroforestry Practices",
    description: "Discover the benefits of integrating trees in agricultural landscapes.",
    link: "#",
    imageSrc: "/images/agric/agrri.jpeg",
    altText: "Agroforestry system",
  },
]

const AgricPro: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  // const categories = ["All", ...new Set(newsData.map(item => item.category))]
  const categories = ["All", ...Array.from(new Set(newsData.map(item => item.category)))];


  const filteredNews = newsData.filter((news) =>
    (activeCategory === "All" || news.category === activeCategory) &&
    (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     news.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Agricultural Research & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge research and innovative approaches to sustainable agriculture, crop management, and environmental stewardship.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition duration-300 ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search agricultural topics..."
            className="w-full px-4 py-3 pl-12 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredNews.map((news, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={news.imageSrc || "/placeholder.svg"}
                    alt={news.altText}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {news.category}
                  </div>
                  <button 
                    className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                    onClick={() => setSelectedImage(news.imageSrc)}
                  >
                    <Maximize2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-800 font-bold mb-2">
                    <a href={news.link} className="hover:text-blue-500 transition duration-300">{news.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {news.category === "Crops" && <Leaf className="text-blue-500" />}
                      {news.category === "Irrigation" && <Droplet className="text-blue-500" />}
                      {news.category === "Technology" && <Sun className="text-yellow-500" />}
                      <span className="text-sm text-gray-500">{news.category}</span>
                    </div>
                    <a href={news.link} className="inline-flex items-center text-blue-500 hover:underline">
                      Learn more <ChevronRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No articles found. Please try a different search term or category.
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={800}
                height={600}
                objectFit="contain"
              />
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="/agriculture-programs" 
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Explore All Agriculture Programs
          </a>
        </div>
      </div>
    </section>
  )
}

export default AgricPro

