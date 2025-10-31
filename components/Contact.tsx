'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Contact: React.FC = () => {

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
    { icon: WhatsAppIcon, href: 'https://wa.me/918766741673?text=Hi', label: 'WhatsApp' }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-3 sm:px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white snap-start">
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
    </section>
  );
};

export default Contact;
