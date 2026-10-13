import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';
import TapeElement from '../components/TapeElement';
import { SparkleDoodle, StampDoodle } from '../components/DoodleStickers';

export default function WordsForYouSection({ quotes }) {
  return (
    <section id="words" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Eight</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            A Few Words For You
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Little whispers kept safe on torn scrap paper ♡
          </p>
        </div>

        {/* Torn Paper Notes Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {quotes.map((item, index) => {
            const rotations = [-1.5, 2.2, -2.1, 1.8];
            const rotation = item.rotation || rotations[index % rotations.length];

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{ transform: `rotate(${rotation}deg)` }}
                className={`relative ${
                  item.bg || 'bg-[#FFFDF9]'
                } p-6 sm:p-8 rounded-sm shadow-paper border border-[#EBE0D6] group hover:scale-[1.02] transition-transform`}
              >
                {/* Washi Tape */}
                <TapeElement
                  color={index % 2 === 0 ? 'peach' : 'lavender'}
                  rotate={index % 2 === 0 ? '-3deg' : '2.5deg'}
                  className="-top-3 left-8"
                />

                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-scrapbook-rose/50" />
                  <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">
                    {item.date}
                  </span>
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-scrapbook-brown leading-relaxed mb-4">
                  "{item.quote}"
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#F2E5DC]">
                  <span className="font-handwriting text-lg text-scrapbook-rose font-medium">
                    from my heart to yours
                  </span>
                  <Heart className="w-3.5 h-3.5 fill-[#C98291] text-[#C98291]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
