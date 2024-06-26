import Image from "next/image";
import { BookOpenIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';
import { EyeIcon } from '@heroicons/react/solid';
import image from "../../public/images/features/bu.jpg";
import sport from "../../public/images/life/sport.jpg";
import mind from "../../public/images/life/mind.jpg";


const AboutSectionLife2 = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        
      <div className="">
          <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-6xl">
          150+ clubs and societies
          </h3>
          <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-1xl lg:text-xl xl:text-1xl">
              Whether your passion is sport or sustainability, you’re a foodie or keen on gaming, there are lots to choose from.
          </h3>
          <div className="flex flex-wrap -mx-4 mb-7">
              <div className="w-full px-4 lg:w-1/2 transition-transform duration-300 hover:scale-105 cursor-pointer ">
                <div
                  className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  <Image
                    src={image}
                    alt="about image"
                    className="w-full h-auto"
                  />
                  <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    A matter of debate.
                  </h3>
                  <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                    Join the debating society at Bugema University.
                  </p>
                  <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Bugema Debating Union
                  </button>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div
                  className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  <Image
                    src={mind}
                    alt="about image"
                    className="w-full h-auto"
                  />
                  <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Frame of mind.
                  </h3>
                  <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                    Bugema University Mind creates supportive events for students and fundraising for charities including Mind and Student Minds..
                  </p>
                  <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Bugema Mind Society
                  </button>
                </div>
              </div>
            </div>
          
            <div className="flex flex-wrap -mx-4 mt-7">
            <div className="w-full px-4 lg:w-1/2 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={sport}
                  alt="about image"
                  className="w-full h-auto"
                />
                <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sports at Bugema
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                 Sport at Bugema is for everyone. Whether you want to play for fun or train to compete, you will be joining a welcoming community where you can reach your personal best. 
                </p>
                <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Sports
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={image}
                  alt="about image"
                  className="w-full h-auto"
                />
                <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Educational Trips
                </h3>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                Educational trips at Bugema University provide students with practical, real-world experiences that enhance their academic learning and personal growth.
                </p>
                <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Bugema Trips
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
        <div className="flex flex-wrap mb-7 lg:w-1/2">
            
            <h1 className="text-body-color dark:text-white font-semibold text-center text-2xl md:text-3xl mt-8 md:mt-6 mb-4 md:mb-6 ml-20">
               Stand out spaces
            </h1>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:ml-20">
              Developing new ideas and putting them into words is easier when you have great places to work in. At Bugema University, we have industry-leading facilities to really bring your subject to life.
            </p>

        </div>
      <div className="flex flex-wrap justify-center gap-4">

      {/* Image 1 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 1"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Image 2 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 2"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Image 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 3"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Image 4 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 4"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>
      </div>
    
      <div className="flex flex-wrap justify-center gap-4">

      {/* Image 1 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 1"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Image 2 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 2"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Image 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 3"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Image 4 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="relative group overflow-hidden">
          <Image
            src={image}
            alt="Image 4"
            width={400}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-105"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSectionLife2;
