import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import imagenew from "../../public/images/nav/IMG_9313.jpg";
import image from "../../public/images/nav/labs.jpg";
import nurses from "../../public/images/nav/nurses.jpg";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import burundi from "../../public/images/nav/burundi.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";
import palm_girls1 from "../../public/images/nav/palm-girls1.jpg";
import Image from "next/image";
import { BiX } from 'react-icons/bi';
import { useEffect, useState } from "react";
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
        

            <div className=" fade-in fixed z-40 inset-0 backdrop-blur-sm flex ml-[5%] mt-[10%] w-[90%] h-[60%] mt-[10%] border border-black overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose}  >
                  
                    
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

                        <div className="vertical-line ml-24 my-12 fade-in " > 
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '   onClick={main}> <span id='main' className='animated href=""'>Research</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={payments}><span id='payments' className='animated'>Fees and Payments</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold 'onClick={why_bugema} >  <Link href="/whybugema" id='why_bugema' className='animated'> Why Bugema University </Link></h1> 
                              </div>
                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={touch}> <span className='animated' id='contact'> Get in Touch </span></h1> 
                              </div>
                        
                        </div>
                  
                  </div>
                  <div className=" ml-12 my-24 fade-in " id='courses' style={{marginTop:'9%'}}> 
                        <ul>
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Publications </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Projects </h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5 fade-in-slow ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Blogs </h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Research</h1>
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Technology</h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  fade-in-slow  ">
                              <Link href={'/agriculture'}>
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Agriculture </h1> 
                              </Link>
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Technical Skills</h1> 
                                    
                              </div>
                              </li>
                              
                        </ul>
                        
                  </div>
                  


                              {/*###=============== FEES AND PAYMENTS ================###*/}

                  <div className=" fade-in ml-24 my-12 hidden "  id='fees'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Tution Fees </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Scholarships</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Funding Your Studies </h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> BUSA Fees</h1>
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> NHCE Fees</h1> 
                                    
                              </div>
                              </li>
                              
                             
                              
                        </ul>
                        
                  </div>

                  



                  {/*###============== W  H  Y    B U G E M A ==============###*/}
                  <div className=" fade-in ml-24 my-12 hidden "  id='why_bugema-data'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              <Link href="/sports/sports">
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Sports </h1> 
                              </Link>
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Accommodation</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href={'/religious/religious'}>
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Religion </h1> 
                              </Link>
                              </div>
                              </li>
                                    <li>
                                    <Link href={"/hospital"} >
                                          <div className="mr-2 my-5  ">
                                                <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Hospital</h1>
                                          </div>
                                    </Link>
                                    </li>
                              
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Feeding</h1> 
                                    
                              </div>
                              </li>
                              
                             
                              
                        </ul>
                        
                  </div>

                  


                              
                  {/*###============== G  E  T    I N    T  O  U  C  H ==============###*/}
                  <div className=" fade-in ml-24 my-12 hidden "  id='get-in-touch'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Open Days </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Applications</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Maps and Directions </h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Campus Tours</h1>
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> All Events</h1> 
                                    
                              </div>
                              </li>
                              
                             
                              
                        </ul>
                        
                  </div>

                  <div className=' ml-20 vertical-line  my-12 '>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-24 '  id='IT'>
                        
                              {/* ###============= C O U R S E S    M O R E =================### */}
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="-ml-5 my-5 slider slide--fast"/>
                              </div>
                              <div className="ml-19  text-white grid-rows-2 fade-in " >
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Why Study at Bugema University <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                        
                        </div>


                        
                        
                        {/* ###=============F E E S       M O R E =================### */}
                        <div className=' hidden fade-in' id='fees-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={imagenew} alt='img' width={350} height={450} className="-ml-5  slider slide--fast"/>
                              </div>
                              <div className="ml-19  text-white  fade-in " >
                                    <div className=' bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> How to Pay  <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                              <div className="ml-12 my-1  text-white " >
                                    <div className=' bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Fees Structure <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>  
                        </div>
                        
                        
                        
                        {/* ###============= W  H  Y    B U G E M A      M O R E =================### */}
                        <div className='hidden' id='why-bugema-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={bucosa} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19  text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Why Study at Bugema University <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                        </div>
                        
                        

                        {/* ###=============G E T   IN  T O U C H       M O R E =================### */}
                        <div className=' hidden fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 -mr-5  text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                        <Link href={"https://erms.bugemauniv.ac.ug/application"}>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Apply  <FaArrowRight className='arrow1'/></h1>
                                    </Link>
                                    </div>
                              </div> 
                              
                        </div>
                          
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model2;