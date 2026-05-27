import { ReactNode } from "react";

export const JsonLd = ({ data }: { data: object }): ReactNode => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vaijnathglobalsolar.com";
  return `${baseUrl}${path}`;
};

export const createMetaTags = (
  title: string,
  description: string,
  keywords?: string[],
  image?: string
) => ({
  title,
  description,
  keywords: keywords?.join(", "),
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://vaijnathglobalsolar.com",
    images: image ? [{ url: image }] : [],
  },
});
