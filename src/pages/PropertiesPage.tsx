import { useState, useMemo } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { DEMO_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { PropertySearchForm } from '../components/PropertySearchForm';
import { SEOHead } from '../components/SEOHead';
import { SearchFilterState, ListingType } from '../types';
import { Bookmark, Building2, X, PhoneCall } from 'lucide-react';

interface PropertiesPageProps {
  initialListingType?: ListingType | 'all';
}

export function PropertiesPage({ initialListingType = 'all' }: PropertiesPageProps) {
  const { currentPath, savedPropertyIds } = useRouter();

  // Determine SEO title and description based on sub-route
  const isForSaleOnly = initialListingType === 'sale' || currentPath.endsWith('/for-sale');
  const isToRentOnly = initialListingType === 'rent' || currentPath.endsWith('/to-rent');

  const pageTitle = isForSaleOnly
    ? 'Property for Sale in London | North & Vale Property'
    : isToRentOnly
    ? 'Property to Rent in London | Lettings Specialists | North & Vale'
    : 'Property for Sale & to Rent in London | North & Vale Property';

  const pageDescription = isForSaleOnly
    ? 'Explore distinctive houses, townhouses, and apartments for sale across Hampstead, Highgate, Islington, and prime North London neighbourhoods.'
    : isToRentOnly
    ? 'Discover exceptional residential rental properties and corporate tenancies across Hampstead, Highgate, Islington, and Central London.'
    : 'Browse our curated portfolio of residential properties for sale and to rent across Hampstead, Highgate, Islington, Camden, and Stoke Newington.';

  const canonicalPath = isForSaleOnly
    ? '/properties/for-sale'
    : isToRentOnly
    ? '/properties/to-rent'
    : '/properties';

  // Read query params from URL if any
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const areaParam = searchParams.get('area') || 'all';
  const typeParam = searchParams.get('type') || 'all';
  const bedsParam = searchParams.get('beds') || 'all';
  const minPriceParam = searchParams.get('minPrice') || '';
  const maxPriceParam = searchParams.get('maxPrice') || '';
  const queryParam = searchParams.get('q') || '';

  const [filters, setFilters] = useState<SearchFilterState>({
    listingType: isForSaleOnly ? 'sale' : isToRentOnly ? 'rent' : (searchParams.get('type_mode') as any) || 'all',
    area: areaParam,
    propertyType: typeParam,
    minPrice: minPriceParam,
    maxPrice: maxPriceParam,
    bedrooms: bedsParam,
    query: queryParam,
    sortBy: 'featured'
  });

  const [showShortlistOnly, setShowShortlistOnly] = useState(false);

  // Filter properties logic
  const filteredProperties = useMemo(() => {
    return DEMO_PROPERTIES.filter((prop) => {
      // Shortlist filter
      if (showShortlistOnly && !savedPropertyIds.includes(prop.id)) {
        return false;
      }

      // Listing type (sale / rent)
      if (isForSaleOnly && prop.listingType !== 'sale') return false;
      if (isToRentOnly && prop.listingType !== 'rent') return false;
      if (!isForSaleOnly && !isToRentOnly && filters.listingType !== 'all') {
        if (prop.listingType !== filters.listingType) return false;
      }

      // Area filter
      if (filters.area !== 'all' && prop.areaSlug !== filters.area) {
        return false;
      }

      // Property type filter
      if (filters.propertyType !== 'all' && prop.propertyType !== filters.propertyType) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'all') {
        const minBeds = parseInt(filters.bedrooms, 10);
        if (prop.bedrooms < minBeds) return false;
      }

      // Price min
      if (filters.minPrice) {
        const min = parseInt(filters.minPrice, 10);
        if (prop.price < min) return false;
      }

      // Price max
      if (filters.maxPrice) {
        const max = parseInt(filters.maxPrice, 10);
        if (prop.price > max) return false;
      }

      // Keyword query
      if (filters.query && filters.query.trim()) {
        const q = filters.query.toLowerCase().trim();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesAddress = prop.location.fullDisplayLocation.toLowerCase().includes(q);
        const matchesArea = prop.location.area.toLowerCase().includes(q);
        const matchesFeatures = prop.keyFeatures.some((f) => f.toLowerCase().includes(q));
        if (!matchesTitle && !matchesAddress && !matchesArea && !matchesFeatures) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'newest') return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [filters, isForSaleOnly, isToRentOnly, showShortlistOnly, savedPropertyIds]);

  const clearFilter = (field: keyof SearchFilterState, defaultValue: string = 'all') => {
    setFilters((prev) => ({ ...prev, [field]: defaultValue }));
  };

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        breadcrumbs={
          isForSaleOnly
            ? [
                { name: 'Home', url: '/' },
                { name: 'Properties', url: '/properties' },
                { name: 'For Sale', url: '/properties/for-sale' }
              ]
            : isToRentOnly
            ? [
                { name: 'Home', url: '/' },
                { name: 'Properties', url: '/properties' },
                { name: 'To Rent', url: '/properties/to-rent' }
              ]
            : [
                { name: 'Home', url: '/' },
                { name: 'Properties', url: '/properties' }
              ]
        }
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: pageTitle,
          description: pageDescription,
          numberOfItems: filteredProperties.length,
          itemListElement: filteredProperties.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'RealEstateListing',
              name: p.title,
              description: p.shortDescription,
              url: `https://northvaleproperty.example/properties/${p.slug}`,
              price: p.price,
              priceCurrency: 'GBP'
            }
          }))
        }}
      />

      {/* Page Editorial Header */}
      <section className="bg-[#191B1A] text-[#FDFCF7] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2A2E2C]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#A39E93] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FDFCF7] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D5D1C6]">Properties</span>
            {(isForSaleOnly || isToRentOnly) && (
              <>
                <span>/</span>
                <span className="text-[#B89358]">
                  {isForSaleOnly ? 'For Sale' : 'To Rent'}
                </span>
              </>
            )}
          </nav>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#B89358] font-semibold block mb-2">
              London Residential Portfolio
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FDFCF7] leading-tight">
              {isForSaleOnly
                ? 'Properties for Sale in London'
                : isToRentOnly
                ? 'Properties to Rent in London'
                : 'London Properties for Sale & to Rent'}
            </h1>
            <p className="text-xs sm:text-sm text-[#D5D1C6] font-light mt-3 leading-relaxed">
              Curated architectural residences, Victorian terraces, garden townhouses, and lateral apartments across Hampstead, Highgate, Islington, Camden, and Stoke Newington.
            </p>
          </div>

          {/* Quick Route Switches (All / For Sale / To Rent) */}
          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-[#3A3E3B]">
            <Link
              to="/properties"
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-colors ${
                !isForSaleOnly && !isToRentOnly
                  ? 'bg-[#9E7D47] text-[#141615]'
                  : 'bg-[#232726] text-[#D5D1C6] hover:bg-[#343A37]'
              }`}
            >
              All Residences
            </Link>
            <Link
              to="/properties/for-sale"
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-colors ${
                isForSaleOnly
                  ? 'bg-[#9E7D47] text-[#141615]'
                  : 'bg-[#232726] text-[#D5D1C6] hover:bg-[#343A37]'
              }`}
            >
              For Sale
            </Link>
            <Link
              to="/properties/to-rent"
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-colors ${
                isToRentOnly
                  ? 'bg-[#9E7D47] text-[#141615]'
                  : 'bg-[#232726] text-[#D5D1C6] hover:bg-[#343A37]'
              }`}
            >
              To Rent
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter Bar */}
        <div className="mb-8">
          <PropertySearchForm
            initialFilters={filters}
            onFilterChange={(newFilters) => setFilters(newFilters)}
            compact
          />
        </div>

        {/* Active Filter Chips */}
        {(filters.area !== 'all' ||
          filters.propertyType !== 'all' ||
          filters.bedrooms !== 'all' ||
          filters.minPrice ||
          filters.maxPrice ||
          filters.query ||
          showShortlistOnly) && (
          <div className="flex flex-wrap items-center gap-2 pb-5 mb-6 border-b border-[#E6E3DB]">
            <span className="text-xs uppercase tracking-wider text-[#6F6D65] font-medium mr-2">
              Active Filters:
            </span>

            {filters.area !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E6E3DB] text-xs text-[#191B1A]">
                <span>Area: {filters.area}</span>
                <button onClick={() => clearFilter('area', 'all')} className="hover:text-red-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.bedrooms !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E6E3DB] text-xs text-[#191B1A]">
                <span>{filters.bedrooms}+ Bedrooms</span>
                <button onClick={() => clearFilter('bedrooms', 'all')} className="hover:text-red-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.propertyType !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E6E3DB] text-xs text-[#191B1A]">
                <span>{filters.propertyType}</span>
                <button onClick={() => clearFilter('propertyType', 'all')} className="hover:text-red-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.query && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E6E3DB] text-xs text-[#191B1A]">
                <span>"{filters.query}"</span>
                <button onClick={() => clearFilter('query', '')} className="hover:text-red-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {showShortlistOnly && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#9E7D47] text-white text-xs">
                <span>Shortlist Only</span>
                <button onClick={() => setShowShortlistOnly(false)} className="hover:text-black">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={() => {
                setFilters({
                  listingType: isForSaleOnly ? 'sale' : isToRentOnly ? 'rent' : 'all',
                  area: 'all',
                  propertyType: 'all',
                  minPrice: '',
                  maxPrice: '',
                  bedrooms: 'all',
                  query: '',
                  sortBy: 'featured'
                });
                setShowShortlistOnly(false);
              }}
              className="text-xs text-[#9E7D47] hover:underline uppercase tracking-wider font-semibold ml-2"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E6E3DB]">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.14em] font-semibold text-[#191B1A]">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'Residence' : 'Residences'}
            </span>

            {/* Shortlist Filter Toggle */}
            <button
              onClick={() => setShowShortlistOnly(!showShortlistOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors border ${
                showShortlistOnly
                  ? 'bg-[#9E7D47] text-white border-[#9E7D47]'
                  : 'bg-white text-[#5A5955] border-[#E6E3DB] hover:text-[#191B1A]'
              }`}
              title="Filter by your saved shortlist"
            >
              <Bookmark className={`w-3.5 h-3.5 ${showShortlistOnly ? 'fill-current' : ''}`} />
              <span>Shortlist ({savedPropertyIds.length})</span>
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-properties" className="text-xs text-[#6F6D65] uppercase tracking-wider font-medium">
              Sort by:
            </label>
            <select
              id="sort-properties"
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
              className="bg-white border border-[#E6E3DB] px-3 py-1.5 text-xs text-[#191B1A] focus:border-[#9E7D47] focus:outline-hidden cursor-pointer"
            >
              <option value="featured">Featured / Curated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Most Recently Instructed</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center border border-[#E6E3DB] bg-[#FAF9F5] p-8 max-w-xl mx-auto shadow-xs">
            <Building2 className="w-12 h-12 text-[#9E7D47] mx-auto mb-4" />
            <h2 className="font-serif text-2xl text-[#191B1A]">
              No residences matched your criteria.
            </h2>
            <p className="text-xs text-[#6F6D65] mt-2 mb-6 max-w-sm mx-auto leading-relaxed font-light">
              We frequently handle off-market and confidential instructions. Speak directly with our advisory desk or adjust your search parameters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setFilters({
                    listingType: 'all',
                    area: 'all',
                    propertyType: 'all',
                    minPrice: '',
                    maxPrice: '',
                    bedrooms: 'all',
                    query: '',
                    sortBy: 'featured'
                  });
                  setShowShortlistOnly(false);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#191B1A] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold"
              >
                Clear All Filters
              </button>
              <a
                href="tel:+442079460958"
                className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#E6E3DB] text-[#191B1A] text-xs uppercase tracking-wider font-medium hover:border-[#191B1A] transition-colors inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>Call Advisory Desk</span>
              </a>
            </div>
          </div>
        )}

        {/* Internal Linking & Area Shortcuts */}
        <div className="mt-20 pt-12 border-t border-[#E6E3DB]">
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#9E7D47] font-semibold mb-4">
            Explore London Property by Neighbourhood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Link
              to="/areas/hampstead"
              className="p-5 bg-white hover:border-[#9E7D47] transition-all border border-[#E6E3DB] block shadow-xs group"
            >
              <span className="font-serif text-lg text-[#191B1A] group-hover:text-[#9E7D47] transition-colors block">
                Hampstead (NW3)
              </span>
              <span className="text-xs text-[#6F6D65] font-light mt-1 block">
                Village residences, Georgian cottages &amp; Heathside apartments
              </span>
            </Link>

            <Link
              to="/areas/highgate"
              className="p-5 bg-white hover:border-[#9E7D47] transition-all border border-[#E6E3DB] block shadow-xs group"
            >
              <span className="font-serif text-lg text-[#191B1A] group-hover:text-[#9E7D47] transition-colors block">
                Highgate (N6)
              </span>
              <span className="text-xs text-[#6F6D65] font-light mt-1 block">
                Elevated family villas, woodland outlooks &amp; modernist architecture
              </span>
            </Link>

            <Link
              to="/areas/islington"
              className="p-5 bg-white hover:border-[#9E7D47] transition-all border border-[#E6E3DB] block shadow-xs group"
            >
              <span className="font-serif text-lg text-[#191B1A] group-hover:text-[#9E7D47] transition-colors block">
                Islington (N1)
              </span>
              <span className="text-xs text-[#6F6D65] font-light mt-1 block">
                Period garden squares, canal-side lofts &amp; Upper Street dining
              </span>
            </Link>

            <Link
              to="/areas/camden"
              className="p-5 bg-white hover:border-[#9E7D47] transition-all border border-[#E6E3DB] block shadow-xs group"
            >
              <span className="font-serif text-lg text-[#191B1A] group-hover:text-[#9E7D47] transition-colors block">
                Camden (NW1)
              </span>
              <span className="text-xs text-[#6F6D65] font-light mt-1 block">
                Canalside conversions, Victorian terraces &amp; cultural vibrance
              </span>
            </Link>

            <Link
              to="/areas/stoke-newington"
              className="p-5 bg-white hover:border-[#9E7D47] transition-all border border-[#E6E3DB] block shadow-xs group"
            >
              <span className="font-serif text-lg text-[#191B1A] group-hover:text-[#9E7D47] transition-colors block">
                Stoke Newington (N16)
              </span>
              <span className="text-xs text-[#6F6D65] font-light mt-1 block">
                Church Street village life, leafy parks &amp; period family homes
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
