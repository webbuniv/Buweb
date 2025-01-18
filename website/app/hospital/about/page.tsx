import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Bugema University Hospital</h1>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/hospital/two.jpg"
              alt="Bugema University Hospital"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Bugema University Hospital, our mission is to provide exceptional healthcare services
              to our community, fostering wellness and improving the quality of life for all our patients.
              We are committed to delivering compassionate care, advancing medical knowledge, and
              promoting health education.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
          <p className="text-lg text-gray-600 mb-6">
            Bugema University Hospital has been at the forefront of medical care
            in Uganda for over years. From our humble beginnings as a small clinic, we have grown
            into a comprehensive medical center, continuously adapting to the evolving healthcare needs
            of our community and embracing technological advancements in medicine.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Compassion: We treat every patient with kindness, empathy, and respect.</li>
            <li>Excellence: We strive for the highest standards in medical care and patient service.</li>
            <li>Innovation: We embrace new technologies and methods to improve patient outcomes.</li>
            <li>Integrity: We uphold the highest ethical standards in all our practices.</li>
            <li>Collaboration: We work together as a team to provide the best possible care.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

