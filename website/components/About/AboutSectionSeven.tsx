import Image from "next/image";
import { BookOpenIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';
import { EyeIcon } from '@heroicons/react/solid';
import image from "../../public/images/features/bu.jpg";


const AboutSectionSeven = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={image}
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Careers
            </h3>
            <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="mb-9 flex-1">
                <StarIcon className="w-12 h-12 text-black dark:text-white" />
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                   Award-winning Careers and Employability Service
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                   Personal guidance and advice on career planning, interview technique and assessment centres.
                </p>
              </div>
              <div className="mb-9 flex-1">
                <EyeIcon className="w-12 h-12 text-black dark:text-white" />
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                   Accredited programmes
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Many subject areas offer professionally accredited programmes.
                </p>
              </div>
            </div>

            <div className="wow fadeInUp flex max-w-[470px] space-x-6" data-wow-delay=".2s">
              <div className="mb-9 flex-1">
              <GlobeAltIcon className="w-12 h-12 text-black dark:text-white" />
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  
                  Volunteering and paid work opportunities
              </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                A chance to gain valuable and rewarding experience.
                </p>
              </div>
              <div className="mb-9 flex-1">
                <BookOpenIcon className="w-12 h-20 text-black dark:text-white" />
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  
                    Career planning
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We will help you put a plan in place to reach your goals with support and advice when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div className="flex flex-wrap mb-7 lg:w-1/2 justify-center">
            
            <h1 className="text-body-color dark:text-white font-semibold text-center text-2xl md:text-3xl mt-8 md:mt-6 mb-4 md:mb-6 ml-20">
               Stand out spaces
            </h1>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Developing new ideas and putting them into words is easier when you have great places to work in. At Bugema University we have industry-leading facilities to really bring your subject to life.
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

export default AboutSectionSeven;
