import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import BoostBussiness from "@/component/sevices/Common/BoostBussiness/BoostBussiness";
import AOSInitializer from "@/component/common/AOSInitializer";

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

const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);

const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const ParticlesCards = dynamic(() =>
  import(
    "@/component/sevices/uiUxWebDesign/ParticlesCards/ParticlesCards"
  ).then((mod) => mod.ParticlesCards)
);

import { Metadata } from "next";
import faqUiUx from "../../../utils/content/faq/faqUiUx.json";
import AppleCardsCarousel from "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel";
import CtaSecond from "@/component/new/CtaSecond";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import Link from "next/link";
import DeliveringTailored from "@/component/common/DeliveringTailored/DeliveringTailored";
import GridBoxes from "@/component/common/GridBoxes/GridBoxes";
import cards from "../../../utils/content/gridboxcardsdata/uiuxgrid.json";
import appleCardsData from "../../../utils/content/appleCardsCarousel/uiUxApple.json";
import deliveringTailoredData from "../../../utils/content/deliveringTailored/tailoredUiux.json";

export const metadata: Metadata = {
  title: "UI UX Design",
  description: "Zygobit Website Uiux Web Design Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "UI UX Design",
    description: "Zygobit Website Uiux Web Design Page",
    images: ["/images/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/uiux-web-design",
  },
  twitter: {
    title: "UI UX Design",
    description: "Zygobit Website Uiux Web Design Page",
    images: ["/images/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
  alternates: {
    canonical:
      "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/uiux-web-design",
  },
};
const UiuxWebDesign = () => {
  const GridBoxesHeading = " Why Zygobit for UI/UX Design ?";
  const GridBoxesDetail =
    "Empowering businesses with intuitive, aesthetically pleasing, and user-friendly experiences. Our expert UI/UX designers leverage cutting-edge tools to craft seamless digital journeys that captivate and convert.";

  const clientHeading = "Hear It from Our Happy Clients!";
  const clientSaysDetails =
    "See how our custom app development services have transformed businesses and driven success for our happy clients";

  const deliveringHeading = "Delivering Tailored UI/UX Excellence";
  const deliveringPara =
    "We transform your ideas into seamless, intuitive digital experiences with creative, user-first design solutions that drive engagement and results.";

  const heading = "Craft Exceptional User Experiences with UI/UX Design";
  const paragraph =
    "We create visually stunning and intuitive UI/UX designs that enhance usability, engagement, and brand identity. Our expertise ensures a seamless digital experience tailored to your audience.";
  const heroHeading = "Custom UI/UX Design Services";
  const heroParagraph =
    "We craft visually stunning and user-centric experiences with our cutting-edge, research-driven UI/UX design services. Our team specializes in creating intuitive, engaging, and accessible interfaces that not only meet but exceed user expectations, ensuring a seamless and impactful digital experience.";

  return (
    <>
      <AOSInitializer />
      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full relative overflow-hidden  bg-white py-12 sm:py-14 lg:py-20">
        <div className="container remove-bg">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-5">
            <div className="w-full lg:w-2/5">
              <BoostBussiness heading={heading} paragraph={paragraph} />
              <Link href="/contact">
                <button className="mt-5 lg:mt-[45px] 2xl:mt-[95px] btn-primary text-white font-normal  group bg-orange-600 hover:bg-orange-600 duration-500 transition-all">
                  Get Assistance{" "}
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-3/5 lg:absolute lg:-right-12 2xl:-right-16">
              <div className="w-full">
                <AppleCardsCarousel data={appleCardsData} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="w-full py-12 sm:py-14 lg:py-20  relative"
      >
        <div className="container remove-bg">
          <div className="w-full sm:text-center mb-5 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
              We Follow a Comprehensive UI UX Design Process
            </h2>
            <p className="sm:font-medium  text-sm sm:text-base lg:text-xl my-3">
              As a leading mobile UI/UX design services company, we meticulously
              fine-tune every aspect of your project to ensure an exceptional
              user experience that meets business goals and exceeds
              expectations.
            </p>
          </div>
          <div className=" w-full flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10">
            <div className="w-full lg:w-32">
              <h3 className="font-bold sm:text-center lg:text-left text-xl sm:text-2xl lg:text-[32px] text-gradient-custom">
                UI Design Process
              </h3>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 pb-8 sm:mb-12 sm:pb-12 border-b border-white">
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img
                    src="/images/setting_design_icon.svg"
                    alt="setting design icon"
                  />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Setting Design Goals
                </h4>
                <p className="text-sm">
                  Define design objectives based on user needs and project
                  requirements to align UI/UX solutions with user expectations
                  and business goals
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img
                    src="/images/user_research_icon.svg"
                    alt="user research icon"
                  />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  User research & Analysis
                </h4>
                <p className="text-sm">
                  Conducting research to understand user behavior, expectations,
                  and pain points for data-driven decisions.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img
                    src="/images/wireframing_icon.svg"
                    alt="wireframing icon"
                  />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Wireframing & Prototyping
                </h4>
                <p className="text-sm">
                  Creating interactive wireframes and prototypes to refine
                  functionality before development.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img src="/images/testing_icon.svg" alt="testing icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Usability Testing
                </h4>
                <p className="text-sm">
                  Identifying areas for improvement through testing and
                  optimizing the user experience.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-5 lg:gap-10">
            <div className="w-full lg:w-32">
              <h3 className="font-bold sm:text-center lg:text-left text-xl sm:text-2xl lg:text-[32px] text-gradient-custom">
                UX Design Process
              </h3>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 ">
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img
                    src="/images/setting_design_icon.svg"
                    alt="setting design icon"
                  />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Visual Design & Branding
                </h4>
                <p className="text-sm">
                  Crafting visually appealing designs that align with brand
                  identity.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img
                    src="/images/user_research_icon.svg"
                    alt="user research icon"
                  />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Interactions & Motion Design
                </h4>
                <p className="text-sm">
                  Enhancing user engagement with seamless interactions and
                  animations.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img
                    src="/images/wireframing_icon.svg"
                    alt="wireframing icon"
                  />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Responsive & Adaptive Design
                </h4>
                <p className="text-sm">
                  Ensuring optimal performance across different devices and
                  screen sizes.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img src="/images/testing_icon.svg" alt="testing icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Design Hand off & implementation
                </h4>
                <p className="text-sm">
                  Delivering high-quality, developer-friendly design assets for
                  a smooth transition to development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loader />}>
        <DeliveringTailored
          deliveringHeading={deliveringHeading}
          deliveringPara={deliveringPara}
          deliveringTailoredData={deliveringTailoredData}
        />
      </Suspense>

      <section className="w-full  overflow-hidden  py-12 sm:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img
            className="w-full h-full object-cover"
            src="/images/cta_bg.png"
            alt="cta bg"
          />
        </div>
        <div className="container remove-bg">
          <div className="w-full  sm:text-center">
            <h2 className="text-gradiant-custom font-bold text-2xl sm:text-3xl lg:text-[38px] mb-2 sm:mb-3 lg:mb-6">
              Unlock Efficiency with Expert UI/UX Design
            </h2>
            <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-5xl sm:mx-auto">
              Our UI/UX design services are tailored to meet the unique needs of
              your web user interface design project. Here’s a quick overview of
              what we offer:
            </p>
          </div>
          <div className="w-full mt-5 sm:mt-10">
            <ParticlesCards />
          </div>
        </div>
      </section>

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>

      <div className="pt-12 sm:pt-0">
        <GridBoxes
          GridBoxesHeading={GridBoxesHeading}
          GridBoxesDetail={GridBoxesDetail}
          cards={cards}
        />
      </div>

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <Suspense fallback={<Loader />}>
        <div className="">
          <Blog />
        </div>
      </Suspense>

      <FaqSection faqData={faqUiUx} />

      <ContactForm />
    </>
  );
};

export default UiuxWebDesign;
