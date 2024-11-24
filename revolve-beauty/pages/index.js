import React from 'react';
import Header from '../components/Header'; 
import HeroSection from '../components/sections/HeroSection';
import IntroductionSection from '../components/sections/IntroductionSection';

function Home() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <HeroSection />
        </div>
    );
}

export default Home;