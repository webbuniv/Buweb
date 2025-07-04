import React, { Children } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import football from "../../public/images/nav/sports/football.jpg";
import image from "../../public/images/nav/culturee.jpg";
import bucosa from "../../public/images/nav/bucosa.jpg";
import palm_girls from "../../public/images/nav/palm-girls.jpg";
import volley2c from "../../public/images/nav/sports/volley2c.jpg";
import basket from "../../public/images/nav/sports/basket.jpg";
import netball from "../../public/images/nav/sports/netball.jpg";
import woodball from "../../public/images/nav/sports/woodball.jpg";
import Image from "next/image";
import { BiX } from 'react-icons/bi';
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
        

            <div className="  fade-in fixed z-40 inset-0 shadow-lg flex mt-[8%] mx-auto w-[97%] h-3/4   overflow-auto overflow-x-hidden bg-white" id="wrapper" onMouseLeave={onClose} >                  
                     
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

                        <div className="vertical-line ml-24 mt-24  fade-in "  > 
                              <div className="mr-2 my-5 slider slide--fast">
                                    
                                    <Link href="">
                                          <h1  style={{color:'gray',fontSize: '35px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold main '   onClick={main}> <span id='main' className='animated current href=""'>Students Life</span></h1> 
                                    </Link>
                              </div>
                              <div className="mr-2 my-5  slider slide--slow ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' onClick={payments}><span id='payments' className='animated'>Sports</span></h1> 
                              
                              </div>
                              <div className="mr-2 my-5  slider slide--slower">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold 'onClick={why_bugema} >  <span id='why_bugema' className='animated'>Clubs & Associations</span></h1> 
                              </div>
                              <div className="mr-2 my-5 slider slide--slowest ">
                                    <h1  style={{color:'gray',fontSize: '25px',cursor:"pointer", marginRight:'5px'}} className='animated font-bold ' > <span className='animated' id='contact'>Student Leadership</span></h1> 
                              </div>                
                              
                        </div>
                  
                  </div>
                  {/*###=============== A  C  C  O  M  M  O  D  A  T  I  O  N ================###*/}
                  <div className=" ml-[5%] mt-24 items-center  fade-in-slow h-[60%] w-[20%] " id='courses' > 
                        <ul>
                        <li>
                              <div className="mr-2 my-5  ">
                              <Link href={'/studentlife'}>
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} onClick={onClose} className='schools text-black font-bold' > Students Life </h1> 
                              </Link>
                              </div>
                              </li>

                              {/* <li>
                              <div className="mr-2 my-5  ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Culture </h1> 
                              
                              </div>
                              </li> */}
                              
                              <li>
                              <div className="mr-2 my-5 fade-in-slow  ">
                              <Link href={'/religious/religious'}>
                                    <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>Religious Matters</h1> 
                              </Link>
                                 </div>   
                              <div className="mr-2 my-5 slider slide--slow ">
                                    <Link href={'/news'}>
                                          <h1 onClick={onClose} style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'>News</h1>
                                    </Link>
                              </div>
                              </li>
                              
                              <li>


                              <div className="mr-2 my-5 slider slide--fast ">
                                     
                                    <Link href={'/events'}>
                                          <h1  onClick={onClose}  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Events</h1>
                                    </Link>

                              </div>

                              <div className="mr-2 my-5 slider slide--fast ">
                                     
                                    <Link href={'/gallery'}>
                                          <h1  onClick={onClose}  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold'> Gallery</h1>
                                    </Link>

                              </div>
                              </li>
                              
                        </ul>
                        
                  </div>
                  


                              {/*###=============== S  P  O  R  T  S ================###*/}

                  <div className=" fade-in ml-24 my-24 hidden "  id='fees'> 
                        <ul className='ml-10 my-20'>
                              <li>
                              <div className="mr-2 my-5 ">
                              <Link href="/sports/football">
                                <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Foot} > Football </h1> 
                              </Link>
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href="/sports/netball">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Net}>Net ball</h1> 
                              </Link>
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href="/sports/volleyball">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Volley}> Volley </h1> 
                              </Link>
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href="/sports/woodball">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Wood}> Wood ball</h1>
                              </Link>
                              </div>
                              </li>

                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href="/sports/basketball">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Basket}>Basket</h1> 
                              </Link>
                              </div>
                              </li>
                              <li>
                              <div className="mr-2 my-5  ">
                              <Link href="/sports/tabletenis">
                                    <h1  style={{fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' onMouseOver={Table}>Table Tenis</h1> 
                              </Link>
                              </div>
                              </li>
 
                        </ul>
                        
                        
                  </div>

                  



                  {/*###============== C  L  U  B  S    &    A  S  S  O  C  I  T  I  O  N  S==============###*/}
                  <div className=" fade-in ml-24 my-12 hidden " id='why_bugema-data'> 
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
                              
                             
                              
                        </ul>
                        
                  </div>

                  


                              
                  {/*###============== G  E  T    I N    T  O  U  C  H ==============###*/}
                  <div className=" fade-in ml-24 my-24 hidden "  id='get-in-touch'> 
                        <ul className='ml-10 my-20'>
                              {/* <li>
                              <div className="mr-2 my-5 ">
                              
                              <h1  style={{ fontSize: '15px',cursor:"pointer", marginRight:'5px'}} className='schools text-black font-bold' > Open Days </h1> 
                              
                              </div>
                              </li> */}
                              
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

                  <div className=' ml-20 vertical-line mt-24 '>
                  </div>

                  {/* SCIENCE AND TECHNOLOGY COURSES */}
                  <div className='ml-10   '  id='IT'>

                              {/* ###============= A C C O M M O D D A T I O N     M O R E =================### */}
                        <div className='' id='courses-more' >
                              <div className=' ml-24 my-12 fade-in '>
                                          <Image src={image} alt='img' width={350} height={450} className="-ml-5 fade-in rounded-tr-3xl rounded-bl-3xl"/>
                              </div>

                              <div className="ml-5  text-black grid grid-cols-2 gap-3 fade-in " >
                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                                <Link href='https://apply.bugemauniv.ac.ug'>
                                                <h1  className='new-arr'> Apply now <FaArrowRight className='arrow1'/></h1>
                                                </Link> 
                                        </div>

                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                                <Link href='https://erms.bugemauniv.ac.ug/student/login/'>
                                                <h1   className='new-arr'>Students&apos; portal <FaArrowRight className='arrow1'/></h1>
                                                </Link> 
                                        </div>

                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                        <Link href='https://elearning.bugemauniv.ac.ug/'>
                                                <h1   className='new-arr'>E-Learnig <FaArrowRight className='arrow1'/></h1>
                                        </Link> 
                                        </div>
                              </div> 
                              
                        </div>


                        
                        
                        {/* ###=============S P O R T S       M O R E =================### */}
                        <div className=' hidden  fade-in' id='fees-more'>
                              <div id='foot' className=' ml-24 my-12 fade-in '>
                                          <Image src={football} alt='img' width={350} height={450} className="-ml-5 rounded-tr-3xl rounded-bl-3xl "/>
                              </div>

                              <div id='basket' className='hidden ml-24 my-12 fade-in '>
                                          <Image src={basket} alt='img' width={350} height={450} className="-ml-5 rounded-tr-3xl rounded-bl-3xl "/>
                              </div>

                              <div id='volley' className='hidden ml-24 my-12  fade-in '>
                                          <Image src={volley2c} alt='img' width={350} height={450} className="-ml-5  rounded-tr-3xl rounded-bl-3xl"/>
                              </div>

                              <div id='net' className='hidden ml-24 my-12  fade-in '>
                                          <Image src={netball} alt='img' width={350} height={450} className="-ml-5 rounded-tr-3xl rounded-bl-3xl "/>
                              </div>

                              <div id='wood' className='hidden ml-24 my-12  fade-in '>
                                          <Image src={woodball} alt='img' width={350} height={450} className="-ml-5 rounded-tr-3xl rounded-bl-3xl "/>
                              </div>

                              <div id='table' className='hidden ml-24 my-12  fade-in '>
                                          <Image src={volley2c} alt='img' width={350} height={450} className="-ml-5 rounded-tr-3xl rounded-bl-3xl "/>
                              </div>

                              <div className='grid grid-cols-2 gap-3 ml-5 my-12 fade-in ' >
                                <Link href='/sports/sports'> 
                                <h1   className='  p-3 border border-black hover:bg-dark hover:text-white rounded-full new-arr change-on-hover2 text-black'> More on sports  <FaArrowRight className='new-arr'/></h1>
                                </Link>
                              </div>


                              
                        </div>
                        
                        
                        
                        {/* ###============= C L U B S    AND   A S S O C I A T  I O N S    M O R E =================### */}
                        <div className='hidden' id='why-bugema-more' >
                              <div className=' ml-24 my-12 fade-in '>
                                          <Image src={bucosa} alt='img' width={350} height={450} className="-ml-5  rounded-tr-3xl rounded-bl-3xl"/>
                              </div>
                              <div className="ml-5  text-black grid grid-cols-2 gap-3 fade-in " >
                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                                <Link href='https://apply.bugemauniv.ac.ug'>
                                                <h1  className='new-arr'> Apply now <FaArrowRight className='arrow1'/></h1>
                                                </Link> 
                                        </div>

                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                                <Link href='https://erms.bugemauniv.ac.ug/student/login/'>
                                                <h1   className='new-arr'>Students&apos; portal <FaArrowRight className='arrow1'/></h1>
                                                </Link> 
                                        </div>

                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                        <Link href='https://elearning.bugemauniv.ac.ug/'>
                                                <h1   className='new-arr'>E-Learnig <FaArrowRight className='arrow1'/></h1>
                                        </Link> 
                                        </div>
                              </div> 
                              
                        </div>
                        
                        

                        {/* ###=============STUDENT LEADERSHIP      M O R E =================### */}
                        <div className=' hidden flex flex-col my-12  gap-2 fade-in' id='touch-more'>
                              <div className=' ml-24 fade-in flex'>
                                          <Image src={palm_girls} alt='img' width={350} height={450} className="ml-19 -mr-10 rounded-tr-3xl rounded-bl-3xl  "/>
                              </div>
                              <div className="ml-5  text-black grid grid-cols-2 gap-3 fade-in " >
                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                                <Link href='https://apply.bugemauniv.ac.ug'>
                                                <h1  className='new-arr'> Apply now <FaArrowRight className='arrow1'/></h1>
                                                </Link> 
                                        </div>

                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                                <Link href='https://erms.bugemauniv.ac.ug/student/login/'>
                                                <h1   className='new-arr'>Students&apos; portal <FaArrowRight className='arrow1'/></h1>
                                                </Link> 
                                        </div>

                                        <div className=' p-3 border border-black hover:bg-dark hover:text-white  change-on-hover rounded-full'>
                                        <Link href='https://elearning.bugemauniv.ac.ug/'>
                                                <h1   className='new-arr'>E-Learnig <FaArrowRight className='arrow1'/></h1>
                                        </Link> 
                                        </div>
                              </div> 
                              
                        </div>
                          
                  </div>
                  
            </div>
      </>
      
  );
};

export default Model1;