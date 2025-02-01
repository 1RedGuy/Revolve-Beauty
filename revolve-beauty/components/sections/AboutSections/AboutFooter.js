import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import Link from "next/link";

const AboutFooter = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'footer.rights': 'All Rights Reserved.',
        'footer.links.about': 'About',
        'footer.links.contact': 'Contact',
        'footer.links.instagram': 'Instagram'
      };
      return defaultValues[key];
    }
    return t(key);
  };

  return (
    <footer className="relative w-full bg-gray-50">
      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 md:py-10 lg:py-12 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="flex items-center space-x-3">

              <span className="text-xl font-semibold text-gray-900">
                Revolve Beauty
              </span>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Revolve Beauty. {renderContent('footer.rights')}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-studio_pink"
            >
              {renderContent('footer.links.about')}
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-studio_pink"
            >
              {renderContent('footer.links.contact')}
            </Link>
            <a 
              href="https://www.instagram.com/revolvebeauty.bg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-studio_pink"
            >
              <svg 
                className="h-5 w-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{renderContent('footer.links.instagram')}</span>
            </a>
          </nav>
        </div>

        {/* Additional Links with gradient separator */}
        <div className="mt-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="mt-6 flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-600 transition-colors duration-200 hover:text-studio_pink"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 transition-colors duration-200 hover:text-studio_pink"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Made by</span>
              <span>V.D.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;

