import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import football from "../../public/images/nav/sports/football.jpg";
import image from "../../public/images/nav/labs.jpg";
import nurses from "../../public/images/nav/nurses.jpg";
import nurses1 from "../../public/images/nav/nurses1.jpg";
import burundi from "../../public/images/nav/burundi.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import bucosa1 from "../../public/images/nav/bucosa1.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";
import volley1 from "../../public/images/nav/sports/volley1.jpg";
import volley2c from "../../public/images/nav/sports/volley2c.jpg";
import basket from "../../public/images/nav/sports/basket.jpg";
import netball from "../../public/images/nav/sports/netball.jpg";
import woodball from "../../public/images/nav/sports/woodball.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";


const Model1 = ({issvisible, onClose, children}) => {
      if (!issvisible) return null;
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
      document.getElementById('attachment-get-in-toch').classList.add('hidden');
      document.getElementById('attachment-courses').classList.remove('hidden');
      document.getElementById('attachment-sports').classList.add('hidden');
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
      document.getElementById('attachment-sports').classList.remove('hidden');
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
      document.getElementById('attachment-sports').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.add('hidden');
      document.getElementById('why_bugema').classList.remove('current');
}
const why_bugema = () =>{
      document.getElementById('main').classList.remove('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('why_bugema').classList.add('current');
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
      document.getElementById('attachment-sports').classList.add('hidden');
      document.getElementById('attachment-why-bugema').classList.remove('hidden');

}

// ON HOVER FUNCTIONS 
const Basket = () =>{
      document.getElementById('basket').classList.remove('hidden');
      document.getElementById('volley').classList.add('hidden');
      document.getElementById('net').classList.add('hidden');
      document.getElementById('wood').classList.add('hidden');
      document.getElementById('table').classList.add('hidden');
      document.getElementById('foot').classList.add('hidden');

}
const Volley = () =>{
      document.getElementById('basket').classList.add('hidden');
      document.getElementById('volley').classList.remove('hidden');
      document.getElementById('net').classList.add('hidden');
      document.getElementById('wood').classList.add('hidden');
      document.getElementById('table').classList.add('hidden');
      document.getElementById('foot').classList.add('hidden');

}
const Net = () =>{
      document.getElementById('basket').classList.add('hidden');
      document.getElementById('volley').classList.add('hidden');
      document.getElementById('net').classList.remove('hidden');
      document.getElementById('wood').classList.add('hidden');
      document.getElementById('table').classList.add('hidden');
      document.getElementById('foot').classList.add('hidden');

}

const Wood = () =>{
      document.getElementById('basket').classList.add('hidden');
      document.getElementById('volley').classList.add('hidden');
      document.getElementById('net').classList.add('hidden');
      document.getElementById('wood').classList.remove('hidden');
      document.getElementById('table').classList.add('hidden');
      document.getElementById('foot').classList.add('hidden');

}
const Table = () =>{
      document.getElementById('basket').classList.add('hidden');
      document.getElementById('volley').classList.add('hidden');
      document.getElementById('net').classList.add('hidden');
      document.getElementById('wood').classList.add('hidden');
      document.getElementById('table').classList.remove('hidden');
      document.getElementById('foot').classList.add('hidden');

}
const Foot = () =>{
      document.getElementById('basket').classList.add('hidden');
      document.getElementById('volley').classList.add('hidden');
      document.getElementById('net').classList.add('hidden');
      document.getElementById('wood').classList.add('hidden');
      document.getElementById('table').classList.add('hidden');
      document.getElementById('foot').classList.remove('hidden');

}
  return (
      <>
        
            <div className=" fade-in fixed z-40 inset-0 backdrop-blur-sm flex w-full h-4/5 my-24 overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose}>
                  
                     
                  <div id="programs">

                        <div className="vertical-line ml-24 my-24 fade-in "  style={{marginLeft:'115px',marginTop:'25%'}}> 
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '   onClick={main}> <span id='main' className='animated href=""'>Accommodation</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={payments}><span id='payments' className='animated'>Sports</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold 'onClick={why_bugema} >  <span id='why_bugema' className='animated'>Clubs & Associations</span></h1> 
                              </div>
                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={touch}> <span className='animated' id='contact'>Student Leadership</span></h1> 
                              </div>
                              {/*###===============================================================================
                               A T T A C H M E N T   P I C T U R E S    U N D E R    T H E   F I R S T   C O L U M N 
                               ==================================================================================###*/}
                              <div id='attachment-get-in-toch' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'15%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                    <Image src={burundi} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 
                              {/* A T T A C H M E N T   S P O R T S */}
                              <div id='attachment-sports' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'15%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                    <Image src={volley1} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 

                              <div id='attachment-courses' className="slant-div-right bg-black text-white grid-rows-2"style={{marginTop:'15%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                          
                                    <Image src={burundi} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 
                                     {/* A T T A C H M E N T   C L U B S   AND  A S S O C I A T I O N S */}
                              <div id='attachment-why-bugema' className="slant-div-right bg-black text-white grid-rows-2 hidden"style={{marginTop:'15%',width:'111%',height:'40%'}}>
                                    <div className='fade-in'>
                                          
                                    <Image src={nurses1} alt='img' width={550} height={450} className="fade-in-slow transform -skew-x-12 '"/>
                                    </div>
                                    
                              </div> 
                        
                        </div>
                  
                  </div>
                  {/*###=============== A  C  C  O  M  M  O  D  A  T  I  O  N ================###*/}
                  <div className=" ml-12 my-24 fade-in-slow " id='courses' style={{marginTop:'15%'}}> 
                        <ul>
                              <li>
                              <div className="mr-2 my-5  ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Culture </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Sports </h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Exhibition </h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Entreprenuership </h1>
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Innovations and Inventions</h1> 
                                    
                              </div>
                              </li>
                              
                              <li>

                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Religious Matters</h1> 
                                 </div>   
                              <div className="mr-2 my-5 slider slide--slow ">
                                    <Link href={'/news'}>
                                          <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Events</h1>
                                    </Link>
                              </div>
                              </li>
                              
                              <li>

                              <div className="mr-2 my-5 fade-in-slow  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> News</h1> 
                                    </div>
                              <div className="mr-2 my-5 slider slide--fast ">
                                     
                                    <Link href={'/events'}>
                                          <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> News</h1>
                                    </Link>

                              </div>
                              </li>
                              
                        </ul>
                        
                  </div>
                  


                              {/*###=============== S  P  O  R  T  S ================###*/}

                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'12%'}} id='fees'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Foot} > Football </h1> 
                              
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Net}>Net ball</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Volley}> Volley </h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Wood}> Wood ball</h1>
                                    
                              </div>
                              </li>

                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Basket}>Basket</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Table}>Table Tenis</h1> 
                                    
                              </div>
                              </li>
 
                        </ul>
                        
                        
                  </div>

                  



                  {/*###============== C  L  U  B  S    &    A  S  S  O  C  I  T  I  O  N  S==============###*/}
                  <div className=" fade-in ml-24 my-24 hidden " style={{marginTop:'12%'}} id='why_bugema-data'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > IT Club </h1> 
                              
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Food & Nutrition</h1> 
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > BUNSA </h1> 
                                    
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> International Associations</h1>
                                    
                              </div>
                              </li>
                              
                              {/* <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Feeding</h1> 
                                    
                              </div>
                              </li> */}
                              
                             
                              
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



                              {/* ###============= A C C O M M O D D A T I O N     M O R E =================### */}
                        <div className='' id='courses-more' style={{marginTop:'20%'}}>
                              <div className=' ml-24 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                              {/* <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
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
                                    <div className='columns-1 bg-black  change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Masters of Science in Information <FaArrowRight className='arrow3'/></h1>
                                    </div>
                              </div> */}
                        </div>


                        
                        
                        {/* ###=============S P O R T S       M O R E =================### */}
                        <div className=' hidden my-24 fade-in' id='fees-more'>
                              <div id='foot' className=' ml-24 fade-in '>
                                          <Image src={football} alt='img' width={350} height={450} className="-ml-5 my-20 "/>
                              </div>

                              <div id='basket' className='hidden ml-24 fade-in '>
                                          <Image src={basket} alt='img' width={350} height={450} className="-ml-5 my-20 "/>
                              </div>

                              <div id='volley' className='hidden ml-24 fade-in '>
                                          <Image src={volley2c} alt='img' width={350} height={450} className="-ml-5 my-20 "/>
                              </div>

                              <div id='net' className='hidden ml-24 fade-in '>
                                          <Image src={netball} alt='img' width={350} height={450} className="-ml-5 my-20 "/>
                              </div>

                              <div id='wood' className='hidden ml-24 fade-in '>
                                          <Image src={woodball} alt='img' width={350} height={450} className="-ml-5 my-20 "/>
                              </div>

                              <div id='table' className='hidden ml-24 fade-in '>
                                          <Image src={volley2c} alt='img' width={350} height={450} className="-ml-5 my-20 "/>
                              </div>

                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='new-arr change-on-hover2 text-black'> More on sports  <FaArrowRight className='new-arr'/></h1>
                              <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='new-arr change-on-hover2 text-black'> how to join  <FaArrowRight className='new-arr'/></h1>


                              
                        </div>
                        
                        
                        
                        {/* ###============= C L U B S    AND   A S S O C I A T  I O N S    M O R E =================### */}
                        <div className='hidden' id='why-bugema-more' style={{marginTop:'30%'}}>
                              <div className=' ml-24 fade-in '>
                                          <Image src={bucosa} alt='img' width={350} height={450} className="-ml-5 my-10 "/>
                              </div>
                              
                        </div>
                        
                        

                        {/* ###=============G E T   IN  T O U C H       M O R E =================### */}
                        <div className=' hidden fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 my-10 "/>
                              </div>
                              {/* <div className="ml-19 -mr-5 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> How to Apply  <FaArrowRight className='arrow1'/></h1>
                                    </div>
                              </div> 
                              
                              <div className="ml-12 -mr-4 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Other Campuses <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>   */}
                              <div className="ml-24 -mr-3 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px',}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Talk to Us <FaArrowRight className='arrow3'/></h1>
                                    </div>
                              </div>
                              
                        </div>
                          
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model1;