import React from 'react';

export default function TapeElement({ 
  className = '', 
  color = 'peach', 
  rotate = '-2deg',
  width = 'w-24'
}) {
  const colorStyles = {
    peach: 'bg-[#F3C7B7]/70 border-[#E8A593]/40',
    rose: 'bg-[#F6D9D8]/80 border-[#C98291]/40',
    lavender: 'bg-[#DDD5E8]/75 border-[#B8A7D3]/40',
    ivory: 'bg-[#F8EFE7]/85 border-[#D8C7B9]/40',
  };

  const selectedColor = colorStyles[color] || colorStyles.peach;

  return (
    <div 
      className={`absolute h-6 ${width} ${selectedColor} backdrop-blur-[1px] shadow-sm z-20 pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        borderLeft: '2px dashed rgba(74, 53, 50, 0.15)',
        borderRight: '2px dashed rgba(74, 53, 50, 0.15)',
      }}
    />
  );
}
