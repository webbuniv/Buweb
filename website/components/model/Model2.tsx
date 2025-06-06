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
        

            <div className=" fade-in fixed z-40 inset-0  flex mx-auto  w-[97%] h-3/4 mt-[8%]  shadow-lg overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose}  >
                  
                    
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

                  <div className=" fade-in ml-24 my-12 hidden "  id='fees'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              
                              <Link href={'https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx'} >
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Tution Fees </h1> 
                              </Link>
                              
                              </div>
                              </li>
                              
                              {/* <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Scholarships</h1> 
                                    
                              </div>
                              </li> */}
                              <li>
                              <div className="mr-2 my-5  ">
                                    <Link href={'/work_program'}> 
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Funding Your Studies </h1> 
                                    </Link>
                                    
                              </div>
                              </li>
                              
                              {/* <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> BUSA Fees</h1>
                                    
                              </div>
                              </li> */}
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <Link href={'/https://imis.unche.or.ug:81/frmTrnStudentPayment.aspx'}> 
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > NHCE Fees </h1> 
                                    </Link>
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
                              
                              
                              {/* <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Feeding</h1> 
                                    
                              </div>
                              </li> */}
                              
                             
                              
                        </ul>
                        
                  </div>

                  


                              
                  {/*###============== G  E  T    I N    T  O  U  C  H ==============###*/}
                  <div className=" fade-in ml-24 my-12 hidden "  id='get-in-touch'> 
                        <ul className='ml-10 my-20'>
                           
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                   <Link  href={"https://erms.bugemauniv.ac.ug/application"} >
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Applications</h1> 
                                   </Link>
                                    
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                                    <Link  href={"https://www.google.com/maps/place/Bugema+University/@0.5702953,32.6411775,17z/data=!3m1!4b1!4m6!3m5!1s0x177c4be209db538d:0xe4ac675b7d218fc9!8m2!3d0.5702953!4d32.6437524!16s%2Fm%2F05c36qx?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D"} >
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Maps and Directions </h1> 
                                   </Link>
                              </div>
                              </li>
                              
                              {/* <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Campus Tours</h1>
                                    
                              </div>
                              </li> */}
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <Link href={'/events'}> 
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' >All Events </h1> 
                                    </Link>
                              </div>
                              </li>
                              
                             
                              
                        </ul>
                        
                  </div>

                  <div className=' ml-32 vertical-line  my-12 '>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-20  my-24 '  id='IT'>
                        
                              {/* ###============= C O U R S E S    M O R E =================### */}
                        <div className='' id='courses-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="-ml-5 my-5 fade-in rounded-tr-3xl rounded-bl-3xl"/>
                              </div>
                              <div className="ml-19  text-black grid-rows-2 fade-in " >
                                    <div className=' p-3 border border-black hover:bg-dark hover:text-white rounded-full change-on-hover '>
                                    <Link href={"/whybugema"}>
                                    <h1 className='new-arr'> Why Study at Bugema University <FaArrowRight className='arrow1'/></h1>
                                    </Link>
                                    </div>
                              </div> 
                        
                        </div>


                        
                        
                        {/* ###=============F E E S       M O R E =================### */}
                        <div className=' hidden fade-in' id='fees-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={imagenew} alt='img' width={350} height={450} className="-ml-5  fade-in rounded-tr-3xl rounded-bl-3xl"/>
                              </div>
                              <div className="ml-19 mt-5 text-black grid grid-cols-2 gap-2 fade-in " >
                                    <div className=' p-3 border border-black rounded-full hover:bg-dark hover:text-white fade-in change-on-hover '>
                                     <Link href={"https://erms.bugemauniv.ac.ug/application"}>
                                    <h1   className='new-arr'> Apply  <FaArrowRight className='arrow1'/></h1>
                                    </Link>
                                    </div>

                                    <div className=' p-3 border border-black rounded-full hover:bg-dark hover:text-white fade-in change-on-hover'>
                                   <Link href={"https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx"} >
                                    <h1  className='new-arr'> Fees Structure <FaArrowRight className='arrow2'/></h1>
                                   </Link>
                                    </div>
                              </div> 
                              
                        </div>
                        
                        
                        
                        {/* ###============= W  H  Y    B U G E M A      M O R E =================### */}
                        <div className='hidden' id='why-bugema-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={bucosa} alt='img' width={350} height={450} className="-ml-5 my-10 fade-in rounded-tr-3xl rounded-bl-3xl"/>
                              </div>
                              <div className="ml-19  text-black grid-rows-2 fade-in " >
                                    <div className=' p-3 border border-black hover:bg-dark hover:text-white fade-in rounded-full change-on-hover '>
                                   <Link href={"/whybugema"}>
                                    <h1   className='new-arr'> Why Study at Bugema University <FaArrowRight className='arrow1'/></h1>
                                   </Link>
                                    </div>
                              </div> 
                              
                        </div>
                        
                        

                        {/* ###=============G E T   IN  T O U C H       M O R E =================### */}
                        <div className=' hidden fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 -mr-5  text-black grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='p-3 border border-black hover:bg-dark hover:text-white fade-in rounded-full change-on-hover '>
                                        <Link href={"https://erms.bugemauniv.ac.ug/application"}>
                                    <h1   className='new-arr'> Apply  <FaArrowRight className='arrow1'/></h1>
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