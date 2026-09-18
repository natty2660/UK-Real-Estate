import { Property } from '../types';

export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    slug: 'elegant-victorian-terrace-hampstead',
    title: 'Elegant Victorian Terrace',
    subtitle: 'Restored four-bedroom family home moments from Hampstead Heath',
    location: {
      area: 'Hampstead',
      postcodeDistrict: 'NW3',
      city: 'London',
      borough: 'Camden',
      fullDisplayLocation: 'Downshire Hill, Hampstead, London NW3',
    },
    price: 1450000,
    priceDisplay: '£1,450,000',
    priceQualifier: 'Guide Price',
    listingType: 'sale',
    propertyType: 'House',
    bedrooms: 4,
    bathrooms: 2,
    receptions: 2,
    floorAreaSqFt: 2180,
    floorAreaSqM: 202.5,
    tenure: 'Freehold',
    councilTaxBand: 'G',
    epcRating: 'C',
    featured: true,
    status: 'Available',
    shortDescription:
      'A distinguished four-bedroom Victorian residence offering refined architectural symmetry, original cornicing, and a south-facing landscaped walled garden.',
    longDescription: [
      'Positioned along one of Hampstead’s most revered tree-lined turnings, this distinguished Victorian residence represents an exceptional balance of preserved period craftsmanship and calm contemporary living.',
      'Arranged across four well-proportioned levels, the accommodation unfolds with an elegant double reception featuring twin marble fireplaces, floor-to-ceiling timber sash windows, and wide-plank oiled oak flooring.',
      'To the garden level, a bespoke hand-crafted kitchen and breakfast room connects seamlessly via steel-framed French doors onto a secluded 45-foot south-facing garden framed by mature espalier trees.',
      'The upper storeys host four generous bedrooms, including an expansive master suite with integrated dressing cabinetry and an en-suite bathroom clad in Honed Carrara marble.'
    ],
    keyFeatures: [
      'Four well-proportioned double bedrooms across four storeys',
      'South-facing walled garden with stone dining terrace',
      'Dual aspect double reception with working marble fireplaces',
      'Bespoke solid timber kitchen with marble worktops and range cooker',
      'Principal suite with walk-through dressing area and en-suite',
      'Moments from Hampstead Heath and Hampstead Village High Street',
      'Freehold tenure with designated residents parking'
    ],
    specifications: {
      heating: 'Gas central heating with cast-iron reproduction radiators',
      parking: 'Residents priority on-street permit parking (Camden NW3)',
      outsideSpace: '45ft private south-facing rear walled garden',
      broadbandAvailability: 'Ultrafast full-fibre up to 1000 Mbps available',
      accessibility: 'Traditional period entrance steps and internal staircases',
      constructionEra: 'Circa 1885 Victorian vernacular brickwork'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Exterior facade of Victorian terrace in Hampstead with wrought iron railings and stone steps',
        caption: 'Front facade showing classic Victorian brick detailing'
      },
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85',
        alt: 'Bright double reception room with high ceilings, marble fireplace and oak parquet',
        caption: 'Formal double reception room with twin marble fireplaces'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        alt: 'Custom kitchen with marble island, brass taps and dining table overlooking garden',
        caption: 'Bespoke kitchen and dining room opening to the garden'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Principal bedroom with soft linen curtains, sash windows and neutral tones',
        caption: 'First-floor principal bedroom with morning light'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
        alt: 'Contemporary marble bathroom with freestanding roll-top bath and brass fittings',
        caption: 'En-suite bathroom with freestanding bathtub and brass brassware'
      },
      {
        url: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1600&q=85',
        alt: 'Private south-facing walled garden with mature trees and outdoor dining table',
        caption: 'Secluded south-facing private garden'
      }
    ],
    dateAdded: '2026-08-14',
    areaSlug: 'hampstead'
  },
  {
    id: 'prop-2',
    slug: 'contemporary-highgate-apartment',
    title: 'Contemporary Highgate Apartment',
    subtitle: 'Quiet lateral two-bedroom home surrounded by leafy woodland canopies',
    location: {
      area: 'Highgate',
      postcodeDistrict: 'N6',
      city: 'London',
      borough: 'Haringey',
      fullDisplayLocation: 'Southwood Lane, Highgate, London N6',
    },
    price: 895000,
    priceDisplay: '£895,000',
    priceQualifier: 'Guide Price',
    listingType: 'sale',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    receptions: 1,
    floorAreaSqFt: 1045,
    floorAreaSqM: 97.1,
    tenure: 'Share of Freehold',
    leaseYearsRemaining: 994,
    councilTaxBand: 'F',
    epcRating: 'B',
    featured: true,
    status: 'Available',
    shortDescription:
      'A serene lateral two-bedroom, two-bathroom apartment nestled within a discreet boutique development on the edge of Highgate Woods.',
    longDescription: [
      'Designed with restrained Nordic sensibility and architectural precision, this pristine lateral home sits within an exclusive development of just eight private residences in historic Highgate Village.',
      'The heart of the home is an open-concept living space that opens via sliding triple-glazed acoustic doors onto a broad covered timber balcony facing mature woodland.',
      'The bespoke kitchen features matte anthracite cabinetry, recessed LED accents, and integrated Miele appliances including an induction hob and wine refrigeration.',
      'Both bedrooms are peaceful retreats overlooking green tree canopies, complemented by generous fitted wardrobes and thermostatically zoned underfloor heating throughout.'
    ],
    keyFeatures: [
      'Two generous double bedrooms with two en-suite bathrooms',
      'Large covered private balcony with tranquil green woodland outlook',
      'Engineered wide-plank oak flooring with zoned underfloor heating',
      'Modern open-plan kitchen with integrated Miele appliances',
      'Share of Freehold with long underlying 990+ year lease',
      'Secure underground parking space and private storage unit',
      'Walking distance to Highgate Underground (Northern Line)'
    ],
    specifications: {
      heating: 'Zoned underfloor heating powered by efficient heat pump',
      parking: 'Dedicated underground allocated space with EV charger',
      outsideSpace: 'Private covered balcony (approx. 110 sq ft)',
      broadbandAvailability: 'Hyperoptic full-fibre 1 Gbps active in building',
      accessibility: 'Level lift access directly from basement parking to apartment',
      constructionEra: 'Contemporary architectural build completed 2021'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        alt: 'Lateral living room with wide timber sliding doors opening to tree canopies',
        caption: 'Open-plan living space bathed in natural woodland light'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=85',
        alt: 'Minimalist designer kitchen with dark cabinetry and warm recessed ambient light',
        caption: 'Kitchen fitted with bespoke cabinetry and integrated appliances'
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
        alt: 'Serene bedroom with timber accent wall and views of green foliage',
        caption: 'Primary bedroom sanctuary overlooking mature trees'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
        alt: 'Modern bathroom with terrazzo stone tiles and floating vanity unit',
        caption: 'Contemporary bathroom finished in warm neutral stone'
      }
    ],
    dateAdded: '2026-08-28',
    areaSlug: 'highgate'
  },
  {
    id: 'prop-3',
    slug: 'period-townhouse-islington',
    title: 'Period Townhouse',
    subtitle: 'Classic Georgian three-bedroom residence on a tranquil garden square',
    location: {
      area: 'Islington',
      postcodeDistrict: 'N1',
      city: 'London',
      borough: 'Islington',
      fullDisplayLocation: 'Lonsdale Square, Islington, London N1',
    },
    price: 1150000,
    priceDisplay: '£1,150,000',
    priceQualifier: 'Guide Price',
    listingType: 'sale',
    propertyType: 'Townhouse',
    bedrooms: 3,
    bathrooms: 2,
    receptions: 2,
    floorAreaSqFt: 1720,
    floorAreaSqM: 159.8,
    tenure: 'Freehold',
    councilTaxBand: 'G',
    epcRating: 'D',
    featured: true,
    status: 'Available',
    shortDescription:
      'An exceptional three-bedroom early-19th-century townhouse retaining striking period features, cast-iron balconies, and a paved courtyard garden.',
    longDescription: [
      'Set back behind classic wrought-iron spear railings on one of Islington’s most distinctive Gothic revival garden squares, this Grade II listed townhouse commands immediate admiration.',
      'The raised ground floor comprises a classical dual-aspect drawing room enriched by decorative ceiling plasterwork, working shutters, and twin fireplaces.',
      'On the lower level, a contemporary kitchen and dining space opens straight out to a sheltered stone courtyard garden, offering a delightfully private oasis in the heart of town.',
      'Moments from the independent boutiques, theatres, and restaurants of Upper Street, yet blissfully tranquil.'
    ],
    keyFeatures: [
      'Grade II listed three-bedroom Georgian townhouse',
      'Overlooking leafy central residents-only communal gardens',
      'Sheltered paved courtyard garden for alfresco dining',
      'Original sash windows with working wooden shutters and cornicing',
      'Two elegant reception rooms with period fireplaces',
      'Under 7 minutes walk to Angel and Highbury & Islington stations',
      'Freehold ownership without onward chain'
    ],
    specifications: {
      heating: 'Modern gas-fired boiler with zoned heritage panel radiators',
      parking: 'On-street permit parking (Islington Zone A)',
      outsideSpace: 'Private paved rear courtyard plus access to central garden square',
      broadbandAvailability: 'Fibre to the premises (up to 900 Mbps)',
      accessibility: 'Traditional period multi-level configuration',
      constructionEra: 'Circa 1838 Tudor-Gothic domestic revival'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
        alt: 'Classic London period townhouse facade on a leafy garden square with black front door',
        caption: 'Architectural facade on historical Islington garden square'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        alt: 'First floor drawing room with high ceilings, tall windows and heritage furniture',
        caption: 'First-floor formal drawing room with original cornicing'
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
        alt: 'Eat-in kitchen with stone worktops and doors leading to courtyard garden',
        caption: 'Garden level dining and kitchen leading out to courtyard'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        alt: 'Master bedroom with tall sash windows and natural morning light',
        caption: 'Upper floor master bedroom overlooking the square'
      }
    ],
    dateAdded: '2026-09-02',
    areaSlug: 'islington'
  },
  {
    id: 'prop-4',
    slug: 'light-filled-camden-apartment',
    title: 'Light-Filled Camden Apartment',
    subtitle: 'Sensitively converted warehouse loft overlooking the Regent’s Canal',
    location: {
      area: 'Camden',
      postcodeDistrict: 'NW1',
      city: 'London',
      borough: 'Camden',
      fullDisplayLocation: 'Gloucester Crescent, Camden, London NW1',
    },
    price: 695000,
    priceDisplay: '£695,000',
    priceQualifier: 'Guide Price',
    listingType: 'sale',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    receptions: 1,
    floorAreaSqFt: 840,
    floorAreaSqM: 78.0,
    tenure: 'Leasehold',
    leaseYearsRemaining: 142,
    councilTaxBand: 'E',
    epcRating: 'C',
    featured: true,
    status: 'Available',
    shortDescription:
      'A luminous two-bedroom apartment within an architectural conversion, showcasing expansive industrial Crittall-style windows and exposed London stock brick.',
    longDescription: [
      'Quietly set back from the lively pulse of central Camden and Regent’s Canal, this light-flooded two-bedroom apartment occupies the second floor of a former Victorian industrial building.',
      'The reception features dramatic 3-metre ceiling heights, warm exposed brickwork, and a wall of south-facing Crittall windows that fill the interior with consistent natural daylight.',
      'A streamlined stainless steel and birch plywood kitchen fits flush against the wall, allowing maximum versatility for both entertaining and remote work.',
      'Just a leisurely walk along the towpath to Regent’s Park and King’s Cross St Pancras.'
    ],
    keyFeatures: [
      'Two double bedrooms with bespoke built-in wardrobe systems',
      'Expansive south-facing industrial style windows with canal views',
      'Original exposed London stock brickwork and high ceilings',
      'Solid micro-cement flooring with gentle underfloor heating',
      'Communal rooftop terrace with panoramic London skyline vistas',
      'Secure cycle storage and video door entry system',
      'Long lease with 142 years unexpired and modest service charges'
    ],
    specifications: {
      heating: 'Individual communal combi system with underfloor coils',
      parking: 'Camden on-street permit parking eligibility',
      outsideSpace: 'Access to shared landscaped roof terrace with city views',
      broadbandAvailability: 'Gigabit full-fibre installed',
      accessibility: 'Passenger lift access to all residential levels',
      constructionEra: 'Late Victorian industrial structure converted 2018'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85',
        alt: 'Industrial conversion living space with exposed brick and large black framed windows',
        caption: 'Main loft living room with exposed brick and Crittall-style glazing'
      },
      {
        url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=85',
        alt: 'Modern minimalist kitchen with stainless steel counter and open wooden shelving',
        caption: 'Bespoke plywood and stainless steel kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1600&q=85',
        alt: 'Quiet bedroom with white walls, natural oak furniture and woven rug',
        caption: 'Principal double bedroom with morning sunlight'
      }
    ],
    dateAdded: '2026-09-08',
    areaSlug: 'camden'
  },
  {
    id: 'prop-5',
    slug: 'modern-stoke-newington-home',
    title: 'Modern Stoke Newington Home',
    subtitle: 'Architect-designed three-bedroom house beside Clissold Park',
    location: {
      area: 'Stoke Newington',
      postcodeDistrict: 'N16',
      city: 'London',
      borough: 'Hackney',
      fullDisplayLocation: 'Church Street, Stoke Newington, London N16',
    },
    price: 825000,
    priceDisplay: '£825,000',
    priceQualifier: 'Offers in Region of',
    listingType: 'sale',
    propertyType: 'House',
    bedrooms: 3,
    bathrooms: 2,
    receptions: 1,
    floorAreaSqFt: 1390,
    floorAreaSqM: 129.1,
    tenure: 'Freehold',
    councilTaxBand: 'E',
    epcRating: 'B',
    featured: true,
    status: 'Available',
    shortDescription:
      'A striking contemporary three-bedroom townhouse pairing timber cladding, polished concrete, and an architect-designed Japanese-inspired courtyard.',
    longDescription: [
      'Masterminded by an award-winning British architectural practice, this modern freehold home reinterprets the London terrace with sustainable cross-laminated timber, zinc accents, and clean minimalist lines.',
      'The open-plan ground floor centers on a polished concrete kitchen and dining space with full-height pivot glass doors opening to a peaceful Japanese maple courtyard.',
      'Upstairs, three light-filled bedrooms benefit from vaulted ceilings and bespoke birch ply joinery, complemented by two bathrooms finished with matte white tapware and lime plaster.',
      'Steps away from Stoke Newington Church Street’s artisan bakeries, organic grocers, and the open green lawns of Clissold Park.'
    ],
    keyFeatures: [
      'Three double bedrooms with custom architectural joinery',
      'Private internal courtyard garden with Japanese maple and cedar screening',
      'Sustainable cross-laminated timber structure with high thermal efficiency',
      'Polished concrete floor with integrated ground source heat heating',
      'Green sedum living roof attracting local pollinators',
      'Moments from Clissold Park and Church Street independent shops',
      'Freehold tenure with 10-year structural warranty valid to 2032'
    ],
    specifications: {
      heating: 'Air source heat pump with MVHR heat recovery ventilation',
      parking: 'On-street permit parking (Hackney Borough)',
      outsideSpace: 'Central private courtyard garden and sedum roof',
      broadbandAvailability: 'Full-fibre 1000 Mbps broadband',
      accessibility: 'Level threshold entrance with wide internal doorways',
      constructionEra: 'Contemporary sustainable construction completed 2022'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Contemporary architectural house with timber cladding and dark metal frame detailing',
        caption: 'Architectural front elevation with sustainable cedar cladding'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        alt: 'Open-plan living room with polished concrete flooring and internal garden views',
        caption: 'Open living and dining space framing the internal courtyard'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        alt: 'Minimalist bedroom with vaulted ceiling and birch plywood wardrobes',
        caption: 'Vaulted ceiling bedroom with bespoke architectural joinery'
      }
    ],
    dateAdded: '2026-09-10',
    areaSlug: 'stoke-newington'
  },
  {
    id: 'prop-6',
    slug: 'georgian-garden-flat-islington',
    title: 'Georgian Garden Apartment',
    subtitle: 'Charming two-bedroom garden apartment on Canonbury Square',
    location: {
      area: 'Islington',
      postcodeDistrict: 'N1',
      city: 'London',
      borough: 'Islington',
      fullDisplayLocation: 'Canonbury Square, Islington, London N1',
    },
    price: 3250,
    priceDisplay: '£3,250 pcm',
    priceQualifier: 'per calendar month',
    listingType: 'rent',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    receptions: 1,
    floorAreaSqFt: 920,
    floorAreaSqM: 85.5,
    tenure: 'Leasehold',
    councilTaxBand: 'E',
    epcRating: 'C',
    featured: false,
    status: 'Available',
    shortDescription:
      'A refined two-bedroom garden residence featuring a private walled patio garden, contemporary shaker kitchen, and peaceful Canonbury surroundings.',
    longDescription: [
      'Enjoying its own private entrance on prestigious Canonbury Square, this graceful lower ground residence has been recently refurbished with sensitivity and restraint.',
      'The reception room features restored timber floorboards, a period fireplace mantle, and French doors leading out to a private sandstone patio garden framed by climbing jasmine.',
      'Offered either furnished or unfurnished by negotiation, managed directly by North & Vale Property’s dedicated property management team.'
    ],
    keyFeatures: [
      'Two double bedrooms with fitted storage',
      'Private sandstone paved garden with outdoor lighting',
      'Private independent front entrance with storage vaults',
      'Fully managed by North & Vale Property lettings team',
      'Contemporary shaker kitchen with stone breakfast bar',
      'Quiet prestigious Canonbury setting moments from Highbury & Islington station'
    ],
    specifications: {
      heating: 'Gas central heating with smart Nest thermostat',
      parking: 'Islington residents parking permit zone',
      outsideSpace: 'Private rear walled terrace garden (30ft)',
      broadbandAvailability: 'Fibre broadband ready for immediate activation',
      accessibility: 'Lower ground floor accessed via private front steps',
      constructionEra: 'Circa 1820 Georgian terrace'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
        alt: 'Bright living room with wooden floors opening to private leafy garden',
        caption: 'Reception room leading out to the private garden'
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
        alt: 'Modern shaker kitchen with stone worktops and integrated appliances',
        caption: 'Contemporary shaker kitchen with dining breakfast bar'
      }
    ],
    dateAdded: '2026-09-12',
    areaSlug: 'islington'
  },
  {
    id: 'prop-7',
    slug: 'architectural-penthouse-hampstead',
    title: 'Heath View Architectural Penthouse',
    subtitle: 'Dramatic top-floor lateral penthouse with panoramic views of the Heath',
    location: {
      area: 'Hampstead',
      postcodeDistrict: 'NW3',
      city: 'London',
      borough: 'Camden',
      fullDisplayLocation: 'Well Walk, Hampstead, London NW3',
    },
    price: 5800,
    priceDisplay: '£5,800 pcm',
    priceQualifier: 'per calendar month',
    listingType: 'rent',
    propertyType: 'Penthouse',
    bedrooms: 3,
    bathrooms: 3,
    receptions: 1,
    floorAreaSqFt: 1850,
    floorAreaSqM: 171.9,
    tenure: 'Share of Freehold',
    councilTaxBand: 'H',
    epcRating: 'B',
    featured: true,
    status: 'Available',
    shortDescription:
      'An exceptional three-bedroom duplex penthouse offering wrap-around cedar decking, triple aspect floor-to-ceiling glass, and direct views across Hampstead Heath.',
    longDescription: [
      'Crown of an acclaimed modernist residential enclave on Well Walk, this dramatic penthouse represents one of the finest rental offerings in North London.',
      'A continuous wrap-around private terrace provides uninterrupted views over the treetops of Hampstead Heath towards the London city skyline in the distance.',
      'Features direct key-coded lift access, comfort cooling, three boutique en-suite bedrooms, and full concierge services.'
    ],
    keyFeatures: [
      'Three luxurious en-suite bedrooms with custom walk-in wardrobes',
      'Over 600 sq ft of private wrap-around terrace with Heath vistas',
      'Direct private lift access into the penthouse entrance foyer',
      'Comfort cooling and zoned climate control throughout',
      'Two secure underground parking spaces with EV charge point',
      'Professional concierge and 24/7 security service'
    ],
    specifications: {
      heating: 'Zoned comfort cooling and underfloor heating system',
      parking: 'Two allocated underground parking bays',
      outsideSpace: '650 sq ft continuous wrap-around cedar terrace',
      broadbandAvailability: 'Pre-wired commercial grade 1 Gbps symmetric fibre',
      accessibility: 'Keyed lift access directly into apartment entrance gallery',
      constructionEra: 'Bespoke modern architectural commission 2020'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=85',
        alt: 'Penthouse living room with panoramic glass walls looking out over green parkland',
        caption: 'Expansive penthouse living space with panoramic Heath views'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Boutique principal bedroom with floor-to-ceiling glass doors onto terrace',
        caption: 'Primary suite with direct access to private wrap-around terrace'
      }
    ],
    dateAdded: '2026-09-14',
    areaSlug: 'hampstead'
  },
  {
    id: 'prop-8',
    slug: 'edwardian-maisonette-highgate',
    title: 'Edwardian Maisonette with Private Terrace',
    subtitle: 'Characterful two-bedroom upper maisonette in Highgate Village',
    location: {
      area: 'Highgate',
      postcodeDistrict: 'N6',
      city: 'London',
      borough: 'Haringey',
      fullDisplayLocation: 'The Bank, Highgate Hill, London N6',
    },
    price: 2650,
    priceDisplay: '£2,650 pcm',
    priceQualifier: 'per calendar month',
    listingType: 'rent',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    receptions: 1,
    floorAreaSqFt: 880,
    floorAreaSqM: 81.8,
    tenure: 'Leasehold',
    councilTaxBand: 'E',
    epcRating: 'C',
    featured: false,
    status: 'Available',
    shortDescription:
      'A warm two-bedroom Edwardian upper maisonette blending high decorative ceilings, a modern galley kitchen, and a secluded rear sun deck.',
    longDescription: [
      'Perched near the historic summit of Highgate Hill, this charming Edwardian home offers quiet elevation and period character in abundance.',
      'The reception features tall bay windows framing open views towards the City, while a timber sun deck provides the ideal spot for evening drinks and weekend brunches.',
      'Conveniently placed for Waterlow Park and village coffee houses, with quick access to the Northern Line.'
    ],
    keyFeatures: [
      'Two peaceful double bedrooms with high ceilings',
      'Private elevated sun deck with leafy westerly aspect',
      'Classic Edwardian bay window with skyline glimpses',
      'Modern tiled bathroom with overhead shower',
      'Highgate Village location steps from Waterlow Park',
      'Managed directly with transparent tenant support'
    ],
    specifications: {
      heating: 'High-efficiency combi boiler with wireless thermostatic controls',
      parking: 'Residents on-street parking permit eligible',
      outsideSpace: 'Private elevated timber sun deck',
      broadbandAvailability: 'Superfast broadband available (up to 500 Mbps)',
      accessibility: 'First and second floor configuration',
      constructionEra: 'Circa 1904 Edwardian architectural conversion'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        alt: 'Edwardian reception room with bay window and soft warm lighting',
        caption: 'Comfortable reception room with original Edwardian proportions'
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
        alt: 'Calm bedroom with sash window and natural linen bedding',
        caption: 'Principal double bedroom with morning light'
      }
    ],
    dateAdded: '2026-09-15',
    areaSlug: 'highgate'
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  if (slug === 'example-property') {
    return DEMO_PROPERTIES[0]; // Resolves /properties/example-property to Elegant Victorian Terrace
  }
  return DEMO_PROPERTIES.find((p) => p.slug === slug);
}
