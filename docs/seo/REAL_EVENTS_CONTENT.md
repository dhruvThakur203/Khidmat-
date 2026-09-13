# Real Events Content — Khidmat

## Purpose

Showcase verified Khidmat catering events for E-E-A-T and user trust.
**Never publish fabricated events.**

## Data structure

Defined in `src/data/realEvents.ts`.

Each event supports:

| Field | Required | Notes |
|-------|----------|-------|
| `id` | Yes | Unique identifier |
| `slug` | Yes | URL anchor, e.g. `wedding-noida-2024` → `/events#wedding-noida-2024` |
| `title` | Yes | Event headline |
| `eventType` | Yes | `wedding`, `corporate`, `party`, `private`, `catering-setup` |
| `locationArea` | Yes | General area only — e.g. "Noida" |
| `dateLabel` | No | e.g. "2024" — omit if unknown |
| `guestCountLabel` | No | e.g. "approximately 150" — only if approved |
| `story` | Yes | Short factual event story (2–4 sentences) |
| `cateringRequirements` | No | What the client needed |
| `foodHighlights` | No | Verified food/service highlights |
| `menuHighlights` | No | Approved menu items only |
| `serviceDescription` | No | Brief service summary |
| `images` | Yes | `{ src, alt, caption? }` — accurate alt text |
| `serviceSlug` | No | Links to catering page, e.g. `wedding-catering-noida` |
| `published` | Yes | `false` until verified and approved |

## Case study template

Rendered by `EventCaseStudy` component:

1. Event headline
2. Event type + location + date + guest count (when approved)
3. Short event story
4. Catering requirements
5. Food/service highlights
6. Event gallery
7. Related catering service link
8. Contextual CTA (quote + WhatsApp)

## Where events appear

| Location | Component |
|----------|-----------|
| `/events` | `EventCaseStudies` (full case studies) |
| `/` homepage | `RealEvents` (cards when published, else gallery showcase) |
| Catering service pages | Related events when `serviceSlug` matches |

## Publication workflow

1. Khidmat provides event details, photos and written permission
2. Add entry to `realEvents` with `published: false`
3. Verify `isEventReadyToPublish()` returns true
4. Business reviews and approves content
5. Set `published: true`
6. Event appears automatically on `/events`, homepage, and related service pages

## Do not

- Invent client names without permission
- Claim guest counts unless verified
- Use stock photography as "real events"
- Add AggregateRating from event photos
- Create separate indexable URLs per event (use `/events#slug` anchors)

## Content requirements

See [REAL_CONTENT_REQUIRED.md](./REAL_CONTENT_REQUIRED.md) for what Khidmat must provide.
