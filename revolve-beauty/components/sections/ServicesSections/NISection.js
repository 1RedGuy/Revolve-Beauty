import React from "react";
import ServicesImageTextSection from "./ProcedureSection";

const NISection = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center border-b-[1px] border-gray-800 lg:h-[600px]">
        <img src="/mir.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xl uppercase text-white lg:mb-4">
            Our Services
          </p>
          <h2 className="mb-4 mt-2 text-3xl font-bold text-white md:text-4xl lg:text-7xl">
            Non-Invasive Procedures
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white md:text-xl">
            Discover our professional treatments designed to bring out your
            natural glow.
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
          Choose from our top-tier treatments to enhance your skin and beauty,
          customized to your needs.
        </p>
      </div>

      <div className="px-4 lg:px-16">
        <ServicesImageTextSection
          imgSrc="/chemical_peeling.jpg"
          title="Chemical Peeling"
          description="Chemical Peeling is a skin-resurfacing treatment using a mild chemical solution to exfoliate the skin, improving texture, tone, and reducing imperfections like acne scars and sun damage. Commonly used for:"
          listItems={["Acne scars", "Sun damage", "Uneven skin tone"]}
          details={{
            description:
              "This treatment helps rejuvenate your skin with minimal downtime. It is:",
            items: ["Effective", "Non-invasive", "Gentle exfoliation",  "Minimal downtime"],
            duration: "40 minutes",
            price: "120lv",
          }}
          reverse={true} // Text left, Image right
        />


        <div className="border-[1px] border-studio_pink my-10"></div>

  
        <ServicesImageTextSection
          imgSrc="/led_therapy.png"
          title="LED Therapy Facials"
          description="LED Therapy Facials use various wavelengths of light to treat skin concerns like aging, acne, and pigmentation. This non-invasive therapy is relaxing and offers no downtime. Commonly used for:"
          listItems={["Aging signs", "Acne", "Pigmentation", "Uneven skin tone"]}
          details={{
            description:
              "Red light stimulates collagen, blue light targets acne bacteria, and green light helps even out skin tone. Benefits include:",
            items: ["Non-invasive", "Relaxing", "No downtime"],
            duration: "1.5 hours",
            price: "90lv",
          }}
          reverse={false} // Text right, Image left
        />


        <div className="border-[1px] border-studio_pink my-10"></div>


        <ServicesImageTextSection
          imgSrc="/manual_cleaning.png"
          title="Manual Cleaning"
          description="Manual Cleaning is a facial treatment that involves cleansing, exfoliating, and moisturizing to maintain healthy, clear skin. Optional steps include steaming and gentle extractions. Commonly used for:"
          listItems={["Routine cleansing", "Exfoliation", "Clear skin maintenance"]}
          details={{
            description:
              "This treatment is gentle and cost-effective, suitable for most skin types. It is:",
            items: ["Gentle", "Affordable", "Suitable for all skin types"],
            duration: "1 hour",
            price: "70lv",
          }}
          reverse={true} // Text left, Image right
        />


      <div className="border-[1px] border-studio_pink my-10"></div>


        <ServicesImageTextSection
          imgSrc="/hydrafacial.jpg"
          title="HydraFacial"
          description="HydraFacial is a non-invasive, multi-step facial treatment that cleanses, exfoliates, hydrates, and nourishes the skin for glowing results. Commonly used for:"
          listItems={["Hydration", "Skin health", "Large pores", "Uneven skin tone"]}
          details={{
            description:
              "It combines techniques like hydration, suction extraction, and serum infusion. Benefits include:",
            items: ["Instant results", "Suitable for all skin types", "No downtime"],
            duration: "1.5 hours",
            price: "90lv",
          }}
          reverse={false} // Text right, Image left
        />
        </div>
    </section>
  );
};

export default NISection;
