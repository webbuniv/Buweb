import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfGraduate() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Courses in the school of graduate" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Currently One Department In The faculty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}