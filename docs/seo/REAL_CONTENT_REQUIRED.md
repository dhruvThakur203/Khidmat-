# Real Content Required from Khidmat

Production site: **https://khidmat.co.in/**

This document tells the Khidmat team exactly what to collect so the website can publish genuine authority content. **Do not fabricate any of this material.**

---

## HIGH PRIORITY

### 1. Real event photos & catering event information

**What:** Verified catering events with permission to publish.

**How many:** Start with 3–5 strong events (mix of wedding, corporate, party).

**Format:**
- JPEG or WebP, minimum 1200px wide
- Accurate descriptions of what is shown
- Written permission from client or event organiser

**Where used:**
- `/events` case study sections
- Homepage real events (when published in `realEvents.ts`)
- Related catering service pages

**Data file:** `src/data/realEvents.ts`

**Per event, provide:**
| Field | Example |
|-------|---------|
| Event type | Wedding / Corporate / Party / Private |
| General location | Noida, Greater Noida |
| Date/year (if approved) | 2024 |
| Guest count (if approved) | approximately 150 |
| Short story | 2–4 factual sentences |
| Catering requirements | Buffet, live counter, dietary needs |
| Food highlights | Only verified dishes/services |
| Photos | 2–5 images with captions |

---

### 2. Google Business Profile URL

**What:** The verified Google Business Profile link for Khidmat (Noida or primary listing).

**Format:** Full URL, e.g. `https://g.page/r/...` or official Maps listing URL.

**Where used:**
- Trust stats Google link
- Platform profiles
- Testimonials fallback CTA
- Organization schema `sameAs`
- All Google review CTAs

**Data file:** `src/data/site.ts` → `googleBusinessUrl`

**Important:** Set once. The site automatically updates all Google links. Do not guess the URL.

---

### 3. Real reviews & testimonials

**What:** Genuine customer quotes with permission to display.

**How many:** 3–6 to start; prioritize catering events.

**Format:**
```
Quote: "..."
Author: First name + initial, or full name if approved
Context: Wedding catering, Noida — 2024
Source: google / zomato / direct
Permission: yes
```

**Where used:**
- Homepage testimonials section
- Review schema (only when published testimonials exist)

**Data file:** `src/data/testimonials.ts`

**Rules:**
- Set `published: true` only with permission
- Do not invent quotes
- No fake AggregateRating schema

---

### 4. Verify platform ratings & follower counts

**What:** Current Google rating/review count, Zomato rating, Facebook/Instagram followers.

**Where used:** Trust stats on homepage and catering sections.

**Data file:** `src/data/site.ts` → `siteStats`

**Rules:** Update with verified figures only. Set count to `0` to hide a stat until confirmed.

---

## MEDIUM PRIORITY

### 5. Historical photographs

**What:** Early restaurant photos, old interiors, founding-era images.

**How many:** 3–10 archival images.

**Format:** Scanned or digital originals, JPEG/PNG, with approximate year if known.

**Where used:** `/about-khidmat` heritage timeline, legacy sections.

**Data file:** `src/data/heritage.ts` → `heritageEvidence`

---

### 6. Certificates & awards

**What:** Food safety certificates, hospitality awards, recognition documents.

**Format:** Scan or photo, with award name and year.

**Where used:** About page heritage evidence section.

**Data file:** `src/data/heritage.ts`

---

### 7. Newspaper & press mentions

**What:** Articles, reviews or features mentioning Khidmat.

**Format:** Scan, link, or photo with publication name and date.

**Where used:** Heritage evidence on about page.

**Data file:** `src/data/heritage.ts`

---

### 8. Confirmed historical milestones

**What:** Verified dates for key business moments (founding, Noida branch opening, etc.).

**Format:**
```
Year: 1992
Title: Khidmat established
Description: One factual sentence
```

**Where used:** Heritage timeline on `/about-khidmat`.

**Data file:** `src/data/heritage.ts` → `heritageMilestones`

**Rule:** Do not invent dates. Only publish confirmed milestones.

---

## OPTIONAL

### 9. Complete catering menu details

**What:** Dish lists per category for events.

**Where used:** `/catering-menu-noida`

**Data file:** `src/data/cateringMenuCategories.ts`

---

### 10. Approved packages & pricing

**What:** Catering packages or per-plate pricing if approved for public display.

**Where used:** Quote conversations, potentially menu page in future.

**Rule:** Never publish unverified pricing.

---

### 11. Live counter information

**What:** Live station names, photos of counters at events.

**Where used:** Wedding/large event pages, case studies.

---

## GA4 Measurement ID

**What:** Google Analytics 4 measurement ID (`G-XXXXXXXXXX`).

**Where used:** Conversion funnel tracking (quote CTAs, form starts, WhatsApp clicks).

**Data file:** `.env` → `VITE_GA4_MEASUREMENT_ID`

See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md).

---

## Publication checklist

Before setting `published: true` on any event or testimonial:

- [ ] Written permission obtained
- [ ] Facts verified by Khidmat team
- [ ] Photos are real Khidmat events (not stock)
- [ ] No private addresses or unapproved client names
- [ ] Guest counts only if explicitly approved
- [ ] Content reviewed for accuracy

---

## What we will NOT publish without evidence

- Fake case studies
- Invented history or milestone dates
- Fabricated reviews or ratings in schema
- Sector/location doorway pages
- Unverified menu items or prices
