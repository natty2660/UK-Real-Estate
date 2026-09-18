import { Link } from '../context/RouterContext';
import { AGENCY_SERVICES } from '../data/services';
import { SEOHead } from '../components/SEOHead';
import {
  Building2,
  KeyRound,
  ShieldCheck,
  Compass,
  Wrench,
  CheckCircle2,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export function ServicesPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'selling':
        return <Building2 className="w-6 h-6 text-[#9E7D47]" />;
      case 'lettings':
        return <KeyRound className="w-6 h-6 text-[#9E7D47]" />;
      case 'landlord-services':
        return <ShieldCheck className="w-6 h-6 text-[#9E7D47]" />;
      case 'buying':
        return <Compass className="w-6 h-6 text-[#9E7D47]" />;
      case 'property-management':
        return <Wrench className="w-6 h-6 text-[#9E7D47]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#9E7D47]" />;
    }
  };

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title="Estate Agency & Lettings Services London | North & Vale Property"
        description="Comprehensive prime London property services: residential sales, lettings, landlord compliance, property management, and bespoke buyer advisory."
        canonicalPath="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'North & Vale Property Agency Services',
          description: 'Comprehensive residential estate agency and lettings services in London.',
          itemListElement: AGENCY_SERVICES.map((s, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Service',
              name: s.title,
              description: s.shortSummary,
              url: `https://northvaleproperty.example/services#${s.slug}`,
              provider: {
                '@type': 'RealEstateAgent',
                name: 'North & Vale Property'
              }
            }
          }))
        }}
      />

      {/* Header */}
      <section className="bg-[#1C1E1D] text-[#FDFCF7] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7]">Home</Link>
            <span>/</span>
            <span className="text-[#D5D1C6]">Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold">
              Bespoke Residential Stewardship
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFCF7] mt-1 leading-tight">
              Our Services
            </h1>
            <p className="text-xs sm:text-sm text-[#D5D1C6] font-light mt-3 leading-relaxed">
              We provide deliberate, high-touch property representation across London sales, lettings, management, and buyer advisory—rooted in local insight and partner-level commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {AGENCY_SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.slug}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 scroll-mt-24 pb-16 ${
              index !== AGENCY_SERVICES.length - 1 ? 'border-b border-[#E8E5DD]' : ''
            }`}
          >
            {/* Header info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 bg-[#F4F2EB] border border-[#E8E5DD] flex items-center justify-center">
                {getIcon(service.id)}
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
                  Service 0{index + 1}
                </span>
                <h2 className="font-serif text-3xl font-normal text-[#1C1E1D] mt-1">
                  {service.title}
                </h2>
              </div>

              <p className="text-sm text-[#5A5955] leading-relaxed">
                {service.shortSummary}
              </p>

              <div className="pt-2">
                <Link
                  to={service.id === 'selling' || service.id === 'lettings' ? '/valuation' : '/contact'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>
                    {service.id === 'selling'
                      ? 'Request Sales Valuation'
                      : service.id === 'lettings'
                      ? 'Request Rental Appraisal'
                      : 'Consult Our Team'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Details & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3 text-xs sm:text-sm text-[#3A3C3B] leading-relaxed">
                {service.fullDescription.map((desc, dIdx) => (
                  <p key={dIdx}>{desc}</p>
                ))}
              </div>

              <div className="p-6 bg-[#F4F2EB] border border-[#E8E5DD] space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1E1D]">
                  Scope of Service &amp; Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4A4C4A]">
                  {service.deliverables.map((item, itmIdx) => (
                    <div key={itmIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-[#1C1E1D] text-[#FDFCF7] py-16 px-4 text-center border-t border-[#2A2E2C]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-widest text-[#B89358] font-semibold">
            Confidential Consultations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FDFCF7] font-normal mt-1 mb-3">
            Speak directly with a North &amp; Vale director
          </h2>
          <p className="text-xs sm:text-sm text-[#D5D1C6] leading-relaxed mb-6 font-light max-w-xl mx-auto">
            We are always pleased to discuss prospective sales, corporate lettings, or portfolio management across North and Central London.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/valuation"
              className="px-8 py-3.5 bg-[#9E7D47] text-[#141615] text-xs uppercase tracking-widest font-semibold hover:bg-[#B89358] transition-colors"
            >
              Request a Valuation
            </Link>
            <a
              href="tel:+442079460958"
              className="px-8 py-3.5 bg-transparent border border-[#E8E5DD]/30 text-[#FDFCF7] text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B89358]" />
              <span>+44 20 7946 0958</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
