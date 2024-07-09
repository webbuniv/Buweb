"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import image from "@/public/images/nav/labs.jpg";
import Link from "next/link";

export default function SchoolOfBusiness() {

      const [accounting, setAccounting] = useState(true)
      const [management, setManagement] = useState(false)

      const handleaccounting = ()=>{
            setAccounting(true)
            setManagement(false)
            document.getElementById('accounting').classList.remove('hidden')
            document.getElementById('accounthandler').classList.add('active2')
            document.getElementById('management').classList.add('hidden')
            document.getElementById('managehandler').classList.remove('active2')
            
      };
      const handlephysical =()=>{
            setAccounting(false)
            setManagement(true)
            document.getElementById('accounting').classList.add('hidden')
            document.getElementById('management').classList.remove('hidden')
            document.getElementById('accounthandler').classList.remove('active2')
            document.getElementById('managehandler').classList.add('active2')
      };

  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          tittle="School of Business"
          subtittle="The School of Business is a leading business school in the country. It is a center"
          topImg=""
          dean="DR. LUBOWA MARTIN"
          deanImage={"/images/blog/author-03.png"}
          message="As business times evolve, so are the skills needed to run such environments. The school of business Bugema University is always evolving to meet the current business trends. We shall equip you with the necessary skills in the areas of accounting, procurement, and management. Your decision to join us is a perfect one. Looking forward to serving and preparing you for a better future."
          preamble="The School of Business believes in integrity and excellence in business dealings. It is therefore dedicated to the education and development of individuals in the region and beyond. These will become business leaders of both private and public organizations through outstanding business-oriented research, instruction, and service. Therefore, the school endeavors to train and produce human resources that are not only professionals but also morally upright."
          goal="The goal of the School of Business is to train efficient and effective future professionals who integrate integrity and sound business and organizational functions and who are able to combine knowledge with analytical and practical skills in order to accurately define problems, find viable solutions, and implement desirable decisions."
        />
      </section>

      <div className=" flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Departments In The Faculty" paragraph="" />
            </div>

            <div className=' flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="accounthandler" style={{cursor:"pointer"}} onClick={handleaccounting}> Department Of Accounting and Finance</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="managehandler" style={{cursor:"pointer"}} onClick={handlephysical}> Department Of Management</h1>
                  </div>
            
            </div>
            {/* D e p a r t m e n t    O f   A c c o u n t i n g   A n d   F i n a n c e */}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="accounting">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programs
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                              <li>Bachelor of Business Administration (Accounting)</li>
                              <li>Bachelor of Science in Finance and Banking</li>
                              <li>Bachelor of Science in Accounting</li>
                              <li>Bachelor of Business Administration in Insurance</li>
                              <li>Diploma in Accounting</li>
                        </ul>
                        </div>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>

            {/*D e p a  r t me  n t   O f   M a n a g e m  e n t*/}
            <div className=" hidden my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="management">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programs
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                        <li>Bachelor of Secretarial Science and office Administration</li>
                        <li>Bachelor of Business Administration in Marketing</li>
                        <li>Bachelor of Business Administration in management</li>
                        <li>Bachelor of Arts in Economics</li>
                        <li>Bachelor of Entrepreneurship</li>
                        <li>Bachelor of Procurement And Supply Chain Management</li>
                        <li>Bachelor of Business Administration in project planning And Grant Management</li>
                        <li>Bachelor of Human Resource Management</li>
                        <li>Diploma in Management</li>
                        <li>Diploma in Office Administration</li>
                        <li>Diploma in Human Resource Management</li>
                        <li>Diploma in Procurement and Supply Chain Management</li>
                  
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
