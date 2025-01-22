import React from "react"
import { Users, Award, TreePine, Globe } from 'lucide-react'

const StatisticsSection: React.FC = () => {
  const stats = [
    { icon: <Users className="h-10 w-10" />, value: "5,000+", label: "Students Enrolled" },
    { icon: <Award className="h-10 w-10" />, value: "98%", label: "Graduate Employment Rate" },
    { icon: <TreePine className="h-10 w-10" />, value: "1,000+", label: "Acres of Research Fields" },
    { icon: <Globe className="h-10 w-10" />, value: "50+", label: "Global Research Partnerships" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 text-center hover:bg-opacity-20 transition duration-300">
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-sm opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatisticsSection

