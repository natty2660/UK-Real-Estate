import { AreaGuide } from '../types';

export const AREA_GUIDES: Record<string, AreaGuide> = {
  hampstead: {
    slug: 'hampstead',
    name: 'Hampstead',
    title: 'Hampstead, London NW3 | Village Character & Historic Heathland',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Timeless hilltop village charm bordered by 800 acres of ancient heathland.',
    summary:
      'Hampstead remains one of London’s most celebrated residential enclaves, where literary heritage, winding cobblestone lanes, and independent boutiques coexist with the expansive wild grasslands of Hampstead Heath. Offering an unmistakable village atmosphere just four miles north of central London, it attracts residents seeking architectural distinction, exceptional schools, and immediate access to expansive nature.',
    lifestyle: [
      'Morning walks across Parliament Hill and bathing in the historic Hampstead swimming ponds',
      'Browsing independent bookshops, artisan bakeries, and floral ateliers along Flask Walk and Heath Street',
      'Leisurely Sunday roasts at historic 16th-century coaching inns like The Holly Bush and The Spaniards Inn',
      'An intimate community rhythm characterised by local gallery exhibitions, open-air theatre, and weekend markets'
    ],
    architecture: [
      'Early Georgian townhouses on Church Row with wrought-iron railings and original fanlights',
      'Substantial red-brick Victorian and Edwardian family villas with generous mature gardens',
      'Modernist landmarks, including notable commissions by Ernö Goldfinger (2 Willow Road) and progressive 1930s residential architecture',
      'Period cottage conversions and lateral apartments overlooking leafy private gardens'
    ],
    transport: [
      {
        station: 'Hampstead Station',
        lines: ['Northern Line (Edgware Branch)'],
        walkingTime: 'Central village hub'
      },
      {
        station: 'Hampstead Heath',
        lines: ['London Overground (Mildmay Line)'],
        walkingTime: '5–8 minutes walk from South End Green'
      },
      {
        station: 'Belsize Park',
        lines: ['Northern Line'],
        walkingTime: '8–10 minutes walk south'
      }
    ],
    localHighlights: [
      {
        name: 'Hampstead Heath & Parliament Hill',
        category: 'Parks & Greenery',
        description: 'Nearly 800 acres of ancient parkland offering iconic panoramic views across the London skyline.'
      },
      {
        name: 'Flask Walk & Hampstead High Street',
        category: 'Dining & Cafés',
        description: 'Pedestrianised Victorian alleyway lined with antiquarian bookshops, cafés, and flower markets.'
      },
      {
        name: 'Keats House & Burgh House',
        category: 'Culture & Arts',
        description: 'Historic cultural hubs hosting regular chamber music concerts, poetry readings, and local exhibitions.'
      },
      {
        name: 'Prestigious Local Schools',
        category: 'Schools',
        description: 'Renowned independent and state institutions including South Hampstead High School, University College School (UCS), and Devonshire House.'
      }
    ],
    whoItSuits: [
      'Families desiring substantial garden homes within walking distance of leading academic schools',
      'Creative and legal professionals appreciating quiet historical charm alongside swift City/West End commutes',
      'Nature lovers and dog owners who value having London’s wildest open green space on their doorstep'
    ],
    marketContext:
      'Hampstead’s residential property landscape is underpinned by enduring scarcity and conservation protections. Period houses along turnings like Downshire Hill, Well Walk, and Church Row rarely change hands, making early advisory guidance invaluable for prospective buyers and sellers alike.'
  },
  highgate: {
    slug: 'highgate',
    name: 'Highgate',
    title: 'Highgate, London N6 | Elevated Serenity & Architectural Heritage',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=85',
    tagline: 'An elevated, verdant enclave with panoramic London vistas and village composure.',
    summary:
      'Perched high above the capital on a picturesque ridge, Highgate retains an air of tranquil isolation rarely found in inner London. Its preserved Georgian high street, leafy private roads, and surrounding swathes of ancient woodland—including Highgate Wood and Queen’s Wood—create a serene sanctuary for homeowners who cherish privacy, architectural integrity, and clean air.',
    lifestyle: [
      'Weekend strolls through the manicured terraces of Waterlow Park and historic Highgate Cemetery',
      'Meeting neighbours at artisan delis, traditional butcheries, and independent wine merchants in Highgate Village',
      'Taking in theatrical productions and community lectures at Lauderdale House cultural centre',
      'Fast access to both the Northern Line and peaceful cycling routes across north London'
    ],
    architecture: [
      'Stately 17th and 18th-century brick residences along The Grove and Southwood Lane',
      'High-Victorian Gothic and Edwardian double-fronted family villas with sweeping grounds',
      'Celebrated mid-century modernist schemes, including Berthold Lubetkin’s pioneering Highpoint I and II',
      'Discreet contemporary infill homes designed with timber, zinc, and expansive glass'
    ],
    transport: [
      {
        station: 'Highgate Station',
        lines: ['Northern Line (High Barnet Branch)'],
        walkingTime: 'Located on Archway Road (7–10 mins to Village)'
      },
      {
        station: 'Archway Station',
        lines: ['Northern Line (Zone 2/3 boundary)'],
        walkingTime: '12 mins walk down Highgate Hill'
      },
      {
        station: 'Gospel Oak',
        lines: ['London Overground'],
        walkingTime: 'Quick bus or walk via Dartmouth Park'
      }
    ],
    localHighlights: [
      {
        name: 'Waterlow Park',
        category: 'Parks & Greenery',
        description: '26 acres of landscaped hillside gardens bequeathed as a “garden for the gardenless”, boasting reflective ponds and tennis courts.'
      },
      {
        name: 'Highgate Wood & Queen’s Wood',
        category: 'Parks & Greenery',
        description: 'Ancient hornbeam and oak woodland providing shaded walking trails and natural conservation habitats.'
      },
      {
        name: 'Lauderdale House',
        category: 'Culture & Arts',
        description: 'Grade II* listed arts centre hosting classical concerts, contemporary art exhibitions, and community festivals.'
      },
      {
        name: 'Highgate School & Channing School',
        category: 'Schools',
        description: 'Two of the country’s most prestigious co-educational and girls’ independent academic day schools.'
      }
    ],
    whoItSuits: [
      'Discerning homeowners who appreciate a leafy, low-density urban setting with exceptional privacy',
      'Architecture enthusiasts attracted to Highpoint, modernist villas, and preserved Georgian squares',
      'Families prioritizing expansive green space, clean air, and top-tier North London schooling'
    ],
    marketContext:
      'Highgate’s property market is noted for low turnover and long-term ownership. Many properties enjoy south-facing gardens or views toward the City, with modernised lateral apartments and detached family homes commanding strong attention across all market seasons.'
  },
  islington: {
    slug: 'islington',
    name: 'Islington',
    title: 'Islington, London N1 | Georgian Elegance & Dynamic Urban Culture',
    heroImage: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Tree-lined garden squares, theatre culture, and effortless connectivity to the City.',
    summary:
      'Islington embodies the ideal blend of classical London residential beauty and vibrant modern energy. Known for its immaculate Georgian and early Victorian garden squares, tree-lined avenues, and Upper Street’s legendary culinary and theatrical scene, Islington appeals to design-conscious professionals, downsizers, and families seeking central living without sacrificing green respite.',
    lifestyle: [
      'Evening performances at the Almeida Theatre, King’s Head Theatre, or world-class dance at Sadler’s Wells',
      'Browsing design showrooms, antique markets along Camden Passage, and independent culinary boutiques',
      'Afternoon espresso along the Regent’s Canal towpath toward King’s Cross and Coal Drops Yard',
      'Enjoying summer afternoons in the peaceful sanctuary of Thornhill Square, Lonsdale Square, or Highbury Fields'
    ],
    architecture: [
      'Harmonious early-19th-century Georgian terraces with decorative wrought-iron balconies and fanlight doorways',
      'Gothic-revival and Victorian villas in Canonbury and Barnsbury conservation areas',
      'Industrial warehouse and loft conversions along the Regent’s Canal corridor',
      'Contemporary sustainable lateral developments set around landscaped internal courtyards'
    ],
    transport: [
      {
        station: 'Angel Station',
        lines: ['Northern Line (Bank Branch)'],
        walkingTime: 'Heart of South Upper Street'
      },
      {
        station: 'Highbury & Islington',
        lines: ['Victoria Line', 'London Overground', 'National Rail'],
        walkingTime: 'North end of Upper Street'
      },
      {
        station: 'Essex Road & Canonbury',
        lines: ['National Rail', 'London Overground'],
        walkingTime: 'Convenient links across east and central London'
      }
    ],
    localHighlights: [
      {
        name: 'Upper Street & Camden Passage',
        category: 'Dining & Cafés',
        description: 'A vibrant mile of independent restaurants, specialty coffee houses, vintage dealers, and interior ateliers.'
      },
      {
        name: 'The Almeida & Sadler’s Wells',
        category: 'Culture & Arts',
        description: 'World-renowned producing theatres drawing international talent to intimate, atmospheric venues.'
      },
      {
        name: 'Highbury Fields',
        category: 'Parks & Greenery',
        description: 'The borough’s largest open space, lined with mature planes, tennis courts, and fitness facilities.'
      },
      {
        name: 'Canonbury & Barnsbury Conservation Areas',
        category: 'Culture & Arts',
        description: 'Historic residential pockets celebrated for tranquil stucco terraces and award-winning gastro pubs.'
      }
    ],
    whoItSuits: [
      'City and West End professionals seeking a 15-minute commute paired with exceptional dining and culture',
      'Design aficionados who appreciate the proportions and ceiling heights of Georgian architecture',
      'Couples and families looking for a vibrant, walkable neighbourhood with community warmth'
    ],
    marketContext:
      'Islington is characterised by strong demand for both classic family townhouses in Barnsbury and Canonbury, and turnkey lateral apartments close to transport. Its proximity to King’s Cross tech hubs and the City of London ensures steady liquidity across sales and premium lettings.'
  },
  camden: {
    slug: 'camden',
    name: 'Camden',
    title: 'Camden, London NW1 | Canalside Vibrancy & Architectural Conversions',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Dynamic canalside culture, Victorian terraces, and rapid West End connections.',
    summary:
      'Bordered by Regent’s Park to the west and the peaceful towpaths of Regent’s Canal to the north, Camden offers an eclectic blend of architectural heritage and creative energy. Beyond its bustling high street and market heritage lie serene residential enclaves of early Victorian stucco terraces, cobble-stoned mews, and award-winning warehouse loft conversions.',
    lifestyle: [
      'Morning runs along the Regent’s Canal towpath towards King’s Cross and Primrose Hill',
      'Browsing independent food stalls, artisan bakeries, and vinyl shops in Hawley Wharf and Stables Market',
      'Evenings at iconic cultural venues including the Roundhouse, Jazz Cafe, and intimate fringe theatres',
      'Easy weekend picnics and open-air theatre in nearby Regent’s Park'
    ],
    architecture: [
      'Early Victorian stucco-fronted terraces along quiet residential turnings near Camden Square',
      'Industrial canal warehouse and former piano-factory loft conversions with exposed brick and high ceilings',
      'Picturesque cobblestone mews houses offering private, tranquil living',
      'Contemporary eco-conscious lateral apartments overlooking the canal water basin'
    ],
    transport: [
      {
        station: 'Camden Town Station',
        lines: ['Northern Line (Both Charing Cross & Bank Branches)'],
        walkingTime: 'Central town hub'
      },
      {
        station: 'Camden Road',
        lines: ['London Overground (Mildmay Line)'],
        walkingTime: '3–5 minutes walk'
      },
      {
        station: 'Chalk Farm Station',
        lines: ['Northern Line'],
        walkingTime: '8 minutes walk north towards Primrose Hill'
      }
    ],
    localHighlights: [
      {
        name: 'Regent’s Canal & Towpath',
        category: 'Parks & Greenery',
        description: 'Historic waterway offering continuous, car-free walking and cycling routes between Little Venice and King’s Cross.'
      },
      {
        name: 'The Roundhouse',
        category: 'Culture & Arts',
        description: 'World-renowned performing arts venue housed within a striking Grade II* listed circular former railway engine shed.'
      },
      {
        name: 'Hawley Wharf & Waterside Dining',
        category: 'Dining & Cafés',
        description: 'Curated canalside dining precinct featuring independent culinary operators and waterside terraces.'
      },
      {
        name: 'Camden Square Conservation Area',
        category: 'Parks & Greenery',
        description: 'Peaceful garden square surrounded by handsome mid-19th-century Victorian family houses.'
      }
    ],
    whoItSuits: [
      'Creative, media, and tech professionals working in King’s Cross, Fitzrovia, and the West End',
      'Buyers seeking expansive loft conversions and authentic industrial architectural details',
      'Couples and sharers who thrive on exceptional live music, varied cuisine, and canal-side walks'
    ],
    marketContext:
      'Camden’s residential market features strong demand for both characterful warehouse conversions and traditional Victorian family houses within designated conservation areas. Its proximity to University College London (UCL) and major employment quarters maintains high liquidity in sales and prime corporate lettings.'
  },
  'stoke-newington': {
    slug: 'stoke-newington',
    name: 'Stoke Newington',
    title: 'Stoke Newington, London N16 | Independent Village Spirit & Leafy Parks',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    tagline: 'A community-focused village enclave with Victorian villas, Church Street dining, and historic parks.',
    summary:
      'Known affectionately as “Stokey”, Stoke Newington has retained its distinctive, self-contained village identity. Centred on Church Street’s celebrated independent shops, cafés, and restaurants, the area is bordered by the ancient green canopy of Abney Park Cemetery and the recreational expanse of Clissold Park. It remains one of London’s most sought-after neighbourhoods for families and design-led professionals.',
    lifestyle: [
      'Morning coffees and organic provisions along vibrant Stoke Newington Church Street',
      'Weekend strolls through Clissold Park, visiting the deer enclosure and Grade II* listed Clissold House',
      'Exploring the gothic romantic woodland paths of Abney Park, one of London’s Magnificent Seven cemeteries',
      'Visiting local farmers’ markets and family-friendly community arts festivals throughout the year'
    ],
    architecture: [
      'Broad, double-fronted Victorian and Edwardian family villas with deep private gardens',
      'Early-19th-century Georgian cottages along Church Street and surrounding quiet side roads',
      'Sensitive mid-century and contemporary infill developments celebrating sustainable natural materials',
      'Thoughtfully converted period maisonettes with direct access to private rear gardens'
    ],
    transport: [
      {
        station: 'Stoke Newington Station',
        lines: ['London Overground (Weaver Line)'],
        walkingTime: 'Direct 14-minute journey into Liverpool Street'
      },
      {
        station: 'Rectory Road',
        lines: ['London Overground'],
        walkingTime: '5 minutes walk south-east'
      },
      {
        station: 'Dalston Junction / Kingsland',
        lines: ['London Overground (Windrush Line)'],
        walkingTime: 'Short bus ride or 15-minute walk south'
      }
    ],
    localHighlights: [
      {
        name: 'Clissold Park',
        category: 'Parks & Greenery',
        description: '54 acres of Green Flag parkland with twin lakes, animal enclosures, tennis courts, and a charming café.'
      },
      {
        name: 'Stoke Newington Church Street',
        category: 'Dining & Cafés',
        description: 'One of London’s premier independent high streets, home to bakeries, bookshops, wine bars, and florists.'
      },
      {
        name: 'Abney Park Cemetery Nature Reserve',
        category: 'Parks & Greenery',
        description: 'Atmospheric woodland memorial park and local nature reserve with a restored non-denominational gothic chapel.'
      },
      {
        name: 'The West Reservoir Centre & Castle Climbing',
        category: 'Sports & Leisure',
        description: 'Open-water swimming, sailing, and a premier indoor climbing facility in a former Victorian water pumping station.'
      }
    ],
    whoItSuits: [
      'Young families seeking community atmosphere, outstanding green spaces, and high-performing primary schools',
      'Designers, writers, and creative directors who appreciate independent retail and distinct architectural personality',
      'City commuters looking for a relaxed village atmosphere with swift Overground trains directly into Liverpool Street'
    ],
    marketContext:
      'Stoke Newington continues to demonstrate strong capital resilience driven by exceptionally loyal local retention. Period family houses with generous gardens rarely come to market, while garden maisonettes and architectural conversions near Church Street attract immediate interest from discerning purchasers.'
  }
};
