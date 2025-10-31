'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Gamepad2, Car, Zap, Users, Gamepad, Star, Clock, Trophy } from 'lucide-react';

const Arcade: React.FC = () => {
  // Dynamic stats that increase daily/hourly
  const [dynamicStats, setDynamicStats] = useState({
    uniqueCustomers: 31754,
    totalLaps: 349294,
    racingHours: 6020,
    averageRating: 4.7
  });

  // Function to fetch Google rating (mock implementation)
  const fetchGoogleRating = async () => {
    try {
      // Option 1: Real Google Places API (uncomment and add your API key)
      // const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=rating&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`);
      // const data = await response.json();
      // return data.result?.rating || 4.7;
      
      // Option 2: Mock Google-like rating behavior
      // Simulate realistic Google rating patterns (4.7-5.0 range with occasional dips)
      const baseRating = 4.7;
      const variation = Math.random() * 0.3; // 0-0.3 variation
      const occasionalDip = Math.random() < 0.1 ? -0.2 : 0; // 10% chance of a dip
      const finalRating = Math.max(4.0, Math.min(5.0, baseRating + variation + occasionalDip));
      
      return Math.round(finalRating * 10) / 10; // Round to 1 decimal place
    } catch (error) {
      console.error('Error fetching Google rating:', error);
      // Fallback to random rating between 4.7-5.0
      return Math.round((4.7 + Math.random() * 0.3) * 10) / 10;
    }
  };

  useEffect(() => {
    const calculateDynamicStats = async () => {
      const now = new Date();
      const startDate = new Date('2024-01-01'); // Starting date
      const daysPassed = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // Calculate increases based on days passed
      // Unique Customers: random increase between 70-80 per day
      const dailyCustomerIncrease = daysPassed * (70 + Math.random() * 10); // Random between 70-80 per day
      // Number of Laps: increase by 970 per day
      const lapsIncrease = daysPassed * 970;
      // Racing Hours: 10 hours per day
      const hoursIncrease = daysPassed * 10;
      
      setDynamicStats({
        uniqueCustomers: 31754 + Math.floor(dailyCustomerIncrease),
        totalLaps: 349294 + Math.floor(lapsIncrease),
        racingHours: 6020 + Math.floor(hoursIncrease),
        averageRating: 4.7 // Fixed rating
      });
    };

    calculateDynamicStats();
    
    // Update stats every hour for racing hours counter
    const hourlyInterval = setInterval(() => {
      setDynamicStats(prev => ({
        ...prev,
        racingHours: prev.racingHours + (10 / 24) // Add ~0.417 hours per hour (10 hours / 24 hours)
      }));
    }, 60 * 60 * 1000); // Every hour
    
    // Update daily stats every 24 hours
    const dailyInterval = setInterval(calculateDynamicStats, 24 * 60 * 60 * 1000);
    
    return () => {
      clearInterval(hourlyInterval);
      clearInterval(dailyInterval);
    };
  }, []);

  const arcadeFeatures = [
    {
      icon: Gamepad2,
      title: 'PlayStation Zone',
      description: 'Team up or go solo on PS—battle it out or just kick back and play.',
      image: '/kart.jpg',
      features: ['Latest PS5 Games', '4K Gaming', 'Comfortable Seating', 'Multiplayer Support']
    },
    {
      icon: Car,
      title: 'F1 Simulator',
      description: 'Experience the thrill of Formula 1 racing with our professional-grade simulators.',
      image: '/kart2.jpg',
      features: ['Realistic F1 Experience', 'Professional Setup', 'Multiple Tracks', 'Competitive Racing']
    },
    {
      icon: Zap,
      title: 'Other Arcade Games',
      description: 'Classic and modern arcade games for all ages and skill levels.',
      image: '/kart4.jpg',
      features: ['Basketball', 'Multi Touch', 'Air Hockey', 'Rapid Reflex']
    }
  ];

  // Counter component for animated numbers
  const AnimatedCounter: React.FC<{ targetValue: number; suffix?: string; prefix?: string; decimals?: number }> = ({ 
    targetValue, 
    suffix = '', 
    prefix = '',
    decimals = 0 
  }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
      if (!isInView) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, targetValue);
        setDisplayValue(newValue);

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(targetValue);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isInView, targetValue]);

    const formattedValue = decimals > 0 
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toLocaleString();

    return (
      <span ref={ref}>
        {prefix}{formattedValue}{suffix}
      </span>
    );
  };

  const raftaarStats = [
    { 
      icon: Users, 
      label: 'Unique Customers',
      getValue: () => <AnimatedCounter targetValue={Math.floor(dynamicStats.uniqueCustomers)} suffix="+" />
    },
    { 
      icon: Trophy, 
      label: 'Number of Laps Till Date',
      getValue: () => <AnimatedCounter targetValue={Math.floor(dynamicStats.totalLaps)} suffix=" laps" />
    },
    { 
      icon: Clock, 
      label: 'Number of Racing Hours',
      getValue: () => <AnimatedCounter targetValue={Math.floor(dynamicStats.racingHours)} suffix=" hours" />
    },
    { 
      icon: Star, 
      label: 'Average Rating',
      getValue: () => <AnimatedCounter targetValue={dynamicStats.averageRating} suffix="/5" decimals={1} />
    }
  ];

  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="arcade" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white snap-start">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent uppercase">
            Arcade Zone
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Step into our gaming paradise where cutting-edge technology meets endless entertainment
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {arcadeFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="flip-card-wrapper">
                <div className={`flip-card${flippedCard === index ? ' flipped' : ''}`}>
                  <div className="flip-card-front bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                    {/* Image */}
                    <div className="relative h-64 sm:h-80 md:h-[30rem] lg:h-[36rem] overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* No overlay - clean images without filters */}
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="p-3 bg-red-500 rounded-xl">
                          <feature.icon size={24} className="text-white" />
                        </div>
                      </div>
                    </div>
                     {/* Content (front) */}
                    <div className="p-4 sm:p-8 relative z-10">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-white sm:group-hover:text-red-400 transition-colors duration-300">
                         {feature.title}
                       </h3>
                      <p className="text-gray-200 mb-3 sm:mb-6 text-sm sm:text-lg bg-black/30 sm:bg-transparent px-2 py-1 sm:px-0 sm:py-0 rounded sm:rounded-none">
                        {/* Short summary on mobile; richer text on desktop via CSS visibility */}
                        <span className="sm:hidden">Quick fun. Tap to see more.</span>
                        <span className="hidden sm:inline">{feature.description}</span>
                      </p>
                      {/* Hide long feature list on mobile for simplicity */}
                      <div className="hidden sm:block space-y-2 sm:space-y-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                      {/* CTA Button */}
                      <motion.button
                        type="button"
                        onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-3 sm:mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base relative z-20"
                      >
                        Explore Now
                      </motion.button>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-purple-700 to-red-500 text-white flex flex-col justify-center items-center rounded-2xl p-6 sm:p-8">
                    <h3 className="text-2xl font-bold mb-2">More About {feature.title}</h3>
                    <p className="text-base sm:text-lg mb-4">Get ready for a unique gaming adventure with {feature.title}! Enjoy perks, tournaments & much more. See you there!</p>
                    <motion.button
                      type="button"
                      onClick={() => setFlippedCard(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-red-500 font-bold px-4 py-2 mt-2 rounded-lg shadow"
                    >
                      Go Back
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RAFTAAR Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white uppercase">
            RAFTAAR STATS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {raftaarStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center group"
              >
                <div className="p-3 sm:p-4 bg-red-500/20 rounded-xl mb-3 sm:mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                  <stat.icon size={32} className="text-red-500 mx-auto" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.getValue()}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      <style jsx global>{`
  .flip-card-wrapper { perspective: 1200px; }
  .flip-card {
    width: 100%;
    min-height: 420px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(.6,.03,.26,1.25);
  }
  @media (min-width: 768px) {
    .flip-card { min-height: 560px; }
    .flip-card-front, .flip-card-back { min-height: 560px; }
  }
  @media (min-width: 1024px) {
    .flip-card { min-height: 650px; }
    .flip-card-front, .flip-card-back { min-height: 650px; }
  }
  .flip-card.flipped {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    min-height: 420px;
    backface-visibility: hidden;
    width: 100%;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  .flip-card-back {
    transform: rotateY(180deg);
    justify-content: center;
    align-items: center;
  }
  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .flip-card { transition: none !important; }
    .flip-card.flipped { transform: none; }
  }
`}</style>
    </section>
  );
};

export default Arcade;
