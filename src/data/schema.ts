import type { FaqItem } from './faqs';
import { branches } from './branches';
import { contactConfig, siteConfig } from './site';
import { absoluteUrl, type PageSeo } from './seo';
import { getSchemaSameAs } from './businessEntity';
import { logo } from './brandAssets';

const ORG_ID = `${siteConfig.domain}/#organization`;
const WEBSITE_ID = `${siteConfig.domain}/#website`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'Restaurant'],
    '@id': ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description:
      'Established hospitality brand offering restaurant dining and professional catering services across Noida and Delhi NCR since 1992.',
    url: siteConfig.domain,
    logo: absoluteUrl(logo.src),
    image: absoluteUrl('/images/noida/gallery/noida-01.jpeg'),
    email: contactConfig.email,
    foundingDate: String(siteConfig.since),
    servesCuisine: ['North Indian', 'Mughlai', 'Indian'],
    sameAs: getSchemaSameAs(),
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    location: [
      {
        '@type': 'Restaurant',
        name: `Khidmat Restaurant — ${branches.delhi.area}, ${branches.delhi.city}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: branches.delhi.address,
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          addressCountry: 'IN',
        },
        telephone: `+91-${branches.delhi.phones[0].replace(/^0/, '')}`,
      },
      {
        '@type': 'Restaurant',
        name: `Khidmat Restaurant — ${branches.noida.area}, ${branches.noida.city}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: branches.noida.address,
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'IN',
        },
        telephone: `+91-${branches.noida.phones[0].replace(/\s/g, '')}`,
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.domain,
    description: defaultSeoDescription(),
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };
}

function defaultSeoDescription(): string {
  return 'Khidmat — restaurant dining and catering services in Noida and Delhi NCR since 1992.';
}

export function webPageSchema(seo: PageSeo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(seo.path)}#webpage`,
    url: absoluteUrl(seo.path),
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  image?: string;
}

export function cateringServiceSchema(service: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(service.path)}#service`,
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    image: service.image ? absoluteUrl(service.image) : undefined,
    provider: { '@id': ORG_ID },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    serviceType: 'Catering',
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: readonly FaqItem[]) {
  return {
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
  };
}
