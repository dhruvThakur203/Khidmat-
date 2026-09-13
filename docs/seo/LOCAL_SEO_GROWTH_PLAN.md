# Local SEO & Off-Site Authority Growth Plan — Khidmat

**Production website:** https://khidmat.co.in/  
**Established:** 1992 | **Primary market:** Noida & Delhi NCR

**Status legend:**
- ✓ **Implemented on website** — live in codebase
- 📋 **Requires business owner action** — manual work needed
- 🌐 **Requires external platform action** — GBP, directories, partners

---

## Executive summary

Phases 1–3 built a technically excellent website. **Phase 4 recognises that local catering visibility — especially Google Maps and “near me” searches — depends heavily on off-site signals** that code alone cannot create:

| Signal | Primary lever | Owner |
|--------|---------------|-------|
| Google Maps rankings | Google Business Profile + reviews | 🌐📋 |
| Local trust | Real photos, review volume, responses | 📋 |
| Entity consistency | NAP citations across platforms | 🌐📋 |
| Domain authority | Editorial & partner backlinks | 📋 |
| Website relevance | ✓ Already strong — maintain | ✓ |

**This document is the master strategy.** Detailed guides:

| Guide | Contents |
|-------|----------|
| [GBP_OPTIMIZATION.md](./GBP_OPTIMIZATION.md) | GBP audit, categories, descriptions, services, photos |
| [REVIEW_GROWTH.md](./REVIEW_GROWTH.md) | Review requests, responses, compliance |
| [BACKLINK_STRATEGY.md](./BACKLINK_STRATEGY.md) | Citations + backlink acquisition |
| [90_DAY_SEO_PLAN.md](./90_DAY_SEO_PLAN.md) | GSC, GA4, competitor framework, 30/60/90 roadmap |
| [SEARCH_CONSOLE_CHECKLIST.md](./SEARCH_CONSOLE_CHECKLIST.md) | GSC setup (Phase 3) |
| [EXTERNAL_LISTINGS_AUDIT.md](./EXTERNAL_LISTINGS_AUDIT.md) | NAP audit (Phase 3) |
| [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) | GA4 setup (Phase 3) |
| [REAL_EVENTS_CONTENT.md](./REAL_EVENTS_CONTENT.md) | Event case study architecture (Phase 3) |

---

## A. What the website already does (✓ do not regress)

| Capability | Status |
|------------|--------|
| 16 prerendered indexable routes | ✓ |
| Unique metadata per page | ✓ |
| Canonical URLs on khidmat.co.in | ✓ |
| sitemap.xml + robots.txt | ✓ |
| Organization + Service + FAQ schema | ✓ |
| Catering service pages (wedding, corporate, party, private) | ✓ |
| Internal topical linking | ✓ |
| Trust stats with platform links | ✓ |
| `PlatformProfiles` — Google, Zomato, FB, IG | ✓ |
| Centralised `businessEntity.ts` NAP | ✓ |
| `googleBusinessUrl` config point in `site.ts` | ✓ |
| Conversion event tracking abstraction | ✓ |
| Real events data architecture (`realEvents.ts`) | ✓ |
| 404 with noindex | ✓ |

---

## B. Target search visibility

| Query intent | Website page | Off-site lever |
|--------------|--------------|----------------|
| catering services in Noida | `/noida-catering` | GBP Caterer category + reviews |
| caterers near me | `/noida-catering` | GBP proximity + review volume |
| wedding catering in Noida | `/wedding-catering-noida` | GBP photos + WedMeGood + venue links |
| corporate catering in Noida | `/corporate-catering-noida` | GBP services + corporate backlinks |
| party catering in Noida | `/party-catering-noida` | GBP photos + case studies |
| best caterers in Noida | `/noida-catering` | Reviews + authority backlinks |
| Khidmat restaurant | `/restaurant` | Zomato + restaurant GBP (Delhi) |

> Website code improves **relevance** when users arrive. **Maps pack visibility** requires GBP, reviews, and citations.

---

## 1. Google Business Profile — key recommendations

📋🌐 **Full checklist:** [GBP_OPTIMIZATION.md](./GBP_OPTIMIZATION.md)

### Category recommendation

| Location | Primary | Secondary |
|----------|---------|-----------|
| **Noida (Sector 50)** | **Caterer** | Restaurant, Indian restaurant |
| **Delhi (Kalkaji)** | **Restaurant** | Caterer, Indian restaurant |

**Reasoning:** Catering lead generation is the primary growth objective. Noida listing should lead with Caterer. Delhi listing should lead with Restaurant to match dine-in intent.

### Immediate GBP actions (first 7 days)

1. 🌐 Verify both location listings exist and are claimed
2. 🌐 Set categories per recommendation above
3. 🌐 Paste business description (short + full versions in GBP guide)
4. 🌐 Add 7 services with website URLs
5. 🌐 Upload 30+ real photos
6. 📋 Save GBP review URL → `siteConfig.googleBusinessUrl` in website
7. 🌐 Enable messaging / booking if used

---

## 2. Review growth system

📋 **Full playbook:** [REVIEW_GROWTH.md](./REVIEW_GROWTH.md)

| Component | Status |
|-----------|--------|
| WhatsApp review request template | 📋 Ready to use |
| SMS template | 📋 Ready to use |
| Staff script (dine-in) | 📋 Ready to use |
| Follow-up timing (day 1–2, day 5–7) | 📋 Ready to use |
| Response templates (positive/neutral/negative) | 📋 Ready to use |
| Website links to Google reviews | ✓ Implemented |

**Target:** 8–12 new genuine Google reviews per month from catering clients (adjust based on event volume).

---

## 3. Citation strategy

🌐 **Full plan:** [BACKLINK_STRATEGY.md](./BACKLINK_STRATEGY.md) Part A

**High priority:** Google, Facebook, Zomato, WedMeGood, Apple Maps, Bing Places, Justdial

**Rule:** Identical NAP everywhere. Website always `https://khidmat.co.in/`

---

## 4. Backlink strategy

📋 **Full plan:** [BACKLINK_STRATEGY.md](./BACKLINK_STRATEGY.md) Part B

**Top 3 strategies:**
1. Wedding venue partner pages → `/wedding-catering-noida`
2. Corporate vendor listings → `/corporate-catering-noida`
3. Local food/heritage media → `/about-khidmat`

**Target:** 2–4 quality links per quarter.

---

## 5. Competitor analysis

📋 **Framework:** [90_DAY_SEO_PLAN.md](./90_DAY_SEO_PLAN.md) Part 3

Manual research required. No fabricated competitor data.

**Khidmat advantages to emphasise:**
- 34 years since 1992 (heritage)
- Restaurant + catering from one kitchen
- Real operations, not a broker/agency
- Strong website architecture (✓)
- High Zomato rating volume (restaurant credibility)

---

## 6. Content growth plan (6 months)

Connect every piece to a real customer need. Use `realEvents.ts` when publishing.

| Month | Topic | Format | Website destination | Owner |
|-------|-------|--------|---------------------|-------|
| **1** | Real wedding catering story | Case study + 5–8 photos | `/events` + link to `/wedding-catering-noida` | 📋 |
| **2** | Catering menu planning guide | Short guide (existing menu page enhanced) | `/catering-menu-noida` | ✓📋 |
| **3** | Corporate event catering story | Case study | `/events` + `/corporate-catering-noida` | 📋 |
| **4** | Festive/wedding season catering tips | Seasonal article | `/noida-catering` | 📋 |
| **5** | Birthday party catering story | Case study | `/events` + `/party-catering-noida` | 📋 |
| **6** | Kitchen heritage since 1992 | E-E-A-T feature | `/about-khidmat` | 📋 |

**Content rules:**
- Real photography only
- No invented guest counts, prices, or awards
- 600–900 words max per piece — premium, not spam
- Each piece links to one catering service page + contact/quote CTA

---

## 7. Search Console plan

📋 **Full plan:** [90_DAY_SEO_PLAN.md](./90_DAY_SEO_PLAN.md) Part 1 + [SEARCH_CONSOLE_CHECKLIST.md](./SEARCH_CONSOLE_CHECKLIST.md)

**Week 1:** Verify domain, submit sitemap, inspect 6 priority URLs  
**Weeks 2–4:** Monitor indexing, fix crawl errors  
**Months 2–3:** CTR optimisation, query analysis

---

## 8. Analytics plan

📋 **Full plan:** [90_DAY_SEO_PLAN.md](./90_DAY_SEO_PLAN.md) Part 2 + [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)

**Priority conversions:** WhatsApp clicks, quote requests, phone calls, directions

✓ Event tracking code ready — awaiting GA4 Measurement ID

---

## 9. 30 / 60 / 90 day priority roadmap

| Period | Focus | Top 3 actions |
|--------|-------|---------------|
| **Days 1–30** | GBP + GSC + reviews | Optimise GBP, upload photos, start review requests, verify Search Console |
| **Days 31–60** | Citations + content | WedMeGood profile, first case study, GBP monthly posts, venue outreach |
| **Days 61–90** | Authority + refinement | Partner backlinks, 2nd case study, GSC CTR optimisation, competitor audit |

**Impact tiers:**

| 🔴 HIGH | GBP, reviews, GSC, WedMeGood, venue backlinks |
| 🟡 MEDIUM | GA4, case studies, GBP posts, citation audit |
| 🟢 LOW | Extra directories, volume blogging without real events |

Full task list: [90_DAY_SEO_PLAN.md](./90_DAY_SEO_PLAN.md) Part 4

---

## 10. Business information still required

| Item | Why needed | Where to set |
|------|------------|--------------|
| Verified Google Business Profile URL | Direct review links, schema | `siteConfig.googleBusinessUrl` |
| Exact opening hours per branch | GBP accuracy | GBP + `siteConfig.openingHours` |
| Delhi GBP listing URL (if separate) | Delhi restaurant SEO | Document separately |
| GA4 Measurement ID | Conversion tracking | `.env` → `VITE_GA4_MEASUREMENT_ID` |
| Real event photos + permission | Case studies | `realEvents.ts` |
| Published testimonials | On-site social proof | `testimonials.ts` |
| WedMeGood / directory credentials | Citation presence | External platforms |

---

## 11. What this phase did NOT do

| Item | Reason |
|------|--------|
| Modify Google Business Profile | No account access |
| Create directory listings | Requires business verification |
| Acquire backlinks | Requires outreach |
| Generate reviews | Requires real customers |
| Guarantee Maps rankings | Depends on Google algorithm + competition |

---

## 12. Success measures (90-day)

Track monthly — improvements indicate progress; no ranking guarantees.

| Metric | Source | Direction |
|--------|--------|-----------|
| Google review count | GBP | ↑ |
| GBP photo count | GBP | ↑ (target 50+) |
| Indexed pages | GSC | 16 stable |
| Organic impressions (catering queries) | GSC | ↑ |
| WhatsApp / quote conversions | GA4 (when live) | ↑ |
| Partner backlinks | Manual tracking | 1–2 new |
| Published case studies | Website | 1–2 |

---

*Khidmat's strongest long-term local SEO advantage is truth: a real restaurant and catering operation since 1992. This plan prioritises making that reality visible to Google and to customers — not manufacturing signals that cannot be sustained.*
