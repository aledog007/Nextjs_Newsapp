# TechPulse — Tech News Dashboard

Ein privates Gruppenprojekt im Rahmen der Framework-Analyse. Wir haben das offizielle **Next.js Learn Tutorial** als Grundlage genommen und darauf aufbauend eine vollständige Tech-News-App entwickelt.

**Live-Deployment:** [github.com/aledog007/Nextjs_Newsapp](https://github.com/aledog007/Nextjs_Newsapp)

---

## Welches Tutorial wurde umgesetzt?

Basis: [nextjs.org/learn](https://nextjs.org/learn) — das offizielle interaktive Tutorial von Vercel/Next.js.

Das Tutorial führt Schritt für Schritt durch die wichtigsten Konzepte von **Next.js 15** mit dem App Router. Wir haben die Kapitel nicht 1:1 als Dashboard-Klon nachgebaut, sondern auf ein eigenes Thema — eine Tech-News-App — übertragen.

---

## Umsetzungsschritte (Kapitel des Tutorials)

### Kapitel 3 — Bilder & Fonts optimieren (`next/image`, `next/font`)
- `next/image` wird für alle Artikelbilder verwendet: automatische Größenanpassung, lazy loading, WebP-Konvertierung
- Unsplash-Bilder werden mit `fill` + `object-cover` fluid eingebettet
- Google Fonts (`Geist`, `Geist Mono`) werden über `next/font/google` geladen — kein Layout Shift, kein externes Netzwerkrequest im Browser

### Kapitel 4 — Layouts & Seiten (App Router)
- Globales Layout in `src/app/layout.tsx` mit `<Header>` und `<Footer>`
- Dynamische Routen: `/article/[id]` und `/category/[name]`
- Verschachtelte Layouts durch den App Router

### Kapitel 5 — Navigation (`next/link`)
- Alle internen Links nutzen `<Link>` für clientseitige Navigation ohne Full-Page-Reload
- Breadcrumb-Navigation auf Artikel-Detailseiten
- Problem gelöst: verschachtelte `<a>`-Tags (Link in Link) durch das *Stretched Link* CSS-Pattern

### Kapitel 6 — API Route Handler
- `src/app/api/news/route.ts` stellt eine REST-ähnliche API bereit
- Unterstützt Query-Parameter: `?id=`, `?category=`, `?q=`
- In Produktion würde dieser Endpunkt externe API-Keys serverseitig verstecken und Caching/Rate-Limiting übernehmen

### Kapitel 7 — Datenabruf in Server Components
- `ArticlePage` und `CategoryPage` sind reine Server Components
- Daten (aus `mock-data.ts`) werden direkt beim Rendern auf dem Server gelesen — kein `useEffect`, kein Client-Fetch

### Kapitel 8 — Statisches Rendering & `generateStaticParams`
- Alle Artikel- und Kategorie-Seiten werden zur Build-Zeit vorgerendert (`●` SSG)
- `generateStaticParams` in `/article/[id]/page.tsx` und `/category/[name]/page.tsx` generiert alle Pfade statisch
- Resultat: blitzschnelle Seiten, die direkt aus dem CDN ausgeliefert werden

### Kapitel 9 — Streaming mit Loading Skeletons
- `loading.tsx` Dateien in `/article/[id]/` und `/category/[name]/`
- `<Suspense>` Boundaries mit animierten Skeleton-Komponenten (`FeaturedCardSkeleton`, `NewsGridSkeleton`)
- Nutzer sehen sofort ein UI-Gerüst, während Inhalte laden

### Kapitel 10 — Suche mit URL Search Params
- Die `<Search>` Komponente ist ein Client Component (`'use client'`)
- Sucheingaben werden als `?q=` URL-Parameter gespeichert (teilbar, browser-history-kompatibel)
- Lösung für statischen Export: `ClientSearchFilter` Component liest `useSearchParams()` im Browser und filtert clientseitig — kein Server nötig

### Kapitel 12 — Error Handling (`notFound`, `error.tsx`)
- `notFound()` wird aufgerufen wenn eine Artikel-ID oder Kategorie nicht existiert
- `not-found.tsx` und `error.tsx` bieten nutzerfreundliche Fehlerseiten
- `loading.tsx` für den Ladezustand

### Kapitel 15 — Metadata & SEO
- Statische Metadata auf der Startseite (`title`, `description`, `keywords`, `openGraph`)
- Dynamische Metadata pro Artikel und Kategorie über `generateMetadata()`
- Jedes Artikel-OG-Image zeigt das Bild des Artikels

---

## Was macht unser Projekt besonders?

Das Tutorial verwendet eine fiktive Buchhaltungs-App ("Acme"). Wir haben alle Konzepte auf ein **reales, relevantes Thema** übertragen:

| Tutorial (Acme) | Unser Projekt (TechPulse) |
|---|---|
| Invoices / Customers | Artikel mit Kategorie, Autor, Quelle |
| Dashboard | Featured Article + News Grid |
| Tabellen | Responsive Card-Grid mit Hover-Effekten |
| Datenbankabfragen | Mock-Daten mit Typ-System (`types.ts`) |
| Auth / Login | Kategorie-Filter + Live-Suche |

### Technische Eigenleistungen
- **Dark-Mode Design** mit CSS Custom Properties (`--foreground`, `--accent`, etc.)
- **Markdown-Renderer** (`src/lib/markdown.ts`) für Artikelinhalte ohne externe Library
- **Stretched Link Pattern** — Karten sind vollflächig klickbar, während Kategorie-Badges eigene Links bleiben (löst das `<a> in <a>` HTML-Problem)
- **Bildqualität & Performance** — Unsplash-Bilder mit `w=1600`, `quality={90}`, `will-change-transform` und `overflow-hidden` auf dem Bild-Container (verhindert den blauen Pixel-Strich beim Hover)
- **Statischer Export** — vollständig als statische HTML-Dateien exportierbar (kompatibel mit GitHub Pages)

---

## Tech Stack

| Technologie | Version | Zweck |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.1.6 | Framework (App Router) |
| [React](https://react.dev) | 19 | UI Library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Typsicherheit |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [Unsplash](https://unsplash.com) | – | Artikelbilder |

---

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx              # Globales Layout (Header, Footer)
│   ├── page.tsx                # Startseite (statisch)
│   ├── error.tsx               # Globale Fehlerseite
│   ├── loading.tsx             # Globaler Ladezustand
│   ├── not-found.tsx           # 404 Seite
│   ├── api/news/route.ts       # REST API Route Handler
│   ├── article/[id]/           # Dynamische Artikel-Detailseiten
│   └── category/[name]/        # Dynamische Kategorie-Seiten
├── components/
│   ├── header.tsx              # Navigation mit Kategorie-Links
│   ├── footer.tsx              # Footer
│   ├── news-card.tsx           # Artikel-Karte (featured + normal)
│   ├── news-card-skeleton.tsx  # Loading Skeletons
│   ├── category-badge.tsx      # Kategorie-Badge (Link oder Span)
│   ├── search.tsx              # Suchfeld (Client Component)
│   ├── mobile-menu.tsx         # Mobiles Navigationsmenü
│   └── client-search-filter.tsx # Client-seitige Suchfilterung
└── lib/
    ├── types.ts                # TypeScript Interfaces (Article, Category)
    ├── mock-data.ts            # 12 Beispielartikel mit Inhalten
    └── markdown.ts             # Leichtgewichtiger Markdown → HTML Renderer
```

---

## Lokal starten

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

```bash
# Produktions-Build erstellen
npm run build
```

---

## Framework-Analyse

Dieses Projekt entstand im Rahmen einer Analyse von modernen Web-Frameworks. Dokumentiert wurden folgende Faktoren:

- **Ecosystem** — Verfügbare Libraries, Community, Tooling
- **Performance** — Rendering-Strategien (SSG, SSR, CSR), Core Web Vitals
- **Business Model & Pricing** — Open Source, Vercel Hosting-Kosten, Self-Hosting
- **Scalability** — Edge Runtime, ISR, Caching-Strategien
