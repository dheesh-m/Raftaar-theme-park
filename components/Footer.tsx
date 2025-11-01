'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-50">
      {/* Main Footer Section with RACE REST REVIVE */}
      <section className="relative w-full text-white overflow-hidden footer-red-box">
        {/* Footer Info Bar */}
        <div className="footer-info-bar">
          <div className="footer-info-container">
            <div className="footer-info-content">
              <div>@2025 Raftaar</div>
              <div>Email: contact@raftaar.win</div>
              <div>Phone no: +91 8766741673</div>
            </div>
          </div>
        </div>
        
        {/* Main Text Section */}
        <div className="w-full flex items-center justify-center footer-content-container">
          <h1 className="footer-main-text">
            RACE REST REVIVE
          </h1>
        </div>
      </section>

      <style jsx>{`
        .footer-info-bar {
          background: transparent;
          width: 100%;
          padding: clamp(0.75rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 3rem);
          position: relative;
          z-index: 1;
        }
        
        .footer-info-container {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        
        .footer-info-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: clamp(0.6rem, 1.2vw, 0.9rem);
          font-size: clamp(0.875rem, 1.6vw, 1.125rem);
          color: #000000;
          font-weight: 500;
          text-align: right;
          font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          letter-spacing: 0.02em;
          line-height: 1.6;
        }
        
        .footer-info-content > div {
          transition: opacity 0.3s ease;
        }
        
        .footer-info-content > div:hover {
          opacity: 0.8;
        }
        
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
          font-weight: 900;
          color: #FFFFFF;
          text-align: center;
          letter-spacing: normal;
          word-spacing: normal;
          line-height: 1.2;
          text-transform: uppercase;
          font-family: 'Lovelo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          margin: 0;
          padding: 0;
          white-space: nowrap;
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-info-bar {
            padding: clamp(0.6rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem);
          }
          
          .footer-info-container {
            justify-content: flex-end;
            align-items: flex-start;
            width: 100%;
          }
          
          .footer-info-content {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
            font-size: clamp(0.8rem, 1.4vw, 1rem);
            gap: clamp(0.5rem, 1vw, 0.7rem);
            font-weight: 500;
            letter-spacing: 0.02em;
            line-height: 1.6;
            font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          }
          
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
          .footer-info-bar {
            padding: clamp(0.5rem, 1.2vw, 0.8rem) clamp(0.8rem, 2.5vw, 1.5rem);
          }
          
          .footer-info-container {
            justify-content: flex-end;
            align-items: flex-start;
            width: 100%;
          }
          
          .footer-info-content {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
            font-size: clamp(0.75rem, 1.3vw, 0.95rem);
            gap: clamp(0.45rem, 0.9vw, 0.65rem);
            font-weight: 500;
            letter-spacing: 0.02em;
            line-height: 1.6;
            font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          }
          
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

