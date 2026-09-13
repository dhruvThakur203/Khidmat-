import type { FaqItem } from '../../data/faqs';
import { absoluteUrl } from '../../data/seo';
import { getPublishedTestimonials } from '../../data/testimonials';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  faqs?: readonly FaqItem[];
}

export function StructuredData({ breadcrumbs, faqs }: StructuredDataProps) {
  const scripts: object[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    scripts.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    scripts.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const reviews = getPublishedTestimonials();
  if (reviews.length > 0) {
    scripts.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Khidmat',
      review: reviews.map((item) => ({
        '@type': 'Review',
        reviewBody: item.quote,
        author: { '@type': 'Person', name: item.author },
      })),
    });
  }

  if (scripts.length === 0) return null;

  return (
    <>
      {scripts.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
