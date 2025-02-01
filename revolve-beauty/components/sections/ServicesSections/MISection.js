import React from "react";
import ServicesImageTextSection from "./ProcedureSection";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";

const MISection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center border-b-[1px] border-gray-800 lg:h-[600px]">
        <img src="/procedures-hero.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xl uppercase text-white lg:mb-4">
            {t('services.mi.hero.subtitle')}
          </p>
          <h2 className="mb-4 mt-2 text-3xl font-bold text-white md:text-4xl lg:text-7xl">
            {t('services.mi.hero.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white md:text-xl">
            {t('services.mi.hero.description')}
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-10 text-center lg:mt-16">
        <p className="text-sm uppercase tracking-[0.2rem] text-studio_pink md:text-base">
          {t('services.mi.section.subtitle')}
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-[0.2rem] text-pink-400 md:text-4xl lg:mt-10">
          {t('services.mi.section.title')}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-xl lg:mt-8">
          {t('services.mi.section.description')}
        </p>
      </div>

      {/* Procedures */}
      <div className="px-4 lg:px-16">
        <ServicesImageTextSection
          imgSrc="/skin_boosters.jpg"
          title={t('services.mi.procedures.boosters.title')}
          description={t('services.mi.procedures.boosters.description')}
          listItems={[
            t('services.mi.procedures.boosters.listItems.0'),
            t('services.mi.procedures.boosters.listItems.1'),
            t('services.mi.procedures.boosters.listItems.2'),
            t('services.mi.procedures.boosters.listItems.3')
          ]}
          details={{
            description: t('services.mi.procedures.boosters.details.description'),
            items: [
              t('services.mi.procedures.boosters.details.items.0'),
              t('services.mi.procedures.boosters.details.items.1'),
              t('services.mi.procedures.boosters.details.items.2')
            ],
            duration: t('services.mi.procedures.boosters.details.duration'),
            price: t('services.mi.procedures.boosters.details.price')
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/lipolysis.jpg"
          title={t('services.mi.procedures.lipolysis.title')}
          description={t('services.mi.procedures.lipolysis.description')}
          listItems={[
            t('services.mi.procedures.lipolysis.listItems.0'),
            t('services.mi.procedures.lipolysis.listItems.1'),
            t('services.mi.procedures.lipolysis.listItems.2'),
            t('services.mi.procedures.lipolysis.listItems.3'),
            t('services.mi.procedures.lipolysis.listItems.4')
          ]}
          details={{
            description: t('services.mi.procedures.lipolysis.details.description'),
            items: [
              t('services.mi.procedures.lipolysis.details.items.0'),
              t('services.mi.procedures.lipolysis.details.items.1'),
              t('services.mi.procedures.lipolysis.details.items.2')
            ],
            duration: t('services.mi.procedures.lipolysis.details.duration'),
            price: t('services.mi.procedures.lipolysis.details.price')
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/mesotherapy.jpg"
          title={t('services.mi.procedures.mesotherapy.title')}
          description={t('services.mi.procedures.mesotherapy.description')}
          listItems={[
            t('services.mi.procedures.mesotherapy.listItems.0'),
            t('services.mi.procedures.mesotherapy.listItems.1'),
            t('services.mi.procedures.mesotherapy.listItems.2'),
            t('services.mi.procedures.mesotherapy.listItems.3')
          ]}
          details={{
            description: t('services.mi.procedures.mesotherapy.details.description'),
            items: [
              t('services.mi.procedures.mesotherapy.details.items.0'),
              t('services.mi.procedures.mesotherapy.details.items.1'),
              t('services.mi.procedures.mesotherapy.details.items.2')
            ],
            duration: t('services.mi.procedures.mesotherapy.details.duration'),
            price: t('services.mi.procedures.mesotherapy.details.price')
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/bio1.jpg"
          title={t('services.mi.procedures.biorevitalization.title')}
          description={t('services.mi.procedures.biorevitalization.description')}
          listItems={[
            t('services.mi.procedures.biorevitalization.listItems.0'),
            t('services.mi.procedures.biorevitalization.listItems.1'),
            t('services.mi.procedures.biorevitalization.listItems.2'),
            t('services.mi.procedures.biorevitalization.listItems.3')
          ]}
          details={{
            description: t('services.mi.procedures.biorevitalization.details.description'),
            items: [
              t('services.mi.procedures.biorevitalization.details.items.0'),
              t('services.mi.procedures.biorevitalization.details.items.1'),
              t('services.mi.procedures.biorevitalization.details.items.2'),
              t('services.mi.procedures.biorevitalization.details.items.3'),
              t('services.mi.procedures.biorevitalization.details.items.4')
            ],
            duration: t('services.mi.procedures.biorevitalization.details.duration'),
            price: t('services.mi.procedures.biorevitalization.details.price')
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/lactic.jpg"
          title={t('services.mi.procedures.plla.title')}
          description={t('services.mi.procedures.plla.description')}
          listItems={[
            t('services.mi.procedures.plla.listItems.0'),
            t('services.mi.procedures.plla.listItems.1'),
            t('services.mi.procedures.plla.listItems.2'),
            t('services.mi.procedures.plla.listItems.3')
          ]}
          details={{
            description: t('services.mi.procedures.plla.details.description'),
            items: [
              t('services.mi.procedures.plla.details.items.0'),
              t('services.mi.procedures.plla.details.items.1'),
              t('services.mi.procedures.plla.details.items.2')
            ],
            duration: t('services.mi.procedures.plla.details.duration'),
            price: t('services.mi.procedures.plla.details.price')
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/micro.jpg"
          title={t('services.mi.procedures.microneedling.title')}
          description={t('services.mi.procedures.microneedling.description')}
          listItems={[
            t('services.mi.procedures.microneedling.listItems.0'),
            t('services.mi.procedures.microneedling.listItems.1'),
            t('services.mi.procedures.microneedling.listItems.2'),
            t('services.mi.procedures.microneedling.listItems.3')
          ]}
          details={{
            description: t('services.mi.procedures.microneedling.details.description'),
            items: [
              t('services.mi.procedures.microneedling.details.items.0'),
              t('services.mi.procedures.microneedling.details.items.1'),
              t('services.mi.procedures.microneedling.details.items.2')
            ],
            duration: t('services.mi.procedures.microneedling.details.duration'),
            price: t('services.mi.procedures.microneedling.details.price')
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/poly.jpg"
          title={t('services.mi.procedures.polynucleotide.title')}
          description={t('services.mi.procedures.polynucleotide.description')}
          listItems={[
            t('services.mi.procedures.polynucleotide.listItems.0'),
            t('services.mi.procedures.polynucleotide.listItems.1'),
            t('services.mi.procedures.polynucleotide.listItems.2'),
            t('services.mi.procedures.polynucleotide.listItems.3')
          ]}
          details={{
            description: t('services.mi.procedures.polynucleotide.details.description'),
            items: [
              t('services.mi.procedures.polynucleotide.details.items.0'),
              t('services.mi.procedures.polynucleotide.details.items.1'),
              t('services.mi.procedures.polynucleotide.details.items.2')
            ],
            duration: t('services.mi.procedures.polynucleotide.details.duration'),
            price: t('services.mi.procedures.polynucleotide.details.price')
          }}
          reverse={false}
        />

      </div>
    </section>
  );
};

export default MISection;
