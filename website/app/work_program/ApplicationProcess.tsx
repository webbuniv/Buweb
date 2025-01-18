import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardListIcon, UserIcon, BriefcaseIcon, CheckCircleIcon } from '@heroicons/react/outline'

const steps = [
  { icon: <ClipboardListIcon className="h-12 w-12" />, title: 'Submit Application', description: 'Fill out the online application form with your details and work preferences.' },
  { icon: <UserIcon className="h-12 w-12" />, title: 'Interview', description: 'If shortlisted, you will be invited for an interview with the work program coordinator.' },
  { icon: <BriefcaseIcon className="h-12 w-12" />, title: 'Placement', description: 'Based on your skills and preferences, you will be assigned to a suitable work area.' },
  { icon: <CheckCircleIcon className="h-12 w-12" />, title: 'Start Working', description: 'Begin your work program, earning credits while gaining valuable experience.' },
]

const ApplicationProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-blue-600 font-bold text-center mb-12">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-full mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcess

