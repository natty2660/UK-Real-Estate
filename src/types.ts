export type ListingType = 'sale' | 'rent';

export type PropertyType = 'Apartment' | 'House' | 'Townhouse' | 'Penthouse' | 'Studio';

export type PropertyStatus = 'Available' | 'Under Offer' | 'Sold STC' | 'Let Agreed';

export type AreaSlug = 'hampstead' | 'highgate' | 'islington' | 'camden' | 'stoke-newington';

export interface PropertyImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: {
    area: string;
    postcodeDistrict: string;
    city: string;
    borough: string;
    fullDisplayLocation: string;
  };
  price: number;
  priceDisplay: string;
  priceQualifier?: 'Guide Price' | 'Offers in Region of' | 'Fixed Price' | 'per calendar month';
  listingType: ListingType;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  receptions: number;
  floorAreaSqFt: number;
  floorAreaSqM: number;
  tenure: 'Freehold' | 'Leasehold' | 'Share of Freehold';
  leaseYearsRemaining?: number;
  councilTaxBand: 'E' | 'F' | 'G' | 'H';
  epcRating: 'A' | 'B' | 'C' | 'D';
  featured: boolean;
  status: PropertyStatus;
  shortDescription: string;
  longDescription: string[];
  keyFeatures: string[];
  specifications: {
    heating: string;
    parking: string;
    outsideSpace: string;
    broadbandAvailability: string;
    accessibility: string;
    constructionEra: string;
  };
  images: PropertyImage[];
  floorplanUrl?: string;
  dateAdded: string;
  areaSlug: AreaSlug;
}

export interface AreaGuide {
  slug: AreaSlug;
  name: string;
  title: string;
  heroImage: string;
  tagline: string;
  summary: string;
  lifestyle: string[];
  architecture: string[];
  transport: {
    station: string;
    lines: string[];
    walkingTime: string;
  }[];
  localHighlights: {
    name: string;
    category: 'Parks & Greenery' | 'Dining & Cafés' | 'Culture & Arts' | 'Schools' | 'Sports & Leisure';
    description: string;
  }[];
  whoItSuits: string[];
  marketContext: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortSummary: string;
  fullDescription: string[];
  keyHighlights: string[];
  deliverables: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialism: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

export interface SearchFilterState {
  listingType: 'all' | 'sale' | 'rent';
  area: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  query: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
}

export interface ValuationFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  postcode: string;
  propertyType: PropertyType;
  bedrooms: string;
  intent: 'Selling' | 'Letting' | 'Curious about market value';
  timeline: 'Immediate (0–3 months)' | 'Medium term (3–6 months)' | 'Planning ahead (6+ months)';
  notes?: string;
}

export interface ViewingFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  buyerStatus: 'First-time buyer' | 'Existing homeowner looking to sell' | 'Cash buyer' | 'Tenant seeking home' | 'Investor';
  message?: string;
}
