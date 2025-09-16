import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

import { Metadata } from "next";
import PortfolioProjects from "@/component/new/PortfolioProjects";

export const metadata: Metadata = {
  title: "Zygobit Portfolio | Custom Web & App Development Case Studies",
  description:
    "Explore Zygobit's portfolio of web and mobile app development projects, UI/UX designs, and software solutions tailored for diverse industries.",
  keywords:
    "Zygobit Portfolio, Software Development Projects, Web App Development, Mobile App Development, UI/UX Case Studies, IT Solutions Portfolio",
  openGraph: {
    title: "Zygobit Portfolio | Custom Web & App Development Case Studies",
    description:
      "Discover successful software, web, and mobile app projects delivered by Zygobit across industries like eCommerce, healthcare, and finance.",
    images: ["/images/Logo.png"],
    url: "https://www.zygobit.com/portfolio",
  },
  twitter: {
    title: "Zygobit Portfolio | Web, Mobile & UI/UX Development",
    description:
      "Browse the portfolio of Zygobit – showcasing successful projects in custom software, web, mobile apps, and design.",
    images: ["/images/Logo.png"],
    card: "summary_large_image",
    creator: "Zygobit",
  },
  alternates: {
    canonical: "https://www.zygobit.com/portfolio",
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Zygobit Portfolio",
  url: "https://www.zygobit.com/portfolio",
  description:
    "Explore Zygobit's portfolio of web, mobile, and UI/UX design projects across various industries including eCommerce, SaaS, and AI.",
};

const Portfolio = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AOSInitializer />

      {/* Hero banner */}

      <PortfolioProjects />

      <ContactForm />
    </>
  );
};

export default Portfolio;
