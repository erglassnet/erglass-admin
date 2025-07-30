import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, PlayCircle, Image as ImageIcon } from 'lucide-react';

const ProductImageGallery = ({ productName, images = [], mainImage }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let items = [];
    // Add main image first if it exists and is valid
    if (mainImage && mainImage !== "/placeholder-product.jpg" && mainImage !== "https://images.unsplash.com/photo-1702567855965-176e97304a4b") {
      items.push({ type: 'image', src: mainImage });
    }

    // Process additional images/videos
    if (images && images.length > 0) {
      images.forEach(item => {
        if (typeof item === 'string' && item && item !== "/placeholder-product.jpg" && item !== "https://images.unsplash.com/photo-1702567855965-176e97304a4b") {
          items.push({ type: 'image', src: item });
        } else if (typeof item === 'object' && item.src && item.type) {
          items.push({ type: item.type, src: item.src });
        }
      });
    }
    
    // Remove duplicates based on src
    items = items.filter((item, index, self) => 
      index === self.findIndex((t) => t.src === item.src)
    );

    if (items.length === 0) {
      items.push({ type: 'image', src: "https://images.unsplash.com/photo-1702567855965-176e97304a4b" });
    }
    setMediaItems(items);
    setCurrentIndex(0);
  }, [images, mainImage]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };
  
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (mediaItems.length === 0) {
    return (
      <div className="p-6 md:p-8">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Media Yoxdur</p>
        </div>
      </div>
    );
  }

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="p-6 md:p-8">
      <div className="relative mb-4">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="w-full aspect-square rounded-lg shadow-lg overflow-hidden bg-black"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.src}
                alt={`${productName} - ${currentMedia.type} ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
            ) : currentMedia.type === 'video' ? (
              <video
                src={currentMedia.src}
                controls
                className="w-full h-full object-contain"
                poster={mainImage && mainImage !== "/placeholder-product.jpg" ? mainImage : ''}
              >
                Videonuz burada göstəriləcək.
              </video>
            ) : null}
          </motion.div>
        </AnimatePresence>
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
              aria-label="Əvvəlki media"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
              aria-label="Növbəti media"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
      {mediaItems.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer rounded-md overflow-hidden aspect-square border-2 ${
                index === currentIndex ? 'border-primary' : 'border-transparent'
              } relative bg-gray-100`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item.type === 'image' ? (
                 <img 
                  src={item.src} 
                  alt={`${productName} - kiçik şəkil ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <PlayCircle size={32} className="text-white opacity-70" />
                  <img 
                    src={mainImage && mainImage !== "/placeholder-product.jpg" ? mainImage : "https://images.unsplash.com/photo-1702567855965-176e97304a4b"} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover absolute inset-0 opacity-30"
                  />
                </div>
              )}
              <div className="absolute top-1 right-1 bg-black/50 text-white p-0.5 rounded">
                {item.type === 'video' ? <PlayCircle size={12} /> : <ImageIcon size={12} />}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
