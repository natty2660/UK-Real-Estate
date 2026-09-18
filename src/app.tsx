import { RouterProvider, useRouter, Link } from './context/RouterContext';
import { DemonstrationBanner } from './components/DemonstrationBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';

// Pages
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AreasPage } from './pages/AreasPage';
import { AreaDetailPage } from './pages/AreaDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ValuationPage } from './pages/ValuationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function RouteSwitch() {
  const { currentPath } = useRouter();

  // Route matching logic
  // Normalize path by stripping query strings and trailing slashes
  const cleanPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

  // 1. Home
  if (cleanPath === '' || cleanPath === '/') {
    return <HomePage />;
  }

  // 2. Specific Property subroutes
  if (cleanPath === '/properties/for-sale') {
    return <PropertiesPage initialListingType="sale" />;
  }

  if (cleanPath === '/properties/to-rent') {
    return <PropertiesPage initialListingType="rent" />;
  }

  // 3. Single Property Detail: /properties/:slug
  if (cleanPath.startsWith('/properties/')) {
    const slug = cleanPath.replace('/properties/', '');
    if (slug && slug !== 'for-sale' && slug !== 'to-rent') {
      return <PropertyDetailPage slug={slug} />;
    }
  }

  // 4. Properties Index
  if (cleanPath === '/properties') {
    return <PropertiesPage initialListingType="all" />;
  }

  // 5. Single Area Guide: /areas/:slug
  if (cleanPath.startsWith('/areas/')) {
    const slug = cleanPath.replace('/areas/', '');
    if (slug) {
      return <AreaDetailPage areaSlug={slug} />;
    }
  }

  // 6. Areas Index
  if (cleanPath === '/areas') {
    return <AreasPage />;
  }

  // 7. Services
  if (cleanPath === '/services') {
    return <ServicesPage />;
  }

  // 8. Valuation
  if (cleanPath === '/valuation') {
    return <ValuationPage />;
  }

  // 9. About
  if (cleanPath === '/about') {
    return <AboutPage />;
  }

  // 10. Contact
  if (cleanPath === '/contact') {
    return <ContactPage />;
  }

  // 11. 404 Not Found Page
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FDFCF7] px-4 py-20">
      <SEOHead
        title="Page Not Found | North & Vale Property"
        description="The requested page could not be found. Explore properties for sale and to rent across Hampstead, Highgate, and Islington."
        noindex={true}
      />
      <div className="max-w-md w-full text-center p-8 border border-[#E8E5DD] bg-white shadow-xs">
        <span className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
          Error 404
        </span>
        <h1 className="font-serif text-3xl font-normal text-[#1C1E1D] mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#78766E] leading-relaxed mb-6">
          The requested address could not be located in our London residential catalogue.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/properties"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Explore Properties
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#F4F2EB] hover:bg-[#E8E5DD] text-[#1C1E1D] border border-[#E8E5DD] text-xs uppercase tracking-wider font-medium transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#FDFCF7] text-[#1C1E1D] selection:bg-[#9E7D47] selection:text-white">
        {/* Demonstration Disclaimer Banner */}
        <DemonstrationBanner />

        {/* Global Architectural Navigation Header */}
        <Header />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <RouteSwitch />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </RouterProvider>
  );
}
