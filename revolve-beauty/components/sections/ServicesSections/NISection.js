import React from "react";
import ServicesImageTextSection from "./ProcedureSection";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";

const NISection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center border-b-[1px] border-gray-800 lg:h-[600px]">
        <img src="/mir.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xl uppercase text-white lg:mb-4">
            {t('services.ni.hero.subtitle')}
          </p>
          <h2 className="mb-4 mt-2 text-3xl font-bold text-white md:text-4xl lg:text-7xl">
            {t('services.ni.hero.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white md:text-xl">
            {t('services.ni.hero.description')}
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-10 text-center lg:mt-16">
        <p className="text-sm uppercase tracking-[0.2rem] text-studio_pink md:text-base">
          {t('services.ni.section.subtitle')}
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-[0.2rem] text-pink-400 md:text-4xl lg:mt-10">
          {t('services.ni.section.title')}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-xl lg:mt-8">
          {t('services.ni.section.description')}
        </p>
      </div>

      <div className="px-4 lg:px-16">
        <ServicesImageTextSection
          imgSrc="/chemical_peeling.jpg"
          title={t('services.ni.procedures.chemical.title')}
          description={t('services.ni.procedures.chemical.description')}
          listItems={[
            t('services.ni.procedures.chemical.listItems.0'),
            t('services.ni.procedures.chemical.listItems.1'),
            t('services.ni.procedures.chemical.listItems.2')
          ]}
          details={{
            description: t('services.ni.procedures.chemical.details.description'),
            items: [
              t('services.ni.procedures.chemical.details.items.0'),
              t('services.ni.procedures.chemical.details.items.1'),
              t('services.ni.procedures.chemical.details.items.2'),
              t('services.ni.procedures.chemical.details.items.3')
            ],
            duration: t('services.ni.procedures.chemical.details.duration'),
            price: t('services.ni.procedures.chemical.details.price'),
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/led_therapy.png"
          title={t('services.ni.procedures.led.title')}
          description={t('services.ni.procedures.led.description')}
          listItems={[
            t('services.ni.procedures.led.listItems.0'),
            t('services.ni.procedures.led.listItems.1'),
            t('services.ni.procedures.led.listItems.2'),
            t('services.ni.procedures.led.listItems.3')
          ]}
          details={{
            description: t('services.ni.procedures.led.details.description'),
            items: [
              t('services.ni.procedures.led.details.items.0'),
              t('services.ni.procedures.led.details.items.1'),
              t('services.ni.procedures.led.details.items.2')
            ],
            duration: t('services.ni.procedures.led.details.duration'),
            price: t('services.ni.procedures.led.details.price'),
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/manual_cleaning.png"
          title={t('services.ni.procedures.manual.title')}
          description={t('services.ni.procedures.manual.description')}
          listItems={[
            t('services.ni.procedures.manual.listItems.0'),
            t('services.ni.procedures.manual.listItems.1'),
            t('services.ni.procedures.manual.listItems.2')
          ]}
          details={{
            description: t('services.ni.procedures.manual.details.description'),
            items: [
              t('services.ni.procedures.manual.details.items.0'),
              t('services.ni.procedures.manual.details.items.1'),
              t('services.ni.procedures.manual.details.items.2')
            ],
            duration: t('services.ni.procedures.manual.details.duration'),
            price: t('services.ni.procedures.manual.details.price'),
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/hydrafacial.jpg"
          title={t('services.ni.procedures.hydra.title')}
          description={t('services.ni.procedures.hydra.description')}
          listItems={[
            t('services.ni.procedures.hydra.listItems.0'),
            t('services.ni.procedures.hydra.listItems.1'),
            t('services.ni.procedures.hydra.listItems.2'),
            t('services.ni.procedures.hydra.listItems.3')
          ]}
          details={{
            description: t('services.ni.procedures.hydra.details.description'),
            items: [
              t('services.ni.procedures.hydra.details.items.0'),
              t('services.ni.procedures.hydra.details.items.1'),
              t('services.ni.procedures.hydra.details.items.2')
            ],
            duration: t('services.ni.procedures.hydra.details.duration'),
            price: t('services.ni.procedures.hydra.details.price'),
          }}
          reverse={false}
        />
      </div>
    </section>
  );
};

export default NISection;
