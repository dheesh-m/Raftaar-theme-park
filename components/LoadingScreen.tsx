'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500); // Small delay before hiding
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center relative">
            {/* Single Spinning Wheel with Drifting */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ 
                x: [0, 60, -30, 40, 0],
                opacity: 1
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-12 relative"
            >
              {/* Go-Kart Tire */}
              <motion.div
                className="w-24 h-24 mx-auto relative"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Tire Tread */}
                <div className="w-24 h-24 bg-black rounded-full relative shadow-2xl">
                  {/* Tire Tread Pattern */}
                  <div className="absolute inset-1 border-2 border-gray-800 rounded-full"></div>
                  <div className="absolute inset-2 border border-gray-700 rounded-full"></div>
                  
                  {/* Tread Grooves */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-8 bg-gray-600 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                        marginTop: '-1rem'
                      }}
                    />
                  ))}
                  
                  {/* Wheel Hub */}
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  </div>
                  
                  {/* Hub Bolts */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gray-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-8px)`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Speed Lines */}
              <motion.div
                className="absolute top-1/2 -left-16 w-12 h-0.5 bg-white/70"
                animate={{
                  x: [-30, -50, -70],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute top-1/2 -left-20 w-8 h-0.5 bg-white/50"
                animate={{
                  x: [-30, -50, -70],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.1,
                  ease: "easeOut"
                }}
              />

              {/* Tire Smoke Trail */}
              <div className="absolute -left-28 top-1/2 transform -translate-y-1/2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gray-500/70 rounded-full blur-sm"
                    animate={{
                      x: [0, -30, -60, -90],
                      y: [0, -8 + i * 1.2, -15 + i * 1.8, -25 + i * 2.5],
                      scale: [0.3, 0.8, 0.6, 0.2],
                      opacity: [0.9, 0.6, 0.3, 0]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>

              {/* Ground Smoke */}
              <div className="absolute -left-20 top-1/2 transform translate-y-8">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`ground-${i}`}
                    className="absolute w-4 h-2 bg-gray-600/50 rounded-full blur-md"
                    animate={{
                      x: [0, -20, -40],
                      y: [0, -2 + i * 0.5, -4 + i * 0.8],
                      scale: [0.4, 0.8, 0.3],
                      opacity: [0.7, 0.4, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl font-bold text-white mb-2"
            >
              RAFTAAR
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 mb-8"
            >
              THEME PARK
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm text-gray-400"
            >
              {Math.round(progress)}%
            </motion.p>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6"
            >
              <div className="flex space-x-2 justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
