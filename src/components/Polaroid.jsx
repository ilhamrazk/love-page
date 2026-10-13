import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2 } from 'lucide-react';
import TapeElement from './TapeElement';

export default function Polaroid({
  photo,
  onClick,
  rotation = 0,
  tapeColor = 'peach',
  showTape = true,
  className = '',
  aspectRatio = 'aspect-[4/5]',
}) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative group bg-[#FFFDF9] p-3 sm:p-4 rounded-sm shadow-polaroid hover:shadow-polaroid-hover transition-shadow border border-[#EFE5DD] cursor-pointer ${className}`}
      onClick={() => onClick && onClick(photo)}
    >
      {/* Decorative Washi Tape on top center */}
      {showTape && (
        <TapeElement 
          color={tapeColor} 
          rotate={`${(rotation * -0.7).toFixed(1)}deg`}
          className="-top-3 left-1/2 -translate-x-1/2" 
        />
      )}

      {/* Photo Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-stone-100 rounded-[2px]`}>
        <img
          src={photo.url}
          alt={photo.caption || 'Scrapbook memory'}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Lightbox Icon */}
        <div className="absolute inset-0 bg-[#4A3532]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 text-scrapbook-brown p-2 rounded-full shadow-md backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
            <Maximize2 className="w-4 h-4 text-scrapbook-rose" />
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          aria-label="Favorite photo"
          className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:scale-110 active:scale-90 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked ? 'fill-[#C98291] text-[#C98291]' : 'text-stone-400 hover:text-[#C98291]'
            }`}
          />
        </button>
      </div>

      {/* Caption & Date bottom area */}
      <div className="pt-3 pb-1 text-center px-1">
        {photo.caption && (
          <p className="font-handwriting text-lg sm:text-xl text-scrapbook-brown font-medium leading-tight">
            {photo.caption}
          </p>
        )}
        {photo.date && (
          <p className="font-sans text-[11px] sm:text-xs text-scrapbook-brown/60 tracking-wider mt-1 uppercase">
            {photo.date}
          </p>
        )}
      </div>
    </motion.div>
  );
}
