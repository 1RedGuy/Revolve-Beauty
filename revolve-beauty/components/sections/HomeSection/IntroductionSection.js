import Link from "next/link";
import Card from "../../reusables/ServiceCards";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import Image from 'next/image';

const IntroductionSection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'introduction.subtitle': 'Services',
        'introduction.title.line1': 'We are experienced',
        'introduction.title.line2': 'in making you',
        'introduction.title.line3': 'More Beautiful',
        'introduction.treatments': 'Beauty treatments',
        'introduction.description':
          'The beauty industry has grown so much that it can be hard to keep track of the treatments that are available.',
        'introduction.button': 'Learn More'
      };
      return defaultValues[key];
    }
    return t(key);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-gradient-to-l from-studio_pink/25 to-transparent pt-20 pb-12"
    >
      <div className="container relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-8 text-center lg:mb-16 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold uppercase text-pink-500">
            {renderContent('introduction.subtitle')}
          </h2>
          <h2 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl sm:leading-tight lg:text-6xl">
            {renderContent('introduction.title.line1')} <br />
            {renderContent('introduction.title.line2')} <br />
            {renderContent('introduction.title.line3')}
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Column 1: Text & Button */}
          <div className="w-full max-w-md border-pink-500 border-t-[3px] pt-8 text-center lg:max-w-none lg:w-[20%] lg:border-t-[3px] lg:pt-20 lg:text-left">
            <h3 className="mb-6 text-[2.6rem] font-bold leading-[50px] text-gray-800">
              {renderContent('introduction.treatments')}
            </h3>
            <p className="mb-8 text-xl leading-[32px] tracking-wider text-gray-600">
              {renderContent('introduction.description')}
            </p>
            <Link href="/about">
              <button className="mx-auto block rounded-full bg-pink-500 px-12 py-3 text-lg font-medium text-white shadow-2xl shadow-pink-300 lg:mx-0">
                {renderContent('introduction.button')}
              </button>
            </Link>
          </div>

          {/* Column 2: Image (hidden on mobile) */}
          <div className="hidden h-[30rem] w-full lg:block lg:w-[25%]">
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg border-2 border-pink-300">
              <Image
                src="/543.jpg"
                alt="Beauty Treatment"
                width={800}
                height={1200}
                className="h-full w-full object-cover"
                loading="lazy"
                quality={75}
              />
            </div>
          </div>

          {/* Column 3: Service Cards */}
          <div className="w-full lg:w-[55%]">
            <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-x-12 lg:gap-y-12 lg:max-w-none">
              <Card
                title={t('introduction.services.hydrafacial.title')}
                description={t('introduction.services.hydrafacial.shortDescription')}
                price={t('introduction.services.hydrafacial.price')}
              />
              <Card
                title={t('introduction.services.fillers.title')}
                description={t('introduction.services.fillers.shortDescription')}
                price={t('introduction.services.fillers.price')}
              />
              <Card
                title={t('introduction.services.mesotherapy.title')}
                description={t('introduction.services.mesotherapy.shortDescription')}
                price={t('introduction.services.mesotherapy.price')}
              />
              <Card
                title={t('introduction.services.cleaning.title')}
                description={t('introduction.services.cleaning.shortDescription')}
                price={t('introduction.services.cleaning.price')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
