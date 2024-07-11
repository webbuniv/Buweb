"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/images/hospital/one.jpg";
import image2 from "@/public/images/hospital/two.jpg";
import image3 from "@/public/images/hospital/three.jpg";
import image4 from "@/public/images/hospital/four.jpg";

const images = [image1, image2, image3];

const SlidingImages = ({ onCycleComplete }) => {
  return (
    <div className="w-full overflow-hidden relative flex ">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ delay: index * 2, duration: 2, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (index === images.length - 1) {
              setTimeout(onCycleComplete, 2000);
            }
          }}
        >
          <Image src={img} alt={`Image ${index + 1}`} width={500} height={400} />
        </motion.div>
      ))}
    </div>
  );
};

export default function Hospital() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timeout;
    if (showText) {
      timeout = setTimeout(() => {
        setShowText(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showText]);

  const handleCycleComplete = () => {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 2000);
  };

  return (
      <div className="relative flex flex-col gap-2 justify-center mx-auto mt-8">
        <SlidingImages onCycleComplete={handleCycleComplete} />
        {showText && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-500 bg-black bg-opacity-50 p-4 rounded">
            Welcome to Bugema University Hospital
            </h1>
          </div>
        )}
        <div className="flex flex-row gap-2 mt-4">
          <div className="flex-1 p-4 border rounded-md">
            {/* Your code for the first column */}
            <h2 className="text-lg font-semibold">About Our Hostipal</h2>
            <p>You are welcome to the School of Agricultural and Applied Sciences which is the niche of Bugema University. This is the basis of the economy not only in Uganda but also in most developing economies around the world. This school continues to make astronomical steps in working with local rural communities to positively change their livelihoods with minimal impact on the environment. The school welcomes both students and faculty who wish to learn, exchange knowledge, and collaborate with other faculties around the world not only to meet global sustainable development goals but to ensure the future of humanity.</p>
          </div>
          <div className="flex-1 p-4 border rounded-md">
          <Image src={image4} alt="hospital" width={400} height={300} className="rounded-lg"/>

          </div>
        </div>
      </div>
    );
  }
  