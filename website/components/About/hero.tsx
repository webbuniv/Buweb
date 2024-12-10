import React from 'react';
import { HeroButton } from './hero-button';
import Image from 'next/image';
import backgroundImage from "@/public/images/footer/aerial1.png";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Student in library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-32 md:pt-40">
        <div className="max-w-4xl text-white space-y-8">
          <h1 className="text-7xl font-bold leading-tight tracking-tight">
            Why
            <br />
            Bugema
            <br />
            University
          </h1>
          
          <p className="text-2xl font-light">
            Start your journey at a top 40 university.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <HeroButton>
              Undergraduate
            </HeroButton>
            <HeroButton>
              Postgraduate
            </HeroButton>
            <HeroButton 
              variant="red" 
              withFindMore
            >
              International students
            </HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
}

