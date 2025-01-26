import { useLanguage } from '../context/LanguageContext';

const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Our Services",
    contact: "Contact us",
    servicesDropdown: {
      fillersBotox: "Fillers & Botox",
      minimalInvasive: "Minimal Invasive",
      nonInvasive: "Non Invasive"
    }
  },
  hero: {
    subtitle: "Beauty Studio",
    title1: "Glow Your Face",
    title2: "& Vitality With",
    title3: "Our Best Service",
    features: {
      skincare: "Rejuvenating Skin Care and Advanced Aesthetic Treatments",
      body: "Body Contouring and Hair Restoration",
      antiaging: "Cutting-Edge Anti-Aging Solutions"
    },
    buttons: {
      book: "Book Appointment",
      services: "Know Our Services"
    }
  }
};

const bg = {
  nav: {
    home: "Начало",
    about: "За нас",
    services: "Услуги",
    contact: "Контакти",
    servicesDropdown: {
      fillersBotox: "Филъри и Ботокс",
      minimalInvasive: "Минимално инвазивни",
      nonInvasive: "Неинвазивни"
    }
  },
  hero: {
    subtitle: "Студио за красота",
    title1: "Грижа за вашата",
    title2: "красота и",
    title3: "жизненост",
    features: {
      skincare: "Подмладяваща грижа за кожата и модерни естетични процедури",
      body: "Оформяне на тялото и възстановяване на косата",
      antiaging: "Съвременни решения против стареене"
    },
    buttons: {
      book: "Запази час",
      services: "Разгледай услугите"
    }
  }
};

export function useTranslation() {
  const { language } = useLanguage();
  const translations = { en, bg };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    return value;
  };

  return { t, language };
}
