'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryImages = [
    { src: '/kart.jpg', alt: 'Professional Go-Kart', category: 'karts' },
    { src: '/kart2.jpg', alt: 'Standard Go-Kart', category: 'karts' },
    { src: '/kart4.jpg', alt: 'Club Go-Kart', category: 'karts' },
    { src: '/kart5.jpg', alt: 'Junior Go-Kart', category: 'karts' },
    { src: '/kart6.jpg', alt: 'Racing Go-Kart', category: 'karts' },
    { src: '/1.jpg', alt: 'Track View 1', category: 'track' },
    { src: '/2.jpg', alt: 'Track View 2', category: 'track' },
    { src: '/3.jpg', alt: 'Track View 3', category: 'track' },
  ];

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].src);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
        <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-gray-800 text-white snap-start" style={{ marginTop: '70px' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">Gallery</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look at our state-of-the-art karts, professional track, and the excitement that awaits you.
          </p>
        </motion.div>

        {/* Modern Gallery with Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group relative break-inside-avoid mb-4 sm:mb-6 rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              onClick={() => openLightbox(image.src, index)}
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                border: '1px solid rgba(239, 68, 68, 0.1)'
              }}
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                

                {/* Red Accent Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-all duration-500" />
              </div>
              
              {/* Image Info */}
              <div className="p-3 sm:p-4 bg-gradient-to-r from-gray-900 to-gray-800">
                <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate">
                  {image.alt}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{image.category}</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="gallery-lightbox fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              style={{ paddingTop: '70px' }}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative max-w-7xl max-h-[85vh] sm:max-h-[80vh] w-full h-full flex flex-col"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-black/80 hover:bg-black text-white p-3 sm:p-3 rounded-2xl shadow-xl transition-all duration-300 sm:bg-red-500 sm:hover:bg-red-600"
                  aria-label="Close lightbox"
                >
                  <X size={24} className="sm:w-6 sm:h-6" />
                </motion.button>
                
                {/* Image Container */}
                <div className="relative flex-1 flex items-center justify-center bg-black rounded-lg">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage}
                    alt={galleryImages[selectedIndex].alt}
                    className="lightbox-image shadow-2xl border-4 border-white/20 rounded-2xl"
                    style={{ 
                      width: '800px',
                      height: '600px',
                      maxWidth: '800px',
                      maxHeight: '600px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 sm:p-3 rounded-2xl shadow-xl transition-all duration-300 z-10 sm:left-4 sm:bg-white/95 sm:hover:bg-white sm:text-black"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} className="sm:w-6 sm:h-6" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 sm:p-3 rounded-2xl shadow-xl transition-all duration-300 z-10 sm:right-4 sm:bg-white/95 sm:hover:bg-white sm:text-black"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} className="sm:w-6 sm:h-6" />
                  </button>
                </div>
                
                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mt-2 sm:mt-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4"
                >
                  <p className="text-white text-base sm:text-lg font-semibold">
                    {selectedIndex + 1} of {galleryImages.length}
                  </p>
                  <p className="text-gray-300 mt-1 text-sm sm:text-base">
                    {galleryImages[selectedIndex].alt}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
