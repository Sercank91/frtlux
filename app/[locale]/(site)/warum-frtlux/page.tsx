'use client';

import { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import { AlertCircle, CheckCircle2, Users, FileCheck, MapPin, Briefcase, ArrowRight, ShieldCheck, Building } from 'lucide-react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';
import ParallaxSection from '@/components/effects/ParallaxSection';

export default function WarumFrtluxPage() {
  const problems = [
    'Schlechte Erfahrungen mit unseriösen Vermittlern',
    'Fehlende Transparenz bei Grundstückskäufen',
    'Keine deutschen Ansprechpartner vor Ort',
    'Unsicherheit bei Tapu, Imar und Ifraz',
    'Vermittler-Abzocke und versteckte Kosten',
  ];

  const premluxPoints = [
    '30+ Jahre Erfahrung in Deutschland',
    'Deutsche Verträge und klare Strukturen',
    'Showroom und persönlicher Ansprechpartner',
    'Keine Vermittler – direkter Kontakt',
    'Transparente Prozesse und Dokumentation',
  ];

  const firatEmlakPoints = [
    'Jahrzehntelange Erfahrung in Arnavutköy',
    'Regionale Projekt-Expertise vor Ort',
    'Echte Grundstücke, echte Dokumente',
    'Alle Unterlagen rechtlich korrekt',
    'Persönliche Begleitung in Istanbul',
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Analyse',
      description: 'Wir analysieren Ihre Investitionsziele und Ihr Budget.',
    },
    {
      icon: Briefcase,
      title: 'Beratung',
      description: 'Umfassende Beratung zu Standorten und Möglichkeiten.',
    },
    {
      icon: FileCheck,
      title: 'Vorbereitung',
      description: 'Alle Dokumente werden transparent vorbereitet.',
    },
    {
      icon: MapPin,
      title: 'Auswahl',
      description: 'Gemeinsame Auswahl des perfekten Grundstücks.',
    },
    {
      icon: CheckCircle2,
      title: 'Istanbul-Besuch',
      description: 'Begleitung vor Ort mit lokalem Experten-Team.',
    },
    {
      icon: ShieldCheck,
      title: 'Nachbetreuung',
      description: 'Langfristige Betreuung auch nach dem Kauf.',
    },
  ];

  return (
    <>
      {/* Hero Section - VIBRANT LIGHT MODE */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900 pt-20">
        {/* Animated Colorful Background - Two-Tone Split */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dark Gradient Base to ensure header visibility */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 to-transparent z-10" />
          
          {/* Left Side: Cool Blue/Purple */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-900/40 to-purple-900/20" />
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/30 blur-[120px] rounded-full animate-blob mix-blend-screen opacity-70" />
          
          {/* Right Side: Warm Orange/Peach */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-900/40 to-rose-900/20" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-500/30 blur-[120px] rounded-full animate-blob-slow animation-delay-2000 mix-blend-screen opacity-70" />
          
          {/* Center Merger */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        </div>
        
        {/* Glass Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
                Warum <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 animate-pulse-slow">FRTLUX?</span>
              </h1>
              <p className="text-xl md:text-3xl text-zinc-200 leading-relaxed max-w-3xl mx-auto font-light">
                Die Zukunft der Investition ist <span className="font-medium text-white">hell</span>, <span className="font-medium text-white">sicher</span> und <span className="font-medium text-white">transparent</span>.
                Wir verbinden deutsche Präzision mit türkischem Wachstumspotenzial.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem - DARK MODE Contrast */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight relative z-10">
                  Die Realität vieler <br/><span className="text-red-500">Investoren</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  Unsicherheit, undurchsichtige Prozesse und Sprachbarrieren machen Investitionen oft zum Risiko.
                </p>
                <ul className="space-y-6">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-center gap-6 group">
                      <div className="h-px w-8 bg-zinc-800 group-hover:bg-red-500 transition-colors" />
                      <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <TiltCard maxTilt={5} scale={1.02}>
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay" />
                  <AlertCircle size={120} className="text-red-500/20" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-sm font-mono text-red-500/60 uppercase tracking-widest">Risikofaktor: Hoch</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* The Solution - RADIANT WHITE MODE */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100 to-transparent opacity-50 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            
            <ScrollReveal direction="right">
              <TiltCard maxTilt={5} scale={1.02}>
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 shadow-2xl shadow-orange-500/10 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />
                  <CheckCircle2 size={120} className="text-orange-500/20" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-sm font-mono text-orange-500/60 uppercase tracking-widest">Sicherheitsfaktor: Maximiert</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
                  Der <span className="text-orange-500">FRTLUX</span> Standard
                </h2>
                <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                  Wir bringen Licht ins Dunkel. Transparenz ist keine Option, sondern unser Fundament. Deutsche Rechtsstandards treffen auf lokale Marktkenntnis.
                </p>
                
                <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4 text-orange-600 font-medium">
                    <ShieldCheck size={24} />
                    <span>Garantierte Sicherheit</span>
                  </div>
                  <p className="text-zinc-600">
                    Jeder Schritt wird doppelt geprüft. In Deutschland durch Premlux, in der Türkei durch Firat Emlak.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Two Worlds One Partner */}
      <ParallaxSection speed={0.95}>
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-gradient-to-r from-primary/5 via-transparent to-white/5 blur-[100px] opacity-30 pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollReveal direction="fade">
              <SectionTitle 
                title="Zwei Welten, Ein Partner" 
                subtitle="Die Synergie für Ihren Erfolg"
                align="center"
                className="mb-20"
              />
            </ScrollReveal>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Premlux */}
              <ScrollReveal direction="up" delay={0.1}>
                <TiltCard className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-8 hover:border-primary/30 transition-colors duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <Building className="text-primary h-8 w-8" />
                      <h3 className="font-heading text-2xl font-bold text-white">Premlux (Deutschland)</h3>
                    </div>
                    <ul className="space-y-4">
                      {premluxPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80 group hover:text-white transition-colors">
                          <CheckCircle2 className="text-primary/50 shrink-0 mt-1 group-hover:text-primary transition-colors" size={18} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Firat Emlak */}
              <ScrollReveal direction="up" delay={0.2}>
                <TiltCard className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-8 hover:border-primary/30 transition-colors duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <MapPin className="text-primary h-8 w-8" />
                      <h3 className="font-heading text-2xl font-bold text-white">Firat Emlak (Istanbul)</h3>
                    </div>
                    <ul className="space-y-4">
                      {firatEmlakPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80 group hover:text-white transition-colors">
                          <CheckCircle2 className="text-primary/50 shrink-0 mt-1 group-hover:text-primary transition-colors" size={18} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Process Steps */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal direction="fade">
            <SectionTitle 
              title="Unser Prozess als Yatırım Danışmanı" 
              subtitle="Transparenz in jedem Schritt – von der Vision zur Realität"
              align="center"
              className="mb-24"
            />
          </ScrollReveal>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="group relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
                  {/* Step Number Background */}
                  <div className="absolute -right-4 -top-4 text-9xl font-heading font-bold text-white/[0.02] group-hover:text-primary/[0.05] transition-colors select-none pointer-events-none">
                    {index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-500">
                      <step.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
