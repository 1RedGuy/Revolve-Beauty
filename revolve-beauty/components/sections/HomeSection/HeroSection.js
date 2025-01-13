import TickCircleIcon from "../../icons/TickCircleIcon";
import Link from "next/link";  // Import Link from next

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center border-b border-gray-400 bg-white px-6 py-12 pt-0 hero_lg:flex-row hero_lg:px-20 hero_lg:py-0 hero_lg:pl-[0px] hero_lg:pr-0">
      <div className="mt-8 hidden hero_lg:mt-0 hero_lg:flex hero_lg:w-[50%]">
        <div className="relative h-80 w-80 hero_lg:h-full hero_lg:w-full">
          <img
            src="test_resize.png"
            className="object-cover hero_lg:h-full hero_lg:w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center lg:w-auto hero_lg:mt-[-150px] hero_lg:h-full hero_lg:items-start hero_lg:pl-[45px] hero_lg:pr-[80px] hero_lg:text-left">
        <h2 className="mb-2 pt-3 text-2xl font-semibold uppercase text-pink-500 hero_lg:pt-0 hero_lg:text-3xl">
          Beauty Studio&nbsp;&nbsp;__
        </h2>
        <h1 className="text mb-4 pt-3 text-6xl font-bold leading-tight text-gray-900 lg:text-7xl lg:leading-[80px] hero_lg:pt-7">
          Glow Your Face <br />
          & Vitality With <br />
          Our Best Service
        </h1>
        <p className="mb-6 space-y-3 py-3 text-lg text-gray-600 hero_lg:py-7">
          <span className="block">
            <TickCircleIcon /> &nbsp;&nbsp;Rejuvenating Skin Care and Advanced Aesthetic Treatments
          </span>
          <span className="block">
            <TickCircleIcon /> &nbsp;&nbsp;Body Contouring and Hair Restoration
          </span>
          <span className="block">
            <TickCircleIcon /> &nbsp;&nbsp;Cutting-Edge Anti-Aging Solutions
          </span>
        </p>
        <div className="flex w-full items-center justify-center gap-6">
          <Link href="/contact">  {/* Wrap in Link */}
              <button className="rounded-full bg-pink-500 px-4 py-[10px] text-lg font-medium text-white shadow-2xl shadow-pink-200 sm:px-6 hero_lg:px-[56px]">
                Book Appointment
              </button>
          </Link>
          <Link href="#services">  {/* Wrap in Link */}
              <button className="font-medium rounded-full border border-pink-500 bg-white px-4 py-[10px] text-lg text-gray-800 shadow-2xl shadow-pink-200 sm:px-6 hero_lg:px-[56px]">
                Know Our Services
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
