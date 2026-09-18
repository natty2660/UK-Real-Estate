import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ValuationFormData } from '../types';
import { SEOHead } from '../components/SEOHead';
import {
  CheckCircle2,
  Calendar,
  Building2,
  ShieldCheck,
  Clock,
  HelpCircle,
  PhoneCall,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export function ValuationPage() {
  const [formData, setFormData] = useState<ValuationFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    postcode: '',
    serviceRequired: 'Selling',
    propertyType: 'House',
    bedrooms: '3',
    timeframe: '1-3 months',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `NV-VAL-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceId(ref);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'Is the valuation complimentary and without obligation?',
      a: 'Yes. Our market appraisals—whether for potential sale, residential letting, or strategic planning—are entirely complimentary and carry zero obligation to instruct North & Vale.'
    },
    {
      q: 'How do you determine the recommended valuation figure?',
      a: 'We reject algorithm-only estimates. Our directors combine current Land Registry completed price data, verified competitive under-offer transactions in your street, architectural attributes, condition, and active prime buyer demand.'
    },
    {
      q: 'Can you provide discreet off-market guidance?',
      a: 'Absolutely. Many of our high-value London transactions take place confidentially through our private client network without public portal marketing or external signboards.'
    },
    {
      q: 'How long does an in-person appraisal take?',
      a: 'An in-person appraisal typically takes between 40 to 60 minutes. This provides sufficient time to walk the residence, assess bespoke features, discuss recent improvements, and understand your timeline.'
    }
  ];

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title="Request a Property Valuation in London | Sales & Lettings | North & Vale"
        description="Book a complimentary, confidential property valuation for your London home. Independent sales and rental appraisals across Hampstead, Highgate, Islington and Central London."
        canonicalPath="/valuation"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Property Valuation', url: '/valuation' }
        ]}
        schemaData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Residential Property Valuation & Market Appraisal',
            description: 'Complimentary, confidential property market appraisal for sales and lettings across North and Central London.',
            provider: {
              '@type': 'RealEstateAgent',
              name: 'North & Vale Property',
              url: 'https://northvaleproperty.example/'
            },
            areaServed: ['Hampstead', 'Highgate', 'Islington', 'Camden', 'Stoke Newington', 'North London'],
            serviceType: 'Property Appraisal'
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          }
        ]}
      />

      {/* Header */}
      <section className="bg-[#1C1E1D] text-[#FDFCF7] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7]">Home</Link>
            <span>/</span>
            <span className="text-[#D5D1C6]">Valuation</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold">
              Complimentary Market Appraisal
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFCF7] mt-1 leading-tight">
              Request a Property Valuation
            </h1>
            <p className="text-xs sm:text-sm text-[#D5D1C6] font-light mt-3 leading-relaxed">
              Discover the current market value of your residence. We combine granular Land Registry evidence, micro-market knowledge, and buyer intelligence to provide an honest, actionable appraisal.
            </p>
          </div>
        </div>
      </section>

      {/* Content Form and Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form or Confirmation */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-10 border border-[#E8E5DD] bg-[#FDFCF7] shadow-lg space-y-6">
                <div className="w-16 h-16 bg-[#4E5D52]/10 border border-[#4E5D52]/30 rounded-full flex items-center justify-center text-[#4E5D52]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
                    Appraisal Request Submitted
                  </span>
                  <h2 className="font-serif text-3xl font-normal text-[#1C1E1D] mt-1">
                    Thank you, {formData.fullName}.
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#5A5955] leading-relaxed">
                  Your valuation request for <strong className="text-[#1C1E1D]">{formData.propertyAddress}, {formData.postcode}</strong> has been received by our North London advisory practice.
                </p>

                <div className="p-5 bg-[#F4F2EB] border border-[#E8E5DD] text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#78766E]">Reference Code:</span>
                    <span className="font-mono font-medium text-[#1C1E1D]">{referenceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78766E]">Service:</span>
                    <span className="text-[#1C1E1D] font-medium">{formData.serviceRequired} Valuation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78766E]">Property:</span>
                    <span className="text-[#1C1E1D]">{formData.bedrooms} Bed {formData.propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78766E]">Timeline:</span>
                    <span className="text-[#1C1E1D]">{formData.timeframe}</span>
                  </div>
                </div>

                <p className="text-xs text-[#78766E] italic">
                  Demonstration Notice: In a live environment, a designated senior partner would contact you within one business day to confirm an appointment date and prepare comparative transaction particulars.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#1C1E1D] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold hover:bg-[#2F3331] transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    to="/properties"
                    className="px-6 py-3 bg-[#F4F2EB] border border-[#E8E5DD] text-[#1C1E1D] text-xs uppercase tracking-wider font-medium hover:bg-[#E8E5DD] transition-colors"
                  >
                    Explore Properties
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-8 sm:p-10 border border-[#E8E5DD] bg-[#FDFCF7] shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                  Step 1 of 1 • Booking Form
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1E1D] mb-6">
                  Tell us about your property
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="val-name" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="val-name"
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="val-email" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Email Address *
                      </label>
                      <input
                        id="val-email"
                        type="email"
                        required
                        placeholder="eleanor@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="val-phone" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="val-phone"
                        type="tel"
                        required
                        placeholder="+44 7900 123456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="val-postcode" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Postcode *
                      </label>
                      <input
                        id="val-postcode"
                        type="text"
                        required
                        placeholder="e.g. NW3 6TE"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="val-address" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                      Property Street Address *
                    </label>
                    <input
                      id="val-address"
                      type="text"
                      required
                      placeholder="e.g. 24 Church Row, Hampstead, London"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="val-service" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Service Required
                      </label>
                      <select
                        id="val-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value as any })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      >
                        <option value="Selling">Selling Only</option>
                        <option value="Letting">Letting Only</option>
                        <option value="Both">Both Selling &amp; Letting</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="val-proptype" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Property Type
                      </label>
                      <select
                        id="val-proptype"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      >
                        <option value="House">House / Terraced / Villa</option>
                        <option value="Flat / Apartment">Flat / Lateral Apartment</option>
                        <option value="Maisonette">Maisonette</option>
                        <option value="Other">Other Unique Residence</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="val-bedrooms" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Bedrooms
                      </label>
                      <select
                        id="val-bedrooms"
                        value={formData.bedrooms}
                        onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      >
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                        <option value="5+">5+ Bedrooms</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label htmlFor="val-timeframe" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                      Estimated Moving Timeframe
                    </label>
                    <select
                      id="val-timeframe"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value as any })}
                      className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                    >
                      <option value="Immediate">Immediate (Within 4 weeks)</option>
                      <option value="1-3 months">1 to 3 months</option>
                      <option value="3-6 months">3 to 6 months</option>
                      <option value="Just curious">Just curious / Exploring options</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="val-notes" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                      Particulars, Extensions or Specific Queries
                    </label>
                    <textarea
                      id="val-notes"
                      rows={3}
                      placeholder="e.g. Recently refurbished kitchen, private garden, Grade II listed features, looking for off-market advice..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-md"
                    >
                      Request Complimentary Valuation
                    </button>
                  </div>

                  <p className="text-[11px] text-[#78766E] text-center">
                    Demonstration form. No data is sent to external servers. No marketing spam.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Process & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            {/* The Process */}
            <div className="p-8 bg-[#F4F2EB] border border-[#E8E5DD] space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
                Our Valuation Methodology
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1C1E1D]">
                How we appraise your home
              </h3>

              <div className="space-y-6 text-xs text-[#5A5955]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1C1E1D] text-[#FDFCF7] flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1C1E1D] uppercase tracking-wider text-[11px] mb-1">
                      Comparable Market Intelligence
                    </h4>
                    <p className="leading-relaxed">
                      We examine verified Land Registry sale prices and off-market intelligence specific to your immediate enclave.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1C1E1D] text-[#FDFCF7] flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1C1E1D] uppercase tracking-wider text-[11px] mb-1">
                      In-Person Architectural Appraisal
                    </h4>
                    <p className="leading-relaxed">
                      A senior director visits at your convenience to evaluate natural light, structural improvements, ceiling heights, and finishes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1C1E1D] text-[#FDFCF7] flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1C1E1D] uppercase tracking-wider text-[11px] mb-1">
                      Tailored Strategy &amp; Pricing
                    </h4>
                    <p className="leading-relaxed">
                      We provide a written appraisal document outlining guide pricing, optimal launch timing, and target buyer demographics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-6 border border-[#E8E5DD] bg-[#FDFCF7]">
              <span className="text-[10px] uppercase tracking-widest text-[#9E7D47] font-semibold block mb-2">
                Client Reflection • Hampstead NW3
              </span>
              <p className="font-serif text-sm italic text-[#2C2E2D] leading-relaxed">
                “North &amp; Vale’s initial valuation was refreshing in its honesty. Rather than promising an impossible headline figure, they provided rigorous comparable evidence and delivered the exact price within three weeks.”
              </p>
              <span className="text-[11px] text-[#78766E] block mt-3 font-medium">
                — Vendor, Church Row
              </span>
            </div>

            {/* Direct Telephone */}
            <div className="p-6 bg-[#1C1E1D] text-[#FDFCF7] border border-[#2A2E2C]">
              <span className="text-[10px] uppercase tracking-widest text-[#B89358] font-semibold block mb-1">
                Prefer to speak directly?
              </span>
              <h4 className="font-serif text-xl font-normal text-[#FDFCF7] mb-2">
                Call our senior advisory desk
              </h4>
              <p className="text-xs text-[#D5D1C6] leading-relaxed mb-4 font-light">
                Our directors are available during office hours for an informal, exploratory conversation.
              </p>
              <a
                href="tel:+442079460958"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89358] hover:text-[#D5D1C6] transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+44 20 7946 0958</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="mt-20 pt-12 border-t border-[#E8E5DD] max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1E1D] mt-1">
              Valuation Questions Answered
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-[#E8E5DD] bg-[#FDFCF7]">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base text-[#1C1E1D] font-normal">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9E7D47] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#5A5955] leading-relaxed border-t border-[#E8E5DD]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
