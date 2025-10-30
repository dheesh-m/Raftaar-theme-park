'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center relative overflow-hidden snap-start" style={{ paddingTop: '70px' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center hero-video-wrapper" style={{ top: '70px', height: 'calc(100vh - 70px)' }}>
        <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
          {/* Mobile static fallback */}
          <div className="mobile-hero-fallback absolute inset-0">
            <Image
              src="/1.jpg"
              alt="Raftaar Theme Park"
              fill
              priority
              className="object-cover"
            />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/1.jpg"
            className="hero-video-bg hero-fade-in w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            <source src="/trialvid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center min-h-screen px-3 sm:px-4 py-16 sm:py-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/logo.jpg"
              alt="Raftaar Theme Park circular logo"
              width={60}
              height={60}
              className="rounded-full object-cover sm:w-20 sm:h-20 md:w-24 md:h-24"
              priority
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="heading-tertiary text-center"
          >
            Raftaar Theme Park
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="heading-primary text-center"
          >
            RACE • REST • REVIVE
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={scrollToContact}
            className="block mx-auto accent-gold font-bold uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Discover More →
          </motion.button>
        </div>
      </div>
      <style jsx>{`
        /* Use dynamic viewport height on mobile to avoid browser UI causing jumps */
        @media (max-width: 640px) {
          .hero-video-wrapper { height: calc(100dvh - 70px) !important; }
          .hero-video-bg { display: none !important; }
          .mobile-hero-fallback { display: block !important; }
        }
        /* Hide image fallback on larger screens; show video */
        @media (min-width: 641px) {
          .mobile-hero-fallback { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-video-bg { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
