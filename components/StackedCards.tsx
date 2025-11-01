'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StackedCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Gaming Excellence',
      description: 'Experience the latest in gaming technology with our state-of-the-art equipment and immersive environments.',
      image: '/kart.jpg',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      title: 'Racing Thrills',
      description: 'Feel the adrenaline rush on our professional racing track designed for maximum excitement and safety.',
      image: '/kart2.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Arcade Fun',
      description: 'Dive into our arcade zone featuring the latest PlayStation games and precision shooting ranges.',
      image: '/kart4.jpg',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Community Events',
      description: 'Join our vibrant community through tournaments, competitions, and special events throughout the year.',
      image: '/kart5.jpg',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 5,
      title: 'Premium Experience',
      description: 'Enjoy our premium facilities with comfortable seating, refreshments, and top-notch customer service.',
      image: '/kart6.jpg',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      title: 'Track Views',
      description: 'Experience breathtaking views of our professional racing circuit with challenging turns and high-speed straights.',
      image: '/1.jpg',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 7,
      title: 'Racing Circuit',
      description: 'Master the art of precision driving on our state-of-the-art track designed for maximum excitement.',
      image: '/2.jpg',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 8,
      title: 'Professional Track',
      description: 'Feel the thrill of professional racing on our meticulously designed track with safety-first approach.',
      image: '/3.jpg',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  // Auto-rotate cards
  useEffect(() => {
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches; // <sm
    if (isReduced || isSmallScreen) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
            >
              Gallery
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards Stack */}
          <div className="relative h-[360px] sm:h-[460px] md:h-[500px] perspective-1000">
            {cards.map((card, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
              const isNext = index === (currentIndex + 1) % cards.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden group ${
                    isActive ? 'z-30' : isPrev ? 'z-20' : 'z-10'
                  }`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.85, 
                    rotateY: isPrev ? -20 : isNext ? 20 : 0,
                    x: isPrev ? -60 : isNext ? 60 : 0,
                    y: isPrev ? 30 : isNext ? 30 : 0,
                    filter: 'blur(4px)'
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.5, 
                    scale: isActive ? 1 : 0.85,
                    rotateY: isPrev ? -20 : isNext ? 20 : 0,
                    x: isPrev ? -60 : isNext ? 60 : 0,
                    y: isPrev ? 30 : isNext ? 30 : 0,
                    filter: isActive ? 'blur(0px)' : 'blur(4px)'
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.5 },
                    filter: { duration: 0.6 }
                  }}
                  whileHover={isActive ? { 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  } : {}}
                >
                  <div className="relative w-full h-full">
                    {/* Background Image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* No gradient overlay - clean images */}
                    
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.6, 
                          y: isActive ? 0 : 10
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: isActive ? 0.3 : 0,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <motion.h3 
                          className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: isActive ? 1 : 0.8, x: 0 }}
                          transition={{ duration: 0.5, delay: isActive ? 0.4 : 0, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          {card.title}
                        </motion.h3>
                        <motion.p 
                          className="text-lg text-gray-200 mb-6 max-w-md drop-shadow-md"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
                          transition={{ duration: 0.5, delay: isActive ? 0.5 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          {card.description}
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <motion.div 
            className="flex justify-center items-center space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevCard}
              className="p-3 sm:p-3 bg-gray-800/70 hover:bg-gray-700/70 rounded-full shadow-lg backdrop-blur-sm"
              aria-label="Previous card"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ChevronLeft size={22} className="text-white sm:w-5 sm:h-5" />
            </motion.button>

            {/* Dots Indicator - hidden on mobile */}
            <div className="hidden sm:flex space-x-2">
              {cards.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    index === currentIndex
                      ? 'bg-red-500'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                  animate={{
                    scale: index === currentIndex ? 1.3 : 1,
                    opacity: index === currentIndex ? 1 : 0.6
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextCard}
              className="p-3 sm:p-3 bg-gray-800/70 hover:bg-gray-700/70 rounded-full shadow-lg backdrop-blur-sm"
              aria-label="Next card"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ChevronRight size={22} className="text-white sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StackedCards;
