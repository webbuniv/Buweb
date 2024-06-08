import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import imagenew from "../../public/images/nav/IMG_9313.jpg";
import image from "../../public/images/nav/labs.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";


const Model = ({isvisible, onClose, children}) => {
      if (!isvisible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}
// const showIT =() =>{
      
//       let mouseon = document.getElementById('IT');
//       mouseon.addEventListener("onmouseleave",function(){
//             mouseon.classList.add('hidden');
//       });
 
//       mouseon.classList.remove('hidden');
// }
const main = ()=>{
      let schools = document.querySelector('schools');
      // schools.classList.remove('hidden');
      document.getElementById('main').classList.add('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('courses').classList.remove('hidden');
      document.getElementById('contact').classList.remove('current');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('fees-more').classList.add('hidden');
      document.getElementById('courses-more').classList.remove('hidden');
      
}
const payments=()=>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.add('current');
      document.getElementById('fees').classList.remove('hidden');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('contact').classList.remove('current');
      document.getElementById('get-in-touch').classList.add('hidden');
      document.getElementById('fees-more').classList.remove('hidden');
      document.getElementById('courses-more').classList.add('hidden');
      
}
const touch = ()=>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('courses').classList.add('hidden');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('contact').classList.add('current');
      document.getElementById('get-in-touch').classList.remove('hidden');
}
  return (
      <>
        
            <div className=" fade-in fixed inset-0 backdrop-blur-sm flex w-full h-4/5 my-24 overflow-auto bg-white" id="wrapper">
                  
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

                        <div className="vertical-line ml-24 my-24 fade-in "  style={{marginLeft:'115px',marginTop:'40%'}}> 
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '   onClick={main}> <span id='main' className='animated href=""'>Courses</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={payments}><span id='payments' className='animated'>Fees and Payments</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' >  <span className='animated'> Why Bugema University </span></h1> 
                              </div>
                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={touch}> <span className='animated' id='contact'> Get in Touch </span></h1> 
                              </div>

                              <div className="ml-4 mr-2 my-14 slant-div-right text-white grid-rows-2"style={{marginTop:'45%',width:'150%',height:'40%'}}>
                                    <div className='columns-1 bg-black slider slide--fast'>
                                          
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"150px"}}> Masters of Science in Information</h1>
                                    
                                    </div>

                                    
                              </div> 
                        
                        </div>
                  
                  </div>
                  <div className=" ml-12 my-24 fade-in " id='courses' style={{marginTop:'12%'}}> 
                        <ul>
                              <li>
                              <div className="mr-2 my-5 slider slide--slow ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > School of Science and Technology </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 slider slide--slow ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Heath and Alied Sciences</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5 slider slide--fast ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > School of Theology and Religious Studies </h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 slider slide--slow ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Agriculture and Applied Sciences</h1>
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 slider slide--slower ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Business</h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 slider slide--slow ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Education,Humanities and <br/> Social sciences</h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 slider slide--fast ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Graduate studies, Reseacrch <br/>&  Publications</h1> 
                                    
                              </div>
                              </li>
                              
                        </ul>
                        
                  </div>
                              {/*###=============== FEES AND PAYMENTS ================###*/}

                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'12%'}} id='fees'> 
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
                              
                  {/*###============== G  E  T    I N    T  O  U  C  H ==============###*/}
                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'12%'}} id='get-in-touch'> 
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

                  <div className=' ml-20 vertical-line  transform -skew-x-12 'style={{marginTop:'12%'}}>
                  </div>
                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10  my-24 transform -skew-x-12'  id='IT'>
                        {/* <div className="mr-2 my-5  ">
                              <h1  style={{color:'black',fontSize: '19px',cursor:"pointer",}}> Certificate in Information Technology</h1> 
                        </div>
                        <div className="mr-2 my-5  ">
                              <h1  style={{color:'black',fontSize: '19px',cursor:"pointer",}}> Bachelor of Science in Software Engineering</h1> 
                        </div>
                        <div className="mr-2 my-5  ">
                              <h1  style={{color:'black',fontSize: '19px',cursor:"pointer",}}> Bachelor of Science in Network Systems<br/> Administration</h1> 
                        </div>
                        <div className="mr-2 my-5  ">
                              <h1  style={{color:'black',fontSize: '19px',cursor:"pointer",}}> Bachelor of Science in Computer Engineering</h1> 
                        </div>
                        <div className="mr-2 my-5  ">
                              <h1  style={{color:'black',fontSize: '19px',cursor:"pointer",}}> Diploma in Computer Forensics</h1> 
                        </div>
                        <div className="mr-2 my-5  ">
                              <h1  style={{color:'black',fontSize: '19px',cursor:"pointer",}}> Diploma in Information technology</h1> 
                        </div>*/}
                        
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="ml-12 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Why Study at Bugema University <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                              <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Masters of Science in Information <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>  
                              <div className="ml-24 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px'}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Masters of Science in Information <FaArrowRight className='arrow3'/></h1>
                                    </div>
                              </div>
                        </div>
                        <div className=' hidden fade-in' id='fees-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={imagenew} alt='img' width={350} height={450} className="ml-12 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> How to Pay  <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                              <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Fees Structure <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>  
                              <div className="ml-24 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px'}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Donate <FaArrowRight className='arrow3'/></h1>
                                    </div>
                              </div>
                        </div>
                          
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model;