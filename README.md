# FRTLUX – Premium Real Estate Investment Platform

Eine professionelle Next.js-Webseite für Grundstücksinvestitionen in Istanbul Yenişehir / Arnavutköy.

## 🚀 Features

- **Multi-Page Navigation**: 7 vollständige Seiten mit Next.js App Router
- **Mehrsprachigkeit**: Deutsch & Englisch mit next-intl
- **Cinematic Hero**: Vollbild-Video-Hintergrund (YouTube oder lokales MP4)
- **OrangeGrid-Design**: Animated orange Linien mit GSAP
- **Responsive Design**: Mobile-First, optimiert für alle Geräte
- **SEO-optimiert**: Meta-Tags, semantisches HTML, OpenGraph
- **Dark Theme**: Edles, dunkles Design mit Orange-Akzenten

## 📦 Installation

1. Navigieren Sie zum Projektordner:
```bash
cd D:\frtlux
```

2. Dependencies installieren:
```bash
npm install
```

3. Development Server starten:
```bash
npm run dev
```

4. Öffnen Sie http://localhost:3000 in Ihrem Browser

## 🎨 Design-System

### Farben
- **Primary**: Orange-500 (#f97316)
- **Background**: Schwarz (#0a0a0a)
- **Text**: Weiß (#ffffff)

### Typografie
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-Serif)

## 🎬 Video-Konfiguration

Die Hero-Video-Einstellungen können in `lib/videoConfig.ts` geändert werden:

```typescript
export const VIDEO_CONFIG = {
  useYoutube: true, // true = YouTube, false = lokales MP4
  youtubeVideoId: 'eV6lTEY95yY',
  localVideoPath: '/background.mp4',
};
```

**Umstellung auf lokales Video:**
1. `useYoutube: false` setzen
2. MP4-Datei in `/public/background.mp4` ablegen

## 📐 Grid-Konfiguration

Die OrangeGrid-Linien können in `lib/gridConfig.ts` angepasst werden:

```typescript
// Desktop
export const GRID_CONFIG = {
  verticalLinePosition: 46,     // % von links
  horizontalLinePosition: 62,   // % von oben
  textOffsetFromLine: 3.5,      // % Textabstand
};

// Mobile
export const GRID_CONFIG_MOBILE = {
  verticalLinePosition: 12,
  horizontalLinePosition: 58,
  textOffsetFromLine: 4,
};
```

## 🌍 Mehrsprachigkeit

Übersetzungen befinden sich in:
- `/locales/de/common.json` (Deutsch)
- `/locales/en/common.json` (Englisch)

Neue Übersetzungen hinzufügen:
```json
{
  "key": "Deutscher Text"
}
```

## 📄 Seiten-Struktur

```
/                           → Startseite
/warum-frtlux              → Warum FRTLUX?
/istanbul-yenisehir        → Istanbul Yenişehir
/entwicklung-arnavutkoy    → Timeline Arnavutköy
/news                      → News & Updates
/seminare                  → Seminare & Events
/kontakt                   → Kontakt & Showroom
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: GSAP
- **i18n**: next-intl
- **Icons**: Lucide React
- **Video**: react-youtube

## 📝 Anpassungen

### Logo ersetzen
Bearbeiten Sie `components/layout/Header.tsx` und ersetzen Sie den Text-Logo-Bereich mit Ihrem SVG-Logo.

### Kontaktdaten ändern
Aktualisieren Sie die Übersetzungsdateien in `/locales/de/common.json` und `/locales/en/common.json`:
- `footer.address`
- `footer.phone`
- `footer.whatsapp`
- `footer.email`

### Farben anpassen
Ändern Sie in `tailwind.config.ts` die Farben oder fügen Sie neue hinzu.

## 🚢 Production Build

```bash
npm run build
npm start
```

## 📱 Mobile Optimierung

Die Seite ist vollständig responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Lazy Loading für Bilder
- Code Splitting mit Next.js
- Optimierte Fonts (Google Fonts)
- Minimales JavaScript im Hero

## 📧 Support

Bei Fragen oder Problemen:
- E-Mail: info@frtlux.de
- WhatsApp: +49 123 456789

---

**Entwickelt mit ❤️ für FRTLUX by Firat Emlak & Premlux**
