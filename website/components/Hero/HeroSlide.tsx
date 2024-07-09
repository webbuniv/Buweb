import Image from "next/image";
import React from "react";
import HeroOverlay from "../HeroOverlay/HeroOverlay";

const HeroSlide = ({ media }) => {
  return (
    <div className="relative w-full h-full z-10">
      {media.type === "video" ? (
        <div>
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <HeroOverlay
            title="BUGEMA UNIVERSITY"
            title2="Service."
            title3="Where Head, Heart and Hands unite in"
            subtitle="Excellence In Service"
            subtitle2="With a diverse culture of over 17 countries and beyond, Bugema University is where Knowledge meets Opportunity"
            subtitle3="to offer you Quality education with a hands on experience. . ."
            buttonText="Apply Now"
            buttonLink="https://apply.bugemauniv.ac.ug/"
          />
        </div>
      ) : (
        <>
          <Image
            src={media.src}
            alt="Hero Slide"
            className="w-full h-[800px] object-cover"
            width={1200}
            height={100}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </>
      )}
    </div>
  );
};

export default HeroSlide;
