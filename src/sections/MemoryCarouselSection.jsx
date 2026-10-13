import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Play, Pause, Sparkles, Heart } from 'lucide-react';
import Polaroid from '../components/Polaroid';

export default function MemoryCarouselSection({ memories, onOpenLightbox }) {
  const [autoplayActive, setAutoplayActive] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const toggleAutoplay = () => {
    if (!swiperInstance) return;
    if (autoplayActive) {
      swiperInstance.autoplay.stop();
      setAutoplayActive(false);
    } else {
      swiperInstance.autoplay.start();
      setAutoplayActive(true);
    }
  };

  return (
    <section id="carousel" className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Chapter Two</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            Our Favorite Little Moments
          </h2>
          <p className="font-handwriting text-lg sm:text-2xl text-scrapbook-brown/70 mt-2">
            "That random day that became one of my favorites."
          </p>

          {/* Autoplay Toggle Button */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={toggleAutoplay}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#E8DDD4] text-xs font-medium text-scrapbook-brown hover:bg-scrapbook-blush/20 shadow-sm transition-all"
            >
              {autoplayActive ? (
                <>
                  <Pause className="w-3 h-3 text-scrapbook-rose" />
                  <span>Pause Slideshow</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-scrapbook-rose" />
                  <span>Auto Play Slideshow</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Swiper Carousel with Coverflow Effect */}
        <div className="relative px-2 sm:px-6">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 120,
              modifier: 1.2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            loop={memories.length > 2}
            onSwiper={setSwiperInstance}
            className="pb-14 pt-4"
          >
            {memories.map((item, idx) => (
              <SwiperSlide key={item.id || idx} className="max-w-[280px] sm:max-w-[340px]">
                {({ isActive }) => (
                  <motion.div
                    animate={{ scale: isActive ? 1.04 : 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="p-2"
                  >
                    <Polaroid
                      photo={item}
                      onClick={() => onOpenLightbox(item, memories)}
                      rotation={idx % 2 === 0 ? -1.8 : 1.8}
                      tapeColor={idx % 3 === 0 ? 'peach' : idx % 3 === 1 ? 'rose' : 'lavender'}
                      aspectRatio="aspect-[4/5]"
                    />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
