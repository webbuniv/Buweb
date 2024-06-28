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
        <h3 className="mb-2 mt-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-4xl text-center">
           Excellence in research, teaching, and medical care
        </h3>
        <div className="flex items-center gap-10 mt-8 -mb-8">
          <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={image}
              alt="Bugema University"
              className="w-[500px] h-[300px]"
            />
          </div>
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-8">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Professional Courses
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className=""> We offer a number of professional courses across our faculties. The Department of Computing and Technology offers certifications from CISCO like CCNA, CCNP, and from Microsoft, the department provides MCSE, MCSA. The School of Business prepares students for CPA and other accounting professional courses. Our Nursing students are assessed by the Uganda Nurses And Midwifery Examination Board (UNMEB).
              </p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Explore more
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 -mt-20">
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Expert Lecturers
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">The university treasures the quality of it&apos;s products, and for that reason, we hire the quality and experienced lecturers to train and produce the quality for our students. Our lecturers are associated with industry enterprises which helps them get the market experience that they instil in our students. Research is a core role for our lecturers to keep producing relevant knowledge for the market.</p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Explore more
              </button>
              </div>
            </div>
          </div>
          <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={image}
              alt="Bugema University"
              className="w-[500px]"
            />
          </div>
        </div>
      <div className="flex items-center gap-10 -mt-20">
         <div
              className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              data-wow-delay=".15s" 
            >
              <Image
                src={image}
                alt="Bugema University"
                className="w-[500px]"
              />
          </div>
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Blended Learning
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">Our blended learning programs combine traditional classroom instruction with interactive online components, empowering students to engage with course materials, collaborate with peers. Our E-Learning system is available all the time to cater for those that may be in different time zones. Our support team will take you step by step on how to get the best from the platform. Pay a visit to our E-Learning Platform.</p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Explore more
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10 -mt-20">
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Faculty-Student Interaction
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">We believe in creating relationships that last with our clients. The institution has academic families where each student is assigned to a mentor. This increases the bond between our students and lecturers. Since students are let free to interact with the lecturers, this gives them a chance to be well prepared for the market challenges ahead of them. This enriches their (Students) career readiness as well.</p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Explore more
              </button>
              </div>
            </div>
          </div>
          <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={image}
              alt="Bugema University"
              className="w-[500px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 -mt-20">
          <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
             Worship
            </h3>
           <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="flex-1">
              <p className="">We understand the importance of holistic development and the role of spirituality in our students&apos; lives. We provide a nurturing environment that fosters personal growth and offers opportunities for spiritual enrichment. Our university offers worship services and spaces that cater to diverse religious and spiritual needs. Students can engage in prayer, meditation, and other spiritual activities to promote a sense of community, mindfulness, and well-being.</p>
              <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
                Explore more
              </button>
              </div>
            </div>
          </div>
          <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={image}
              alt="Bugema University"
              className="w-[500px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 -mt-20">
        <div
            className="wow h-[500px] fadeInUp relative mx-auto text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-wow-delay=".15s" 
          >
            <Image
              src={image}
              alt="Bugema University"
              className="w-[500px]"
            />
        </div>
        <div className="w-full px-2 lg:w-1/2 h-[500px] mt-5">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Professional Certificate
          </h3>
          <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
            <div className="flex-1">
            <p className="">We believe in equipping our students with the necessary skills and credentials to excel in their chosen professions. As part of our commitment to professional development, we offer a range of professional certification programs. These certifications are designed to enhance students&apos; expertise, improve their marketability, and demonstrate their proficiency in specific areas of study.</p>
            <button className="bg-gray-700 mt-12 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-300 transition-colors duration-300 ease-in-out">
              Explore more
            </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap items-center -mx-4 -mt-12">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] text-center lg:m-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              data-wow-delay=".15s"
            >
              <Image
                src={image}
                alt="about image"
                fill
                className="-mt-7"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-5 mt-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Careers
            </h3>
            <div className="wow fadeInUp flex space-x-6" data-wow-delay=".2s">
              <div className="mb-9 flex-1">
                {/* <StarIcon className="w-12 h-12 text-black dark:text-white" /> */}
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
    </section>
  );
};

export default AboutSectionSeven;
