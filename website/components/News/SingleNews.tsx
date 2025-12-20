"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

interface NewsProps {
  post: {
    $id: string
    title: string
    file?: string
    category?: string
    date: string
    content?: string
    summary?: string
    author?: string
  }
}

const SingleNews = ({ post }: NewsProps) => {
  if (!post) return <div>No post</div>

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    } catch {
      return "Date TBA"
    }
  }

  const getExcerpt = () => {
    if (post.summary && post.summary !== "undefined") {
      return post.summary.length > 120 ? `${post.summary.slice(0, 120)}...` : post.summary
    }
    if (post.content && post.content !== "undefined") {
      return post.content.length > 120 ? `${post.content.slice(0, 120)}...` : post.content
    }
    return "Read more about this news story..."
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      <div className="flex gap-4 p-4">
        {/* News Image */}
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${post.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {post.category && post.category !== "undefined" && (
            <div className="absolute top-1 left-1">
              <span className="px-1.5 py-0.5 bg-blue-600 text-white text-xs font-medium rounded">{post.category}</span>
            </div>
          )}
        </div>

        {/* News Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            <Link href={`/news/${post.$id}`} className="hover:underline">
              {post.title}
            </Link>
          </h4>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{getExcerpt()}</p>

          {/* News Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-blue-500" />
              <span>{formatDate(post.date)}</span>
            </div>

            {post.author && post.author !== "undefined" && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3 text-green-500" />
                <span className="truncate">{post.author}</span>
              </div>
            )}
          </div>

          {/* Action Link */}
          <Link
            href={`/news/${post.$id}`}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group"
          >
            Read More
            <svg
              className="w-3 h-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default SingleNews
