'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend validation only - no actual submission
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-zinc-950 via-background to-zinc-950 pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight">
              Kontakt & Standort Deutschland
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Besuchen Sie uns in unserem Showroom oder kontaktieren Sie uns für eine persönliche Beratung. 
              Wir freuen uns auf Ihre Anfrage!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-gradient-to-b from-background to-zinc-900/50 relative">
        <div className="absolute inset-0 bg-[url('/building.png')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
            {/* Left: Contact Info */}
            <div>
              <SectionTitle title="FRTLUX Showroom Deutschland" />
              
              <div className="space-y-6">
                {/* Address */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="rounded-lg bg-primary/10 p-4 ring-1 ring-primary/20">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                        Adresse
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Mustermann Straße 123<br />
                        12345 Stadt<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-colors hover:border-primary/30">
                  <div className="flex items-center gap-6">
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                        Telefon
                      </h3>
                      <a 
                        href="tel:+49123456789" 
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        +49 123 456 789
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-colors hover:border-primary/30">
                  <div className="flex items-center gap-6">
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <MessageCircle className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                        WhatsApp
                      </h3>
                      <a 
                        href="https://wa.me/49123456789" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        +49 123 456 789
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-colors hover:border-primary/30">
                  <div className="flex items-center gap-6">
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                        E-Mail
                      </h3>
                      <a 
                        href="mailto:info@frtlux.de" 
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        info@frtlux.de
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="rounded-xl border border-border bg-card/30 p-8 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Öffnungszeiten
                      </h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex justify-between gap-8 border-b border-border/50 pb-2">
                          <span>Montag - Freitag:</span>
                          <span className="font-medium text-foreground">09:00 - 18:00 Uhr</span>
                        </div>
                        <div className="flex justify-between gap-8 border-b border-border/50 pb-2">
                          <span>Samstag:</span>
                          <span className="font-medium text-foreground">10:00 - 14:00 Uhr</span>
                        </div>
                        <div className="flex justify-between gap-8 pt-1">
                          <span>Sonntag:</span>
                          <span className="font-medium text-destructive/80">Geschlossen</span>
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground/60 uppercase tracking-wide">
                        Termine außerhalb der Öffnungszeiten nach Vereinbarung möglich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <SectionTitle title="Beratungstermin vereinbaren" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background/50 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background/50 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="ihre@email.de"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background/50 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-md border border-input bg-background/50 px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="rounded-md border border-border bg-card/30 p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Mit dem Absenden dieses Formulars stimmen Sie zu, dass Ihre Angaben zur 
                    Bearbeitung Ihrer Anfrage verwendet werden. Weitere Informationen finden 
                    Sie in unserer Datenschutzerklärung.
                  </p>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="w-full">
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-900/20 flex items-center justify-center">
              <p className="text-center text-white/50 text-sm">
                [Google Maps Integration – Showroom-Standort]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
