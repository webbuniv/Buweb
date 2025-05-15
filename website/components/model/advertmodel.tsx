import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import imagenew from "../../public/images/nav/IMG_9313.jpg";
import image from "../../public/images/nav/labs.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";
import Image from "next/image";
import { BiX } from 'react-icons/bi';
import Link from "next/link"
import { useEffect, useState } from "react";
import first_modal from "../Header/index";


const Advert = ({isadvertvisible, onClose, children}) => {
      if (!isadvertvisible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}
const keepAlive = () => {
      first_modal()
}
  return (
      < >
        
        

        <div className=" fade-in fixed z-40 inset-0 backdrop-blur-lg flex mt-[32%]  md:mt-[16%] w-full md:w-[60%] h-[44%] justify mx-auto rounded-3xl border border-black overflow-auto overflow-x-hidden bg-white " id="wrapper"  >                  
                        <div className='flex mx-auto justify-center bg-white w-full '  >
                        
                                        <div className='flex '>
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
                                                onClick={onClose}>
                                                <span className="text-white text-xl"><BiX className='text-3xl'/></span>
                                        </button>

                                        </div> 


                                        <div className="mx-[10%] w-full my-2 fade-in  " id='courses' > 
                                                    <h1 className='text-black md:font-bold md:text-2xl text-center ' >
                                                      We're Hiring! Join Our Team at Bugema University
                                                        </h1> 
                                                        <div className='items-center justify-center mt-12 flex gap-2 w-full  ' >
                                                                <div  className='hidden md:flex'>
                                                                        <Image src={"/images/banners/hiring.png"} alt='image.png' width={300} height={300} />
                                                                </div>
                                                              <div className='flex flex-col gap-2 ' >
                                                                <h1 className='flex text-black ' >
                                                                        We're expanding our team at Bugema University, and we're looking for talented individuals like you to be part of our journey!
                                                                </h1>
                                                                  <Link href="/docs/ADVERT-FOR-WEBSITE-MAY.pdf" target="_blank" rel="noopener noreferrer">
                                                                <span className="text-black bg-primary rounded-md p-2 ">Click here for Details</span>
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
