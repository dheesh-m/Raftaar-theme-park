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
    <section id="home" className="h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center relative overflow-hidden snap-start" style={{ paddingTop: '80px' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center" style={{ top: '80px', height: 'calc(100vh - 80px)' }}>
        <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/logo.jpg"
            className="hero-video-bg hero-fade-in w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%'
            }}
          >
            <source src="/trialvid.mp4" type="video/mp4" />
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1559033469-0740a1607c3c?auto=format&fit=crop&w=1740&q=80"
                alt="Go-kart racing on a track"
                fill
                className="object-cover opacity-30"
              />
            </div>
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="z-10 px-4" style={{ marginTop: '80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/logo.jpg"
            alt="Raftaar Theme Park circular logo"
            width={80}
            height={80}
            className="rounded-full object-cover md:w-24 md:h-24"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="heading-tertiary mb-4"
        >
          Raftaar Theme Park
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="heading-primary mb-8"
        >
          RACE • REST • REVIVE
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToContact}
          className="inline-block accent-gold font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          Discover More →
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
