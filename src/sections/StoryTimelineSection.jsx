import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import TapeElement from '../components/TapeElement';

export default function StoryTimelineSection({ timeline, onOpenLightbox }) {
  return (
    <section id="story" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Four</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            How Our Little Story Happened
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Every chapter with you is my new favorite page ♡
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical dashed center line simulating hand-drawn thread */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-[#E3B5C0] -translate-x-1/2 z-0" />

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in the center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFDF9] border-2 border-scrapbook-rose shadow-md flex items-center justify-center text-scrapbook-rose z-20">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>

                  {/* Content Card (Handwritten Note Style) */}
                  <div className="ml-10 sm:ml-0 w-full sm:w-1/2">
                    <div
                      className={`relative bg-[#FFFDF9] p-5 sm:p-6 rounded-xl border border-[#E8DDD4] shadow-polaroid ${
                        isEven ? 'rotate-[-1deg]' : 'rotate-[1deg]'
                      }`}
                    >
                      {/* Top tape piece */}
                      <TapeElement
                        color={isEven ? 'peach' : 'rose'}
                        rotate={isEven ? '2deg' : '-2deg'}
                        className="-top-3 left-6"
                      />

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-sans text-[11px] font-semibold text-scrapbook-rose tracking-wider uppercase">
                          {item.date}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-70" />
                      </div>

                      <h3 className="font-serif font-bold text-lg sm:text-xl text-scrapbook-brown mb-2">
                        {item.title}
                      </h3>

                      <p className="font-serif text-xs sm:text-sm text-scrapbook-brown/80 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Photo Thumbnail */}
                      {item.image && (
                        <div
                          onClick={() => onOpenLightbox({ url: item.image, caption: item.title, date: item.date })}
                          className="mt-4 rounded-md overflow-hidden bg-stone-100 border border-[#EFE5DD] cursor-pointer group relative aspect-[16/10]"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-[#4A3532]/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
