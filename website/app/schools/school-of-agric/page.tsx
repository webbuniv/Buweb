import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfAgric() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          dean="ASSOC. PROF. DAVID R. MUTEKANGA"
          deanImage={"/images/blog/author-03.png"}
          message="You are welcome to the School of Agricultural and Applied Sciences which is the niche of Bugema University. This is the basis of the economy not only in Uganda but also in most developing economies around the world. This school continues to make astronomical steps in working with local rural communities to positively change their livelihoods with minimal impact on the environment. The school welcomes both students and faculty who wish to learn, exchange knowledge, and collaborate with other faculties around the world not only to meet global sustainable development goals but to ensure the future of humanity."
          preamble="Agriculture contributes over 25% directly and 29% indirectly to Ugandaâ€™s GDP and provides income to over 75% of Ugandans. Modern agriculture is complex and only individuals who have gone through an extended period of preparation in agriculture can effectively participate and make a significant contribution in this sector. The logical basis of a specialized degree program in agricultural is the need to produce a vital mass of specialized professional in agriculture who can be producers and also provide the required skills for research, innovation and management of crises in agriculture. This specialized Bachelor of Science degree program will prepare and produce the essential manpower for sustainable agriculture, research and innovation of agribusiness for employment creation. The graduates will also be sufficiently qualified to assume responsibilities in government and the private sector and also set up their own agribusinesses to reduce on the increasing rate of unemployment in Uganda. Therefore, this proposed program is designed to contribute towards addressing specific setbacks to sustainable agricultural productivity, and national development through training and producing graduates with specialized skills in Biotechnology and Plant Breeding; Animal Production and Nutrition; Crop Protection and Management; Agronomy and Soil Fertility and Agribusiness Innovation and Management."
          goal="This school is designed to train and produce well-groomed scientists and technicians who are capable of working under varying and changing local and global environments in both developed and developing economies."
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Agricultural Sciences</li>
            <li>Department Of Environmental And Applied Sciences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
