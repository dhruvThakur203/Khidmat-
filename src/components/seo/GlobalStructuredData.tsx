import { organizationSchema, websiteSchema } from '../../data/schema';

const GLOBAL_SCHEMA_ID = 'seo-schema-global';

export function GlobalStructuredData() {
  const data = [organizationSchema(), websiteSchema()];

  return (
    <script
      id={GLOBAL_SCHEMA_ID}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
