import React from 'react';
import { Header, Footer } from '../components';
import { GallerySection, HeroSection, IntroductionSection, TestimonialSection } from '../components/sections';

function Home() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <HeroSection />
            <IntroductionSection />
            <TestimonialSection />
            <GallerySection />
            <Footer />
        </div>
    );
}

export default Home;