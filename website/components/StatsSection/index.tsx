"use client"

import { useState } from "react"
import {
  BookOpen,
  Users,
  Clock,
  Award,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Cpu,
  Leaf,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const schools = [
  {
    id: "business",
    name: "School of Business",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    description: "Develop leadership skills and business acumen for the global marketplace",
    programs: [
      {
        name: "Bachelor of Business Administration",
        duration: "3 years",
        students: "2,500+",
        description: "Comprehensive business education covering management, marketing, finance, and entrepreneurship.",
        highlights: ["Internship opportunities", "Industry partnerships", "Leadership development"],
      },
      {
        name: "Master of Business Administration",
        duration: "2 years",
        students: "800+",
        description: "Advanced business leadership program for experienced professionals.",
        highlights: ["Executive mentorship", "Case study methodology", "Global business focus"],
      },
      {
        name: "Bachelor of Commerce",
        duration: "3 years",
        students: "1,200+",
        description: "Focus on accounting, economics, and commercial law.",
        highlights: ["Professional certifications", "Practical training", "Career guidance"],
      },
    ],
  },
  {
    id: "science",
    name: "School of Science & Technology",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    description: "Innovation and technology for tomorrow's digital world",
    programs: [
      {
        name: "Bachelor of Computer Science",
        duration: "4 years",
        students: "1,800+",
        description: "Cutting-edge computer science education with focus on software development and AI.",
        highlights: ["Modern labs", "Industry projects", "Tech internships"],
      },
      {
        name: "Bachelor of Information Technology",
        duration: "3 years",
        students: "1,500+",
        description: "Practical IT skills for system administration and network management.",
        highlights: ["Hands-on training", "Certification prep", "Job placement"],
      },
      {
        name: "Bachelor of Mathematics",
        duration: "3 years",
        students: "600+",
        description: "Pure and applied mathematics with research opportunities.",
        highlights: ["Research projects", "Academic excellence", "Graduate school prep"],
      },
    ],
  },
  {
    id: "health",
    name: "School of Health Sciences",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    description: "Training healthcare professionals for community wellness",
    programs: [
      {
        name: "Bachelor of Nursing",
        duration: "4 years",
        students: "1,200+",
        description: "Comprehensive nursing education with clinical practice.",
        highlights: ["Clinical rotations", "Modern facilities", "Professional licensing"],
      },
      {
        name: "Bachelor of Public Health",
        duration: "3 years",
        students: "800+",
        description: "Community health focus with epidemiology and health promotion.",
        highlights: ["Field experience", "Research opportunities", "Community impact"],
      },
      {
        name: "Diploma in Clinical Medicine",
        duration: "3 years",
        students: "400+",
        description: "Training clinical officers for primary healthcare.",
        highlights: ["Practical training", "Rural placements", "Healthcare access"],
      },
    ],
  },
  {
    id: "agriculture",
    name: "School of Agriculture",
    icon: Leaf,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    description: "Sustainable agriculture and food security solutions",
    programs: [
      {
        name: "Bachelor of Agriculture",
        duration: "4 years",
        students: "900+",
        description: "Modern farming techniques and agricultural management.",
        highlights: ["Practical farming", "Research plots", "Agribusiness focus"],
      },
      {
        name: "Bachelor of Agricultural Engineering",
        duration: "4 years",
        students: "300+",
        description: "Engineering solutions for agricultural challenges.",
        highlights: ["Technology integration", "Innovation projects", "Industry partnerships"],
      },
    ],
  },
  {
    id: "education",
    name: "School of Education",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    description: "Shaping the next generation of educators and leaders",
    programs: [
      {
        name: "Bachelor of Education",
        duration: "3 years",
        students: "2,000+",
        description: "Teacher training with specialization in various subjects.",
        highlights: ["Teaching practice", "Curriculum development", "Educational technology"],
      },
      {
        name: "Diploma in Education",
        duration: "2 years",
        students: "1,500+",
        description: "Primary teacher training program.",
        highlights: ["Practical teaching", "Child psychology", "Classroom management"],
      },
    ],
  },
  {
    id: "social",
    name: "School of Social Sciences",
    icon: Users,
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
    description: "Understanding society and human behavior",
    programs: [
      {
        name: "Bachelor of Social Work",
        duration: "3 years",
        students: "800+",
        description: "Community development and social intervention skills.",
        highlights: ["Field placements", "Community projects", "Social impact"],
      },
      {
        name: "Bachelor of Development Studies",
        duration: "3 years",
        students: "600+",
        description: "Sustainable development and policy analysis.",
        highlights: ["Research methods", "Policy analysis", "Development practice"],
      },
    ],
  },
]

export default function ProgramsShowcase() {
  const [activeSchool, setActiveSchool] = useState(schools[0])
  const [activeProgram, setActiveProgram] = useState(0)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-t from-purple-50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Discover Your Path to Success</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of undergraduate and graduate programs designed to prepare you for
            leadership in your chosen field.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Schools Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schools & Faculties</h3>
              <div className="space-y-3">
                {schools.map((school) => {
                  const Icon = school.icon
                  const isActive = activeSchool.id === school.id

                  return (
                    <button
                      key={school.id}
                      onClick={() => {
                        setActiveSchool(school)
                        setActiveProgram(0)
                      }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 group ${
                        isActive
                          ? "border-blue-200 bg-blue-50 shadow-lg"
                          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${school.color} ${
                            isActive ? "scale-110" : "scale-100 group-hover:scale-105"
                          } transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-1 ${isActive ? "text-blue-900" : "text-gray-900"}`}>
                            {school.name}
                          </h4>
                          <p className={`text-sm leading-relaxed ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                            {school.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Programs Content */}
          <div className="lg:col-span-8">
            {/* School Header */}
            <div className={`p-8 rounded-2xl bg-gradient-to-br ${activeSchool.bgColor} border border-gray-100 mb-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${activeSchool.color}`}>
                  <activeSchool.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{activeSchool.name}</h3>
                  <p className="text-gray-600 mt-1">{activeSchool.description}</p>
                </div>
              </div>

              {/* School Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{activeSchool.programs.length}</div>
                  <div className="text-sm text-gray-600">Programs</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {activeSchool.programs
                      .reduce((acc, program) => acc + Number.parseInt(program.students.replace(/[^0-9]/g, "")), 0)
                      .toLocaleString()}
                    +
                  </div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Employment</div>
                </div>
              </div>
            </div>

            {/* Programs List */}
            <div className="space-y-6">
              {activeSchool.programs.map((program, index) => {
                const isActive = activeProgram === index

                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-blue-200 bg-blue-50 shadow-lg"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                    }`}
                    onClick={() => setActiveProgram(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold mb-2 ${isActive ? "text-blue-900" : "text-gray-900"}`}>
                          {program.name}
                        </h4>
                        <p className={`leading-relaxed mb-4 ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                          {program.description}
                        </p>
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 ml-4 transition-transform ${
                          isActive ? "text-blue-600 rotate-90" : "text-gray-400"
                        }`}
                      />
                    </div>

                    {/* Program Stats */}
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{program.students} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Accredited</span>
                      </div>
                    </div>

                    {/* Program Highlights */}
                    {isActive && (
                      <div className="mt-6 pt-6 border-t border-blue-200">
                        <h5 className="font-semibold text-blue-900 mb-3">Program Highlights:</h5>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {program.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeSchool.color}`} />
                              <span className="text-sm text-blue-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex gap-3">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Apply Now
                          </Button>
                          <Button size="sm" variant="outline">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl text-white text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Start Your Journey?</h3>
              <p className="mb-4 opacity-90">Join thousands of successful graduates from {activeSchool.name}</p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">Apply to {activeSchool.name}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
