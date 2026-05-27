import type { Metadata } from "next";
import { pageMetadata } from "../lib/metadata";
import Services from "../Page/services";

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: [
    "solar services",
    "residential solar",
    "commercial solar",
    "solar maintenance",
    "EPC services",
    "solar installation",
    "solar panels Gujarat",
  ],
};

export default function ServicesPage() {
  return <Services />;
}
