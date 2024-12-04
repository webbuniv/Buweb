import Image from "next/image";
import React from "react";
import HeroOverlay from "../HeroOverlay/HeroOverlay";

const HeroSlide = ({ media }) => {
  return (
    <div className="relative w-full h-[800px] z-10">
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
            className="w-fit h-[800px] object-fill lg:w-full"
            width={1000}
            height={800}
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-100">
          <HeroOverlay
              // title="BUGEMA UNIVERSITY"
              title2=""
              title3="Bugema University officially receives an ambulance donation from ADRA Uganda"
              // subtitle="Excellence In Service"
              subtitle2=""
              subtitle3=""
              title={undefined} subtitle={undefined} buttonText={undefined} buttonLink={undefined}
              // buttonText="Apply Now"
              // buttonLink="http://erms.bugemauniv.ac.ug/application"
            />
            <HeroOverlay
              title2="Service."
              title3="Where Head, Heart and Hands unite in"
              subtitle2="With a diverse culture of over 17 countries and beyond, Bugema University is where Knowledge meets Opportunity"
              subtitle3="to offer you Quality education with a hands-on experience. . ."
              title={undefined} subtitle={undefined} buttonText={undefined} buttonLink={undefined}
            />
          </div>
        </>
      ) : (
        // Render third type (no overlay)
        <div>
          <Image
            src={media.src}
            alt="Hero Slide without overlay"
            className="w-fit h-[800px] object-fill lg:w-full"
            width={1000}
            height={800}
          />
        </div>
      )}
    </div>
  );
};

export default HeroSlide;
