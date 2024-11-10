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

const AboutSectionBu = () => {
  // const [isDropdownVisibleProfessional, setIsDropdownVisibleProfessional] = useState(false);
  // const [isDropdownVisibleExpert, setIsDropdownVisibleExpert] = useState(false);
  // const dropdownRefProfessional = useRef<HTMLDivElement>(null);
  // const dropdownRefExpert = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-20">

    <div className="container">
        <h3 className="mb-2 -mb-16 lg:mb-1 lg:mt-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-4xl text-center">
        A Brief History of Bugema
        </h3>
        
      <div className="flex flex-col lg:flex-row mt-[100px] lg:mt-10">
         {/* <div
              className="wow h-[500px] fadeInUp relative mx-auto lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              data-wow-delay=".15s" 
            > */}
            <div className="flex-1 -lg:mt-20">
              <p className="">
              With the entry of the Adventist church in Uganda in 1927 came also the first Adventist
              educational institution in Nchwanga in West Central Uganda. The primary function of
              the institution was to train pastors and church workers. In 1948 the institution moved to
              a newly purchased property of 640 acres in Bugema, 34 Kilometers from Kampala. Two
              years later a secondary education at ‘O’ level was started. By 1970 a junior college began
              its operations training pastors for the field. Four years later, the denomination upgraded
              the institution into a four-year seminary, granting bachelor’s degrees in theology (BTh).
              In 1985 business was added, and in 1990 education. In 1994, the institution obtained
              a government license to operate as a university. The Adventist Accrediting Association
              (AAA) visited the University in 1995 and recommended accreditation to Bachelor of
              Theology, Bachelor of Business Administration (in Management and Accounting), and
              Bachelor of Arts in Religion.

              </p>
              <br />
              <p className="">
              Subsequent visit of the AAA and International Board of Education (IBE) allowed the
              university to restructure their programs under two schools: School of Arts and Social
              Sciences and School of Business. The former includes four departments: Development
              Studies, Education, Social Work and Social Admnistration, and Theology and Religious
              Studies. The later includes three departments: Accounting and Finance, Management,
              and Information Technology. Under these departments, the university offers 12 degree
              programs with various majors and several vocational certificates and professional
              licenses.
              </p>
          </div>
          <div className="w-full px-2 lg:w-1/5 h-[500px] mt-[10px] lg:mt-[20px]">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Address
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">
              Bugema University is located 32 kilometers north of Kampala on Gayaza-Zirobwe Road.
              Public Taxis are available at a cost of Ushs 4,000 from the Old Taxi Park in Kampala city,
              or special cars can be hired at an approximate cost of UShs 60,000.
              </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSectionBu;
