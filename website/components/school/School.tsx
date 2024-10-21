import Image from "next/image";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import image from "../../public/images/nav/labs.jpg";
import scie from "../../public/images/scienceTech/scie.png";
import { Carousel } from "flowbite-react";

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
  return (
      
      <div className="w-screen -ml-12 -my-14">
            
            <div className="w-full bg-black">
                  <Carousel data-carousel="slide">
                        <div className="overflow-hidden rounded-lg relative -my-10 top-0 left-0 bg-black w-full " >
                              <div className="absolute justify-center ml-[2%] my-[24%]"> 

                                    <h1 className="font-bold text-start text-xs text-white md:text-7xl">
                                          {tittle} 
                                    </h1>
                                    <h1 className=" hidden my-5 text-start  text-white md:text-3xl md:block ">{subtittle}</h1>
                              </div>
                              

                              <img src={topImg} alt='img' width={1920} height={500} className="opacity-50 " />
                        
                        </div>

                        <div className="overflow-hidden rounded-lg relative -my-10 top-0 left-0 bg-black w-full " >
                              <div className="absolute justify-center ml-[2%] my-[24%]"> 
                                    <h1 className="font-bold text-start text-xs text-white md:text-7xl">
                                          {tittle} 
                                    </h1>
                                    <h1 className=" hidden my-5 text-start  text-white md:text-3xl md:block ">{subtittle}</h1>
                              </div>
                              
                              <Image src={image} alt='img' objectFit="contain" width={1920} height={500} className="opacity-50 "/>
                        
                        </div>
                  </Carousel>
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
                                    <p className="text-base !leading-relaxed md:text-lg">
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


                              {/* <div className="bg-dark flex flex-col ml-[10%] justify-center items-center">
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
                              </div> */}

                        </div>

                  </div>

            </div>
      </div>

  );
};

export default School;
