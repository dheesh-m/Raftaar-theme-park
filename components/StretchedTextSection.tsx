'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StretchedTextSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Track scroll progress - starts when section enters viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Transform values based on scroll - reveal from 0 to 1
  // Make text visible earlier in scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 0]);

  return (
    <div style={{ position: 'relative', height: '60vh', zIndex: 0 }}>
      <section 
        ref={containerRef}
        className="sticky bottom-0 py-8 sm:py-10 md:py-12 px-4 bg-red-600 text-white"
        style={{ 
          minHeight: '300px',
          zIndex: 0,
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      <div className="w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="heading-primary stretched-text-section mb-0"
        >
          RACE • REST • REVIVE
        </motion.h1>
      </div>
      <style jsx>{`
        /* Stretched/Elongated Text Effect for Footer Section */
        .stretched-text-section {
          transform: scaleY(2.8) !important;
          letter-spacing: 0.08em !important;
          line-height: 0.75 !important;
          font-stretch: condensed !important;
          display: block !important;
          width: 100% !important;
          font-family: 'Blanka', sans-serif !important;
          font-weight: 400 !important;
          color: white !important;
          font-size: clamp(2rem, 8vw, 4rem) !important;
          margin: 0 !important;
        }
        @media (max-width: 640px) {
          .stretched-text-section {
            transform: scaleY(2.2) !important;
            font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
          }
        }
      `}</style>
      </section>
    </div>
  );
};

export default StretchedTextSection;

