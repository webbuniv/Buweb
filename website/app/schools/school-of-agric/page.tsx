"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";
import { useState } from "react";
import Image from "next/image";
export const image = "/images/nav/labs.jpg";

export default function SchoolOfAgric() {
      const [Agriculture, setAgriculture] = useState(true)
      const [physical, setphysical] = useState(false)

      const handleAgricultural = ()=>{
            setAgriculture(true)
            setphysical(false)
            document.getElementById('Agriculture').classList.remove('hidden')
            document.getElementById('Agrichandler').classList.add('active2')
            document.getElementById('Environment').classList.add('hidden')
            document.getElementById('Envhandler').classList.remove('active2')
            
      };
      const handlephysical =()=>{
            setAgriculture(false)
            setphysical(true)
            document.getElementById('Agriculture').classList.add('hidden')
            document.getElementById('Environment').classList.remove('hidden')
            document.getElementById('Agrichandler').classList.remove('active2')
            document.getElementById('Envhandler').classList.add('active2')
      };

  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
         tittle="School of Agriculture and Applied Sciences"
         subtittle="This school is designed to train and produce well-groomed scientists and technicians who are capable of working under varying and changing local and global environments in both developed and developing economies."
         topImg={"/images/schools/agric.jpg"}
          dean="ASSOC. PROF. DAVID R. MUTEKANGA"
          deanImage={"/images/blog/author-03.png"}
          message="You are welcome to the School of Agricultural and Applied Sciences which is the niche of Bugema University. This is the basis of the economy not only in Uganda but also in most developing economies around the world. This school continues to make astronomical steps in working with local rural communities to positively change their livelihoods with minimal impact on the environment. The school welcomes both students and faculty who wish to learn, exchange knowledge, and collaborate with other faculties around the world not only to meet global sustainable development goals but to ensure the future of humanity."
          preamble="Agriculture contributes over 25% directly and 29% indirectly to Ugandaâ€™s GDP and provides income to over 75% of Ugandans. Modern agriculture is complex and only individuals who have gone through an extended period of preparation in agriculture can effectively participate and make a significant contribution in this sector. The logical basis of a specialized degree program in agricultural is the need to produce a vital mass of specialized professional in agriculture who can be producers and also provide the required skills for research, innovation and management of crises in agriculture. This specialized Bachelor of Science degree program will prepare and produce the essential manpower for sustainable agriculture, research and innovation of agribusiness for employment creation. The graduates will also be sufficiently qualified to assume responsibilities in government and the private sector and also set up their own agribusinesses to reduce on the increasing rate of unemployment in Uganda. Therefore, this proposed program is designed to contribute towards addressing specific setbacks to sustainable agricultural productivity, and national development through training and producing graduates with specialized skills in Biotechnology and Plant Breeding; Animal Production and Nutrition; Crop Protection and Management; Agronomy and Soil Fertility and Agribusiness Innovation and Management."
          goal="The Land a Resource"
        />
      </section>

      <div className=" flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Departments In The Faculty" paragraph="" />
            </div>

            <div className=' flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="Agrichandler" style={{cursor:"pointer"}} onClick={handleAgricultural}> Department Of Agricultural Sciences</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="Envhandler" style={{cursor:"pointer"}} onClick={handlephysical}> Department Of Environmental And Applied Sciences</h1>
                  </div>
            
            </div>
            {/* A G R I C U L T U R A L    S C I E N C E S*/}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="Agriculture">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>

            {/*E n v i r o n m e n t a l     A n d   A p p l i e d   S c i e n c e s*/}
            <div className=" hidden my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="Environment">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>
      </div>

      
    </div>
  );
}
