"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Clock } from "lucide-react"

const programs = [
  {
    title: "School of Business",
    description: "Comprehensive business programs designed to create innovative leaders and entrepreneurs.",
    courses: ["MBA", "BBA", "Accounting", "Economics"],
    students: "3,200+",
    duration: "3-4 Years",
    level: "Undergraduate & Graduate",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "School of Health Sciences",
    description: "World-class medical and health programs with state-of-the-art facilities and clinical training.",
    courses: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
    students: "2,800+",
    duration: "4-6 Years",
    level: "Undergraduate & Graduate",
    color: "from-green-500 to-green-600",
  },
  {
    title: "School of Education",
    description: "Preparing tomorrow's educators with innovative teaching methodologies and practical experience.",
    courses: ["Primary Education", "Secondary Education", "Special Needs", "Educational Leadership"],
    students: "2,100+",
    duration: "3-4 Years",
    level: "Undergraduate & Graduate",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "School of Technology",
    description: "Cutting-edge technology programs designed for the digital age and Industry 4.0.",
    courses: ["Computer Science", "IT", "Engineering", "Data Science"],
    students: "1,900+",
    duration: "4 Years",
    level: "Undergraduate & Graduate",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "School of Agriculture",
    description: "Sustainable agriculture programs combining traditional knowledge with modern techniques.",
    courses: ["Agribusiness", "Animal Science", "Crop Science", "Agricultural Engineering"],
    students: "1,500+",
    duration: "3-4 Years",
    level: "Undergraduate & Graduate",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "School of Graduate Studies",
    description: "Advanced research programs for scholars seeking to make significant contributions to knowledge.",
    courses: ["PhD Programs", "Master's Degrees", "Research", "Academic Writing"],
    students: "800+",
    duration: "2-5 Years",
    level: "Graduate & Postgraduate",
    color: "from-red-500 to-red-600",
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-bugema-gold/10 rounded-full text-bugema-gold font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Programs
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            Discover Your <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Choose from our comprehensive range of undergraduate and graduate programs, each designed to provide you
            with the knowledge and skills needed to excel in your chosen field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 30,
              }}
              className="perspective-1000"
            >
              <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-xs">
                      {program.level}
                    </Badge>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${program.color} animate-pulse`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-bugema-blue transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>

                  {/* Course list */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="text-xs hover:bg-bugema-blue/10 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-bugema-blue" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{program.students}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-bugema-gold" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{program.duration}</div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full mt-4 group-hover:bg-bugema-blue/10 group-hover:text-bugema-blue transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-4">
            <Button size="lg" className="bg-bugema-blue hover:bg-bugema-blue/90 group">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-bugema-gold text-bugema-gold hover:bg-bugema-gold/10 bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
