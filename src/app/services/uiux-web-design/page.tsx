/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const MobileAppGrid = dynamic(() =>
  import("@/component/common/MobileAppGrid/MobileAppGrid").then(
    (mod) => mod.MobileAppGrid
  )
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const UiuxSlider = dynamic(
  () => import("@/component/common/uiuxSlider/uiuxSlider")
);
const BackgroundGradientCard = dynamic(() =>
  import(
    "@/component/sevices/uiUxWebDesign/BgGradientCard/BgGradientCard"
  ).then((mod) => mod.BackgroundGradientCard)
);
const UiuxTimeline = dynamic(
  () => import("@/component/sevices/uiUxWebDesign/uiuxTimeline/uiuxTimeline")
);
const ParticlesCards = dynamic(() =>
  import(
    "@/component/sevices/uiUxWebDesign/ParticlesCards/ParticlesCards"
  ).then((mod) => mod.ParticlesCards)
);
// const UiuxTeams = dynamic(() =>
//   import("@/component/sevices/uiUxWebDesign/uiuxTeam/uiuxTeam").then(
//     (mod) => mod.UiuxTeams
//   )
// );
import { Metadata } from "next";
import faqUiUx from "../../../utils/content/faq/faqUiUx.json";
import uiuxSliderData from "../../../utils/content/uiUxSlider/uiUx.json";
import AppleCardsCarousel from "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel";
import CtaSecond from "@/component/new/CtaSecond";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI UX Design",
  description: "Zygobit Website Uiux Web Design Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "UI UX Design",
    description: "Zygobit Website Uiux Web Design Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "UI UX Design",
    description: "Zygobit Website Uiux Web Design Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};
const UiuxWebDesign = () => {
  const heading = "Craft Exceptional User Experiences with UI/UX Design";
  const paragraph =
    "We create visually stunning and intuitive UI/UX designs that enhance usability, engagement, and brand identity. Our expertise ensures a seamless digital experience tailored to your audience.";
  const heroHeading = "Custom UI/UX Design Services";
  const heroParagraph =
    "We craft visually stunning and user-centric experiences with our cutting-edge, research-driven UI/UX design services. Our team specializes in creating intuitive, engaging, and accessible interfaces that not only meet but exceed user expectations, ensuring a seamless and impactful digital experience.";

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Proven Expertise
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Years of experience delivering high-quality UI/UX designs that enhance
          user engagement and satisfaction.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Scalable Solutions
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Designs that grow with your business, ensuring a seamless experience
          across all user touchpoints.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          User-Centric Design
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A human-first approach that prioritizes usability, accessibility, and
          intuitive navigation.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Seamless Interactions
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Smooth, responsive, and engaging experiences that keep users connected
          and satisfied.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-3 cursor-pointer",
      title: "Proven Expertise",
      thumbnail: "/images/Proven_expertise.png",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "md:col-span-2 cursor-pointer",
      title: "Scalable Solutions",

      thumbnail: "/images/Scalable_solution.png",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "md:col-span-2 cursor-pointer",
      title: "User-Centric Design",

      thumbnail: "/images/User_centric.png",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-3 cursor-pointer",
      title: "Seamless Interactions",
      thumbnail: "/images/seamless_interaction.jpg",
    },
  ];

  return (
    <>
      <AOSInitializer />
      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full custom-apple-slider  bg-gradient-to-b from-orange-950  to-black py-12 sm:py-14 lg:py-20">
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-[45%]">
            <BoostBussiness heading={heading} paragraph={paragraph} />
            <Link href="/contact">
              <button className="mt-5 lg:mt-10 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Get Assistance{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-[55%]">
            <div className="w-full">
              <AppleCardsCarousel />
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="w-full pt-10 sm:pt-16  relative">
        <div className="container remove-bg">
          <div className="w-full sm:text-center mb-5 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradient-custom">
              We Follow a Comprehensive UI UX Design Process
            </h2>
            <p className="sm:font-medium  text-sm sm:text-xl my-3">
              As a leading mobile UI/UX design services company, we meticulously
              fine-tune every aspect of your project to ensure an exceptional
              user experience that meets business goals and exceeds
              expectations.
            </p>
          </div>
          <div className=" w-full flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10">
            <div className="w-full lg:w-32">
              <h3 className="font-bold text-xl sm:text-2xl lg:text-[32px] text-gradient-custom">
                UI Design Process
              </h3>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 pb-8 sm:mb-12 sm:pb-12 border-b border-white">
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img src="/images/setting_design_icon.svg" alt="" />
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
                  <img src="/images/user_research_icon.svg" alt="" />
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
                  <img src="/images/wireframing_icon.svg" alt="" />
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
                  <img src="/images/testing_icon.svg" alt="" />
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
              <h3 className="font-bold text-xl sm:text-2xl lg:text-[32px] text-gradient-custom">
                UX Design Process
              </h3>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 ">
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <img src="/images/setting_design_icon.svg" alt="" />
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
                  <img src="/images/user_research_icon.svg" alt="" />
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
                  <img src="/images/wireframing_icon.svg" alt="" />
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
                  <img src="/images/testing_icon.svg" alt="" />
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
        <section className="w-full pt-12 sm:pt-14 lg:pt-16">
          <div
            className="w-full px-4 sm:px-0  sm:text-center"
            data-aos="fade-right"
          >
            <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
              Industries We Serve: Unmatched Experiences
            </h2>
            <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
              Transforming Ideas into Exceptional User Experiences Across
              Various Sectors
            </p>
          </div>
          <div className="w-full relative  mt-8 sm:mt-12 mb-12 sm:mb-24 lg:mb-32">
            <div className="hidden sm:inline pointer-events-none absolute z-[1] -top-8 sm:-top-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
            <UiuxSlider firstRow={uiuxSliderData} />
            <div className="hidden sm:inline pointer-events-none absolute -bottom-8 sm:-bottom-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
          </div>
        </section>
      </Suspense>

      <section className="w-full  overflow-hidden  py-12 sm:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img
            className="w-full h-full object-cover"
            src="/images/cta_bg.png"
            alt=""
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
      <section className="w-full pt-10 sm:pt-10 lg:mt-16 pb-12 sm:pb-20 lg:pb-32 bg-black">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center mb-8 sm:mb-12 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom">
              Why Zygobit for UI/UX Design?
            </h2>
            <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
              Empowering businesses with intuitive, aesthetically pleasing, and
              user-friendly experiences. Our expert UI/UX designers leverage
              cutting-edge tools to craft seamless digital journeys that
              captivate and convert.
            </p>
          </div>
          <div className="w-full">
            <MobileAppGrid cards={cards} />
          </div>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <div className="mt-5 sm:mt-12">
          <Blog />
        </div>
      </Suspense>
      <FaqSection faqData={faqUiUx} />

      <ContactForm />
    </>
  );
};

export default UiuxWebDesign;
