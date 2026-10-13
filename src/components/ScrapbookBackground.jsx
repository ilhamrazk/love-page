import React from 'react';

export default function ScrapbookBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle organic warm paper grain tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F2]/90 via-[#F8EFE7]/50 to-[#FFF8F2]/90" />
      
      {/* Decorative vintage stamps and faint background watermarks */}
      <div className="absolute top-12 left-10 text-[90px] opacity-[0.03] select-none font-serif">
        ♡
      </div>
      <div className="absolute top-1/3 right-8 text-[120px] opacity-[0.025] select-none font-serif">
        ✿
      </div>
      <div className="absolute bottom-1/4 left-16 text-[100px] opacity-[0.03] select-none font-serif">
        ✦
      </div>
      <div className="absolute bottom-12 right-12 text-[110px] opacity-[0.03] select-none font-serif">
        💌
      </div>

      {/* Subtle paper border vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(74,53,50,0.04)]" />
    </div>
  );
}
