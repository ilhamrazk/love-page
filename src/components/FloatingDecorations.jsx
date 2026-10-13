import React from 'react';
import { motion } from 'framer-motion';

const floatingItems = [
  { id: 1, symbol: '♡', size: 'text-sm md:text-base', color: 'text-[#C98291]/40', left: '8%', delay: 0, duration: 16 },
  { id: 2, symbol: '✿', size: 'text-xs md:text-sm', color: 'text-[#F3C7B7]/50', left: '22%', delay: 4, duration: 20 },
  { id: 3, symbol: '✦', size: 'text-xs', color: 'text-amber-300/40', left: '38%', delay: 2, duration: 18 },
  { id: 4, symbol: '💌', size: 'text-xs md:text-sm', color: 'text-[#C98291]/35', left: '55%', delay: 6, duration: 22 },
  { id: 5, symbol: '🦋', size: 'text-xs md:text-sm', color: 'text-[#DDD5E8]/60', left: '72%', delay: 1, duration: 19 },
  { id: 6, symbol: '˚₊‧', size: 'text-xs', color: 'text-[#9E4D61]/35', left: '86%', delay: 5, duration: 17 },
  { id: 7, symbol: '♡', size: 'text-xs md:text-sm', color: 'text-[#F6D9D8]/60', left: '94%', delay: 8, duration: 21 },
];

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute select-none font-serif ${item.size} ${item.color}`}
          style={{ left: item.left, bottom: '-40px' }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '-120vh',
            x: [0, 25, -20, 15, 0],
            rotate: [0, 45, -30, 20, 0],
            opacity: [0, 0.7, 0.8, 0.6, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'linear',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}
