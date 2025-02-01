import React from "react";
import ServicesImageTextSection from "./ProcedureSection";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";

const FBSection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center border-b-[1px] border-gray-800 lg:h-[600px]">
        <img src="/gsdf.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xl uppercase text-white lg:mb-4">
            {t('services.fb.hero.subtitle')}
          </p>
          <h2 className="mb-4 mt-2 text-3xl font-bold text-white md:text-4xl lg:text-7xl">
            {t('services.fb.hero.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white md:text-xl">
            {t('services.fb.hero.description')}
            <br />
            {t('services.fb.hero.description2')}
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-10 text-center lg:mt-16">
        <p className="text-sm uppercase tracking-[0.2rem] text-studio_pink md:text-base">
          {t('services.fb.section.subtitle')}
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-[0.2rem] text-pink-400 md:text-4xl lg:mt-10">
          {t('services.fb.section.title')}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-xl lg:mt-8">
          {t('services.fb.section.description')}
          <br />
          {t('services.fb.section.description2')}
        </p>
      </div>
    
      <div className="px-4 lg:px-16">
        <ServicesImageTextSection
          imgSrc="/womn.jpg"
          title={t('services.fb.procedures.fillers.title')}
          description={t('services.fb.procedures.fillers.description')}
          listItems={[
            t('services.fb.procedures.fillers.listItems.0'),
            t('services.fb.procedures.fillers.listItems.1'),
            t('services.fb.procedures.fillers.listItems.2'),
            t('services.fb.procedures.fillers.listItems.3')
          ]}
          details={{
            description: t('services.fb.procedures.fillers.details.description'),
            items: [
              t('services.fb.procedures.fillers.details.items.0'),
              t('services.fb.procedures.fillers.details.items.1'),
              t('services.fb.procedures.fillers.details.items.2')
            ],
            duration: t('services.fb.procedures.fillers.details.duration'),
            price: t('services.fb.procedures.fillers.details.price'),
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink"></div>

        <ServicesImageTextSection
          imgSrc="/124t.jpg"
          title={t('services.fb.procedures.botox.title')}
          description={t('services.fb.procedures.botox.description')}
          listItems={[
            t('services.fb.procedures.botox.listItems.0'),
            t('services.fb.procedures.botox.listItems.1'),
            t('services.fb.procedures.botox.listItems.2'),
            t('services.fb.procedures.botox.listItems.3')
          ]}
          details={{
            description: t('services.fb.procedures.botox.details.description'),
            items: [
              t('services.fb.procedures.botox.details.items.0'),
              t('services.fb.procedures.botox.details.items.1'),
              t('services.fb.procedures.botox.details.items.2')
            ],
            duration: t('services.fb.procedures.botox.details.duration'),
            price: t('services.fb.procedures.botox.details.price'),
          }}
          reverse={false}
        />
      </div>
    </section>
  );
};

export default FBSection;
