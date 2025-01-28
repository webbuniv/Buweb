import SectionTitle from '@/components/Common/SectionTitle'
import Course from '@/components/course/Course'
import React from 'react'

export default function SchoolOfTheology() {
  return (
    <div className='mb-10'>
      <section className='mt-36 mx-10 mb-5'>
        <Course 
          tittle='Courses in the School of Theology'
          subtittle='The School of Theology is a place where students can learn about the Bible and theology'
          topImg={'/images/schools/theology.jpg'}
          />
      </section>

      <div className='flex flex-col items-start mx-auto md:pl-28 -mt-20'>

        {/* <div className='md:pl-2'>
          <SectionTitle 
            title='Courses in the school of theology' 
            paragraph=''/>
        </div> */}

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Theology
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Theology</li>
            <li>Diploma of Theology</li>
            <li>Certificate of Theology</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Religious Studies
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Arts in Religious with Options</li>
            <li>Development ministry</li>
            <li>Chaplaincy</li>
            <li>Evangelism And Church Growth</li>
            <li>Urban Ministry</li>
          </ul>
        </div>
      </div>

    </div>

  )
}
