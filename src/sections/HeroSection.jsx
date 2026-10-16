import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Heart } from 'lucide-react';
import Polaroid from '../components/Polaroid';
import TapeElement from '../components/TapeElement';
import { StampDoodle, FlowerDoodle } from '../components/DoodleStickers';

export default function HeroSection({ heroPhoto, couple, onOpenLightbox }) {
  const scrollToNext = () => {
    const el = document.getElementById('carousel');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Decorative background stamps and tape */}
      <TapeElement color="rose" rotate="4deg" className="top-24 left-10 hidden md:block" />
      <TapeElement color="peach" rotate="-6deg" className="top-36 right-12 hidden md:block" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Top romantic tag badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9]/90 border border-[#EADBD0] shadow-sm mb-4 text-xs text-scrapbook-brown/90"
        >
          <Heart className="w-3.5 h-3.5 fill-[#C98291] text-[#C98291]" />
          <span className="font-serif italic tracking-wide">{couple.subtitle || 'Made with love, just for you ♡'}</span>
          <span className="text-[#C98291]">•</span>
          <span className="font-sans font-semibold text-[11px] text-scrapbook-rose">20 Des 2025 — Selamanya</span>
          <Heart className="w-3.5 h-3.5 fill-[#C98291] text-[#C98291]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-scrapbook-brown font-bold tracking-tight leading-tight max-w-2xl"
        >
          {couple.heroHeading || 'Just you, me & all our little moments.'}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-handwriting text-xl sm:text-2xl md:text-3xl text-scrapbook-brown/80 mt-3 max-w-xl font-normal"
        >
          {couple.heroSubheading || 'A little scrapbook of our laughter, quiet talks, and timeless memories.'}
        </motion.p>

        {/* Featured Center Polaroid Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: heroPhoto.rotation || -2.5 }}
          transition={{ duration: 1, delay: 0.45, type: 'spring', bounce: 0.3 }}
          className="relative mt-8 sm:mt-10 max-w-xs sm:max-w-sm w-full group"
        >
          {/* Subtle floral doodle sticker at corner */}
          <div className="absolute -top-6 -left-6 z-30 pointer-events-none hidden sm:block">
            <FlowerDoodle className="w-12 h-12 text-[#E8A593]/80 animate-float-slow" />
          </div>

          <div className="absolute -bottom-4 -right-4 z-30 pointer-events-none hidden sm:block">
            <StampDoodle text="CHAPTER ONE" />
          </div>

          <Polaroid
            photo={heroPhoto}
            onClick={() => onOpenLightbox(heroPhoto)}
            rotation={heroPhoto.rotation || -2.5}
            tapeColor="rose"
            className="w-full"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 sm:mt-12"
        >
          <button
            onClick={scrollToNext}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FFFDF9] hover:bg-[#FDF6F0] text-scrapbook-brown font-serif text-sm font-semibold shadow-md hover:shadow-lg border border-[#E8DDD4] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Open our scrapbook</span>
            <span className="text-scrapbook-rose group-hover:translate-y-0.5 transition-transform">→</span>
          </button>
        </motion.div>
      </div>

      {/* Floating scroll down hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-scrapbook-brown/40 animate-bounce pointer-events-none">
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
