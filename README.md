# Khidmat Restaurant Website

Production frontend for **Khidmat Restaurant** — Since 1992, The Spirit of Delhi.

## Quick Start

```bash
cd khidmat-web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

The build outputs to `dist/`. Static assets in `public/` (including the Noida menu PDF) are copied automatically.

Verify the menu PDF after build:

```text
dist/menus/noida-delivery-takeaway-menu.pdf
```

## Deployment

This is a static SPA (Vite + React Router). Deploy the `dist/` folder to any static host.

**Build command:** `npm run build`  
**Output directory:** `dist`

Client-side routes (`/our-story`, `/locations`, etc.) require SPA fallback to `index.html`. Configuration is included for:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

Static files (`/images/*`, `/menus/*`, `/videos/*`) are served directly and are not affected by SPA rewrites.

## Project Structure

```text
khidmat-web/
├── public/
│   ├── images/
│   ├── menus/noida-delivery-takeaway-menu.pdf
│   └── videos/
├── src/
│   ├── data/          # branches, menus, gallery, brand, social
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── styles/
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/our-story` | Our Story |
| `/experience` | Experience |
| `/gallery` | Gallery |
| `/catering` | Catering |
| `/locations` | Locations |
| `/contact` | Contact |

## Noida Delivery / Take Away Menu

The Noida branch menu is a PDF served from the site:

```text
/menus/noida-delivery-takeaway-menu.pdf
```

Configuration lives in `src/data/menus.ts` and is attached to the Noida branch in `src/data/branches.ts`. Header and location CTAs open this PDF in a new tab. This is **not** a dine-in or Delhi menu.

To replace the PDF, update the file at `public/menus/noida-delivery-takeaway-menu.pdf` without changing code.

## Updating Content

All restaurant data lives in `src/data/`:

- **branches.ts** — Addresses, phones, maps links, Noida delivery menu
- **menus.ts** — Noida delivery/take-away PDF path and CTA labels
- **gallery.ts** — Gallery images with branch and category tags
- **brand.ts** — Brand copy and messaging
- **social.ts** — Social links and email

### Adding Gallery Images

1. Place image in `public/images/delhi/gallery/` or `public/images/noida/gallery/`
2. Add entry to `src/data/gallery.ts` with correct `branch` and `category`

## Tech Stack

- Vite + React 19 + TypeScript
- React Router 7
- CSS custom properties (no UI framework)
- Google Fonts: Cormorant Garamond + DM Sans
