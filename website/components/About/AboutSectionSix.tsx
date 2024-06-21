'use client';
import { useState } from "react";
import Image from "next/image";
import im3 from "../../public/images/features/reg.jpg";
import { motion } from "framer-motion";
// import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";


const AboutSectionOne = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 ">

        <div className="mb-8 p-4 border border hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md">
          <h1 className="text-body-color dark:text-white text-xl font-semibold mb-2 underline text-center">Professional Courses</h1>
          <p className="">
            We offer a number of professional courses across our faculties. The Department of Computing and Technology offers certifications from CISCO like CCNA, CCNP, and from Microsoft, the department provides MCSE, MCSA. The School of Business prepares students for CPA and other accounting professional courses. Our Nursing students are assessed by the Uganda Nurses And Midwifery Examination Board (UNMEB).
          </p>
          <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
            Explore more
          </button>
        </div>

          <div className="mb-8 p-4 border border hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md ">
            <h1 className="text-body-color dark:text-white text-xl font-semibold underline text-center">Expert Lecturers</h1>
            <p className="">The university treasures the quality of it's products, and for that reason, we hire the quality and experienced lecturers to train and produce the quality for our students. Our lecuturers are associated with industry enterprises which helps them get the market experience that they instil in our students. Research is a core role for our lectucturers to keep producing relevant knowledge for the market.</p>
            <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
               Explore more
            </button>
          </div>

          <div className="mb-8 p-4 border border hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md">
            <h1 className="text-body-color dark:text-white text-xl font-semibold underline text-center">Blended Learning</h1>
            <h1 className="">Our blended learning programs combine traditional classroom instruction with interactive online components, empowering students to engage with course materials, collaborate with peers. Our E-Learning system is available all the time to cater for those that may be in different time zones. Our support team will take you step by step on how to get the best from the platform. Pay a visit to our E-Learning Platform</h1>
            <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
               Explore more
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 ">

          <div className="mb-8 p-4 border border hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md">
            <h1 className="text-body-color dark:text-white text-xl font-semibold bold underline text-center">Faculty-Student Interaction</h1>
            <h1 className="">We believe in creating relationships that last with our clients. The institution has accademic families where each student is assigned to a mentor. This increases the bond between our students and lecturers. Since students are let free to ineteract with the lecturers, this gives them a chance to be well prepared for the market challenges ahead of them. This enriches their (Students) career readiness as well.</h1>
            <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
               Explore more
            </button>
          </div>

          <div className="mb-8 p-4 border border hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md">
            <h1 className="text-body-color dark:text-white text-xl font-semibold bold underline text-center">Worship</h1>
            <h1 className="">We understand the importance of holistic development and the role of spirituality in our students' lives. We provide a nurturing environment that fosters personal growth and offers opportunities for spiritual enrichment. Our university offers worship services and spaces that cater to diverse religious and spiritual needs. Students can engage in prayer, meditation, and other spiritual activities to promote a sense of community, mindfulness, and well-being.</h1>
            <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
               Explore more
            </button>
          </div>

          <div className="mb-8 p-4 border border hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md">
            <h1 className="text-body-color dark:text-white text-xl font-semibold bold underline text-center">Professional Certificate</h1>
            <h1 className="">We believe in equipping our students with the necessary skills and credentials to excel in their chosen professions. As part of our commitment to professional development, we offer a range of professional certification programs. These certifications are designed to enhance students' expertise, improve their marketability, and demonstrate their proficiency in specific areas of study. </h1>
            <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
               Explore more
            </button>
          </div>

        </div>


    </div>
    </section>
  )
};
export default AboutSectionOne;
