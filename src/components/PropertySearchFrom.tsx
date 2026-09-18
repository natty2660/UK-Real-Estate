import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Search, RotateCcw, SlidersHorizontal, MapPin } from 'lucide-react';
import { SearchFilterState } from '../types';

interface PropertySearchFormProps {
  initialFilters?: Partial<SearchFilterState>;
  onFilterChange?: (filters: SearchFilterState) => void;
  compact?: boolean;
}

export function PropertySearchForm({
  initialFilters,
  onFilterChange,
  compact = false
}: PropertySearchFormProps) {
  const { navigate } = useRouter();

  const [filters, setFilters] = useState<SearchFilterState>({
    listingType: initialFilters?.listingType || 'all',
    area: initialFilters?.area || 'all',
    propertyType: initialFilters?.propertyType || 'all',
    minPrice: initialFilters?.minPrice || '',
    maxPrice: initialFilters?.maxPrice || '',
    bedrooms: initialFilters?.bedrooms || 'all',
    query: initialFilters?.query || '',
    sortBy: initialFilters?.sortBy || 'featured'
  });

  const handleChange = (field: keyof SearchFilterState, value: string) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    if (onFilterChange) {
      onFilterChange(updated);
    }
  };

  const handleReset = () => {
    const resetState: SearchFilterState = {
      listingType: 'all',
      area: 'all',
      propertyType: 'all',
      minPrice: '',
      maxPrice: '',
      bedrooms: 'all',
      query: '',
      sortBy: 'featured'
    };
    setFilters(resetState);
    if (onFilterChange) {
      onFilterChange(resetState);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange(filters);
    } else {
      let targetPath = '/properties';
      if (filters.listingType === 'sale') targetPath = '/properties/for-sale';
      if (filters.listingType === 'rent') targetPath = '/properties/to-rent';

      const params = new URLSearchParams();
      if (filters.area !== 'all') params.set('area', filters.area);
      if (filters.propertyType !== 'all') params.set('type', filters.propertyType);
      if (filters.bedrooms !== 'all') params.set('beds', filters.bedrooms);
      if (filters.minPrice) params.set('minPrice', filters.minPrice);
      if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
      if (filters.query.trim()) params.set('q', filters.query.trim());

      const qs = params.toString();
      navigate(`${targetPath}${qs ? `?${qs}` : ''}`);
    }
  };

  const isRental = filters.listingType === 'rent';

  const salePrices = [
    { value: '500000', label: '£500,000' },
    { value: '750000', label: '£750,000' },
    { value: '1000000', label: '£1,000,000' },
    { value: '1250000', label: '£1,250,000' },
    { value: '1500000', label: '£1,500,000' },
    { value: '2000000', label: '£2,000,000' },
    { value: '3000000', label: '£3,000,000' },
    { value: '4000000', label: '£4,000,000+' }
  ];

  const rentPrices = [
    { value: '1500', label: '£1,500 pcm' },
    { value: '2000', label: '£2,000 pcm' },
    { value: '2500', label: '£2,500 pcm' },
    { value: '3500', label: '£3,500 pcm' },
    { value: '5000', label: '£5,000 pcm' },
    { value: '7500', label: '£7,500 pcm' },
    { value: '10000', label: '£10,000+ pcm' }
  ];

  const currentPrices = isRental ? rentPrices : salePrices;

  // Count active filters
  const activeFilterCount = [
    filters.area !== 'all',
    filters.propertyType !== 'all',
    filters.bedrooms !== 'all',
    Boolean(filters.minPrice),
    Boolean(filters.maxPrice),
    Boolean(filters.query)
  ].filter(Boolean).length;

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-[#E6E3DB] shadow-[0_12px_36px_rgba(28,30,29,0.07)] transition-all ${
        compact ? 'p-4 sm:p-5' : 'p-6 sm:p-8'
      }`}
      aria-label="Property Search & Filter Portal"
    >
      {/* Top Segmented Controls: All / For Sale / To Rent */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E6E3DB] mb-6">
        <div className="w-full sm:w-auto flex p-1 bg-[#F4F2EB] border border-[#E6E3DB]">
          <button
            type="button"
            onClick={() => handleChange('listingType', 'all')}
            className={`flex-1 sm:flex-none px-3 sm:px-5 py-2.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] text-center transition-all ${
              filters.listingType === 'all'
                ? 'bg-[#191B1A] text-[#FDFCF7] shadow-xs'
                : 'text-[#6F6D65] hover:text-[#191B1A]'
            }`}
          >
            All Residences
          </button>
          <button
            type="button"
            onClick={() => handleChange('listingType', 'sale')}
            className={`flex-1 sm:flex-none px-3 sm:px-5 py-2.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] text-center transition-all ${
              filters.listingType === 'sale'
                ? 'bg-[#191B1A] text-[#FDFCF7] shadow-xs'
                : 'text-[#6F6D65] hover:text-[#191B1A]'
            }`}
          >
            For Sale
          </button>
          <button
            type="button"
            onClick={() => handleChange('listingType', 'rent')}
            className={`flex-1 sm:flex-none px-3 sm:px-5 py-2.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] text-center transition-all ${
              filters.listingType === 'rent'
                ? 'bg-[#191B1A] text-[#FDFCF7] shadow-xs'
                : 'text-[#6F6D65] hover:text-[#191B1A]'
            }`}
          >
            To Rent
          </button>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 text-xs text-[#78766E]">
          {activeFilterCount > 0 && (
            <span className="text-[11px] font-medium text-[#9E7D47] uppercase tracking-wider">
              {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} applied
            </span>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-[#78766E] hover:text-[#191B1A] transition-colors focus:outline-hidden min-h-[36px] py-1"
            title="Reset all search parameters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Primary Search Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
        {/* Keyword Search */}
        <div className="lg:col-span-3">
          <label htmlFor="search-keyword" className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6F6D65] mb-1.5">
            Street or Keyword
          </label>
          <div className="relative">
            <input
              id="search-keyword"
              type="text"
              placeholder="e.g. Downshire Hill, garden..."
              value={filters.query}
              onChange={(e) => handleChange('query', e.target.value)}
              className="w-full min-h-[44px] bg-[#FAF9F5] border border-[#E6E3DB] px-3.5 py-2 text-xs text-[#191B1A] placeholder-[#9E9B93] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden transition-colors"
            />
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="lg:col-span-3">
          <label htmlFor="search-location" className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6F6D65] mb-1.5">
            Neighbourhood
          </label>
          <select
            id="search-location"
            value={filters.area}
            onChange={(e) => handleChange('area', e.target.value)}
            className="w-full min-h-[44px] bg-[#FAF9F5] border border-[#E6E3DB] px-3.5 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden transition-colors cursor-pointer"
          >
            <option value="all">All London Areas</option>
            <option value="hampstead">Hampstead (NW3)</option>
            <option value="highgate">Highgate (N6)</option>
            <option value="islington">Islington (N1)</option>
            <option value="camden">Camden (NW1)</option>
            <option value="stoke-newington">Stoke Newington (N16)</option>
          </select>
        </div>

        {/* Bedrooms Dropdown */}
        <div className="lg:col-span-2">
          <label htmlFor="search-bedrooms" className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6F6D65] mb-1.5">
            Bedrooms
          </label>
          <select
            id="search-bedrooms"
            value={filters.bedrooms}
            onChange={(e) => handleChange('bedrooms', e.target.value)}
            className="w-full min-h-[44px] bg-[#FAF9F5] border border-[#E6E3DB] px-3.5 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden transition-colors cursor-pointer"
          >
            <option value="all">Any Bedrooms</option>
            <option value="1">1+ Bedroom</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Price Maximum */}
        <div className="lg:col-span-2">
          <label htmlFor="search-max-price" className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6F6D65] mb-1.5">
            Max Price
          </label>
          <select
            id="search-max-price"
            value={filters.maxPrice}
            onChange={(e) => handleChange('maxPrice', e.target.value)}
            className="w-full min-h-[44px] bg-[#FAF9F5] border border-[#E6E3DB] px-3.5 py-2 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:bg-white focus:outline-hidden transition-colors cursor-pointer"
          >
            <option value="">No Maximum</option>
            {currentPrices.map((p) => (
              <option key={`max-${p.value}`} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Action Button */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full min-h-[44px] bg-[#191B1A] hover:bg-[#2A2E2C] text-[#FDFCF7] text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <Search className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
