import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const departments = [
  { name: 'Cardiology', image: '/images/hospital/five.jpg' },
  { name: 'Pediatrics', image: '/images/hospital/one.jpg' },
  { name: 'Neurology', image: '/images/hospital/three.jpg' },
  { name: 'Orthopedics', image: '/images/hospital/two.jpg' },
]

const DepartmentsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image
                src={dept.image || "/placeholder.svg"}
                alt={dept.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center mb-2">{dept.name}</h3>
                <div className="text-center">
                  <Link href={`/hospital/departments/${dept.name.toLowerCase()}`} className="text-blue-500 hover:text-blue-600 font-semibold">
                    View Department
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentsSection

