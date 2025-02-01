import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";

const TestimonialSection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'testimonial.subtitle': 'Many Customers gave their Feedback',
        'testimonial.title': "We care about our customer's experience",
        'testimonial.button': 'Check all of our reviews',
        'testimonial.reviews.first.text': 'Amazing service, highly recommend to everyone looking for reliable and excellent quality.',
        'testimonial.reviews.first.author': 'John Doe',
        'testimonial.reviews.first.position': 'CEO, Rareblocks',
        'testimonial.reviews.second.text': 'A fantastic experience. Their team went above and beyond to ensure our needs were met.',
        'testimonial.reviews.second.author': 'Jane Smith',
        'testimonial.reviews.second.position': 'Product Manager, Rareblocks',
        'testimonial.reviews.third.text': 'Rareblocks helped us scale our business to new heights. Their attention to detail is unmatched.',
        'testimonial.reviews.third.author': 'Sam Wilson',
        'testimonial.reviews.third.position': 'Marketing Director, Rareblocks'
      };
      return defaultValues[key];
    }
    return t(key);
  };

  return (
    <section className="bg-gradient-to-l from-studio_pink/25 to-transparent sm:pb-16 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-medium text-gray-600">
            {renderContent('testimonial.subtitle')}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            {renderContent('testimonial.title')}
          </h2>
        </div>

        <div className="mt-8 text-center md:mt-16">
          <Link
            href="https://www.google.com/search?sca_esv=d620e9c68447bd3d&tbm=lcl&q=REVOLVE+BEAUTY+%D0%9E%D1%82%D0%B7%D0%B8%D0%B2%D0%B8&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLcwsDQxMrEwMbUwMjc2szAxMdrAyPiKUTrINczfJ8xVwcnVMTQkUuHCvItNF7Zf2HFh04Udi1jxyQIAoHQ-jFcAAAA&rldimm=17809424845827368442&hl=bg-BG&sa=X&ved=2ahUKEwi0yZXEhfCKAxVTAtsEHQC-MNAQ9fQKegQILBAF&biw=1200&bih=736&dpr=2#lkt=LocalPoiReviews"
            className="border-b-2 border-gray-900 pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            target="_blank"
          >
            {renderContent('testimonial.button')}
          </Link>
        </div>

        <div className="relative mt-10 md:mt-24">
          <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
            <div
              className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl">
              <div className="flex flex-1 flex-col justify-between p-6 lg:px-7 lg:py-8">
                <div className="flex-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.181 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-medium text-gray-900">
                    {renderContent('testimonial.reviews.first.text')}
                  </p>
                  <p className="mt-6 text-base font-medium text-gray-600">
                    {renderContent('testimonial.reviews.first.author')}
                  </p>
                  <p className="text-base font-medium text-gray-400">
                    {renderContent('testimonial.reviews.first.position')}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl">
              <div className="flex flex-1 flex-col justify-between p-6 lg:px-7 lg:py-8">
                <div className="flex-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.181 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-medium text-gray-900">
                    {renderContent('testimonial.reviews.second.text')}
                  </p>
                  <p className="mt-6 text-base font-medium text-gray-600">
                    {renderContent('testimonial.reviews.second.author')}
                  </p>
                  <p className="text-base font-medium text-gray-400">
                    {renderContent('testimonial.reviews.second.position')}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl">
              <div className="flex flex-1 flex-col justify-between p-6 lg:px-7 lg:py-8">
                <div className="flex-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.181 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-medium text-gray-900">
                    {renderContent('testimonial.reviews.third.text')}
                  </p>
                  <p className="mt-6 text-base font-medium text-gray-600">
                    {renderContent('testimonial.reviews.third.author')}
                  </p>
                  <p className="text-base font-medium text-gray-400">
                    {renderContent('testimonial.reviews.third.position')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
