import { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schemaData?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const CANONICAL_BASE = 'https://northvaleproperty.example';

export function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80',
  breadcrumbs,
  schemaData,
  noindex = false
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // Helper for meta tags
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description & viewport / robots
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Canonical link
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonicalUrl = cleanPath === '/' ? `${CANONICAL_BASE}/` : `${CANONICAL_BASE}${cleanPath}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonicalUrl);

    // 3. Open Graph
    setMeta('property', 'og:site_name', 'North & Vale Property');
    setMeta('property', 'og:locale', 'en_GB');
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonicalUrl);
    setMeta('property', 'og:image', ogImage);

    // 4. Twitter / X Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 5. Schema.org JSON-LD generation
    const scriptId = 'schema-org-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const schemasToInject: Array<Record<string, unknown>> = [];

    // Optional BreadcrumbList schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => {
          const itemUrl = crumb.url.startsWith('http')
            ? crumb.url
            : `${CANONICAL_BASE}${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`;
          return {
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: itemUrl
          };
        })
      });
    }

    // User-provided schemaData
    if (schemaData) {
      if (Array.isArray(schemaData)) {
        schemasToInject.push(...schemaData);
      } else {
        schemasToInject.push(schemaData);
      }
    } else {
      // Default RealEstateAgent Organization schema
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'North & Vale Property',
        description: 'Independent London residential estate and letting specialists.',
        url: CANONICAL_BASE,
        logo: `${CANONICAL_BASE}/favicon.svg`,
        telephone: '+44 20 7946 0958',
        email: 'hello@northvaleproperty.example',
        priceRange: '££££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14 Heath Street',
          addressLocality: 'London',
          postalCode: 'NW3 6TE',
          addressCountry: 'GB'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '51.5562',
          longitude: '-0.1783'
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Hampstead' },
          { '@type': 'AdministrativeArea', name: 'Highgate' },
          { '@type': 'AdministrativeArea', name: 'Islington' },
          { '@type': 'AdministrativeArea', name: 'Camden' },
          { '@type': 'AdministrativeArea', name: 'Stoke Newington' },
          { '@type': 'AdministrativeArea', name: 'North London' },
          { '@type': 'AdministrativeArea', name: 'Central London' }
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:30'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '10:00',
            closes: '16:00'
          }
        ]
      });
    }

    scriptElement.textContent = JSON.stringify(
      schemasToInject.length === 1 ? schemasToInject[0] : { '@context': 'https://schema.org', '@graph': schemasToInject }
    );
  }, [title, description, canonicalPath, ogType, ogImage, breadcrumbs, schemaData]);

  return null;
}
