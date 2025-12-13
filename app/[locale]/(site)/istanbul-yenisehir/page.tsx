import { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Plane, Anchor, TrendingUp, Building, Shield, Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Istanbul Yenişehir – Die neue Stadt am Bosporus | FRTLUX',
  description: 'Entdecken Sie Istanbul Yenişehir: Die geplante Zukunftsstadt zwischen dem neuen Flughafen und Kanal Istanbul. Moderne Infrastruktur und einzigartige Investmentchancen.',
};

export default function IstanbulYenisehirPage() {
  const locationFeatures = [
    {
      icon: Plane,
      title: 'Neuer Flughafen Istanbul',
      description: 'Direkter Zugang zu einem der größten Flughäfen der Welt',
    },
    {
      icon: Anchor,
      title: 'Kanal Istanbul',
      description: 'Strategische Lage am geplanten Kanal Istanbul-Projekt',
    },
    {
      icon: Map,
      title: 'Neue Autobahnen',
      description: 'Moderne Schnellstraßen verbinden Yenişehir mit ganz Istanbul',
    },
    {
      icon: Building,
      title: 'Geplante Metro',
      description: 'Zukünftige Metro-Verbindungen für optimale Erreichbarkeit',
    },
    {
      icon: Building,
      title: 'Große Neubaugebiete',
      description: 'Geordnete Stadtplanung nach modernen Standards',
    },
    {
      icon: Shield,
      title: 'Erdbebensicher',
      description: 'Stabilere Bodenstrukturen als in der Altstadt',
    },
  ];

  const investmentAdvantages = [
    'Geplanter, strukturierter Stadtaufbau',
    'Massive staatliche Infrastrukturinvestitionen',
    'Hohe Nachfrage durch Bevölkerungswachstum',
    'Langfristige Wertsteigerung durch Entwicklung',
    'Nähe zu internationalen Verkehrsknotenpunkten',
    'Moderne, erdbebensichere Baustandards',
  ];

  const exampleProperties = [
    {
      size: '500 m²',
      type: 'Wohngrundstück',
      location: 'Arnavutköy Nord',
      features: ['Imar vorhanden', 'Erschlossen', 'Erdbebensicher'],
    },
    {
      size: '1.000 m²',
      type: 'Wohngrundstück',
      location: 'Yenişehir Zentrum',
      features: ['Imar geplant', 'Infrastruktur im Bau', 'Top-Lage'],
    },
    {
      size: '2.000 m²',
      type: 'Großgrundstück',
      location: 'Arnavutköy Süd',
      features: ['Imar vorhanden', 'Gewerbegebiet', 'Kanal-Nähe'],
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Erstberatung in Deutschland',
      description: 'Persönliches Gespräch in unserem Showroom',
    },
    {
      step: '2',
      title: 'Grundstücksauswahl',
      description: 'Gemeinsame Auswahl passender Grundstücke',
    },
    {
      step: '3',
      title: 'Dokumentenprüfung',
      description: 'Transparente Prüfung aller Unterlagen',
    },
    {
      step: '4',
      title: 'Istanbul-Besuch',
      description: 'Besichtigung vor Ort mit Firat Emlak',
    },
    {
      step: '5',
      title: 'Rechtssicherer Kauf',
      description: 'Tapu-Übertragung mit allen Dokumenten',
    },
    {
      step: '6',
      title: 'Nachbetreuung',
      description: 'Langfristige Begleitung nach dem Kauf',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Istanbul Yenişehir
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Die neue geplante Stadt im Norden Istanbuls – strategisch gelegen zwischen 
              dem neuen Flughafen und dem geplanten Kanal Istanbul. Eine einzigartige 
              Investmentchance in einer der dynamischsten Regionen der Türkei.
            </p>
          </div>
        </div>
      </section>

      {/* What is Yenişehir */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Was ist Yenişehir?" />
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Yenişehir (türkisch für "Neue Stadt") ist das ambitionierteste Stadtentwicklungsprojekt 
                im Norden Istanbuls. Die Region umfasst Teile von Arnavutköy und angrenzende Gebiete, 
                die systematisch zu einer modernen, geplanten Stadt ausgebaut werden.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Anders als die historische Altstadt Istanbuls wird Yenişehir von Grund auf nach 
                modernen urbanistischen Standards entwickelt – mit geordneter Infrastruktur, 
                erdbebensicheren Bodenlagen und direkter Anbindung an internationale Verkehrsknotenpunkte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Features */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Lagebeschreibung" 
            subtitle="Strategische Vorteile der Region Yenişehir"
            align="center"
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {locationFeatures.map((feature, index) => (
              <div 
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-orange-500/50"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange-500/10 p-3">
                  <feature.icon className="text-orange-500" size={28} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Advantages */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Vorteile für Investoren" 
              subtitle="Warum Yenişehir eine einzigartige Investmentchance bietet"
            />
            
            <div className="grid gap-6 md:grid-cols-2">
              {investmentAdvantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-orange-500/20 bg-orange-500/5 p-6"
                >
                  <TrendingUp className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-white/80 leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geology & Earthquake Safety */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Geologie & Erdbebensicherheit" />
            
            <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="text-orange-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                    Stabilere Bodenstrukturen
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-4">
                    Im Gegensatz zur historischen Altstadt Istanbuls, die auf teilweise instabilen 
                    Bodenstrukturen gebaut wurde, verfügt die Region Yenişehir über geologisch 
                    stabilere Untergründe.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Die geordnete Stadtplanung berücksichtigt moderne erdbebensichere Baustandards 
                    von Anfang an. Alle Neubaugebiete werden nach aktuellen seismischen Richtlinien 
                    entwickelt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Properties */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Beispiel-Grundstücke" 
            subtitle="Verschiedene Grundstücksarten in Yenişehir"
            align="center"
          />
          
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {exampleProperties.map((property, index) => (
              <div 
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4">
                  <div className="text-3xl font-heading font-bold text-orange-500 mb-2">
                    {property.size}
                  </div>
                  <div className="text-xl font-semibold text-white mb-1">
                    {property.type}
                  </div>
                  <div className="text-sm text-white/60">
                    {property.location}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {property.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-sm text-white/50 italic">
                  Beispielgrundstück – konkrete Verfügbarkeit auf Anfrage
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Ablauf über FRTLUX + Firat Emlak" 
            subtitle="So läuft Ihre Investition ab"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-orange-500/50"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="font-heading text-2xl font-bold text-orange-500">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/kontakt" variant="primary">
              Jetzt Beratungstermin vereinbaren
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
