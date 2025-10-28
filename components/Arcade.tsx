'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gamepad2, Target, Zap, Users, Trophy, Star } from 'lucide-react';

const Arcade: React.FC = () => {
  const arcadeFeatures = [
    {
      icon: Gamepad2,
      title: 'PlayStation Zone',
      description: 'Team up or go solo on PS—battle it out or just kick back and play.',
      image: '/kart.jpg',
      features: ['Latest PS5 Games', '4K Gaming', 'Comfortable Seating', 'Multiplayer Support']
    },
    {
      icon: Target,
      title: 'Shooting Range',
      description: 'Test your precision and accuracy in our state-of-the-art shooting range.',
      image: 'range-1.jpg',
      features: ['Laser Shooting', 'Safety First', 'Multiple Targets', 'Score Tracking']
    }
  ];

  const gamingStats = [
    { icon: Users, label: 'Active Players', value: '500+' },
    { icon: Trophy, label: 'Tournaments Won', value: '150+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Zap, label: 'Gaming Hours', value: '10K+' }
  ];

  return (
    <section id="arcade" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white snap-start">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Arcade Zone
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Step into our gaming paradise where cutting-edge technology meets endless entertainment
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {arcadeFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="p-3 bg-red-500 rounded-xl">
                      <feature.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gaming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Gaming Community Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {gamingStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="p-3 sm:p-4 bg-red-500/20 rounded-xl mb-3 sm:mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                  <stat.icon size={32} className="text-red-500 mx-auto" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-red-500/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Game?
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl mx-auto">
              Join our gaming community and experience the ultimate arcade adventure. 
              From competitive tournaments to casual gaming sessions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-base sm:text-lg"
            >
              Start Gaming Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Arcade;
