'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return;

    const counter = counterRef.current;
    const obj = { value: start };

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        tweenRef.current = gsap.to(obj, {
          value: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (counter) {
              counter.textContent =
                prefix +
                obj.value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
                suffix;
            }
          },
          onComplete: () => {
            setHasAnimated(true);
          }
        });
      },
    });

    return () => {
      // Clean up only this specific trigger and tween
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [end, start, duration, suffix, prefix, decimals, hasAnimated]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}{start}{suffix}
    </span>
  );
}
