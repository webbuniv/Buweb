"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Eye } from "lucide-react"
import Image from "next/image"

const newsItems = [
  {
    id: 1,
    title: "Bugema University Hosts International Conference on Sustainable Agriculture",
    excerpt:
      "Leading experts from across Africa gathered to discuss innovative approaches to sustainable farming and food security.",
    category: "Research",
    date: "2024-01-15",
    author: "Dr. Sarah Mukasa",
    views: "2.4k",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 2,
    title: "New State-of-the-Art Medical Simulation Lab Opens",
    excerpt:
      "The latest addition to our medical school provides students with hands-on training using advanced simulation technology.",
    category: "Facilities",
    date: "2024-01-12",
    author: "Prof. James Okello",
    views: "1.8k",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 3,
    title: "Student Innovation Challenge Winners Announced",
    excerpt:
      "Celebrating the creativity and ingenuity of our students with solutions addressing real-world challenges.",
    category: "Students",
    date: "2024-01-10",
    author: "Dr. Grace Namuddu",
    views: "3.2k",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    title: "Partnership with Global Tech Companies Announced",
    excerpt:
      "New collaborations will provide students with internship opportunities and access to cutting-edge technology.",
    category: "Partnerships",
    date: "2024-01-08",
    author: "Prof. Michael Ssebunya",
    views: "2.1k",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Research", count: 8, active: false },
  { name: "Students", count: 12, active: false },
  { name: "Facilities", count: 6, active: false },
  { name: "Events", count: 15, active: false },
]

export function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-bugema-green/10 rounded-full text-bugema-green font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Latest News & Updates
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            Stay Updated with <span className="gradient-text">Campus Life</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Discover the latest happenings, achievements, and developments at Bugema University. From groundbreaking
            research to student accomplishments and campus events.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={`${
                category.active
                  ? "bg-bugema-blue hover:bg-bugema-blue/90"
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
              } transition-all duration-300`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs bg-white/20">
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:row-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-bugema-blue/5 to-bugema-gold/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={newsItems[0].image || "/placeholder.svg"}
                  alt={newsItems[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-bugema-blue text-white">Featured</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <CardContent className="p-8">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline" className="border-bugema-blue/30 text-bugema-blue">
                    {newsItems[0].category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(newsItems[0].date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{newsItems[0].views}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-bugema-blue transition-colors duration-300 leading-tight">
                  {newsItems[0].title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{newsItems[0].excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{newsItems[0].author}</span>
                  </div>
                  <Button variant="ghost" className="group/btn hover:bg-bugema-blue/10 hover:text-bugema-blue">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="perspective-1000"
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="flex">
                    <div className="relative flex-shrink-0 w-32 h-32">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>

                      <h4 className="font-bold text-foreground mb-2 group-hover:text-bugema-blue transition-colors duration-300 leading-tight line-clamp-2">
                        {article.title}
                      </h4>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{article.author}</span>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Button size="lg" className="bg-bugema-green hover:bg-bugema-green/90 group">
            View All News
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
