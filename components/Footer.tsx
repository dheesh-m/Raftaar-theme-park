'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-50">
      {/* Main Footer Section with RACE REST REVIVE */}
      <section className="relative w-full text-white overflow-hidden footer-red-box">
        {/* Main Text Section */}
        <div className="w-full flex items-center justify-center footer-content-container">
          <h1 className="footer-main-text">
            RACE REST REVIVE
          </h1>
        </div>
      </section>

      <style jsx>{`
        .footer-red-box {
          background: linear-gradient(to right, #000000 0%, #1a0000 20%, #330000 40%, #660000 60%, #990000 80%, #8B0000 100%);
          width: 100%;
          background-size: 100% 100%;
        }
        
        .footer-content-container {
          min-height: clamp(280px, 35vw, 500px);
          padding: clamp(3rem, 7vw, 6rem) 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .footer-main-text {
          font-size: clamp(2.5rem, 12vw, 10rem);
          font-weight: 400;
          color: #FFFFFF;
          text-align: center;
          letter-spacing: normal;
          word-spacing: normal;
          line-height: 1.2;
          text-transform: uppercase;
          font-family: 'Blanka', sans-serif !important;
          margin: 0;
          padding: 0;
          white-space: nowrap;
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-red-box {
            background: linear-gradient(to right, #000000 0%, #1a0000 20%, #330000 40%, #660000 60%, #990000 80%, #8B0000 100%) !important;
            background-size: 100% 100% !important;
          }
          
          .footer-content-container {
            min-height: clamp(220px, 30vw, 380px);
            padding: clamp(1.5rem, 4vw, 3.5rem) 1.5rem clamp(2.5rem, 6vw, 5rem) 1.5rem;
          }
          
          .footer-main-text {
            font-size: clamp(2rem, 10vw, 8rem);
            line-height: 1.2;
            white-space: nowrap;
          }
        }

        @media (max-width: 640px) {
          .footer-red-box {
            background: linear-gradient(to right, #000000 0%, #1a0000 20%, #330000 40%, #660000 60%, #990000 80%, #8B0000 100%) !important;
            background-size: 100% 100% !important;
          }
          
          .footer-content-container {
            min-height: clamp(180px, 28vw, 320px);
            padding: clamp(1.2rem, 3.5vw, 3rem) 1rem clamp(2rem, 5vw, 4rem) 1rem;
          }
          
          .footer-main-text {
            font-size: clamp(1.8rem, 8vw, 6rem);
            line-height: 1.2;
            white-space: nowrap;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

