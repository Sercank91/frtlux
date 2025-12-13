# FRTLUX Website – Projekt-Zusammenfassung

## ✅ Was wurde erstellt?

Eine vollständige, produktionsreife Next.js-Website für FRTLUX mit:

### 🎯 7 Hauptseiten
1. **Startseite** (/) - Hero mit Video, Features, Timeline-Preview, News, Kontakt-CTA
2. **Warum FRTLUX?** (/warum-frtlux) - Problem-Lösung-Struktur, Premlux & Firat Emlak
3. **Istanbul Yenişehir** (/istanbul-yenisehir) - Standortbeschreibung, Investment-Vorteile
4. **Entwicklung Arnavutköy** (/entwicklung-arnavutkoy) - Timeline 2018-2025+
5. **News & Updates** (/news) - News-Übersicht mit Kategorien
6. **Seminare & Events** (/seminare) - Event-Listings mit Anmeldung
7. **Kontakt** (/kontakt) - Kontaktformular & Showroom-Infos

### 🎨 Design-Features
- **Cinematic Hero** mit YouTube-Video (umschaltbar auf lokales MP4)
- **OrangeGrid** – animierte vertikale & horizontale Linien (GSAP)
- **ScrollIndicator** – animierter Scroll-Indikator
- **Dark Theme** – Schwarzer Hintergrund mit Orange-Akzenten (#f97316)
- **Mobile-optimiert** – Hamburger-Menü, responsive Grid-Linien
- **GSAP-Animationen** – Text-Slide-Ins, Linien-Animation

### 🌍 Mehrsprachigkeit
- **Deutsch** (Standard)
- **Englisch**
- Sprachumschalter im Header (DE | EN)
- next-intl Integration

### 🛠️ Technologie
- **Framework**: Next.js 14 (App Router)
- **TypeScript**: Vollständig typisiert
- **Styling**: TailwindCSS
- **Animationen**: GSAP
- **Fonts**: Playfair Display (Headings) + Inter (Body)
- **Icons**: Lucide React
- **Video**: react-youtube + native HTML5 video

---

## 📦 Installation & Start

### Schritt 1: In den Ordner wechseln
```bash
cd D:\frtlux
```

### Schritt 2: Dependencies installieren
```bash
npm install
```

### Schritt 3: Development Server starten
```bash
npm run dev
```

### Schritt 4: Browser öffnen
```
http://localhost:3000
```

**Das war's! Die Website läuft jetzt lokal.**

---

## ⚙️ Wichtige Konfigurationsdateien

### 1. Video-Einstellungen ändern
**Datei**: `lib/videoConfig.ts`
```typescript
export const VIDEO_CONFIG = {
  useYoutube: true,              // true = YouTube, false = lokales MP4
  youtubeVideoId: 'eV6lTEY95yY', // YouTube Video-ID
  localVideoPath: '/background.mp4', // Pfad für lokales Video
};
```

**Lokales Video verwenden:**
1. MP4-Datei in `/public/background.mp4` ablegen
2. `useYoutube: false` setzen

### 2. Grid-Linien anpassen
**Datei**: `lib/gridConfig.ts`
```typescript
// Desktop-Positionierung
export const GRID_CONFIG = {
  verticalLinePosition: 46,     // % von links
  horizontalLinePosition: 62,   // % von oben
  textOffsetFromLine: 3.5,      // % Textabstand
};

// Mobile-Positionierung
export const GRID_CONFIG_MOBILE = {
  verticalLinePosition: 12,
  horizontalLinePosition: 58,
  textOffsetFromLine: 4,
};
```

### 3. Navigation ändern
**Datei**: `lib/navigation.ts`
```typescript
export const navigationItems: NavItem[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.why', href: '/warum-frtlux' },
  // ... weitere Menüpunkte
];
```

### 4. Übersetzungen bearbeiten
**Dateien**: 
- `locales/de/common.json` (Deutsch)
- `locales/en/common.json` (Englisch)

Beispiel:
```json
{
  "hero": {
    "title1": "FRTLUX – IHR OFFIZIELLER PARTNER",
    "title2": "FÜR SICHERE GRUNDSTÜCKSINVESTITIONEN..."
  }
}
```

---

## 🎨 Design-System

### Farben
```css
Primary: #f97316 (orange-500)
Background: #0a0a0a (schwarz)
Text: #ffffff (weiß)
Overlay: rgba(0,0,0,0.4)
```

### Schriften
- **Headings**: Playfair Display (Serif, elegant)
- **Body**: Inter (Sans-Serif, modern)

### Breakpoints
```
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

---

## 📂 Projekt-Struktur

```
frtlux/
├── app/
│   ├── [locale]/              # i18n-Routen
│   │   ├── (site)/            # Website-Seiten
│   │   │   ├── page.tsx       # Startseite
│   │   │   ├── warum-frtlux/
│   │   │   ├── istanbul-yenisehir/
│   │   │   ├── entwicklung-arnavutkoy/
│   │   │   ├── news/
│   │   │   ├── seminare/
│   │   │   └── kontakt/
│   │   └── layout.tsx         # Root Layout
│   └── globals.css            # Global Styles
├── components/
│   ├── hero/
│   │   └── Hero.tsx           # Hero-Component
│   ├── layout/
│   │   ├── Header.tsx         # Sticky Header
│   │   └── Footer.tsx         # Footer
│   └── ui/
│       ├── OrangeGrid.tsx     # Animierte Linien
│       ├── ScrollIndicator.tsx
│       ├── Button.tsx
│       ├── SectionTitle.tsx
│       └── FeatureCard.tsx
├── lib/
│   ├── gridConfig.ts          # Grid-Linien-Konfiguration
│   ├── navigation.ts          # Menü-Items
│   └── videoConfig.ts         # Video-Einstellungen
├── locales/
│   ├── de/
│   │   └── common.json        # Deutsche Übersetzungen
│   └── en/
│       └── common.json        # Englische Übersetzungen
├── public/                    # Statische Assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🎯 Nächste Schritte

### 1. Assets ergänzen
- [ ] FRTLUX Logo (SVG) in `/public/logo.svg`
- [ ] Lokales Hero-Video in `/public/background.mp4`
- [ ] Bilder für News-Artikel
- [ ] Bilder für Grundstücke
- [ ] Karten von Istanbul/Yenişehir

### 2. Inhalte anpassen
- [ ] Kontaktdaten in `locales/*/common.json` aktualisieren
- [ ] News-Artikel mit echten Inhalten füllen
- [ ] Seminar-Termine aktualisieren
- [ ] Beispiel-Grundstücke mit echten Daten

### 3. SEO optimieren
- [ ] Meta-Descriptions für jede Seite
- [ ] OpenGraph-Bilder erstellen
- [ ] Sitemap generieren
- [ ] robots.txt anpassen

### 4. Funktionalität erweitern
- [ ] Backend für Kontaktformular (z.B. EmailJS, Resend)
- [ ] Google Maps Integration
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Cookie-Banner (DSGVO)

---

## 🚀 Deployment

### Vercel (empfohlen)
1. GitHub Repository erstellen
2. Bei Vercel anmelden (vercel.com)
3. Repository verbinden
4. Automatisches Deployment

### Andere Hosting-Optionen
- Netlify
- AWS Amplify
- Eigener Server mit Node.js

---

## 🐛 Bekannte Einschränkungen

1. **Kontaktformular**: Nur Frontend-Validierung, kein Backend
2. **News-Detailseiten**: Mock-Daten, keine Datenbank
3. **Seminar-Buchung**: Nur UI, keine Buchungslogik
4. **Google Maps**: Platzhalter, keine echte Integration

---

## 💡 Tipps & Best Practices

### Video-Performance
- YouTube-Video ist bereits optimiert
- Lokales Video sollte max. 10-15 MB sein
- WebM-Format zusätzlich für bessere Kompression

### Mobile-Testing
```bash
# Mit lokalem Netzwerk testen
npm run dev -- -H 0.0.0.0
# Dann auf Handy: http://[IHRE-IP]:3000
```

### Production Build testen
```bash
npm run build
npm start
```

---

## 📞 Support & Kontakt

Bei Fragen zum Code oder Setup:
- Dokumentation: `/README.md`
- Kommentare im Code beachten
- TypeScript-Fehler? `npm install` erneut ausführen

---

## ✨ Features im Detail

### 1. Hero-Section
- **Video-Background**: YouTube oder lokales MP4
- **Overlay**: Schwarzer Overlay (40% Opacity) für Textlesbarkeit
- **OrangeGrid**: Vertikale & horizontale orange Linien (animiert)
- **Text-Animation**: Character-by-character Slide-In mit GSAP
- **Responsive**: Mobile-optimierte Linien-Positionen
- **ScrollIndicator**: Animierter Scroll-Down-Indikator

### 2. Navigation
- **Desktop**: Horizontale Navigation mit allen Menüpunkten
- **Mobile**: Fullscreen-Hamburger-Menü
- **Sticky Header**: Bleibt beim Scrollen sichtbar
- **Active States**: Orange Markierung für aktuelle Seite
- **Sprachumschalter**: DE | EN im Header

### 3. Komponenten-System
- **Button**: Primary & Secondary Varianten
- **SectionTitle**: Konsistente Section-Überschriften
- **FeatureCard**: Icon + Titel + Beschreibung
- **Timeline**: Vertikale Timeline mit Events
- **NewsCard**: Artikel-Karten mit Kategorien

### 4. Animationen
- **GSAP Timeline**: Sequenzielle Animationen
- **Stagger**: Verzögerte Animationen für mehrere Elemente
- **Easing**: Power3.out für smooth Bewegungen
- **Loop**: Infinite Loop für ScrollIndicator

---

## 🎓 Lernressourcen

### Next.js App Router
- [Next.js Dokumentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### GSAP
- [GSAP Dokumentation](https://greensock.com/docs/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)

### Tailwind CSS
- [Tailwind Dokumentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

---

**Viel Erfolg mit FRTLUX! 🎉**

Bei Fragen oder Problemen: Kommentare im Code lesen oder README.md konsultieren.
