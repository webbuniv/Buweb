"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, GraduationCap, Briefcase } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Nakamya",
    program: "Bachelor of Business Administration",
    graduationYear: "2022",
    currentRole: "Marketing Manager at MTN Uganda",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
    quote:
      "Bugema University transformed my life completely. The practical approach to learning and the supportive faculty helped me develop both professionally and personally. Today, I'm leading marketing campaigns for one of Uganda's biggest companies.",
    achievements: ["Dean's List Graduate", "Student Leadership Award", "Marketing Excellence Award"],
  },
  {
    id: 2,
    name: "David Mukasa",
    program: "Bachelor of Computer Science",
    graduationYear: "2021",
    currentRole: "Software Engineer at Google",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
    quote:
      "The computer science program at Bugema gave me a solid foundation in both theoretical concepts and practical skills. The modern labs and industry partnerships prepared me for the global tech industry. I'm now working at Google, living my dream!",
    achievements: ["Summa Cum Laude", "Best Final Year Project", "Tech Innovation Award"],
  },
  {
    id: 3,
    name: "Grace Achieng",
    program: "Bachelor of Nursing",
    graduationYear: "2020",
    currentRole: "Senior Nurse at Mulago Hospital",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
    quote:
      "The nursing program at Bugema is exceptional. The clinical rotations and hands-on training prepared me to handle real-world healthcare challenges. I'm proud to be serving my community and making a difference in people's lives every day.",
    achievements: ["Clinical Excellence Award", "Community Service Recognition", "Nursing Leadership Certificate"],
  },
  {
    id: 4,
    name: "James Okello",
    program: "Master of Business Administration",
    graduationYear: "2023",
    currentRole: "CEO of Okello Enterprises",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
    quote:
      "The MBA program challenged me to think strategically and develop leadership skills. The case studies and group projects were invaluable. I've since started my own company and we're already expanding across East Africa.",
    achievements: ["MBA Excellence Award", "Entrepreneurship Recognition", "Business Plan Competition Winner"],
  },
  {
    id: 5,
    name: "Mary Nabirye",
    program: "Bachelor of Education",
    graduationYear: "2019",
    currentRole: "Head Teacher at Kampala International School",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
    quote:
      "Bugema's education program equipped me with modern teaching methodologies and leadership skills. The teaching practice sessions were incredibly valuable. I'm now leading a team of 50+ teachers and impacting hundreds of students.",
    achievements: [
      "Outstanding Teacher Award",
      "Educational Leadership Certificate",
      "Curriculum Development Recognition",
    ],
  },
  {
    id: 6,
    name: "Peter Ssemakula",
    program: "Bachelor of Agriculture",
    graduationYear: "2021",
    currentRole: "Agricultural Consultant & Farm Owner",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
    quote:
      "The agriculture program at Bugema combines traditional knowledge with modern farming techniques. The practical sessions on the university farm were eye-opening. I now run a successful agribusiness and consult for other farmers.",
    achievements: ["Best Agriculture Student", "Sustainable Farming Award", "Young Farmer of the Year"],
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 12v-2h-2v2H6v2h4v2h2v-2h2v-2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hear From Our Graduates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Bugema University has transformed the lives of thousands of students, preparing them for
            successful careers and meaningful contributions to society.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={currentTestimonialData.image || "/placeholder.svg"}
                  alt={currentTestimonialData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating Quote Icon */}
                <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="absolute bottom-6 left-6 flex items-center gap-1">
                  {[...Array(currentTestimonialData.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{currentTestimonialData.quote}"
                </blockquote>

                {/* Student Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTestimonialData.name}</h3>
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-medium">{currentTestimonialData.program}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{currentTestimonialData.currentRole}</span>
                  </div>
                  <span className="text-sm text-gray-500">Class of {currentTestimonialData.graduationYear}</span>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {currentTestimonialData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Cards Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 bg-white rounded-xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial
                  ? "border-blue-200 shadow-xl"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-xl"
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.currentRole}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">"{testimonial.quote}"</p>
              <div className="flex items-center gap-1 mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">Ready to Write Your Success Story?</h3>
              <p className="opacity-90">Join our community of successful graduates</p>
            </div>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
