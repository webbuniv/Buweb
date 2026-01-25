import React from 'react';
import Image from "next/image";
import { BiX } from 'react-icons/bi';
import Link from "next/link"

interface AdvertProps {
  isadvertvisible: boolean;
        onClose: () => void;
        children?: React.ReactNode;
}

const Advert = ({isadvertvisible, onClose, children}:AdvertProps) => {
      if (!isadvertvisible) return null;
const handleclose = ()=>{
    onClose()
      
}

  return (
      < >
        
        

        <div className=" zoom-in  fixed z-40 inset-0 backdrop-blur-lg flex mt-[32%]  md:mt-[16%] w-full md:w-[60%] h-[44%] justify mx-auto rounded-3xl border border-black overflow-auto overflow-x-hidden bg-white " id="wrapper"  >                  
                        <div className='flex mx-auto justify-center bg-white w-full '  >
                        
                                        <div className='flex z-50 '>
                                        <button 
                                                style={{
                                                borderRadius: '50%',
                                                width: '30px',
                                                height: '30px',
                                                backgroundColor: 'black',
                                                borderColor:'black',
                                                color: 'white',
                                                fontSize: '20px',
                                                textAlign: 'center',
                                                lineHeight: '30px',
                                                position: 'absolute',
                                                right: '70px',
                                                top: '30px',
                                                }}
                                                onClick={handleclose}>
                                                <span className="text-white text-xl "><BiX className='text-3xl'/></span>
                                        </button>

                                        </div> 

                                        <div className="mx-[7%] w-full my-2 fade-in  " id='courses' > 
                                                    <h1 className='text-black md:font-bold md:text-2xl text-center ' >
                                                    We Are Hiring For 2026!
                                                        </h1> 
                                                        <div className='  mt-5 flex p-2 h-60 w-full  ' >
                                                                <div  className=' w-[50%] h-full md:flex rounded-md'>
                                                                        <Image src={"/images/advert_image.png"} alt='image.png' width={300} height={300} />
                                                                </div>
                                                              <div className='flex flex-col gap-6 my-[3%] w-[50%] ' >
                                                                <h1 className='flex text-black font-semibold ' >
                                                                      Applications are invited from suitably qualified candidates for the following vacant positions 
at Bugema University. 
                                                                </h1>
                                                                  <Link href="https://fra.cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/69763d9f003745fbf426/view?project=674dcf7b003d57db960a"  target="_blank" rel="noopener noreferrer">
                                                                <span className="text-black border  hover:bg-primary hover:border-white hover:text-white transition duration-500  border-black rounded-full p-2 ">Download the advert</span>
                                                                </Link>
                                                              </div>
                                                             
                                                        </div>
                                        </div>
                        </div>

            </div>
      </>    
  );
};

export default Advert;
