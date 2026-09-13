# Phase 5 — Commercial Search Measurement Plan

Track whether Phase 5 improvements drive **more relevant traffic** and **better catering leads**.

---

## Google Search Console

**Property:** https://khidmat.co.in/

### Weekly metrics (catering-focused)

| Metric | What to watch |
|--------|---------------|
| Impressions | Growth on catering queries |
| Clicks | Traffic to hub, event, guest-count, menu pages |
| Average position | "catering noida", "caterers noida", "wedding catering noida", etc. |
| CTR | Title/description effectiveness per page |

### High-priority pages

- `/noida-catering`
- `/wedding-catering-noida`
- `/corporate-catering-noida`
- `/party-catering-noida`
- `/private-party-catering-noida`
- `/catering-by-guest-count`
- `/catering-menu-noida`
- `/contact`

### Query groups to filter

1. **Primary:** catering noida, caterers noida, catering services noida
2. **Event:** wedding catering noida, corporate catering noida, party catering noida
3. **Guest size:** catering for 50 guests, catering for 100 people, large event catering
4. **Menu:** catering menu noida, event catering menu

### Monthly review

- Which queries gained impressions but low CTR → refine titles/descriptions
- Which pages rank but don't convert → improve CTAs
- Which event-type pages attract the most clicks

---

## GA4 (requires `VITE_GA4_MEASUREMENT_ID`)

See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for installation.

### Conversion events already instrumented

| Event | Trigger | Lead quality signal |
|-------|---------|---------------------|
| `quote_cta_click` | Quote CTA link clicks | Intent signal — tracks page and CTA location |
| `catering_form_start` | First form field interaction | User began enquiry |
| `catering_form_submit` | Catering form WhatsApp submit | Structured enquiry with event details |
| `whatsapp_click` | WhatsApp button clicks | High intent — page and catering type |
| `phone_click` | Phone number clicks | Direct contact |
| `contact_form_submit` | Restaurant enquiry submit | Restaurant vs catering separated |
| `directions_click` | Maps/directions | Local/restaurant intent |

### Custom dimensions to add in GA4 (recommended)

- `page_path` — already available
- `event_label` — passed on conversion events (event type, branch, etc.)

### Catering conversion funnel

```
Organic Search Landing
        ↓
Catering Page (hub / event type / guest count / menu)
        ↓
Exploration (menu, guest count, service page)
        ↓
Quote CTA click  OR  WhatsApp click
        ↓
[Quote path] Form start → Form submit (WhatsApp)
[WhatsApp path] Direct message
```

### Drop-off points to monitor

| Stage | Event | If low, investigate |
|-------|-------|---------------------|
| Landing → exploration | Page views, scroll depth | Weak content match, unclear CTAs |
| Exploration → quote CTA | `quote_cta_click` | CTA visibility, placement, copy |
| Quote CTA → form start | `catering_form_start` / `quote_cta_click` ratio | Form friction, page load |
| Form start → submit | `catering_form_submit` / `catering_form_start` | Form length, required fields |
| Any stage → WhatsApp | `whatsapp_click` | WhatsApp may be preferred channel — not always drop-off |

### Reports to build

1. **Catering leads by landing page** — which URL starts the journey
2. **WhatsApp clicks by page** — contextual message effectiveness
3. **Quote form submissions** — guest count range distribution
4. **Restaurant vs catering enquiries** — `/contact?type=` split

---

## Lead quality checklist

A high-quality catering lead includes:

- [ ] Event type identified
- [ ] Approximate guest count (tier selected)
- [ ] Event date (when provided)
- [ ] Location in Noida/Delhi NCR
- [ ] Contact number

The enquiry form at `/contact?type=catering` collects these without a long booking flow.

---

## 30 / 60 / 90 day targets

| Period | Focus |
|--------|-------|
| **30 days** | Baseline GSC data for Phase 5 pages; confirm GA4 events firing |
| **60 days** | Compare CTR and position for primary catering queries |
| **90 days** | Correlate organic clicks with WhatsApp/quote conversions; identify top enquiry pages |

---

## Real event case studies (future)

When Khidmat approves content in `realEvents.ts`:

- Publish on `/events` with structured internal links from relevant catering pages
- Track engagement on case study pages
- Do **not** publish fake events or unapproved guest counts
