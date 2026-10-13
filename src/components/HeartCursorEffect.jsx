import React, { useEffect, useState } from 'react';

export default function HeartCursorEffect() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const symbols = ['♡', '✨', '🌸', '✦'];
    const colors = ['#C98291', '#F3C7B7', '#E5A9B4', '#DDD5E8', '#F6D9D8'];

    const handleClick = (e) => {
      // Don't trigger if user clicked an input/button or let it be light
      const id = Date.now() + Math.random();
      const count = 3;
      const newItems = [];

      for (let i = 0; i < count; i++) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 20;

        newItems.push({
          id: `${id}-${i}`,
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          symbol,
          color,
        });
      }

      setParticles((prev) => [...prev, ...newItems]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newItems.some((n) => n.id === p.id)));
      }, 950);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-click-particle select-none text-base"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            color: p.color,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
