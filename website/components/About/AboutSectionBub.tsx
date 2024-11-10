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

    <div className="flex flex-col lg:flex-row items-center gap-10 mt-[-300px] lg:mt-[-250px]">
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

  <div className="w-full px-2 lg:w-1/2 h-[500px] mt-[100px] lg:mt-5">
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

      <div className="flex flex-col lg:flex-row items-center gap-10 mt-[120px] lg:-mt-40">
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
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-[-350px] lg:mt-5">
            {/* <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Blended Learning
            </h3> */}
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">Currently, Bugema University offers a wide range of undergraduate programs in
              areas of Health Sciences, Natural Sciences, Education, Theology and religious studies,
              Social Sciences, Business and Computing and informatics. At Graduate studies level,
              the programs include Business Administartion, Development Studies, Counseling
              Psychology, Public Health, Education, Computer Science, Social Work and Social
              Administration. Furthermore, the Graduate School offers PhD programs in Rural
              Development, Environmental Management and Education.</p>
              
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-[10px] lg:-mt-[250px] mb-[50px] lg:-mb-[250px]">
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Aim & Objectives
            </h3>
            <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Bugema University aims to develop the whole person; therefore, the following
                    objectives reflect this holistic approach:
                  </li>
                  <li>
                    To provide academic programs which will allow the students to acquaint themselves
                    with various fields of knowledge and to acquire skills that will facilitate personal,
                    social, academic, and professional development in order to meet individual and
                    societal demands.
                  </li>
                  <li>
                    To instill in the students an unswerving allegiance to the principles of Christian
                    faith and a sense of personal responsibility so that they are prepared to render useful
                    service to God and to humanity.
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-[50px] lg:mt-10">
            <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
            <div className="flex-1">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                  To lay emphasis on applied research relevant to the development needs of the
                  community, including encouraging research leading to the development of patents.
                  </li>
                  <li>
                  To encourage all faculties to devote part of their time to research for publication in
                  internationally recognized journals.
                  </li>
                  <li>
                  To select its students solely on the basis of merit while taking cognizance of the need
                  to apply special criteria to potentially able but disadvantaged students.
                  </li>
                  <li>
                  To continue upgrading the quality of its teaching, research and administrative staff
                  through vigorous staff development and staff appraisal schemes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionBub;
