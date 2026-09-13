# Analytics & Conversion Tracking — Khidmat

## Current status

The website includes a **conversion tracking abstraction** at `src/utils/analytics.ts`.

Tracking is **disabled until a GA4 measurement ID is configured**. No fabricated IDs are used.

## Google Analytics 4 setup

1. Create a GA4 property at https://analytics.google.com
2. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
3. Create `.env` in project root:

```
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Add gtag to `index.html` (when ID is available):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Rebuild and deploy.

## Tracked conversion events

| Event | Trigger |
|-------|---------|
| `quote_cta_click` | "Get a Catering Quote" link clicks (before form) |
| `catering_form_start` | First interaction with catering enquiry form |
| `catering_form_submit` | Catering enquiry form submitted (WhatsApp handoff) |
| `whatsapp_click` | WhatsApp button / link clicks |
| `phone_click` | Phone number clicks |
| `contact_form_submit` | Restaurant enquiry form submission |
| `google_profile_click` | Google profile / reviews link |
| `zomato_click` | Zomato profile link |
| `facebook_click` | Facebook profile link |
| `instagram_click` | Instagram profile link |
| `directions_click` | Get Directions (Maps) clicks |

### Contextual parameters (no PII)

Events may include: `page`, `catering_type`, `cta_location`, `guest_count_tier`, `label`.

In development, events log to the browser console as `[analytics]`.

## Google Search Console

See `SEARCH_CONSOLE_CHECKLIST.md` — separate from GA4 but should use the same domain property.

## What NOT to track without consent

- Do not add AggregateRating schema from third-party review counts
- Do not send PII (names, phone numbers) in analytics events
- Do not install tracking IDs until business authorises analytics
