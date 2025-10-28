'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const ShootingRange: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const shootingData = [
    {
      id: 1,
      image: '/kart.jpg',
      title: 'Laser Shooting Range',
      description: 'Test your precision and accuracy with our state-of-the-art laser shooting range.',
      specs: 'Laser Technology • Safety First'
    },
    {
      id: 2,
      image: '/kart2.jpg',
      title: 'Rifle Shooting',
      description: 'Experience the thrill of rifle shooting with professional-grade equipment and safety measures.',
      specs: 'Professional Grade • Safety Certified'
    },
    {
      id: 3,
      image: '/kart4.jpg',
      title: 'Target Practice',
      description: 'Master your shooting skills with various target challenges and difficulty levels.',
      specs: 'Multiple Targets • Score Tracking'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % shootingData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + shootingData.length) % shootingData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
        <section id="shooting" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white snap-start">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Shooting Range
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience precision shooting with our professional laser and rifle shooting ranges.
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
                    src={shootingData[currentSlide].image}
                    alt={shootingData[currentSlide].title}
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
                      {shootingData[currentSlide].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-4">
                      {shootingData[currentSlide].description}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                        {shootingData[currentSlide].specs}
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
            {shootingData.map((_, index) => (
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

export default ShootingRange;
