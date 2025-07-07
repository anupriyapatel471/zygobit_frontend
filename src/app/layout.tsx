/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "./Responsive.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

import Header from "@/component/common/Layout/Header/Header";
import Footer from "@/component/common/Layout/Footer/Footer";
import ScrollProgressBar from "@/component/common/Layout/ScrollBar/ScrollBar";
// skeleton css
import "react-loading-skeleton/dist/skeleton.css";
import { WithContext, Organization } from "schema-dts";

export const metadata: Metadata = {
  title: "Zygobit",
  description: "Zygobit Website",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Zygobit",
    description: "Zygobit Website",
    images: ["/images/Logo.png"],
    url: "https://www.zygobit.com",
  },
  twitter: {
    title: "Zygobit",
    description: "Zygobit Website",
    images: ["/images/Logo.png"],
    card: "summary_large_image",
    creator: "Zygobit",
  },
  alternates: {
    canonical: "https://www.zygobit.com",
  },
};
const organizationJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zygobit",
  url: "https://www.zygobit.com",
  logo: "https://www.zygobit.com/images/Logo.png",
  email: "info@zygobit.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+1-850-792-3399",
      email: "info@zygobit.com",
      areaServed: ["IN", "US", "AU"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/zygobit",
    "https://www.instagram.com/zygobit",
    "https://wa.me/18507923399",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <Script
          strategy="lazyOnload"
          src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        ></Script>
      </head>
      <body>
        <Header />
        <ScrollProgressBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
