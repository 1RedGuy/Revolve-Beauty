import React from "react";
import ServicesImageTextSection from "./ProcedureSection";

const FBSection = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center border-b-[1px] border-gray-800 lg:h-[600px]">
        <img src="/gsdf.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xl uppercase text-white lg:mb-4">
            Our Services
          </p>
          <h2 className="mb-4 mt-2 text-3xl font-bold text-white md:text-4xl lg:text-7xl">
            Botox & Fillers
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white md:text-xl">
            Experience expert care and precision with our Botox and filler
            treatments, <br />
            designed to help you achieve a refreshed, natural appearance.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-10 text-center lg:mt-16">
        <p className="text-sm uppercase tracking-[0.2rem] text-studio_pink md:text-base">
          Have a look at our
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-[0.2rem] text-pink-400 md:text-4xl lg:mt-10">
          Premium Procedures
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-xl lg:mt-8">
          Why settle for ordinary treatments when you can experience tailored
          enhancements <br />
          that bring out your natural beauty in a way only true expertise can
          deliver?
        </p>
      </div>
    
      <div className="px-4 lg:px-16">
        <ServicesImageTextSection
          imgSrc="/womn.jpg"
          title="Dermal Fillers"
          description="Enhance your natural beauty with Dermal Fillers, designed to restore volume, smooth wrinkles, and define facial contours. Enjoy immediate, natural-looking results. Commonly used for:"
          listItems={["Cheeks", "Lips", "Jawlines and Chin", "Nasolabial fold"]}
          details={{
            description:
              "We use premium fillers like Revolax, Restylane, Pluryal and Teosyal. Offering results that last from 6 months to 2 years. These treatments are:",
            items: ["Safe", "Customizable", "Minimally invasive"],
            duration: "1–2 hours",
            price: "250lv–500lv",
          }}
          reverse={true} // Text left, Image right
        />
        {/* Reusable ImageTextSection with reversed orientation */}
      

      <div className="border-[1px] border-studio_pink"></div>

      
        <ServicesImageTextSection
          imgSrc="/124t.jpg"
          title="Botox"
          description="Botox is an injectable treatment that temporarily relaxes muscles to reduce wrinkles and fine lines, offering quick and natural-looking results. Commonly used for (more available):"
          listItems={["Forehead", "Frown lines", "Crow's feet", "Axillary Hyperhidrosis"]}
          details={{
            description:
              "Botox provides visible results in 7-14 days and lasts for 4-6 months. This treatment is:",
            items: [
              "Quick",
              "Natural-looking",
              "Effective for fine lines and wrinkles",
            ],
            duration: "Up to 40 minutes",
            price: "150lv for 1 zone",
          }}
          reverse={false} // Text right, Image left
        />
      </div>
    </section>
  );
};

export default FBSection;
