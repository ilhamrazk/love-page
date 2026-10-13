import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, X, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';
import TapeElement from '../components/TapeElement';

export default function LoveLetterSection({ letterData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C98291', '#F6D9D8', '#F3C7B7', '#DDD5E8'],
    });
  };

  return (
    <section id="letter" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Seven</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            A Sealed Love Letter
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Folded with warmth, written from the deepest corner of my heart ♡
          </p>
        </div>

        {/* Vintage Wax Sealed Envelope */}
        <div className="relative inline-block">
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenLetter}
            className="cursor-pointer relative bg-gradient-to-br from-[#FDF3EB] to-[#F5E6DA] p-8 sm:p-12 rounded-2xl shadow-envelope border border-[#E5D4C6] max-w-md mx-auto group overflow-hidden select-none"
          >
            {/* Washi Tape Accent */}
            <TapeElement color="rose" rotate="-3deg" className="-top-3 left-10" />

            {/* Envelope flap lines */}
            <div className="absolute inset-x-0 top-0 h-28 border-b-2 border-dashed border-[#DECEBF]/80 pointer-events-none" />

            {/* Red Wax Seal Button */}
            <div className="relative z-10 flex flex-col items-center gap-4 py-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#9E4D61] via-[#C98291] to-[#E3A3B0] shadow-lg flex items-center justify-center text-white border-2 border-[#83384B] group-hover:scale-110 transition-transform">
                <Heart className="w-9 h-9 fill-white" />
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-scrapbook-brown">
                  A little letter for you 💌
                </h3>
                <p className="font-handwriting text-lg text-scrapbook-brown/70 mt-1">
                  (Click wax seal to break & open)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Unfolded Handwritten Letter Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A3532]/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.92 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative max-w-2xl w-full bg-[#FFFDF9] lined-paper rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#E8DDD4] max-h-[88vh] overflow-y-auto text-left"
            >
              {/* Top tape piece */}
              <TapeElement color="peach" rotate="1.5deg" className="-top-3 left-1/2 -translate-x-1/2" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close letter"
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200/50 text-stone-500 hover:text-scrapbook-brown transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Header */}
              <div className="flex items-center justify-between border-b border-[#F0E0D6] pb-4 mb-6">
                <div className="flex items-center gap-2 text-scrapbook-rose">
                  <Feather className="w-4 h-4" />
                  <span className="font-serif italic text-xs tracking-wider uppercase">
                    Personal Love Letter
                  </span>
                </div>
                <span className="font-handwriting text-sm text-stone-400">
                  {letterData.date || 'Today'}
                </span>
              </div>

              {/* Salutation */}
              <h3 className="font-serif italic font-bold text-2xl text-scrapbook-brown mb-5">
                {letterData.salutation || 'Dear my love,'}
              </h3>

              {/* Body Paragraphs */}
              <div className="space-y-4 font-serif text-sm sm:text-base text-scrapbook-brown/90 leading-relaxed">
                {letterData.paragraphs.map((p, idx) => (
                  <p key={idx} className="indent-4">
                    {p}
                  </p>
                ))}
              </div>

              {/* Sign-off */}
              <div className="mt-8 pt-6 border-t border-[#F0E0D6] text-right">
                <p className="font-handwriting text-2xl text-scrapbook-brown">
                  {letterData.signOff || 'Always yours,'}
                </p>
                <p className="font-serif font-bold text-xl text-scrapbook-rose mt-1">
                  {letterData.authorName || 'Ilham ♡'}
                </p>
                {letterData.ps && (
                  <p className="font-handwriting text-sm text-stone-500 mt-4 text-left italic">
                    {letterData.ps}
                  </p>
                )}
              </div>

              {/* Close Letter Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded-full bg-scrapbook-rose hover:bg-scrapbook-roseDark text-white text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Fold & Put Away Letter ♡
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
