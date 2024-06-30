import React, { Children } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { BiPhoneCall } from 'react-icons/bi';
import imagenew from "../../public/images/nav/IMG_9313.jpg";
import image from "../../public/images/nav/labs.jpg";
import nurses from "../../public/images/nav/nurses.jpg";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import burundi from "../../public/images/nav/burundi.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";
import palm_girls1 from "../../public/images/nav/palm-girls1.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";


const Model4 = ({is4visible, onClose, children}) => {
      if (!is4visible) return null;
      const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
      }

const main = ()=>{
      let schools = document.querySelector('schools');
      // schools.classList.remove('hidden');
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
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.remove('hidden');
      document.getElementById('attachment-fees').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
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
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.add('hidden');
      document.getElementById('attachment-fees').classList.remove('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
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
      document.getElementById('attachment-get-in-toch').classList.remove('hidden');
      document.getElementById('attachment-courses').classList.add('hidden');
      document.getElementById('attachment-fees').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
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
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.add('hidden');
      document.getElementById('attachment-fees').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.remove('hidden');

}
  return (
      <>
        
            <div className=" fade-in fixed z-40 inset-0 backdrop-blur-sm flex w-full h-4/5 my-24 overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose}>
                  
                     
                  <div id="programs">

                        <div className="vertical-line ml-24 my-24 fade-in "  style={{marginLeft:'115px',marginTop:'25%'}}> 
                             
                               {/* M  A  P */}
                               <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '> <span className='animated'>Directions</span></h1> 
                              </div>
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6206770744043!2d32.64117747432078!3d0.5703006635869016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c4be209db538d%3A0xe4ac675b7d218fc9!2sBugema%20University!5e0!3m2!1sen!2sug!4v1718632251835!5m2!1sen!2sug" width="500" height="300" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                              
                              {/*###===============================================================================
                               A T T A C H M E N T   P I C T U R E S    U N D E R    T H E   F I R S T   C O L U M N 
                               ==================================================================================###*/}

                              <div id='attachment-courses' className="slant-div-right bg-black hidden text-white grid-rows-2"style={{marginTop:'9%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                          
                                    {/* <h1  style={{fontSize: '19px',cursor:"pointer",height:"150px"}}> Masters of Science in Information</h1> */}
                                    <Image src={burundi} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 

                               
                        
                        </div>
                  
                  </div>

                  <div className=" fade-in ml-24 my-24 " style={{marginTop:'12%'}} id='fees'> 
                        <h1 className='font-bold text-black text-center'>
                              Send Us a Direct Email
                        </h1>

                        <form className='flex flex-col space-y-4' action="">
                              <input
                              className='rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                              type="email"
                              required
                              placeholder='Your Email'
                              />
                              <input
                              className='rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                              type="tel"
                              placeholder='Contact'
                              />
                              <textarea
                              className='rounded-md border border-gray-300 px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500'
                              required
                              placeholder='Message'
                              />
                              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                              Send
                              </button>
                        </form>

                        <div className=" my-5 flex items-center justify-center">

                               {/*###=============== S O C I A L   L I N K S ================###*/}
                              <Link
                              href="/https://www.facebook.com"
                              aria-label="social-link"
                              className="mr-6 text-[#CED3F6] hover:text-primary"
                        
                              >
                              <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                              <path d="M 11.300781 2 C 6.1645496 2 2 6.1645496 2 11.300781 L 2 38.800781 C 2 43.937013 6.1645496 48.099609 11.300781 48.099609 L 38.800781 48.099609 C 43.937013 48.099609 48.099609 43.937013 48.099609 38.800781 L 48.099609 11.289062 L 48.099609 11.277344 C 47.988214 6.1531405 43.848929 2 38.800781 2 L 11.300781 2 z M 11.300781 4 L 38.800781 4 C 42.752633 4 46.011005 7.2464683 46.099609 11.322266 L 46.099609 38.800781 C 46.099609 42.864549 42.864549 46.099609 38.800781 46.099609 L 33 46.099609 L 33 29 L 37.847656 29 L 39.179688 21 L 33 21 L 33 19 C 33 18.45 33.05476 18.405705 33.251953 18.279297 C 33.44915 18.152889 34.029365 18 35 18 L 39 18 L 39 11.271484 L 38.306641 11.048828 C 38.306641 11.048828 35.129885 10 32 10 C 29.096296 10 26.957792 10.953443 25.679688 12.632812 C 24.401582 14.312183 24 16.536525 24 19 L 24 21 L 21 21 L 21 29 L 24 29 L 24 46.099609 L 11.300781 46.099609 C 7.2370133 46.099609 4 42.864549 4 38.800781 L 4 11.300781 C 4 7.2370133 7.2370133 4 11.300781 4 z M 32 12 C 34.168683 12 36.174546 12.537635 37 12.773438 L 37 16 L 35 16 C 33.870635 16 32.949678 16.09711 32.171875 16.595703 C 31.394072 17.094295 31 18.05 31 19 L 31 23 L 36.820312 23 L 36.152344 27 L 31 27 L 31 46.099609 L 26 46.099609 L 26 27 L 23 27 L 23 23 L 26 23 L 26 19 C 26 16.763475 26.399589 14.98938 27.271484 13.84375 C 28.14338 12.69812 29.503704 12 32 12 z"
                              fill="white"></path>
                              </svg>
                              </Link>
                              <Link
                              href="/https://www.x.com"
                              aria-label="social-link"
                              className="mr-6 text-[#CED3F6] hover:text-primary"
                              >
                              <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" 
                              fill="white"></path>
                              </svg>
                              </Link>
                              

                              <Link
                              href="/https://www.youtube.com"
                              aria-label="social-link"
                              className="mr-6 text-[#CED3F6] hover:text-primary"
                              >
                              <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" 
                              fill="white"></path>
                              </svg>
                              </Link>
                              
                              <Link
                              href="/https://www.linkedin.com"
                              aria-label="social-link"
                              className="mr-6 text-[#CED3F6] hover:text-primary"
                              >
                              <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                              <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" 
                              fill="white"></path>
                              </svg>
                              </Link>
                              <Link
                              href="/https://www.instagram.com"
                              aria-label="social-link"
                              className="mr-6 text-[#CED3F6] hover:text-primary"
                              >
                              <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" 
                              fill="white"></path>
                              </svg>
                              </Link>

                              <Link
                              href="/"
                              aria-label="social-link"
                              className="mr-6 text-[#CED3F6] hover:text-primary"
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                              </svg>


                              </Link>
                        </div>
                  </div>
                  


                  <div className=' ml-20 vertical-line  transform -skew-x-12 'style={{marginTop:'12%'}}>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-20 transform'  id='IT'>                     

                        {/* ###=============G E T   IN  T O U C H       M O R E =================### */}
                        <div className='fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 mr-5 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black  change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"50px"}} className='new-arr change-on-hover2'>Apply here  <FaArrowRight className='new-arr'/></h1>
                                    </div>
                              </div> 
                        
                              <div className="ml-24 -mr-3 my-2 transform text-white grid-rows-2 " style={{borderRadius:'9px',}} >
                                    <div className='columns-1 bg-black  change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"50px"}} className='new-arr change-on-hover2'> Talk to Us <BiPhoneCall className='new-arr'/></h1>
                                    </div>
                              </div>

                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"50px"}} className='new-arr change-on-hover2 text-black'> ERMS  <FaArrowRight className='new-arr'/></h1>
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"50px"}} className='new-arr change-on-hover2 text-black'> ERMS-staff  <FaArrowRight className='new-arr'/></h1>
                                    
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"50px"}} className='new-arr change-on-hover2 text-black'> E-Library  <FaArrowRight className='new-arr'/></h1>
                              
                              
                        </div>
                          
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model4;