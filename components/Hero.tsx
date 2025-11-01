'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video errors
    const handleError = (e: Event) => {
      console.error('Video failed to load', e);
      setVideoError(true);
    };

    // Try to play video when it's ready
    const handleCanPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
            setVideoError(false);
          })
          .catch((error) => {
            // Autoplay was prevented or video failed to load
            console.warn('Video autoplay failed:', error);
            setVideoError(false); // Still show video, just might not autoplay
          });
      }
    };

    const handleLoadedMetadata = () => {
      // Try to play when metadata is loaded
      handleCanPlay();
    };

    // Add event listeners
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', () => {
      setVideoError(false);
    });

    // Set video source and load
    video.load();

    // Try to play after a short delay (for cases where video is already loaded)
    const timeoutId = setTimeout(() => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA
        handleCanPlay();
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

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
          {!videoError && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
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
                pointerEvents: 'none',
                zIndex: 1,
                objectFit: 'cover'
              }}
            >
              <source src="/trial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
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
              src="/logo.png"
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
            className="heading-tertiary text-center hero-raftaar-title"
          >
            Raftaar Theme Park
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="heading-primary text-center hero-main-text hero-race-rest-revive"
          >
            <span className="hero-word">RACE</span>
            <span className="hero-separator-desktop"> • </span>
            <span className="hero-word">REST</span>
            <span className="hero-separator-desktop"> • </span>
            <span className="hero-word">REVIVE</span>
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
      <style jsx global>{`
        /* Use dynamic viewport height on mobile to avoid browser UI causing jumps */
        @media (max-width: 640px) {
          .hero-video-wrapper { 
            height: calc(100dvh - 70px) !important;
            bottom: 0 !important;
            top: 70px !important;
          }
          .hero-video-bg {
            object-fit: cover !important;
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            position: absolute !important;
          }
        }
        /* Hide image fallback on all screens; show video */
        .mobile-hero-fallback { display: none !important; }
        @media (prefers-reduced-motion: reduce) {
          .hero-video-bg { animation: none !important; }
        }
        
        /* Apply Blanka font to RACE • REST • REVIVE - override global heading styles */
        .hero-race-rest-revive,
        .hero-race-rest-revive *,
        h1.hero-race-rest-revive,
        h1.hero-race-rest-revive.heading-primary {
          font-family: 'Blanka', sans-serif !important;
          font-weight: 400 !important;
        }
        
        /* Apply Blanka font to Raftaar Theme Park - override global heading styles */
        .hero-raftaar-title,
        .hero-raftaar-title *,
        h2.hero-raftaar-title,
        h2.hero-raftaar-title.heading-tertiary {
          font-family: 'Blanka', sans-serif !important;
          font-weight: 400 !important;
        }
        
        .hero-main-text {
          white-space: nowrap;
          overflow: visible;
        }
        
        .hero-word {
          display: inline;
        }
        
        .hero-separator-desktop {
          display: inline;
        }
        
        /* Mobile - stack vertically */
        @media (max-width: 640px) {
          .hero-main-text {
            white-space: normal !important;
            line-height: 1.2;
          }
          
          .hero-word {
            display: block;
          }
          
          .hero-separator-desktop {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
