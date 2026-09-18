import { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Phone, Bookmark, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export function Header() {
  const { currentPath, savedPropertyIds } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAreasDropdownOpen(false);
    setPropertiesDropdownOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFCF7]/95 backdrop-blur-md shadow-xs border-b border-[#E6E3DB]'
          : 'bg-[#FDFCF7] border-b border-[#E6E3DB]/80'
      }`}
    >
      {/* Top Advisory Strip (Desktop) */}
      <div className="hidden lg:block border-b border-[#E6E3DB]/60 text-xs py-2 px-6 text-[#5A5955] bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="font-medium text-[#191B1A]">Prime London Residential Agency</span>
            <span className="text-[#C4BFB5]">•</span>
            <span>Hampstead, Highgate, Islington &amp; Central London</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+442079460958"
              className="flex items-center gap-1.5 font-medium text-[#191B1A] hover:text-[#9E7D47] transition-colors"
              title="Telephone North & Vale Property London Office"
            >
              <Phone className="w-3.5 h-3.5 text-[#9E7D47]" />
              <span>+44 20 7946 0958</span>
            </a>
            <span className="text-[#E6E3DB]">|</span>
            <span className="text-[#78766E]">Mon–Fri: 09:00–18:00 | Sat: 10:00–16:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-hidden shrink-0"
            aria-label="North & Vale Property Homepage"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#191B1A] border border-[#9E7D47]/40 flex items-center justify-center transition-transform group-hover:scale-[1.02] shadow-xs shrink-0">
              <span className="font-serif text-[#FDFCF7] text-base sm:text-lg font-light tracking-widest">NV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-[0.06em] text-[#191B1A] uppercase leading-tight">
                North &amp; Vale
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-[#9E7D47] uppercase font-semibold">
                Property • London
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#2C2E2D]" aria-label="Main Navigation">
            {/* Properties Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setPropertiesDropdownOpen(true)}
              onMouseLeave={() => setPropertiesDropdownOpen(false)}
            >
              <Link
                to="/properties"
                className={`flex items-center gap-1.5 hover:text-[#9E7D47] transition-colors py-1 ${
                  currentPath.startsWith('/properties') ? 'text-[#9E7D47]' : ''
                }`}
              >
                <span>Properties</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${propertiesDropdownOpen ? 'rotate-180 text-[#9E7D47]' : ''}`} />
              </Link>
              {propertiesDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white border border-[#E6E3DB] shadow-[0_10px_30px_rgba(28,30,29,0.08)] py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link
                    to="/properties"
                    className="block px-4 py-2.5 text-xs text-[#191B1A] hover:bg-[#FAF9F5] hover:text-[#9E7D47] transition-colors"
                  >
                    All Residences
                  </Link>
                  <Link
                    to="/properties/for-sale"
                    className="block px-4 py-2.5 text-xs text-[#191B1A] hover:bg-[#FAF9F5] hover:text-[#9E7D47] transition-colors"
                  >
                    Residences For Sale
                  </Link>
                  <Link
                    to="/properties/to-rent"
                    className="block px-4 py-2.5 text-xs text-[#191B1A] hover:bg-[#FAF9F5] hover:text-[#9E7D47] transition-colors"
                  >
                    Residences To Rent
                  </Link>
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <Link
                to="/areas"
                className={`flex items-center gap-1.5 hover:text-[#9E7D47] transition-colors py-1 ${
                  currentPath.startsWith('/areas') ? 'text-[#9E7D47]' : ''
                }`}
              >
                <span>Area Guides</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${areasDropdownOpen ? 'rotate-180 text-[#9E7D47]' : ''}`} />
              </Link>
              {areasDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-[#E6E3DB] shadow-[0_10px_30px_rgba(28,30,29,0.08)] py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link
                    to="/areas"
                    className="block px-4 py-2.5 text-xs text-[#191B1A] hover:bg-[#FAF9F5] hover:text-[#9E7D47] transition-colors font-medium"
                  >
                    All Neighbourhood Guides
                  </Link>
                  <div className="my-1 border-t border-[#E6E3DB]"></div>
                  <Link
                    to="/areas/hampstead"
                    className="block px-4 py-2 text-xs text-[#5A5955] hover:bg-[#FAF9F5] hover:text-[#191B1A] transition-colors"
                  >
                    Hampstead (NW3)
                  </Link>
                  <Link
                    to="/areas/highgate"
                    className="block px-4 py-2 text-xs text-[#5A5955] hover:bg-[#FAF9F5] hover:text-[#191B1A] transition-colors"
                  >
                    Highgate (N6)
                  </Link>
                  <Link
                    to="/areas/islington"
                    className="block px-4 py-2 text-xs text-[#5A5955] hover:bg-[#FAF9F5] hover:text-[#191B1A] transition-colors"
                  >
                    Islington (N1)
                  </Link>
                  <Link
                    to="/areas/camden"
                    className="block px-4 py-2 text-xs text-[#5A5955] hover:bg-[#FAF9F5] hover:text-[#191B1A] transition-colors"
                  >
                    Camden (NW1)
                  </Link>
                  <Link
                    to="/areas/stoke-newington"
                    className="block px-4 py-2 text-xs text-[#5A5955] hover:bg-[#FAF9F5] hover:text-[#191B1A] transition-colors"
                  >
                    Stoke Newington (N16)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`hover:text-[#9E7D47] transition-colors ${
                currentPath === '/services' ? 'text-[#9E7D47]' : ''
              }`}
            >
              Services
            </Link>

            <Link
              to="/about"
              className={`hover:text-[#9E7D47] transition-colors ${
                currentPath === '/about' ? 'text-[#9E7D47]' : ''
              }`}
            >
              The Practice
            </Link>

            <Link
              to="/contact"
              className={`hover:text-[#9E7D47] transition-colors ${
                currentPath === '/contact' ? 'text-[#9E7D47]' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Shortlist icon link with badge */}
            <Link
              to="/properties"
              className="relative p-2.5 text-[#191B1A] hover:text-[#9E7D47] transition-colors"
              title={`${savedPropertyIds.length} properties in your shortlist`}
              aria-label="View shortlist"
            >
              <Bookmark className={`w-4 h-4 ${savedPropertyIds.length > 0 ? 'fill-[#9E7D47] text-[#9E7D47]' : ''}`} />
              {savedPropertyIds.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#9E7D47] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {savedPropertyIds.length}
                </span>
              )}
            </Link>

            {/* Valuation CTA */}
            <Link
              to="/valuation"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#191B1A] hover:bg-[#2A2E2C] text-[#FDFCF7] text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-xs"
            >
              Request a Valuation
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <Link
              to="/valuation"
              className="px-2.5 sm:px-3 py-2 bg-[#191B1A] text-[#FDFCF7] text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold min-h-[38px] flex items-center justify-center"
            >
              Valuation
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 text-[#191B1A] hover:text-[#9E7D47] transition-colors focus:outline-hidden min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCF7] border-b border-[#E6E3DB] px-4 sm:px-6 pt-3 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4 pt-2">
            <div className="border-b border-[#E6E3DB] pb-3">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#9E7D47] block mb-2">
                Residences
              </span>
              <div className="flex flex-col space-y-2 pl-2">
                <Link
                  to="/properties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  All Properties
                </Link>
                <Link
                  to="/properties/for-sale"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Property For Sale
                </Link>
                <Link
                  to="/properties/to-rent"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Property To Rent
                </Link>
              </div>
            </div>

            <div className="border-b border-[#E6E3DB] pb-3">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#9E7D47] block mb-2">
                Area Guides
              </span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <Link
                  to="/areas/hampstead"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Hampstead NW3
                </Link>
                <Link
                  to="/areas/highgate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Highgate N6
                </Link>
                <Link
                  to="/areas/islington"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Islington N1
                </Link>
                <Link
                  to="/areas/camden"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Camden NW1
                </Link>
                <Link
                  to="/areas/stoke-newington"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#191B1A] hover:text-[#9E7D47] py-1.5 min-h-[36px] flex items-center"
                >
                  Stoke Newington N16
                </Link>
                <Link
                  to="/areas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#9E7D47] hover:underline py-1.5 font-medium min-h-[36px] flex items-center"
                >
                  All Areas &rarr;
                </Link>
              </div>
            </div>

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold py-2 text-[#191B1A] hover:text-[#9E7D47] min-h-[40px] flex items-center"
            >
              Agency Services
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold py-2 text-[#191B1A] hover:text-[#9E7D47] min-h-[40px] flex items-center"
            >
              About North &amp; Vale
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold py-2 text-[#191B1A] hover:text-[#9E7D47] min-h-[40px] flex items-center"
            >
              Contact Office
            </Link>

            <div className="pt-4 border-t border-[#E6E3DB] flex flex-col gap-3">
              <Link
                to="/valuation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#191B1A] text-[#FDFCF7] text-xs uppercase tracking-widest font-semibold text-center min-h-[44px] flex items-center justify-center"
              >
                Book Complimentary Valuation
              </Link>
              <a
                href="tel:+442079460958"
                className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-[#191B1A] font-semibold py-3 bg-[#FAF9F5] border border-[#E6E3DB] min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>Call +44 20 7946 0958</span>
              </a>
              <p className="text-[11px] text-[#78766E] text-center">
                14 Heath Street, Hampstead, London NW3 6TE
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
