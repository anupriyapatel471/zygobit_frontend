/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ApplicationAgeny from "@/component/sevices/Common/ApplicationAgeny/ApplicationAgeny";
import AOSInitializer from "@/component/common/AOSInitializer";

import faqData from "../../../utils/content/faq/faqEcommerce.json";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);

const Blog = dynamic(() => import("@/component/common/Blog/Blog"));

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);

const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);

const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const WebSlider = dynamic(() =>
  import("@/component/sevices/Common/WebSlider/WebSlider").then(
    (mod) => mod.WebSlider
  )
);

const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

const CardSpotlights = dynamic(() =>
  import(
    "@/component/sevices/WebAppDevelopment/RobustWebCards/RobustWebCards"
  ).then((mod) => mod.CardSpotlights)
);

const CustomWebCards = dynamic(() =>
  import(
    "@/component/sevices/WebAppDevelopment/CustomWebCards/CustomWebCards"
  ).then((mod) => mod.CustomWebCards)
);

import { Metadata } from "next";
import applicationAgencyData from "../../../utils/content/applicationAgency/webApp.json";

import Link from "next/link";
import CtaSecond from "@/component/new/CtaSecond";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import AppleCardsCarousel from "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel";
import BoostBussiness from "@/component/sevices/Common/BoostBussiness/BoostBussiness";
import AboutWeb from "@/component/new/AboutWeb";
import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";
import webAppOneJson from "../../../utils/content/boxreveals/webAppOne.json";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Zygobit Website Web Development Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Web Development",
    description: "Zygobit Website Web Development Page",
    type: "website",
    url: "https://www.zygobit.com/web-development",
    images: [
      {
        url: "https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zygobit Web Development",
      },
    ],
  },
  twitter: {
    title: "Web Development",
    description: "Zygobit Website Web Development Page",
    card: "summary_large_image",
    creator: "@Zygobit",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
  },
};

const WebAppDevelopment = () => {
  const heading = "Accelerate Your Business with Tailored Mobile App Solutions";
  const paragraph =
    "we specialize in crafting custom mobile applications that empower businesses to thrive in today’s digital-first world. Our innovative solutions are designed to align with your unique goals, helping you unlock new opportunities, engage your audience, and drive sustainable growth.";

  const heroHeading = "We are Trusted by Industry Leaders";

  const heroParagraph =
    "Powering businesses with cutting-edge web development solutions that ensure seamless performance, scalability, and innovation.";

  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />

      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full custom-apple-slider  bg-white py-12 sm:py-14 lg:py-20">
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-[40%]">
            <BoostBussiness heading={heading} paragraph={paragraph} />
            <Link href="/contact">
              <button className="mt-3 sm:mt-3 lg:mt-3.5 2xl:mt-16 btn-primary text-white font-normal  group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                Get Assistance{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="w-full">
              <AppleCardsCarousel />
            </div>
          </div>
        </div>
      </section>

      <AboutWeb data={webAppOneJson} />
      <ApplicationAgeny data={applicationAgencyData} />

      <section className="w-full py-10 sm:py-16 z-10  relative overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 size-full ">
          <Image
            className="w-full h-ful object-cover"
            src="/images/cta_bg.png"
            alt="Background Circle"
            fill
          />
        </div>
        <div className="container remove-bg">
          <div className="w-full  text-sm sm:text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom-second font-bold">
              Proven Strategies for Robust Web Solutions
            </h2>
            <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-1.5 sm:mt-3">
              Here are the key principles we follow to deliver top-notch web
              development solutions. Whether you need a responsive website, a
              scalable web application, or an enterprise-grade platform, we
              ensure excellence at every step.
            </p>
          </div>
          <div className="w-full mt-5 sm:mt-10 mb-0 sm:my-10">
            <CardSpotlights />
          </div>
          <div className="w-full flex justify-center mt-5 sm:mt-5">
            <Link href="/contact">
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Develop a Custom Web App Today{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <Suspense fallback={<Loader />}>
        <section className="w-full pb-12 sm:pb-14 lg:pb-20">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] text-gradiant-custom-second font-bold">
                Zygobit: Pioneering Custom Web App Development
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-2 sm:mt-5">
                Empowering businesses with innovative web applications, our
                expert developers craft high-performance solutions to enhance
                efficiency, scalability, and profitability.
              </p>
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <CustomWebCards />
            </div>
            <div className="w-full  flex justify-center items-center">
              <button className="mt-4 sm:mt-7 lg:mt-5 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Build Your App Today!{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section className="w-full  pt-10 sm:pt-14  overflow-hidden">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center" data-aos="fade-right">
              <h2 className="text-gradiant-custom-second font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
                Featured Projects
              </h2>
              <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-4xl sm:mx-auto">
                Partner with Zygobit for innovative, secure, and scalable mobile
                app development solutions tailored to your unique business
                needs.
              </p>
            </div>
            <div data-aos="fade-up">
              <FeaturedSlider />
            </div>
            <div className="w-full flex justify-center mt-7 sm:mt-10">
              <Link href={"/portfolio"}>
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  View All
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div className="">
          <Blog />
        </div>
      </Suspense>
      <FaqSection faqData={faqData} />
      <ContactForm />
    </>
  );
};

export default WebAppDevelopment;
