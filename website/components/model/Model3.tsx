import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import imagenew from "../../public/images/nav/IMG_9313.jpg";
import image from "../../public/images/nav/labs.jpg";
import gate from "../../public/images/nav/gate.jpg";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import burundi from "../../public/images/nav/burundi.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";
import palm_girls1 from "../../public/images/nav/palm-girls1.jpg";
import { BiX } from 'react-icons/bi';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link';


const Model3 = ({is3visible, onClose, children}) => {
      if (!is3visible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}

const main = ()=>{
      let schools = document.querySelector('schools');
      document.getElementById('main').classList.add('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('courses').classList.remove('hidden');
      document.getElementById('contact').classList.remove('current');
      document.getElementById('why_bugema-data').classList.add('hidden');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('courses-more').classList.remove('hidden');
      document.getElementById('touch-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
      
}
const payments=()=>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.add('current');
      document.getElementById('fees').classList.remove('hidden');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('contact').classList.remove('current');
      document.getElementById('why_bugema-data').classList.add('hidden');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('fees-more').classList.remove('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      document.getElementById('touch-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
      
}
const touch = ()=>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('contact').classList.add('current');
      document.getElementById('why_bugema-data').classList.add('hidden');
      document.getElementById('get-in-touch').classList.remove('hidden');
      document.getElementById('touch-more').classList.remove('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
}
const why_bugema = () =>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('why_bugema').classList.add('current');+
      document.getElementById('contact').classList.remove('current');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('why_bugema-data').classList.remove('hidden');
      document.getElementById('touch-more').classList.add('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('why-bugema-more').classList.remove('hidden');


}

const handelScroll = () =>{
      document.addEventListener('scroll', function(){
            onClose();
      })
            // if (window.scrollY > 1){
            //       onClose();
            // };
      }

  return (
      <>
        <div className=" fade-in fixed z-40 inset-0 backdrop-blur-lg   flex ml-[5%] mt-[10%] w-[90%] h-[60%] mt-[10%] rounded-3xl border border-black bg-gradient-to-b from-white  to-transparent overflow-auto overflow-x-hidden " id="wrapper" onMouseLeave={onClose} >
                  
                     
                  <div id="programs">

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
                                    top: '20px',
                                    }}
                                    onClick={onClose}>
                                    <span className="text-white text-xl"><BiX className='text-3xl'/></span>
                              </button>

                        </div> 

                        <div className="vertical-line ml-12 my-12 fade-in "  > 
                              <div className="mr-2 my-5 slider slide--fast">
                              <Link href={"/"}>
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main ' > <span id='Main' className='animated href=""'> Main Campus</span></h1> 
                                    </Link>
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <Link href={"https://kc.bugemauniv.ac.ug/"}>
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' ><span id='Kampala' className='animated'>Kampala Campus</span></h1> 
                                    </Link>
                              </div>

                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold '> <span className='animated' id='Arua'> Arua Campus</span></h1> 
                              </div>

                             
                        
                        </div>
                  
                  </div>
                  <div className=" ml-12 my-[12%] fade-in " id='courses' > 

                         <h1  style={{marginRight:'5px'}} className='text-black text-center' >One institution, many worlds. <br/> Explore our Different Campuses and <br/> find your perfect fit ... </h1> 
                        
                  </div>


                  <div className=' ml-20 my-12 vertical-line  '>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-12 transform '  id='IT'>
                       
                        {/* ###============= C A M P U S E S   M O R E =================### */}
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in-slow '>
                                          <Image src={gate} alt='img' width={350} height={450} className="-ml-5  "/>
                              </div>
                              
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='new-arr change-on-hover2 text-black'> Study  <FaArrowRight className='new-arr'/></h1>
                                    
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='new-arr change-on-hover2 text-black'> Study  <FaArrowRight className='new-arr'/></h1>      

                        </div>
                          
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model3;