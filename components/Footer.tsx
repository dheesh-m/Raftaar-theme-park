'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-50">
      {/* Main Footer Section with RACE REST REVIVE */}
      <section className="relative w-full bg-red-600 text-white overflow-hidden">
        {/* Main Text Section */}
        <div className="w-full flex items-center justify-center" style={{ minHeight: 'clamp(300px, 40vw, 500px)', padding: 'clamp(3rem, 8vw, 6rem) 2rem' }}>
          <h1 className="footer-main-text">
            <span className="footer-text-word">race</span>
            <span className="footer-text-word">rest</span>
            <span className="footer-text-word">revive</span>
          </h1>
        </div>
      </section>

      {/* Minimal Dark Footer Bar */}
      <div className="w-full h-2 bg-gray-900"></div>

      <style jsx>{`
        .footer-main-text {
          font-size: clamp(3rem, 15vw, 12rem);
          font-weight: 900;
          color: #FFFFFF;
          text-align: center;
          letter-spacing: clamp(0.02em, 0.2vw, 0.1em);
          line-height: 0.9;
          text-transform: lowercase;
          font-family: 'Lovelo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          width: 100%;
          overflow: visible;
          transform: scaleY(1.1);
          margin: 0;
          padding: 0;
          display: block;
        }
        
        .footer-text-word {
          display: inline;
          white-space: pre;
        }
        
        .footer-text-word:not(:last-child)::after {
          content: ' ';
        }

        @media (max-width: 768px) {
          .footer-main-text {
            font-size: clamp(2.5rem, 12vw, 8rem);
            line-height: 0.95;
          }
        }

        @media (max-width: 640px) {
          .footer-main-text {
            font-size: clamp(2rem, 10vw, 6rem);
            line-height: 0.95;
          }
          
          .footer-text-word {
            display: block;
            margin-bottom: 0.1em;
          }
          
          .footer-text-word::after {
            content: '';
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

