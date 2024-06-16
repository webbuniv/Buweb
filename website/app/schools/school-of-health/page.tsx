import School from '@/components/school/School'
import React from 'react'

export default function SchoolOfHealth() {
  return (
    <section className='my-20 mt-36 mx-10'>
      <School 
        dean='DR MICHEAL KAYEMBA'
        deanImage={'/images/blog/author-03.png'}
        message='I take this opportunity to welcome you to the school of health and allied sciences Bugema University. We are more than committed to producing world class medical experts. We shall take you from the class to the hospital for practical classes as we mold the best out of you. Feel welcome and be ready for the impact soon coming.'
        preamble='The school health and allied sciences strives to be recognized as a Centre of Health Education for improvement of peopleâ€™s Wellbeing and providing high quality educational opportunities to students and health care professionals, and advancement of knowledge through scholarship, research and patient care and services.'
        goal='To be a leading center of excellence, providing quality and holistic health care education and services in Uganda and beyond.'/>
    </section>
  )
}
