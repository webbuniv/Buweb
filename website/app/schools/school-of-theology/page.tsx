import School from '@/components/school/School'
import React from 'react'

export default function SchoolOfTheology() {
  return (
    <section className='my-20 mt-36 mx-10'>
      <School 
        dean='DR ANTHONY ACHIGA'
        deanImage={'/images/blog/author-03.png'}
        message='The School of Theology and Religious Studies believes that God is the Creator and Sustainer of the universe. In love He sent His Son Jesus Christ to atone for the sins of humanity. The same God has commissioned us to advance His work by pointing fallen human beings to the great sacrifice at Calvary in preparation for the return of our Lord and Savior Jesus Christ.'
        preamble='The school of Theology and Religious Studies exists to provide spiritual, academic, physical and social development in preparing pastors, evangelists, teachers, counselors, chaplains, leaders, community development promoters and others, for excellence in service of the Seventh-day Adventist Church and the world community. Areas of emphasis include the following: proclamation of the three angels message (Revelation 14:6-12), biblical based education, research and publication, and field practical skills.'
        goal='To prepare ministers of the gospel for effectiveness and efficiency in teaching, preaching, leadership and professional competence within the Seventh-day Adventist Church and the world at large.'/>
    </section>
  )
}
