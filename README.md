# TechPulse — Tech News Dashboard

Gruppenprojekt im Rahmen der Framework-Analyse. Wir haben das offizielle **Next.js Learn Tutorial** als Grundlage genommen und darauf eine Tech-News-App gebaut.

**Live-Deployment:** [Static Page](https://aledog007.github.io/)

---

## Welches Tutorial wurde umgesetzt?

Basis: [nextjs.org/learn](https://nextjs.org/learn) — das offizielle Tutorial von Vercel.

Es führt durch die wichtigsten Konzepte von **Next.js 15** mit dem App Router. Wir haben die Kapitel nicht als Dashboard-Klon nachgebaut, sondern auf ein eigenes Thema übertragen: eine Tech-News-App.

---

## Umsetzungsschritte (Kapitel des Tutorials)

### Kapitel 3 — Bilder & Fonts (`next/image`, `next/font`)
- `next/image` für alle Artikelbilder: automatische Grössenanpassung, lazy loading, WebP
- Unsplash-Bilder mit `fill` + `object-cover` eingebettet
- Google Fonts (`Geist`, `Geist Mono`) über `next/font/google` — kein Layout Shift, kein externer Netzwerkrequest im Browser

### Kapitel 4 — Layouts & Seiten (App Router)
- Globales Layout in `src/app/layout.tsx` mit `<Header>` und `<Footer>`
- Dynamische Routen: `/article/[id]` und `/category/[name]`
- Verschachtelte Layouts über den App Router

### Kapitel 5 — Navigation (`next/link`)
- Alle internen Links nutzen `<Link>` — kein Full-Page-Reload
- Breadcrumb-Navigation auf Detailseiten
- Verschachtelte `<a>`-Tags gelöst mit dem *Stretched Link* CSS-Pattern

### Kapitel 6 — API Route Handler
- `src/app/api/news/route.ts` stellt eine REST-ähnliche API bereit
- Query-Parameter: `?id=`, `?category=`, `?q=`
- In Produktion würde dieser Endpunkt externe API-Keys serverseitig verstecken und Rate-Limiting übernehmen

### Kapitel 7 — Datenabruf in Server Components
- `ArticlePage` und `CategoryPage` sind Server Components
- Daten aus `mock-data.ts` werden direkt beim Rendern auf dem Server gelesen — kein `useEffect`, kein Client-Fetch

### Kapitel 8 — Statisches Rendering & `generateStaticParams`
- Alle Artikel- und Kategorie-Seiten werden zur Build-Zeit vorgerendert (`●` SSG)
- `generateStaticParams` in `/article/[id]/page.tsx` und `/category/[name]/page.tsx`
- Seiten kommen direkt aus dem CDN

### Kapitel 9 — Streaming mit Loading Skeletons
- `loading.tsx` in `/article/[id]/` und `/category/[name]/`
- `<Suspense>` Boundaries mit animierten Skeleton-Komponenten (`FeaturedCardSkeleton`, `NewsGridSkeleton`)
- Nutzer sehen sofort ein UI-Gerüst, während Inhalte laden

### Kapitel 10 — Suche mit URL Search Params
- `<Search>` ist ein Client Component (`'use client'`)
- Sucheingaben werden als `?q=` URL-Parameter gespeichert — teilbar, browser-history-kompatibel
- `ClientSearchFilter` liest `useSearchParams()` im Browser und filtert clientseitig — kein Server nötig

### Kapitel 12 — Error Handling (`notFound`, `error.tsx`)
- `notFound()` bei unbekannter Artikel-ID oder Kategorie
- `not-found.tsx` und `error.tsx` für Fehlerseiten
- `loading.tsx` für den Ladezustand

### Kapitel 15 — Metadata & SEO
- Statische Metadata auf der Startseite (`title`, `description`, `keywords`, `openGraph`)
- Dynamische Metadata pro Artikel und Kategorie via `generateMetadata()`
- OG-Image zeigt jeweils das Artikelbild

---

## Was macht unser Projekt anders?

Das Tutorial arbeitet mit einer fiktiven Buchhaltungs-App ("Acme"). Wir haben alle Konzepte auf ein anderes Thema übertragen:

| Tutorial (Acme) | Unser Projekt (TechPulse) |
|---|---|
| Invoices / Customers | Artikel mit Kategorie, Autor, Quelle |
| Dashboard | Featured Article + News Grid |
| Tabellen | Responsive Card-Grid mit Hover-Effekten |
| Datenbankabfragen | Mock-Daten mit Typ-System (`types.ts`) |
| Auth / Login | Kategorie-Filter + Live-Suche |

### Technische Eigenleistungen
- **Dark-Mode** mit CSS Custom Properties (`--foreground`, `--accent`, etc.)
- **Markdown-Renderer** (`src/lib/markdown.ts`) für Artikelinhalte — keine externe Library
- **Stretched Link Pattern** — Karten sind vollflächig klickbar, Kategorie-Badges bleiben eigene Links
- **Bildqualität** — Unsplash-Bilder mit `w=1600`, `quality={90}`, `will-change-transform` und `overflow-hidden` (verhindert den blauen Pixel-Strich beim Hover)
- **Statischer Export** — als statische HTML-Dateien exportierbar, kompatibel mit GitHub Pages

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
│   └── client-search-filter.tsx # Clientseitige Suchfilterung
└── lib/
    ├── types.ts                # TypeScript Interfaces (Article, Category)
    ├── mock-data.ts            # 12 Beispielartikel
    └── markdown.ts             # Markdown → HTML Renderer
```

---

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

---

## Framework-Analyse

Dieses Projekt entstand im Rahmen einer Analyse von modernen Web-Frameworks. Dokumentiert wurden:

- **Ecosystem** — Libraries, Community, Tooling
- **Performance** — Rendering-Strategien (SSG, SSR, CSR), Core Web Vitals
- **Business Model & Pricing** — Open Source, Vercel-Kosten, Self-Hosting
- **Scalability** — Edge Runtime, ISR, Caching
