import type { Metadata } from "next";

export const siteConfig = {
  name: "Vaijnath Global Solar",
  description:
    "Leading solar EPC provider in Gujarat. Residential, commercial & industrial solar solutions with 10+ years of expertise. Save up to 90% on electricity bills.",
  url: "https://vaijnathglobalsolar.com",
  ogImage: "https://vaijnathglobalsolar.com/og-image.jpg",
  locale: "en_IN",
  type: "website",
  author: "Vaijnath Global Solar",
};

export const baseMetadata: Metadata = {
  title: {
    default: "Vaijnath Global Solar | Premier EPC Solar Provider in Gujarat",
    template: "%s | Vaijnath Global Solar",
  },
  description: siteConfig.description,
  keywords: [
    "solar energy",
    "solar panels",
    "solar power",
    "EPC solar",
    "solar installation Gujarat",
    "residential solar",
    "commercial solar",
    "solar solutions",
    "renewable energy",
    "sustainable energy",
    "solar calculator",
    "solar maintenance",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/en-IN",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Vaijnath Global Solar | Premier EPC Solar Provider in Gujarat",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Vaijnath Global Solar - Solar Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaijnath Global Solar | Solar EPC Provider",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "", // Add your Google Search Console verification code
  },
};

export const pageMetadata = {
  home: {
    title: "Solar Energy Solutions | Vaijnath Global Solar",
    description:
      "Gujarat's premier EPC solar partner. Discover affordable solar energy solutions for homes and businesses. Save on electricity bills today!",
  },
  about: {
    title: "About Us | 10+ Years of Solar Excellence",
    description:
      "Learn about Vaijnath Global Solar's journey in renewable energy. 10+ years of expertise in residential, commercial & industrial solar solutions.",
  },
  services: {
    title: "Solar Services | Residential, Commercial & Maintenance",
    description:
      "Explore our comprehensive solar services: residential installations, commercial solar systems, and professional maintenance. Get custom quotes.",
  },
  contact: {
    title: "Contact Us | Solar Consultation & Support",
    description:
      "Get in touch with our solar experts. Free consultation for your solar energy needs. Contact Vaijnath Global Solar in Gujarat.",
  },
  calculator: {
    title: "Solar Savings Calculator | Estimate Your Savings",
    description:
      "Calculate how much you can save with solar energy. Use our free solar calculator to estimate your annual savings in Gujarat.",
  },
};
