"use client";
import Image from "next/image";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import image from "../../public/images/nav/labs.jpg";
import scie from "../../public/images/scienceTech/scie.png";
import { useEffect, useState } from "react";

const School = ({
  tittle, 
  subtittle,  
  topImg,
  dean,
  deanImage,
  message,
  preamble,
  goal,
  mb = "10px",
}: {
  tittle:string;
  subtittle:string;
  topImg:string;
  dean: string;
  deanImage: string;
  message: string;
  preamble: string;
  goal: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {

      const [firstslide, SetFirstslide] = useState(false);
      const [secondslide, SetSecondslide] = useState(false);
      const [thirdslide, SetThirdslide] = useState(false);
      const [forthslide, SetForthslide] = useState(false);

  return (
      
      <div className="">

      
            

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
   
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
                              {/* Item 1  */}
                              <div  className="hidden md:block duration-700 ease-in-out" data-carousel-item>
                                    <div className="overflow-hidden relative -my-10 bg-black w-full left-0" >
                                          <div className="absolute justify-center ml-[2%] my-[24%]"> 
                                                <h1 className="font-bold text-start text-xs text-white md:text-7xl">
                                                      {tittle} 
                                                </h1>
                                                <h1 className=" hidden my-5 text-start  text-white md:text-3xl md:block ">{subtittle}</h1>
                                          </div>
                              
                                          <Image src={topImg} alt='img' objectFit="contain" width={1920} height={500} className="opacity-50 "/>
      
                                    </div>

                              </div> 
                              {/* Item 2  */}
                              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                              <Image src={image} alt='img' objectFit="contain" width={1920} height={500} className="opacity-50 "/>
                              </div>
                              {/* Item 3  */}
                              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    
                              </div>
                              {/* Item 4  */}
                              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    
                              </div>
                              {/* Item 5  */}
                              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    
                              </div>
                        </div>
                  
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                  
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                    <span className="sr-only">Previous</span>
                              </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="sr-only">Next</span>
                              </span>
                        </button>
                  </div>

            <div className=" overflow-hidden md:overflow-auto flex flex-col space-y-12">
                  

                  <div className=" my-24 flex flex-col gap-2">

            
                        {/* Dean's Message section div */}
                        <div
                        className={`wow mt-20 fadeInUp w-full gap-16 max-w-full justify-center items-center  md:flex ` }
                        data-wow-delay=".1s"
                        style={{ marginBottom: mb }}>

                              <div className="-my-10 text-start flex-col ml-[10%] items-center  md:text-start -mt-12 md:w-[90%] md:px-6">
                                    <h2 className="mb-4 text-2xl font-bold  !leading-tight text-[#0000FF]/70 dark:text-white sm:text-4xl md:text-[45px]">
                                          {goal}
                                    </h2>
                                    <p className=" text-base !leading-relaxed text-black md:text-lg ">
                                          {preamble}
                                    </p>
                              </div>

                              

                              <div className=" hidden md:block bg-dark flex ml-[4%] mr-[2%]" >
                                    <div className="absolute right-1 z-40  mr-34 -mt-8">
                                          <Image src={scie} alt="dean" layout="intrisic" width={400} height={700} className="mr-5" />
                                          
                                    </div>

                                    <Image src={image} alt="dean" layout="intrisic" width={1000} height={500} className="" />
                                    
                              </div>

                              


                        </div>

                        <div
                        className={` my-24 wow fadeInUp w-full flex flex-col md:flex-row justify-center items-center mx-auto`}
                        data-wow-delay=".1s" style={{ marginBottom: mb }}>

                              <div className=" flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={400} height={200} />

                                    <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/70 dark:text-white sm:text-4xl md:text-[45px]">
                                          Dean
                                    </h2>
                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                              </div>

                              <div className="  flex flex-col items-center text-center md:text-start -mt-10 md:w-[90%] md:px-6">
                                    <p className="text-base !leading-relaxed text-body-color md:text-lg">
                                          {message}
                                    </p>
                              </div>

                              


                        </div>
                        <div >
                        <h1 className="text-center text-4xl font-bold text-dark"> Lecturers</h1>
                        </div>
                        {/* L E C T U R E R S */}
                        <div className="my-10 flex grid grid-cols-1  md:grid grid-cols-4 gap-1">
                              
                              <div className=" bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                                          
                                    
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>

                              <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
                                    <Image src={deanImage} alt="dean" width={200} height={200} />

                                    <h1 className="mb-4 text-body-color">{dean}</h1>
                                    <h2 className=" mb-4 text-3xl font-bold !leading-tight text-white/70 dark:text-white sm:text-4xl md:text-[30px]">
                                          qualification
                                    </h2>
                              </div>


                        </div>

                  </div>

                  
            </div>
      </div>


    
  );
};

export default School;
