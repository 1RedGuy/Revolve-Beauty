import { useRouter } from "next/router";
import LanguageChangeIcon from "./icons/LanguageChangeIcon";
import MenuIcon from "./icons/MenuIcon";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const Header = () => {
  const router = useRouter();
  const { isClient, language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let timeoutId;

  const isActive = (path) => router.pathname === path;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setIsMobileMenuOpen(false);
  };

  // Return English content during SSR, translated content after hydration
  const renderContent = (key) => {
    if (!isClient) {
      // Default English values for SSR
      const defaultValues = {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Our Services',
        'nav.contact': 'Contact us',
        'nav.servicesDropdown.fillersBotox': 'Fillers & Botox',
        'nav.servicesDropdown.minimalInvasive': 'Minimal Invasive',
        'nav.servicesDropdown.nonInvasive': 'Non Invasive'
      };
      return defaultValues[key] || key;
    }
    return t(key);
  };

  useEffect(() => {
    return () => {
      // Cleanup: ensure body scroll is enabled when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white py-[15px] text-FFFFFF">
      <div className="flex w-full items-center px-6 pb-0 lg:p-9 lg:py-5">
        <div className="flex-1 text-2xl text-gray-500 hero_lg:pl-[150px]">
          <Link href="/" className="text-2xl text-gray-500">
            Revolve Beauty
          </Link>
        </div>

        <nav className="w-90 hidden justify-center pr-[160px] text-lg text-gray-500 hero_lg:flex hero_lg:space-x-20">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-black" : "text-gray-500"
            } hover:text-gray-700`}
          >
            {renderContent('nav.home')}
          </Link>

          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-black" : "text-gray-500"
            } hover:text-gray-700`}
          >
            {renderContent('nav.about')}
          </Link>

          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`${
                router.pathname.startsWith("/services") ? "text-black" : "text-gray-500"
              } hover:text-gray-700 hover:cursor-default`}
            >
              {renderContent('nav.services')}
            </span>
            {isOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-48 bg-white border-[1px] border-studio_pink rounded-lg overflow-hidden mt-[8px]">
                <Link
                  href="/services/fillers-botox"
                  className={`block px-4 py-2 ${
                    isActive("/services/fillers-botox")
                      ? "text-black"
                      : "text-gray-500"
                  } hover:bg-gray-100 hover:text-gray-700`}
                >
                  {renderContent('nav.servicesDropdown.fillersBotox')}
                </Link>
                <Link
                  href="/services/minimal-invasive"
                  className={`block px-4 py-2 ${
                    isActive("/services/minimal-invasive")
                      ? "text-black"
                      : "text-gray-500"
                  } hover:bg-gray-100 hover:text-gray-700`}
                >
                  {renderContent('nav.servicesDropdown.minimalInvasive')}
                </Link>
                <Link
                  href="/services/non-invasive"
                  className={`block px-4 py-2 ${
                    isActive("/services/non-invasive")
                      ? "text-black"
                      : "text-gray-500"
                  } hover:bg-gray-100 hover:text-gray-700`}
                >
                  {renderContent('nav.servicesDropdown.nonInvasive')}
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`${
              isActive("/contact") ? "text-black" : "text-gray-500"
            } hover:text-gray-700`}
          >
            {renderContent('nav.contact')}
          </Link>

          <a href="" className="flex items-center">
            <LanguageChangeIcon />
          </a>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="ml-auto text-gray-500 transition-colors duration-200 hover:text-gray-700 focus:outline-none hero_lg:hidden"
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out hero_lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-gray-200 px-6">
          <Link href="/" className="text-2xl font-medium text-gray-800">
            Revolve Beauty
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 transition-colors duration-200 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="h-[calc(100vh-72px)] overflow-y-auto px-6 py-12">
          <div className="flex flex-col space-y-8">
            <Link
              href="/"
              className={`text-xl font-medium ${
                isActive("/") ? "text-studio_pink" : "text-gray-800"
              }`}
              onClick={toggleMobileMenu}
            >
              {renderContent('nav.home')}
            </Link>
            <Link
              href="/about"
              className={`text-xl font-medium ${
                isActive("/about") ? "text-studio_pink" : "text-gray-800"
              }`}
              onClick={toggleMobileMenu}
            >
              {renderContent('nav.about')}
            </Link>
            
            {/* Services Section */}
            <div className="space-y-6">
              <span className="text-xl font-medium text-gray-800">
                {renderContent('nav.services')}
              </span>
              <div className="ml-4 flex flex-col space-y-5 border-l-2 border-studio_pink pl-6">
                <Link
                  href="/services/fillers-botox"
                  className={`text-lg ${
                    isActive("/services/fillers-botox") ? "text-studio_pink" : "text-gray-600"
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {renderContent('nav.servicesDropdown.fillersBotox')}
                </Link>
                <Link
                  href="/services/minimal-invasive"
                  className={`text-lg ${
                    isActive("/services/minimal-invasive") ? "text-studio_pink" : "text-gray-600"
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {renderContent('nav.servicesDropdown.minimalInvasive')}
                </Link>
                <Link
                  href="/services/non-invasive"
                  className={`text-lg ${
                    isActive("/services/non-invasive") ? "text-studio_pink" : "text-gray-600"
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {renderContent('nav.servicesDropdown.nonInvasive')}
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`text-xl font-medium ${
                isActive("/contact") ? "text-studio_pink" : "text-gray-800"
              }`}
              onClick={toggleMobileMenu}
            >
              {renderContent('nav.contact')}
            </Link>

            {/* Language Selector */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800">
                  {language === 'bg' ? 'Език' : 'Language'}
                </span>
                <div className="flex space-x-6">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`text-lg ${
                      language === 'en' ? 'text-studio_pink font-medium' : 'text-gray-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('bg')}
                    className={`text-lg ${
                      language === 'bg' ? 'text-studio_pink font-medium' : 'text-gray-600'
                    }`}
                  >
                    Български
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;