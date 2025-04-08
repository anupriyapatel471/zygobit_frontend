/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ApplicationAgeny from "@/component/sevices/Common/ApplicationAgeny/ApplicationAgeny";
import AOSInitializer from "@/component/common/AOSInitializer";
import Sales from "../../../../public/images/sales.png";
import WebCustom from "../../../../public/images/web_custom.png";
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

const Cta = dynamic(() => import("@/component/common/Cta/Cta"));

const WebDevProcess = dynamic(
  () => import("@/component/sevices/Common/WebDevProcess/WebDevProcess")
);

const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

const HeroParalax = dynamic(
  () => import("@/component/common/HeroParallax/HeroParallax")
);
const BoxReveals = dynamic(() =>
  import("@/component/common/WebSales/WebSales").then((mod) => mod.BoxReveals)
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

const ScrollTriggered = dynamic(
  () =>
    import(
      "@/component/sevices/WebAppDevelopment/WebScrollTriggered/WebScrollTriggered"
    )
);
import { Metadata } from "next";
import applicationAgencyData from "../../../utils/content/applicationAgency/webApp.json";

import engagementModelsWebApp from "../../../utils/content/webSlider/ecommerce.json";
import webDevData from "../../../utils/content/webDevProcess/webApp.json";
import boxData1 from "../../../utils/content/boxreveals/webAppOne.json";
import boxData2 from "../../../utils/content/boxreveals/webAppTwo.json";
import Link from "next/link";
import CtaSecond from "@/component/new/CtaSecond";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Zygibit Website Web Development Page",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Web Development",
    description: "Zygibit Website Web Development Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Web Development",
    description: "Zygibit Website Web Development Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};
const WebAppDevelopment = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  // const applicationHeading = "Why Partner with Our Web Application Agency?";
  // const applicationDetails =
  //   "Partnering with our custom web application development company in USA unlocks greater profitability, fosters continuous innovation, and accelerates your business growth globally.";
  const heroHeading = "We are Trusted by Industry Leaders";
  const heroParagraph =
    "Powering businesses with cutting-edge web development solutions that ensure seamless performance, scalability, and innovation.";

  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <WeDeliver />

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
                className="w-full order-2 lg:order-none lg:w-[45%] p-4 text-white  sm:p-5 lg:pr-0 lg:py-12 lg:pl-8"
              >
                <span className="font-medium text-base sm:text-lg lg:text-xl">
                  10X Your eCommerce Sales Growth!
                </span>
                <h2 className="text-2xl sm:text-[28px] text-gradiant-custom lg:text-4xl    font-bold">
                  Accelerate Sales With Our Ecommerce Web App Development
                  Services
                </h2>
                <div className="mt-10">
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
                className="font-medium text-base sm:text-lg lg:text-xl order-1 lg:w-[55%] lg:order-none w-auto mx-auto lg:mx-0"
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

      {/* <section className="w-full relative px-4 lg:px-24 py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap  gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src={Sales}
              alt="Sales"
              width={590}
              height={753}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <BoxReveals data={boxData1} />
          </div>
        </div>
      </section> */}
      <ApplicationAgeny data={applicationAgencyData} />

      <section className="w-full py-10 sm:py-16 z-10  relative overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 size-full ">
          <Image
            className="w-full h-ful"
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
            <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
              Develop a Custom Web App Today{" "}
              <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
            </button>
          </div>
        </div>
      </section>

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <section className="w-full pb-10 sm:py-12 lg:py-16">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] text-gradiant-custom font-bold">
              Zygobit: Pioneering Custom Web App Development
            </h2>
            <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-3">
              Empowering businesses with innovative web applications, our expert
              developers craft high-performance solutions to enhance efficiency,
              scalability, and profitability.
            </p>
          </div>
          <div className="w-full mt-4 sm:mt-0">
            <CustomWebCards />
          </div>
        </div>
      </section>

      <section className="w-full pb-12 sm:pb-14 lg:pb-20 overflow-hidden">
        <div className="container remove-bg">
          <div className="flex justify-between gap-5">
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] lg:leading-[50px] text-gradiant-custom font-bold">
                Select from Our Flexible Custom Web App Models
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-4 mb-7">
                Being a top custom web application development services
                provider, we offer multiple hiring models that best suit your
                needs
              </p>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Hire Web Application Developers{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
            <div className="w-full lg:w-1/2 ">
              <WebSlider engagementModels={engagementModelsWebApp} />
            </div>
          </div>
        </div>
      </section>

      <TechnologyStack />

      {/* <section
        data-aos="fade-up"
        className="w-full pt-10 sm:pt-16 bg-black relative"
      >
        <div className="w-full">
          <WebDevProcess data={webDevData} />
        </div>
      </section> */}

      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <div className="mt-10 sm:mt-12">
        <Blog />
      </div>

      <FaqSection faqData={faqData} />
      <ContactForm />
    </>
  );
};

export default WebAppDevelopment;

// const webDevData = [
//   {
//     title: "Ideation",
//     content: (
//       <div>
//         <p className="text-white text-xs md:text-sm lg:text-xl font-semibold mb-6">
//           At Zygobit, our web application development journey starts with
//           creative idea generation, brainstorming sessions, and thorough
//           validation to ensure the application aligns with innovative concepts.
//         </p>
//         <div className="flex">
//           <Image
//             src={whyTwo}
//             alt="hero template"
//             width={500}
//             height={500}
//             className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px]  ml-auto w-full lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//           />
//         </div>{" "}
//       </div>
//     ),
//   },
//   {
//     title: "Competitive Analysis",
//     content: (
//       <div>
//         <p className="text-white text-xs md:text-sm lg:text-xl font-semibold mb-6">
//           In this stage, our team conducts a well-structured strategy, gathers
//           market insights, and performs a comprehensive competitive analysis to
//           position your app effectively.
//         </p>
//         <div className="flex">
//           <Image
//             src={whyTwo}
//             alt="hero template"
//             width={500}
//             height={500}
//             className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px]  ml-auto w-full lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Development & Integration",
//     content: (
//       <div>
//         <p className=" text-xs md:text-sm lg:text-xl  font-semibold mb-6">
//           Our expert developers implement scalable architectures, AI-driven
//           features, and seamless integrations, ensuring an efficient and
//           high-performing application.
//         </p>
//         <div className="flex">
//           <Image
//             src={whyThree}
//             alt="hero template"
//             width={500}
//             height={500}
//             className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px] w-full lg:w-full ml-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Deployment & Optimization",
//     content: (
//       <div>
//         <p className=" text-xs md:text-sm lg:text-xl  font-semibold mb-6">
//           Once developed, we conduct rigorous testing, optimize performance, and
//           deploy the application, ensuring it delivers seamless user experiences
//           and scalability.
//         </p>
//         <div className="flex">
//           <Image
//             src={whyThree}
//             alt="hero template"
//             width={500}
//             height={500}
//             className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px] w-full lg:w-full ml-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//           />
//         </div>
//       </div>
//     ),
//   },
// ];
