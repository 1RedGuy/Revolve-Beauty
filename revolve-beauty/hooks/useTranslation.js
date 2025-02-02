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
  },
  contact: {
    subtitle: "Contact Us",
    title: "Get in Touch With Us",
    description: "We're here to help! Send us your questions or concerns and we'll get back to you as soon as possible.",
    getInTouch: 'Get In Touch',
    inquiry: 'Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.',
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Your Message",
      submit: "Send Message"
    },
    info: {
      address: "Address",
      addressValue: "Sofia, Bulgaria",
      phone: "Phone",
      phoneValue: "+359 888 888 888",
      email: "Email",
      emailValue: "revolvebeauty@gmail.com"
    },
    email: {
      title: 'Email us:',
      description: 'Email us for general queries, including marketing and partnership opportunities.'
    },
    call: {
      title: 'Call us:',
      description: 'Call us to speak to a member of our team. We are always happy to help.'
    },
    location: {
      title: 'Location',
      description: 'Feel free to stop by and visit us at our location. We look forward to welcoming you!'
    }
  },
  getToKnow: {
    trustUs: 'Trust us',
    title: 'Get to know me better',
    description: 'Discover what sets us apart. From certified expertise to high-quality equipment, we are dedicated to delivering exceptional beauty services that prioritize your satisfaction and well-being',
    features: {
      expert: {
        title: 'Certified Expert',
        description: 'Highly skilled professional with extensive certifications, ensuring exceptional care and results.'
      },
      trust: {
        title: 'Customer Trust',
        description: 'Years of experience and countless satisfied clients, building lasting relationships through trust.'
      },
      equipment: {
        title: 'Premium Equipment',
        description: 'State-of-the-art technology and equipment ensuring safe and effective treatments.'
      },
      luxury: {
        title: 'Luxury Experience',
        description: 'Immerse yourself in our serene environment designed for your ultimate comfort and relaxation.'
      }
    }
  },
  introduction: {
    subtitle: "Services",
    title: {
      line1: "We are experienced",
      line2: "in making you",
      line3: "More Beautiful"
    },
    treatments: "Beauty treatments",
    description: "The beauty industry has grown so much that it can be hard to keep track of the treatments that are available.",
    button: "Learn More",
    services: {
      hydrafacial: {
        title: "HydraFacial",
        shortDescription: "Deep cleansing, exfoliation and hydration treatment for instantly radiant, healthier-looking skin",
        price: "90 BGN"
      },
      fillers: {
        title: "Dermal Fillers",
        shortDescription: "Natural-looking volume enhancement and wrinkle reduction for a youthful, refreshed appearance",
        price: "350-500 BGN"
      },
      mesotherapy: {
        title: "Mesotherapy",
        shortDescription: "Advanced skin rejuvenation with targeted nutrient delivery for improved texture and tone",
        price: "120 BGN"
      },
      cleaning: {
        title: "Facial Cleaning",
        shortDescription: "Professional deep cleansing and exfoliation treatment for clear, healthy, and revitalized skin",
        price: "60 BGN"
      }
    }
  },
  testimonial: {
    subtitle: "Many Customers gave their Feedback",
    title: "We care about our customer's experience",
    button: "Check all of our reviews",
    reviews: {
      first: {
        text: "I am extremely satisfied. My face is perfectly cleansed, my skin is soft and radiant. The place is clean and fresh. I will definitely visit Dr. Marian again",
        author: "Daisy",
        position: "Facial Cleaning"
      },
      second: {
        text: "The Hydrafacial procedure was very pleasant and relaxing, and afterwards my skin was glowing! Doctor Merian was very attentive, an exceptional professional!",
        author: "Martina",
        position: "Hydrafacial"
      },
      third: {
        text: "I was extremely satisfied with the procedure! Dr. Marian takes time to listen to your wishes. She works phenomenally, my lips look very natural. Don't hesitate to visit her!",
        author: "Petya",
        position: "Lip, jaw and chin filler"
      }
    }
  },
  footer: {
    rights: "All Rights Reserved.",
    links: {
      about: "About",
      contact: "Contact",
      instagram: "Instagram"
    }
  },
  services: {
    fb: {  // Botox & Fillers
      hero: {
        subtitle: "Our Services",
        title: "Botox & Fillers",
        description: "Experience expert care and precision with our Botox and filler treatments,",
        description2: "designed to help you achieve a refreshed, natural appearance."
      },
      section: {
        subtitle: "Have a look at our",
        title: "Premium Procedures",
        description: "Why settle for ordinary treatments when you can experience tailored enhancements",
        description2: "that bring out your natural beauty in a way only true expertise can deliver?"
      },
      procedures: {
        fillers: {
          title: "Dermal Fillers",
          description: "Enhance your natural features with dermal fillers, designed to restore volume, smooth wrinkles, and contour the face. Enjoy immediate, naturally looking results. Often used for:",
          listItems: ["Cheeks", "Lips", "Jaw and chin", "Nasolabial folds"],
          details: {
            description: "We use premium fillers like Revolax, Restylane, Pluryal, and Teosyal. We offer results that last from 6 months to 2 years. These procedures are:",
            items: ["Safe", "Customized", "Minimal Invasive"],
            duration: "1-2 hours",
            price: "250-500 BGN"
          }
        },
        botox: {
          title: "Botox",
          description: "Botox is an injection procedure that temporarily relaxes muscles for reducing wrinkles and fine lines, offering quick and naturally looking results. Often used for (and other areas):",
          listItems: ["Forehead", "Frown lines", "Crows' feet", "Hyperhydrosis around the eyes"],
          details: {
            description: "Botox provides visible results in 7-14 days and lasts 4-6 months. This procedure is:",
            items: ["Quick", "Natural Effect", "Effective against wrinkles and fine lines"],
            duration: "40 minutes",
            price: "150 BGN per zone"
          }
        }
      }
    },
    mi: {  // Medical Injections
      hero: {
        subtitle: "Revitalize Your Skin",
        title: "Minimal Invasive Procedures",
        description: "Transform your look with our cutting-edge treatments designed to rejuvenate, hydrate, and enhance your natural beauty."
      },
      section: {
        subtitle: "Explore Our",
        title: "Premium Procedures",
        description: "Discover expert-crafted treatments to restore, rejuvenate, and redefine your beauty. Tailored solutions for every need."
      },
      procedures: {
        boosters: {
          title: "Pluryal Skin Boosters",
          description: "Hydrate, rejuvenate, and improve skin quality with this advanced procedure using hyaluronic acid to restore hydration and elasticity.",
          listItems: ["Face", "Neck", "Décolletage", "Hands"],
          details: {
            description: "Pluryal Skin Boosters improve hydration, elasticity, and skin texture for a smoother, more radiant complexion.",
            items: ["Improves hydration", "Increases elasticity", "Reduces fine lines"],
            duration: "1 hour",
            price: "200 BGN"
          }
        },
        lipolysis: {
          title: "Lipolysis & Anti-cellulite",
          description: "Non-surgical procedure for reducing localized fat, body contouring, and improving skin tone with Pluryal Mesoline BodyContour.",
          listItems: ["Abdomen", "Thighs", "Hips", "Arms", "Chin"],
          details: {
            description: "Using fat-dissolving agents (PPC and DC), this procedure treats problem areas for a more sculpted and toned body.",
            items: ["Non-surgical fat reduction", "Improves skin texture", "Body contouring"],
            duration: "1 hour",
            price: "200 BGN"
          }
        },
        mesotherapy: {
          title: "Face, Body & Hair Mesotherapy",
          description: "Multi-purpose procedure for skin rejuvenation, anti-aging, hair restoration, and fat reduction with Pluryal Mesoline.",
          listItems: ["Face", "Scalp", "Body", "Hands"],
          details: {
            description: "Pluryal Mesoline products use vitamins, peptides, and hyaluronic acid for hydration, fine line reduction, and hair restoration.",
            items: ["Hydrates and rejuvenates skin", "Reduces fine lines", "Restores hair health"],
            duration: "1 hour",
            price: "200 BGN"
          }
        },
        biorevitalization: {
          title: "Biorevitalization (Jalupro Line)",
          description: "Rejuvenate and hydrate your skin with personalized biorevitalization procedures using hyaluronic acid and amino acids.",
          listItems: ["Face", "Neck", "Décolletage", "Hands"],
          details: {
            description: "Jalupro Classic, HMW, Young Eye, and Superhydro improve elasticity, smooth fine lines, and create a youthful glow.",
            items: ["Personalized solutions", "Improves elasticity", "Smooths fine lines", "Stimulates collagen", "Regenerates ligaments"],
            duration: "1 hour",
            price: "200-300 BGN"
          }
        },
        plla: {
          title: "Poly-L-Lactic Acid (PLLA) Injections",
          description: "Achieve long-lasting volume and rejuvenation through natural collagen stimulation with PLLA procedures.",
          listItems: ["Face", "Neck", "Hands", "Body"],
          details: {
            description: "PLLA injections like Lenisna and Juvelook improve skin texture and elasticity, with results lasting up to 2 years.",
            items: ["Stimulates collagen production", "Restores natural volume", "Improves skin texture"],
            duration: "1-2 hours",
            price: "600-750 BGN"
          }
        },
        microneedling: {
          title: "Microneedling",
          description: "Minimally invasive procedure using micro-needles to stimulate collagen and improve skin texture.",
          listItems: ["Face", "Neck", "Acne scars", "Wrinkles"],
          details: {
            description: "Microneedling improves skin tone and texture by stimulating natural healing. Results improve with multiple sessions.",
            items: ["Reduces acne scars", "Improves skin texture", "Minimally invasive"],
            duration: "1 hour",
            price: "150 BGN"
          }
        },
        polynucleotide: {
          title: "Polynucleotide Therapy",
          description: "Advanced regenerative procedure using polynucleotides to improve elasticity, hydration, and repair damaged tissues.",
          listItems: ["Face", "Neck", "Hands", "Dehydrated skin"],
          details: {
            description: "Polynucleotide therapy with pluryal silk and densify revitalizes skin through collagen stimulation and deep dermal hydration. Supports tissue regeneration and repairs damage caused by aging or external factors.",
            items: ["Improves skin hydration", "Enhances elasticity and texture", "Stimulates tissue repair"],
            duration: "45 minutes",
            price: "370-480 BGN"
          }
        }
      }
    },
    ni: {  // Non-Invasive
      hero: {
        subtitle: "Our Services",
        title: "Non-Invasive Procedures",
        description: "Discover our professional treatments designed to bring out your natural glow."
      },
      section: {
        subtitle: "Have a look at our",
        title: "Premium Procedures",
        description: "Choose from our top-tier treatments to enhance your skin and beauty, customized to your needs."
      },
      procedures: {
        chemical: {
          title: "Chemical Peeling",
          description: "Chemical peeling is a skin renewal procedure using a mild chemical solution to exfoliate, improve texture, tone, and reduce imperfections like acne scars and sun damage. Commonly used for:",
          listItems: ["Acne scars", "Sun damage", "Uneven skin tone"],
          details: {
            description: "This procedure helps rejuvenate the skin with minimal downtime. It is:",
            items: ["Effective", "Non-invasive", "Gentle exfoliation", "Minimal recovery"],
            duration: "40 minutes",
            price: "120 BGN"
          }
        },
        led: {
          title: "LED Therapy",
          description: "LED therapy uses different wavelengths of light to treat skin issues such as aging, acne, and pigmentation. This non-invasive therapy is relaxing and requires no recovery time. Commonly used for:",
          listItems: ["Aging signs", "Acne", "Pigmentation", "Uneven skin tone"],
          details: {
            description: "Red light stimulates collagen, blue light treats acne bacteria, and green light helps even skin tone. Benefits include:",
            items: ["Non-invasive", "Relaxing", "No recovery time"],
            duration: "1.5 hours",
            price: "90 BGN"
          }
        },
        manual: {
          title: "Manual Cleaning",
          description: "Manual cleaning is a facial treatment that includes cleansing, exfoliation, and hydration to maintain healthy, clean skin. Additional steps may include steam and gentle extractions. Commonly used for:",
          listItems: ["Routine cleaning", "Exfoliation", "Maintaining clean skin"],
          details: {
            description: "This procedure is gentle and cost-effective, suitable for most skin types. It is:",
            items: ["Gentle", "Affordable", "Suitable for all skin types"],
            duration: "1 hour",
            price: "70 BGN"
          }
        },
        hydra: {
          title: "HydraFacial",
          description: "HydraFacial is a non-invasive, multi-step facial treatment that cleanses, exfoliates, hydrates, and nourishes the skin for radiant results. Commonly used for:",
          listItems: ["Hydration", "Skin health", "Enlarged pores", "Uneven skin tone"],
          details: {
            description: "Combines techniques like hydration, vacuum extraction, and serum infusion. Benefits include:",
            items: ["Immediate results", "Suitable for all skin types", "No downtime"],
            duration: "1.5 hours",
            price: "90 BGN"
          }
        }
      }
    }
  },
  common: {
    duration: "Duration",
    price: "Price",
    moreInfo: "For more information",
    contactUs: "Contact Us",
    bookNow: "Book Now"
  },
  about: {
    welcome: "Welcome to Revolve Beauty",
    greeting: "Hello, I'm",
    name: "Dr. Maryann",
    description: "As a specialist in aesthetic medicine, I help individuals feel confident in their own skin through advanced techniques and personalized care.",
    cta: "Book a Consultation"
  },
  gallery: {
    title: 'Check Out Our Studio',
  },
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
  },
  contact: {
    subtitle: "Контакти",
    title: "Свържете се с нас",
    description: "Тук сме, за да помогнем! Изпратете ни вашите въпроси или притеснения и ще ви отговорим възможно най-скоро.",
    getInTouch: 'Свържете се с нас',
    inquiry: 'Имате конкретно запитване или искате да проучите нови възможности? Нашият опитен екип е готов да ви съдейства.',
    form: {
      name: "Име и Фамилия",
      email: "Имейл адрес",
      phone: "Телефонен номер",
      message: "Вашето съобщение",
      submit: "Изпрати"
    },
    info: {
      address: "Адрес",
      addressValue: "София, България",
      phone: "Телефон",
      phoneValue: "+359 888 888 888",
      email: "Имейл",
      emailValue: "revolvebeauty@gmail.com"
    },
    email: {
      title: 'Имейл:',
      description: 'Пишете ни за общи въпроси, включително маркетинг и възможности за партньорство.'
    },
    call: {
      title: 'Телефон:',
      description: 'Обадете ни се, за да говорите с член от нашия екип. Винаги сме щастливи да помогнем.'
    },
    location: {
      title: 'Адрес',
      description: 'Заповядайте да ни посетите на нашия адрес. Очакваме ви!'
    }
  },
  getToKnow: {
    trustUs: 'Доверете ни се',
    title: 'Научете повече за мен',
    description: 'Открийте какво ни прави различни. От сертифицирана експертиза до висококачествено оборудване, ние сме посветени на предоставянето на изключителни козметични услуги, които поставят на първо място вашето удовлетворение и благосъстояние',
    features: {
      expert: {
        title: 'Сертифициран Експерт',
        description: 'Висококвалифициран професионалист с обширни сертификати, гарантиращ изключителна грижа и резултати.'
      },
      trust: {
        title: 'Доверие на Клиентите',
        description: 'Години опит и безброй доволни клиенти, изграждащи трайни взаимоотношения чрез доверие.'
      },
      equipment: {
        title: 'Премиум Оборудване',
        description: 'Най-съвременна технология и оборудване, осигуряващи безопасни и ефективни процедури.'
      },
      luxury: {
        title: 'Луксозно Изживяване',
        description: 'Потопете се в нашата спокойна среда, създадена за вашия максимален комфорт и релаксация.'
      }
    }
  },
  introduction: {
    subtitle: "Услуги",
    title: {
      line1: "Ние сме експерти",
      line2: "в това да ви направим",
      line3: "По-красиви"
    },
    treatments: "Козметични процедури",
    description: "Индустрията за красота се разви толкова много, че може да бъде трудно да следите всички налични процедури.",
    button: "Научете повече",
    services: {
      hydrafacial: {
        title: "Хидрафейшъл",
        shortDescription: "Дълбоко почистване, ексфолиация и хидратация за моментално сияйна и по-здрава кожа",
        price: "90 лв."
      },
      fillers: {
        title: "Филъри",
        shortDescription: "Естествено увеличаване на обема и намаляване на бръчки за младежки и освежен вид",
        price: "350-500 лв."
      },
      mesotherapy: {
        title: "Мезотерапия",
        shortDescription: "Модерно подмладяване на кожата с насочено подхранване за подобрена текстура и тон",
        price: "120 лв."
      },
      cleaning: {
        title: "Почистване на лице",
        shortDescription: "Професионално почистване за чиста, здрава и ревитализирана кожа",
        price: "60 лв."
      }
    }
  },
  testimonial: {
    subtitle: "Много клиенти споделиха своите отзиви",
    title: "Грижим се за преживяването на нашите клиенти",
    button: "Вижте всички наши отзиви",
    reviews: {
      first: {
        text: "Изключително съм доволна. Лицето ми е изчистено перфектно, кожата ми е мека и сияйна. Мястото е чисто и свежо. Определено ще посетя отново Д-р Мариан",
        author: "Дейзи",
        position: "Почистване на лице"
      },
      second: {
        text: "Процедурата Hydrafacial беше много приятна и релаксираща, а след нея кожата ми заблестя! Доктор Мериан беше много внимателна, изключителен професионалист!",
        author: "Мартина",
        position: "Хидрафейшъл"
      },
      third: {
        text: "Останах изключително доволна от процедурата! Д-р Мариан отделя време, за да изслуша вашите желания. Работи феноменално, устните ми изглеждат много естествено. Не се колебайте да я посетите!",
        author: "Петя",
        position: "Филър в устните, челюстта и брадичката"
      }
    }
  },
  footer: {
    rights: "Всички права запазени.",
    links: {
      about: "За нас",
      contact: "Контакти",
      instagram: "Инстаграм"
    }
  },
  services: {
    fb: {
      hero: {
        subtitle: "Нашите Услуги",
        title: "Ботокс и Филъри",
        description: "Изпитайте експертна грижа и прецизност с нашите процедури с ботокс и филъри,",
        description2: "създадени да ви помогнат да постигнете освежен, естествен вид."
      },
      section: {
        subtitle: "Разгледайте нашите",
        title: "Премиум Процедури",
        description: "Защо да се задоволявате с обикновени процедури, когато можете да изпитате персонализирани подобрения,",
        description2: "които подчертават естествената ви красота по начин, който само истинската експертиза може да предложи?"
      },
      procedures: {
        fillers: {
          title: "Дермални Филъри",
          description: "Подчертайте естествената си красота с дермални филъри, създадени да възстановят обема, изгладят бръчките и оформят контурите на лицето. Насладете се на незабавни, естествено изглеждащи резултати. Често се използва за:",
          listItems: ["Скули", "Устни", "Челюст и брадичка", "Назолабиални гънки"],
          details: {
            description: "Използваме премиум филъри като Revolax, Restylane, Pluryal и Teosyal. Предлагаме резултати, които траят от 6 месеца до 2 години. Тези процедури са:",
            items: ["Безопасни", "Персонализирани", "Минимално инвазивни"],
            duration: "1–2 часа",
            price: "250лв–500лв"
          }
        },
        botox: {
          title: "Ботокс",
          description: "Ботоксът е инжекционна процедура, която временно отпуска мускулите за намаляване на бръчки и фини линии, предлагайки бързи и естествено изглеждащи резултати. Често се използва за (и други):",
          listItems: ["Чело", "Бръчки между веждите", "Бръчки около очите", "Хиперхидроза на подмишниците"],
          details: {
            description: "Ботоксът осигурява видими резултати за 7-14 дни и трае 4-6 месеца. Тази процедура е:",
            items: ["Бърза", "С естествен ефект", "Ефективна срещу бръчки и фини линии"],
            duration: "До 40 минути",
            price: "150лв за 1 зона"
          }
        }
      }
    },
    mi: {
      hero: {
        subtitle: "Възстановете Кожата Си",
        title: "Минимално Инвазивни Процедури",
        description: "Трансформирайте външния си вид с нашите съвременни процедури, създадени да подмладят, хидратират и подобрят естествената ви красота."
      },
      section: {
        subtitle: "Разгледайте нашите",
        title: "Премиум Процедури",
        description: "Открийте експертно разработени процедури за възстановяване, подмладяване и предефиниране на вашата красота. Персонализирани решения за всяка нужда."
      },
      procedures: {
        boosters: {
          title: "Плурял Скин Бустери",
          description: "Хидратирайте, подмладете и подобрете качеството на кожата с тази модерна процедура, използваща хиалуронова киселина за възстановяване на хидратацията и еластичността.",
          listItems: ["Лице", "Шия", "Деколте", "Ръце"],
          details: {
            description: "Плурял Скин Бустерите подобряват хидратацията, еластичността и текстурата на кожата за по-гладък и сияен тен.",
            items: ["Подобрява хидратацията", "Повишава еластичността", "Намалява фините линии"],
            duration: "1 час",
            price: "200лв"
          }
        },
        lipolysis: {
          title: "Липолиза и Антицелулит",
          description: "Нехирургична процедура за намаляване на локализирани мазнини, оформяне на тялото и подобряване тонуса на кожата с Pluryal Mesoline BodyContour.",
          listItems: ["Корем", "Бедра", "Ханш", "Ръце", "Брадичка"],
          details: {
            description: "Използвайки мастноразтварящи агенти (PPC и DC), тази процедура третира проблемните зони за по-скулптурирано и стегнато тяло.",
            items: ["Нехирургична редукция на мазнини", "Подобрява текстурата на кожата", "Оформя тялото"],
            duration: "1 час",
            price: "200лв"
          }
        },
        mesotherapy: {
          title: "Мезотерапия за Лице, Тяло и Коса",
          description: "Многофункционална процедура за подмладяване на кожата, против стареене, възстановяване на косата и редукция на мазнини с Pluryal Mesoline.",
          listItems: ["Лице", "Скалп", "Тяло", "Ръце"],
          details: {
            description: "Продуктите Pluryal Mesoline използват витамини, пептиди и хиалуронова киселина за хидратация, намаляване на фини линии и възстановяване на косата.",
            items: ["Хидратира и подмладява кожата", "Намалява фините линии", "Възстановява здравето на косата"],
            duration: "1 час",
            price: "200лв"
          }
        },
        biorevitalization: {
          title: "Биоревитализация (Jalupro Line)",
          description: "Подмладете и хидратирайте кожата си с персонализирани биоревитализиращи процедури, използващи хиалуронова киселина и аминокиселини.",
          listItems: ["Лице", "Шия", "Деколте", "Ръце"],
          details: {
            description: "Jalupro Classic, HMW, Young Eye и Superhydro подобряват еластичността, изглаждат фините линии и създават сияен, младежкия блясък.",
            items: ["Персонализирани решения", "Подобрява еластичността", "Изглажда фините линии", "Стимулира колагена", "Регенерира лигаментите"],
            duration: "1 час",
            price: "200лв - 300лв"
          }
        },
        plla: {
          title: "Поли-L-Млечна Киселина (PLLA) Инжекции",
          description: "Постигнете дълготраен обем и подмладяване чрез стимулиране на естествения колаген с PLLA процедури.",
          listItems: ["Лице", "Шия", "Ръце", "Тяло"],
          details: {
            description: "PLLA инжекциите като Lenisna и Juvelook подобряват текстурата и еластичността на кожата, с резултати, които траят до 2 години.",
            items: ["Стимулира производството на колаген", "Възстановява естествения обем", "Подобрява текстурата на кожата"],
            duration: "1–2 часа",
            price: "600лв–750лв"
          }
        },
        microneedling: {
          title: "Микронийдлинг",
          description: "Минимално инвазивна процедура, използваща микроиглички за стимулиране на колагена и подобряване текстурата на кожата.",
          listItems: ["Лице", "Шия", "Белези от акne", "Бръчки"],
          details: {
            description: "Микронийдлингът подобрява тона и текстурата на кожата, стимулирайки естественото възстановяване. Резултатите се подобряват с множество сесии.",
            items: ["Намалява белезите от акne", "Подобрява текстурата на кожата", "Минимално инвазивен"],
            duration: "1 час",
            price: "150лв"
          }
        },
        polynucleotide: {
          title: "Полинуклеотидна Терапия",
          description: "Съвременна регенеративна процедура, използваща полинуклеотиди за подобряване на еластичността, хидратацията и възстановяване на увредените тъкани.",
          listItems: ["Лице", "Шия", "Ръце", "Дехидратирана кожа"],
          details: {
            description: "Полинуклеотидната терапия с pluryal silk и densify ревитализира кожата чрез стимулиране на колагена и дълбока хидратация на дермата. Подпомага регенерацията на тъканите и възстановява щетите, причинени от стареене или външни фактори.",
            items: ["Подобрява хидратацията на кожата", "Подобрява еластичността и текстурата", "Стимулира възстановяването на тъканите"],
            duration: "45 минути",
            price: "370лв - 480лв"
          }
        }
      }
    },
    ni: {
      hero: {
        subtitle: "Нашите Услуги",
        title: "Неинвазивни Процедури",
        description: "Открийте нашите професионални процедури, създадени да подчертаят естественото ви сияние."
      },
      section: {
        subtitle: "Разгледайте нашите",
        title: "Премиум Процедури",
        description: "Изберете от нашите първокласни процедури за подобряване на кожата и красотата, персонализирани според вашите нужди."
      },
      procedures: {
        chemical: {
          title: "Химичен Пилинг",
          description: "Химичният пилинг е процедура за обновяване на кожата, използваща мек химичен разтвор за ексфолиране, подобряване на текстурата, тона и намаляване на несъвършенства като акne белези и слънчеви увреждания. Често се използва за:",
          listItems: ["Белези от акne", "Слънчеви увреждания", "Неравномерен тон на кожата"],
          details: {
            description: "Тази процедура помага за подмладяване на кожата с минимално време за възстановяване. Тя е:",
            items: ["Ефективна", "Неинвазивна", "Нежна ексфолиация", "Минимално възстановяване"],
            duration: "40 минути",
            price: "120 BGN"
          }
        },
        led: {
          title: "LED Терапия",
          description: "LED терапията използва различни дължини на светлинните вълни за третиране на кожни проблеми като стареене, акne и пигментация. Тази неинвазивна терапия е релаксираща и не изисква възстановяване. Често се използва за:",
          listItems: ["Признаци на стареене", "Акне", "Пигментация", "Неравномерен тон"],
          details: {
            description: "Червената светлина стимулира колагена, синята светлина третира акne бактериите, а зелената светлина помага за изравняване на тона. Ползите включват:",
            items: ["Неинвазивна", "Релаксираща", "Без възстановяване"],
            duration: "1.5 часа",
            price: "90 BGN"
          }
        },
        manual: {
          title: "Мануално Почистване",
          description: "Мануалното почистване е процедура за лице, която включва почистване, ексфолиация и хидратация за поддържане на здрава, чиста кожа. Допълнителните стъпки включват пара и нежни екстракции. Често се използва за:",
          listItems: ["Рутинно почистване", "Ексфолиация", "Поддържане на чиста кожа"],
          details: {
            description: "Тази процедура е нежна и икономична, подходяща за повечето типове кожа. Тя е:",
            items: ["Нежна", "Достъпна", "Подходяща за всички типове кожа"],
            duration: "1 час",
            price: "70 BGN"
          }
        },
        hydra: {
          title: "Хидрафейшъл",
          description: "Хидрафейшъл е неинвазивна, многостъпкова процедура за лице, която почиства, ексфолира, хидратира и подхранва кожата за блестящи резултати. Често се използва за:",
          listItems: ["Хидратация", "Здраве на кожата", "Разширени пори", "Неравномерен тон"],
          details: {
            description: "Комбинира техники като хидратация, вакуумна екстракция и инфузия на серуми. Ползите включват:",
            items: ["Незабавни резултати", "Подходяща за всички типове кожа", "Без възстановяване"],
            duration: "1.5 часа",
            price: "90 BGN"
          }
        }
      }
    }
  },
  common: {
    duration: "Продължителност",
    price: "Цена",
    moreInfo: "За повече информация",
    contactUs: "свържете се с нас",
    bookNow: "Запази Час"
  },
  about: {
    welcome: "Добре дошли в Revolve Beauty",
    greeting: "Здравейте, аз съм",
    name: "Д-р Мариан",
    description: "Като специалист по естетична медицина, помагам на хората да се чувстват уверени в собствената си кожа чрез модерни техники и персонализирана грижа.",
    cta: "Запишете Консултация"
  },
  gallery: {
    title: 'Разгледайте Нашето Студио',
  },
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
