# Phase 5 — Search Intent Map

Production site: **https://khidmat.co.in/**

This document maps commercial catering search themes to existing URLs. **No thin location pages** were created. Sector-specific URLs (e.g. `/catering-sector-62-noida`) are **not justified** unless Khidmat provides genuine unique content: real event history, case study, venue relationship, or unique photography.

---

## Primary catering intent

| Search theme | User intent | Best URL | Content satisfies intent? | Action taken |
|--------------|-------------|----------|---------------------------|--------------|
| catering services in Noida | Find a trusted caterer | `/noida-catering` | Yes — strengthened | Hub copy, journey nav, guest-count links, hub FAQs |
| caterers in Noida | Compare/evaluate caterers | `/noida-catering` | Yes — strengthened | SEO title includes "Caterers in Noida" |
| catering in Noida | General commercial catering | `/noida-catering` | Yes | Same hub — event cards, CTAs, internal links |

**New page justified?** No. Hub is the canonical target.

---

## Event-type intent

| Search theme | User intent | Best URL | Satisfies? | Action |
|--------------|-------------|----------|------------|--------|
| wedding catering in Noida | Plan wedding food | `/wedding-catering-noida` | Yes | Unique `serviceFocus`, wedding FAQs, wedding WhatsApp CTA |
| corporate catering in Noida | Office/business events | `/corporate-catering-noida` | Yes | Corporate-focused copy, office/conference FAQs |
| party catering in Noida | Birthdays/celebrations | `/party-catering-noida` | Yes | Party-specific benefits and FAQs |
| private event catering in Noida | Home/intimate events | `/private-party-catering-noida` | Yes | Private gathering focus, smaller guest emphasis |
| food catering for events | Broad event catering | `/catering-for-events-noida` | Yes | Existing events overview — links to hub and event pages |
| wedding food catering | Wedding menu/logistics | `/wedding-catering-noida` + `/catering-menu-noida` | Yes | Menu page links to wedding catering |
| catering for office events | Corporate lunch/meetings | `/corporate-catering-noida` | Yes | Corporate serviceFocus + recurring lunch FAQ |

**New page justified?** No. Four event pages + hub + events overview cover intent without duplication.

---

## Guest-size intent

| Search theme | User intent | Best URL | Satisfies? | Action |
|--------------|-------------|----------|------------|--------|
| catering for 20 guests | Small gathering planning | `/catering-by-guest-count#guests-20-50` | Yes | Tier sections with planning notes |
| catering for 50 people | Mid-size party | `/catering-by-guest-count#guests-50-100` | Yes | Tier + quick WhatsApp CTA |
| catering for 100 guests | Medium-large event | `/catering-by-guest-count#guests-100-250` | Yes | Wedding/corporate links per tier |
| catering for 200 guests | Large celebration | `/catering-by-guest-count#guests-250-500` | Yes | Large-event planning notes |
| catering for large events | 500+ scale | `/catering-by-guest-count#guests-500-plus` | Yes | 500+ tier without invented capacity claims |

**New page justified?** No. Single guest-count page with anchored tiers.

---

## Menu intent

| Search theme | User intent | Best URL | Satisfies? | Action |
|--------------|-------------|----------|------------|--------|
| catering menu Noida | See menu options | `/catering-menu-noida` | Partial → Yes | Event-type sections, cuisine categories, signature dishes |
| catering food menu | Category overview | `/catering-menu-noida` | Yes | Cuisine categories with event notes |
| event catering menu | Event-specific menus | `/catering-menu-noida` | Yes | Wedding/corporate/party menu links |
| catering menu for weddings | Wedding menu planning | `/catering-menu-noida` + `/wedding-catering-noida` | Yes | Cross-links between pages |
| catering menu for parties | Party menu | `/catering-menu-noida` + `/party-catering-noida` | Yes | Party event card on menu page |

**New page justified?** No. Full dish lists pending verified catering menu data (see `cateringMenuCategories.ts`).

---

## Conversion & enquiry intent

| Search theme | User intent | Best URL | Action |
|--------------|-------------|----------|--------|
| catering quote Noida | Request pricing | `/contact?type=catering` | Lightweight form: event type, date, guest range, location |
| WhatsApp catering | Quick contact | All catering pages | Contextual WhatsApp messages per page type |
| restaurant reservation | Dine-in enquiry | `/contact?type=restaurant` | Separate restaurant form — not mixed with catering |

---

## Location intent (no thin pages)

| Search theme | Best URL | Rule |
|--------------|----------|------|
| catering Sector 62 Noida | `/areas-we-serve` or `/noida-catering` | **Do not** create sector doorway pages |
| catering near me Noida | `/noida-catering` + GBP | Local pack via Google Business Profile, not spam URLs |

A location page is only justified with: genuine event history, real case study, unique service info, venue relationship, or unique photography. Document in `realEvents.ts` when available.

---

## Internal commercial journeys

```
/noida-catering → Event type page → /catering-by-guest-count → /catering-menu-noida → /contact?type=catering
```

`CateringJourney` component on hub, service, guest-count and menu pages.

---

## Pages improved (Phase 5)

| URL | Improvements |
|-----|--------------|
| `/noida-catering` | Journey nav, guest-count quick links, hero CTAs, hub copy |
| `/catering-by-guest-count` | Five tier sections, journey, improved SEO |
| `/catering-menu-noida` | Event menus, categories, signature dishes, customisation |
| `/wedding-catering-noida` | Unique serviceFocus, FAQs, CTA |
| `/corporate-catering-noida` | Unique serviceFocus, FAQs, CTA |
| `/party-catering-noida` | Unique serviceFocus, FAQs, CTA |
| `/private-party-catering-noida` | Unique serviceFocus, FAQs, CTA |
| `/contact` | Catering vs restaurant enquiry separation |

## New pages created

**None.** Phase 5 strengthens existing URLs only.

---

## Information required from Khidmat

1. Complete verified catering dish list per category
2. Live counter station options (names, photos)
3. Sample wedding / corporate / party menu combinations
4. Approved pricing or package tiers (if to be published)
5. Real event case studies for `realEvents.ts` (with customer permission)
6. Google Business Profile URL for `siteConfig.googleBusinessUrl`
7. GA4 Measurement ID for conversion tracking
