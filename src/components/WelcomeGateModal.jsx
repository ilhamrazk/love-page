import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import TapeElement from './TapeElement';
import { FlowerDoodle, StampDoodle } from './DoodleStickers';

export default function WelcomeGateModal({ isOpen, onOpenWithMusic, onOpenWithoutMusic }) {
  if (!isOpen) return null;

  const handleOpenMusic = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C98291', '#F6D9D8', '#F3C7B7', '#DDD5E8', '#FFD1DC'],
    });
    onOpenWithMusic();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A3532]/75 backdrop-blur-md select-none"
      >
        <motion.div
          initial={{ scale: 0.88, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: -40, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative max-w-lg w-full bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E8DDD4] text-center overflow-hidden"
        >
          {/* Decorative Washi Tapes */}
          <TapeElement color="rose" rotate="-3deg" className="-top-3 left-10" />
          <TapeElement color="peach" rotate="2.5deg" className="-top-3 right-10" />

          {/* Background Stamp */}
          <div className="absolute top-4 right-6 pointer-events-none hidden sm:block">
            <StampDoodle text="FOR SENG ♡" />
          </div>

          {/* Pulsing Love Wax Seal */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#9E4D61] via-[#C98291] to-[#E3A3B0] text-white flex items-center justify-center shadow-xl border-2 border-[#83384B] animate-pulse-gentle">
                <Heart className="w-10 h-10 fill-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md text-amber-500">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Romantic Salutation */}
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs text-scrapbook-rose font-semibold uppercase tracking-widest bg-scrapbook-blush/40 px-3.5 py-1 rounded-full">
              <span>A Special Gift for Seng ♡</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-scrapbook-brown pt-1">
              Hai Seng Tersayang... ♡
            </h2>

            <p className="font-handwriting text-lg sm:text-xl text-scrapbook-brown/80 leading-relaxed px-2">
              "Dumbo buatin sebuah scrapbook kecil berisi kenangan, melodi indah, dan cinta kita. Buka dan nikmati ya, sayang..."
            </p>
          </div>

          {/* Music Preview Badge */}
          <div className="bg-[#FFF8F2] border border-[#F0E0D6] rounded-2xl p-3 mb-6 flex items-center justify-center gap-2 text-xs text-scrapbook-brown">
            <Music className="w-4 h-4 text-scrapbook-rose animate-bounce" />
            <span className="font-serif font-medium">
              Background Song: <strong>Brian McKnight — Back At One</strong> 🎶
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleOpenMusic}
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-scrapbook-rose to-[#A85368] hover:from-scrapbook-roseDark hover:to-scrapbook-rose text-white font-serif font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>💌 Buka Scrapbook & Putar Lagu 🎵</span>
            </button>

            <button
              onClick={onOpenWithoutMusic}
              className="text-xs text-stone-400 hover:text-scrapbook-brown transition-colors underline font-sans py-1 cursor-pointer"
            >
              Buka tanpa musik
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-[#F2E5DC] text-[11px] text-stone-400 font-serif italic">
            20 Desember 2025 — Sampai maut memisahkan ♡
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
