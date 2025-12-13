'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GRID_CONFIG, GRID_CONFIG_MOBILE } from '@/lib/gridConfig';

export default function OrangeGrid() {
  const verticalLineTopRef = useRef<HTMLDivElement>(null);
  const verticalLineBottomRef = useRef<HTMLDivElement>(null);
  const horizontalLineLeftRef = useRef<HTMLDivElement>(null);
  const horizontalLineRightRef = useRef<HTMLDivElement>(null);
  const verticalLineTopMobileRef = useRef<HTMLDivElement>(null);
  const verticalLineBottomMobileRef = useRef<HTMLDivElement>(null);
  const horizontalLineLeftMobileRef = useRef<HTMLDivElement>(null);
  const horizontalLineRightMobileRef = useRef<HTMLDivElement>(null);
  const buildingImageRef = useRef<HTMLImageElement>(null);
  const buildingImageMobileRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !verticalLineTopRef.current ||
      !verticalLineBottomRef.current ||
      !horizontalLineLeftRef.current ||
      !horizontalLineRightRef.current
    )
      return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Animate vertical line TOP segment (Desktop + Mobile) - from top to horizontal line
    tl.fromTo(
      [verticalLineTopRef.current, verticalLineTopMobileRef.current].filter(Boolean),
      {
        scaleY: 0,
        opacity: 0,
        transformOrigin: 'top',
      },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      }
    );

    // Animate left segment of horizontal line (Desktop + Mobile) - from left to vertical line
    tl.fromTo(
      [horizontalLineLeftRef.current, horizontalLineLeftMobileRef.current].filter(Boolean),
      {
        scaleX: 0,
        opacity: 0,
        transformOrigin: 'left',
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    // Animate right segment of horizontal line (Desktop + Mobile) - from right to vertical line
    tl.fromTo(
      [horizontalLineRightRef.current, horizontalLineRightMobileRef.current].filter(Boolean),
      {
        scaleX: 0,
        opacity: 0,
        transformOrigin: 'right',
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.8'
    );

    // Animate vertical line BOTTOM segment (Desktop + Mobile) - from horizontal line to bottom
    tl.fromTo(
      [verticalLineBottomRef.current, verticalLineBottomMobileRef.current].filter(Boolean),
      {
        scaleY: 0,
        opacity: 0,
        transformOrigin: 'top',
      },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    // Animate building image at the intersection (Desktop + Mobile)
    tl.fromTo(
      [buildingImageRef.current, buildingImageMobileRef.current].filter(Boolean),
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      {/* Vertical Line - Desktop - TOP SEGMENT (from top to horizontal line) */}
      <div
        ref={verticalLineTopRef}
        className="absolute hidden w-px bg-orange-500/80 md:block"
        style={{
          left: `${GRID_CONFIG.verticalLinePosition}%`,
          top: `${GRID_CONFIG.verticalLineTop}%`,
          bottom: `calc(${100 - GRID_CONFIG.horizontalLinePosition}% + ${GRID_CONFIG.horizontalLineGap}%)`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Vertical Line - Desktop - BOTTOM SEGMENT (from horizontal line to bottom) */}
      <div
        ref={verticalLineBottomRef}
        className="absolute hidden w-px bg-orange-500/80 md:block"
        style={{
          left: `${GRID_CONFIG.verticalLinePosition}%`,
          top: `calc(${GRID_CONFIG.horizontalLinePosition}% + ${GRID_CONFIG.horizontalLineGap}%)`,
          bottom: `${GRID_CONFIG.verticalLineBottom}%`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Vertical Line - Mobile - TOP SEGMENT */}
      <div
        ref={verticalLineTopMobileRef}
        className="absolute w-px bg-orange-500/80 md:hidden"
        style={{
          left: `${GRID_CONFIG_MOBILE.verticalLinePosition}%`,
          top: `${GRID_CONFIG_MOBILE.verticalLineTop}%`,
          bottom: `calc(${100 - GRID_CONFIG_MOBILE.horizontalLinePosition}% + ${GRID_CONFIG_MOBILE.horizontalLineGap}%)`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Vertical Line - Mobile - BOTTOM SEGMENT */}
      <div
        ref={verticalLineBottomMobileRef}
        className="absolute w-px bg-orange-500/80 md:hidden"
        style={{
          left: `${GRID_CONFIG_MOBILE.verticalLinePosition}%`,
          top: `calc(${GRID_CONFIG_MOBILE.horizontalLinePosition}% + ${GRID_CONFIG_MOBILE.horizontalLineGap}%)`,
          bottom: `${GRID_CONFIG_MOBILE.verticalLineBottom}%`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Horizontal Line - Desktop - LEFT SEGMENT (stops before vertical line) */}
      <div
        ref={horizontalLineLeftRef}
        className="absolute left-0 hidden h-px bg-orange-500/80 md:block"
        style={{
          top: `${GRID_CONFIG.horizontalLinePosition}%`,
          right: `calc(${100 - GRID_CONFIG.verticalLinePosition}% + ${GRID_CONFIG.horizontalLineGap}%)`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Horizontal Line - Desktop - RIGHT SEGMENT (starts after vertical line) */}
      <div
        ref={horizontalLineRightRef}
        className="absolute right-0 hidden h-px bg-orange-500/80 md:block"
        style={{
          top: `${GRID_CONFIG.horizontalLinePosition}%`,
          left: `calc(${GRID_CONFIG.verticalLinePosition}% + ${GRID_CONFIG.horizontalLineGap}%)`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Horizontal Line - Mobile - LEFT SEGMENT */}
      <div
        ref={horizontalLineLeftMobileRef}
        className="absolute left-0 h-px bg-orange-500/80 md:hidden"
        style={{
          top: `${GRID_CONFIG_MOBILE.horizontalLinePosition}%`,
          right: `calc(${100 - GRID_CONFIG_MOBILE.verticalLinePosition}% + ${GRID_CONFIG_MOBILE.horizontalLineGap}%)`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Horizontal Line - Mobile - RIGHT SEGMENT */}
      <div
        ref={horizontalLineRightMobileRef}
        className="absolute right-0 h-px bg-orange-500/80 md:hidden"
        style={{
          top: `${GRID_CONFIG_MOBILE.horizontalLinePosition}%`,
          left: `calc(${GRID_CONFIG_MOBILE.verticalLinePosition}% + ${GRID_CONFIG_MOBILE.horizontalLineGap}%)`,
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.7)',
        }}
      />

      {/* Building Image - Desktop - Positioned at the intersection */}
      <div
        className="absolute hidden md:block"
        style={{
          left: `${GRID_CONFIG.verticalLinePosition}%`,
          top: `${GRID_CONFIG.horizontalLinePosition}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          ref={buildingImageRef}
          src="/building.png"
          alt="Building"
          className="w-12 h-auto object-contain"
          style={{
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>

      {/* Building Image - Mobile - Positioned at the intersection */}
      <div
        className="absolute md:hidden"
        style={{
          left: `${GRID_CONFIG_MOBILE.verticalLinePosition}%`,
          top: `${GRID_CONFIG_MOBILE.horizontalLinePosition}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          ref={buildingImageMobileRef}
          src="/building.png"
          alt="Building"
          className="w-12 h-auto object-contain"
          style={{
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>
    </div>
  );
}
