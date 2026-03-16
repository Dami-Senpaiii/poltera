# Poltera GmbH – Static Homepage Scaffold (Prototype)

## Ziel & Umfang
Diese erste Implementierung liefert ein **mobile-first Homepage-Grundgerüst** mit statischem HTML/CSS und minimalem JavaScript. Das Setup ist bewusst CMS-agnostisch gehalten und kann direkt auf weitere Seiten ausgerollt werden.

## Projektstruktur

```txt
/site
  /assets
    /img
      logo.svg
      hero.svg
      /services
      /projects
    /icons
      favicon.svg
      apple-touch-icon.svg
      og-image.svg
  /css
    main.css
  /js
    nav.js
  index.html
  README.md
```

## Implementierungsnotizen
- Mobile-first Aufbau mit klaren Breakpoints bei **600px, 900px und 1200px**.
- Semantische Struktur: `header`, `nav`, `main`, `section`, `footer`.
- BEM-orientierte Klassennamen (z. B. `site-header__inner`, `service-card__title`).
- Hero enthält sichtbare H1, Lead und 2 CTAs.
- Hero-Bild als LCP-Kandidat mit `fetchpriority="high"` und festen `width`/`height` Attributen.
- Minimal-JS nur für mobile Navigation, Inhalte bleiben ohne JS zugänglich.
- Textbasierte SVG-Platzhalter für Bild-/Icon-Assets angelegt (keine Binärdateien), damit Pfade sofort funktionieren.

## Accessibility-Checkliste
- [x] Skip-Link (`Zum Inhalt springen`) vorhanden.
- [x] Tastaturbedienbare Navigation.
- [x] Mobile Nav-Button mit `aria-controls` und `aria-expanded`.
- [x] Sichtbare Focus-Styles (`:focus-visible`).
- [x] Sinnvolle Heading-Hierarchie (`h1` → `h2` → `h3`).
- [x] Touch-Targets mit min. 44px Höhe für Buttons/Links in der Hauptnavigation.
- [x] `prefers-reduced-motion` berücksichtigt.
- [x] Gute Farbkontraste im aktuellen Entwurf (final mit realen Brand-Assets verifizieren).

## Performance-Checkliste
- [x] Statisches HTML/CSS als Basis, kein Framework.
- [x] Minimaler JavaScript-Einsatz, kein JS für kritische Inhalte.
- [x] System-Font-Stack (keine externen Font-Requests).
- [x] Hero-Bild nicht lazy geladen.
- [x] Bilder mit `width`/`height` vorbereitet.
- [x] Keine Third-Party-Skripte.

## SEO-Checkliste
- [x] Aussagekräftiger `<title>` gesetzt.
- [x] Meta-Description gesetzt.
- [x] Open-Graph-Metadaten vorbereitet.
- [x] Klare, crawlbare Navigationslinks.
- [x] Sichtbare und eindeutige H1.
- [x] Favicon- und Apple-Touch-Icon-Referenz.
- [x] Struktur vorbereitet, um später LocalBusiness JSON-LD im `<head>` zu ergänzen.

## Ausblick auf nächste Seiten
Die IA und Dateipfade sind so angelegt, dass folgende Seiten direkt ergänzt werden können:
- `dienstleistungen.html`
- `/dienstleistungen/montagen.html`
- `/dienstleistungen/demontagen.html`
- `/dienstleistungen/mietmasten-mastprovisorien.html`
- `/dienstleistungen/turmunterhalt.html`
- `/dienstleistungen/bauleitungen.html`
- `projekte.html`
- `projekt.html`
- `ueber-uns.html`
- `kontakt.html`
- `jobs.html`
- `/rechtliches/datenschutz.html`
- `/rechtliches/impressum.html`

## Wichtige Hinweise für die nächste Iteration
- Farbwerte auf Basis der finalen Logo-/Brand-Assets verifizieren (aktuell gemäß bereitgestellten Tokens umgesetzt).
- Finales Logo, Hero-Bild und OG-Image in den vorhandenen Asset-Pfaden ersetzen.
- Bestehende Inhalte aus der aktuellen Website schrittweise übernehmen (nur strukturell leicht bereinigen).
- **Jobs-Inhalte später als echtes HTML** aufbauen (keine rein bildbasierten Inhalte).
- Rechtliche Seiten (Datenschutz/Impressum) klar, vollständig und leicht auffindbar ergänzen.
