import { useRouter, Link } from '../context/RouterContext';
import { AREA_GUIDES } from '../data/areas';
import { DEMO_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { SEOHead } from '../components/SEOHead';
import {
  MapPin,
  Train,
  CheckCircle2,
  TreePine,
  GraduationCap,
  Utensils,
  Landmark,
  ArrowRight,
  PhoneCall,
  Compass
} from 'lucide-react';

interface AreaDetailPageProps {
  areaSlug: string;
}

export function AreaDetailPage({ areaSlug }: AreaDetailPageProps) {
  const guide = AREA_GUIDES[areaSlug] || AREA_GUIDES.hampstead;

  // Specific SEO mappings based on prompt rules
  let seoTitle = `${guide.name} London Area Guide & Property Market | North & Vale`;
  let seoDescription = `Independent guide to living in ${guide.name}, London. Explore architectural heritage, transport connections, schools, lifestyle, and property for sale.`;

  if (guide.slug === 'hampstead') {
    seoTitle = 'Living in Hampstead, London NW3 | Area Guide & Property | North & Vale';
    seoDescription = 'Independent Hampstead area and property guide. Discover historic village architecture, Hampstead Heath, transport links, and residences for sale and rent.';
  } else if (guide.slug === 'highgate') {
    seoTitle = 'Living in Highgate, London N6 | Village Guide & Property | North & Vale';
    seoDescription = 'Comprehensive Highgate Village neighbourhood guide. Explore period villas, modernist architecture, Highgate Woods, and prime London homes.';
  } else if (guide.slug === 'islington') {
    seoTitle = 'Living in Islington, London N1 | Area Guide & Georgian Homes | North & Vale';
    seoDescription = 'Independent Islington neighbourhood appraisal. Georgian garden squares, Upper Street dining, canal-side towpaths, and contemporary residential conversions.';
  } else if (guide.slug === 'camden') {
    seoTitle = 'Living in Camden, London NW1 | Canalside Culture & Homes | North & Vale';
    seoDescription = 'Independent Camden area guide. Explore canalside loft conversions, early Victorian stucco terraces, cultural landmarks, and West End transit.';
  } else if (guide.slug === 'stoke-newington') {
    seoTitle = 'Living in Stoke Newington, London N16 | Village Spirit & Parks | North & Vale';
    seoDescription = 'Comprehensive Stoke Newington guide. Independent Church Street dining, Victorian and Edwardian villas, Clissold Park, and family homes in N16.';
  }

  // Properties in this specific area
  const areaProperties = DEMO_PROPERTIES.filter((p) => p.areaSlug === guide.slug);

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/areas/${guide.slug}`}
        ogImage={guide.heroImage}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Area Guides', url: '/areas' },
          { name: guide.name, url: `/areas/${guide.slug}` }
        ]}
        schemaData={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemPage',
            name: `${guide.name}, London Neighbourhood Guide`,
            description: guide.summary,
            url: `https://northvaleproperty.example/areas/${guide.slug}`,
            mainEntity: {
              '@type': 'Place',
              name: `${guide.name}, London`,
              description: guide.summary,
              containedInPlace: {
                '@type': 'City',
                name: 'London',
                addressCountry: 'GB'
              }
            }
          }
        ]}
      />

      {/* Hero Header */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-end bg-[#1C1E1D] text-[#FDFCF7] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={guide.heroImage}
            alt={`${guide.name}, London architectural setting`}
            className="w-full h-full object-cover opacity-45 scale-100"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#141615] via-[#1C1E1D]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7]">Home</Link>
            <span>/</span>
            <Link to="/areas" className="hover:text-[#FDFCF7]">Area Guides</Link>
            <span>/</span>
            <span className="text-[#9E7D47] font-medium">{guide.name}</span>
          </nav>

          <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold block mb-1">
            North London Residential Profile
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FDFCF7]">
            {guide.name}, London
          </h1>

          <p className="text-sm sm:text-base text-[#D5D1C6] font-light mt-3 max-w-2xl leading-relaxed">
            {guide.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to={`/properties?area=${guide.slug}`}
              className="px-6 py-3 bg-[#9E7D47] hover:bg-[#B89358] text-[#141615] text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              View {guide.name} Properties ({areaProperties.length})
            </Link>

            <Link
              to="/valuation"
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-[#FDFCF7] border border-[#E8E5DD]/40 text-xs uppercase tracking-wider font-medium transition-colors"
            >
              Request a Valuation in {guide.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Area Introduction */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                Area Introduction
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1E1D] mb-4">
                The Character of {guide.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#3A3C3B] leading-relaxed">
                {guide.summary}
              </p>
            </div>

            {/* Architecture Section */}
            <div className="p-8 bg-[#F4F2EB] border border-[#E8E5DD]">
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                Spatial Character &amp; Built Heritage
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#1C1E1D] mb-4">
                Architectural Styles in {guide.name}
              </h2>
              <ul className="space-y-3">
                {guide.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A4C4A]">
                    <span className="text-[#9E7D47] font-serif font-bold text-base leading-none">•</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifestyle & Amenities */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                Daily Rhythms
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1E1D] mb-4">
                Lifestyle &amp; Culture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guide.lifestyle.map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#FDFCF7] border border-[#E8E5DD] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A4C4A] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Highlights & Amenities */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                Notable Institutions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1E1D] mb-4">
                Local Amenities &amp; Green Spaces
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guide.localHighlights.map((hl, idx) => (
                  <div key={idx} className="p-5 border border-[#E8E5DD] bg-[#FDFCF7]">
                    <span className="text-[10px] uppercase tracking-wider text-[#9E7D47] font-medium block mb-1">
                      {hl.category}
                    </span>
                    <h3 className="font-serif text-lg font-normal text-[#1C1E1D] mb-1.5">
                      {hl.name}
                    </h3>
                    <p className="text-xs text-[#5A5955] leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It Suits */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                Resident Profile
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#1C1E1D] mb-3">
                Who {guide.name} Typically Suits
              </h2>
              <ul className="space-y-2.5">
                {guide.whoItSuits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A4C4A] p-3 bg-[#F4F2EB] border border-[#E8E5DD]">
                    <Compass className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Market Positioning */}
            <div className="p-6 border-l-2 border-[#9E7D47] bg-[#FDFCF7] shadow-xs">
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                Market Advisory Note
              </span>
              <h2 className="font-serif text-xl font-normal text-[#1C1E1D] mb-2">
                Property Market Positioning in {guide.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5955] leading-relaxed italic">
                “{guide.marketContext}”
              </p>
              <p className="text-[11px] text-[#78766E] mt-3">
                * Note: General market commentary provided for qualitative context. Specific appraisals are conducted individually using Land Registry comparables.
              </p>
            </div>
          </div>

          {/* Right Sidebar: Transport & Contact */}
          <div className="lg:col-span-4 space-y-6">
            {/* Transport Card */}
            <div className="p-6 bg-[#FDFCF7] border border-[#E8E5DD] shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E8E5DD]">
                <Train className="w-4 h-4 text-[#9E7D47]" />
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1E1D]">
                  Transport &amp; Connections
                </h3>
              </div>

              <div className="space-y-4">
                {guide.transport.map((t, idx) => (
                  <div key={idx} className="text-xs">
                    <p className="font-medium text-[#1C1E1D]">{t.station}</p>
                    <p className="text-[#9E7D47] text-[11px] font-medium">{t.lines.join(' • ')}</p>
                    <p className="text-[#78766E] text-[11px]">{t.walkingTime}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valuation CTA Card */}
            <div className="p-6 bg-[#1C1E1D] text-[#FDFCF7] border border-[#2A2E2C]">
              <span className="text-[10px] uppercase tracking-widest text-[#B89358] font-semibold block mb-1">
                Homeowner Advisory
              </span>
              <h3 className="font-serif text-xl font-normal text-[#FDFCF7] mb-2">
                Considering selling or letting in {guide.name}?
              </h3>
              <p className="text-xs text-[#D5D1C6] leading-relaxed mb-6 font-light">
                Request a confidential, evidence-based appraisal from our resident directors.
              </p>
              <Link
                to="/valuation"
                className="w-full py-3 bg-[#9E7D47] hover:bg-[#B89358] text-[#141615] text-xs uppercase tracking-widest font-semibold flex items-center justify-center transition-colors"
              >
                Request a Valuation
              </Link>
            </div>

            {/* Contact Office */}
            <div className="p-6 bg-[#FDFCF7] border border-[#E8E5DD] text-xs text-[#5A5955] space-y-3">
              <h4 className="uppercase tracking-wider font-semibold text-[#1C1E1D] text-xs">
                North &amp; Vale Property Desk
              </h4>
              <p>14 Heath Street, Hampstead, London NW3 6TE</p>
              <div className="pt-2">
                <a
                  href="tel:+442079460958"
                  className="flex items-center gap-2 font-medium text-[#1C1E1D] hover:text-[#9E7D47] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>+44 20 7946 0958</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Properties in This Area */}
        <div className="mt-20 pt-12 border-t border-[#E8E5DD]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
                Local Listings
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1E1D] font-normal mt-1">
                Featured Properties in {guide.name}
              </h2>
            </div>
            <Link
              to={`/properties?area=${guide.slug}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1C1E1D] hover:text-[#9E7D47] mt-3 sm:mt-0"
            >
              <span>View All in {guide.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {areaProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-[#F4F2EB] border border-[#E8E5DD] text-center text-xs text-[#78766E]">
              <p>We currently have discreet and off-market residences available in {guide.name}.</p>
              <Link to="/contact" className="text-[#9E7D47] font-medium hover:underline mt-1 inline-block">
                Enquire about off-market opportunities &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
