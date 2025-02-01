import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";

const GetToknowSection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'getToKnow.trustUs': 'Trust us',
        'getToKnow.title': 'Get to know me better',
        'getToKnow.description': 'Discover what sets us apart. From certified expertise to high-quality equipment, we are dedicated to delivering exceptional beauty services that prioritize your satisfaction and well-being',
        'getToKnow.features.expert.title': 'Certified Expert',
        'getToKnow.features.expert.description': 'Highly skilled professional with extensive certifications, ensuring exceptional care and results.',
        'getToKnow.features.trust.title': 'Customer Trust',
        'getToKnow.features.trust.description': 'Years of experience and countless satisfied clients, building lasting relationships through trust.',
        'getToKnow.features.equipment.title': 'Premium Equipment',
        'getToKnow.features.equipment.description': 'State-of-the-art technology and equipment ensuring safe and effective treatments.',
        'getToKnow.features.luxury.title': 'Luxury Experience',
        'getToKnow.features.luxury.description': 'Immerse yourself in our serene environment designed for your ultimate comfort and relaxation.'
      };
      return defaultValues[key];
    }
    return t(key);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-studio_pink">
              {renderContent('getToKnow.trustUs')}
            </h2>
            <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:leading-tight">
              {renderContent('getToKnow.title')}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {renderContent('getToKnow.description')}
            </p>
          </div>

          {/* YouTube Shorts Section - Larger and more minimalistic */}
          <div className="mx-auto mt-16 max-w-[500px]">
            <div className="relative w-full pb-[177.77%]">
              <iframe
                className="absolute inset-0 h-full w-full rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
                src="https://www.youtube.com/embed/GIRCiLVZOok"
                title="YouTube Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Features Grid - Updated styling for consistent height */}
          <div className="mx-auto mt-32 max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-studio_pink to-pink-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex h-full flex-col">
                  <h3 className="mb-4 min-h-[3rem] text-xl font-bold text-gray-900">
                    {renderContent('getToKnow.features.expert.title')}
                  </h3>
                  <p className="mx-auto max-w-[300px] text-base leading-relaxed text-gray-600">
                    {renderContent('getToKnow.features.expert.description')}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-studio_pink to-pink-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <div className="flex h-full flex-col">
                  <h3 className="mb-4 min-h-[3rem] text-xl font-bold text-gray-900">
                    {renderContent('getToKnow.features.trust.title')}
                  </h3>
                  <p className="mx-auto max-w-[300px] text-base leading-relaxed text-gray-600">
                    {renderContent('getToKnow.features.trust.description')}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-studio_pink to-pink-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div className="flex h-full flex-col">
                  <h3 className="mb-4 min-h-[3rem] text-xl font-bold text-gray-900">
                    {renderContent('getToKnow.features.equipment.title')}
                  </h3>
                  <p className="mx-auto max-w-[300px] text-base leading-relaxed text-gray-600">
                    {renderContent('getToKnow.features.equipment.description')}
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-studio_pink to-pink-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div className="flex h-full flex-col">
                  <h3 className="mb-4 min-h-[3rem] text-xl font-bold text-gray-900">
                    {renderContent('getToKnow.features.luxury.title')}
                  </h3>
                  <p className="mx-auto max-w-[300px] text-base leading-relaxed text-gray-600">
                    {renderContent('getToKnow.features.luxury.description')}
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

export default GetToknowSection;
