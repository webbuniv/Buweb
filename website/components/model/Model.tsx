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
import Link from "next/link"
import { useEffect, useState } from "react";
import first_modal from "../Header/index";


const Model = ({isvisible, onClose, children}) => {
      if (!isvisible) return null;
const handleclose = (e)=>{
      
      if( e.target.id === 'wrapper ') onClose();
      document.querySelector('.active')?.classList.remove('active');
      
}
const keepAlive = () => {
      first_modal()
}
const main = ()=>{
      let schools = document.querySelector('schools');
      document.getElementById('main').classList.add('current');
      document.getElementById('payments').classList.remove('current');
      document.getElementById('fees').classList.add('hidden');
      document.getElementById('courses').classList.remove('hidden');
      // document.getElementById('contact').classList.remove('current');
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
      // document.getElementById('contact').classList.remove('current');
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
      // document.getElementById('contact').classList.remove('current');
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
      < >
        
        

        <div className=" fade-in fixed z-40 inset-0 backdrop-blur-sm flex ml-[5%] mt-[10%] w-[90%] h-[70%] mt-[7%] border border-black overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose}  >                  
                        <div className='flex ml-10 justify-center items-center'>
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
                        
                <div id="programs ">

                        <div className="vertical-line ml-24 my-24 fade-in " > 
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '   onClick={main}> <span id='main' className='current animated href=""'>Schools</span></h1> 
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={payments}><span id='payments' className='animated'>Fees and Payments</span></h1> 
                              </div>

                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold 'onClick={why_bugema} >  <Link href="#" id='why_bugema' className='animated'> Why Bugema University </Link></h1> 
                              </div>
                        
                        </div>
                  
                </div>

                <div className=" ml-12 my-24 fade-in " id='courses' > 
                                <ul>
                                <li>
                                <div className="mr-2 my-5 slider slide--fast ">
                                        
                                        <Link href={"/schools/school-of-graduate"} >

                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Graduate studies, Research <br/>&  Publications</h1> 
                                        </Link> 
                                </div>
                                </li>

                                <li>
                                <div className="mr-2 my-5 slider slide--slower "> 
                                        <Link href={"/schools/school-of-business"} >
                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Business</h1> 
                                        </Link> 
                                </div>
                                </li>

                                <li>
                                <div className="mr-2 my-5 slider slide--slow ">
                                        <Link href={"/schools/school-of-agric"} >
                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Agriculture and Applied Sciences</h1> 
                                        </Link> 
                                </div>
                                </li>

                                <li>
                                <div className="mr-2 my-5 slider slide--slow ">
                                        
                                        <Link href={"/schools/school-of-education"} >
                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Education </h1> 
                                        </Link> 
                                </div>
                                </li>

                                <li>
                                <div className="mr-2 my-5 slider slide--slow ">
                                        
                                        <Link href={"/schools/school-of-social"} >
                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Social sciences</h1> 
                                        </Link> 
                                </div>
                                </li>

                                <li>
                                <div className="mr-2 my-5 slider slide--fast ">
                                        
                                        <Link href={"/schools/school-of-theology"} >
                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > School of Theology and Religious Studies </h1> 
                                        </Link> 
                                </div>
                                </li>

                                <li>
                                <div className="mr-2 my-5 slider slide--slow ">
                                        
                                        <Link href={"/schools/school-of-health"} >

                                                <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> School of Health and Alied Sciences</h1> 

                                        </Link> 
                                </div>
                                </li>
                                
                                <li>
                                <div className="mr-2 my-5 slider slide--slow ">
                                        <Link href={"/schools/school-of-science"} >
                                                <h1 onClick={onClose} style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > School of Science and Technology </h1> 
                                        </Link> 
                                </div>
                                </li>
                                
                                </ul>
                                
                </div>

                {/*###=============== FEES AND PAYMENTS ================###*/}

                <div className=" fade-in ml-24 my-24 hidden "  id='fees'> 
                                <ul className='ml-10 my-20'>
                                <li>
                                <div className="mr-2 my-5 ">
                                <Link href='https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx'>
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
                                        <Link href='/work_program'>
                                        <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'onClick={onClose} > Funding Your Studies </h1> 
                                        </Link>
                                        
                                        
                                </div>
                                </li>
                                
                                
                                <li>
                                <div className="mr-2 my-5  ">

                                <Link href='https://imis.unche.or.ug:81/frmTrnStudentPayment.aspx' target="_blank" rel="noopener noreferrer">
                                        <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> NHCE Fees</h1>
                                </Link>
                                        
                                        
                                </div>
                                </li>
                                </ul>
                                
                </div>
                {/*###============== W  H  Y    B U G E M A ==============###*/}
                <div className=" fade-in ml-24 my-24 hidden "  id='why_bugema-data'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              <Link href="/sports/sports">
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}> Sports </h1> 
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
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'onClick={onClose} > Religion </h1> 
                              </Link>
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href={"/hospital"} >
                                    <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Hospital</h1>
                              </Link>
                              </div>
                              </li>
                              
                              <li>
                              <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Feeding</h1> 
                                    
                              </div>
                              </li>
  
                        </ul>
                </div>

                {/*###============== S T  A  F  F       A N D    F  A  C  U  L  T  Y ==============###*/}
                <div className=" fade-in ml-[20%] my-24 hidden " id='get-in-touch'> 
                        <ul className='ml-10 my-20'>
                              <li>
                                    <Link href={"/schools/school-of-science"}>
                                          <div className="mr-2 my-5 ">
                                    
                                                <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold ' onClick={onClose} > School of Science and Technology  </h1> 
                                    
                                          </div>
                                    </Link>
                              
                              </li>
                              
                              <li>
                                    <Link href={"/schools/school-of-health"}>
                                    <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}>School of Heath and Alied Sciences</h1> 
                                    </div>
                                    </Link>
                              
                              </li>
                              <li>
                              <Link href={"/schools/school-of-theology"} >
                                    <div className="mr-2 my-5  ">
                                          <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}> School of Theology and Religious Studies </h1> 
                                    </div>
                              </Link>
                             
                              </li>
                              <li>
                                    <Link href={"/schools/school-of-agric"} >
                                          <div className="mr-2 my-5  ">
                                                <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}> School of Agriculture and Applied Sciences</h1>
                                                
                                          </div>
                                    </Link>
                              </li>
                              
                              <li>
                                    <Link href={"/schools/school-of-business"}>
                                    <div className="mr-2 my-5  ">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}> School of Business</h1> 
                                    
                              </div>
                                    </Link>
                              
                              </li>

                              <li>
                                    <Link href={"/schools/school-of-education"}>
                                          <div className="mr-2 my-5  ">
                                          <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}> School of Education,Humanities and <br/> Social sciences</h1> 
                                          </div>
                                    </Link>
                              
                              </li>

                              <li>
                                    <Link href={"/schools/school-of-graduate"}>
                                    <div className="mr-2 my-5  ">

                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onClick={onClose}> School of Graduate studies, Reseacrch <br/>&  Publications</h1> 
                                    
                                    </div>
                                    </Link>
                              
                              </li>

                        </ul>
                        
                </div>

                <div className=' ml-20 vertical-line   mt-24'>
                </div>

                {/* SCIENCE AND TECHNOLOGY COURSES */}
                <div className='ml-10  my-24'  id='IT'>

                        {/* ###============= C O U R S E S    M O R E =================### */}
                        <div className=' ml-24' id='courses-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                              <div className="ml-19 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>

                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover rounded-3xl'>

                                         <Link href='https://apply.bugemauniv.ac.ug'>
                                         <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Apply now <FaArrowRight className='arrow1'/></h1>
                                         </Link> 
                                     
                                    </div>
                              </div> 
                              
                              <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover rounded-3xl'>

                                          <Link href='https://erms.bugemauniv.ac.ug/student/login/'>
                                         <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'>Students&apos; portal <FaArrowRight className='arrow1'/></h1>
                                         </Link> 

                                    </div>
                              </div>  
                              <div className="ml-24 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px'}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover rounded-3xl'>
                                    <Link href='https://elearning.bugemauniv.ac.ug/'>
                                         <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'>E-Learnig <FaArrowRight className='arrow1'/></h1>
                                    </Link> 
                                    </div>
                              </div>
                        </div>

                        {/* ###=============F E E S       M O R E =================### */}
                        <div className=' hidden fade-in' id='fees-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={imagenew} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                         
                              
                              <div className="ml-12 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover rounded-3xl'>
                                          <Link href="https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx">
                                          <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Fees Structure <FaArrowRight className='arrow2'/></h1>
                                          </Link>
                                    
                                    </div>
                              </div>  
                              <div className="ml-24 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px'}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover rounded-3xl'>
                                          <Link href="https://www.youtube.com/watch?embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MTY0NTA2LDE2NDUwMw&v=GeIp_hgwlZc&feature=youtu.be" target="_blank">
                                          <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> How to apply <FaArrowRight className='arrow3'/></h1>
                                          </Link>
                                    
                                    </div>
                              </div>
                        </div>

                        {/* ###============= W  H  Y    B U G E M A      M O R E =================### */}
                        <div className='hidden' id='why-bugema-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={bucosa} alt='img' width={350} height={450} className="-ml-5 my-10 slider slide--fast"/>
                              </div>
                            
                        </div>

                        {/* ###=============G E T   IN  T O U C H       M O R E =================### */}
                        <div className='flex  hidden fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in '>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 my-10 slider slide--fast"/>
                              </div>
                              <div className="flex ml-19 -mr-5 transform -skew-x-11 text-white grid-rows-2 fade-in " style={{marginTop:'-7%'}}>
                                    <div className='columns-1 bg-black slider-right slide--slow change-on-hover '>
                                          <Link href={"/administrator"} onClick={onClose}>
                                                <h1  style={{fontSize: '19px',cursor:"pointer",height:"70px"}} className='arrow1'> Administrators  <FaArrowRight className='arrow1'/></h1>
                                          </Link>
                                    </div>
                              </div> 
                              
                              <div className="flex ml-12 -mr-4 my-1 transform -skew-x-11 text-white grid-rows-2 " >
                                    <div className='columns-1 bg-black change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"80px"}} className='arrow2'> Other Campuses <FaArrowRight className='arrow2'/></h1>
                                    </div>
                              </div>  
                              <div className="flex ml-24 -mr-3 transform -skew-x-11 text-white grid-rows-2 " style={{borderRadius:'9px',}} >
                                    <div className='columns-1 bg-black slider slide--slow change-on-hover'>
                                    <h1  style={{fontSize: '19px',cursor:"pointer",height:"90px"}} className='arrow3'> Talk to Us <FaArrowRight className='arrow3'/></h1>
                                    </div>
                              </div>
                              
                        </div>                         
                  </div>
                        </div>

            </div>
      </>    
  );
};

export default Model;
