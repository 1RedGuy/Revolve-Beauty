import GetToknowSection from "@/components/sections/AboutSections/GetToKnowSection";
import Header from "../components/Header";
import AboutSection from "../components/sections/AboutSections/AboutSection";
import Footer from "../components/sections/AboutSections/AboutFooter";
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Dr. Marian | Revolve Beauty</title>
        <meta 
          name="description" 
          content="Meet Dr. Marian, an experienced beauty specialist providing premium aesthetic treatments and personalized care at Revolve Beauty." 
        />
        <meta 
          name="keywords" 
          content="Dr. Marian, beauty specialist, aesthetic treatments, professional care, beauty clinic" 
        />
        <link rel="canonical" href="https://revolvebeauty.com/about" />
      </Head>
      <div>
        <Header />
        <AboutSection />
        <GetToknowSection />
        <Footer />
      </div>
    </>
  );
};

export default About;
