'use client';

import { useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Note: ScrollSmoother requires GSAP Club GreenSock membership
// This is a lightweight alternative using smooth scrolling

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      const scrollAmount = delta * 0.8; // Smooth factor

      gsap.to(window, {
        scrollTo: {
          y: window.scrollY + scrollAmount,
          autoKill: true
        },
        duration: 0.8,
        ease: 'power2.out'
      });
    };

    // Only on desktop for better performance
    if (window.innerWidth > 768) {
      window.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <>{children}</>;
}
