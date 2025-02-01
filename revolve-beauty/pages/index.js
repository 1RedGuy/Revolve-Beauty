import React from "react";
import { Header } from "../components";
import HomeFooter from "../components/sections/HomeSection/HomeFooter";
import {
  GallerySection,
  HeroSection,
  IntroductionSection,
  TestimonialSection,
} from "../components/sections";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <IntroductionSection />
      <TestimonialSection />
      <GallerySection />
      <HomeFooter />
    </div>
  );
}

export default Home;
