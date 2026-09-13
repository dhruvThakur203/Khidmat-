import { useEffect } from 'react';
import { webPageSchema } from '../../data/schema';
import type { PageSeo } from '../../data/seo';
import { absoluteUrl, resolveOgImage, siteName } from '../../data/seo';

const WEBPAGE_SCHEMA_ID = 'seo-schema-webpage';

function upsertMeta(
  selector: string,
  create: () => HTMLElement,
  content: string,
) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function PageMeta({ seo }: { seo: PageSeo }) {
  useEffect(() => {
    const canonical = absoluteUrl(seo.path);
    const ogImage = resolveOgImage(seo);
    const ogType = seo.ogType ?? 'website';

    document.title = seo.title;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        return meta;
      },
      seo.description,
    );

    if (seo.robots) {
      upsertMeta(
        'meta[name="robots"]',
        () => {
          const meta = document.createElement('meta');
          meta.setAttribute('name', 'robots');
          return meta;
        },
        seo.robots,
      );
    } else {
      document.querySelector('meta[name="robots"]')?.remove();
    }

    upsertLink('canonical', canonical);

    const ogTags: [string, string][] = [
      ['og:title', seo.title],
      ['og:description', seo.description],
      ['og:url', canonical],
      ['og:type', ogType],
      ['og:image', ogImage],
      ['og:site_name', siteName],
      ['og:locale', 'en_IN'],
    ];

    for (const [property, content] of ogTags) {
      upsertMeta(
        `meta[property="${property}"]`,
        () => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', property);
          return meta;
        },
        content,
      );
    }

    const twitterTags: [string, string][] = [
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', seo.title],
      ['twitter:description', seo.description],
      ['twitter:image', ogImage],
    ];

    for (const [name, content] of twitterTags) {
      upsertMeta(
        `meta[name="${name}"]`,
        () => {
          const meta = document.createElement('meta');
          meta.setAttribute('name', name);
          return meta;
        },
        content,
      );
    }

    let schemaEl = document.getElementById(WEBPAGE_SCHEMA_ID) as HTMLScriptElement | null;
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = WEBPAGE_SCHEMA_ID;
      schemaEl.type = 'application/ld+json';
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(webPageSchema(seo));
  }, [seo]);

  return null;
}
