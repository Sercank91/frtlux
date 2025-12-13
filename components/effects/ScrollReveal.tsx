'use client';

import { useRef, useEffect, ReactNode, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  className = ''
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!elementRef.current || !isMounted) return;

    const element = elementRef.current;

    // Initial state
    const initialState: gsap.TweenVars = {
      opacity: 0,
    };

    switch (direction) {
      case 'up':
        initialState.y = 60;
        break;
      case 'down':
        initialState.y = -60;
        break;
      case 'left':
        initialState.x = 60;
        break;
      case 'right':
        initialState.x = -60;
        break;
    }

    // Set initial state immediately
    gsap.set(element, initialState);

    // Animate in
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      // Kill only this specific animation and its trigger
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [direction, delay, duration, isMounted]);

  // Get initial inline style based on direction
  const getInitialStyle = () => {
    const style: React.CSSProperties = { opacity: 0 };

    switch (direction) {
      case 'up':
        style.transform = 'translateY(60px)';
        break;
      case 'down':
        style.transform = 'translateY(-60px)';
        break;
      case 'left':
        style.transform = 'translateX(60px)';
        break;
      case 'right':
        style.transform = 'translateX(-60px)';
        break;
    }

    return style;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={!isMounted ? getInitialStyle() : undefined}
    >
      {children}
    </div>
  );
}
