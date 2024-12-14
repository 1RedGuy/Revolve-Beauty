import TickCircleIcon from "../icons/TickCircleIcon";

const HeroSection = () => {
  return (
    <section className="relative bg-white flex flex-col hero_lg:flex-row items-center justify-center px-6 hero_lg:px-20 hero_lg:pl-[0px] py-12 hero_lg:py-0 hero_lg:pr-0 pt-0 border-b border-gray-400">

      <div className="hidden hero_lg:flex mt-8 hero_lg:mt-0 hero_lg:w-[50%]">
        <div className="relative w-80 h-80 hero_lg:w-full hero_lg:h-full">
          <img
            src="test_resize.png"
            className="hero_lg:h-full object-cover hero_lg:w-full"
          />
        </div>
      </div>
    
      <div className="lg:w-auto text-center hero_lg:text-left flex flex-col items-center hero_lg:items-start hero_lg:h-full hero_lg:pr-[80px] hero_lg:pl-[45px] hero_lg:mt-[-150px]">
        <h2 className="text-pink-500 text-2xl hero_lg:text-3xl pt-3 hero_lg:pt-0 uppercase font-semibold mb-2">
          Beauty Studio&nbsp;&nbsp;__
        </h2>
        <h1 className="text-gray-900 text-6xl lg:text-7xl font-bold leading-tight mb-4 pt-3 hero_lg:pt-7 lg:leading-[80px] text">
          Glow Your Face <br />
          & Vitality With <br />
          Our Best Service
        </h1>
        <p className="text-gray-600 text-lg mb-6 py-3 hero_lg:py-7 space-y-3">
          <span className="block">
            <TickCircleIcon /> &nbsp;&nbsp;Facials and skin care treatments, hair-cutting.
          </span>
          <span className="block">
            <TickCircleIcon /> &nbsp;&nbsp;Waxing and other forms of hair removal, nail treatments.
          </span>
          <span className="block">
            <TickCircleIcon /> &nbsp;&nbsp;Complementary care such as aromatherapy and massages.
          </span>
        </p>
        <div className="flex justify-center items-center w-full gap-6">
          <button className="bg-pink-500 text-white shadow-2xl shadow-pink-200 text-lg font-medium py-[10px] px-4 sm:px-6 hero_lg:px-[56px] rounded-full">
            Book Appointment
          </button>
          <button className="bg-white text-gray-800 shadow-2xl shadow-pink-200 text-lg text-lgfont-medium py-[10px] px-4 sm:px-6 hero_lg:px-[56px] rounded-full border border-pink-500">
            Know Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;