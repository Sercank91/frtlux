# 📁 FRTLUX – Vollständige Datei-Übersicht

## 🗂️ Projekt-Struktur im Detail

### 📦 Root-Level (Konfigurationsdateien)

| Datei | Beschreibung |
|-------|--------------|
| `package.json` | Projekt-Dependencies und Scripts |
| `tsconfig.json` | TypeScript-Konfiguration |
| `tailwind.config.ts` | Tailwind CSS-Konfiguration (Farben, Fonts) |
| `next.config.js` | Next.js-Konfiguration |
| `postcss.config.js` | PostCSS für Tailwind |
| `middleware.ts` | next-intl Middleware für i18n-Routing |
| `i18n.ts` | i18n-Konfiguration für next-intl |
| `.gitignore` | Git-Ignore-Datei |
| `README.md` | Haupt-Dokumentation |
| `SCHNELLSTART.md` | Quick-Start Guide |
| `PROJEKT-ZUSAMMENFASSUNG.md` | Detaillierte Projekt-Übersicht |

---

### 🎨 App-Verzeichnis

#### `app/globals.css`
- Global Styles
- Tailwind-Imports
- Font-Imports (Google Fonts: Playfair Display, Inter)
- CSS Custom Properties

#### `app/[locale]/layout.tsx`
- Root Layout mit i18n-Provider
- Font-Konfiguration
- Meta-Tags (Title, Description)

#### `app/[locale]/(site)/layout.tsx`
- Site Layout mit Header & Footer
- Wrapper für alle öffentlichen Seiten

---

### 📄 Seiten (Pages)

| Datei | Route | Beschreibung |
|-------|-------|--------------|
| `app/[locale]/(site)/page.tsx` | `/` | Startseite mit Hero, Features, Timeline, News |
| `app/[locale]/(site)/warum-frtlux/page.tsx` | `/warum-frtlux` | Problem-Lösung, Premlux & Firat Emlak |
| `app/[locale]/(site)/istanbul-yenisehir/page.tsx` | `/istanbul-yenisehir` | Standortinfo, Investment-Vorteile |
| `app/[locale]/(site)/entwicklung-arnavutkoy/page.tsx` | `/entwicklung-arnavutkoy` | Timeline 2018-2025+ |
| `app/[locale]/(site)/news/page.tsx` | `/news` | News-Übersicht mit Filtern |
| `app/[locale]/(site)/seminare/page.tsx` | `/seminare` | Event-Listings |
| `app/[locale]/(site)/kontakt/page.tsx` | `/kontakt` | Kontaktformular & Showroom-Info |

---

### 🧩 Komponenten

#### Layout-Komponenten (`components/layout/`)

**Header.tsx**
- Sticky Navigation
- Sprachumschalter (DE/EN)
- Mobile Hamburger-Menü
- Active State für aktuelle Seite
- Responsive Design

**Footer.tsx**
- 3-spaltig: About, Schnellnavigation, Kontakt
- Social Links (Platzhalter)
- Impressum & Datenschutz Links

#### Hero-Komponente (`components/hero/`)

**Hero.tsx**
- Vollbild Video-Background (YouTube oder lokales MP4)
- OrangeGrid Integration
- ScrollIndicator
- GSAP Text-Animationen (character-by-character)
- Responsive Layout
- 2 CTA-Buttons

#### UI-Komponenten (`components/ui/`)

**OrangeGrid.tsx**
- Vertikale orange Linie (animiert)
- Horizontale orange Linie (animiert)
- GSAP Timeline-Animation
- Separate Mobile & Desktop-Konfiguration
- Glow-Effekt mit box-shadow

**ScrollIndicator.tsx**
- Animierter Scroll-Down-Indikator
- GSAP Loop-Animation
- Responsive Positionierung
- "SCROLL" Text mit Letter-Spacing

**Button.tsx**
- Primär-Variante (gefüllt, orange)
- Sekundär-Variante (outline, orange)
- Link oder Button
- Hover-Effekte
- Tailwind-Styling

**SectionTitle.tsx**
- Konsistente Section-Überschriften
- Optional: Subtitle
- Alignment: left oder center
- Playfair Display Font

**FeatureCard.tsx**
- Icon + Titel + Beschreibung
- Hover-Effekte
- Border & Background-Transition
- Lucide Icons

---

### ⚙️ Konfiguration (`lib/`)

**gridConfig.ts**
```typescript
// Desktop-Linien-Positionen
GRID_CONFIG = {
  verticalLinePosition: 46%,
  horizontalLinePosition: 62%,
  textOffsetFromLine: 3.5%
}

// Mobile-Linien-Positionen
GRID_CONFIG_MOBILE = {
  verticalLinePosition: 12%,
  horizontalLinePosition: 58%,
  textOffsetFromLine: 4%
}
```

**videoConfig.ts**
```typescript
VIDEO_CONFIG = {
  useYoutube: true,              // Toggle
  youtubeVideoId: 'eV6lTEY95yY',
  localVideoPath: '/background.mp4'
}
```

**navigation.ts**
```typescript
navigationItems = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.why', href: '/warum-frtlux' },
  // ... 7 Menüpunkte total
]
```

---

### 🌍 Übersetzungen (`locales/`)

**de/common.json**
- Alle deutschen Übersetzungen
- Struktur: nav, hero, about, features, yenisehir, timeline, news, contact, footer, common

**en/common.json**
- Alle englischen Übersetzungen
- Gleiche Struktur wie DE

**Beispiel-Keys:**
```json
{
  "nav": { "home": "...", "why": "..." },
  "hero": { "title1": "...", "title2": "..." },
  "footer": { "address": "...", "phone": "..." }
}
```

---

## 🎯 Wichtigste Dateien zum Anpassen

### 1. Kontaktdaten ändern
- `locales/de/common.json` → `"footer"` Section
- `locales/en/common.json` → `"footer"` Section

### 2. Video umschalten
- `lib/videoConfig.ts` → `useYoutube: true/false`
- Video ablegen: `public/background.mp4`

### 3. Linien-Positionen
- `lib/gridConfig.ts` → `GRID_CONFIG` & `GRID_CONFIG_MOBILE`

### 4. Menü-Items
- `lib/navigation.ts` → `navigationItems[]`
- Übersetzungen: `locales/*/common.json` → `"nav"` Section

### 5. Farben
- `tailwind.config.ts` → `theme.extend.colors`
- Primärfarbe: `orange-500` (#f97316)

### 6. Fonts
- `tailwind.config.ts` → `fontFamily`
- Import: `app/globals.css` → Google Fonts URL

---

## 📊 Komponenten-Hierarchie

```
App
└── [locale] (i18n-Wrapper)
    └── (site) Layout
        ├── Header
        │   ├── Logo/Wortmarke
        │   ├── Navigation
        │   └── Sprachumschalter
        ├── Page Content
        │   ├── Hero (nur Startseite)
        │   │   ├── Video-Background
        │   │   ├── OrangeGrid
        │   │   ├── Content
        │   │   └── ScrollIndicator
        │   └── Sections
        │       ├── SectionTitle
        │       ├── FeatureCard
        │       └── Button
        └── Footer
            ├── About
            ├── Schnellnavigation
            └── Kontakt
```

---

## 🎨 Design-Tokens

### Farben
```
Primary:    #f97316 (orange-500)
Background: #0a0a0a (black)
Surface:    rgba(255,255,255,0.05) (white/5)
Border:     rgba(255,255,255,0.1) (white/10)
Text:       #ffffff (white)
Text Muted: rgba(255,255,255,0.6-0.8)
```

### Spacing
```
Section Padding: py-20 (5rem / 80px)
Container Max:   max-w-6xl
Grid Gap:        gap-8 (2rem / 32px)
```

### Typography
```
H1: text-4xl md:text-5xl lg:text-6xl (Playfair Display)
H2: text-3xl md:text-4xl (Playfair Display)
H3: text-xl md:text-2xl (Playfair Display)
Body: text-base md:text-lg (Inter)
```

### Shadows
```
Orange Glow: 0 0 12px rgba(249, 115, 22, 0.7)
Card Hover:  hover:shadow-lg hover:shadow-orange-500/50
```

---

## 🔧 Scripts

```bash
npm run dev      # Development Server (Port 3000)
npm run build    # Production Build
npm start        # Production Server
npm run lint     # ESLint Check
```

---

## 📦 Dependencies

### Production
- next@14.2.15
- next-intl@^3.22.0
- react@^18.3.1
- react-dom@^18.3.1
- gsap@^3.12.5
- react-youtube@^10.1.0
- lucide-react@^0.446.0

### Development
- typescript@^5
- @types/node@^20
- @types/react@^18
- @types/react-dom@^18
- tailwindcss@^3.4.14
- autoprefixer@^10.4.20
- postcss@^8.4.47

---

## 🚀 Performance-Optimierungen

1. **Next.js App Router**: Automatisches Code-Splitting
2. **Font Loading**: Google Fonts mit `next/font`
3. **Image Optimization**: Ready für `next/image`
4. **CSS**: Tailwind purging in production
5. **Video**: Lazy Loading möglich

---

## 📱 Responsive Breakpoints

```typescript
// Tailwind Standard
sm:  640px   // Tablet Portrait
md:  768px   // Tablet Landscape
lg:  1024px  // Desktop
xl:  1280px  // Large Desktop
2xl: 1536px  // Extra Large
```

**Verwendung im Projekt:**
```typescript
<div className="text-3xl md:text-5xl lg:text-6xl">
  // Mobile: text-3xl
  // Tablet: text-5xl (ab 768px)
  // Desktop: text-6xl (ab 1024px)
</div>
```

---

## 🎬 GSAP-Animationen

### Hero Text Animation
```typescript
gsap.fromTo(
  titleSpans,
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, stagger: 0.05 }
)
```

### OrangeGrid Animation
```typescript
timeline
  .fromTo(verticalLine, { scaleY: 0 }, { scaleY: 1 })
  .fromTo(horizontalLine, { scaleX: 0 }, { scaleX: 1 })
```

### ScrollIndicator Animation
```typescript
gsap.to(dot, {
  y: 15,
  opacity: 0,
  repeat: -1,
  ease: 'power2.inOut'
})
```

---

## 🔐 SEO-Optimierungen

Jede Seite hat:
- Eigener `<title>`
- Meta `description`
- Semantische HTML-Struktur
- Header-Hierarchie (H1 → H2 → H3)
- Alt-Texte für Icons (Lucide)

**Beispiel Metadata:**
```typescript
export const metadata = {
  title: 'FRTLUX – Sichere Grundstücksinvestitionen',
  description: 'Ihr offizieller Partner für...',
};
```

---

## 🌐 i18n-Routing

URL-Struktur:
```
/de                      → Deutsch (default)
/de/warum-frtlux        → Deutsche Unterseite
/en                      → Englisch
/en/why-frtlux          → Englische Unterseite (gleiche Route!)
```

Sprachumschalter ändert nur Locale, nicht Pfad:
```typescript
switchLocale('en') → /en/warum-frtlux
```

---

## ✅ Checkliste: Projekt-Übergabe

- [x] Alle 7 Seiten funktionsfähig
- [x] Responsive Design (Mobile, Tablet, Desktop)
- [x] GSAP-Animationen implementiert
- [x] i18n DE/EN vollständig
- [x] Video-Toggle (YouTube/lokal)
- [x] OrangeGrid mit Konfiguration
- [x] Header mit Navigation & Sprachumschalter
- [x] Footer mit Kontakt-Infos
- [x] Kontaktformular (Frontend)
- [x] News-Seite mit Mock-Daten
- [x] Seminare-Seite mit Events
- [x] Timeline-Komponente
- [x] Feature-Cards
- [x] Buttons (Primary/Secondary)
- [x] SEO-Meta-Tags
- [x] TypeScript vollständig
- [x] Tailwind-Konfiguration
- [x] README & Dokumentation

---

**Projekt-Status: ✅ PRODUKTIONSREIF**

Alle Anforderungen erfüllt. Das Projekt kann direkt verwendet werden.
Nach `npm install` und `npm run dev` ist die Website sofort einsatzbereit.

Anpassungen (Inhalte, Bilder, Kontaktdaten) können über die Konfigurationsdateien
und Übersetzungs-JSONs vorgenommen werden, ohne den Code ändern zu müssen.
