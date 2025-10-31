'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Track scroll direction
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setScrollDirection('down');
          } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
            setScrollDirection('up');
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Send us an email',
      description: 'Book a session, ask away, or drop your feedback anytime.',
      details: 'contact@raftaar.win',
      href: 'mailto:contact@raftaar.win'
    },
    {
      icon: Phone,
      title: 'Give us a ring',
      description: "We're here daily, 8am-5pm. Let's talk games!",
      details: '+91 8766741673',
      href: 'tel:+918766741673'
    },
    {
      icon: MapPin,
      title: 'Stop by the cafe',
      description: 'Drop in for a match or a bite—see you soon!',
      details: 'Survey number 128/1, Raftaar Theme Park - Gokarting, Rifle Shooting, Arcade Zone, PS5, Racing Simulator, Jeevan Nagar, Tathawade, Dattwadi, Pimpri-Chinchwad, Maharashtra 411033',
      href: 'https://www.google.com/maps/search/Survey+number+128%2F1%2C+Raftaar+Theme+Park+-+Gokarting%2C+Rifle+Shooting%2C+Arcade+Zone%2C+PS5%2C+Racing+Simulator%2C+Jeevan+Nagar%2C+Tathawade%2C+Dattwadi%2C+Pimpri-Chinchwad%2C+Maharashtra+411033'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Raftaarwin/61555175682926/?mibextid=LQQJ4d&rdid=ssskiU9BczyA5OQR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhTzj7XnsFJjADZi9%2F%3Fmibextid%3DLQQJ4d', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/raftaar.win/?igsh=MmlranhxamQxc2Fm&utm_source=qr#', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/918766741673?text=Hi', label: 'WhatsApp' }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-3 sm:px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white snap-start" style={{ position: 'relative', zIndex: scrollDirection === 'up' ? 10 : 5, marginBottom: 0, paddingBottom: 0, overflow: 'visible' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">GET IN TOUCH</div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Game on or just want to chat?
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Questions, bookings, or just want to talk games? We're all ears.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 h-full">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <info.icon size={24} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {info.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {info.description}
                </p>
                
                {/* Contact Details */}
                <p className="text-purple-400 text-xs sm:text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                  {info.details}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Follow Us</h4>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 bg-gray-800/50 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group border border-gray-700 hover:border-purple-500/50"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Footer Section with Details */}
      <div ref={footerRef} className="relative w-screen mt-8" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="footer-overlap-section"
          style={{
            position: 'relative',
            zIndex: scrollDirection === 'up' ? 1 : 100,
            transition: 'z-index 0.3s ease'
          }}
        >
          {/* Footer Details Section */}
          <div className="footer-details-container">
            <div className="footer-details-grid">
              {/* Left Side */}
              <div className="footer-left">
                <p className="footer-detail-item">Corporate Identification Number: U34300KA2020PTC139964</p>
                <p className="footer-detail-item">Corporate Telephone Number: +91 8766741673</p>
                <p className="footer-address">
                  Survey number 128/1, Raftaar Theme Park - Gokarting, Rifle Shooting, Arcade Zone, PS5, Racing Simulator, Jeevan Nagar, Tathawade, Dattwadi, Pimpri-Chinchwad, Maharashtra 411033
                </p>
              </div>

              {/* Right Side */}
              <div className="footer-right">
                <p className="footer-detail-item">GST: 29AAGCE1484R1ZV</p>
                <p className="footer-detail-item">email: contact@raftaar.win</p>
                
                
                <div className="footer-social-icons">
                  <a href="https://www.instagram.com/raftaar.win/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="tel:+918766741673" className="footer-social-icon" aria-label="Phone">
                    <Phone size={20} />
                  </a>
                  <a href="https://wa.me/918766741673?text=Hi" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                    <MessageCircle size={20} />
                  </a>
                </div>

                <p className="footer-copyright">© 2024 Raftaar Theme Park</p>
              </div>
            </div>
          </div>

          {/* BREAK BELIEVE BUILD Text */}
          <div className="footer-overlap-content">
            <span className="footer-overlap-text">Raftaar</span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .footer-overlap-section {
          width: 100vw;
          background: #DC2626;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4);
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
        }
        
        .footer-details-container {
          width: 100%;
          padding: 3rem 2rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .footer-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
          text-align: right;
        }
        
        .footer-detail-item {
          color: #000000;
          font-size: 0.875rem;
          line-height: 1.5;
          font-weight: 400;
        }
        
        .footer-address {
          color: #000000;
          font-size: 0.875rem;
          line-height: 1.5;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
        
        .footer-links-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        
        .footer-link {
          color: #000000;
          font-size: 0.875rem;
          text-decoration: none;
          font-weight: 400;
          transition: opacity 0.2s ease;
        }
        
        .footer-link:hover {
          opacity: 0.7;
        }
        
        .footer-social-icons {
          display: flex;
          gap: 1rem;
          margin: 0.5rem 0;
          justify-content: flex-end;
        }
        
        .footer-social-icon {
          color: #000000;
          transition: opacity 0.2s ease;
        }
        
        .footer-social-icon:hover {
          opacity: 0.7;
        }
        
        .footer-copyright {
          color: #000000;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        
        .footer-overlap-content {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: clamp(5rem, 12vw, 10rem) 2rem;
          min-height: clamp(250px, 35vw, 400px);
        }
        
        .footer-overlap-text {
          font-size: clamp(5rem, 16vw, 18rem);
          font-weight: 900;
          color: #FFFFFF;
          text-align: center;
          letter-spacing: clamp(0.03em, 0.15vw, 0.1em);
          line-height: 0.85;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          transform: scaleY(1.1);
        }
        
        @media (max-width: 1024px) {
          .footer-details-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .footer-details-container {
            padding: 2rem 1.5rem 1.5rem;
          }
          
          .footer-overlap-text {
            white-space: normal;
            word-spacing: 0.1em;
            font-size: clamp(3rem, 12vw, 8rem);
          }
          
          .footer-links-row {
            gap: 0.75rem;
          }
          
          .footer-link {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
