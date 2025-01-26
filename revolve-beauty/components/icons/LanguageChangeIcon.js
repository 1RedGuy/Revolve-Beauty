import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageChangeIcon = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex h-6 w-6 items-center justify-center hover:cursor-default"
        aria-label="Change Language"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21L15.75 9.75 21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-28 rounded border-[1px] border-studio_pink bg-white overflow-hidden">
          <div className="block"> 
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                language === 'en' ? 'bg-gray-100' : ''
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('bg')}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                language === 'bg' ? 'bg-gray-100' : ''
              }`}
            >
              Български
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageChangeIcon;
