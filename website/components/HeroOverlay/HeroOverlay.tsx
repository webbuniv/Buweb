import Link from 'next/link';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const HeroOverlay = ({ title,title2,title3, subtitle,subtitle2,subtitle3, buttonText, buttonLink }) => {
  return (
      <>
            <div className="hidden hero-overlay lg:flex flex-col space-y-4 justify-center mx-auto items-center mt-4">

            <h1 className='text-6xl mb-4'>{title}</h1>

            <p className='text-2xl mt-5'>{subtitle}</p>

            <Link href={buttonLink} className="button w-fit border-white animate-bounce bg-dark border-2 px-4 py-1 border-r-2 rounded hover:scale-105 transition-all duration-500">
            <span className='flex flex-row gap-2 justify-center items-center'>
                  {buttonText}
                  <FaArrowDown/>
            </span>
            </Link>

            </div>


            <div  className='hero-overlay2 '>
            <div className='flex-1'>
                  <h1 className='text-start sm:text-6xl text-4xl font-medium font-bold mb-0'>{title3}</h1>
            </div>
            <div className='flex-1'>
                  <h1 className=' text-start text-8xl text-4xl font-medium font-bold mb-0'>{title2}</h1>
            </div>

                  <div className='flex-1 hidden sm:block'> {/* Hide on small screens, show on medium and above */}
                   <h2 className='text-start text-2xl mt-5'>{subtitle2},<br />{subtitle3}</h2>
                  </div>

                 
            </div>

            
            
      </>
    
  );
};

export default HeroOverlay;
