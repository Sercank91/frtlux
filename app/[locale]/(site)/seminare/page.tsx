import { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seminare & Info-Events – FRTLUX',
  description: 'Besuchen Sie unsere Info-Abende und Seminare zu Grundstücksinvestitionen in Istanbul. Lernen Sie Firat Emlak persönlich kennen.',
};

export default function SeminarePage() {
  const upcomingEvents = [
    {
      date: '15. Dezember 2024',
      time: '18:00 - 21:00 Uhr',
      title: 'Info-Abend: Investieren in Istanbul Yenişehir',
      location: 'FRTLUX Showroom, Deutschland',
      attendees: '12 / 25 Plätze',
      description: 'Umfassender Überblick über Investmentmöglichkeiten in Yenişehir. Mit Live-Präsentation und Q&A-Session.',
      highlights: [
        'Standortanalyse Yenişehir',
        'Rechtliche Grundlagen',
        'Beispiel-Grundstücke',
        'Persönliche Beratung',
      ],
    },
    {
      date: '08. Januar 2025',
      time: '19:00 - 21:30 Uhr',
      title: 'Spezial-Seminar: Kanal Istanbul & Arnavutköy',
      location: 'FRTLUX Showroom, Deutschland',
      attendees: '8 / 20 Plätze',
      description: 'Tiefgehende Analyse des Kanal Istanbul Projekts und dessen Auswirkungen auf Grundstückspreise in Arnavutköy.',
      highlights: [
        'Kanal Istanbul Update',
        'Preisentwicklung Arnavutköy',
        'Infrastruktur-Timeline',
        'Investment-Strategie',
      ],
    },
    {
      date: '22. Januar 2025',
      time: '18:00 - 20:00 Uhr',
      title: 'Firat Emlak live aus Istanbul',
      location: 'FRTLUX Showroom, Deutschland',
      attendees: '5 / 30 Plätze',
      description: 'Lernen Sie Firat Emlak persönlich kennen. Live-Schaltung nach Istanbul mit aktuellen Markteinblicken und Grundstückspräsentationen.',
      highlights: [
        'Live-Schaltung Istanbul',
        'Aktuelle Grundstücke',
        'Direkter Austausch mit Firat Emlak',
        'Marktanalyse vor Ort',
      ],
      featured: true,
    },
  ];

  const pastEvents = [
    {
      date: '10. November 2024',
      title: 'Info-Abend: Einstieg in Istanbul Investments',
      attendees: '25 Teilnehmer',
    },
    {
      date: '03. Oktober 2024',
      title: 'Spezial-Seminar: Rechtssicherheit beim Grundstückskauf',
      attendees: '18 Teilnehmer',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Seminare & Info-Events
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Besuchen Sie unsere Info-Abende und Seminare in Deutschland. Lernen Sie FRTLUX 
              und Firat Emlak persönlich kennen und erhalten Sie umfassende Informationen zu 
              Grundstücksinvestitionen in Istanbul.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Kommende Veranstaltungen" 
            subtitle="Sichern Sie sich jetzt Ihren Platz"
            align="center"
          />
          
          <div className="max-w-5xl mx-auto space-y-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`rounded-lg border ${
                  event.featured
                    ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-orange-900/10'
                    : 'border-white/10 bg-white/5'
                } p-8 transition-all duration-300 hover:border-orange-500/50`}
              >
                {event.featured && (
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                      Highlight Event
                    </span>
                  </div>
                )}
                
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Left: Date & Time */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Datum</div>
                        <div className="font-semibold text-white">{event.date}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Uhrzeit</div>
                        <div className="font-semibold text-white">{event.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Ort</div>
                        <div className="font-semibold text-white">{event.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Verfügbarkeit</div>
                        <div className="font-semibold text-white">{event.attendees}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Event Details */}
                  <div className="lg:col-span-2">
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                        Programm-Highlights
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            <span className="text-sm text-white/70">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="primary">
                      Jetzt Platz reservieren
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Vergangene Veranstaltungen" />
            
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-6"
                >
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/60">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/60 mb-1">Teilnehmer</div>
                    <div className="font-semibold text-orange-500">{event.attendees}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-white mb-6">
              Individuelle Beratung gewünscht?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Neben unseren Gruppen-Events bieten wir auch persönliche Einzelberatungen an. 
              Vereinbaren Sie jetzt einen individuellen Termin.
            </p>
            <Button href="/kontakt" variant="secondary">
              Persönlichen Termin vereinbaren
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
