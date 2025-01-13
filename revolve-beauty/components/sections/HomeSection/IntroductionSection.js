import Link from "next/link";
import Card from "../../reusables/ServiceCards";

const IntroductionSection = () => {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden bg-gradient-to-l from-studio_pink/25 to-transparent pt-32 lg:pb-16">
      <div className="container relative mx-auto h-full">
        {/* Heading Section */}
        <div className="mb-12 text-center lg:mb-20 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold uppercase text-pink-500">
            Services
          </h2>
          <h2 className="text-5xl font-bold leading-tight text-gray-800 md:text-6xl md:leading-tight">
            We are experienced <br />
            in making you <br />
            More Beautiful
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Column 1 */}
          <div className="w-full border-pink-500 lg:mr-12 lg:w-[20%] lg:border-t-[3px] lg:pt-20">
            <h3 className="mb-6 text-[2.6rem] font-bold leading-[50px] text-gray-800">
              Beauty <br />
              treatments
            </h3>
            <p className="mb-10 w-[288px] text-xl leading-[32px] tracking-wider text-gray-600">
              The beauty industry has grown so much that it can be hard to keep
              track of the treatments that are available.
            </p>
            <Link href="/about">
            <button className="self-start rounded-full bg-pink-500 px-12 py-3 text-lg font-medium text-white shadow-2xl shadow-pink-300">
              Learn More
            </button>
            </Link>
          </div>

          <div className="hidden h-[30rem] w-full lg:mr-12 lg:w-[25%] hero_lg:block">
            <div className="flex h-full items-center justify-center overflow-hidden rounded-lg border-2 border-pink-300">
              <img
                src="543.jpg"
                alt="Beauty Treatment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="w-full lg:w-[55%]">
            <div className="ml-20">
              <div className="grid grid-cols-1 gap-6 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
                <Card
                  title="Hydrafacial"
                  description="Experience radiant, hydrated skin with our advanced Hydrafacial treatment. Achieve stunning results "
                  price="299"
                />
                <Card
                  title="Fillers"
                  description="Enhance your natural features with our safe and effective dermal fillers for a youthful, refreshed appearance."
                  price="399"
                />
                <Card
                  title="Mesotherapy"
                  description="Revitalize your skin with our targeted mesotherapy treatments, delivering nutrients directly to rejuvenate and restore your skin’s glow."
                  price="499"
                />
                <Card
                  title="Manual Cleaning"
                  description="Achieve clear, smooth skin with our expert manual cleaning treatment, removing impurities and unclogging pores for a fresh, rejuvenated look."
                  price="599"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
