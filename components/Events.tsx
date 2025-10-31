'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'CORPORATE OUTINGS',
      date: '2024-02-15',
      time: 'Flexible',
      location: 'Main Track',
      participants: '10-50',
      description: 'Perfect team-building experience for your company. Custom packages available for corporate events.',
      image: '/1.jpg',
      status: 'available'
    },
    {
      id: 2,
      title: 'BIRTHDAY PARTIES',
      date: '2024-02-20',
      time: 'Flexible',
      location: 'All Tracks',
      participants: '5-30',
      description: 'Make your special day unforgettable with exciting go-karting and entertainment packages.',
      image: '/2.jpg',
      status: 'available'
    },
    {
      id: 3,
      title: 'DRIVER TRAINING PROGRAMS',
      date: '2024-02-25',
      time: 'Flexible',
      location: 'Training Track',
      participants: 'Individual/Groups',
      description: 'Professional driving instruction and skill development programs for all skill levels.',
      image: '/3.jpg',
      status: 'available'
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
          <h2 className="heading-secondary text-white mb-4 uppercase">YOUR NEXT EVENT</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our exciting event packages. Perfect for corporate teams, celebrations, and skill development.
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
                
                <a 
                  href={`https://wa.me/918766741673?text=Hi%20I%20want%20to%20register%20for%20the%20event%3A%20${encodeURIComponent(event.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base text-center touch-manipulation select-none"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Contact Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bubit Eats & Treats Section */}
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
              <div className="text-sm uppercase tracking-wider text-pink-500 mb-4 font-semibold">EXCLUSIVE FOOD PARTNER</div>
              
              {/* Bubit Logo */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/bubitlogo.jpg"
                    alt="Bubit Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="heading-secondary text-white mb-1 bubit-text">Bubit</h3>
                  <div className="flex items-center space-x-2">
                    <div className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      INDIA
                    </div>
                    <span className="text-pink-400 text-sm font-semibold">AT RAFTAAR</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience the authentic taste of Taiwan with Bubit's premium bubble tea, fresh fruit boba, 
                and delicious Asian cuisine. Fuel your racing spirit with flavors that burst with joy!
              </p>
            </motion.div>
          </div>

          {/* Bubit Brand Showcase */}
          <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-pink-500/20 mb-8 sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
              {/* Brand Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden">
                  <Image
                    src="/bubitlogo.jpg"
                    alt="Bubit Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-3xl font-bold text-white bubit-text">Bubit</h4>
                    <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      INDIA
                    </div>
                  </div>
                  <p className="text-pink-400 font-semibold">Authentic Taiwanese Bubble Tea</p>
                </div>
              </div>
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                  Setting trends and tantalizing taste buds! Join us to experience the essence of Boba like never before. 
                  From fresh fruit boba to authentic Taiwanese treats, we bring you happiness in every cup.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Fresh Fruit Boba', 'Sparkling Boba', 'Authentic Boba', 'Ramen', 'Dumplings', 'Taiwanese Ice-Cream'].map((item, index) => (
                    <span
                      key={index}
                      className="bg-pink-500/20 text-pink-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-pink-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Brand Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-pink-500/30">
                  <Image
                    src="/fruit-boba.png"
                    alt="Bubit Bubble Tea Experience"
                    fill
                    className="object-contain scale-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h5 className="text-2xl font-bold text-white mb-2">Love it, Bub it!</h5>
                    <p className="text-gray-200 text-sm">Discover your favorite flavour</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            
            {/* Fresh Fruit Boba */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-pink-500/30 group-hover:border-pink-500/60 transition-all duration-300">
                <Image
                  src="/fruit-boba.png"
                  alt="Fresh Fruit Boba"
                  fill
                  className="object-contain scale-75 group-hover:scale-85 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">Fresh Fruit Boba</h4>
                  <p className="text-gray-200 text-sm mb-3">Natural fruit flavors with chewy tapioca pearls</p>
                  <div className="flex items-center justify-start">
                    <span className="text-lg font-bold text-white">From ₹149</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sparkling Boba */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer hidden sm:block"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300">
                <Image
                  src="/sparkling-boba.png"
                  alt="Sparkling Boba"
                  fill
                  className="object-contain scale-75 group-hover:scale-85 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">Sparkling Boba</h4>
                  <p className="text-gray-200 text-sm mb-3">Fizzy bubble tea with a refreshing twist</p>
                  <div className="flex items-center justify-start">
                    <span className="text-lg font-bold text-white">From ₹169</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Authentic Boba */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group cursor-pointer hidden sm:block"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-pink-500/30 group-hover:border-pink-500/60 transition-all duration-300">
                <Image
                  src="/authentic-boba.png"
                  alt="Authentic Boba"
                  fill
                  className="object-contain scale-75 group-hover:scale-85 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">Authentic Boba</h4>
                  <p className="text-gray-200 text-sm mb-3">Traditional Taiwanese bubble tea experience</p>
                  <div className="flex items-center justify-start">
                    <span className="text-lg font-bold text-white">From ₹129</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ramen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500/60 transition-all duration-300">
                <Image
                  src="/ramen.png"
                  alt="Ramen"
                  fill
                  className="object-contain scale-75 group-hover:scale-85 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">Ramen</h4>
                  <p className="text-gray-200 text-sm mb-3">Authentic Japanese noodle soup</p>
                  <div className="flex items-center justify-start">
                    <span className="text-lg font-bold text-white">From ₹199</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dumplings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300">
                <Image
                  src="/Dumplimgs.png"
                  alt="Dumplings"
                  fill
                  className="object-contain scale-75 group-hover:scale-85 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">Dumplings</h4>
                  <p className="text-gray-200 text-sm mb-3">Steamed and pan-fried delights</p>
                  <div className="flex items-center justify-start">
                    <span className="text-lg font-bold text-white">From ₹179</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Taiwanese Ice-Cream */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer hidden sm:block"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300">
                <Image
                  src="/taiwanese.png"
                  alt="Taiwanese Ice-Cream"
                  fill
                  className="object-contain scale-75 group-hover:scale-85 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">Taiwanese Ice-Cream</h4>
                  <p className="text-gray-200 text-sm mb-3">Sweet treats to cool you down</p>
                  <div className="flex items-center justify-start">
                    <span className="text-lg font-bold text-white">From ₹129</span>
                  </div>
                </div>
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
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">
                Sip, smile, and create memories with Bubit!
              </h4>
              <p className="text-gray-300 text-lg">
                Join us in exploring a world of unique flavors and bubbles that burst with joy. 
                From classic to exotic, our teas are crafted to tantalize your taste buds.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Events;
