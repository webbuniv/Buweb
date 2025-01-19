import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    role: "Farmer",
    content: "The spray optimization technology has revolutionized my farming practices. I've seen a significant increase in crop yield and a reduction in chemical usage.",
    avatar: "/images/avatars/john-doe.jpg"
  },
  {
    name: "Jane Smith",
    role: "Agricultural Researcher",
    content: "Bugema University's sustainable farming practices are setting new standards in the industry. Their innovative approaches are truly making a difference.",
    avatar: "/images/avatars/jane-smith.jpg"
  },
  {
    name: "Michael Johnson",
    role: "Environmental Scientist",
    content: "The reduction in chemical use and water conservation methods developed here are impressive. It's a win-win for both farmers and the environment.",
    avatar: "/images/avatars/michael-johnson.jpg"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-blue-200">What Our Partners Say</h2>
      <div className="relative w-full max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="text-center">
              {/* <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              /> */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonials[currentIndex].content}</p>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-blue-500 text-white p-2 rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-blue-500 text-white p-2 rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

