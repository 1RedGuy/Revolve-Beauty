import LanguageChangeIcon from "./icons/LanguageChangeIcon";
import MenuIcon from "./icons/MenuIcon";

const Header = () => {
  return (
    <header className="bg-white text-FFFFFF py-[25px] sticky top-0 z-50">
      <div className="w-full flex items-center lg:py-5 pb-0 px-6 lg:p-9">
        <div className="flex-1 text-2xl text-gray-500 hero_lg:pl-[150px]">
          <a href="/">Revolve Beauty</a>
        </div>

        <nav className="hidden hero_lg:flex justify-center hero_lg:space-x-20 w-90 text-lg text-gray-500 pr-[160px]">
          <a href="#home" className="text-black">Home</a>
          <a href="#about">About</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact us</a>
          <a href="#icon" className="flex items-center">
          <LanguageChangeIcon />
          </a>
        </nav>

        <button
          className="hero_lg:hidden text-black hover:text-gray-200 focus:outline-none ml-auto"
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
