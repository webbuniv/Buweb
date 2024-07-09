import Image from 'next/image';
import React from 'react';

const HeroSlide = ({ media }) => {
  return (
    <div className="relative w-full h-full">
      {media.type === 'video' ? (
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <Image src={media.src} alt="Hero Slide" className="w-full h-[800px] object-cover" width={1200} height={100}/>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </>
      )}
    </div>
  );
};

export default HeroSlide;

