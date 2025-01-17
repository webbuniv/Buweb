import React from 'react'
import { HeartIcon, BeakerIcon, UserGroupIcon, AcademicCapIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/outline'

const services = [
  {
    icon: <HeartIcon className="h-12 w-12 text-blue-500" />,
    title: 'Emergency Care',
    description: '24/7 emergency services with state-of-the-art facilities and expert staff.',
  },
  {
    icon: <BeakerIcon className="h-12 w-12 text-green-500" />,
    title: 'Laboratory Services',
    description: 'Advanced diagnostic testing and analysis for accurate results.',
  },
  {
    icon: <UserGroupIcon className="h-12 w-12 text-purple-500" />,
    title: 'Specialized Clinics',
    description: 'Expert care in various medical specialties to address specific health needs.',
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12 text-red-500" />,
    title: 'Medical Education',
    description: 'Training programs for medical students and continuing education for healthcare professionals.',
  },
  {
    icon: <CogIcon className="h-12 w-12 text-yellow-500" />,
    title: 'Rehabilitation Services',
    description: 'Comprehensive rehabilitation programs to help patients recover and regain independence.',
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-indigo-500" />,
    title: 'Preventive Care',
    description: 'Health screenings, vaccinations, and wellness programs to promote long-term health.',
  },
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

