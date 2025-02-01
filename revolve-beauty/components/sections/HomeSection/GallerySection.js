import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import Image from 'next/image';

const Carousel = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();
  const images = [
    { src: "/studio.jpg", width: 1920, height: 1080 },
    { src: "/studio12.png", width: 1920, height: 1080 },
    { src: "/studio21.png", width: 1920, height: 1080 }
  ];

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'gallery.title': 'Check Out Our Studio',
      };
      return defaultValues[key];
    }
    return t(key);
  };

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
        {renderContent('gallery.title')}
      </h2>
      <div className="relative mx-auto w-full max-w-4xl pt-12">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="lg:h-[28rem] h-64 md:h-96">
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={75}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
