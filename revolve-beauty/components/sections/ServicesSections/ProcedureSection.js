import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";

const ServicesImageTextSection = ({
  imgSrc,
  title,
  description,
  listItems = [],
  details = { description: "", items: [], duration: "", price: "" },
  reverse,
}) => {
  const { t } = useTranslation();

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 md:gap-12 lg:gap-16 items-center justify-between`}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <h3 className="text-gradient to-gold bg-gradient-to-r from-studio_pink bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent">
            {title}
          </h3>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>

          {/* List Items */}
          {listItems.length > 0 && (
            <ul className="space-y-3">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-800">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-studio_pink"></span>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Details Section */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600">
              {details.description}
            </p>

            {/* Details List */}
            {details.items?.length > 0 && (
              <ul className="space-y-3">
                {details.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-800">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-studio_pink"></span>
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Details Box */}
            <div className="mt-8 rounded-xl border-2 border-studio_pink bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <ul className="space-y-4 list-none">
                <li className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-[100px]">{t('common.duration')}:</strong>
                  <span className="text-gray-700">{details.duration}</span>
                </li>
                <li className="flex items-center">
                  <strong className="text-gray-900">{t('common.price')}:</strong>
                  <span className="text-gray-700 ml-2">{details.price}</span>
                </li>
                <li className="pt-2">
                  <strong className="text-gray-900">
                    {t('common.moreInfo')}:{" "}
                    <Link 
                      href="/contact" 
                      className="text-studio_pink underline hover:text-pink-600 transition-colors"
                    >
                      {t('common.contactUs')}
                    </Link>
                  </strong>
                </li>
              </ul>
              
              <Link href="/contact">
                <button className="mt-6 w-full sm:w-auto rounded-lg bg-studio_pink px-6 py-3 font-medium text-white transition-all hover:bg-pink-600 hover:shadow-md active:transform active:scale-95">
                  {t('common.bookNow')}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[45%] lg:w-[40%]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl transition-all hover:shadow-3xl">
            <img
              src={imgSrc}
              alt={title}
              className="h-full w-full object-cover object-center transform transition-transform hover:scale-105 duration-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesImageTextSection;
