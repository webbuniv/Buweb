"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useAmp } from "next/amp";
import image from "@/public/images/nav/labs.jpg";
import Link from "next/link";

export default function SchoolOfScience() {

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
    <div className="overflow-hidden">
      <section className="my-20 mt-36 mx-10">
        <School
          tittle="Shool of Science and Technology"
          subtittle="Our Aim is to train and encourage our Learners to cope up with the continuosly changing and emerging technologies by giving them a hands on experience to make them problem solvers..."
          topImg={"/images/schools/lab1.jpg"}
          dean="DR. LOWU FRANCIS"
          deanImage={"/images/schools/commando.jpg"}
          message="As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems."
          preamble="The School of Science and Technology prepares professionals that can harness the potentials of computer and information sciences to provide relevant solutions. The School faculty and students are engaged in ongoing research projects and development of computer solutions in the areas of education, health, public administration, information management, ecommerce, and agriculture. The undergraduate and graduate programs offered in both Blended and Online Learning environments focus on Information Systems, Computer Networks Security and Systems Engineering."
          goal="Empowering Innovative Minds"
        />
      </section>

      <div className=" flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Departments In The Faculty" paragraph="" />
            </div>

            <div className=' flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="comphandler" style={{cursor:"pointer"}} onClick={handlecomputing}> Department Of Computing And Informatics</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="phyhandler" style={{cursor:"pointer"}} onClick={handlephysical}> Department Of Life And Physical Sciences</h1>
                  </div>
            
            </div>
            {/* C O M P U T I N G    A N D   I N F O R M A T I C S   I N F O R M A T I O N */}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="computing">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programs
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                  <ul className='flex flex-col space-y-5'>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Bachelor of Business Computing
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Bachelor of Information Technology
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Bachelor of Library and Information Science
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Bachelor of Science in Software Engineering
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Bachelor of Science in Network Systems Administration
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Diploma in Information Technology
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Diploma in Computer Forensics
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                        Certificate in Information Technology (UBTEB)
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
                        Programs
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                        <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Bachelor of Science in Biochemistry
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                     Bachelor of Science in Statistics
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                  Diploma in Science Laboratory Technology
                        <span className='absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded'>
                        Apply Now
                        </span>
                  </li>
                  </Link>
                  <Link href="https://apply.bugemauniv.ac.ug/">
                  <li className='relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2'>
                     Diploma in Biomedical Engineering and Technology
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
