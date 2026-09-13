import type { FaqItem } from '../../data/faqs';
import {
  breadcrumbSchema,
  cateringServiceSchema,
  faqSchema,
  type BreadcrumbItem,
  type ServiceSchemaInput,
} from '../../data/schema';
import { getPublishedTestimonials } from '../../data/testimonials';

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  faqs?: readonly FaqItem[];
  service?: ServiceSchemaInput;
}

export function StructuredData({ breadcrumbs, faqs, service }: StructuredDataProps) {
  const scripts: object[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    scripts.push(breadcrumbSchema(breadcrumbs));
  }

  if (faqs && faqs.length > 0) {
    scripts.push(faqSchema(faqs));
  }

  if (service) {
    scripts.push(cateringServiceSchema(service));
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
