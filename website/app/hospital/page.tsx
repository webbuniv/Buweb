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
import image5 from "@/public/images/hospital/five.jpg"; // New image

const images = [image1, image2, image3];

const SlidingImages = ({ onCycleComplete }) => {
  return (
    <div className="w-full overflow-hidden relative flex">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0 relative"
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
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hidden md:flex">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 bg-black bg-opacity-50 p-4 rounded">
          Welcome to Bugema University Hospital
        </h1>
      </div>
    </div>
  );
};

export default function Hospital() {
  const [showText, setShowText] = useState(false);

  const handleCycleComplete = () => {
    setShowText(true); // Set showText to true once cycle completes
  };

  return (
    <div className="relative flex flex-col gap-2 justify-center mx-auto mt-8">
      <SlidingImages onCycleComplete={handleCycleComplete} />
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="flex-1 p-4 border rounded-md">
          <h2 className="text-3xl font-semibold text-blue-700">About Our Hospital</h2>
          <p>
          A medical center with the services of qualified medical personnel is located on campus.
          Health and emergency care are available to students as well as members of the community.
          The facility includes services for both inpatients and outpatients, laboratory services,
          maternal – child health services, dental services, optical services, HIV counseling and
          testing and a range of community health services.
          </p>
        </div>
        <div className="flex-1 p-4 border rounded-md mx-10">
          <Image src={image4} alt="hospital" width={400} height={300} className="rounded-lg mt-6" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="flex-1 p-4 border rounded-md">
          <h2 className="text-3xl font-semibold text-blue-700">Our Services</h2>
          <p>
            We provide a wide range of healthcare services including outpatient services, inpatient care, emergency services, and specialized medical treatments. Our dedicated team of professionals is committed to providing compassionate and high-quality care to our patients.
          </p>
        </div>
        <div className="flex-1 p-4 border rounded-md">
          <h2 className="text-3xl font-semibold text-blue-700">Our Services</h2>
           <p>
            We provide a wide range of healthcare services including outpatient services, inpatient care, emergency services, and specialized medical treatments. Our dedicated team of professionals is committed to providing compassionate and high-quality care to our patients.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="flex-1 p-4 border rounded-md mx-6">
          <Image src={image4} alt="hospital" width={400} height={300} className="rounded-lg mt-6" />
        </div>
        <div className="flex-1 p-4 border rounded-md">
          <h2 className="text-3xl font-semibold text-blue-700">Ambulance</h2>
          <p>
          Our hospital offers 24/7 ambulance services to ensure that patients receive prompt and efficient medical attention during emergencies.
          </p>
          <br />
          <p>
           Our well-equipped ambulances are staffed with trained professionals ready to provide critical care en route to the hospital.
          </p>
        </div>
        
      </div>
    </div>
  );
}
