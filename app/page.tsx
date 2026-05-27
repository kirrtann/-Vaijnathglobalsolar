import type { Metadata } from "next";
import { pageMetadata } from "./lib/metadata";
import Home from "./page-client";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: [
    "solar energy solutions",
    "solar panels Gujarat",
    "EPC solar provider",
    "residential solar",
    "commercial solar",
    "solar installation",
    "solar power",
    "renewable energy Gujarat",
    "save on electricity",
    "sustainable energy",
  ],
};

export default function HomePage() {
  return <Home />;
}
