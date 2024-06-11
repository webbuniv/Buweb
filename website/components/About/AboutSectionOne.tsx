import Image from "next/image";
// import SectionTitle from "../Common/SectionTitle";
import im3 from "../../public/images/features/reg.jpg";
import './style.css';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 ">

              {/* Left side container */}
              <div className="flex flex-col md:space-x-4 space-y-2 " >
                
                  {/* Title and subtitle container */}
                  <div className="px-4">
                    <p className="text-base !leading-relaxed text-body-color md:text-lg">
                    Research and innovation
                    </p>
                    <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
                    We strive to achieve an inclusive, people-centred culture for our community of researchers
                    </h2>
                  </div>

                  {/* Buttons container */}
                  <div className="grid gap-x-5 gap-y-8 md:grid-cols-1">
                  <div className="relative">
                    <div className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold dark:text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer">
                      <h1 className="text-body-color dark:text-white">
                        Research strengths
                      </h1>
                    </div>
                    {/* Pointer */}
                    <div className="absolute w-0 h-0 border-t border-transparent border-solid border-primary bottom-0 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <div className="relative">
                      <div
                        className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                        
                      >
                      <h1 className=" text-body-color dark:text-white">
                      REF2021 results
                      </h1>
                      </div>
                        {/* Pointer */}
                         <div className="absolute w-0 h-0 border-t border-transparent border-solid border-primary bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="relative">
                      <div
                        className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                      >
                      <h1 className=" text-body-color dark:text-white"> 
                        Impact
                      </h1>
                      </div>
                        {/* Pointer */}
                        <div className="absolute w-0 h-0 border-t border-transparent border-solid border-primary bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div>
                      <div
                        className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                      >
                      <h1 className=" text-body-color dark:text-white"> 
                         Business and partnerships
                      </h1>
                      </div>
                      {/* Pointer */}
                      <div className="absolute w-0 h-0 border-t border-transparent border-solid border-primary bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
              </div>

              {/* Right side container */}
              <div className="containerr relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-center animate-y-translation mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[30px]">
                    <h2>Bugema University research</h2>
                  </div>
                </div>
                <Image
                  className="img1"
                  src={im3}
                  alt="Bugema University"
                  width="600"
                  height="150"
                />
              </div>     
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionOne;
