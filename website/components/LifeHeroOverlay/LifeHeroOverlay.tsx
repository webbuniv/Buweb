import Link from 'next/link';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const LifeHeroOverlay = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="hidden hero-overlay md:flex flex-col space-y-4 justify-center mx-auto items-center mt-4">

      <h1 className='text-6xl mb-4'>{title}</h1>

      <p className='text-2xl mt-5'>{subtitle}</p>

      <Link href={buttonLink} className="button w-fit border-white border-2 px-4 py-1 border-r-2 rounded hover:scale-105 transition-all duration-300">
        <span className='flex flex-row gap-2 justify-center items-center'>
            {buttonText}
            <FaArrowDown/>
        </span>
      </Link>
    </div>
  );
};

export default LifeHeroOverlay;
