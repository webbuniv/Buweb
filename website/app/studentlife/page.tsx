// 'use client'

// import HomePage from "@/components/About/AboutSectionLife";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import LifeHero from "@/components/LifeHero";
// import StudentLifePrograms from "@/components/About/StudentLife";

// const StudentLifePage = () => {
//   return (
//     <>
//       <LifeHero />
//       <Breadcrumb
//         pageName="Bugema University Student Life"
//         description="Welcome to the Bugema University Student Life page! Here, you'll find student life
//          on various topics related to academia, student life, research, and more."
//       />
//       <HomePage />
//       <StudentLifePrograms />
//     </>
//   );
// };

// export default StudentLifePage;

import HomePage from '@/components/About/AboutSectionLife'
import CampusLife from '@/components/About/StudentLife/CampusLife'
import EventCalendar from '@/components/About/StudentLife/EventCalendar'
import Hero from '@/components/About/StudentLife/Hero'
import TestimonialSlider from '@/components/About/StudentLife/TestimonialSlider'
import VideoGallery from '@/components/About/StudentLife/VideoGallery'
import React from 'react'

const StudentLifePage: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Hero />
      <CampusLife />
      <HomePage />
      {/* <VideoGallery /> */}
      <EventCalendar />
      <TestimonialSlider />
    </div>
  )
}

export default StudentLifePage


