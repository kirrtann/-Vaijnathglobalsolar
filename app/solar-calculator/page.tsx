import type { Metadata } from "next";
import { pageMetadata } from "../lib/metadata";
import SolarCalculator from "./page-client";

export const metadata: Metadata = {
  title: pageMetadata.calculator.title,
  description: pageMetadata.calculator.description,
  keywords: [
    "solar calculator",
    "savings calculator",
    "solar savings",
    "ROI calculator",
    "solar cost",
    "electricity bill savings",
    "solar investment",
    "system size calculator",
    "payback period",
  ],
};

export default function CalculatorPage() {
  return <SolarCalculator />;
}
