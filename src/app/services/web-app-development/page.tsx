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

import engagementModelsWebApp from "../../../utils/content/webSlider/ecommerce.json";
import Link from "next/link";
import CtaSecond from "@/component/new/CtaSecond";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";

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
        url: "https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png",
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
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
  },
};

const WebAppDevelopment = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";
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

      {/* new cta */}
      <section className="w-full relative py-12 sm:py-16 overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0">
          <img className="w-full h-full" src="/images/cta_bg.png" alt="" />
        </div>
        <div className="container remove-bg">
          <div className="inter-var py-0 w-full">
            <div className="w-full pb-5 sm:pb-0 relative bg-[#D9D9D91A] backdrop-blur-xl group/card justify-between items-center   rounded-xl flex-wrap lg:flex-nowrap flex  ">
              <div
                data-aos="fade-right"
                className="w-full  lg:w-[45%] p-4 text-white  sm:p-5 lg:pr-0 lg:py-12 lg:pl-8"
              >
                <span className="font-medium text-base sm:text-lg lg:text-xl">
                  10X Your eCommerce Sales Growth!
                </span>
                <h2 className="text-2xl sm:text-[28px] text-gradiant-custom lg:text-4xl    font-bold">
                  Accelerate Sales With Our Ecommerce Web App Development
                  Services
                </h2>
                <div className="mt-5 lg:mt-10">
                  <Link href={"/contact"}>
                    <button className=" btn-primary  text-white font-normal  group bg-orange-600 duration-500 transition-all">
                      Build Your Web App Today
                      <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                    </button>
                  </Link>
                </div>
              </div>
              <div
                // data-aos="fade-left"
                className="font-medium text-base sm:text-lg lg:text-xl  lg:w-[55%]  w-auto mx-auto p-4 lg:p-0 lg:mx-0"
              >
                <p className="mb-5">
                  With over 2.14 billion global online shoppers and a projected
                  revenue of $6.39 trillion in eCommerce sales by 2024, having a
                  powerful web application is essential for business success
                </p>
                <ul className="space-y-2">
                  <li>1. Lightning-Fast Load Times</li>
                  <li>2. Secure Payment Integration</li>
                  <li>3. Mobile & Desktop Compatibility</li>
                  <li>4. Advanced Analytics & Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        <div className="container">
          <div className="w-full  text-sm sm:text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
              Proven Strategies for Robust Web Solutions
            </h2>
            <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
              Here are the key principles we follow to deliver top-notch web
              development solutions. Whether you need a responsive website, a
              scalable web application, or an enterprise-grade platform, we
              ensure excellence at every step.
            </p>
          </div>
          <div className="w-full  my-10 sm:my-10">
            <CardSpotlights />
          </div>
          <div className="w-full flex justify-center mt-10 sm:mt-14">
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
        <section className="w-full pb-0 pt-0 sm:py-12 lg:py-16">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] text-gradiant-custom font-bold">
                Zygobit: Pioneering Custom Web App Development
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-3">
                Empowering businesses with innovative web applications, our
                expert developers craft high-performance solutions to enhance
                efficiency, scalability, and profitability.
              </p>
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <CustomWebCards />
            </div>
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <section className="w-full pt-14 sm:pt-0 pb-12 sm:pb-20 lg:pb-20 overflow-hidden">
          <div className="container remove-bg">
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-6 lg:gap-5">
              <div className="w-full lg:w-1/2 ">
                <h2 className="text-2xl sm:text-3xl lg:text-[35px] lg:leading-[50px] text-gradiant-custom font-bold">
                  Select from Our Flexible Custom Web App Models
                </h2>
                <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-2 sm:mt-4 mb-3 sm:mb-7">
                  Being a top custom web application development services
                  provider, we offer multiple hiring models that best suit your
                  needs
                </p>
                <Link href="/contact">
                  <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                    Hire Web Application Developers{" "}
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 ">
                <WebSlider engagementModels={engagementModelsWebApp} />
              </div>
            </div>
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>
      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />
      <Suspense fallback={<Loader />}>
        <div className="mt-5 sm:mt-12">
          <Blog />
        </div>
      </Suspense>
      <FaqSection faqData={faqData} />
      <ContactForm />
    </>
  );
};

export default WebAppDevelopment;
