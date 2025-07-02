import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

import { Metadata } from "next";
import { BannerGridBg } from "@/component/common/HeroBanner/BannerGridBg/BannerGridBg";
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
      <section className="w-full h-[300px] sm:h-auto relative pt-16 sm:pt-32">
        <div className="container remove-bg">
          <div className="w-full h-full absolute z-10 top-0 left-0 ">
            <BannerGridBg />
          </div>
          <div className=" w-full mt-[60px] sm:mt-0 text-center relative py-10 sm:py-16  lg:py-24">
            <div className="w-full">
              <div className="w-full">
                <h1 className="font-bold relative z-10 text-3xl sm:text-3xl lg:text-[38px] text-shadow-2xl  text-gradiant-custom">
                  Our Portfolio
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioProjects />

      <ContactForm />
    </>
  );
};

export default Portfolio;
