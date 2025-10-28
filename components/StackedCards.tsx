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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience the{' '}
            <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Ultimate
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes Raftaar Theme Park the premier destination for gaming and racing enthusiasts
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards Stack */}
          <div className="relative h-[500px] perspective-1000">
            {cards.map((card, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
              const isNext = index === (currentIndex + 1) % cards.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden ${
                    isActive ? 'z-30' : isPrev ? 'z-20' : 'z-10'
                  }`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    rotateY: isPrev ? -15 : isNext ? 15 : 0,
                    x: isPrev ? -50 : isNext ? 50 : 0,
                    y: isPrev ? 20 : isNext ? 20 : 0
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.7, 
                    scale: isActive ? 1 : 0.9,
                    rotateY: isPrev ? -15 : isNext ? 15 : 0,
                    x: isPrev ? -50 : isNext ? 50 : 0,
                    y: isPrev ? 20 : isNext ? 20 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={isActive ? { scale: 1.02 } : {}}
                >
                  <div className="relative w-full h-full">
                    {/* Background Image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50`} />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0.8, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                          {card.title}
                        </h3>
                        <p className="text-lg text-gray-200 mb-6 max-w-md">
                          {card.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevCard}
              className="p-3 sm:p-3 bg-gray-800/70 hover:bg-gray-700/70 rounded-full transition-colors duration-300 shadow-lg"
              aria-label="Previous card"
            >
              <ChevronLeft size={22} className="text-white sm:w-5 sm:h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-red-500 scale-110 sm:scale-125'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="p-3 sm:p-3 bg-gray-800/70 hover:bg-gray-700/70 rounded-full transition-colors duration-300 shadow-lg"
              aria-label="Next card"
            >
              <ChevronRight size={22} className="text-white sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCards;
