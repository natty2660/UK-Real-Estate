import React, { useState } from 'react';
import { Property } from '../types';
import { useRouter, Link } from '../context/RouterContext';
import { Bed, Bath, Maximize2, Bookmark, MapPin, Camera } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
  key?: React.Key;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const { isPropertySaved, toggleSaveProperty, navigate } = useRouter();
  const saved = isPropertySaved(property.id);
  const [imageLoaded, setImageLoaded] = useState(false);

  const mainImage = property.images[0] || {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: property.title
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveProperty(property.id);
  };

  const handleCardClick = () => {
    navigate(`/properties/${property.slug}`);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group bg-white border border-[#E6E3DB] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#9E7D47]/70 hover:shadow-[0_8px_24px_rgba(28,30,29,0.06)] relative"
    >
      <div>
        {/* Architectural Image Container */}
        <div className="relative aspect-4/3 overflow-hidden bg-[#F4F2EB]">
          <img
            src={mainImage.url}
            alt={mainImage.alt || property.title}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
            }}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Understated Status Pills */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 pointer-events-none z-10">
            <span className="px-2.5 py-1 bg-[#191B1A]/90 backdrop-blur-xs text-[#FDFCF7] text-[10px] tracking-[0.15em] uppercase font-semibold">
              {property.listingType === 'sale' ? 'For Sale' : 'To Rent'}
            </span>
            {property.status && property.status !== 'Available' ? (
              <span className="px-2.5 py-1 bg-[#9E7D47] text-[#FDFCF7] text-[10px] tracking-[0.15em] uppercase font-semibold">
                {property.status}
              </span>
            ) : (
              <span className="px-2 py-1 bg-white/90 backdrop-blur-xs text-[#191B1A] text-[10px] tracking-[0.12em] uppercase font-medium border border-[#E6E3DB]/80 hidden sm:inline-block">
                {property.propertyType}
              </span>
            )}
          </div>

          {/* Photo Counter Pill */}
          <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#191B1A]/80 backdrop-blur-xs text-white text-[10px] tracking-wider uppercase font-medium flex items-center gap-1 pointer-events-none z-10">
            <Camera className="w-3 h-3 text-[#B89358]" />
            <span>{property.images.length} Photos</span>
          </div>

          {/* Save / Shortlist Button */}
          <button
            type="button"
            onClick={handleBookmark}
            className={`absolute top-2.5 right-2.5 w-10 h-10 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 z-20 cursor-pointer ${
              saved
                ? 'bg-[#9E7D47] text-white shadow-sm'
                : 'bg-white/90 text-[#191B1A] hover:bg-white hover:text-[#9E7D47] shadow-xs'
            }`}
            aria-label={saved ? 'Remove from shortlist' : 'Save property to shortlist'}
            title={saved ? 'Saved in your shortlist' : 'Save to shortlist'}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Price & Tenure */}
            <div className="flex items-baseline justify-between gap-2 mb-1.5">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-serif text-2xl sm:text-[26px] font-normal text-[#191B1A] tracking-tight leading-none">
                  {property.priceDisplay}
                </span>
                {property.priceQualifier && (
                  <span className="text-[11px] text-[#78766E] uppercase tracking-wider font-medium">
                    {property.priceQualifier}
                  </span>
                )}
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#9E7D47] font-semibold shrink-0">
                {property.tenure}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg sm:text-xl font-medium text-[#191B1A] group-hover:text-[#9E7D47] transition-colors leading-snug mt-1">
              <Link
                to={`/properties/${property.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="hover:underline focus:outline-hidden"
              >
                {property.title}
              </Link>
            </h3>

            {/* Street & Enclave Location */}
            <div className="flex items-center gap-1.5 text-xs text-[#5A5955] mt-1.5 mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#9E7D47] shrink-0" />
              <span className="truncate">{property.location.fullDisplayLocation}</span>
            </div>

            {/* Editorial One-Liner */}
            <p className="text-xs text-[#6F6D65] line-clamp-2 leading-relaxed mb-4 font-light">
              {property.subtitle || property.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Specifications Footer */}
      <div className="px-4 sm:px-6 py-3.5 bg-[#FAF9F5] border-t border-[#E6E3DB] flex items-center justify-between text-xs text-[#5A5955]">
        <div className="flex items-center gap-4 sm:gap-5">
          <span className="flex items-center gap-1.5" title={`${property.bedrooms} Bedrooms`}>
            <Bed className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span className="font-medium text-[#191B1A]">{property.bedrooms}</span>
            <span className="text-[#78766E] text-[11px] hidden sm:inline">beds</span>
          </span>
          <span className="flex items-center gap-1.5" title={`${property.bathrooms} Bathrooms`}>
            <Bath className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span className="font-medium text-[#191B1A]">{property.bathrooms}</span>
            <span className="text-[#78766E] text-[11px] hidden sm:inline">baths</span>
          </span>
          <span className="flex items-center gap-1.5" title={`${property.floorAreaSqFt} sq ft`}>
            <Maximize2 className="w-3 h-3 text-[#9E7D47]" />
            <span className="font-medium text-[#191B1A]">{property.floorAreaSqFt.toLocaleString()}</span>
            <span className="text-[#78766E] text-[11px]">sq ft</span>
          </span>
        </div>

        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#191B1A] group-hover:text-[#9E7D47] transition-colors flex items-center gap-1">
          <span>Details</span>
          <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </span>
      </div>
    </article>
  );
}
