import { useState } from 'react';

const LanguageChangeIcon = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    console.log(`Language changed to: ${language}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="w-6 h-6 flex items-center justify-center"
        aria-label="Change Language"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21L15.75 9.75 21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg">
          <button
            onClick={() => handleLanguageChange('en')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('bg')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Български
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageChangeIcon;
