import { useTranslations } from 'next-intl';
import { Award, MapPin, Building2, Shield, TrendingUp, Users, Globe } from 'lucide-react';
import Hero from '@/components/hero/Hero';
import AboutSection from '@/components/sections/AboutSection';
import GridFeaturesSection from '@/components/sections/GridFeaturesSection';
import SectionTitle from '@/components/ui/SectionTitle';
import FeatureCard from '@/components/ui/FeatureCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';
import MagneticButton from '@/components/effects/MagneticButton';
import AnimatedCounter from '@/components/effects/AnimatedCounter';
import GradientMesh from '@/components/effects/GradientMesh';
import FloatingElements from '@/components/effects/FloatingElements';
import ParallaxSection from '@/components/effects/ParallaxSection';

export const metadata = {
  title: 'FRTLUX – Sichere Grundstücksinvestitionen in Istanbul Yenişehir',
  description: 'Ihr offizieller Partner für sichere Grundstücksinvestitionen in Istanbul Yenişehir. Deutsche Sicherheit trifft türkische Standortexpertise.',
};

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: Award,
      title: t('features.experience.title'),
      description: t('features.experience.description'),
    },
    {
      icon: MapPin,
      title: t('features.location.title'),
      description: t('features.location.description'),
    },
    {
      icon: Building2,
      title: t('features.presence.title'),
      description: t('features.presence.description'),
    },
    {
      icon: Shield,
      title: t('features.process.title'),
      description: t('features.process.description'),
    },
  ];

  const timelinePreview = [
    { year: '2018', event: 'Eröffnung Istanbul Airport' },
    { year: '2020', event: 'TOKI Großprojekte in Arnavutköy' },
    { year: '2023', event: 'Neue Schnellstraßen & Infrastruktur' },
    { year: '2025+', event: 'Geplante Metro-Verbindungen' },
  ];

  const newsPreview = [
    {
      date: '15.11.2024',
      category: 'Infrastruktur',
      title: 'Neue Metro-Linie nach Arnavutköy angekündigt',
      teaser: 'Die Regierung hat den Bau einer neuen Metro-Verbindung von der Altstadt nach Nord-Istanbul offiziell bestätigt.',
    },
    {
      date: '08.11.2024',
      category: 'Yenişehir',
      title: 'Kanal Istanbul: Aktuelle Planungsstände',
      teaser: 'Das Megaprojekt Kanal Istanbul nimmt konkrete Formen an. Wir fassen die neuesten Entwicklungen zusammen.',
    },
    {
      date: '01.11.2024',
      category: 'Grundstücke',
      title: 'Nachfrage in Yenişehir steigt kontinuierlich',
      teaser: 'Analysen zeigen: Die Grundstückspreise in Yenişehir entwickeln sich stabil nach oben. Ein Überblick.',
    },
  ];

  const stats = [
    { value: 2500, suffix: '+', label: 'Verkaufte Grundstücke' },
    { value: 15, suffix: ' Jahre', label: 'Erfahrung' },
    { value: 98, suffix: '%', label: 'Zufriedene Kunden' },
    { value: 50, suffix: ' Mio €', label: 'Investitionsvolumen' },
  ];

  return (
    <>
      {/* Background Effects */}
      <GradientMesh />
      <FloatingElements />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Grid Features Section */}
      <GridFeaturesSection />

      {/* Stats Section - NEW */}
      <ParallaxSection speed={0.9}>
        <section className="py-24 relative overflow-hidden">
          {/* Background Gradient for Section */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-900/50 to-background pointer-events-none -z-10" />
          
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="fade">
              <SectionTitle
                title="Zahlen die überzeugen"
                subtitle="Vertrauen Sie auf unsere Expertise"
                align="center"
              />
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className="group text-center p-8 rounded-xl bg-zinc-900/20 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                    <div className="font-heading text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide group-hover:text-foreground transition-colors">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Features Section */}
      <ParallaxSection speed={1.1}>
        <section className="py-24 bg-zinc-950/50">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="fade">
              <SectionTitle
                title={t('features.title')}
                align="center"
              />
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                  <TiltCard maxTilt={10} scale={1.03}>
                    <FeatureCard {...feature} />
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-16 text-center">
              <ScrollReveal direction="fade" delay={0.6}>
                <MagneticButton strength={0.3}>
                  <Button href="/warum-frtlux" variant="secondary">
                    {t('common.learnMore')} – {t('nav.why')}
                  </Button>
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Yenişehir Section */}
      <ParallaxSection speed={0.85}>
        <section className="py-24 bg-gradient-to-b from-zinc-950 to-background relative">
           {/* Decorative Element */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center max-w-7xl mx-auto">
              {/* Text Content */}
              <ScrollReveal direction="left">
                <div>
                  <SectionTitle title={t('yenisehir.title')} />
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {t('yenisehir.intro')}
                  </p>

                  <ul className="space-y-6 mb-10">
                    {[
                      t('yenisehir.airport'),
                      t('yenisehir.canal'),
                      t('yenisehir.infrastructure'),
                      t('yenisehir.planning'),
                      t('yenisehir.seismic'),
                    ].map((item, index) => (
                      <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                        <li className="flex items-center gap-4 group">
                          <span className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-125 transition-transform duration-300" />
                          <span className="text-foreground/90 font-medium">{item}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>

                  <MagneticButton strength={0.4}>
                    <Button href="/istanbul-yenisehir" variant="primary">
                      {t('yenisehir.cta')}
                    </Button>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              {/* Image Placeholder */}
              <ScrollReveal direction="right">
                <TiltCard maxTilt={8} glare={true}>
                  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-zinc-900/50 p-12 flex items-center justify-center min-h-[500px] border border-white/5 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('/building.png')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                    <p className="text-center text-white/50 text-sm relative z-10 font-mono tracking-widest uppercase">
                      [Karte / Illustration Istanbul Yenişehir]
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Timeline Preview */}
      <ParallaxSection speed={1.05}>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="fade">
              <SectionTitle
                title={t('timeline.title')}
                subtitle={t('timeline.subtitle')}
                align="center"
              />
            </ScrollReveal>

            <div className="max-w-4xl mx-auto mt-16">
              <div className="space-y-12">
                {timelinePreview.map((item, index) => (
                  <ScrollReveal key={index} direction="left" delay={index * 0.15}>
                    <div
                      className="flex gap-8 items-start border-l-2 border-primary/20 pl-10 pb-2 relative group hover:border-primary/60 transition-colors duration-500"
                    >
                      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                      <div className="flex-shrink-0 pt-0.5">
                        <span className="font-heading text-3xl font-bold text-primary/80 group-hover:text-primary transition-colors">
                          {item.year}
                        </span>
                      </div>
                      <div>
                        <p className="text-xl text-foreground/80 group-hover:text-foreground transition-colors font-light">{item.event}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <ScrollReveal direction="fade" delay={0.6}>
                <MagneticButton strength={0.35}>
                  <Button href="/entwicklung-arnavutkoy" variant="secondary">
                    {t('timeline.cta')}
                  </Button>
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* News Preview */}
      <ParallaxSection speed={0.95}>
        <section className="py-24 bg-zinc-900/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="fade">
              <SectionTitle
                title={t('news.title')}
                subtitle={t('news.subtitle')}
                align="center"
              />
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto mt-12">
              {newsPreview.map((news, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                  <TiltCard maxTilt={5} scale={1.02}>
                    <article
                      className="rounded-xl border border-white/5 bg-card/50 backdrop-blur-md p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col group"
                    >
                      <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
                        <span className="text-primary px-2 py-1 rounded bg-primary/10">{news.date}</span>
                        <span className="text-muted-foreground">{news.category}</span>
                      </div>
                      <h3 className="mb-4 font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                        {news.teaser}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:translate-x-2 duration-300">
                        {t('common.readMore')} 
                        <span className="ml-2">→</span>
                      </span>
                    </article>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-16 text-center">
              <ScrollReveal direction="fade" delay={0.5}>
                <MagneticButton strength={0.3}>
                  <Button href="/news" variant="secondary">
                    {t('news.cta')}
                  </Button>
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Contact CTA */}
      <ParallaxSection speed={1.0}>
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal direction="fade">
                <SectionTitle
                  title={t('contact.title')}
                  subtitle={t('contact.subtitle')}
                  align="center"
                />
              </ScrollReveal>

              <div className="mt-12">
                <ScrollReveal direction="up" delay={0.3}>
                  <MagneticButton strength={0.5}>
                    <Button href="/kontakt" variant="primary" className="text-lg px-12 py-5">
                      {t('contact.cta')}
                    </Button>
                  </MagneticButton>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </>
  );
}
