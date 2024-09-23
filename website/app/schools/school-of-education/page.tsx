"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import image from "@/public/images/nav/labs.jpg";
import Link from "next/link";

export default function SchoolOfEducation() {

      const [Social, setSocial] = useState(true)
      const [education, setEducation] = useState(false)

      const handleSocial = ()=>{
            setSocial(true)
            setEducation(false)
            document.getElementById('Social').classList.remove('hidden')
            document.getElementById('socialhandler').classList.add('active2')
            document.getElementById('education').classList.add('hidden')
            document.getElementById('educhandler').classList.remove('active2')
            
      };
      const handleEducation =()=>{
            setSocial(false)
            setEducation(true)
            document.getElementById('Social').classList.add('hidden')
            document.getElementById('education').classList.remove('hidden')
            document.getElementById('socialhandler').classList.remove('active2')
            document.getElementById('educhandler').classList.add('active2')
      };

  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
         tittle="School of Education"
         subtittle="We offer Quality Education in both High School and Primary Teaching to make sure our teachers produce quality output"
         topImg="/images/nav/lab1.jpg"
          dean="DR. SSERUNJOGI CHARLES"
          deanImage={"/blank/blank.jpg"}
          message="Having made a choice to join the school of education Bugema University, I take this opportunity to welcome you and assure you that you have made the best decision. As school of education, we look forward to serving you with a complete package."
          preamble="The School of Education believes that a true teacher is one that is mentally, physically and spiritually sound to impart the same virtues in his/her learners making them best suited for service to God and mankind in this world and in the world to come."
          goal="Promoting Lifelong Learning and Innovation:"
        />
      </section>

      <div className=" flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Departments In The Faculty" paragraph="" />
            </div>

            <div className=' flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="socialhandler" style={{cursor:"pointer"}} onClick={handleSocial}> Department Of Social Sciences</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="educhandler" style={{cursor:"pointer"}} onClick={handleEducation}> Department Of Education And Humanities</h1>
                  </div>
            
            </div>
            {/* D e p a r t m e n t   O f    S o c i  a l  S c i e n c e s*/}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="Social">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programmes
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                        <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Humanitarian Emergency and Disaster Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Arts in Development Studies
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Arts in Community Development
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Arts in Peace and Conflict Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Journalism and Mass Communication
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Public Administration and Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Social Work and Social Administration
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Science in Psychology and Counselling
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
          
                        </ul>
                        </div>
                  </div>

                  <div>
                        <ul className='md:pl-2 mx-auto md:mx-0'>
                        <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Journalism and mass Communication
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Development Studies
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Development Studies
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Social Work and Social Administration
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Public Administration and Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Counselling
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Certificate in Counselling
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                        </ul>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>

            {/*E d u c a t i o n   A n d  H u m a n i t i  e s*/}
            <div className=" hidden my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="education">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programmes
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                        <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Arts or Science with Education-Secondary
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Arts or Science with Education-Primary
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor in Early Childhood Development
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Education-Primary
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Early Child Development (ECD)
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                        </ul>
                        </div>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>
      </div>

      
    </div>
  );
}
