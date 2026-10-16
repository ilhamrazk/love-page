import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Heart, Sparkles, Volume2 } from 'lucide-react';
import TapeElement from '../components/TapeElement';
import { FlowerDoodle, StampDoodle } from '../components/DoodleStickers';

export default function VideoSingingSection({ videoUrl }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="singing" className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-medium uppercase tracking-widest mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Special Melody</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-scrapbook-brown font-bold">
            Suara Merdu Kesayangan Dumbo 🎤
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown/70 mt-2">
            "Melodi terindah di dunia bukan dari Spotify, tapi dari suara Seng yang tulus bernyanyi ♡"
          </p>
        </div>

        {/* Vintage Frame Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-md sm:max-w-lg mx-auto bg-[#FFFDF9] p-4 sm:p-6 rounded-3xl shadow-polaroid border border-[#E8DDD4]"
        >
          {/* Top Washi Tape */}
          <TapeElement color="rose" rotate="-2deg" className="-top-3 left-10" />
          <TapeElement color="peach" rotate="2.5deg" className="-top-3 right-10" />

          {/* Doodles at corner */}
          <div className="absolute -top-4 -right-4 z-20 pointer-events-none hidden sm:block">
            <StampDoodle text="FAVORITE MELODY" />
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden bg-black/90 aspect-[9/16] sm:aspect-[3/4] max-h-[520px] mx-auto shadow-inner group">
            <video
              ref={videoRef}
              src={videoUrl}
              playsInline
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Custom Overlay Play Button when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/25 flex items-center justify-center cursor-pointer transition-all hover:bg-black/30"
              >
                <div className="w-16 h-16 rounded-full bg-scrapbook-rose/90 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </div>
            )}
          </div>

          {/* Handwritten Caption & Tag */}
          <div className="pt-4 text-center">
            <p className="font-handwriting text-xl sm:text-2xl text-scrapbook-brown font-medium leading-snug">
              "Tetap bernyanyi ya Seng... suaramu selalu jadi alasan Dumbo tersenyum bahagia ♡"
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="font-sans text-[11px] text-scrapbook-rose font-semibold uppercase tracking-wider bg-scrapbook-blush/40 px-3 py-0.5 rounded-full">
                Ica Singing With Love 🎶
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
