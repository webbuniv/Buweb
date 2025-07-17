import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroOverlay = ({
  title,
  description,
  link,
  linkText

}) => {
        const truncateString = (text: string, maxLength: number): string => {
                return text.length > maxLength ? text.slice(0, maxLength) + " . . ." : text;
              };
  return (
    <div className=" absolute bottom-20 md:inset-0 bg-gradient-to-r from-black/90 via-transparent/10  to-  p-4  " >
      
      <div className="  flex-col  h- md:[70%] md:w-[70%] justify-center space-y-6 mt-[80%] md:mt-[12%] p-4  lg:flex lg:flex-col   ">

        <div className=" flex h-[50%] md:w-[50%] p-4 items-center text-wrap " >
                <h1 className=" text-start text-white text-5xl lg:text-8xl md:font-bold  slider slide--fast text-wrap">
            {title}
          </h1>
        </div>

        <div className="flex md:w-[65%] px-2 ">
          <h1 className="hidden md:flex text-2xl text-white" >
                {description}
          </h1>
          <h1 className="md:hidden text-2xl text-white" >
                {truncateString(description, 100)}
          </h1>
        </div>

        <div className=" 2xl:w-[15%] w-full border border-black hover:bg-dark text-white  change-on-hover  flex rounded-full p-2  ">
         <Link href={`${link}`} className="flex gap-2 items-center " >
                <h1   className='new-arr'>{linkText } </h1>
                <FaArrowRight className='arrow1'/>
                </Link> 
        </div>
        

      </div>
    </div>
  );
};

export default HeroOverlay;
