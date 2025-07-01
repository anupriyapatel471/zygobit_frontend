import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

import { Metadata } from "next";
import { BannerGridBg } from "@/component/common/HeroBanner/BannerGridBg/BannerGridBg";
import PortfolioProjects from "@/component/new/PortfolioProjects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Zygobit Website Portfolio page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development , Portfolio",
  openGraph: {
    title: "Portfolio",
    description: "Zygobit Website Portfolio Page",
    images: ["/images/Logo.png"],
    url: "https://www.zygobit.com/portfolio",
  },
  twitter: {
    title: "Portfolio",
    description: "Zygobit Website Ecommerce Page",
    images: ["/images/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
  alternates: {
    canonical: "https://www.zygobit.com/portfolio",
  },
};
const Portfolio = () => {
  return (
    <>
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
