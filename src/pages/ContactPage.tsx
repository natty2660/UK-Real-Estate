import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Building2,
  Compass,
  ArrowRight
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'Sales Enquiry',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title="Contact North & Vale Property | London Estate & Letting Agency"
        description="Get in touch with North & Vale Property in Hampstead, London. Speak with our sales, lettings, and valuation directors regarding prime London residential property."
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact North & Vale Property',
          description: 'Contact details and enquiry desk for North & Vale Property in Hampstead, London.',
          url: 'https://northvaleproperty.example/contact',
          mainEntity: {
            '@type': 'RealEstateAgent',
            name: 'North & Vale Property',
            telephone: '+44 20 7946 0958',
            email: 'hello@northvaleproperty.example',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '14 Heath Street',
              addressLocality: 'Hampstead, London',
              postalCode: 'NW3 6TE',
              addressCountry: 'GB'
            }
          }
        }}
      />

      {/* Hero Header */}
      <section className="bg-[#1C1E1D] text-[#FDFCF7] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7]">Home</Link>
            <span>/</span>
            <span className="text-[#D5D1C6]">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89358] font-semibold">
              London Advisory Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFCF7] mt-1 leading-tight">
              Contact North &amp; Vale
            </h1>
            <p className="text-xs sm:text-sm text-[#D5D1C6] font-light mt-3 leading-relaxed">
              We welcome enquiries from homeowners, landlords, prospective purchasers, and tenants. Our senior directors are available in person at our Hampstead office or by telephone and email.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-10 border border-[#E8E5DD] bg-[#FDFCF7] shadow-lg space-y-6">
                <div className="w-16 h-16 bg-[#4E5D52]/10 border border-[#4E5D52]/30 rounded-full flex items-center justify-center text-[#4E5D52]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
                    Message Dispatched
                  </span>
                  <h2 className="font-serif text-3xl font-normal text-[#1C1E1D] mt-1">
                    Thank you, {formData.name}.
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#5A5955] leading-relaxed">
                  Your message regarding <strong className="text-[#1C1E1D]">{formData.enquiryType}</strong> has been received by our London team. A director will review your enquiry and respond promptly.
                </p>

                <div className="p-4 bg-[#F4F2EB] border border-[#E8E5DD] text-xs text-[#5A5955] italic">
                  Demonstration Notice: In production, our client concierge registers this enquiry and triggers an SMS/email notification to the relevant department head.
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#1C1E1D] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold hover:bg-[#2F3331] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 sm:p-10 border border-[#E8E5DD] bg-[#FDFCF7] shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                  General &amp; Advisory Enquiries
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1E1D] mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Julian Ross"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="julian@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+44 20 7000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-type" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                        Nature of Enquiry
                      </label>
                      <select
                        id="contact-type"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                      >
                        <option value="Sales Enquiry">Sales &amp; Acquisitions</option>
                        <option value="Lettings Enquiry">Residential Lettings</option>
                        <option value="Valuation Request">Property Valuation</option>
                        <option value="Property Management">Property Management</option>
                        <option value="General Enquiry">General / Press Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Enquiry regarding off-market properties in Highgate"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-medium text-[#5A5955] mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Please outline your enquiry or property details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3.5 py-2.5 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                    >
                      Send Message
                    </button>
                  </div>

                  <p className="text-[11px] text-[#78766E] text-center">
                    Demonstration website form. We treat all property consultations with strict confidentiality.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Office Address, Hours, Area Coverage */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info Card */}
            <div className="p-8 bg-[#F4F2EB] border border-[#E8E5DD] space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold block mb-1">
                  Hampstead Office
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#1C1E1D]">
                  North &amp; Vale Property
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#5A5955]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1E1D] block">Address:</strong>
                    <span>14 Heath Street, Hampstead, London NW3 6TE</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1E1D] block">Telephone:</strong>
                    <a href="tel:+442079460958" className="hover:text-[#9E7D47]">
                      +44 20 7946 0958
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1E1D] block">Email:</strong>
                    <a href="mailto:hello@northvaleproperty.example" className="hover:text-[#9E7D47]">
                      hello@northvaleproperty.example
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#E8E5DD]">
                  <Clock className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1E1D] block mb-1">Opening Hours:</strong>
                    <p>Monday – Friday: 09:00 – 18:30</p>
                    <p>Saturday: 10:00 – 16:00</p>
                    <p>Sunday: By private appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="p-6 bg-[#FDFCF7] border border-[#E8E5DD] space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#9E7D47] font-semibold block">
                Primary Coverage Enclaves
              </span>
              <h4 className="font-serif text-lg font-normal text-[#1C1E1D]">
                Where We Operate
              </h4>
              <p className="text-xs text-[#5A5955] leading-relaxed">
                We handle instructions across North London and Prime Central London, focusing specifically on:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Hampstead (NW3)', 'Highgate (N6)', 'Islington (N1)', 'Camden (NW1)', 'Stoke Newington (N16)', 'Primrose Hill (NW1)', 'Belsize Park (NW3)'].map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#F4F2EB] text-[#1C1E1D] border border-[#E8E5DD] text-[11px]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
