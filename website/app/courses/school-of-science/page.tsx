import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfScience() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
       
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Courses in the school of science" paragraph="" />
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Department Of Computing And Informatics
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Business Computing</li>
            <li>Bachelor of information Technology</li>
            <li>Bachelor of Library and information Science</li>
            <li>Bachelor of Science in Software Engineering</li>
            <li>Bachelor of Science in Network systems Administration</li>
            <li>Diploma in Information Technology</li>
            <li>Diploma in Computer Forensics</li>
            <li>Certificate in information Technology (UBTEB)</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Department Of Life And Physical Science
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Science in Biochemistry</li>
            <li>Bachelor of science in Statistics</li>
            <li>Diploma in Science Laboratory Technology</li>
            <li>Diploma in Biomedical Engineering and Technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
