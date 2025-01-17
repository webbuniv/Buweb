'use client'

import React from 'react'
import FAQ from './FAQ'
import ApplicationProcess from './ApplicationProcess'
import ProgramInfo from './ProgramInfo'
import Hero from './Hero'
import Testimonials from './Testimonials'

const WorkProgram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <ProgramInfo />
      <Testimonials />
      <FAQ />
      <ApplicationProcess />
    </div>
  )
}

export default WorkProgram

