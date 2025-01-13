import { useRouter } from "next/router";
import LanguageChangeIcon from "./icons/LanguageChangeIcon";
import MenuIcon from "./icons/MenuIcon";
import { useState } from "react";
import Link from "next/link";  // Import Link

const Header = () => {

  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }

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
            Home
          </Link>

          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-black" : "text-gray-500"
            } hover:text-gray-700`}
          >
            About
          </Link>

          {/* Dropdown Menu for Services */}
          <div className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`${
                router.pathname.startsWith("/services") ? "text-black" : "text-gray-500"
              } hover:text-gray-700 hover:cursor-default`}
            >
              Our Services
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
                  Fillers & Botox
                </Link>
                <Link
                  href="/services/minimal-invasive"
                  className={`block px-4 py-2 ${
                    isActive("/services/minimal-invasive")
                      ? "text-black"
                      : "text-gray-500"
                  } hover:bg-gray-100 hover:text-gray-700`}
                >
                  Minimal Invasive
                </Link>
                <Link
                  href="/services/non-invasive"
                  className={`block px-4 py-2 ${
                    isActive("/services/non-invasive")
                      ? "text-black"
                      : "text-gray-500"
                  } hover:bg-gray-100 hover:text-gray-700`}
                >
                  Non Invasive
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
            Contact us
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
