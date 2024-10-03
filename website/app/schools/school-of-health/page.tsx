"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import image from "@/public/images/nav/labs.jpg";
import Link from "next/link";

export default function SchoolOfHealth() {

      const [nursing, setNursing] = useState(true)
      const [pub, setPub] = useState(false)

      const handlenursing = ()=>{
            setNursing(true)
            setPub(false)
            document.getElementById('nursing').classList.remove('hidden')
            document.getElementById('nursehandler').classList.add('active2')
            document.getElementById('public').classList.add('hidden')
            document.getElementById('publichandler').classList.remove('active2')
            
      };
      const handlepublic =()=>{
            setNursing(false)
            setPub(true)
            document.getElementById('nursing').classList.add('hidden')
            document.getElementById('public').classList.remove('hidden')
            document.getElementById('nursehandler').classList.remove('active2')
            document.getElementById('publichandler').classList.add('active2')
      };

  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          tittle="School of Health"
          subtittle="We  Strive to be a leading center of excellence, providing quality and holistic health care education and services in Uganda and beyond."
          topImg={"/images/schools/nurses1.jpg"}
          dean="DR MICHEAL KAYEMBA"
          deanImage={"/blank/blank.jpg"}
          message="I take this opportunity to welcome you to the school of health and allied sciences Bugema University. We are more than committed to producing world class medical experts. We shall take you from the class to the hospital for practical classes as we mold the best out of you. Feel welcome and be ready for the impact soon coming."
          preamble="The school health and allied sciences strives to be recognized as a Centre of Health Education for improvement of peopleâ€™s Wellbeing and providing high quality educational opportunities to students and health care professionals, and advancement of knowledge through scholarship, research and patient care and services."
          goal="Health is wealth"
        />
      </section>

      <div className=" flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Departments In The Faculty" paragraph="" />
            </div>

            <div className=' flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="nursehandler" style={{cursor:"pointer"}} onClick={handlenursing}> Department Of Nursing And Mid-Wifery</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="publichandler" style={{cursor:"pointer"}} onClick={handlepublic}> Department Of Public Health And Allied Sciences</h1>
                  </div>
            
            </div>
            {/* N u r s i n  g  A n d   M i d- W  i f e  r y*/}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="nursing">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programmes
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>

                        <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Nursing
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Midwifery
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Certificate in Nursing
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Certificate in Midwifery
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

            {/* P u b l i c   H e a l t h   A n d  A l l i e d  S c i e n c e s*/}
            <div className=" hidden my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="public">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programmes
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                              <li>Bachelor of Public Health</li>
                              <li>Bachelor of Biomedical Engineering</li>
                        </ul>
                        </div>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>
      </div>

      {/* <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Nursing And Mid-Wifery</li>
            <li>Department Of Public Health And Allied Sciences</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
