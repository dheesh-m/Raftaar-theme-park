'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Facebook } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8766741673',
      href: 'tel:+918766741673'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@raftaar.win',
      href: 'mailto:contact@raftaar.win'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Survey number 128/1, Raftaar Theme Park - Gokarting, Rifle Shooting, Arcade Zone, PS5, Racing Simulator, Jeevan Nagar, Tathawade, Dattwadi, Pimpri-Chinchwad, Maharashtra 411033',
      href: 'https://www.google.com/maps/search/Survey+number+128%2F1%2C+Raftaar+Theme+Park+-+Gokarting%2C+Rifle+Shooting%2C+Arcade+Zone%2C+PS5%2C+Racing+Simulator%2C+Jeevan+Nagar%2C+Tathawade%2C+Dattwadi%2C+Pimpri-Chinchwad%2C+Maharashtra+411033'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Raftaarwin/61555175682926/?mibextid=LQQJ4d&rdid=ssskiU9BczyA5OQR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhTzj7XnsFJjADZi9%2F%3Fmibextid%3DLQQJ4d', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/raftaar.win/?igsh=MmlranhxamQxc2Fm&utm_source=qr#', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/918766741673', label: 'WhatsApp' }
  ];

  return (
        <section id="contact" className="py-16 sm:py-20 px-4 md:px-12 bg-black text-white snap-start">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to experience the thrill? Contact us for bookings and inquiries.
          </p>
        </motion.div>

        {/* Contact Information - Centered Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-red-500/50"
              >
                <div className="p-4 bg-red-500 rounded-2xl group-hover:bg-red-600 transition-colors duration-300 mb-6">
                  <info.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                  {info.details}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gray-800 rounded-2xl hover:bg-red-500 transition-all duration-300 group border border-gray-700 hover:border-red-500"
                  aria-label={social.label}
                >
                  <social.icon size={28} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
