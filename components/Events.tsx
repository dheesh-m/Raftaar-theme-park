'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

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
        <section id="events" className="py-24 md:py-32 bg-gray-900 text-white snap-start">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our exciting racing events and competitions. From championship series to family fun days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2 text-red-500" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2 text-red-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={16} className="mr-2 text-red-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users size={16} className="mr-2 text-red-500" />
                    <span className="text-sm">{event.participants} participants</span>
                  </div>
                </div>
                
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
