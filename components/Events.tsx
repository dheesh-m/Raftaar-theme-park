'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Championship Series',
      date: '2024-02-15',
      time: '7:00 PM',
      location: 'Main Track',
      participants: '24',
      description: 'Join our monthly championship series and compete for the ultimate racing title.',
      image: '/1.jpg',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Family Fun Day',
      date: '2024-02-20',
      time: '10:00 AM',
      location: 'All Tracks',
      participants: '50',
      description: 'Perfect for families with kids. Special rates and beginner-friendly sessions.',
      image: '/2.jpg',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Night Racing',
      date: '2024-02-25',
      time: '8:00 PM',
      location: 'Main Track',
      participants: '16',
      description: 'Experience the thrill of racing under the lights with our special night sessions.',
      image: '/3.jpg',
      status: 'upcoming'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
        <section id="events" className="py-16 sm:py-24 md:py-32 bg-gray-900 text-white snap-start">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">Upcoming Events</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Join our exciting racing events and competitions. From championship series to family fun days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold uppercase">
                    {event.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{event.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{event.description}</p>
                
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2 text-red-500" />
                    <span className="text-xs sm:text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2 text-red-500" />
                    <span className="text-xs sm:text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={16} className="mr-2 text-red-500" />
                    <span className="text-xs sm:text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users size={16} className="mr-2 text-red-500" />
                    <span className="text-xs sm:text-sm">{event.participants} participants</span>
                  </div>
                </div>
                
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eats & Treats Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="text-sm uppercase tracking-wider text-red-500 mb-4 font-semibold">EATS & TREATS</div>
              <h3 className="heading-secondary text-white mb-6">Snacks that score</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Fuel your racing spirit with our premium selection of snacks and beverages. 
                From hearty meals to quick bites, we've got everything to keep you energized on and off the track.
              </p>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Featured Food Items */}
            <div className="xl:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Main Featured Item */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 lg:col-span-1 relative group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300">
                    <Image
                      src="/1.jpg"
                      alt="Premium Racing Snacks"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold inline-block mb-3">
                        CHEF'S SPECIAL
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">Racing Fuel Combo</h4>
                      <p className="text-gray-200 text-sm mb-4">Premium burger with crispy fries and energy drink</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">₹399</span>
                        <span className="text-sm text-gray-300">Best Seller</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Items */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-red-500/60 transition-all duration-300">
                    <Image
                      src="/2.jpg"
                      alt="Quick Bites"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Quick Bites</h4>
                      <p className="text-gray-200 text-sm mb-3">Perfect for between races</p>
                      <span className="text-xl font-bold text-white">₹199</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-red-500/60 transition-all duration-300">
                    <Image
                      src="/3.jpg"
                      alt="Refreshing Drinks"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Cool Drinks</h4>
                      <p className="text-gray-200 text-sm mb-3">Stay hydrated and refreshed</p>
                      <span className="text-xl font-bold text-white">₹149</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Order Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍔</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Order Now</h4>
                <p className="text-gray-300">Fresh food, fast service</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Made fresh daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Quick 5-minute service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Available during all sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Track-side delivery</span>
                </div>
              </div>

              {/* Delivery Platforms */}
              <div className="mb-8">
                <p className="text-gray-300 text-sm mb-4 font-semibold">Also available on:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Swiggy', 'Zomato', 'Uber Eats', 'Foodpanda'].map((platform, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 text-gray-300 text-xs px-3 py-2 rounded-lg text-center hover:bg-gray-700 transition-colors duration-200"
                    >
                      {platform}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Order at Track
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-700/50 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-600"
                >
                  View Full Menu
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-red-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">
                Fuel up and get back in the race!
              </h4>
              <p className="text-gray-300 text-lg">
                Our kitchen is open during all racing sessions. Grab a bite, recharge, and dominate the track.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 text-white p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Host Your Own Event?</h3>
            <p className="text-gray-300 mb-6">
              We offer private track rentals and custom event packages for corporate events, birthday parties, and group celebrations.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Us for Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
