import Image from "next/image";
import React from "react";
import HeroOverlay from "../HeroOverlay/HeroOverlay";
import { string } from "zod";

const HeroSlide = ({ media }) => {
  return (
    <div className="relative w-full h-[800px] -mb-4 z-10">
      {media.type === "video" ? (
        // Render video with overlay
        <div>
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <HeroOverlay
            // title="BUGEMA UNIVERSITY"
            title2="Service."
            title3="Where Head, Heart and Hands unite in"
            // subtitle="Excellence In Service"
            subtitle2="With a diverse culture of over 17 countries and beyond, Bugema University is where Knowledge meets Opportunity"
            subtitle3="to offer you Quality education with a hands-on experience. . ."
            title={undefined} subtitle={undefined} buttonText={undefined} buttonLink={undefined}
            // buttonText="Apply Now"
            // buttonLink="http://erms.bugemauniv.ac.ug/application"
          />
        </div>
      ) : media.type === "image" ? (
        // Render image with overlay
        <>
          <Image
            src={media.src}
            alt="Hero Slide"
            className="w-fit h-[700px] object-fill lg:w-full"
            width={1000}
            height={800}
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-100">
          <HeroOverlay
              // title="BUGEMA UNIVERSITY"
              title2=""
              title3=""
              // subtitle="Excellence In Service"
              subtitle2=""
              subtitle3=""
              title={undefined} subtitle={undefined} buttonText={undefined} buttonLink={undefined}
              // buttonText="Apply Now"
              // buttonLink="http://erms.bugemauniv.ac.ug/application"
            />
            <HeroOverlay 
              // title2="Service."
            //   title3=" Admissions for our January 2025 intake are now open!"
            
              // subtitle2="With a diverse culture of over 17 countries and beyond, Bugema University is where Knowledge meets Opportunity"
              // subtitle3="to offer you Quality education with a hands-on experience. . ."
              title={undefined} title2={undefined} title3={undefined} subtitle2={undefined} subtitle3={undefined} subtitle={undefined} buttonText={undefined} buttonLink={undefined} 
            />
          </div>
        </>
      ) : (
        // Render third type (no overlay)
        <div>
          <Image
            src={media.src}
            alt="Hero Slide without overlay"
            className="w-fit h-[650px] object-fill lg:w-full"
            width={1000}
            height={800}
          />
        </div>
      )}
    </div>
  );
};

export default HeroSlide;
