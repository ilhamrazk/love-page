import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import TapeElement from '../components/TapeElement';
import { FlowerDoodle, SparkleDoodle, StampDoodle } from '../components/DoodleStickers';

export default function FinalSection({ finalData, onOpenLightbox }) {
  const [loveClicks, setLoveClicks] = useState(100);
  const [isPulsing, setIsPulsing] = useState(false);

  const handleHeartClick = () => {
    setLoveClicks((prev) => prev + 1);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 300);

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#C98291', '#F6D9D8', '#F3C7B7', '#DDD5E8'],
    });
  };

  return (
    <section id="final" className="py-24 px-4 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Large Cinematic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-scrapbook-brown font-bold tracking-tight">
            {finalData.heading || "Here's to all the memories we've made..."}
          </h2>
          <p className="font-handwriting text-2xl sm:text-4xl text-scrapbook-rose font-medium">
            {finalData.subheading || "...and all the ones we haven't made yet. ♡"}
          </p>
        </motion.div>

        {/* Polaroid Mini Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#FFFDF9] p-6 sm:p-10 rounded-3xl shadow-xl border border-[#E8DDD4] mb-12"
        >
          {/* Tape decorations */}
          <TapeElement color="rose" rotate="-2deg" className="-top-3 left-10" />
          <TapeElement color="peach" rotate="3deg" className="-top-3 right-12" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {finalData.collage.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}
                onClick={() => onOpenLightbox({ url: imgUrl, caption: 'Forever & Always ♡', date: 'Our Story' })}
                className="bg-[#FFFDF9] p-2 rounded shadow-md border border-[#EFE5DD] cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden rounded bg-stone-100">
                  <img
                    src={imgUrl}
                    alt="Memory Collage"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                <div className="pt-2 text-center">
                  <span className="font-handwriting text-sm text-scrapbook-brown">
                    #{idx + 1} with you
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#F2E5DC] flex flex-col items-center">
            <h3 className="font-serif italic font-bold text-2xl sm:text-3xl text-scrapbook-brown">
              {finalData.signature || 'Just you + me.'}
            </h3>
            <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-rose mt-2">
              "{finalData.note || 'Thank you for being part of my life.'}"
            </p>
          </div>
        </motion.div>

        {/* Interactive Beating Heart Button */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-serif text-xs text-scrapbook-brown/70 tracking-wider uppercase">
            Send love taps to my heart ♡
          </p>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleHeartClick}
            aria-label="Send love"
            className={`w-16 h-16 rounded-full bg-gradient-to-tr from-[#9E4D61] via-[#C98291] to-[#F3C7B7] text-white flex items-center justify-center shadow-lg transition-transform cursor-pointer ${
              isPulsing ? 'scale-125' : 'hover:scale-110 animate-pulse-gentle'
            }`}
          >
            <Heart className="w-8 h-8 fill-white" />
          </motion.button>

          <span className="font-handwriting text-xl text-scrapbook-brown font-semibold">
            {loveClicks}% Infinite Love
          </span>
        </div>

        {/* Footer Credit */}
        <div className="mt-16 text-center text-xs text-scrapbook-brown/50 font-serif">
          <p>Handcrafted with love for my favorite person in the whole world ♡</p>
        </div>
      </div>
    </section>
  );
}
