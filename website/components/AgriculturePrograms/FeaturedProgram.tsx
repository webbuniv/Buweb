import React from "react"
import { ArrowRight } from 'lucide-react'

const FeaturedProgram: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Featured Program: Sustainable Agriculture</h2>
            <p className="text-lg mb-6 text-gray-600">
              Our Sustainable Agriculture program equips students with the knowledge and skills to develop
              environmentally friendly farming practices that ensure food security for future generations.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Cutting-edge research facilities",
                "Hands-on experience in our experimental farms",
                "Collaboration with industry partners",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
              <img
                src="/images/agric/cro.jpeg"
                alt="Sustainable Agriculture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Sustainable Agriculture</h3>
                <p>Shaping the future of farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProgram

