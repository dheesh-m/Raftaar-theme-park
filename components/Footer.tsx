'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Our Karts',
      links: [
        'Adult Karts',
        'Junior Karts',
        'Electric Karts',
        'Two-Seater Karts',
        'Racing Karts',
        'Beginner Karts',
        'Professional Karts'
      ]
    },
    {
      title: 'Your Race',
      links: [
        'Track Rules',
        'Safety Gear',
        'Booking Info',
        'Race Packages',
        'Membership Plans',
        'Group Bookings',
        'Private Events'
      ]
    },
    {
      title: 'Events',
      links: [
        'Tournaments',
        'Birthday Parties',
        'Corporate Events',
        'Team Building',
        'Championship Series',
        'Night Racing',
        'Family Fun Days'
      ]
    },
    {
      title: 'About Us',
      links: [
        { text: 'News & Updates', external: true },
        'Our Story',
        'Track History',
        'Safety Standards',
        'Awards & Recognition',
        'Team & Staff',
        'Track Tours'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Us',
        'Track Rules',
        'Safety Guidelines',
        'Booking Policy',
        'Refund Policy',
        { text: 'Online Booking', external: true },
        { text: 'Track Status', external: true },
        { text: 'Emergency Contact', external: true }
      ]
    }
  ];

  const utilityLinks = [
    { text: 'TRACK RULES', external: true },
    { text: 'SAFETY GUIDELINES', external: true },
    { text: 'BOOKING POLICY', external: true },
    { text: 'REFUND POLICY', external: true },
    { text: 'PRIVACY POLICY', external: true },
    { text: 'TERMS & CONDITIONS', external: true },
    { text: 'CAREERS', external: true }
  ];

  return (
    <footer className="bg-stone-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const isExternal = typeof link === 'object' && link.external;
                  const linkText = typeof link === 'object' ? link.text : link;
                  
                  return (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm flex items-center group"
                      >
                        {linkText}
                        {isExternal && (
                          <ExternalLink 
                            size={12} 
                            className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity duration-200" 
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Utility Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6"
        >
          {utilityLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm flex items-center group"
            >
              {link.text}
              <ExternalLink 
                size={12} 
                className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity duration-200" 
              />
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
