import React from 'react';

export function HeartDoodle({ className = 'w-6 h-6 text-scrapbook-rose' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function FlowerDoodle({ className = 'w-6 h-6 text-scrapbook-peach' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
      <path d="M12 2a4 4 0 0 0-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 0 0-4-4z" />
      <path d="M22 12a4 4 0 0 0-4-4c-3 0-6 4-6 4s3 4 6 4a4 4 0 0 0 4-4z" />
      <path d="M12 22a4 4 0 0 0 4-4c0-3-4-6-4-6s-4 3-4 6a4 4 0 0 0 4 4z" />
      <path d="M2 12a4 4 0 0 0 4 4c3 0 6-4 6-4s-3-4-6-4a4 4 0 0 0-4 4z" />
    </svg>
  );
}

export function SparkleDoodle({ className = 'w-5 h-5 text-amber-400' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function PaperClip({ className = 'w-6 h-10 text-stone-400' }) {
  return (
    <svg viewBox="0 0 24 38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M16 8v20a5 5 0 0 1-10 0V8a3 3 0 0 1 6 0v18a1 1 0 0 1-2 0V9" />
    </svg>
  );
}

export function StampDoodle({ text = "SPECIAL", className = "" }) {
  return (
    <div className={`inline-flex items-center justify-center border-2 border-dashed border-[#C98291]/60 px-2.5 py-1 rounded-sm text-[#C98291] font-mono text-[10px] tracking-widest uppercase rotate-[-6deg] opacity-80 ${className}`}>
      {text}
    </div>
  );
}
