import Head from 'next/head';
import ServiceFooter from "@/components/sections/ServicesSections/ServiceFooter";
import Header from "../../components/Header";
import FBSection from "@/components/sections/ServicesSections/FBSection";

import React from "react";

const FillersBotox = () => {
  return (
    <>
      <Head>
        <title>Fillers & Botox Services | Revolve Beauty</title>
        <meta name="description" content="Professional fillers and botox treatments at Revolve Beauty. Expert care and natural-looking results." />
        <meta name="keywords" content="fillers, botox, facial treatments, beauty services, cosmetic procedures" />
        <link rel="canonical" href="https://revolvebeauty.com/services/fillers-botox" />
      </Head>
      <div>
        <Header />
        <FBSection />
        <ServiceFooter />
      </div>
    </>
  );
};

export default FillersBotox;
