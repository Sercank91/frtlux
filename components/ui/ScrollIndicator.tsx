'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ScrollIndicator() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;

    gsap.to(dotRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div 
      className="absolute z-[4] flex flex-col items-center gap-3 md:left-1/2 md:-translate-x-1/2 md:right-auto"
      style={{
        bottom: '40px',
        right: '40px',
      }}
    >
      {/* Scroll Track - Elegant and wider */}
      <div 
        className="relative flex h-16 w-[3px] items-start justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-sm"
        style={{
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
        }}
      >
        {/* Track inner line */}
        <div className="absolute inset-0 w-[1px] bg-white/20" style={{ left: '50%', transform: 'translateX(-50%)' }} />
        
        {/* Animated Dot - Orange and elegant */}
        <div
          ref={dotRef}
          className="absolute top-2 h-4 w-[3px] rounded-full bg-orange-500"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))',
            boxShadow: '0 0 12px rgba(249, 115, 22, 0.6)',
          }}
        />
      </div>

      {/* Scroll Text - Orange */}
      <span 
        className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))',
          textShadow: '0 0 8px rgba(249, 115, 22, 0.5)',
        }}
      >
        SCROLL
      </span>
    </div>
  );
}
