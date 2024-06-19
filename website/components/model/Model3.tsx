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
import Image from "next/image";
import { useEffect, useState } from "react";


const Model3 = ({is3visible, onClose, children}) => {
      if (!is3visible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}


  return (
      <>
        
            <div className=" fade-in fixed inset-0 backdrop-blur-sm flex w-full h-4/5 my-24 overflow-auto overflow-x-hidden bg-white" id="wrapper">
                  
                  <div className='flex '>
                        {/* <button style = {border-radius: '50%';width: '30px';height: '30px';background-color: 'red';color: 'white';font-size: '20px';text-align: 'center';line-height: '30px';position: 'absolute';right: '10px';top: '10px'} onClick={onClose}>
                        <span className="text-black text-xl rounded-full">X</span>
                        </button> */}
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
                              top: '70px',
                              }}
                              onClick={onClose}>
                              <span className="text-white text-xl">X</span>
                        </button>

                  </div>    
                  <div id="programs">

                        <div className="vertical-line ml-24 my-24 fade-in "  style={{marginLeft:'115px',marginTop:'25%'}}> 
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main ' > <span id='Main' className='animated href=""'> Main Campus</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' ><span id='Kampala' className='animated'>Kampala Campus</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold '>  <span id='Mbale' className='animated'> Mbale Campus</span></h1> 
                              </div>
                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' > <span className='animated' id='Kasese'> Kasese Campus</span></h1> 
                              </div>

                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold '> <span className='animated' id='Arua'> Arua Campus</span></h1> 
                              </div>

                              {/*###===============================================================================
                               A T T A C H M E N T   P I C T U R E S    U N D E R    T H E   F I R S T   C O L U M N 
                               ==================================================================================###*/}
                        

                              <div id='attachment-courses' className="slant-div-right bg-black text-white grid-rows-2"style={{marginTop:'8%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                          
                                    <Image src={burundi} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 

                        </div>
                  
                  </div>
                  


                  {/*###=============== Q   U   O   T   E================###*/}

                  <div className=" fade-in my-24 " style={{marginTop:'12%'}} id='fees'> 
                        <ul className='ml-10 my-20'>
                              <li>
                                    <div className="mr-2 my-5 ">
                                    
                                          <h1  style={{marginRight:'5px'}} className='text-black text-center' >One institution, many worlds. <br/> Explore our Different Campuses and <br/> find your perfect fit ... </h1> 
                                    
                                    </div>
                              </li>                       
                             
                        </ul>
                        
                  </div>


                  <div className=' ml-15 vertical-line  transform -skew-x-12 'style={{marginTop:'12%'}}>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-24 transform '  id='IT'>
                       
                        {/* ###============= C A M P U S E S   M O R E =================### */}
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in-slow '>
                                          <Image src={gate} alt='img' width={350} height={450} className="-ml-5 my-10 "/>
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