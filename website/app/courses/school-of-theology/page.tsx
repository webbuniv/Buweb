import SectionTitle from '@/components/Common/SectionTitle'
import School from '@/components/school/School'
import React from 'react'

export default function SchoolOfTheology() {
  return (
    <div className='mb-10'>
      <section className='mt-36 mx-10 mb-5'>
        
      </section>

      <div className='flex flex-col items-start mx-auto md:pl-28'>

        <div className='md:pl-2'>
          <SectionTitle 
            title='Courses in the school of theology' 
            paragraph=''/>
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Theology</li>
            <li>Department Of Religious Studies</li>
          </ul>
        </div>
      </div>

    </div>

  )
}
