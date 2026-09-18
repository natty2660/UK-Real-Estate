import { Link } from '../context/RouterContext';
import { TEAM_MEMBERS, AGENCY_VALUES } from '../data/team';
import { SEOHead } from '../components/SEOHead';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

export function AboutPage() {
  const getValIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#9E7D47]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#9E7D47]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#9E7D47]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#9E7D47]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#9E7D47]" />;
    }
  };

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title="About North & Vale Property | Independent London Estate Agency"
        description="Learn about North & Vale Property, an independent London estate and letting agency dedicated to architectural homes, thoughtful presentation, and senior partner stewardship."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About North & Vale Property',
          description: 'Independent London estate and letting agency dedicated to architectural residences and partner-level stewardship.',
          url: 'https://northvaleproperty.example/about',
          mainEntity: {
            '@type': 'RealEstateAgent',
            name: 'North & Vale Property',
            description: 'Independent London estate agency founded on architectural literacy, partner-level representation, and micro-market analysis.',
            url: 'https://northvaleproperty.example/',
            employee: TEAM_MEMBERS.map((m) => ({
              '@type': 'Person',
              name: m.name,
              jobTitle: m.role,
              description: m.bio
            }))
          }
        }}
      />

      {/* Hero Header */}
      <section className="bg-[#1C1E1D] text-[#FDFCF7] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7]">Home</Link>
            <span>/</span>
            <span className="text-[#D5D1C6]">About</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold">
              Independent Heritage &amp; Ethos
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FDFCF7] mt-1 leading-tight">
              An independent practice born from respect for London architecture.
            </h1>
            <p className="text-sm sm:text-base text-[#D5D1C6] font-light mt-4 leading-relaxed">
              North &amp; Vale was established to offer an alternative to volume agency culture—bringing an unhurried, design-led editorial sensibility to residential sales and lettings across London.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
              Our Foundations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1E1D] leading-snug">
              Every home has a character. Our role is to articulate it with clarity and restraint.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#4A4C4A] leading-relaxed">
              <p>
                Too often, London property is presented through distorted wide-angle optics and hollow superlatives. At North &amp; Vale, we believe that discerning purchasers and tenants respond to authenticity: honest architectural photography, floor plans with measured accuracy, and informed local context.
              </p>
              <p>
                From our Hampstead office, we advise vendors, landlords, and acquiring purchasers throughout Hampstead, Highgate, Islington, Camden, and Stoke Newington. By maintaining a deliberately measured client register, our directors personally attend viewings, negotiate offers, and oversee sales progression through to exchange.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 overflow-hidden border border-[#E8E5DD] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Classic Georgian architecture and natural light"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-[#F4F2EB] border-y border-[#E8E5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
              The Guiding Tenets
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E1D] font-normal mt-1">
              How We Work
            </h2>
            <p className="text-xs sm:text-sm text-[#78766E] mt-3">
              Principles forged over decades in the prime London residential sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_VALUES.map((val, idx) => (
              <div key={idx} className="bg-[#FDFCF7] border border-[#E8E5DD] p-6 space-y-3">
                <div className="w-10 h-10 bg-[#F4F2EB] border border-[#E8E5DD] flex items-center justify-center">
                  {getValIcon(val.icon)}
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1C1E1D]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#5A5955] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
            Senior Stewardship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E1D] font-normal mt-1">
            Our Senior Practice
          </h2>
          <p className="text-xs sm:text-sm text-[#78766E] mt-3 leading-relaxed">
            Every transaction is led directly by an experienced partner with deep local roots and an unwavering commitment to our clients’ best interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-[#FDFCF7] border border-[#E8E5DD] overflow-hidden flex flex-col">
              <div className="aspect-4/5 overflow-hidden bg-[#1C1E1D]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#1C1E1D]">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#9E7D47] font-medium mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#5A5955] leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8E5DD] text-[11px] text-[#78766E]">
                  <p><strong className="text-[#1C1E1D]">Specialism:</strong> {member.specialism}</p>
                  <p className="mt-1 font-mono text-[#9E7D47]">{member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redress & Professionalism Assurance */}
      <section className="py-16 bg-[#F4F2EB] border-t border-[#E8E5DD]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <Award className="w-8 h-8 text-[#9E7D47] mx-auto" />
          <h2 className="font-serif text-2xl font-normal text-[#1C1E1D]">
            Professional Standards &amp; Client Protection
          </h2>
          <p className="text-xs text-[#5A5955] leading-relaxed max-w-2xl mx-auto">
            North &amp; Vale adheres strictly to UK estate agency codes of practice. In accordance with statutory requirements for professional independent agencies, we endorse client money protection safeguards, continuous anti-money laundering compliance, and transparent fee schedules.
          </p>
          <div className="pt-2 flex justify-center gap-6 text-[11px] text-[#78766E] font-medium uppercase tracking-wider">
            <span>The Property Ombudsman</span>
            <span>•</span>
            <span>Client Money Protect</span>
            <span>•</span>
            <span>UK Redress Scheme</span>
          </div>
        </div>
      </section>
    </div>
  );
}
