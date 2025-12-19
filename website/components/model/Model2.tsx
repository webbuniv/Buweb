import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import imagenew from "../../public/images/nav/IMG_9313.jpg";
import image from "../../public/images/nav/labs.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";

import Image from "next/image";
import { BiX } from 'react-icons/bi';
import Link from 'next/link';


const Model2 = ({isssvisible, onClose, children}) => {
      if (!isssvisible) return null;
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
  return (
      <>
        

            <div className=" fade-in fixed right-[26%] z-40  flex rounded-lg    w-[10%]   shadow-lg overflow-auto overflow-x-hidden
             bg-white" id="wrapper" onMouseLeave={onClose}  >
                  
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
                                    right: '10px',
                                    top: '5px',
                                    }}
                                    onClick={onClose}>
                                    <span className="text-white text-xl"><BiX className='text-3xl hover:rotate-90 transition-transform duration-300 '/></span>
                              </button>

                        </div> 

                  
                  </div>
                  <div className="mx-auto  my-24  " id='courses' style={{marginTop:'9%'}}> 
                        <ul>
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <Link href={'/publications'}>
                                          <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Publications </h1> 
                                    </Link>
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow ">
                                    <Link href="https://blog.bugemauniv.ac.ug">
                                          <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Blogs </h1> 
                                    </Link>
                              </div>
                              </li>

                              
                              <li>
                              <div className="mr-2 my-5  fade-in-slow  ">
                              <Link href={'/agriculture'}>
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Agriculture </h1> 
                              </Link>
                              </div>
                              </li>

                              
                        </ul>
                        
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model2;