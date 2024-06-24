import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfScience() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          dean="DR. LOWU FRANCIS"
          deanImage={"/images/blog/author-03.png"}
          message="As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems."
          preamble="The School of Science and Technology prepares professionals that can harness the potentials of computer and information sciences to provide relevant solutions. The School faculty and students are engaged in ongoing research projects and development of computer solutions in the areas of education, health, public administration, information management, ecommerce, and agriculture. The undergraduate and graduate programs offered in both Blended and Online Learning environments focus on Information Systems, Computer Networks Security and Systems Engineering."
          goal="To produce quality human resource capital that will steer the continent into the next industrial revolution."
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Computing And Informatics</li>
            <li>Department Of Life And Physical Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
