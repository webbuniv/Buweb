import SectionTitle from "@/components/Common/SectionTitle";
import Course from "@/components/course/Course";
import React from "react";

export default function SchoolOfBusiness() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <Course
          tittle="Courses in the School of Business"
          subtittle="The School of Business is a leading business school in the country. It is a center"
          topImg=""
          />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        {/* <div className="md:pl-2">
          <SectionTitle title="Courses in school of business" paragraph="" />
        </div> */}

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Accounting And Finance
      </h3>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Business Administration (Accounting)</li>
            <li>Bachelor of Science in Finance and Banking</li>
            <li>Bachelor of Science in Accounting</li>
            <li>Bachelor of Business Administration in Insurance</li>
            <li>Diploma in Accounting</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Management
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
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
    </div>
  );
}
