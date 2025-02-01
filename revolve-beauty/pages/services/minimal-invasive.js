import Head from 'next/head';
import ServiceFooter from "@/components/sections/ServicesSections/ServiceFooter";
import Header from "../../components/Header";
import MISection from "@/components/sections/ServicesSections/MISection";

import React from "react";

const MinimalInvasive = () => {
  return (
    <>
      <Head>
        <title>Minimal Invasive Treatments | Revolve Beauty</title>
        <meta name="description" content="Advanced minimal invasive treatments for skin rejuvenation and beauty enhancement at Revolve Beauty." />
        <meta name="keywords" content="minimal invasive, skin treatments, beauty enhancement, skin rejuvenation" />
        <link rel="canonical" href="https://revolvebeauty.com/services/minimal-invasive" />
      </Head>
      <div>
        <Header />
        <MISection />
        <ServiceFooter />
      </div>
    </>
  );
};

export default MinimalInvasive;