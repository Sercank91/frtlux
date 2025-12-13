import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import TiltCard from '@/components/effects/TiltCard';
import ScrollReveal from '@/components/effects/ScrollReveal';

export default function GridFeaturesSection() {
  const t = useTranslations();

  const features = [
    {
      title: 'FRTLUX',
      subtitle: 'Ihr Partner',
    },
    {
      title: 'Grundstücke',
      subtitle: 'in Yenişehir',
    },
    {
      title: 'Sichere',
      subtitle: 'Investition',
    },
    {
      title: 'Mit Expertise',
      subtitle: 'vor Ort',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-b border-white/10 pb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="flex flex-col gap-2 group cursor-default">
                <div className="h-1 w-12 bg-primary/50 mb-4 group-hover:w-full transition-all duration-500 rounded-full" />
                <h3 className="font-heading text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-primary font-light">+</span>
                  <h3 className="font-heading text-3xl font-light italic text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.subtitle}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left - Image */}
          <ScrollReveal direction="right">
            <TiltCard maxTilt={5} scale={1.02}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
                <Image
                  src="https://img.freepik.com/premium-photo/bosphorus-bridge-landscape_961875-439520.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Bosporus Brücke Landschaft Istanbul"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block rounded-full" />
                <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
                  <strong className="text-foreground font-semibold block mb-2 text-2xl">
                    Bei FRTLUX verbinden wir deutsche Sicherheit mit türkischer Standortexpertise.
                  </strong> 
                  Gemeinsam mit Firat Emlak und Premlux bieten wir Ihnen einen kompletten Service – von der Beratung bis zum rechtskonformen Grundstückskauf in Istanbul Yenişehir. Unsere Expertise ermöglicht es uns, jeden Schritt Ihrer Investition professionell zu begleiten.
                </p>
              </div>

              <Link
                href="/warum-frtlux"
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} />
                </span>
                <span className="border-b border-transparent group-hover:border-primary transition-all duration-300">
                  Mehr über FRTLUX erfahren
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

