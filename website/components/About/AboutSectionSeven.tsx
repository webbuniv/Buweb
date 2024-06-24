import Image from "next/image";

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
                src="/images/features/bu.jpg"
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
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                   Award-winning Careers and Employability Service
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                   Personal guidance and advice on career planning, interview technique and assessment centres.
                </p>
              </div>
              <div className="mb-9 flex-1">
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
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  
                  Volunteering and paid work opportunities
              </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                A chance to gain valuable and rewarding experience.
                </p>
              </div>
              <div className="mb-9 flex-1">
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
