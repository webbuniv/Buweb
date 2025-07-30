"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  Cpu,
  Leaf,
  Users,
  BookOpen,
  ArrowRight,
  Clock,
  Award,
} from "lucide-react"

const programs = [
  {
    id: 1,
    category: "Health Sciences",
    icon: Stethoscope,
    title: "School of Health Sciences",
    description: "Comprehensive healthcare programs preparing future medical professionals",
    programs: ["Nursing", "Public Health", "Medical Laboratory Sciences", "Pharmacy"],
    duration: "3-4 years",
    level: "Undergraduate & Postgraduate",
    color: "from-red-500 to-pink-500",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    category: "Business",
    icon: Briefcase,
    title: "School of Business",
    description: "Dynamic business programs for tomorrow's entrepreneurs and leaders",
    programs: ["Business Administration", "Accounting", "Marketing", "Human Resource Management"],
    duration: "3-4 years",
    level: "Undergraduate & Postgraduate",
    color: "from-blue-500 to-cyan-500",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    category: "Technology",
    icon: Cpu,
    title: "School of Science & Technology",
    description: "Cutting-edge technology programs for the digital age",
    programs: ["Computer Science", "Information Technology", "Software Engineering", "Data Science"],
    duration: "3-4 years",
    level: "Undergraduate & Postgraduate",
    color: "from-purple-500 to-violet-500",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    category: "Education",
    icon: GraduationCap,
    title: "School of Education",
    description: "Preparing dedicated educators for the next generation",
    programs: ["Primary Education", "Secondary Education", "Educational Leadership", "Special Needs Education"],
    duration: "3-4 years",
    level: "Undergraduate & Postgraduate",
    color: "from-green-500 to-emerald-500",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    category: "Agriculture",
    icon: Leaf,
    title: "School of Agriculture",
    description: "Sustainable agriculture and food security programs",
    programs: ["Agricultural Sciences", "Animal Husbandry", "Crop Production", "Agricultural Economics"],
    duration: "3-4 years",
    level: "Undergraduate & Postgraduate",
    color: "from-orange-500 to-yellow-500",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    category: "Social Sciences",
    icon: Users,
    title: "School of Social Sciences",
    description: "Understanding society and human behavior through comprehensive programs",
    programs: ["Psychology", "Sociology", "Social Work", "Development Studies"],
    duration: "3-4 years",
    level: "Undergraduate & Postgraduate",
    color: "from-indigo-500 to-blue-500",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const ProgramsShowcase = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0])
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Academic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of academic programs designed to prepare you for success in your chosen
            field
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programs List */}
          <div className="lg:col-span-1 space-y-4">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProgram(program)}
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  selectedProgram.id === program.id
                    ? "bg-white dark:bg-slate-800 border-blue-500 shadow-lg"
                    : "bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{
                      rotateY: 15,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <program.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{program.category}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {program.programs.length} Programs Available
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      selectedProgram.id === program.id || hoveredCard === program.id
                        ? "text-blue-600 translate-x-1"
                        : "text-gray-400"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Program Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProgram.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden relative"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProgram.color} opacity-5`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{
                          rotateY: 15,
                          rotateX: 15,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProgram.color} flex items-center justify-center shadow-lg`}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <selectedProgram.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {selectedProgram.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProgram.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Programs List */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                        Available Programs
                      </h4>
                      <div className="space-y-3">
                        {selectedProgram.programs.map((program, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProgram.color}`} />
                            <span className="text-gray-700 dark:text-gray-300">{program}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Program Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                          <div className="font-semibold text-gray-900 dark:text-white">{selectedProgram.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Level</div>
                          <div className="font-semibold text-gray-900 dark:text-white">{selectedProgram.level}</div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          href={`/programs/${selectedProgram.category.toLowerCase().replace(" ", "-")}`}
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${selectedProgram.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Program Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative h-64 rounded-2xl overflow-hidden"
                  >
                    <img
                      src={selectedProgram.image || "/placeholder.svg"}
                      alt={selectedProgram.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-semibold">{selectedProgram.category}</div>
                      <div className="text-sm opacity-90">Explore our facilities and programs</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white dark:bg-slate-800 rounded-2xl px-8 py-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Can't Find Your Program?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore all our academic programs or speak with our admissions team
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                href="/programs"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                View All Programs
              </Link>
              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-center"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsShowcase
