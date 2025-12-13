'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import { Building2, MapPin, Shield, Users } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const premluxCardRef = useRef<HTMLDivElement>(null);
  const firatCardRef = useRef<HTMLDivElement>(null);
  const combinedRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Elegant fade-in animation on mount
      const tl = gsap.timeline({ delay: 0.2 });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
      );

      // Cards animation with subtle stagger
      tl.fromTo(
        [premluxCardRef.current, firatCardRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      // Divider animation
      tl.fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      );

      // Combined section animation
      tl.fromTo(
        combinedRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const combinedItems = [
    { icon: Shield, text: t('about.security') },
    { icon: MapPin, text: t('about.expertise') },
    { icon: Building2, text: t('about.showroom') },
    { icon: Users, text: t('about.transparency') },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 overflow-hidden"
    >
      {/* Elegant multi-layer background */}
      
      {/* Base gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/6 via-transparent to-transparent" />
      </div>

      {/* Elegant light orbs - positioned strategically */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left orb */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] opacity-60" />
        {/* Top center orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/8 rounded-full blur-[140px] opacity-50" />
        {/* Bottom right orb */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/12 rounded-full blur-[120px] opacity-70" />
        {/* Center left subtle orb */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-80 h-80 bg-orange-500/6 rounded-full blur-[100px] opacity-40" />
      </div>

      {/* Elegant geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Elegant diagonal light beam */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/4 to-transparent" />
        
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-br-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/5 via-transparent to-transparent rounded-tl-full blur-2xl" />
      </div>

      {/* Elegant radial gradient overlays for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_800x400_at_center,_var(--tw-gradient-stops))] from-orange-500/3 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_800x400_at_center,_var(--tw-gradient-stops))] from-orange-500/4 via-transparent to-transparent opacity-40" />
      </div>

      {/* Elegant light rays / beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle light rays from corners */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(249, 115, 22, 0.03) 50%, transparent 100%)',
            clipPath: 'polygon(0 0, 30% 0, 0 30%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-full opacity-20"
          style={{
            background: 'linear-gradient(-45deg, transparent 0%, rgba(249, 115, 22, 0.03) 50%, transparent 100%)',
            clipPath: 'polygon(100% 100%, 100% 70%, 70% 100%)',
          }}
        />
      </div>

      {/* Elegant vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.15) 100%)',
        }}
      />

      {/* Elegant border glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border border-orange-500/5 rounded-none" />
        <div 
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 200px rgba(249, 115, 22, 0.02)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={titleRef}>
          <SectionTitle title={t('about.title')} align="center" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 max-w-7xl mx-auto mt-16">
          {/* Left Column - Partner Cards */}
          <div className="space-y-8">
            {/* Premlux Card */}
            <div
              ref={premluxCardRef}
              className="group relative rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 via-orange-500/3 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Elegant corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Premlux
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('about.premlux')}
                </p>
              </div>
            </div>

            {/* Firat Emlak Card */}
            <div
              ref={firatCardRef}
              className="group relative rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 via-orange-500/3 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Elegant corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Firat Emlak
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t('about.firat')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Combined Benefits */}
          <div ref={combinedRef} className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-2 tracking-tight">
                  {t('about.combined')}
                </h3>
                <div
                  ref={dividerRef}
                  className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent mt-4 origin-left"
                />
              </div>

              <ul className="space-y-5">
                {combinedItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 group-hover:bg-gradient-to-br group-hover:from-orange-500/30 group-hover:to-orange-600/20 transition-all duration-300">
                          <Icon className="text-orange-500 w-5 h-5" />
                        </div>
                      </div>
                      <span className="text-white/90 text-lg leading-relaxed pt-2">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

