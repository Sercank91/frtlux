import { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Entwicklung Arnavutköy – Timeline | FRTLUX',
  description: 'Die Entwicklung von Nord-Istanbul Arnavutköy im Zeitverlauf. Vom Flughafen bis zur Metro – alle wichtigen Meilensteine der Infrastruktur.',
};

export default function EntwicklungArnavutkoyPage() {
  const timelineEvents = [
    {
      year: '2018',
      title: 'Eröffnung Istanbul Airport',
      description: 'Der neue Flughafen Istanbul wurde eröffnet und ist heute einer der größten Flughäfen der Welt. Die Region Arnavutköy profitiert direkt von dieser Infrastruktur.',
      category: 'Flughafen',
    },
    {
      year: '2019',
      title: 'TOKI-Großprojekte starten',
      description: 'Die staatliche Wohnungsbaubehörde TOKI startet mehrere Großprojekte in Arnavutköy. Tausende neue Wohneinheiten entstehen.',
      category: 'Wohnungsbau',
    },
    {
      year: '2020',
      title: 'Neue Brücken und Straßen',
      description: 'Moderne Schnellstraßen und Brücken verbinden Arnavutköy mit dem Rest Istanbuls. Die Erreichbarkeit verbessert sich massiv.',
      category: 'Infrastruktur',
    },
    {
      year: '2021',
      title: 'Kanal Istanbul Planungen',
      description: 'Offizielle Bekanntgabe der Kanal Istanbul Pläne. Arnavutköy liegt strategisch am geplanten Kanal.',
      category: 'Megaprojekt',
    },
    {
      year: '2022',
      title: 'Neue Stadtviertel entstehen',
      description: 'Großflächige Neubaugebiete werden erschlossen. Moderne, geplante Stadtteile mit vollständiger Infrastruktur.',
      category: 'Stadtentwicklung',
    },
    {
      year: '2023',
      title: 'Infrastruktur-Ausbau',
      description: 'Kontinuierlicher Ausbau von Wasserversorgung, Strom, Abwasser und Telekommunikation in der gesamten Region.',
      category: 'Infrastruktur',
    },
    {
      year: '2024',
      title: 'Metro-Planungen konkretisiert',
      description: 'Die Regierung konkretisiert die Pläne für Metro-Verbindungen nach Nord-Istanbul. Arnavutköy wird direkt angebunden.',
      category: 'Metro',
    },
    {
      year: '2025+',
      title: 'Weitere Entwicklung',
      description: 'Kontinuierliche Wertsteigerung und Infrastruktur-Entwicklung. Die Region wird zu einem der wichtigsten Stadtteile Istanbuls.',
      category: 'Zukunft',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entwicklung Arnavutköy
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Nord-Istanbul wird neu aufgebaut. Verfolgen Sie die wichtigsten Meilensteine 
              der Infrastrukturentwicklung in Arnavutköy – von 2018 bis heute und darüber hinaus.
            </p>
          </div>
        </div>
      </section>

      {/* Why Arnavutköy */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Warum Arnavutköy?" />
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Arnavutköy ist ein Bezirk im europäischen Teil Istanbuls und bildet das Herzstück 
                der Region "Yenişehir" (Neue Stadt). Während die historische Altstadt Istanbuls 
                unter Überbevölkerung und veralteter Infrastruktur leidet, wird Nord-Istanbul 
                systematisch neu aufgebaut.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Die türkische Regierung hat Arnavutköy als strategisches Entwicklungsgebiet 
                ausgewiesen. Mit dem neuen Flughafen, geplanten Metro-Linien und dem Kanal Istanbul 
                entsteht hier eine der wichtigsten Regionen der Türkei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Timeline – Jahr für Jahr" 
            subtitle="Die wichtigsten Entwicklungen in Arnavutköy"
            align="center"
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-500/30 md:-ml-0.5" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index}
                    className={`relative flex gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-4 md:left-1/2 flex h-8 w-8 md:-ml-4 items-center justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 border-4 border-black">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`pl-16 md:pl-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-orange-500/50">
                        <div className="mb-2 flex items-center gap-3 text-sm">
                          <span className="font-heading text-2xl font-bold text-orange-500">
                            {event.year}
                          </span>
                          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-500">
                            {event.category}
                          </span>
                        </div>
                        <h3 className="mb-3 font-heading text-xl font-semibold text-white">
                          {event.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it means for investors */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Bedeutung für Investoren" 
              subtitle="Was diese Entwicklung für Ihre Investition bedeutet"
            />
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-8">
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                  Wertsteigerung
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Mit jedem neuen Infrastrukturprojekt steigt die Attraktivität der Region. 
                  Frühe Investoren profitieren von der kontinuierlichen Wertsteigerung.
                </p>
              </div>
              
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-8">
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                  Staatliche Investitionen
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Die türkische Regierung investiert Milliarden in die Infrastruktur. 
                  Diese staatlichen Garantien schaffen Planungssicherheit.
                </p>
              </div>
              
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-8">
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                  Langfristige Perspektive
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Die Entwicklung von Arnavutköy ist ein Langzeitprojekt über Jahrzehnte. 
                  Investoren profitieren von einem stabilen Wachstumstrend.
                </p>
              </div>
              
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-8">
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                  Strategische Lage
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Zwischen Flughafen und Kanal Istanbul gelegen, wird Arnavutköy zu einem 
                  der wichtigsten Verkehrsknotenpunkte der Region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
