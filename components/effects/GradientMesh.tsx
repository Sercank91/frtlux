'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function GradientMesh() {
  const mesh1Ref = useRef<HTMLDivElement>(null);
  const mesh2Ref = useRef<HTMLDivElement>(null);
  const mesh3Ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!mesh1Ref.current || !mesh2Ref.current || !mesh3Ref.current || !isMounted) return;

    timelineRef.current = gsap.timeline({ repeat: -1, yoyo: true });

    // Mesh 1 - Orange
    timelineRef.current.to(mesh1Ref.current, {
      x: '+=200',
      y: '+=150',
      scale: 1.2,
      duration: 8,
      ease: 'sine.inOut'
    }, 0);

    // Mesh 2 - Red
    timelineRef.current.to(mesh2Ref.current, {
      x: '-=150',
      y: '+=200',
      scale: 0.9,
      duration: 10,
      ease: 'sine.inOut'
    }, 0);

    // Mesh 3 - Yellow
    timelineRef.current.to(mesh3Ref.current, {
      x: '+=100',
      y: '-=180',
      scale: 1.1,
      duration: 9,
      ease: 'sine.inOut'
    }, 0);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20 pointer-events-none">
      {/* Mesh 1 - Orange */}
      <div
        ref={mesh1Ref}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Mesh 2 - Red/Orange */}
      <div
        ref={mesh2Ref}
        className="absolute top-2/3 right-1/4 w-80 h-80 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.3) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Mesh 3 - Yellow */}
      <div
        ref={mesh3Ref}
        className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
