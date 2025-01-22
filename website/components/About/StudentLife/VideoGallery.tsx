"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

const videoData = [
  { id: '1', thumbnail: '/images/video-thumb-1.jpg', title: 'Campus Tour' },
  { id: '2', thumbnail: '/images/video-thumb-2.jpg', title: 'Student Testimonials' },
  { id: '3', thumbnail: '/images/video-thumb-3.jpg', title: 'Academic Programs' },
  { id: '4', thumbnail: '/images/video-thumb-4.jpg', title: 'Cultural Events' },
]

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Video Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videoData.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <Image
                src={video.thumbnail || ""}
                alt={video.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={48} className="text-white" />
              </div>
              <h3 className="mt-2 text-center text-blue-600 font-semibold">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoGallery

