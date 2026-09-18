import { Link } from '../context/RouterContext';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#141615] text-[#D5D1C6] border-t border-[#2A2E2C]">
      {/* Upper Valuation Banner */}
      <div className="border-b border-[#2A2E2C] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#B89358] font-medium">
              Thinking of selling or letting?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FDFCF7] mt-1 font-normal">
              Find out what your London home is worth in today’s market.
            </h2>
            <p className="text-sm text-[#A39E93] mt-2 font-light">
              Receive a bespoke, confidential property appraisal compiled by senior directors with deep local transaction evidence.
            </p>
          </div>
          <div>
            <Link
              to="/valuation"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9E7D47] hover:bg-[#B89358] text-[#141615] text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              <span>Request a Valuation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#232726] border border-[#9E7D47]/40 flex items-center justify-center">
                <span className="font-serif text-[#FDFCF7] text-base font-light">NV</span>
              </div>
              <span className="font-serif text-xl tracking-[0.08em] text-[#FDFCF7] uppercase">
                North &amp; Vale Property
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#A39E93] max-w-sm">
              Independent residential estate and lettings specialists combining architectural appreciation, thoughtful presentation, and a personal approach to buying, selling, and renting homes across London.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#C5C0B3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                <span>14 Heath Street, Hampstead Village, London NW3 6TE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89358] shrink-0" />
                <a href="tel:+442079460958" className="hover:text-[#FDFCF7] transition-colors">
                  +44 20 7946 0958
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B89358] shrink-0" />
                <a href="mailto:hello@northvaleproperty.example" className="hover:text-[#FDFCF7] transition-colors">
                  hello@northvaleproperty.example
                </a>
              </div>
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#FDFCF7] font-semibold mb-4">
              Properties
            </h3>
            <ul className="space-y-2 text-xs text-[#A39E93]">
              <li>
                <Link to="/properties" className="hover:text-[#FDFCF7] transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/properties/for-sale" className="hover:text-[#FDFCF7] transition-colors">
                  Property for Sale
                </Link>
              </li>
              <li>
                <Link to="/properties/to-rent" className="hover:text-[#FDFCF7] transition-colors">
                  Property to Rent
                </Link>
              </li>
              <li>
                <Link to="/properties/example-property" className="hover:text-[#FDFCF7] transition-colors">
                  Featured Residence
                </Link>
              </li>
              <li>
                <Link to="/valuation" className="hover:text-[#FDFCF7] transition-colors">
                  Complimentary Valuation
                </Link>
              </li>
            </ul>
          </div>

          {/* London Areas */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#FDFCF7] font-semibold mb-4">
              Areas We Cover
            </h3>
            <ul className="space-y-2 text-xs text-[#A39E93]">
              <li>
                <Link to="/areas" className="hover:text-[#FDFCF7] transition-colors">
                  All Area Guides
                </Link>
              </li>
              <li>
                <Link to="/areas/hampstead" className="hover:text-[#FDFCF7] transition-colors">
                  Hampstead (NW3)
                </Link>
              </li>
              <li>
                <Link to="/areas/highgate" className="hover:text-[#FDFCF7] transition-colors">
                  Highgate (N6)
                </Link>
              </li>
              <li>
                <Link to="/areas/islington" className="hover:text-[#FDFCF7] transition-colors">
                  Islington (N1)
                </Link>
              </li>
              <li>
                <Link to="/areas/camden" className="hover:text-[#FDFCF7] transition-colors">
                  Camden (NW1)
                </Link>
              </li>
              <li>
                <Link to="/areas/stoke-newington" className="hover:text-[#FDFCF7] transition-colors">
                  Stoke Newington (N16)
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency & Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#FDFCF7] font-semibold mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2 text-xs text-[#A39E93]">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B89358] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#C5C0B3]">Monday – Friday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-[#C5C0B3]">Saturday</p>
                <p>10:00 AM – 4:00 PM</p>
              </div>
              <div className="pt-1">
                <p className="text-[#C5C0B3]">Sunday</p>
                <p className="text-[#78766E]">Closed (Private viewings by appt)</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2E2C]">
              <h4 className="text-[11px] uppercase tracking-wider text-[#FDFCF7] font-medium mb-2">
                Agency
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A39E93]">
                <li>
                  <Link to="/services" className="hover:text-[#FDFCF7] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FDFCF7] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FDFCF7] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2A2E2C] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78766E]">
          <p>
            &copy; {new Date().getFullYear()} North &amp; Vale Property. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="text-center md:text-right max-w-lg">
            <p className="text-[11px] text-[#A39E93]">
              <strong className="text-[#B89358]">Portfolio Demonstration Notice:</strong> North &amp; Vale Property is a fictional London estate agency created by <span className="text-[#FDFCF7]">Zaza Digital</span> for portfolio and technical demonstration purposes. Properties, personnel, and telephone details are illustrative demonstrations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
