'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import YouTube from 'react-youtube';
import { VIDEO_CONFIG } from '@/lib/videoConfig';
import { GRID_CONFIG, GRID_CONFIG_MOBILE } from '@/lib/gridConfig';
import OrangeGrid from '@/components/ui/OrangeGrid';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import Button from '@/components/ui/Button';

export default function Hero() {
  const t = useTranslations('hero');
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const title1MobileRef = useRef<HTMLHeadingElement>(null);
  const title2MobileRef = useRef<HTMLHeadingElement>(null);
  const subtitleMobileRef = useRef<HTMLParagraphElement>(null);
  const buttonsMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title1DesktopSpans = title1Ref.current?.querySelectorAll('span');
    const title2DesktopSpans = title2Ref.current?.querySelectorAll('span');
    const title1MobileSpans = title1MobileRef.current?.querySelectorAll('span');
    const title2MobileSpans = title2MobileRef.current?.querySelectorAll('span');

    if (!title1DesktopSpans || !title2DesktopSpans || !title1MobileSpans || !title2MobileSpans) return;

    const tl = gsap.timeline({ delay: 0.3 });

    // Animate title 1 (both desktop and mobile - only visible one will show)
    // Faster animation: shorter duration, faster stagger, less overlap delay
    tl.fromTo(
      [title1DesktopSpans, title1MobileSpans],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power2.out',
      }
    );

    // Animate title 2 (both desktop and mobile - starts almost immediately after title 1)
    tl.fromTo(
      [title2DesktopSpans, title2MobileSpans],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power2.out',
      },
      '-=0.3'
    );

    // Animate subtitle (both desktop and mobile) - faster fade in
    tl.fromTo(
      [subtitleRef.current, subtitleMobileRef.current].filter(Boolean),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    // Animate buttons (both desktop and mobile) - faster fade in
    tl.fromTo(
      [buttonsRef.current, buttonsMobileRef.current].filter(Boolean),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {VIDEO_CONFIG.useYoutube ? (
          <div className="absolute inset-0 scale-[1.5] md:scale-[1.2]">
            <YouTube
              videoId={VIDEO_CONFIG.youtubeVideoId}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  mute: 1,
                  loop: 1,
                  playlist: VIDEO_CONFIG.youtubeVideoId,
                  modestbranding: 1,
                  rel: 0,
                  showinfo: 0,
                },
              }}
              className="h-full w-full"
              iframeClassName="w-full h-full pointer-events-none"
            />
          </div>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-[1.5] md:scale-[1.2]"
            style={{ objectPosition: 'center' }}
          >
            <source src={VIDEO_CONFIG.localVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      
      {/* Colorful Ambient Light - "Living Colors" */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/30 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-orange-500/30 blur-[150px] rounded-full animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[800px] h-[800px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse-slow animation-delay-4000" />
      </div>

      {/* Orange Grid */}
      <OrangeGrid />

      {/* Content - Strictly positioned according to grid lines */}
      <div className="relative z-[3] h-full">
        {/* H1 Container - ABOVE horizontal line, RIGHT of vertical line */}
        {/* Mobile Styles */}
        <div 
          className="absolute flex items-end px-4 md:hidden"
          style={{
            left: `calc(${GRID_CONFIG_MOBILE.verticalLinePosition}% + ${GRID_CONFIG_MOBILE.textOffsetFromLine}px)`,
            right: '0',
            top: '0',
            height: `${GRID_CONFIG_MOBILE.horizontalLinePosition}%`,
            paddingBottom: `${GRID_CONFIG_MOBILE.h1MarginBottom}px`,
          }}
        >
          <div className="max-w-full">
            <h1
              ref={title1MobileRef}
              className="font-heading text-3xl font-bold leading-tight text-white"
            >
              {splitText(t('title1'))}
            </h1>
            <h1
              ref={title2MobileRef}
              className="font-heading text-3xl font-bold leading-tight text-white mt-2"
            >
              {splitText(t('title2'))}
            </h1>
          </div>
        </div>

        {/* Desktop Styles */}
        <div 
          className="absolute hidden items-end px-4 lg:px-8 md:flex"
          style={{
            left: `calc(${GRID_CONFIG.verticalLinePosition}% + ${GRID_CONFIG.textOffsetFromLine}px)`,
            right: '0',
            top: '0',
            height: `${GRID_CONFIG.horizontalLinePosition}%`,
            paddingBottom: `${GRID_CONFIG.h1MarginBottom}px`,
          }}
        >
          <div className="w-full">
            <h1
              ref={title1Ref}
              className="font-heading text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl"
            >
              {splitText(t('title1'))}
            </h1>
            <h1
              ref={title2Ref}
              className="font-heading text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl mt-2"
            >
              {splitText(t('title2'))}
            </h1>
          </div>
        </div>

        {/* Paragraph Container - BELOW horizontal line, RIGHT of vertical line */}
        {/* Mobile Styles */}
        <div 
          className="absolute flex items-start px-4 md:hidden"
          style={{
            left: `calc(${GRID_CONFIG_MOBILE.verticalLinePosition}% + ${GRID_CONFIG_MOBILE.textOffsetFromLine}px)`,
            right: '0',
            top: `${GRID_CONFIG_MOBILE.horizontalLinePosition}%`,
            paddingTop: `${GRID_CONFIG_MOBILE.paragraphMarginTop}px`,
            bottom: '0',
          }}
        >
          <div className="max-w-full space-y-6">
            <p
              ref={subtitleMobileRef}
              className="text-base leading-relaxed text-white/90"
            >
              {t('subtitle')}
            </p>

            <div
              ref={buttonsMobileRef}
              className="flex flex-col gap-4"
            >
              <Button href="/kontakt" variant="primary">
                {t('cta1')}
              </Button>
              <Button href="/istanbul-yenisehir" variant="secondary">
                {t('cta2')}
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Styles */}
        <div 
          className="absolute hidden items-start px-4 lg:px-8 md:flex"
          style={{
            left: `calc(${GRID_CONFIG.verticalLinePosition}% + ${GRID_CONFIG.textOffsetFromLine}px)`,
            right: '0',
            top: `${GRID_CONFIG.horizontalLinePosition}%`,
            paddingTop: `${GRID_CONFIG.paragraphMarginTop}px`,
            bottom: '0',
          }}
        >
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <p
              ref={subtitleRef}
              className="text-lg leading-relaxed text-white/90 lg:text-xl"
            >
              {t('subtitle')}
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/kontakt" variant="primary">
                {t('cta1')}
              </Button>
              <Button href="/istanbul-yenisehir" variant="secondary">
                {t('cta2')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
