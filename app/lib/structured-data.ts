// JSON-LD Structured Data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vaijnath Global Solar",
  url: "https://vaijnathglobalsolar.com",
  logo: "https://vaijnathglobalsolar.com/logo.png",
  description:
    "Leading solar EPC provider in Gujarat with 10+ years of expertise in residential, commercial and industrial solar solutions.",
  sameAs: [
    "https://www.facebook.com/vaijnathglobalsolar",
    "https://www.linkedin.com/company/vaijnathglobalsolar",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    telephone: "+91-XXXXXXXXXX",
    email: "info@vaijnathglobalsolar.com",
    areaServed: "IN",
    availableLanguage: "en",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Gujarat",
    streetAddress: "Your Street Address",
  },
};

export const serviceSchema = (serviceType: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceType,
  provider: {
    "@type": "Organization",
    name: "Vaijnath Global Solar",
    url: "https://vaijnathglobalsolar.com",
  },
  areaServed: {
    "@type": "State",
    name: "Gujarat",
    addressCountry: "IN",
  },
  serviceType: "Solar Energy Services",
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vaijnath Global Solar",
  image: "https://vaijnathglobalsolar.com/og-image.jpg",
  "@id": "https://vaijnathglobalsolar.com",
  url: "https://vaijnathglobalsolar.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Gujarat",
    postalCode: "Your Postal Code",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  rating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "150",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can I save with solar energy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can save up to 90% on your electricity bills with a properly designed solar system. Use our solar calculator to get a personalized estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the warranty on solar panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our solar panels come with a 25-year performance warranty and a 10-year workmanship warranty.",
      },
    },
    {
      "@type": "Question",
      name: "How long does solar installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical residential installation takes 2-4 weeks from survey to commissioning, depending on system size and location.",
      },
    },
  ],
};
