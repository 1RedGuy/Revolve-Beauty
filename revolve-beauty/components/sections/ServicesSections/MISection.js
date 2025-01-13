import React from "react";
import ServicesImageTextSection from "./ProcedureSection";
import { MissingSlotContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const MISection = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center border-b-[1px] border-gray-800 lg:h-[600px]">
        <img src="/procedures-hero.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-2 text-xl uppercase text-white lg:mb-4">
            Revitalize Your Skin
          </p>
          <h2 className="mb-4 mt-2 text-3xl font-bold text-white md:text-4xl lg:text-7xl">
            Advanced Beauty Procedures
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white md:text-xl">
            Transform your look with our cutting-edge treatments designed to
            rejuvenate, hydrate, and enhance your natural beauty.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-10 text-center lg:mt-16">
        <p className="text-sm uppercase tracking-[0.2rem] text-studio_pink md:text-base">
          Explore Our
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-[0.2rem] text-pink-400 md:text-4xl lg:mt-10">
          Premium Procedures
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-xl lg:mt-8">
          Discover expert-crafted treatments to restore, rejuvenate, and
          redefine your beauty. Tailored solutions for every need.
        </p>
      </div>

      {/* Procedures */}
      <div className="px-4 lg:px-16">
        <ServicesImageTextSection
          imgSrc="/skin_boosters.jpg"
          title="Pluryal Skin Boosters"
          description="Hydrate, rejuvenate, and enhance skin quality with this advanced treatment using hyaluronic acid to restore hydration and elasticity."
          listItems={[
            "Face",
            "Neck",
            "Décolletage",
            "Hands",
          ]}
          details={{
            description:
              "Pluryal Skin Boosters improve skin hydration, elasticity, and texture for a smoother and more radiant complexion.",
            items: [
              "Boosts hydration",
              "Enhances elasticity",
              "Reduces fine lines",
            ],
            duration: "1 hour",
            price: "200lv",
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/lipolysis.jpg"
          title="Lipolysis & Anticellulite"
          description="A non-surgical treatment to reduce localized fat, contour the body, and improve skin tone using Pluryal Mesoline BodyContour."
          listItems={[
            "Abdomen",
            "Thighs",
            "Hips",
            "Upper arms",
            "Chin",
          ]}
          details={{
            description:
              "Using fat-dissolving agents (PPC and DC), this treatment targets problem areas for a more sculpted and toned look.",
            items: [
              "Non-surgical fat reduction",
              "Improves skin texture",
              "Contours the body",
            ],
            duration: "1 hour",
            price: "200lv",
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/mesotherapy.jpg"
          title="Mesotherapy for Face, Body & Hair"
          description="A versatile treatment for skin rejuvenation, anti-aging, hair restoration, and fat reduction using Pluryal Mesoline."
          listItems={[
            "Face",
            "Scalp",
            "Body",
            "Hands",
          ]}
          details={{
            description:
              "Pluryal Mesoline products use vitamins, peptides, and hyaluronic acid for hydration, fine line reduction, and hair restoration.",
            items: [
              "Hydrates and rejuvenates skin",
              "Reduces fine lines",
              "Restores hair health",
            ],
            duration: "1 hour",
            price: "200lv",
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/bio1.jpg"
          title="Biorevitalization (Jalupro Line)"
          description="Rejuvenate and hydrate your skin with tailored biorevitalization treatments using hyaluronic acid and amino acids."
          listItems={[
            "Face",
            "Neck",
            "Décolletage",
            "Hands",
          ]}
          details={{
            description:
              "Jalupro Classic, HMW, Young Eye, and Superhydro improve elasticity, smooth fine lines, and create a radiant, youthful glow.",
            items: [
              "Tailored solutions",
              "Improves elasticity",
              "Smooths fine lines",
              "Collagen stimulation",
              "Ligament regeneration",
            ],
            duration: "1 hour",
            price: "200lv - 300lv",
          }}
          reverse={true}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/lactic.jpg"
          title="Poly-L-Lactic Acid (PLLA) Injections"
          description="Achieve long-lasting volume and rejuvenation by stimulating natural collagen production with PLLA treatments."
          listItems={[
            "Face",
            "Neck",
            "Hands",
            "Body",
          ]}
          details={{
            description:
              "PLLA injections like Lenisna and Juvelook improve skin texture and elasticity, with results that last up to 2 years.",
            items: [
              "Stimulates collagen production",
              "Restores natural volume",
              "Enhances skin texture",
            ],
            duration: "1–2 hours",
            price: "600lv–750lv",
          }}
          reverse={false}
        />

        <div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/micro.jpg"
          title="Microneedling"
          description="A minimally invasive treatment using tiny needles to stimulate collagen production and improve skin texture."
          listItems={[
            "Face",
            "Neck",
            "Acne scars",
            "Wrinkles",
          ]}
          details={{
            description:
              "Microneedling enhances skin tone and texture while promoting natural healing. Results improve with multiple sessions.",
            items: [
              "Reduces acne scars ",
              "Improves skin texture",
              "Minimally invasive",
            ],
            duration: "1 hour",
            price: "150lv",
          }}
          reverse={true}
        />

<div className="border-[1px] border-studio_pink my-10"></div>

        <ServicesImageTextSection
          imgSrc="/poly.jpg"
          title="Polynucleotide Treatment"
          description="A cutting-edge regenerative treatment using polynucleotides to improve skin elasticity, hydration, and repair damaged tissue."
          listItems={[
            "Face",
            "Neck",
            "Hands",
            "Dehydrated skin",
          ]}
          details={{
            description:
              "Polynucleotide therapy with pluryal silk and densify revitalizes the skin by stimulating collagen production and deeply hydrating the dermis. It aids in tissue regeneration and repairs damage caused by aging or external factors.",
            items: [
              "Boosts skin hydration",
              "Improves elasticity and texture",
              "Stimulates tissue repair",
            ],
            duration: "45 minutes",
            price: "370lv - 480lv",
          }}
          reverse
        />

      </div>
    </section>
  );
};

export default MISection;
