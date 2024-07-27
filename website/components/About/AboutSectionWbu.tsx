import Image from "next/image";
import { BookOpenIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';
import { EyeIcon } from '@heroicons/react/solid';
import image from "../../public/images/features/bu.jpg";
import learning from "../../public/images/schools/lab1.jpg";
import worship from "../../public/images/schools/theology.jpg";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link"

const AboutSectionWbu = () => {
  const [isDropdownVisibleProfessional, setIsDropdownVisibleProfessional] = useState(false);
  const [isDropdownVisibleExpert, setIsDropdownVisibleExpert] = useState(false);
  const dropdownRefProfessional = useRef<HTMLDivElement>(null);
  const dropdownRefExpert = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRefProfessional.current && !dropdownRefProfessional.current.contains(event.target as Node)) {
      setIsDropdownVisibleProfessional(false);
    }
    if (dropdownRefExpert.current && !dropdownRefExpert.current.contains(event.target as Node)) {
      setIsDropdownVisibleExpert(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisibleProfessional || isDropdownVisibleExpert) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisibleProfessional, isDropdownVisibleExpert]);

  return (
    <section className="py-16 md:py-20 lg:py-28">

    <div className="container">
        <h3 className="mb-2 mt-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-4xl text-center">
           Excellence in research, teaching, and medical care
        </h3>
        
      <div className="flex flex-col lg:flex-row items-center gap-10 -mt-[200px] lg:mt-10">
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

      <div className="container">
        <div className="flex flex-wrap items-center -mx-4 -mt-[150px] lg:mt-[12px]">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              data-wow-delay=".15s"
            >
              <Image
                src={image}
                alt="about image"
                fill
                className="-mt-7"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionWbu;
