import React from 'react'
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline'

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <PhoneIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+256 123 456 78</p>
          </div>
          <div className="flex flex-col items-center">
            <MailIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@bugemahospital.ac.ug</p>
          </div>
          <div className="flex flex-col items-center">
            <LocationMarkerIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600 text-center">123 University Avenue, Kampala, Uganda</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

