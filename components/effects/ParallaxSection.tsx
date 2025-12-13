'use client';

import { useRef, useEffect, ReactNode, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0.5 = langsamer, 1.5 = schneller
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.8,
  className = ''
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !isMounted) return;

    const section = sectionRef.current;

    // Parallax Effect
    const animation = gsap.to(section, {
      y: () => -window.innerHeight * (1 - speed) * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      // Kill only this specific animation and its trigger
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [speed, isMounted]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
