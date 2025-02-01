import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'about.welcome': 'Welcome to Revolve Beauty',
        'about.greeting': "Hello, I'm",
        'about.name': 'Dr. Maryann',
        'about.description': 'As a specialist in aesthetic medicine, I help individuals feel confident in their own skin through advanced techniques and personalized care.',
        'about.cta': 'Book a Consultation'
      };
      return defaultValues[key];
    }
    return t(key);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-studio_pink/5 to-pink-400/5 blur-[128px]" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            {/* Text Column - 6 columns wide */}
            <div className="relative z-10 md:col-span-6">
              <div className="space-y-8">
                <div className="inline-block rounded-lg bg-studio_pink/10 px-6 py-3">
                  <span className="text-base font-medium text-studio_pink">
                    {renderContent('about.welcome')}
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  {renderContent('about.greeting')}{" "}
                  <span className="relative inline-block">
                    {renderContent('about.name')}
                    <span className="absolute bottom-0 left-0 h-2 w-full bg-studio_pink/20"></span>
                  </span>
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-600">
                  {renderContent('about.description')}
                </p>

                <div className="flex items-center pt-4">
                  <Link 
                    href="#contact"
                    className="group inline-flex items-center text-lg font-medium text-studio_pink transition-colors duration-200 hover:text-pink-600"
                    aria-label="Contact Dr. Marian for beauty treatments and consultations"
                  >
                    {renderContent('about.cta')}
                    <svg
                      className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Column - 5 columns wide, offset by 1 */}
            <div className="relative md:col-span-5 md:col-start-8">
              <div className="relative">
                {/* New minimalistic border design */}
                <div className="absolute -inset-4">
                  {/* Gradient frame */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-studio_pink/20 to-pink-400/20 p-[1px]">
                    <div className="absolute inset-[-1px] rounded-2xl bg-white"></div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-studio_pink/30"></div>
                  <div className="absolute right-0 top-0 h-12 w-12 rounded-tr-2xl border-r-2 border-t-2 border-studio_pink/30"></div>
                  <div className="absolute bottom-0 left-0 h-12 w-12 rounded-bl-2xl border-b-2 border-l-2 border-studio_pink/30"></div>
                  <div className="absolute bottom-0 right-0 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-studio_pink/30"></div>
                </div>

                {/* Subtle shadow effect */}
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-studio_pink/5 via-pink-400/5 to-studio_pink/5 blur-lg"></div>
                
                {/* Decorative dots */}
                <div className="absolute -left-12 top-1/3 flex gap-4">
                  <div className="h-3 w-3 rounded-full bg-studio_pink/40"></div>
                  <div className="h-3 w-3 rounded-full bg-studio_pink/30"></div>
                  <div className="h-3 w-3 rounded-full bg-studio_pink/20"></div>
                </div>
                <div className="absolute -right-12 top-2/3 flex gap-4">
                  <div className="h-3 w-3 rounded-full bg-studio_pink/20"></div>
                  <div className="h-3 w-3 rounded-full bg-studio_pink/30"></div>
                  <div className="h-3 w-3 rounded-full bg-studio_pink/40"></div>
                </div>

                {/* Image container */}
                <div className="relative rounded-lg p-2">
                  <Image
                    src="/asd.png"
                    alt="Dr. Maryann"
                    width={800}
                    height={1200}
                    priority
                    className="relative z-10 w-full rounded-lg xl:mx-auto xl:max-w-lg 2xl:origin-bottom 2xl:scale-110"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
    </>
  );
};

export default AboutSection;
