import Head from 'next/head';
import ServiceFooter from "@/components/sections/ServicesSections/ServiceFooter";
import Header from "../../components/Header";
import NISection from "@/components/sections/ServicesSections/NISection";

import React from "react";

const NonInvasive = () => {
  return (
    <>
      <Head>
        <title>Non-Invasive Treatments | Revolve Beauty</title>
        <meta name="description" content="Safe and effective non-invasive beauty treatments at Revolve Beauty. Experience our premium skincare services." />
      </Head>
      <div>
        <Header />
        <NISection />
        <ServiceFooter />
      </div>
    </>
  );
};

export default NonInvasive;