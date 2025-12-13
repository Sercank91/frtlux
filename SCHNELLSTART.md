# 🚀 FRTLUX – Schnellstart-Anleitung

## In 3 Schritten zur laufenden Website

### Schritt 1️⃣: Ordner vorbereiten
```bash
# Öffne die Eingabeaufforderung (CMD) oder PowerShell
# Navigiere zum Ordner
cd D:\frtlux
```

### Schritt 2️⃣: Installieren
```bash
npm install
```
⏳ Dauert ca. 2-3 Minuten

### Schritt 3️⃣: Starten
```bash
npm run dev
```

✅ **Fertig!** Öffne: http://localhost:3000

---

## 🎬 Video-Quelle umschalten

### Aktuell: YouTube-Video
Das Hero-Video lädt von YouTube: `https://www.youtube.com/watch?v=eV6lTEY95yY`

### Auf lokales Video umstellen:

1. **MP4-Datei vorbereiten**
   - Datei umbenennen zu: `background.mp4`
   - Kopieren nach: `D:\frtlux\public\background.mp4`

2. **Konfiguration ändern**
   - Datei öffnen: `D:\frtlux\lib\videoConfig.ts`
   - Ändern:
   ```typescript
   export const VIDEO_CONFIG = {
     useYoutube: false,  // ← Von true auf false ändern
     youtubeVideoId: 'eV6lTEY95yY',
     localVideoPath: '/background.mp4',
   };
   ```

3. **Server neu starten**
   - Im Terminal: `Strg + C` drücken
   - Dann: `npm run dev`

---

## 📝 Kontaktdaten ändern

Datei öffnen: `D:\frtlux\locales\de\common.json`

Suche nach `"footer"` und ändere:
```json
{
  "footer": {
    "address": "DEINE STRASSE 123, 12345 STADT",
    "phone": "Tel: +49 XXX XXXXXX",
    "whatsapp": "WhatsApp: +49 XXX XXXXXX",
    "email": "deine@email.de"
  }
}
```

Gleiche Änderungen auch in: `D:\frtlux\locales\en\common.json`

---

## 🎨 Farben ändern

Datei öffnen: `D:\frtlux\tailwind.config.ts`

Orange-Farbe ändern:
```typescript
theme: {
  extend: {
    colors: {
      // Eigene Farben hier hinzufügen
      brand: '#DEINE_FARBE',
    },
  },
},
```

Im Code dann `orange-500` durch `brand` ersetzen.

---

## 🌐 Sprache ändern

**Standardsprache festlegen:**

Datei: `D:\frtlux\middleware.ts`
```typescript
export default createMiddleware({
  locales: ['de', 'en'],
  defaultLocale: 'de'  // ← Ändern: 'de' oder 'en'
});
```

---

## 🐛 Probleme?

### "Command not found: npm"
→ Node.js installieren: https://nodejs.org/

### Port 3000 bereits belegt
```bash
npm run dev -- -p 3001
```
Dann öffnen: http://localhost:3001

### Video lädt nicht
1. Internetverbindung prüfen (für YouTube)
2. MP4-Datei vorhanden? (`public/background.mp4`)
3. Dateiname korrekt? (Groß-/Kleinschreibung)

---

## 📱 Auf Handy testen

1. Computer und Handy im gleichen WLAN
2. Computer-IP-Adresse herausfinden:
   ```bash
   ipconfig  # Windows
   ifconfig  # Mac/Linux
   ```
3. Server mit IP starten:
   ```bash
   npm run dev -- -H 0.0.0.0
   ```
4. Auf Handy öffnen: `http://[DEINE-IP]:3000`

---

## 🚀 Production Build

Vor dem Live-Gang testen:
```bash
npm run build
npm start
```

---

## 📞 Hilfe benötigt?

1. `README.md` lesen
2. `PROJEKT-ZUSAMMENFASSUNG.md` konsultieren
3. Code-Kommentare beachten

---

**Viel Erfolg! 🎉**
