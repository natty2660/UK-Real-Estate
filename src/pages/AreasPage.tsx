import { Link } from '../context/RouterContext';
import { AREA_GUIDES } from '../data/areas';
import { DEMO_PROPERTIES } from '../data/properties';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';

export function AreasPage() {
  const areasList = Object.values(AREA_GUIDES);

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title="London Area Guides | Hampstead, Highgate, Islington, Camden & Stoke Newington | North & Vale"
        description="In-depth London neighbourhood guides covering architectural heritage, transport connections, green spaces, schools, and lifestyle across Hampstead, Highgate, Islington, Camden, and Stoke Newington."
        canonicalPath="/areas"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Area Guides', url: '/areas' }
        ]}
      />

      <section className="bg-[#1C1E1D] text-[#FDFCF7] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7]">Home</Link>
            <span>/</span>
            <span className="text-[#D5D1C6]">Area Guides</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold">
              North &amp; Central London Enclaves
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFCF7] mt-1 leading-tight">
              London Area Guides &amp; Neighbourhood Profiles
            </h1>
            <p className="text-xs sm:text-sm text-[#D5D1C6] font-light mt-3 leading-relaxed">
              An architectural and lifestyle appraisal of London’s celebrated residential villages, from the ancient heathlands of Hampstead and Highgate to the Georgian squares of Islington.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {areasList.map((area, idx) => {
          const areaProperties = DEMO_PROPERTIES.filter((p) => p.areaSlug === area.slug);

          return (
            <article
              key={area.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 ${
                idx !== areasList.length - 1 ? 'border-b border-[#E8E5DD]' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-16/10 overflow-hidden border border-[#E8E5DD] shadow-md group">
                  <img
                    src={area.heroImage}
                    alt={`${area.name}, London architectural street scene`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1D]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] tracking-widest uppercase text-[#B89358] font-medium block">
                      North London Enclave
                    </span>
                    <h2 className="font-serif text-3xl font-normal text-white">
                      {area.name}
                    </h2>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
                    {area.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1E1D] font-normal mt-1">
                    Living in {area.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5A5955] leading-relaxed">
                  {area.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to={`/areas/${area.slug}`}
                    className="px-6 py-3 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    <span>Read Full {area.name} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/properties?area=${area.slug}`}
                    className="px-6 py-3 bg-[#F4F2EB] hover:bg-[#E8E5DD] text-[#1C1E1D] border border-[#E8E5DD] text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    View Properties ({areaProperties.length})
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}