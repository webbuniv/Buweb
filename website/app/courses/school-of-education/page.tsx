import SectionTitle from "@/components/Common/SectionTitle";
import Course from "@/components/course/Course";
import React from "react";

export default function SchoolOfEducation() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
      <Course
         tittle="Courses in the school of education"
         subtittle="School of Education"
         topImg=""
          
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        {/* <div className="md:pl-2">
          <SectionTitle title="Courses in the school of education" paragraph="" />
        </div> */}

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Social Sciences
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Humanitarian Emergency and Disaster Management</li>
            <li>Bachelor of Arts in Development Studies</li>
            <li>Bachelor of Arts in Community Development</li>
            <li>Bachelor of Arts in Peace and Conflict Management</li>
            <li>Bachelor of Journalism and Mass Communication</li>
            <li>Bachelor of Public Administration and Management</li>
            <li>Bachelor of Social Work and Social Administration</li>
            <li>Bachelor of Science in Psychology and Counselling</li>
            <li>Diploma in Journalism and mass Communication</li>
            <li>Diploma in Development Studies</li>
            <li>Diploma in Development Studies</li>
            <li>Diploma in Social Work and Social Administration</li>
            <li>Diploma in Public Administration and Management</li>
            <li>Diploma in Counselling</li>
            <li>Certificate in Counselling</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Education And Humanities
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Arts or Science with Education-Secondary</li>
            <li>Bachelor of Arts or Science with Education-Primary</li>
            <li>Bachelor in Early Childhood Development</li>
            <li>Diploma in Education-Primary</li>
            <li>Diploma in Early Child Development (ECD) </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
