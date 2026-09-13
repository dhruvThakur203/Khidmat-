# 90-Day SEO Action Plan — Khidmat

**Status legend:** ✓ Website | 📋 Business owner | 🌐 External platform

Covers: Search Console, Analytics, 30/60/90-day roadmap, competitor framework, content plan summary.

---

## Part 1 — Google Search Console (first 90 days)

### Week 1

| Task | Owner | Status |
|------|-------|--------|
| Verify domain property `khidmat.co.in` (DNS TXT preferred) | 📋 | |
| Submit sitemap: `https://khidmat.co.in/sitemap.xml` | 📋 | |
| URL Inspection — request indexing for 6 priority URLs | 📋 | |
| Confirm old domain redirects (if khidmatrestaurant.com exists) | 📋 | |
| Check robots.txt accessible | ✓ | |

**Priority URLs to inspect:**
1. `/`
2. `/noida-catering`
3. `/wedding-catering-noida`
4. `/corporate-catering-noida`
5. `/party-catering-noida`
6. `/private-party-catering-noida`

### Weeks 2–4

| Task | What to watch |
|------|---------------|
| **Index coverage** | All 16 sitemap URLs indexed; no unexpected exclusions |
| **Crawl stats** | Pages crawled per day; fix spike in 404s |
| **Sitemaps report** | “Success” status; 16 discovered URLs |
| **Manual actions** | Should be “No issues detected” |
| **HTTPS** | All pages served over HTTPS |

**Fix immediately if:**
- Important pages show “Crawled — currently not indexed”
- Canonical conflicts appear
- Redirect chains on legacy URLs

### Months 2–3

| Task | Goal |
|------|------|
| **Performance report** | Monitor impressions/clicks for catering queries |
| **CTR optimisation** | Improve titles/descriptions for pages with high impressions, low clicks |
| **Query expansion** | Identify new queries — e.g. “caterers near me”, “wedding food Noida” |
| **Landing page analysis** | Which URLs earn clicks vs which rank but don’t convert |

### Key metrics to track weekly

| Metric | Tool | Target direction |
|--------|------|------------------|
| Indexed pages | GSC → Pages | 16+ indexable pages indexed |
| Impressions (catering queries) | GSC → Performance | ↑ over 90 days |
| Average position (target queries) | GSC → Performance | ↓ (better ranking) |
| CTR | GSC → Performance | ↑ after title tweaks |
| Click-through from brand queries | GSC | Stable/high |

Full setup details: `SEARCH_CONSOLE_CHECKLIST.md`

---

## Part 2 — Google Analytics 4 checklist

### Setup (when GA4 property is created)

| Step | Action | Owner |
|------|--------|-------|
| 1 | Create GA4 property for khidmat.co.in | 📋 |
| 2 | Copy Measurement ID (`G-XXXXXXXXXX`) | 📋 |
| 3 | Set `VITE_GA4_MEASUREMENT_ID` in `.env` | 📋 |
| 4 | Add gtag script to `index.html` | 📋 |
| 5 | Rebuild and deploy website | ✓ ready |
| 6 | Mark key events as conversions in GA4 | 📋 |

### Events already tracked in website code (✓)

| Event | Business importance | Mark as conversion? |
|-------|---------------------|---------------------|
| `whatsapp_click` | 🔴 HIGH | Yes |
| `quote_click` | 🔴 HIGH | Yes |
| `contact_form_submit` | 🔴 HIGH | Yes |
| `phone_click` | 🔴 HIGH | Yes |
| `google_profile_click` | 🟡 MEDIUM | Yes |
| `zomato_click` | 🟢 LOW | Optional |
| `facebook_click` | 🟢 LOW | No |
| `instagram_click` | 🟢 LOW | No |
| `directions_click` | 🟡 MEDIUM | Yes |

### GA4 reports to review monthly

- **Acquisition:** Organic search traffic to catering pages
- **Engagement:** Landing pages — `/noida-catering`, service pages
- **Conversions:** WhatsApp + quote + phone totals
- **User acquisition:** New vs returning (catering is often one-time)

Full setup: `ANALYTICS_SETUP.md`

---

## Part 3 — Competitor analysis framework

> Do not fabricate competitor data. Use this template for manual research.

### Step 1: Identify competitors

Search Google Maps and Google Search in Noida for:

- “catering services near me” (from Noida location)
- “caterers in Noida”
- “wedding caterers in Noida”
- “corporate catering Noida”

Record top 5–10 recurring business names.

### Step 2: Scorecard template

For each competitor, collect:

| Factor | How to measure | Khidmat (fill in) | Competitor A | Competitor B |
|--------|----------------|-------------------|--------------|--------------|
| GBP primary category | GBP listing | Caterer (Noida) | | |
| Google rating | GBP | 4.1 | | |
| Review count | GBP | ~800 | | |
| Review recency | Last 10 reviews date | | | |
| Photo count | GBP photos tab | | | |
| Website quality | Manual review | ✓ Strong | | |
| Catering landing pages | Site structure | ✓ 4 service pages | | |
| Wedding page | Dedicated URL? | ✓ /wedding-catering-noida | | |
| Blog / case studies | Real events? | 📋 Planned | | |
| Backlinks (estimate) | Ahrefs free / manual | | | |
| Citations | Directory presence | | | |
| Social following | FB/IG | 10K / 3.2K | | |
| Years in business | About page / GBP | Since 1992 | | |
| Price positioning | Visible pricing? | No (good) | | |

### Step 3: Gap analysis questions

1. Do competitors have more recent Google reviews?
2. Do they have more wedding-specific photos on GBP?
3. Do wedding venues link to them?
4. Do they rank for queries Khidmat doesn’t appear for?
5. What unique angle does Khidmat have that competitors lack? → **34 years, restaurant + catering, real kitchen**

📋 Complete this quarterly. First session: allow 2–3 hours of manual Maps + search research.

---

## Part 4 — 30 / 60 / 90 day roadmap

### Days 1–30 — Foundation (HIGH impact)

| # | Activity | Impact | Owner |
|---|----------|--------|-------|
| 1 | Verify & optimise Google Business Profile (both locations) | 🔴 HIGH | 🌐📋 |
| 2 | Upload 30+ real photos to GBP | 🔴 HIGH | 📋 |
| 3 | Set GBP services + description | 🔴 HIGH | 🌐 |
| 4 | Save GBP URL to `siteConfig.googleBusinessUrl` | 🔴 HIGH | ✓📋 |
| 5 | Verify Search Console + submit sitemap | 🔴 HIGH | 📋 |
| 6 | Inspect & index 6 priority URLs | 🔴 HIGH | 📋 |
| 7 | Audit NAP on Facebook, Zomato, Justdial | 🔴 HIGH | 🌐 |
| 8 | Start review request process post-events | 🔴 HIGH | 📋 |
| 9 | Respond to all existing Google reviews | 🟡 MED | 📋 |
| 10 | Set up GA4 + mark conversions | 🟡 MED | 📋 |

### Days 31–60 — Authority building (MEDIUM impact)

| # | Activity | Impact | Owner |
|---|----------|--------|-------|
| 11 | Claim Apple Maps + Bing Places | 🟡 MED | 🌐 |
| 12 | Create WedMeGood vendor profile | 🔴 HIGH (weddings) | 🌐 |
| 13 | Publish first real event case study on website | 🟡 MED | ✓📋 |
| 14 | Monthly GBP posts (4x) with website links | 🟡 MED | 🌐 |
| 15 | Approach 5 wedding venues for partner links | 🟡 MED | 📋 |
| 16 | Monitor GSC queries — note CTR opportunities | 🟡 MED | 📋 |
| 17 | Add 10+ new GBP photos from recent events | 🟡 MED | 📋 |
| 18 | First competitor scorecard completed | 🟢 LOW | 📋 |

### Days 61–90 — Growth & refinement (MIXED)

| # | Activity | Impact | Owner |
|---|----------|--------|-------|
| 19 | Publish 2nd case study (corporate or party) | 🟡 MED | ✓📋 |
| 20 | Secure 1–2 partner/venue backlinks | 🔴 HIGH | 📋 |
| 21 | Review GSC performance — optimise low-CTR pages | 🟡 MED | 📋 |
| 22 | Expand citation presence (2 quality directories) | 🟢 LOW | 🌐 |
| 23 | Quarterly citation NAP audit | 🟡 MED | 📋 |
| 24 | Evaluate GBP category performance — adjust if needed | 🟡 MED | 🌐 |
| 25 | Plan next quarter content (see content roadmap) | 🟡 MED | 📋 |

### Impact summary

| Impact | Activities |
|--------|------------|
| 🔴 **HIGH** | GBP optimisation, photos, reviews, GSC setup, WedMeGood, venue backlinks |
| 🟡 **MEDIUM** | GA4, GBP posts, case studies, citation audits, competitor tracking |
| 🟢 **LOW** | Extra directories, social follower growth, blog volume without real events |

---

## Part 5 — 6-month content roadmap (summary)

Full detail in `LOCAL_SEO_GROWTH_PLAN.md`.

| Month | Content | Type | Owner |
|-------|---------|------|-------|
| **M1** | Wedding catering case study #1 | Real event + photos | 📋 |
| **M2** | “How to plan catering by guest count” (enhance existing page) | Guide | ✓📋 |
| **M3** | Corporate event case study | Real event | 📋 |
| **M4** | Seasonal/festive catering guide (Diwali, weddings season) | Seasonal | 📋 |
| **M5** | Birthday party case study | Real event | 📋 |
| **M6** | “Behind Khidmat’s kitchen since 1992” | Heritage E-E-A-T | 📋 |

**Rule:** No content without real photos or verified facts.
