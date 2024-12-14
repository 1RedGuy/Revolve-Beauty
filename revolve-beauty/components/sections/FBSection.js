import React from 'react';

const ImageTextSection = ({ imgSrc, title, description, listItems, details, reverse }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center mt-10 lg:mt-36 lg:mb-40 gap-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      {/* Text Content */}
      <div className="w-full md:w-[50%] text-left text-gray-800">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-studio_pink">{title}</h3>
        <p className="mb-4 text-sm md:text-base">{description}</p>
        <ul className="list-disc pl-5 mb-4 text-sm md:text-base text-gray-700">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="mb-4 text-sm md:text-base">{details.description}</p>
        <ul className="list-disc pl-5 mb-4 text-sm md:text-base text-gray-700">
          {details.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="font-bold text-gray-900">Details:</p>
          <ul className="list-none pl-0 text-gray-800 text-sm md:text-base">
            <li>
              <strong>Duration:</strong> {details.duration}
            </li>
            <li>
              <strong>Price:</strong> {details.price}
            </li>
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-[45%] lg:w-[40%]">
        <img
          src={imgSrc}
          className="w-full object-cover rounded-lg shadow-lg border-2 border-studio_pink"
        />
      </div>
    </div>
  );
};

const FBSection = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center w-full h-[400px] lg:h-[600px] border-b-[1px] border-gray-800">
        <img src="/gsdf.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className="text-white text-xl uppercase mb-2 lg:mb-4">Our Services</p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold mb-4 mt-2">
            Botox & Fillers
          </h2>
          <p className="text-white text-sm md:text-xl mt-2 leading-relaxed">
            Experience expert care and precision with our Botox and filler treatments, <br />
            designed to help you achieve a refreshed, natural appearance.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10 lg:mt-16">
        <p className="uppercase text-studio_pink tracking-[0.2rem] text-sm md:text-base">
          Have a look at our
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-6 lg:mt-10 text-pink-400 tracking-[0.2rem]">
          Premium Procedures
        </h2>
        <p className="text-sm md:text-xl mt-6 lg:mt-8 text-gray-300 leading-relaxed">
          Why settle for ordinary treatments when you can experience tailored enhancements <br />
          that bring out your natural beauty in a way only true expertise can deliver?
        </p>
      </div>

      <div className="px-4 lg:px-16">
        {/* Reusable ImageTextSection with normal orientation */}
        <ImageTextSection
          imgSrc="/womn.jpg"
          title="Dermal Fillers"
          description="Enhance your natural beauty with Dermal Fillers, designed to restore volume, smooth wrinkles, and define facial contours. Enjoy immediate, natural-looking results. Commonly used for:"
          listItems={["Cheeks", "Lips", "Jawlines", "Under-eye hollows"]}
          details={{
            description:
              "We use premium fillers like Hyaluronic Acid (HA) and Poly-L-Lactic Acid (PLLA), offering results that last from 6 months to 2 years. These treatments are:",
            items: ["Safe", "Customizable", "Minimally invasive"],
            duration: "1–2 hours",
            price: "250lv–450lv",
          }}
          reverse={true} // Text left, Image right
        />
        {/* Reusable ImageTextSection with reversed orientation */}
        <ImageTextSection
  imgSrc="/botox.jpg"
  title="Botox"
  description="Botox is an injectable treatment that temporarily relaxes muscles to reduce wrinkles and fine lines, offering quick and natural-looking results. Commonly used for:"
  listItems={["Forehead", "Frown lines", "Crow's feet"]}
  details={{
    description:
      "Botox provides visible results in 3–7 days and lasts for 3–4 months. This treatment is:",
    items: ["Quick", "Natural-looking", "Effective for fine lines and wrinkles"],
    duration: "30–40 minutes",
    price: "150lv for 1 zone",
  }}
  reverse={false} // Text right, Image left
/>
      </div>
    </section>
  );
};

export default FBSection;
