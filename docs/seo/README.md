# Khidmat SEO Documentation

Production site: **https://khidmat.co.in/**

## Phase overview

| Phase | Focus | Status |
|-------|-------|--------|
| **1** | Technical SEO foundation | ✓ Complete |
| **2** | Prerendering, content, performance | ✓ Complete |
| **3** | Entity consistency, trust, analytics readiness | ✓ Complete |
| **4** | Local SEO & off-site authority strategy | ✓ Complete |
| **5** | Search intent + catering lead generation | ✓ Complete |
| **6** | E-E-A-T, real events, analytics funnel | ✓ Complete |

## Start here

**[LOCAL_SEO_GROWTH_PLAN.md](./LOCAL_SEO_GROWTH_PLAN.md)** — Master strategy for local visibility

## Guides

| Document | Purpose |
|----------|---------|
| [GBP_OPTIMIZATION.md](./GBP_OPTIMIZATION.md) | Google Business Profile checklist, categories, descriptions, photos |
| [REVIEW_GROWTH.md](./REVIEW_GROWTH.md) | Legitimate review acquisition and response templates |
| [BACKLINK_STRATEGY.md](./BACKLINK_STRATEGY.md) | Citations and backlink acquisition |
| [90_DAY_SEO_PLAN.md](./90_DAY_SEO_PLAN.md) | GSC, GA4, competitor framework, 30/60/90 roadmap |
| [SEARCH_CONSOLE_CHECKLIST.md](./SEARCH_CONSOLE_CHECKLIST.md) | Search Console setup |
| [EXTERNAL_LISTINGS_AUDIT.md](./EXTERNAL_LISTINGS_AUDIT.md) | NAP consistency audit |
| [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) | GA4 and conversion events |
| [REAL_EVENTS_CONTENT.md](./REAL_EVENTS_CONTENT.md) | Real event case study data structure |
| [SEARCH_INTENT_MAP.md](./SEARCH_INTENT_MAP.md) | Phase 5 keyword → URL intent map |
| [COMMERCIAL_MEASUREMENT.md](./COMMERCIAL_MEASUREMENT.md) | GSC + GA4 measurement for catering leads |
| [REAL_CONTENT_REQUIRED.md](./REAL_CONTENT_REQUIRED.md) | What Khidmat must provide for real authority content |

## Website configuration points

| Setting | File |
|---------|------|
| Google Business URL | `src/data/site.ts` → `googleBusinessUrl` |
| Trust stats (ratings, followers) | `src/data/site.ts` → `siteStats` |
| Business profiles (social URLs) | `src/data/businessEntity.ts` |
| GA4 Measurement ID | `.env` → `VITE_GA4_MEASUREMENT_ID` |
