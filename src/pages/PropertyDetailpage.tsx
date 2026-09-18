import { useState, FormEvent } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { getPropertyBySlug, DEMO_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { ImageLightbox } from '../components/ImageLightbox';
import { RequestViewingModal } from '../components/RequestViewingModal';
import { SEOHead } from '../components/SEOHead';
import {
  Bed,
  Bath,
  Maximize2,
  Bookmark,
  Calendar,
  Phone,
  Mail,
  Share2,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Zap,
  MapPin,
  Check,
  Compass,
  FileText,
  Clock,
  CheckCircle2,
  Maximize,
  Camera
} from 'lucide-react';

interface PropertyDetailPageProps {
  slug: string;
}

export function PropertyDetailPage({ slug }: PropertyDetailPageProps) {
  const { isPropertySaved, toggleSaveProperty } = useRouter();

  const property = getPropertyBySlug(slug) || DEMO_PROPERTIES[0];
  const isSaved = isPropertySaved(property.id);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Viewing Modal state
  const [viewingModalOpen, setViewingModalOpen] = useState(false);

  // Active view tab (Overview, Specs, Floor Plan, Location)
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'floorplan' | 'specs'>('overview');

  // Copy link notification
  const [copiedLink, setCopiedLink] = useState(false);

  // Inline Enquiry state
  const [enquirySent, setEnquirySent] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I would like to receive further architectural particulars and discuss an accompanied private viewing of ${property.title} (${property.priceDisplay}).`
  });

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: `${property.title} | North & Vale Property`,
          text: property.shortDescription,
          url: window.location.href
        })
        .catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  // SEO metadata
  const listingTypeLabel = property.listingType === 'sale' ? 'For Sale' : 'To Rent';
  const seoTitle = `${property.title}, ${property.location.area} ${property.location.postcodeDistrict} | ${listingTypeLabel} | North & Vale`;
  const seoDescription = `${property.bedrooms} bedroom ${property.propertyType.toLowerCase()} ${property.listingType === 'sale' ? 'for sale' : 'to rent'} in ${property.location.fullDisplayLocation}. ${property.priceDisplay} (${property.tenure}). ${property.shortDescription}`;

  // Similar properties in same or nearby area
  const similarProperties = DEMO_PROPERTIES.filter(
    (p) => p.id !== property.id && (p.areaSlug === property.areaSlug || p.listingType === property.listingType)
  ).slice(0, 3);

  const accommodationType = property.propertyType === 'Apartment' ? 'Apartment' : 'SingleFamilyResidence';

  return (
    <div className="bg-[#FDFCF7] min-h-screen pb-20 lg:pb-0">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/properties/${property.slug}`}
        ogImage={property.images[0]?.url}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Properties', url: '/properties' },
          { name: listingTypeLabel, url: `/properties/${property.listingType === 'sale' ? 'for-sale' : 'to-rent'}` },
          { name: property.location.area, url: `/areas/${property.areaSlug}` },
          { name: property.title, url: `/properties/${property.slug}` }
        ]}
        schemaData={[
          {
            '@context': 'https://schema.org',
            '@type': 'RealEstateListing',
            name: property.title,
            description: property.shortDescription,
            url: `https://northvaleproperty.example/properties/${property.slug}`,
            datePosted: property.dateAdded,
            image: property.images.map((i) => i.url),
            offers: {
              '@type': 'Offer',
              price: property.price,
              priceCurrency: 'GBP',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: property.price,
                priceCurrency: 'GBP',
                unitText: property.listingType === 'rent' ? 'MONTH' : undefined
              },
              availability: property.status === 'Available' ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
              businessFunction: property.listingType === 'sale' ? 'http://purl.org/goodrelations/v1#Sell' : 'http://purl.org/goodrelations/v1#LeaseOut'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': accommodationType,
            name: property.title,
            description: property.shortDescription,
            url: `https://northvaleproperty.example/properties/${property.slug}`,
            image: property.images.map((i) => i.url),
            numberOfRooms: property.bedrooms + property.bathrooms + property.receptions,
            numberOfBedrooms: property.bedrooms,
            numberOfBathroomsTotal: property.bathrooms,
            floorSize: {
              '@type': 'QuantitativeValue',
              value: property.floorAreaSqFt,
              unitCode: 'FTK'
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: property.location.fullDisplayLocation,
              addressLocality: property.location.area,
              postalCode: property.location.postcodeDistrict,
              addressCountry: 'GB'
            }
          }
        ]}
      />

      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-[#FAF9F5] border-b border-[#E6E3DB] py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-[#5A5955]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#191B1A] transition-colors">Home</Link>
            <span className="text-[#C4BFB5]">/</span>
            <Link to="/properties" className="hover:text-[#191B1A] transition-colors">Properties</Link>
            <span className="text-[#C4BFB5]">/</span>
            <Link to={`/properties/${property.listingType === 'sale' ? 'for-sale' : 'to-rent'}`} className="hover:text-[#191B1A] transition-colors">
              {property.listingType === 'sale' ? 'For Sale' : 'To Rent'}
            </Link>
            <span className="text-[#C4BFB5]">/</span>
            <Link to={`/areas/${property.areaSlug}`} className="hover:text-[#191B1A] transition-colors">
              {property.location.area}
            </Link>
            <span className="text-[#C4BFB5]">/</span>
            <span className="text-[#191B1A] font-medium truncate max-w-[200px] sm:max-w-xs">{property.title}</span>
          </nav>

          <Link
            to="/properties"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#6F6D65] hover:text-[#191B1A] transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Architectural Photo Hero Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="relative">
          {/* Main Grid: 1 large feature + 2 stacked side images on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 aspect-4/3 sm:aspect-16/10 lg:aspect-21/9 overflow-hidden">
            {/* Primary Facade Image (Large Left) */}
            <div
              className="lg:col-span-8 relative h-full bg-[#191B1A] overflow-hidden group cursor-pointer"
              onClick={() => {
                setActiveImageIndex(0);
                setLightboxOpen(true);
              }}
            >
              <img
                src={property.images[0]?.url}
                alt={property.images[0]?.alt || property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white pointer-events-none">
                <span className="inline-block px-2.5 py-1 bg-[#191B1A]/85 backdrop-blur-xs text-[10px] uppercase tracking-[0.2em] font-medium mb-1.5 text-[#B89358]">
                  Primary Exterior
                </span>
                <p className="text-xs sm:text-sm text-[#FDFCF7] font-light max-w-md hidden sm:block">
                  {property.images[0]?.caption || property.title}
                </p>
              </div>
            </div>

            {/* Side Images (Stacked Right) */}
            <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-3 h-full">
              {property.images.slice(1, 3).map((img, idx) => (
                <div
                  key={`hero-side-${idx}`}
                  className="relative h-full bg-[#191B1A] overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setActiveImageIndex(idx + 1);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-3 left-3 bg-[#191B1A]/80 backdrop-blur-xs text-[#FDFCF7] px-2.5 py-0.5 text-[10px] tracking-wider uppercase font-medium">
                    {img.caption || `View ${idx + 2}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Gallery Trigger Button */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-2">
            <button
              onClick={() => {
                setActiveImageIndex(0);
                setLightboxOpen(true);
              }}
              className="bg-[#191B1A]/90 hover:bg-[#191B1A] text-[#FDFCF7] px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] backdrop-blur-xs shadow-md border border-[#9E7D47]/40 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all min-h-[38px]"
            >
              <Camera className="w-3.5 h-3.5 text-[#B89358]" />
              <span className="hidden sm:inline">View All {property.images.length} Photographs</span>
              <span className="sm:hidden">{property.images.length} Photos</span>
            </button>
          </div>
        </div>

        {/* Thumbnail Strip (Desktop) */}
        <div className="hidden sm:flex items-center gap-2 mt-3 overflow-x-auto pb-2 thin-scrollbar">
          {property.images.map((img, idx) => (
            <button
              key={`thumb-${idx}`}
              onClick={() => {
                setActiveImageIndex(idx);
                setLightboxOpen(true);
              }}
              className={`relative shrink-0 w-24 h-16 overflow-hidden border transition-all ${
                activeImageIndex === idx ? 'border-[#9E7D47] ring-1 ring-[#9E7D47]' : 'border-[#E6E3DB] opacity-80 hover:opacity-100'
              }`}
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Main Details and Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Header: Title, Price, Status, Share */}
            <div className="border-b border-[#E6E3DB] pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#191B1A] text-[#FDFCF7] text-xs uppercase tracking-[0.15em] font-semibold">
                    {property.listingType === 'sale' ? 'For Sale' : 'To Rent'}
                  </span>
                  <span className="px-3 py-1 bg-[#FAF9F5] text-[#191B1A] text-xs uppercase tracking-[0.12em] font-medium border border-[#E6E3DB]">
                    {property.propertyType}
                  </span>
                  {property.status && property.status !== 'Available' && (
                    <span className="px-3 py-1 bg-[#9E7D47] text-white text-xs uppercase tracking-[0.15em] font-semibold">
                      {property.status}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => toggleSaveProperty(property.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs border transition-all ${
                      isSaved
                        ? 'bg-[#9E7D47] text-white border-[#9E7D47]'
                        : 'bg-white text-[#5A5955] border-[#E6E3DB] hover:text-[#191B1A] hover:border-[#191B1A]'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#5A5955] hover:text-[#191B1A] border border-[#E6E3DB] bg-white transition-colors"
                    title="Share listing"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#191B1A] tracking-tight leading-tight">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6F6D65] mt-2 mb-4">
                <MapPin className="w-4 h-4 text-[#9E7D47] shrink-0" />
                <span>{property.location.fullDisplayLocation}</span>
              </div>

              {/* Price & Tenure Row */}
              <div className="flex flex-wrap items-baseline justify-between gap-4 pt-4 border-t border-[#E6E3DB]">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="font-serif text-3xl sm:text-4xl text-[#191B1A] tracking-tight">
                    {property.priceDisplay}
                  </span>
                  {property.priceQualifier && (
                    <span className="text-xs uppercase tracking-wider text-[#78766E] font-medium">
                      ({property.priceQualifier})
                    </span>
                  )}
                </div>

                <div className="text-xs text-[#5A5955] flex items-center gap-1.5">
                  <span className="uppercase tracking-wider font-semibold text-[#9E7D47]">{property.tenure}</span>
                  {property.leaseYearsRemaining && (
                    <span className="text-[#78766E]">({property.leaseYearsRemaining} yrs unexpired)</span>
                  )}
                </div>
              </div>

              {/* Key Specifications Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#E6E3DB]">
                <div className="p-4 bg-[#FAF9F5] border border-[#E6E3DB] text-center">
                  <Bed className="w-5 h-5 text-[#9E7D47] mx-auto mb-1" />
                  <span className="block text-[11px] uppercase tracking-wider text-[#78766E]">Bedrooms</span>
                  <strong className="font-serif text-xl text-[#191B1A] font-normal">{property.bedrooms} Double</strong>
                </div>

                <div className="p-4 bg-[#FAF9F5] border border-[#E6E3DB] text-center">
                  <Bath className="w-5 h-5 text-[#9E7D47] mx-auto mb-1" />
                  <span className="block text-[11px] uppercase tracking-wider text-[#78766E]">Bathrooms</span>
                  <strong className="font-serif text-xl text-[#191B1A] font-normal">{property.bathrooms}</strong>
                </div>

                <div className="p-4 bg-[#FAF9F5] border border-[#E6E3DB] text-center">
                  <Maximize2 className="w-4 h-4 text-[#9E7D47] mx-auto mb-1.5" />
                  <span className="block text-[11px] uppercase tracking-wider text-[#78766E]">Floor Area</span>
                  <strong className="font-serif text-xl text-[#191B1A] font-normal">{property.floorAreaSqFt.toLocaleString()} sq ft</strong>
                </div>

                <div className="p-4 bg-[#FAF9F5] border border-[#E6E3DB] text-center">
                  <Zap className="w-5 h-5 text-[#9E7D47] mx-auto mb-1" />
                  <span className="block text-[11px] uppercase tracking-wider text-[#78766E]">EPC Rating</span>
                  <strong className="font-serif text-xl text-[#191B1A] font-normal">Band {property.epcRating}</strong>
                </div>
              </div>
            </div>

            {/* Content Tabs (Overview, Specifications, Key Features, Area) */}
            <div>
              <div className="flex items-center gap-1 sm:gap-2 border-b border-[#E6E3DB] mb-8 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 px-3 sm:px-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'overview'
                      ? 'border-[#9E7D47] text-[#191B1A]'
                      : 'border-transparent text-[#78766E] hover:text-[#191B1A]'
                  }`}
                >
                  Architectural Narrative
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`pb-3 px-3 sm:px-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'features'
                      ? 'border-[#9E7D47] text-[#191B1A]'
                      : 'border-transparent text-[#78766E] hover:text-[#191B1A]'
                  }`}
                >
                  Features &amp; Finishes
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-3 px-3 sm:px-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'specs'
                      ? 'border-[#9E7D47] text-[#191B1A]'
                      : 'border-transparent text-[#78766E] hover:text-[#191B1A]'
                  }`}
                >
                  UK Specifications
                </button>
                <button
                  onClick={() => setActiveTab('floorplan')}
                  className={`pb-3 px-3 sm:px-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'floorplan'
                      ? 'border-[#9E7D47] text-[#191B1A]'
                      : 'border-transparent text-[#78766E] hover:text-[#191B1A]'
                  }`}
                >
                  Floor Plan Schedule
                </button>
              </div>

              {/* Tab 1: Overview Narrative */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Pull Quote */}
                  <blockquote className="p-6 bg-[#FAF9F5] border-l-2 border-[#9E7D47] text-sm sm:text-base font-serif italic text-[#3A3C3B] leading-relaxed">
                    “{property.shortDescription}”
                  </blockquote>

                  {/* Prose */}
                  <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#3A3C3B] leading-[1.8] space-y-4 font-light">
                    {property.longDescription.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Quick Highlight Cards */}
                  <div className="mt-8 pt-6 border-t border-[#E6E3DB]">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E7D47] font-semibold block mb-3">
                      Selected Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.keyFeatures.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-white border border-[#E6E3DB] text-xs text-[#2C2E2D]">
                          <CheckCircle2 className="w-4 h-4 text-[#9E7D47] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Key Features */}
              {activeTab === 'features' && (
                <div className="space-y-6">
                  <p className="text-xs text-[#6F6D65] leading-relaxed">
                    A comprehensive catalogue of architectural specifications, period features, and integrated fittings curated for this instruction.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#191B1A]">
                    {property.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-4 bg-white border border-[#E6E3DB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab 3: UK Property Information Matrix */}
              {activeTab === 'specs' && (
                <div className="space-y-6">
                  <div className="p-6 bg-white border border-[#E6E3DB]">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E6E3DB] mb-4">
                      <h2 className="text-xs uppercase tracking-[0.18em] text-[#191B1A] font-semibold">
                        UK Statutory Particulars
                      </h2>
                      <span className="text-[11px] text-[#B89358] font-medium bg-[#B89358]/10 px-2 py-0.5 border border-[#B89358]/20">
                        Verified Demonstration Data
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 text-xs">
                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Tenure:</span>
                        <span className="font-medium text-[#191B1A]">{property.tenure}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Council Tax Band:</span>
                        <span className="font-medium text-[#191B1A]">Band {property.councilTaxBand} ({property.location.borough})</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">EPC Energy Rating:</span>
                        <span className="font-medium text-[#191B1A]">Band {property.epcRating}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Internal Gross Area:</span>
                        <span className="font-medium text-[#191B1A]">{property.floorAreaSqFt.toLocaleString()} sq ft ({property.floorAreaSqM} m²)</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Outside Space:</span>
                        <span className="font-medium text-[#191B1A]">{property.specifications.outsideSpace}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Parking:</span>
                        <span className="font-medium text-[#191B1A]">{property.specifications.parking}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Broadband Availability:</span>
                        <span className="font-medium text-[#191B1A]">{property.specifications.broadbandAvailability}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Heating:</span>
                        <span className="font-medium text-[#191B1A]">{property.specifications.heating}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Construction Era:</span>
                        <span className="font-medium text-[#191B1A]">{property.specifications.constructionEra}</span>
                      </div>

                      <div className="flex justify-between py-2 border-b border-[#E6E3DB]/60">
                        <span className="text-[#78766E]">Local Authority:</span>
                        <span className="font-medium text-[#191B1A]">{property.location.borough} London Borough Council</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E6E3DB] flex items-start gap-2 text-[11px] text-[#78766E]">
                      <ShieldAlert className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                      <p>
                        Demonstration Notice: Particulars are compiled for demonstration and web-portfolio evaluation only. They do not constitute an offer or legally binding certification.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Floor Plan Schedule */}
              {activeTab === 'floorplan' && (
                <div className="space-y-6">
                  <div className="p-8 bg-white border border-[#E6E3DB] text-center space-y-4">
                    <FileText className="w-10 h-10 text-[#9E7D47] mx-auto" />
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-[#191B1A]">
                        Measured Floor Area Schedule
                      </h3>
                      <p className="text-xs text-[#78766E] mt-1">
                        Gross Internal Floor Area: {property.floorAreaSqFt.toLocaleString()} sq ft ({property.floorAreaSqM} m²)
                      </p>
                    </div>

                    <div className="max-w-md mx-auto p-4 bg-[#FAF9F5] border border-[#E6E3DB] text-xs text-left space-y-2 text-[#5A5955]">
                      <div className="flex justify-between border-b border-[#E6E3DB]/60 pb-1">
                        <span>Reception / Drawing Room:</span>
                        <strong className="text-[#191B1A]">7.4m × 4.2m (24'3" × 13'9")</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#E6E3DB]/60 pb-1">
                        <span>Kitchen &amp; Breakfast Room:</span>
                        <strong className="text-[#191B1A]">5.8m × 3.9m (19'0" × 12'9")</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#E6E3DB]/60 pb-1">
                        <span>Principal Bedroom:</span>
                        <strong className="text-[#191B1A]">5.1m × 4.1m (16'8" × 13'5")</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#E6E3DB]/60 pb-1">
                        <span>Bedroom Two:</span>
                        <strong className="text-[#191B1A]">4.2m × 3.6m (13'9" × 11'9")</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Outside Garden / Terrace:</span>
                        <strong className="text-[#191B1A]">{property.specifications.outsideSpace}</strong>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#78766E] italic">
                      High-resolution architectural scale drawings and CAD plans are available upon request from our Hampstead office.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Neighbourhood & Area Guide Banner */}
            <div className="p-6 sm:p-8 bg-[#FAF9F5] border border-[#E6E3DB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block mb-1">
                  Neighbourhood Profile
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#191B1A]">
                  Life in {property.location.area}, London
                </h3>
                <p className="text-xs text-[#6F6D65] mt-1.5 leading-relaxed">
                  Discover local architectural heritage, parklands, Underground connections, and premier schools in our comprehensive area guide.
                </p>
              </div>

              <Link
                to={`/areas/${property.areaSlug}`}
                className="shrink-0 px-5 py-3 bg-[#191B1A] hover:bg-[#2A2E2C] text-[#FDFCF7] text-xs uppercase tracking-[0.15em] font-semibold transition-colors"
              >
                Read {property.location.area} Guide &rarr;
              </Link>
            </div>
          </div>

          {/* Right Sidebar: Viewing & Private Client Advisory (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E6E3DB] p-6 sm:p-7 shadow-[0_4px_20px_rgba(28,30,29,0.04)] sticky top-24">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block mb-1">
                Accompanied Inspection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#191B1A] mb-2">
                Arrange a Viewing
              </h2>
              <p className="text-xs text-[#6F6D65] leading-relaxed mb-6 font-light">
                All appointments are accompanied personally by our senior directors, offering comprehensive architectural context and unhurried guidance.
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setViewingModalOpen(true)}
                  className="w-full py-3.5 bg-[#191B1A] hover:bg-[#2A2E2C] text-[#FDFCF7] text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#B89358]" />
                  <span>Book Private Viewing</span>
                </button>

                <a
                  href="tel:+442079460958"
                  className="w-full py-3.5 bg-[#FAF9F5] hover:bg-[#F4F2EB] text-[#191B1A] border border-[#E6E3DB] text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>+44 20 7946 0958</span>
                </a>
              </div>

              {/* Inline Direct Enquiry Box */}
              <div className="mt-8 pt-6 border-t border-[#E6E3DB]">
                <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#191B1A] mb-3">
                  Direct Enquiry Desk
                </h3>

                {enquirySent ? (
                  <div className="p-4 bg-[#4E5D52]/10 border border-[#4E5D52]/30 text-center text-xs space-y-2">
                    <CheckCircle2 className="w-6 h-6 text-[#4E5D52] mx-auto" />
                    <p className="font-semibold text-[#4E5D52]">Enquiry registered.</p>
                    <p className="text-[#5A5955] text-[11px]">A designated partner will reply with full particulars shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-3">
                    <div>
                      <label htmlFor="enquiry-name" className="block text-[10px] uppercase tracking-wider text-[#78766E] mb-1 font-medium">
                        Your Full Name
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#E6E3DB] px-3 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-email" className="block text-[10px] uppercase tracking-wider text-[#78766E] mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        placeholder="eleanor@example.co.uk"
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#E6E3DB] px-3 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-phone" className="block text-[10px] uppercase tracking-wider text-[#78766E] mb-1 font-medium">
                        Phone Number
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        placeholder="+44 7900 123456"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#E6E3DB] px-3 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-message" className="block text-[10px] uppercase tracking-wider text-[#78766E] mb-1 font-medium">
                        Particulars Request
                      </label>
                      <textarea
                        id="enquiry-message"
                        rows={2}
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#E6E3DB] px-3 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#9E7D47] hover:bg-[#B89358] text-[#141615] text-xs uppercase tracking-[0.18em] font-semibold transition-colors cursor-pointer"
                    >
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>

              {/* Office Contact Note */}
              <div className="mt-6 pt-4 border-t border-[#E6E3DB] text-[11px] text-[#78766E] space-y-1">
                <p><strong className="text-[#191B1A]">North &amp; Vale Property</strong></p>
                <p>14 Heath Street, Hampstead, London NW3 6TE</p>
                <p className="text-[10px] text-[#9E9B93]">Senior directors attend all viewings personally.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Residences Section */}
        {similarProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E6E3DB]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] font-semibold block">
                  Complementary Instructions
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#191B1A] font-normal mt-1">
                  Similar London Residences
                </h2>
              </div>
              <Link
                to="/properties"
                className="mt-3 sm:mt-0 text-xs uppercase tracking-wider font-semibold text-[#191B1A] hover:text-[#9E7D47] transition-colors"
              >
                View Full Portfolio &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Floating Action Bar for effortless mobile conversion */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E6E3DB] p-2.5 sm:p-3 shadow-lg flex items-center gap-2.5 sm:gap-3">
        <button
          onClick={() => setViewingModalOpen(true)}
          className="flex-1 min-h-[44px] py-2.5 sm:py-3 bg-[#191B1A] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-[#B89358]" />
          <span>Book Viewing</span>
        </button>
        <a
          href="tel:+442079460958"
          className="px-3.5 sm:px-4 min-h-[44px] py-2.5 sm:py-3 bg-[#FAF9F5] text-[#191B1A] border border-[#E6E3DB] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
          aria-label="Call North & Vale Property"
        >
          <Phone className="w-3.5 h-3.5 text-[#9E7D47]" />
          <span className="hidden sm:inline">Call Office</span>
        </a>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={property.images}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(idx) => setActiveImageIndex(idx)}
      />

      {/* Request Viewing Modal */}
      <RequestViewingModal
        property={property}
        isOpen={viewingModalOpen}
        onClose={() => setViewingModalOpen(false)}
      />
    </div>
  );
}
