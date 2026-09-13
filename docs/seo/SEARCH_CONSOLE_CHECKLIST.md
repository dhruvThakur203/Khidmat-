# Google Search Console — Khidmat Setup Checklist

Production site: **https://khidmat.co.in/**

## 1. Property verification

Choose one method:

| Method | Recommendation |
|--------|----------------|
| **Domain property** (`khidmat.co.in`) | Preferred — covers all subdomains and protocols |
| **URL-prefix property** (`https://khidmat.co.in/`) | Alternative if domain DNS access is limited |

Verification options: DNS TXT record (domain), or HTML file / meta tag via hosting.

## 2. Submit sitemap

```
https://khidmat.co.in/sitemap.xml
```

Submit in Search Console → Sitemaps.

## 3. Priority URLs to inspect first

Request indexing via URL Inspection after deployment:

1. `https://khidmat.co.in/`
2. `https://khidmat.co.in/noida-catering`
3. `https://khidmat.co.in/wedding-catering-noida`
4. `https://khidmat.co.in/corporate-catering-noida`
5. `https://khidmat.co.in/party-catering-noida`
6. `https://khidmat.co.in/private-party-catering-noida`

## 4. Legacy URLs — should redirect (301)

These must NOT be indexed as separate pages:

| Old URL | Redirects to |
|---------|--------------|
| `/catering` | `/noida-catering` |
| `/our-story` | `/about-khidmat` |
| `/menu` | `/catering-menu-noida` |
| `/office-catering` | `/corporate-catering-noida` |
| `/office-catering-noida` | `/corporate-catering-noida` |
| `/large-celebrations` | `/noida-catering` |
| `/large-celebrations-noida` | `/noida-catering` |
| `/private-catering-noida` | `/private-party-catering-noida` |

## 5. Monitor after launch

- **Index coverage** — ensure 16 sitemap URLs are indexed
- **Crawl stats** — watch for spikes in 404s
- **Page experience** — Core Web Vitals on mobile
- **Manual actions** — should remain clean
- **Rich results** — FAQ and breadcrumb schema on catering pages

## 6. robots.txt

```
https://khidmat.co.in/robots.txt
```

Should allow all public pages and reference the sitemap.

## 7. Old domain

If `khidmatrestaurant.com` is still live, configure a **host-level 301 redirect** to `https://khidmat.co.in/` and add the old domain as a Search Console property to monitor migration.
