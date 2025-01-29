import Image from 'next/image';
import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from 'react-icons/fa6';
import { BiBookOpen, BiSolidPencil } from 'react-icons/bi';
import { motion } from 'framer-motion';
// import background from '../../public/images/features/int.jpg'

export const bgImage = '/images/features/int.jpg'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
  scrollButton2: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity
    },
  },
};

const WhyHero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-10 md:pt-[150px] md:pb-[100px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] -mt-36"
        
      >
      </section>
    </>
  );
};

export default WhyHero;
