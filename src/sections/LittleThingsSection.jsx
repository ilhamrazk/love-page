import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, RotateCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import TapeElement from '../components/TapeElement';

export default function LittleThingsSection({ items }) {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    setFlippedCards((prev) => {
      const isNowFlipped = !prev[id];
      if (isNowFlipped) {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.7 },
          colors: ['#C98291', '#F6D9D8', '#DDD5E8'],
        });
      }
      return { ...prev, [id]: isNowFlipped };
    });
  };

  return (
    <section id="littlethings" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Six</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            Little Things I Love About You
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Tap on any note to uncover a secret reason why my heart chose you ♡
          </p>
        </div>

        {/* Scattered Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const isFlipped = !!flippedCards[item.id];
            const rotations = [-2.2, 1.8, -1.5, 2.5, -2.8, 1.2, -1.9, 2.1];
            const rotation = item.rotation || rotations[index % rotations.length];

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="perspective-1000 h-56 cursor-pointer select-none"
                onClick={() => handleCardClick(item.id)}
              >
                <motion.div
                  className="w-full h-full relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotate(${rotation}deg)`,
                  }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', damping: 20 }}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`absolute inset-0 backface-hidden ${item.color || 'bg-[#FFFDF9]'} p-6 rounded-2xl border border-[#E8DDD4] shadow-polaroid hover:shadow-polaroid-hover transition-shadow flex flex-col justify-between items-center text-center`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <TapeElement
                      color={index % 2 === 0 ? 'peach' : 'rose'}
                      rotate="-2deg"
                      className="-top-3 left-1/2 -translate-x-1/2"
                    />

                    <div className="w-full flex justify-end">
                      <span className="text-[10px] font-mono text-scrapbook-rose/70 bg-scrapbook-blush/30 px-2 py-0.5 rounded-full">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="my-auto">
                      <p className="font-serif font-bold text-xl sm:text-2xl text-scrapbook-brown">
                        {item.preview}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-scrapbook-brown/50 font-handwriting">
                      <RotateCw className="w-3 h-3 text-scrapbook-rose" />
                      <span>tap to flip card</span>
                    </div>
                  </div>

                  {/* BACK SIDE (HIDDEN REASON) */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#FFF9F6] to-[#FDF2F4] p-6 rounded-2xl border border-[#E3B5C0] shadow-polaroid flex flex-col justify-between text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex justify-center">
                      <Heart className="w-4 h-4 fill-[#C98291] text-[#C98291]" />
                    </div>

                    <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown leading-snug my-auto">
                      "{item.hidden}"
                    </p>

                    <div className="text-[10px] uppercase font-sans tracking-widest text-scrapbook-rose/70 font-semibold">
                      Forever in my heart ♡
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
