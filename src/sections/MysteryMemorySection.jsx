import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import TapeElement from '../components/TapeElement';

export default function MysteryMemorySection({ mysteryCards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenMystery = (card) => {
    setSelectedCard(card);
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.7 },
      colors: ['#C98291', '#F6D9D8', '#F3C7B7', '#E3B5C0'],
    });
  };

  return (
    <section id="surprise" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Nine</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            Pick a Mystery Memory ♡
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Choose an envelope below and uncover a hidden surprise!
          </p>
        </div>

        {/* Mystery Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {mysteryCards.map((card, idx) => (
            <motion.div
              key={card.id || idx}
              whileHover={{ y: -6, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleOpenMystery(card)}
              className="cursor-pointer relative bg-[#FFFDF9] rounded-2xl p-5 border border-[#E8DDD4] shadow-polaroid hover:shadow-polaroid-hover transition-all flex flex-col items-center justify-between min-h-[170px]"
            >
              <TapeElement
                color={idx % 2 === 0 ? 'peach' : 'rose'}
                rotate={idx % 2 === 0 ? '-2deg' : '2deg'}
                className="-top-2.5 left-1/2 -translate-x-1/2 w-16"
              />

              <div className="text-3xl my-2">{card.icon}</div>

              <div>
                <h3 className="font-serif font-bold text-sm text-scrapbook-brown">
                  {card.title}
                </h3>
                <p className="text-[10px] text-scrapbook-brown/60 mt-1 line-clamp-2">
                  {card.preview}
                </p>
              </div>

              <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-scrapbook-rose mt-2">
                Tap to unwrap ✨
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mystery Reveal Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A3532]/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              className="relative max-w-md w-full bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E8DDD4] text-center"
            >
              {/* Top Tape */}
              <TapeElement color="rose" rotate="-1deg" className="-top-3 left-1/2 -translate-x-1/2" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                aria-label="Close"
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-scrapbook-brown transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-4xl mb-3">{selectedCard.icon}</div>

              <h3 className="font-serif font-bold text-2xl text-scrapbook-brown mb-2">
                {selectedCard.title}
              </h3>

              {/* Card Content (Photo or Text) */}
              {selectedCard.content?.url && (
                <div className="my-4 rounded-lg overflow-hidden border border-[#E8DDD4] shadow-sm max-h-56">
                  <img
                    src={selectedCard.content.url}
                    alt={selectedCard.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown leading-relaxed my-4">
                "{selectedCard.content?.text}"
              </p>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="px-6 py-2 rounded-full bg-scrapbook-rose hover:bg-scrapbook-roseDark text-white text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Save back in memory box ♡
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
