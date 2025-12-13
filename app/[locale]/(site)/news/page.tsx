import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import { Calendar, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Standort-Updates – FRTLUX',
  description: 'Aktuelle Nachrichten und Updates zu Yenişehir, Arnavutköy und Istanbul. Bleiben Sie informiert über die neuesten Entwicklungen.',
};

export default function NewsPage() {
  const news = [
    {
      slug: 'metro-arnavutkoy',
      date: '15.11.2024',
      category: 'Infrastruktur',
      title: 'Neue Metro-Linie nach Arnavutköy angekündigt',
      teaser: 'Die Regierung hat den Bau einer neuen Metro-Verbindung von der Altstadt nach Nord-Istanbul offiziell bestätigt. Die Linie soll Arnavutköy direkt an das bestehende Metro-Netz anbinden.',
      image: '/placeholder-metro.jpg',
    },
    {
      slug: 'kanal-istanbul-update',
      date: '08.11.2024',
      category: 'Yenişehir',
      title: 'Kanal Istanbul: Aktuelle Planungsstände',
      teaser: 'Das Megaprojekt Kanal Istanbul nimmt konkrete Formen an. Wir fassen die neuesten Entwicklungen zusammen und zeigen, was das für Grundstücksinvestoren bedeutet.',
      image: '/placeholder-kanal.jpg',
    },
    {
      slug: 'grundstueckspreise-yenisehir',
      date: '01.11.2024',
      category: 'Grundstücke',
      title: 'Nachfrage in Yenişehir steigt kontinuierlich',
      teaser: 'Analysen zeigen: Die Grundstückspreise in Yenişehir entwickeln sich stabil nach oben. Ein Überblick über die aktuelle Marktlage und Prognosen für 2025.',
      image: '/placeholder-market.jpg',
    },
    {
      slug: 'neue-schnellstrasse',
      date: '25.10.2024',
      category: 'Infrastruktur',
      title: 'Neue Schnellstraße nach Yenişehir eröffnet',
      teaser: 'Die neue vierspurige Schnellstraße verbindet Yenişehir mit dem Zentrum Istanbuls. Die Fahrzeit verkürzt sich um 40%.',
      image: '/placeholder-road.jpg',
    },
    {
      slug: 'toki-projekt-arnavutkoy',
      date: '18.10.2024',
      category: 'Wohnungsbau',
      title: 'TOKI startet neues Großprojekt in Arnavutköy',
      teaser: 'Die staatliche Wohnungsbaubehörde TOKI hat ein weiteres Großprojekt in Arnavutköy angekündigt. 5.000 neue Wohneinheiten sind geplant.',
      image: '/placeholder-toki.jpg',
    },
    {
      slug: 'flughafen-passagierzahlen',
      date: '10.10.2024',
      category: 'Flughafen',
      title: 'Istanbul Airport: Rekord-Passagierzahlen',
      teaser: 'Der neue Flughafen Istanbul verzeichnet Rekord-Passagierzahlen. Die Region Arnavutköy profitiert direkt von dieser Entwicklung.',
      image: '/placeholder-airport.jpg',
    },
  ];

  const categories = ['Alle', 'Infrastruktur', 'Yenişehir', 'Grundstücke', 'Wohnungsbau', 'Flughafen'];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              News & Standort-Updates
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Bleiben Sie informiert über aktuelle Entwicklungen in Yenişehir, Arnavutköy 
              und der gesamten Region Nord-Istanbul.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {news.map((article, index) => (
              <article
                key={index}
                className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-900/20 flex items-center justify-center">
                  <span className="text-white/30 text-sm">[Bild]</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-orange-500">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="flex items-center gap-1 text-white/60">
                      <Tag size={14} />
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 font-heading text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-4">
                    {article.teaser}
                  </p>
                  
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    Weiterlesen →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
