# 🎨 WOW-Effekte Dokumentation

Alle modernen Animationen und Effekte für FRTLUX Website.

## 📦 Verfügbare Effekt-Komponenten

### 1. **ParallaxSection** - Parallax Scrolling

Erzeugt einen Parallax-Effekt, bei dem Sections mit unterschiedlicher Geschwindigkeit scrollen.

**Verwendung:**
```tsx
import ParallaxSection from '@/components/effects/ParallaxSection';

<ParallaxSection speed={0.8}>
  <section>
    Ihr Content hier
  </section>
</ParallaxSection>
```

**Parameter:**
- `speed` (optional): Scroll-Geschwindigkeit
  - `0.5` = langsamer (mehr Parallax)
  - `1.0` = normal
  - `1.5` = schneller
- `className` (optional): Zusätzliche CSS-Klassen

---

### 2. **ScrollReveal** - Scroll-getriggerte Animationen

Elemente werden beim Scrollen animiert eingeblendet.

**Verwendung:**
```tsx
import ScrollReveal from '@/components/effects/ScrollReveal';

<ScrollReveal direction="up" delay={0.2}>
  <div>Ihr Content</div>
</ScrollReveal>
```

**Parameter:**
- `direction`: Animationsrichtung
  - `'up'` = von unten nach oben (Standard)
  - `'down'` = von oben nach unten
  - `'left'` = von rechts nach links
  - `'right'` = von links nach rechts
  - `'fade'` = nur Fade-in
- `delay` (optional): Verzögerung in Sekunden (z.B. `0.2`)
- `duration` (optional): Animationsdauer in Sekunden (Standard: `1`)

---

### 3. **TiltCard** - 3D Card Hover-Effekt

Cards folgen dem Cursor mit 3D-Tilt und optionalem Glare-Effekt.

**Verwendung:**
```tsx
import TiltCard from '@/components/effects/TiltCard';

<TiltCard maxTilt={15} scale={1.05} glare={true}>
  <div className="card">Ihr Content</div>
</TiltCard>
```

**Parameter:**
- `maxTilt` (optional): Maximale Neigung in Grad (Standard: `15`)
- `scale` (optional): Vergrößerung beim Hover (Standard: `1.05`)
- `glare` (optional): Glare-Effekt aktivieren (Standard: `true`)

---

### 4. **MagneticButton** - Magnetische Buttons

Buttons folgen dem Cursor mit magnetischem Effekt.

**Verwendung:**
```tsx
import MagneticButton from '@/components/effects/MagneticButton';

<MagneticButton strength={0.5}>
  <Button href="/kontakt" variant="primary">
    Kontakt
  </Button>
</MagneticButton>
```

**Parameter:**
- `strength` (optional): Stärke des Magnet-Effekts
  - `0.3` = subtil
  - `0.5` = mittel (Standard)
  - `0.8` = stark

---

### 5. **AnimatedCounter** - Animierte Zahlen

Zahlen werden beim Scrollen hochgezählt.

**Verwendung:**
```tsx
import AnimatedCounter from '@/components/effects/AnimatedCounter';

<AnimatedCounter
  end={2500}
  suffix="+"
  duration={2.5}
/>
```

**Parameter:**
- `end` (required): Endzahl
- `start` (optional): Startzahl (Standard: `0`)
- `suffix` (optional): Suffix nach der Zahl (z.B. `'+'`, `' €'`)
- `prefix` (optional): Prefix vor der Zahl (z.B. `'$'`)
- `duration` (optional): Animationsdauer in Sekunden (Standard: `2`)
- `decimals` (optional): Dezimalstellen (Standard: `0`)

**Beispiele:**
```tsx
// Einfache Zahl
<AnimatedCounter end={100} suffix="+" />

// Währung
<AnimatedCounter end={50} suffix=" Mio €" />

// Prozent
<AnimatedCounter end={98} suffix="%" />

// Mit Dezimalstellen
<AnimatedCounter end={4.5} decimals={1} suffix=" von 5" />
```

---

### 6. **GradientMesh** - Animierter Gradient Background

Animierte Gradient-Blobs im Hintergrund.

**Verwendung:**
```tsx
import GradientMesh from '@/components/effects/GradientMesh';

// Einmal pro Seite im Root-Layout oder Homepage
<GradientMesh />
```

**Features:**
- Drei animierte Gradient-Blobs
- Infinite Loop-Animation
- Automatisch im Hintergrund (z-index: -10)
- Orange-Farbschema

---

### 7. **FloatingElements** - Schwebende geometrische Formen

Schwebende geometrische Shapes im Hintergrund.

**Verwendung:**
```tsx
import FloatingElements from '@/components/effects/FloatingElements';

// Einmal pro Seite
<FloatingElements />
```

**Features:**
- 6 geometrische Formen (Quadrate, Kreise, Linien)
- Zufällige Float-Animationen
- Automatisch im Hintergrund
- Subtile Opazität (10%)

---

## 🎯 Verwendungsbeispiele auf der Startseite

### Beispiel 1: Animierte Statistiken

```tsx
const stats = [
  { value: 2500, suffix: '+', label: 'Verkaufte Grundstücke' },
  { value: 15, suffix: ' Jahre', label: 'Erfahrung' },
  { value: 98, suffix: '%', label: 'Zufriedene Kunden' },
];

<ParallaxSection speed={0.9}>
  <section>
    <ScrollReveal direction="fade">
      <SectionTitle title="Zahlen die überzeugen" />
    </ScrollReveal>

    <div className="grid gap-8 md:grid-cols-3">
      {stats.map((stat, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
          <div>
            <AnimatedCounter
              end={stat.value}
              suffix={stat.suffix}
              duration={2.5}
            />
            <p>{stat.label}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
</ParallaxSection>
```

---

### Beispiel 2: Feature Cards mit Tilt

```tsx
const features = [
  { icon: Award, title: 'Erfahrung', description: '15+ Jahre...' },
  // ...
];

<div className="grid md:grid-cols-4 gap-8">
  {features.map((feature, index) => (
    <ScrollReveal key={index} direction="up" delay={index * 0.15}>
      <TiltCard maxTilt={10} scale={1.03}>
        <FeatureCard {...feature} />
      </TiltCard>
    </ScrollReveal>
  ))}
</div>
```

---

### Beispiel 3: Magnetische CTA-Buttons

```tsx
<ScrollReveal direction="fade" delay={0.3}>
  <MagneticButton strength={0.5}>
    <Button href="/kontakt" variant="primary">
      Jetzt Kontakt aufnehmen
    </Button>
  </MagneticButton>
</ScrollReveal>
```

---

### Beispiel 4: Two-Column Section mit Links/Rechts Animation

```tsx
<section>
  <div className="grid lg:grid-cols-2 gap-12">
    {/* Text - von links */}
    <ScrollReveal direction="left">
      <div>
        <h2>Ihr Titel</h2>
        <p>Text Content...</p>
      </div>
    </ScrollReveal>

    {/* Bild - von rechts */}
    <ScrollReveal direction="right">
      <TiltCard maxTilt={8} glare={true}>
        <img src="/image.jpg" alt="..." />
      </TiltCard>
    </ScrollReveal>
  </div>
</section>
```

---

## 🎨 Best Practices

### 1. **Performance**
- Verwenden Sie `ParallaxSection` nicht auf jeder einzelnen Section (nur auf 60-80%)
- Limit `TiltCard` auf max. 20 Karten pro Seite
- `GradientMesh` und `FloatingElements` nur einmal pro Seite

### 2. **Timing & Delays**
```tsx
// Gestaffelte Animationen
{items.map((item, index) => (
  <ScrollReveal delay={index * 0.1}> {/* 0.1s pro Item */}
    ...
  </ScrollReveal>
))}
```

### 3. **Richtungen kombinieren**
```tsx
// Überschrift: Fade
<ScrollReveal direction="fade">
  <h2>Titel</h2>
</ScrollReveal>

// Content: Von unten
<ScrollReveal direction="up" delay={0.2}>
  <p>Text...</p>
</ScrollReveal>
```

### 4. **Parallax Speed**
- Hero/Intro: `speed={0.8}` (langsam)
- Content-Sections: `speed={0.9-1.1}` (mittel)
- CTA/Footer: `speed={1.0}` (normal)

---

## 🔧 Anpassung

### Farben ändern
Alle Effekte verwenden die Orange-Farbe aus Tailwind (`orange-500`).

**In `tailwind.config.ts` ändern:**
```ts
theme: {
  extend: {
    colors: {
      orange: {
        500: '#f97316', // Ihre Farbe
      }
    }
  }
}
```

### Animationsgeschwindigkeit
In den Komponenten-Files (`components/effects/`) können Sie `duration` und `ease` anpassen:

```tsx
// In ScrollReveal.tsx
gsap.to(element, {
  opacity: 1,
  y: 0,
  duration: 1.2, // Länger = langsamer
  ease: 'power3.out', // Verschiedene Easing-Funktionen
});
```

**GSAP Easing-Optionen:**
- `power1.out` - subtil
- `power2.out` - mittel
- `power3.out` - dynamisch (Standard)
- `power4.out` - sehr dynamisch
- `elastic.out` - springend
- `back.out` - überschwingt leicht

---

## 🚀 Performance-Tipps

1. **Lazy Loading:** Effekte werden nur aktiviert, wenn sie im Viewport sind
2. **GSAP ScrollTrigger:** Optimiert für 60 FPS
3. **CSS Transforms:** Nutzen GPU-Beschleunigung
4. **Cleanup:** Alle Animationen werden beim Unmount gestoppt

---

## 📱 Mobile Optimierung

Die meisten Effekte sind bereits mobile-optimiert:

- `TiltCard` funktioniert nicht auf Touch-Devices (kein Mouse-Tracking)
- `MagneticButton` funktioniert nicht auf Touch-Devices
- `ParallaxSection` nutzt reduzierte Bewegung auf Mobile
- `ScrollReveal` funktioniert überall

**Mobile-spezifische Anpassungen:**
```tsx
// Nur auf Desktop
<div className="hidden md:block">
  <TiltCard>...</TiltCard>
</div>

// Mobile Alternative
<div className="block md:hidden">
  <div>Einfache Card ohne Tilt</div>
</div>
```

---

## 🎓 Weitere Ressourcen

- [GSAP Dokumentation](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [CSS Transform 3D](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

---

**Viel Erfolg mit den WOW-Effekten! 🎉**
