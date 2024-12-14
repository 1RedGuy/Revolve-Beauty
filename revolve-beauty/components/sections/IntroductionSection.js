import Card from "../reusables/ServiceCards";
  
  const IntroductionSection = () => {
    return (
      <section
        className="pt-32 relative bg-gradient-to-l from-studio_pink/25 to-transparent min-h-screen overflow-hidden lg:pb-16"
      >
        <div className="container h-full mx-auto relative">
          {/* Heading Section */}
          <div className="text-center lg:text-left mb-12 lg:mb-20">
            <h2 className="text-pink-500 mb-3 text-2xl uppercase font-semibold">
              Services
            </h2>
            <h2 className="text-5xl leading-tight md:text-6xl font-bold text-gray-800 md:leading-tight">
              We are experienced <br />
              in making you <br />
              More Beautiful
            </h2>
          </div>
  
          {/* Main Content Section */}
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Column 1 */}
            <div className="w-full lg:w-[20%] lg:mr-12 lg:pt-20 lg:border-t-[3px] border-pink-500">
              <h3 className="text-[2.6rem] font-bold text-gray-800 mb-6 leading-[50px]">
                Beauty <br />
                treatments
              </h3>
              <p className="text-gray-600 w-[288px] text-xl mb-10 leading-[32px] tracking-wider">
                The beauty industry has grown so much that it can be hard to keep
                track of the treatments that are available.
              </p>
              <button className="bg-pink-500 text-white px-12 py-3 shadow-2xl shadow-pink-300 text-lg font-medium rounded-full self-start">
                Learn More
              </button>
            </div>
  
            <div className="hidden hero_lg:block lg:w-[25%] lg:mr-12 w-full h-[30rem]">
              <div className="h-full flex items-center justify-center rounded-lg overflow-hidden border-2 border-pink-300">
                <img
                  src="543.jpg"
                  alt="Beauty Treatment"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
  
            {/* Column 3 */}
            <div className="w-full lg:w-[55%]">
              <div className="ml-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <Card
                    title="Hair Treatments"
                    description="Project recently succeeded with exceptional results. Project recently succeeded with exceptional results."
                    price="299"
                  />
                  <Card
                    title="Skincare & Facial"
                    description="Achieve flawless skin with our professional facial treatments. Project recently succeeded with exceptional results."
                    price="399"
                  />
                  <Card
                    title="Facial Massage"
                    description="Relax and rejuvenate with our signature facial massages. Project recently succeeded with exceptional results."
                    price="499"
                  />
                  <Card
                    title="Ultra Glow Therapy"
                    description="Enhance your glow with our advanced glow therapy. Project recently succeeded with exceptional results."
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
  
