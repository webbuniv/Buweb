"use client";
import Image from 'next/image';
import SectionTitle from '@/components/Common/SectionTitle'
import School from '@/components/school/School'
import React from 'react'
import image from "@/public/images/nav/labs.jpg";
import { useState } from "react";

export default function SchoolOfTheology() {

      const [theology, setTheology] = useState(true)
      const [religious, setReligious] = useState(false)

      const handletheology = ()=>{
            setTheology(true)
            setReligious(false)
            document.getElementById('theology').classList.remove('hidden')
            document.getElementById('theologyhandler').classList.add('active2')
            document.getElementById('religious').classList.add('hidden')
            document.getElementById('religioushandler').classList.remove('active2')
            
      };
      const handlereligious =()=>{
            setTheology(false)
            setReligious(true)
            document.getElementById('theology').classList.add('hidden')
            document.getElementById('religious').classList.remove('hidden')
            document.getElementById('theologyhandler').classList.remove('active2')
            document.getElementById('religioushandler').classList.add('active2')
      };
  return (
    <div className='mb-10'>
      <section className='mt-36 mx-10 mb-5'>
        <School 
          tittle='School of Theology'
          subtittle='The School of Theology is a place where students can learn about the Bible and theology'
          topImg={'/images/schools/theology.jpg'}
          dean='DR ANTHONY ACHIGA'
          deanImage={'/images/schools/Achiga.jpg'}
          message='The School of Theology and Religious Studies believes that God is the Creator and Sustainer of the universe. In love He sent His Son Jesus Christ to atone for the sins of humanity. The same God has commissioned us to advance His work by pointing fallen human beings to the great sacrifice at Calvary in preparation for the return of our Lord and Savior Jesus Christ.'
          preamble='The school of Theology and Religious Studies exists to provide spiritual, academic, physical and social development in preparing pastors, evangelists, teachers, counselors, chaplains, leaders, community development promoters and others, for excellence in service of the Seventh-day Adventist Church and the world community. Areas of emphasis include the following: proclamation of the three angels message (Revelation 14:6-12), biblical based education, research and publication, and field practical skills.'
          goal='I Will Go.'/>
      </section>


      <div className=" flex flex-col gap-2 justify-center mx-auto ">
            <div className="  md:pl-2">
            <SectionTitle title="Departments In The Faculty" paragraph="" />
            </div>

            <div className=' flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]'>

                  <div className=" ">
                        <h1 className=" active2 text-xs font-bold text-body-color md:text-xl  " id="theologyhandler" style={{cursor:"pointer"}} onClick={handletheology}> Department Of Theology</h1>
                  </div>

                  <div className=" ">
                        <h1 className="text-body-color text-xs font-bold md:text-xl " id="religioushandler" style={{cursor:"pointer"}} onClick={handlereligious}> Department Of Religious Studies</h1>
                  </div>
            
            </div>
            {/* D e p a r t m e n t   O f   T h e o l o g y */}
            <div className="my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="theology">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programs
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                        <li>Bachelor of Theology</li>
                        <li>Diploma of Theology</li>
                        <li>Certificate of Theology</li>
                              
                        </ul>
                        </div>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>

            {/* R e l i g i o u s   S t u d i e s */}
            <div className=" hidden my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%]" id="religious">
                  <div className="bg-blue-100">
                        <h1 className="px-2 py-5">
                        As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.
                        </h1>
                        <h3 className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                        Programs
                        </h3>
                        <div className='md:pl-2 mx-auto md:mx-0'>
                        <ul className='flex flex-col space-y-5'>
                        <li>Bachelor of Arts in Religious with Options</li>
                        <li>Development ministry</li>
                        <li>Chaplaincy</li>
                        <li>Evangelism And Church Growth</li>
                        <li>Urban Ministry</li>
                              
                        </ul>
                        </div>
                  </div>

                  <div>
                        <Image src={image} alt='img' objectFit="contain" width={1920} height={500} />
                  </div>
                        
            </div>
      </div>

      

    </div>

  )
}
