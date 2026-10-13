import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles, Heart } from 'lucide-react';
import Polaroid from '../components/Polaroid';
import TapeElement from '../components/TapeElement';
import { FlowerDoodle, SparkleDoodle, StampDoodle } from '../components/DoodleStickers';

export default function PhotoWallSection({ photos, onOpenLightbox, onOpenAddModal }) {
  return (
    <section id="photowall" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Three</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            Scrapbook Photo Wall
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Like polaroids gently placed across our cozy desk ♡
          </p>

          {/* Add Another Memory Button */}
          <div className="mt-5">
            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] hover:bg-[#FBF2EA] text-scrapbook-brown font-serif text-xs font-semibold shadow-md hover:shadow-lg border border-[#E8DDD4] transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4 text-scrapbook-rose" />
              <span>Add another memory ♡</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Organic Collage Layout */}
        <div className="relative bg-[#FAF2EB]/70 border border-[#ECE0D6] rounded-3xl p-6 sm:p-10 shadow-inner">
          {/* Decorative Corner Tape */}
          <TapeElement color="rose" rotate="-45deg" className="-top-3 -left-3" />
          <TapeElement color="lavender" rotate="45deg" className="-top-3 -right-3" />
          <TapeElement color="peach" rotate="45deg" className="-bottom-3 -left-3" />
          <TapeElement color="ivory" rotate="-45deg" className="-bottom-3 -right-3" />

          {/* Scattered decorative doodles inside collage */}
          <div className="absolute top-8 right-12 opacity-70 pointer-events-none hidden md:block">
            <FlowerDoodle className="w-10 h-10 text-scrapbook-rose/60" />
          </div>
          <div className="absolute bottom-12 left-10 opacity-70 pointer-events-none hidden md:block">
            <StampDoodle text="TREASURED" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-center justify-items-center">
            {photos.map((photo, index) => {
              // Alternate subtle rotations for realistic organic feel
              const rotations = [-2.5, 2.2, -1.8, 2.8, -2.2, 1.5];
              const rotation = photo.rotation || rotations[index % rotations.length];

              return (
                <motion.div
                  key={photo.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                  className="w-full max-w-[320px]"
                >
                  <Polaroid
                    photo={photo}
                    onClick={() => onOpenLightbox(photo, photos)}
                    rotation={rotation}
                    tapeColor={photo.tapeColor || 'peach'}
                    aspectRatio={photo.size === 'large' ? 'aspect-[3/4]' : 'aspect-square'}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
