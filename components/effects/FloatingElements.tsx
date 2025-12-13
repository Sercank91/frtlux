'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function FloatingElements() {
  const container = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!container.current || !isMounted) return;

    const elements = container.current.querySelectorAll('.floating-element');

    elements.forEach((element, index) => {
      const tween = gsap.to(element, {
        y: `${gsap.utils.random(-30, 30)}px`,
        x: `${gsap.utils.random(-20, 20)}px`,
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      });
      tweensRef.current.push(tween);
    });

    return () => {
      tweensRef.current.forEach(tween => tween.kill());
      tweensRef.current = [];
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div ref={container} className="fixed inset-0 -z-10 overflow-hidden opacity-10 pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="floating-element absolute top-20 left-10 w-16 h-16 border-2 border-orange-500 rounded-lg rotate-12 will-change-transform" />
      <div className="floating-element absolute top-40 right-20 w-12 h-12 border-2 border-orange-400 rounded-full will-change-transform" />
      <div className="floating-element absolute bottom-32 left-1/4 w-20 h-20 border-2 border-orange-500/50 rotate-45 will-change-transform" />
      <div className="floating-element absolute bottom-48 right-1/3 w-14 h-14 border-2 border-orange-300 rounded-lg -rotate-12 will-change-transform" />
      <div className="floating-element absolute top-1/2 left-1/2 w-10 h-10 border-2 border-orange-500/70 rounded-full will-change-transform" />
      <div className="floating-element absolute top-1/3 right-10 w-24 h-1 bg-orange-500/30 will-change-transform" />
    </div>
  );
}
