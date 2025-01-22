import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
          <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KJd3UzRb_Hs?si=8tVYFO25mDXV0Iy6&autoplay=1&loop=1&playlist=KJd3UzRb_Hs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            {/* <Image
              src="/images/hospital/two.jpg"
              alt="About Bugema University Hospital"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Hospital</h2>
            <p className="text-lg text-gray-600 mb-6">
              Bugema University Hospital is a state-of-the-art medical facility committed to providing
              exceptional healthcare services to our community. With a team of highly skilled medical
              professionals and cutting-edge technology, we strive to deliver compassionate care and
              promote overall well-being.
            </p>
            <Link href="/hospital/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

