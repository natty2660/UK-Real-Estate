import { useRouter, Link } from '../context/RouterContext';
import { DEMO_PROPERTIES } from '../data/properties';
import { AREA_GUIDES } from '../data/areas';
import { PropertyCard } from '../components/PropertyCard';
import { PropertySearchForm } from '../components/PropertySearchForm';
import { SEOHead } from '../components/SEOHead';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  KeyRound,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock,
  Compass,
  FileCheck,
  Scale
} from 'lucide-react';

export function HomePage() {
  const { navigate } = useRouter();
  const featuredProperties = DEMO_PROPERTIES.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="bg-[#FDFCF7]">
      <SEOHead
        title="North & Vale Property | Independent London Estate & Letting Agency"
        description="Independent London residential estate and letting specialists. Bespoke sales, lettings, and valuations across Hampstead, Highgate, Islington, Camden, and prime North London."
        canonicalPath="/"
        ogType="website"
        schemaData={[
          {
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            '@id': 'https://northvaleproperty.example/#agency',
            name: 'North & Vale Property',
            legalName: 'North & Vale Property Limited',
            description: 'Independent London residential estate and letting agency specializing in architectural homes across North and Central London.',
            url: 'https://northvaleproperty.example/',
            logo: 'https://northvaleproperty.example/favicon.svg',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80',
            telephone: '+44 20 7946 0958',
            email: 'hello@northvaleproperty.example',
            priceRange: '££££',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '14 Heath Street',
              addressLocality: 'Hampstead, London',
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
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://northvaleproperty.example/#website',
            url: 'https://northvaleproperty.example/',
            name: 'North & Vale Property',
            description: 'Independent London Estate & Letting Agency',
            publisher: {
              '@id': 'https://northvaleproperty.example/#agency'
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://northvaleproperty.example/properties?search={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center justify-center bg-[#191B1A] text-[#FDFCF7] overflow-hidden">
        {/* Background Image with Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88"
            alt="Refined Georgian and Victorian London townhouse facade with classic wrought iron railings"
            className="w-full h-full object-cover object-center opacity-30 scale-100"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#141615] via-[#191B1A]/65 to-[#141615]/85" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#9E7D47]/50 bg-[#191B1A]/85 backdrop-blur-xs text-[#B89358] text-[11px] uppercase tracking-[0.24em] font-semibold mb-6">
            <span>Independent London Estate &amp; Letting Specialists</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FDFCF7] tracking-tight leading-[1.08] max-w-4xl text-balance">
            Property, thoughtfully presented.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#D5D1C6] font-light max-w-2xl leading-relaxed text-balance">
            Independent estate and letting specialists helping people buy, sell and rent exceptional homes across London.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/properties"
              className="w-full sm:w-auto px-8 py-4 bg-[#9E7D47] hover:bg-[#B89358] text-[#141615] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 text-center shadow-md cursor-pointer"
            >
              Explore Residences
            </Link>

            <Link
              to="/valuation"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#FDFCF7]/10 text-[#FDFCF7] border border-[#E6E3DB]/40 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 text-center cursor-pointer"
            >
              Request a Valuation
            </Link>
          </div>

          {/* Micro Enclaves Strip */}
          <div className="mt-12 pt-8 border-t border-[#E6E3DB]/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A39E93]">
            <Link to="/areas/hampstead" className="hover:text-[#FDFCF7] transition-colors">Hampstead NW3</Link>
            <span className="text-[#9E7D47]">•</span>
            <Link to="/areas/highgate" className="hover:text-[#FDFCF7] transition-colors">Highgate N6</Link>
            <span className="text-[#9E7D47]">•</span>
            <Link to="/areas/islington" className="hover:text-[#FDFCF7] transition-colors">Islington N1</Link>
            <span className="text-[#9E7D47]">•</span>
            <Link to="/areas/camden" className="hover:text-[#FDFCF7] transition-colors">Camden NW1</Link>
            <span className="text-[#9E7D47]">•</span>
            <Link to="/areas/stoke-newington" className="hover:text-[#FDFCF7] transition-colors">Stoke Newington N16</Link>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER PORTAL */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <PropertySearchForm />
      </section>

      {/* 3. CURATED PORTFOLIO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6E3DB]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191B1A] font-normal mt-1">
              Featured London Residences
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6D65] mt-2 max-w-xl font-light">
              An architectural cross-section of period houses, garden townhouses, and design-led lateral apartments currently under our stewardship.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors"
            >
              <span>View All Properties ({DEMO_PROPERTIES.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((prop, idx) => (
            <PropertyCard key={prop.id} property={prop} priority={idx < 2} />
          ))}
        </div>
      </section>

      {/* 4. THE EDITORIAL APPROACH (PRACTICE PHILOSOPHY) */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block">
                The North &amp; Vale Practice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191B1A] font-normal leading-tight">
                An independent approach to London property.
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5955] leading-relaxed font-light">
                We founded North &amp; Vale on the conviction that exceptional London homes deserve an honest, unhurried, and design-literate representation. Rather than mass listing volumes, we maintain a deliberately focused register of instructions.
              </p>
              <p className="text-xs sm:text-sm text-[#5A5955] leading-relaxed font-light">
                Every sale and tenancy is directed by an equity partner with deep knowledge of North London conservation areas, leasehold law, and structural heritage.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors"
                >
                  <span>Learn About Our Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 bg-white border border-[#E6E3DB] shadow-xs space-y-3">
                <span className="font-serif text-3xl text-[#9E7D47] font-normal">01</span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A]">
                  Architectural Photography
                </h3>
                <p className="text-xs text-[#6F6D65] leading-relaxed font-light">
                  No wide-angle optical distortions. We capture natural light, spatial proportions, and material finishes honestly to attract qualified buyers.
                </p>
              </div>

              <div className="p-7 bg-white border border-[#E6E3DB] shadow-xs space-y-3">
                <span className="font-serif text-3xl text-[#9E7D47] font-normal">02</span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A]">
                  Director Accompaniment
                </h3>
                <p className="text-xs text-[#6F6D65] leading-relaxed font-light">
                  Every viewing is accompanied directly by senior directors with comprehensive architectural and legal knowledge of the building.
                </p>
              </div>

              <div className="p-7 bg-white border border-[#E6E3DB] shadow-xs space-y-3">
                <span className="font-serif text-3xl text-[#9E7D47] font-normal">03</span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A]">
                  Micro-Market Evidence
                </h3>
                <p className="text-xs text-[#6F6D65] leading-relaxed font-light">
                  Valuations grounded in Land Registry completed sales, active competitive stock, and private client purchaser registers across NW3, N6, and N1.
                </p>
              </div>

              <div className="p-7 bg-white border border-[#E6E3DB] shadow-xs space-y-3">
                <span className="font-serif text-3xl text-[#9E7D47] font-normal">04</span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A]">
                  Discreet Off-Market
                </h3>
                <p className="text-xs text-[#6F6D65] leading-relaxed font-light">
                  For clients valuing privacy, confidential matching with pre-qualified cash and chain-free buyers without public portals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES DUAL PERSPECTIVE (SALES & LETTINGS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block">
            Advisory Representation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#191B1A] font-normal mt-1">
            Sales &amp; Lettings Services
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6D65] mt-2 font-light leading-relaxed">
            Whether preparing a landmark family home for sale or seeking reliable asset management for a prime portfolio, our practice provides seasoned guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sales Card */}
          <div className="p-8 bg-white border border-[#E6E3DB] flex flex-col justify-between hover:border-[#9E7D47]/70 transition-all duration-300">
            <div>
              <div className="w-10 h-10 bg-[#FAF9F5] border border-[#E6E3DB] flex items-center justify-center text-[#9E7D47] mb-6">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#191B1A] mb-3">
                Property Sales
              </h3>
              <p className="text-xs text-[#5A5955] leading-relaxed mb-6 font-light">
                Strategic valuation, architectural art direction, and focused private buyer engagement designed to realize the true worth of distinctive homes.
              </p>
              <ul className="space-y-2.5 text-xs text-[#6F6D65] mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Art-directed architectural photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Director-led accompanied viewings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Discreet off-market campaigns</span>
                </li>
              </ul>
            </div>
            <Link
              to="/services#selling"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors pt-4 border-t border-[#E6E3DB]"
            >
              <span>Explore Sales Advisory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Lettings Card */}
          <div className="p-8 bg-white border border-[#E6E3DB] flex flex-col justify-between hover:border-[#9E7D47]/70 transition-all duration-300">
            <div>
              <div className="w-10 h-10 bg-[#FAF9F5] border border-[#E6E3DB] flex items-center justify-center text-[#9E7D47] mb-6">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#191B1A] mb-3">
                Residential Lettings
              </h3>
              <p className="text-xs text-[#5A5955] leading-relaxed mb-6 font-light">
                Securing vetted corporate, professional, and diplomatic tenants swiftly while optimizing rental yield and safeguarding landlord assets.
              </p>
              <ul className="space-y-2.5 text-xs text-[#6F6D65] mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Rigorous multi-stage referencing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Fully compliant legal agreements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Seamless deposit registration</span>
                </li>
              </ul>
            </div>
            <Link
              to="/services#lettings"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors pt-4 border-t border-[#E6E3DB]"
            >
              <span>Explore Lettings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Property Management Card */}
          <div className="p-8 bg-white border border-[#E6E3DB] flex flex-col justify-between hover:border-[#9E7D47]/70 transition-all duration-300">
            <div>
              <div className="w-10 h-10 bg-[#FAF9F5] border border-[#E6E3DB] flex items-center justify-center text-[#9E7D47] mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#191B1A] mb-3">
                Property Management
              </h3>
              <p className="text-xs text-[#5A5955] leading-relaxed mb-6 font-light">
                Comprehensive day-to-day oversight, 24/7 emergency response, and verified trade partners ensuring your property is preserved with care.
              </p>
              <ul className="space-y-2.5 text-xs text-[#6F6D65] mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>24-hour emergency tenant assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Periodic photographic inspections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>Statutory compliance management</span>
                </li>
              </ul>
            </div>
            <Link
              to="/services#management"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors pt-4 border-t border-[#E6E3DB]"
            >
              <span>Management Terms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEIGHBOURHOODS & ARCHITECTURAL GUIDES */}
      <section className="py-20 bg-[#FAF9F5] border-y border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block">
                London Enclaves
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191B1A] font-normal mt-1">
                Area Guides &amp; Architecture
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6D65] mt-2 max-w-xl font-light">
                Detailed neighbourhood profiles highlighting transport connectivity, architectural heritage, conservation rules, and local institutions.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors"
              >
                <span>Explore All Area Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(AREA_GUIDES).map((area) => (
              <div
                key={area.slug}
                className="group bg-white border border-[#E6E3DB] overflow-hidden flex flex-col hover:border-[#9E7D47]/70 transition-all duration-300 shadow-xs"
              >
                <div className="aspect-16/10 overflow-hidden relative">
                  <img
                    src={area.heroImage}
                    alt={`${area.name}, London architectural scene`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#191B1A]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] tracking-widest uppercase text-[#B89358] font-medium block">
                      London Area Guide
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white">
                      {area.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#5A5955] line-clamp-3 leading-relaxed mb-4 font-light">
                      {area.summary}
                    </p>
                    <div className="space-y-1.5 text-xs text-[#78766E] mb-4">
                      <p className="font-medium text-[#191B1A]">Notable Highlights:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {area.lifestyle.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="line-clamp-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6E3DB] flex items-center justify-between">
                    <Link
                      to={`/areas/${area.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors"
                    >
                      <span>Read {area.name} Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/properties?area=${area.slug}`}
                      className="text-[11px] text-[#78766E] hover:text-[#9E7D47] transition-colors"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VALUATION EDITORIAL CTA (THE CORE VALUE CALLOUT) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <span className="text-[11px] uppercase tracking-[0.22em] text-[#9E7D47] font-semibold block">
          Complimentary Market Appraisal
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191B1A] font-normal mt-2 leading-tight">
          Find out what your home could be worth.
        </h2>
        <p className="text-sm sm:text-base text-[#5A5955] mt-4 max-w-2xl mx-auto leading-relaxed font-light">
          Request a confidential market valuation from our North London directors. Grounded in actual Land Registry transaction data, architectural attributes, and active prime buyer demand.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/valuation"
            className="w-full sm:w-auto px-8 py-4 bg-[#191B1A] hover:bg-[#2A2E2C] text-[#FDFCF7] text-xs uppercase tracking-[0.18em] font-semibold transition-colors shadow-sm"
          >
            Request a Valuation Online
          </Link>
          <a
            href="tel:+442079460958"
            className="w-full sm:w-auto px-8 py-4 bg-[#FAF9F5] hover:bg-[#F4F2EB] text-[#191B1A] border border-[#E6E3DB] text-xs uppercase tracking-[0.15em] font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>Speak with a Director: 020 7946 0958</span>
          </a>
        </div>
      </section>

      {/* 8. TRUST, STANDARDS & REGULATORY COMPLIANCE BANNER */}
      <section className="py-12 bg-[#191B1A] text-[#FDFCF7] border-y border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-[#B89358] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FDFCF7]">
                  The Property Ombudsman
                </h4>
                <p className="text-[11px] text-[#A39E93] mt-1 leading-relaxed">
                  Committed to the TPO Code of Practice for residential sales and lettings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B89358] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FDFCF7]">
                  Client Money Protection
                </h4>
                <p className="text-[11px] text-[#A39E93] mt-1 leading-relaxed">
                  All client rental deposits and holding funds held in ring-fenced audited accounts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-[#B89358] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FDFCF7]">
                  Tenancy Deposit Scheme
                </h4>
                <p className="text-[11px] text-[#A39E93] mt-1 leading-relaxed">
                  Custodial deposit protection in compliance with UK statutory requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#B89358] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FDFCF7]">
                  Independent Practice
                </h4>
                <p className="text-[11px] text-[#A39E93] mt-1 leading-relaxed">
                  Owned and directed in London. Free from corporate sales targets or franchise constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EDITORIAL COMMENTARY & PROPERTY ESSAYS */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block">
                Editorial Commentary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191B1A] font-normal mt-1">
                Property Notes &amp; London Insights
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6D65] mt-2 max-w-xl font-light">
                Essays, architectural commentary, and market perspectives from our North London advisory practice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-[#E6E3DB] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7D47] font-semibold">
                  Architecture &amp; Heritage
                </span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A] mt-2 mb-3">
                  Preserving Georgian Proportions in Modern Living
                </h3>
                <p className="text-xs text-[#5A5955] leading-relaxed mb-4 font-light">
                  How thoughtful buyers in Islington and Hampstead balance Grade II listing protections with sustainable heating and contemporary light-well extensions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6E3DB] text-[11px] text-[#78766E]">
                <span>5 min read • North London Focus</span>
              </div>
            </article>

            <article className="bg-white border border-[#E6E3DB] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7D47] font-semibold">
                  Market Guidance
                </span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A] mt-2 mb-3">
                  The Value of Architectural Photography in London Sales
                </h3>
                <p className="text-xs text-[#5A5955] leading-relaxed mb-4 font-light">
                  Why wide-angle distortions alienate discerning buyers, and how honest, natural-light editorial captures command elevated engagement.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6E3DB] text-[11px] text-[#78766E]">
                <span>4 min read • Agency Perspectives</span>
              </div>
            </article>

            <article className="bg-white border border-[#E6E3DB] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7D47] font-semibold">
                  Neighbourhoods
                </span>
                <h3 className="font-serif text-xl font-normal text-[#191B1A] mt-2 mb-3">
                  Village Sanctuaries: Why Highgate and Hampstead Endure
                </h3>
                <p className="text-xs text-[#5A5955] leading-relaxed mb-4 font-light">
                  An exploration of ancient commons, conservation controls, and why north London’s hilltop villages preserve their unique sense of place.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6E3DB] text-[11px] text-[#78766E]">
                <span>6 min read • Area Studies</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 10. LONDON ADVISORY DESK CONTACT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#191B1A] text-[#FDFCF7] p-8 sm:p-12 lg:p-16 border border-[#2A2E2C]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold block">
                London Advisory Desk
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FDFCF7] mt-1 mb-4">
                We welcome conversations about exceptional London homes.
              </h2>
              <p className="text-xs sm:text-sm text-[#D5D1C6] leading-relaxed mb-6 font-light">
                Whether considering an immediate sale, seeking a long-term tenancy, or seeking discreet advice on an acquisition, our directors are available for a confidential consultation.
              </p>

              <div className="space-y-3 text-xs text-[#E8E5DD]">
                <div className="flex items-center gap-3">
                  <span className="text-[#B89358] font-semibold w-16">Office:</span>
                  <span>14 Heath Street, Hampstead, London NW3 6TE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#B89358] font-semibold w-16">Telephone:</span>
                  <a href="tel:+442079460958" className="hover:text-[#B89358] transition-colors">
                    +44 20 7946 0958
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#B89358] font-semibold w-16">Email:</span>
                  <a href="mailto:hello@northvaleproperty.example" className="hover:text-[#B89358] transition-colors">
                    hello@northvaleproperty.example
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch lg:justify-end gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#9E7D47] hover:bg-[#B89358] text-[#141615] text-xs uppercase tracking-[0.16em] font-semibold transition-colors text-center"
              >
                Send Us a Message
              </Link>
              <Link
                to="/valuation"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-[#FDFCF7] border border-[#E6E3DB]/30 text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center"
              >
                Book Valuation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
