import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Page/Navbar/page";
import Footer from "./Page/Footer";
import { baseMetadata } from "./lib/metadata";
import { JsonLd } from "./lib/seo-utils";
import { organizationSchema, localBusinessSchema } from "./lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <JsonLd data={organizationSchema} />
        {/* Local Business Schema */}
        <JsonLd data={localBusinessSchema} />
        {/* Google Site Verification - Replace with your verification code */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
