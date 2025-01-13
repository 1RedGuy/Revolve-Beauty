import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const images = ["studio6.jpg", "studio1.jpg", "studio3.jpg", "studio4.jpg"];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border-2 border-gray-400 bg-white p-2 hover:bg-gray-400"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border-2 border-gray-400 bg-white p-2 hover:bg-gray-400"
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
    <section className="bg-gradient-to-l from-studio_pink/25 to-transparent py-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
        Check Out Our Studio
      </h2>
      <div className="relative mx-auto w-full max-w-4xl pt-12">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="lg:h-[28rem ] h-64 md:h-96">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
