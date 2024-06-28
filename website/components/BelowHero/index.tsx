import Image from "next/image";
import { HiAcademicCap } from "react-icons/hi";
import { FaScroll } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import {IoClipboardOutline} from "react-icons/io5";
import {FaWpforms} from "react-icons/fa";
import {IoBookOutline} from "react-icons/io5";


const AboutSectionLife2 = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <div className="container mx-auto py-12">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4 lg:w-1/2 xl:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer rounded bg-blue-500">
        <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] text-center lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s ">

            <FaWpforms className="w-10 h-8  text-black dark:text-white items-center"/>

          <h3 className="mb-2 mt-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Admisions
          </h3>
          <p className="mb-4 text-base text-black ">
          Embark on your journey towards exellence.
          </p>
          <button className="px-6 py-2 text-white bg-red-400 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Apply Now
          </button>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer rounded bg-red-400">
        <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] text-center lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s">
        <FaMoneyCheckDollar className="w-10 h-8 text-black dark:text-white items-center"/>
          <h3 className="mb-2 mt-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Fees Structure
          </h3>
          <p className="mb-4 text-base text-black">
           Providing quality education that is affordable for all students. 
          </p>
          
          <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Explore
          </button>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer rounded bg-blue-500">
        <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] text-center lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s">
        <IoBookOutline className="w-10 h-8 text-black dark:text-white items-center"/>
          <h3 className="mb-2 mt-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Student Portal
          </h3>
          <p className="mb-4 text-base text-black dark:text-gray-300">
          Access all your information and notifications
          </p>
          <button className="px-6 py-2 text-white bg-red-400 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </button>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer rounded bg-red-400 ">
        <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s">
        <FaScroll className="w-10 h-8 text-black dark:text-white "/>
          <h3 className="mb-2 mt-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Programs
          </h3>
          <p className="mb-2 text-base text-black ">
          With over 100 academic programs delivering world-class education.
          </p>
          <button className="px-6 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </div>
      </div>
    </section>
  );
};

export default AboutSectionLife2;
