'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const dropdownItems = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#track', label: 'Track', icon: '🏁' },
    { href: '#events', label: 'Events', icon: '📅' },
    { href: '#gallery', label: 'Gallery', icon: '📸' },
    { href: '#contact', label: 'Contact', icon: '📞' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === 'main' ? null : 'main');
  };

  const handleMobileDropdownToggle = () => {
    setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile');
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown('main');
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow moving to menu
    setHoverTimeout(timeout);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav-bar ${isScrolled ? 'glass-nav scrolled' : 'solid-nav'}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: '100%'
      }}
    >
      <div className="w-full px-4 md:px-8 py-3">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section - Far Left */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Raftaar Theme Park logo"
                width={40}
                height={40}
                className="rounded-full object-cover ring-2 ring-red-500/50 group-hover:ring-red-500 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block ml-2">
              <h1 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                RAFTAAR
              </h1>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                THEME PARK
              </p>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 hover:bg-red-500/20 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col space-y-1">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>

          {/* Desktop Navigation - Far Right */}
          <div 
            ref={dropdownRef}
            className="hidden md:block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={handleDropdownToggle}
              className="flex flex-col space-y-1 p-2 hover:bg-red-500/20 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${activeDropdown === 'main' ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${activeDropdown === 'main' ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${activeDropdown === 'main' ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
            
            {/* Simple Dropdown Menu */}
            {activeDropdown === 'main' && (
              <div 
                className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-red-500/20 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  zIndex: 10000
                }}
              >
                <div className="py-2">
                  {dropdownItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-4 py-3 hover:bg-red-500/20 hover:text-red-500 transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Simple Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/98 backdrop-blur-xl border-t border-red-500/20 absolute top-full left-0 right-0 z-50"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 10000
            }}
          >
            <nav className="p-6">
              <div className="space-y-2">
                {dropdownItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors duration-300 py-3 text-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
