import Image from "next/image";
import image from "../../public/images/features/bu.jpg";
import learning from "../../public/images/schools/lab1.jpg";
import worship from "../../public/images/schools/theology.jpg";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link"

const AboutSectionBub = () => {
  return (
    <section className="py-16 md:py-20">

    <div className="container">

    <div className="flex flex-col lg:flex-row items-center gap-10 mt-[30px] lg:mt-[-250px]">
  <div className="w-full px-2 lg:w-1/2 h-[500px]">
    <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
      <div className="flex-1">
        <p className="">
        In year 2000, the university had student population of 800. There was a need to expand
        the offerings in various departments especially in the Department of Education. As
        a result, the following teaching courses were introduced in education: Geography,
        Mathematics, Chemistry, Biology, Physics, English Language and Literature in English.
        The school of Social Sciences also expanded to include Development Studies. During
        the AAA evaluation of 2004 the student population was 1,236. Students come from 15
        countries of Africa.
        </p>
        <br />
        <p className="">
        In 2008, the administration embarked on an extensive promotion for the university
        in Central, South and East Africa. In this same year the AAA evaluation team visited.
        </p>
      </div>
    </div>
  </div>

  <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
    <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
      <div className="flex-1">
        <p className="">
        
        Bugema and found the enrollment at 2000 students. The growth of the university
        was appreciated by both the AAA and the National Council of Higher Education in
        Uganda which in turn recommended Bugema to the President of Uganda to be given
        a Charter on June 29, 2009. His Excellency President Yoweri Kaguta Museveni signed
        the Charter on April 26, 2010. As all chartered universities in Africa are expected to do,
        Bugema started a Graduate School. The subsequent visits of IBE (2010) and AAA (2011)
        allowed the University to run a Graduate Program in Business Administration (MBA),
        in Education (MA), in Development (MA), and in Counseling Psychology (MSc), and
        an MPH program.
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="flex flex-col lg:flex-row items-center gap-10 -mt-[200px] lg:-mt-20">
         <div
              className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              data-wow-delay=".15s" 
            >
              <Image
                src={learning}
                alt="Bugema University"
                className="w-[500px]"
              />
          </div>
          <div className="w-full px-2 lg:w-1/2 h-[500px] -mt-[300px] lg:mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Blended Learning
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">Our blended learning programs combine traditional classroom instruction with interactive online components, empowering students to engage with course materials, collaborate with peers. Our E-Learning system is available all the time to cater for those that may be in different time zones. Our support team will take you step by step on how to get the best from the platform. Pay a visit to our E-Learning Platform.</p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Login
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-[10px] lg:-mt-20">
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Faculty-Student Interaction
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">We believe in creating relationships that last with our clients. The institution has academic families where each student is assigned to a mentor. This increases the bond between our students and lecturers. Since students are let free to interact with the lecturers, this gives them a chance to be well prepared for the market challenges ahead of them. This enriches their (Students) career readiness as well.</p>
              <Link href={"/studentlife"} >
                <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                  Explore more
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={worship}
              alt="Bugema University"
              className="w-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 -mt-[200px] lg:-mt-20">
        <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={worship}
              alt="Bugema University"
              className="w-[500px]"
            />
          </div>
          <div className="w-full px-2 lg:w-1/2 h-[500px]  -mt-[300px] lg:mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
             Worship
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">We understand the importance of holistic development and the role of spirituality in our students&apos; lives. We provide a nurturing environment that fosters personal growth and offers opportunities for spiritual enrichment. Our university offers worship services and spaces that cater to diverse religious and spiritual needs. Students can engage in prayer, meditation, and other spiritual activities to promote a sense of community, mindfulness, and well-being.</p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Explore more
              </button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-[20px] lg:-mt-20">

        <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Professional Certificate
          </h3>
          <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
            <div className="flex-1">
            <p className="">We believe in equipping our students with the necessary skills and credentials to excel in their chosen professions. As part of our commitment to professional development, we offer a range of professional certification programs. These certifications are designed to enhance students&apos; expertise, improve their marketability, and demonstrate their proficiency in specific areas of study.</p>
            <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
              Explore more
            </button>
            </div>
          </div>
        </div>
        <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={image}
              alt="Bugema University"
              className="w-[500px]"
            />
        </div>
        
        </div>
        
      </div>
    </section>
  );
};

export default AboutSectionBub;
