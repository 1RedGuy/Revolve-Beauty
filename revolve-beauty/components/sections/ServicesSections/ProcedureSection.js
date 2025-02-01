import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";

const ServicesImageTextSection = ({
  imgSrc,
  title,
  description,
  listItems = [], // Default to an empty array
  details = { description: "", items: [], duration: "", price: "" }, // Default to a safe object structure
  reverse,
}) => {
  const { t } = useTranslation();

  return (
    <div className="px-6 md:px-12 lg:px-20">
      <div
        className={`mt-10 flex flex-wrap items-start justify-center gap-24 lg:mb-40 lg:mt-36 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="w-full space-y-8 text-gray-900 md:w-[50%]">
          <h3 className="text-gradient to-gold bg-gradient-to-r from-studio_pink bg-clip-text text-3xl font-extrabold text-transparent md:text-4x">
            {title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">{description}</p>

          {/* List Items */}
          {listItems.length > 0 && (
            <ul className="space-y-3 text-base text-gray-700">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-800"
                >
                  <span className="mt-[0.4rem] h-2 w-2 rounded-full bg-studio_pink"></span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Details Section */}
          <p className="mb-6 text-base text-gray-600 md:text-lg">
            {details.description}
          </p>

          {/* Details List */}
          {details.items?.length > 0 && (
            <ul className="space-y-3 text-base text-gray-700">
              {details.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-800">
                  <span className="mt-[0.4rem] h-2 w-2 rounded-full bg-studio_pink"></span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Details Box */}
          <div className="rounded-lg border border-studio_pink bg-gray-50 p-6 shadow-lg">
            <ul className="list-none pl-0 text-sm text-gray-800 md:text-base">
              <li>
                <strong className="text-gray-900">{t('common.duration')}:</strong>{" "}
                {details.duration}
              </li>
              <li>
                <strong className="text-gray-900">{t('common.price')}:</strong>{" "}
                {details.price}
              </li>
              <li>
                <strong className="text-gray-900">
                  {t('common.moreInfo')}:{" "}
                  <Link href="/contact" className="underline hover:text-gray-600">
                    {t('common.contactUs')}
                  </Link>
                </strong>
              </li>
            </ul>
            <Link href="/contact">
              <button className="mt-4 rounded-lg bg-pink-500 px-4 py-2 font-medium text-white">
                {t('common.bookNow')}
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section - Updated sizing and positioning */}
        <div className="w-full md:w-[45%] lg:w-[40%]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-2xl">
            <img
              src={imgSrc}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesImageTextSection;
