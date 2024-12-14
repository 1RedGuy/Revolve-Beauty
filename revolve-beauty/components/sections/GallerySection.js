import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    "abc.png",
    "abv12.png",
    "Unknown.jpeg",
    "Unknown.jpeg",
  ];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full border-2 border-gray-400 hover:bg-gray-400"
      onClick={onClick}
    >
      <FaArrowLeft size={20}/>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full border-2 border-gray-400 hover:bg-gray-400"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-gradient-to-l from-studio_pink/25 to-transparent text-center pt-4">
    <h2 className=" text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
      Check Out Our Studio 
    </h2>
    <div className="pt-12 relative w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="h-64 md:h-96 lg:h-[28rem  ]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default Carousel;
