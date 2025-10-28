'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to reserve a spot?",
      answer: "Walk-ins are cool, but booking ahead locks in your setup especially on busy nights or event days. Reserve online or just roll in!"
    },
    {
      question: "What can I play here?",
      answer: "PCs, PlayStations, and a massive game library FPS, sports, RPGs, you name it. There's a match for every mood."
    },
    {
      question: "Can I eat while I play?",
      answer: "Game on and snack on! Order burgers, snacks, or drinks right from your seat. We'll deliver! No need to pause."
    },
    {
      question: "How do tournaments work?",
      answer: "We run regular tournaments for all skill levels, including epic inter-university battles. Sign up online or in person and check our schedule for the next showdown."
    },
    {
      question: "Is there an age limit?",
      answer: "Everyone's welcome! Some events or late-night sessions might have age rules, so peek at the details or ask our crew."
    },
    {
      question: "Can I bring my own gear?",
      answer: "Bring your favorite headset, controller, or mouse—just plug in and play. Or travel light and use our top-tier setups."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">FAQ</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your questions, answered
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Curious about gaming, food, or tournaments? Check out these quick answers before you power up your next session.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus size={20} className="text-red-500" />
                    ) : (
                      <Plus size={20} className="text-gray-400" />
                    )}
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="bg-gradient-to-r from-red-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Reach out to us anytime for more information about our facilities, events, or services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
