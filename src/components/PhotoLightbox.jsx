import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function PhotoLightbox({
  selectedPhoto,
  photos = [],
  onClose,
  onNavigate,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate) onNavigate(1);
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate(-1);
    };

    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, onClose, onNavigate]);

  if (!selectedPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A3532]/70 backdrop-blur-md"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/80 hover:bg-white text-scrapbook-brown shadow-lg transition-all hover:scale-105 z-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-scrapbook-brown shadow-lg transition-transform hover:scale-110 z-50 hidden sm:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-scrapbook-brown shadow-lg transition-transform hover:scale-110 z-50 hidden sm:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Lightbox Content Card */}
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-md p-4 sm:p-6 shadow-2xl border border-[#E8DDD4] overflow-hidden"
        >
          {/* Top washi tape simulation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#F3C7B7]/80 border-b border-[#E8A593]/40" />

          {/* Image */}
          <div className="relative rounded overflow-hidden max-h-[65vh] flex items-center justify-center bg-stone-100">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption || 'Memory'}
              className="max-h-[65vh] w-auto object-contain rounded-sm"
            />
          </div>

          {/* Caption & Details */}
          <div className="mt-4 pt-2 text-center">
            {selectedPhoto.caption && (
              <p className="font-handwriting text-2xl sm:text-3xl text-scrapbook-brown font-medium">
                "{selectedPhoto.caption}"
              </p>
            )}
            <div className="flex items-center justify-center gap-2 mt-2">
              <Heart className="w-3.5 h-3.5 fill-[#C98291] text-[#C98291]" />
              <span className="font-sans text-xs tracking-wider uppercase text-scrapbook-brown/60">
                {selectedPhoto.date || 'Timeless Memory'}
              </span>
              <Heart className="w-3.5 h-3.5 fill-[#C98291] text-[#C98291]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
