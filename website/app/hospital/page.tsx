'use client'

import AboutSection from '@/components/Hospital/AboutSection'
import ContactSection from '@/components/Hospital/ContactSection'
import DepartmentsSection from '@/components/Hospital/DepartmentsSection'
import Hero from '@/components/Hospital/Hero'
import ServicesOverview from '@/components/Hospital/ServicesOverview'
import React from 'react'

const Hospital = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <DepartmentsSection />
      <ContactSection />
    </div>
  )
}

export default Hospital

