"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import image from "@/public/images/nav/labs.jpg";
export default function SchoolOfGraduate() {

      const [computing, setComputing] = useState(true)
      const [physical, setphysical] = useState(false)

      const handlecomputing = ()=>{
            setComputing(true)
            setphysical(false)
            document.getElementById('computing').classList.remove('hidden')
            document.getElementById('comphandler').classList.add('active2')
            document.getElementById('physical').classList.add('hidden')
            document.getElementById('phyhandler').classList.remove('active2')
            
      };
      const handlephysical =()=>{
            setComputing(false)
            setphysical(true)
            document.getElementById('computing').classList.add('hidden')
            document.getElementById('physical').classList.remove('hidden')
            document.getElementById('comphandler').classList.remove('active2')
            document.getElementById('phyhandler').classList.add('active2')
      };

  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
        tittle="School of Graduate Studies"
        subtittle="The School of Graduate Studies (SGS) is the administrative body of the graduate programs"
        topImg=""
          dean="PROF. ISRAEL KIBIRIGE"
          deanImage={"/images/blog/author-03.png"}
          message="School of Graduate Studies at Bugema University offers advanced education and research in a novel process that creates knowledge looking at the bigger picture and probing the importance of discovering something new or facts chosen in the field of study. We are a self-sustaining graduate school producing skilled manpower for diverse development. And this runs along with the reason of your being here. At this level we expect you to gain higher level skills and more specialized understanding of your subject area. Graduate students are the keystones of a vibrant, research active university, threading together all aspects of campus life. Every day of graduate life is diverse and full of challenges, including teaching, conducting research, performing, writing, serving, and, yes, recreating. Graduate students are expected to be self-reliant, responsible for what you do and for insuring that you do the work that will be required of you. While we expect you to assume a new level of responsibility, please realize that you are not alone. If you find things difficult do not run away; please seek help. We encourage the faculty and the students to engage in social and scientific research aimed to enhance the development of society and its institutions. We reach out to the community, through direct and indirect communication, to disseminate information acquired by means of instruction and research through seminars, conferences, workshops, and different community service and spiritual programs. With the above obligation, I imagined a situation where graduate students display their skills to carry out quality research in order to meet their objectives. Thank you for your interest in graduate education at Bugema University. We hope that you will enjoy the opportunities to broaden your knowledge and grow with us. Best wishes, Dr. Rosette Kabuye Dean, School of Graduate Studies Bugema University."
          preamble="Bugema University prides itself in offering relevant accredited and chartered graduate programs. The graduate courses offered at the university are well selected to meet the demands of students, and the satisfaction of stakeholders and society. Many of the activities of the graduate school are research based. Students are motivated to be creative enough to initiate research-based activities which are geared towards finding solutions to challenges of the community.
        "
          goal="Provide access to post graduate studies to the community."
        />
      </section>

      <div className="flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Programs" paragraph="" />
            </div>

            <div className='flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="comphandler" style={{cursor:"pointer"}} onClick={handlecomputing}> PHD</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="phyhandler" style={{cursor:"pointer"}} onClick={handlephysical}> MBA</h1>
                  </div>
            
            </div>
            {/* C O M P U T I N G    A N D   I N F O R M A T I C S   I N F O R M A T I O N */}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="computing">
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
                  PhD in Educational Management 
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  PhD in Environmental Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  PhD in Rural Development
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

            {/*L I F E   A N D    P H Y S I C A L    S C I E N C E S*/}
            <div className=" hidden my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="physical">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programmes
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>

                        <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Public Administration and Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Procurement and Logistics
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Project Planning and Management 
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Postgraduate Diploma in Business Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Masters in Business Administration
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Masters in Education Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Postgraduate Diploma in Information Technology
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Masters of Science in Information Technology
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  
                              
                        </ul>
                        </div>
                  </div>

                  <div>
                        <ul className='flex flex-col space-y-5'>

                        <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Social Work
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Science in Counseling Psychology
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Postgraduate Diploma in Public Administration and
                              Management
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Arts in Development Studies
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>

                  <Link href="http://erms.bugemauniv.ac.ug/application">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Master of Public Health
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                        </ul>
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
            <li>Currently One Department In The faculty</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
