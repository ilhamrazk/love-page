import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import Polaroid from '../components/Polaroid';
import TapeElement from '../components/TapeElement';

export default function PolaroidDeskSection({ polaroids, onOpenLightbox }) {
  return (
    <section className="py-20 px-4 relative z-10 overflow-hidden bg-gradient-to-b from-transparent via-[#FBF4EE]/60 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Five</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            Scattered On My Desk
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            Swipe through our favorite snapshot cards ♡
          </p>
        </div>

        {/* Desk Scatter Stack Carousel */}
        <div className="relative max-w-xs sm:max-w-sm mx-auto py-6">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-12"
          >
            {polaroids.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <div className="p-2">
                  <Polaroid
                    photo={item}
                    onClick={() => onOpenLightbox(item, polaroids)}
                    rotation={item.rotation || (idx % 2 === 0 ? -2.5 : 2.5)}
                    tapeColor={idx % 2 === 0 ? 'rose' : 'peach'}
                    aspectRatio="aspect-[4/5]"
                    className="shadow-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
