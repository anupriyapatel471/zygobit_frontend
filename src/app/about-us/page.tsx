/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import AOSInitializer from "@/component/common/AOSInitializer";
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import GridBoxes from "@/component/common/GridBoxes/GridBoxes";
import DeliveringTailored from "@/component/common/DeliveringTailored/DeliveringTailored";
import Loader from "@/component/common/Loader/Loader";
import { Suspense } from "react";
import { EcommerceShineCards } from "@/component/sevices/Ecommerce/EcommerceShineCards/EcomoerceShineCards";
import AboutCta from "@/component/new/AboutCta";
import AboutWeb from "@/component/new/AboutWeb";
import aboutUsOneJson from "../../utils/content/boxreveals/aboutUsOne.json";
import aboutUsTwoJson from "../../utils/content/boxreveals/aboutUsTwo.json";
import cards from "../../utils/content/gridboxcardsdata/aboutusGrid.json";

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
import { WebPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "About Zygobit | Web & Mobile App Development Experts",
  description:
    "Discover Zygobit – a cutting-edge software development company offering web and mobile app development, UI/UX design, and AI-driven solutions.",
  keywords:
    "Zygobit, About Zygobit, Web Development Company, Mobile App Development, UI/UX Design, AI Solutions, Custom Software Development, Tech Company India",
  openGraph: {
    title: "About Zygobit | Web & Mobile App Development Experts",
    description:
      "Learn more about Zygobit – experts in custom web apps, mobile development, and digital transformation solutions.",
    images: ["/images/Logo.png"],
    url: "https://www.zygobit.com/about-us",
  },
  twitter: {
    title: "About Zygobit | Web & Mobile App Development Experts",
    description:
      "Get to know Zygobit – your trusted partner for innovative and scalable digital solutions.",
    images: ["/images/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
  alternates: {
    canonical: "https://www.zygobit.com/about-us",
  },
};

const aboutPageJsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Zygobit",
  url: "https://www.zygobit.com/about-us",
  description:
    "Discover Zygobit – a cutting-edge software development company offering web and mobile app development, UI/UX design, and AI-driven solutions.",
};

const About = () => {
  const clientSaysHeading = " We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";
  const GridBoxesHeading = "Why Choose Zygobit?";
  const GridBoxesDetail =
    "Choose Zygobit for innovative, reliable, and high-quality solutions that drive your business forward with cutting-edge technology and expert support!";
  const deliveringHeading = "Delivering Tailored Excellence";
  const deliveringPara =
    "We turn your vision into reality with creative, innovative solutions that deliver quality and results.";
  const heroHeading = "Innovatinng the Digital Future";
  const heroParagraph =
    "We are a tech-driven company passionate about building cutting-edge mobile and web solutions, helping businesses thrive in a digital-first world.";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />

      {/* <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense> */}

      <AboutCta />

      <section className="w-full relative pt-5 sm:py-0">
        <div className="container remove-bg">
          <div className="w-full relative flex flex-wrap sm:flex-nowrap sm:gap-[105px] lg:gap-[215px] justify-center sm:justify-between items-center">
            <div className="font-bold order-2 sm:order-none text-[55px] sm:text-[70px] lg:text-[150px] text-themetext sm:absolute sm:top-5 lg:top-10 left-[42%] sm:-translate-x-1/2">
              2025
            </div>
            <div className="w-full order-1 sm:order-none sm:w-[433px]">
              <Image
                className="w-full sm:w-[433px] h-[275px] lg:h-[372px] object-contain"
                width={433}
                height={372}
                src="/images/team_work.png"
                alt="team work image"
              />
            </div>

            <div className="text-center sm:text-left w-full order-3 sm:order-none sm:w-[548px]">
              <p className="text-sm sm:text-base lg:text-lg text-white sm:mt-8 relative z-10">
                Zygobit is where innovative ideas and exceptional code converge.
                We don&apos;t merely create digital products – we design growth,
                innovation, and user-focused solutions. Collaboration is fuelled
                by our team of experts that crafts future-proof software that
                helps businesses to lead, scale, and prevail with certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutWeb data={aboutUsOneJson} />

      <div className="sm:-my-5  lg:my-0">
        <GridBoxes
          GridBoxesHeading={GridBoxesHeading}
          GridBoxesDetail={GridBoxesDetail}
          cards={cards}
        />
      </div>

      <div className="-mt-5 mb-5 sm:mb-0 sm:mt-0 ">
        <AboutWeb data={aboutUsTwoJson} />
      </div>

      <Suspense fallback={<Loader />}>
        <DeliveringTailored
          deliveringHeading={deliveringHeading}
          deliveringPara={deliveringPara}
        />
      </Suspense>

      <section className="w-full  mb-0 sm:mb-10 lg:mb-0 pt-10 pb-10 sm:py-12 lg:py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img
            className="w-full h-full object-cover"
            src="/images/cta_bg.png"
            alt="Cta bg"
          />
        </div>
        <div className="container remove-bg">
          <div
            className="w-full  sm:text-center mb-5 sm:mb-10"
            data-aos="fade-right"
          >
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] mb-2 sm:mb-6">
              Our Values
            </h2>
            <p className="text-sm leading-6 sm:leading-normal sm:text-base lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
              Choose Zygobit for innovative, reliable, and high-quality
              solutions that drive your business forward with cutting-edge
              technology and expert support!
            </p>
          </div>
          <div className="w-full">
            <EcommerceShineCards />
          </div>
        </div>
      </section>

      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />
      <ContactForm />
    </>
  );
};

export default About;
