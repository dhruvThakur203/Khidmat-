# Khidmat Restaurant Website

Production-quality frontend website for **Khidmat Restaurant** — Since 1992, The Spirit of Delhi.

## Quick Start

```bash
cd khidmat-web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
khidmat-web/
├── public/
│   ├── images/
│   │   ├── brand/logo.png
│   │   ├── delhi/gallery/
│   │   └── noida/gallery/
│   └── videos/kitchen-okhla.mp4
├── src/
│   ├── data/          # Centralized content (branches, menu, gallery, brand)
│   ├── components/    # Layout, sections, UI, gallery, menu
│   ├── pages/         # Route pages
│   ├── hooks/         # Scroll, reveal, lightbox
│   └── styles/        # Global design system
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/our-story` | Our Story |
| `/menu` | Menu |
| `/experience` | Experience |
| `/gallery` | Gallery |
| `/catering` | Catering |
| `/locations` | Locations |
| `/contact` | Contact |

## Updating Content

All restaurant data lives in `src/data/`:

- **branches.ts** — Addresses, phones, maps links
- **menu.ts** — Menu items and categories
- **gallery.ts** — Gallery images with branch and category tags
- **brand.ts** — Brand copy and messaging
- **social.ts** — Social media links

### Adding Gallery Images

1. Place image in `public/images/delhi/gallery/` or `public/images/noida/gallery/`
2. Add entry to `src/data/gallery.ts` with correct `branch` and `category`

### Legacy Artwork (Responsive)

**Two distinct asset types — never mix them:**

| Asset | Purpose | Used in |
|-------|---------|---------|
| `legacy-original.png` | Full brand/archive page (may include PAGE 2) | Our Legacy section only |
| `legacy-desktop.webp` / `legacy-mobile.webp` | Cinematic atmosphere (no PAGE 2, no baked text) | Cinematic intro frame 4 |
| `legacy-desktop-skyline.webp` / `legacy-mobile-skyline.webp` | Delhi atmosphere | Cinematic frame 1 |
| `legacy-desktop-ornament.webp` / `legacy-mobile-ornament.webp` | Heritage ornament | Cinematic frame 2 |

Regenerate cinematic variants from source:

```bash
npm run generate:legacy
```

Cinematic frames use `<picture>` with explicit `desktopSrc` / `mobileSrc` in `src/data/cinematicIntro.ts`. No `object-fit: cover` on legacy artwork.

### Adding Menu Items

Add entries to `menuItems` in `src/data/menu.ts`.

## Tech Stack

- Vite + React 19 + TypeScript
- React Router 7
- CSS custom properties (no UI framework)
- Google Fonts: Cormorant Garamond + DM Sans
