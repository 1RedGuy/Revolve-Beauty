import { useRouter } from "next/router";
import LanguageChangeIcon from "./icons/LanguageChangeIcon";
import MenuIcon from "./icons/MenuIcon";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const Header = () => {
  const router = useRouter();
  const { isClient } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header className="text-FFFFFF sticky top-0 z-50 bg-white py-[15px]">
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
          className="ml-auto text-black hover:text-gray-200 focus:outline-none hero_lg:hidden"
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;