# AWC × Magical Teams — Attio Project Recap

A static, interactive recap dashboard for AWC summarizing what was shipped during the ClickUp → Attio migration project. Built to be deployed as a static site on Vercel.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # strict TypeScript check
npm run build        # static export to ./out
```

## Deploy

This is a Next.js project with `output: 'export'` — runs entirely in the browser, no server. Deploy to Vercel:

```bash
npx vercel
```

Or drag-drop `./out` to any static host.

## Editing content

All content lives in `src/content/`:

- `hero.ts` — top-of-page outcome cards
- `tracks.ts` — the 6 technical track groupings
- `items.ts` — every individual shipped feature with its FAQ / how-to / training body
- `outstanding.ts` — work still in flight
- `phase-next.ts` — the "what could come next" teaser

Edit those files; the page rebuilds automatically.

## Brand tokens

`src/app/globals.css` carries the AWC palette (warm orange primary, cool blue/green/red secondary accents) on a fluid `clamp()` type and spacing scale. OKLCH colors paired with `light-dark()` for native dark-mode support. Components reference semantic tokens (`--bg-page`, `--text-primary`, etc.) rather than raw ramps.
