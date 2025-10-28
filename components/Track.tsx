'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Track: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trackData = [
    {
      id: 1,
      image: '/1.jpg',
      title: 'Main Track View',
      description: 'Our professional 1.2-mile racing circuit designed for maximum excitement and safety.',
      specs: 'Professional Grade • Safety Certified'
    },
    {
      id: 2,
      image: '/2.jpg',
      title: 'Track Overview',
      description: 'Experience the thrill of high-speed racing on our state-of-the-art track facility.',
      specs: 'Professional Grade • Safety Certified'
    },
    {
      id: 3,
      image: '/3.jpg',
      title: 'Racing Circuit',
      description: 'Master the art of precision driving on our challenging and exciting race track.',
      specs: 'Professional Grade • Safety Certified'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trackData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trackData.length) % trackData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
        <section id="track" className="py-16 sm:py-24 md:py-32 text-center text-white snap-start">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary mb-4">The Track</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base lg:text-lg">
            Experience the state-of-the-art 1.2 mile course with challenging hairpins and high-speed straights.
          </p>
        </motion.div>

        {/* Minimalistic Carousel */}
        <motion.div 
          className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-xl">
            {/* Image Container */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                  <Image
                    src={trackData[currentSlide].image}
                    alt={trackData[currentSlide].title}
                    fill
                  className="object-cover transition-transform duration-700 ease-out"
                    priority
                  />
                <motion.div 
                  className="absolute inset-0 bg-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
              </motion.div>
                  
                  {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center px-4 sm:px-8"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                      {trackData[currentSlide].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-4">
                      {trackData[currentSlide].description}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                        {trackData[currentSlide].specs}
                      </span>
                    </motion.div>
                  </div>

                </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white text-black rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 z-10 flex items-center justify-center backdrop-blur-sm"
              aria-label="Previous image"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white text-black rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 z-10 flex items-center justify-center backdrop-blur-sm"
              aria-label="Next image"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="hidden sm:flex justify-center space-x-2 mt-6 sm:mt-8">
            {trackData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-red-500 scale-110 sm:scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Track;
