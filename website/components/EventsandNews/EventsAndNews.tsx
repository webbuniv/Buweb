"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Loader2, Calendar, Clock, ArrowRight, Newspaper } from "lucide-react"
import { getEvents } from "@/lib/actions/events.actions"
import { getNews } from "@/lib/actions/news.actions"
import {truncateString} from "@/lib/utils"

const NewsEventsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [news, setNews] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
        const fetchData = async () => {
        try {
                const newsRes = await getNews({
          searchText: "",
          sort: "date-desc",
          limit: 3,
        })
        setNews((newsRes))
        } catch (error) {
                console.error("Error fetching news:", error)
        }finally {
        setLoading(false)
      }
        }
        fetchData()
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const eventsRes = await getEvents({
          searchText: "",
          sort: "$createdAt-desc",
          limit: 5,
        })
        setEvents(eventsRes.filter((event) => new Date(event.dateDue) < new Date()))
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getFileUrl = (fileId) =>
    `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${fileId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-4 text-gray-700 dark:text-gray-200 bg-white/95 dark:bg-gray-800/95 px-10 py-6 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20"
            >
              <Loader2 className="w-7 h-7 animate-spin text-blue-600" />
              <span className="font-semibold text-lg">Loading latest updates...</span>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      className=" mt-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl" />

      <div className=" mx-auto  relative z-10">
        <motion.div
          initial="visible"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full"
        >

          <h2 className=" text-5xl md:text-6xl lg:text-7xl  text-blue-700  bg-clip-text  leading-tight">
            Happening around Campus
          </h2>
                    <div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full ">
            <Newspaper className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              Stay Connected
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover the latest developments and upcoming opportunities at Bugema University — your gateway to academic
            excellence and community engagement.
          </p>
        </motion.div>

        <div className={`grid lg:grid-cols-3  gap-10`}>
          <div className="lg:col-span-3 space-y-8  p-3 ">

            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full shadow-lg" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Latest News</h3>
              </div>
              <Link
                href="/news"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
 {/* ===============================N E W S    S E C T I O N============================================== */}
            {news.length > 0 ? (
                <div className="flex gap-3" >
                 <motion.article
                    key={news[0].$id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative  dark:bg-gray-900/95  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
                  >
                    <div className=" hidden flex-col md:flex   ">
                      <Link
                        href={`/news/${news[0].$id}`}
                        className="relative md:w-100 h-64 md:h-80 flex-shrink-0 overflow-hidden"
                      >
                        <Image
                          src={getFileUrl(news[0].file) || "/placeholder.svg"}
                          alt={news[0].title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>

                      <div className="p-8 flex flex-col justify-between flex-1 bg-white/50">
                        <div>
                          <Link href={`/news/${news[0].$id}`}>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                              {news[0].title}
                            </h4>
                          </Link>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-lg leading-relaxed">
                            { truncateString(news[0].summary, 90) }
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{news[0].date}</span>
                          </div>
                          <Link
                            href={`/events/${news[0].$id}`}
                            className="inline-flex items-center gap-2 group-hover:text-red-500 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link href={`/news/${news[0].$id}`} className=" absolute inset-2">
                    <div className=" absolute top-0 left-0 right-0 bottom-48 opacity-0 group-hover:opacity-60 " >
                   <div className="absolute top-28 left-44 animate-pulse p-10 rounded-full items-center flex justify-center bg-blue-600 group-hover:bg-red-600 transition duration-1000  " >
                         <ArrowRight className=" w-12 h-12 font-bold text-white transition-transform duration-300 -rotate-12"  />
                   </div>
                    </div>
                    </Link>
                  </motion.article>

              <div className={`space-y-6 ${events.length>0?"":"md:grid md:grid-cols-1 md:gap-6 md:space-y-0"}`}>
                
                {news.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.$id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="group relative bg-white/95 dark:bg-gray-900/95  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
                  >
                    <div className="flex flex-col md:flex-row">
                      <Link
                        href={`/news/${post.$id}`}
                        className="relative md:w-80 h-64 md:h-64  flex-shrink-0 overflow-hidden"
                      >
                        <Image
                          src={getFileUrl(post.file) || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <Link href={`/news/${post.$id}`} className=" absolute inset-2">
                    <div className=" absolute top-0 left-0 right-0 bottom-48 opacity-0 group-hover:opacity-60 " >
                   <div className="absolute top-28 left-44 animate-pulse p-10 rounded-full items-center flex justify-center bg-blue-600 group-hover:bg-red-600 transition duration-1000  " >
                         <ArrowRight className=" w-12 h-12 font-bold text-white transition-transform duration-300 -rotate-12"  />
                   </div>
                    </div>
                    </Link>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                      <div className="p-8 flex flex-col justify-between flex-1">
                        <div>
                          <Link href={`/news/${post.$id}`}>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                              {post.title}
                            </h4>
                          </Link>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-lg leading-relaxed">
                            {truncateString(post.summary, 90)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{post.date}</span>
                          </div>
                          <Link
                            href={`/events/${post.$id}`}
                            className="inline-flex items-center gap-2 group-hover:text-red-600 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div></div>
            ) : (
              <div className="text-center py-20 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 rounded-3xl backdrop-blur-sm">
                <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl font-medium">No news available at the moment.</p>
              </div>
            )}
          </div>

        </div>

         {/* =============================== U P C O M I N G     E V E N T S ============================================== */}
          {<div className="sticky top-8">
              <div className="bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 rounded-3xl p-8 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-12 bg-gradient-to-b from-emerald-500 to-blue-600 rounded-full shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h3>
                  <Link
                href="/events"
                className="group inline-flex items-center gap-3 p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                View All Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
                </div>

                <div className="space-y-4 grid  md:grid-cols-2 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {events.map((post, index) => (
                  <motion.article
                    key={post.$id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="group relative bg-white/95 dark:bg-gray-900/95  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
                  >
                    <div className="flex flex-col md:flex-row">
                      <Link
                        href={`/news/${post.$id}`}
                        className="relative md:w-80 h-64 md:h-64  flex-shrink-0 overflow-hidden"
                      >
                        <Image
                          src={getFileUrl(post.file) || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <Link href={`/news/${post.$id}`} className=" absolute inset-2">
                    <div className=" absolute top-0 left-0 right-0 bottom-48 opacity-0 group-hover:opacity-60 " >
                   <div className="absolute top-28 left-44 animate-pulse p-10 rounded-full items-center flex justify-center bg-blue-600 group-hover:bg-red-600 transition duration-1000  " >
                         <ArrowRight className=" w-12 h-12 font-bold text-white transition-transform duration-300 -rotate-12"  />
                   </div>
                    </div>
                    </Link>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                      <div className="p-8 flex flex-col justify-between flex-1">
                        <div>
                          <Link href={`/events/${post.$id}`}>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                              {post.title}
                            </h4>
                          </Link>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-lg leading-relaxed">
                            {truncateString(post.location, 90)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{post.date}</span>
                          </div>
                          <Link
                            href={`/events/${post.$id}`}
                            className="inline-flex items-center gap-2 group-hover:text-red-600 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
                </div>
              </div>
            </div>}
      </div>
    </section>
  )
}

export default NewsEventsSection
