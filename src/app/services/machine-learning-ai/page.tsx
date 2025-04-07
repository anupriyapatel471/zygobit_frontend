/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import AOSInitializer from "@/component/common/AOSInitializer";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);
// const WebDevProcess = dynamic(
//   () => import("@/component/sevices/Common/WebDevProcess/WebDevProcess")
// );
const ShineBorderCards = dynamic(() =>
  import(
    "@/component/sevices/MachineLearning/ShineBorderCards/ShineBorderCards"
  ).then((mod) => mod.ShineBorderCards)
);
const AwareHoverCards = dynamic(() =>
  import(
    "@/component/sevices/MachineLearning/AwareHoverCards/AwareHoverCards"
  ).then((mod) => mod.AwareHoverCards)
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const WebSlider = dynamic(() =>
  import("@/component/sevices/Common/WebSlider/WebSlider").then(
    (mod) => mod.WebSlider
  )
);
const GridBoxes = dynamic(
  () => import("@/component/common/GridBoxes/GridBoxes")
);
import { Metadata } from "next";
import faqData from "../../../utils/content/faq/faqMachineLearning.json";
import engagementModelsMlAi from "../../../utils/content/webSlider/mlAi.json";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import AppleCardsCarousel from "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel";
import CtaSecond from "@/component/new/CtaSecond";

export const metadata: Metadata = {
  title: "Machine Learning AI",
  description: "Zygibit Website Machine Learning AI Page",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Machine Learning AI",
    description: "Zygibit Website Machine Learning AI Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Machine Learning AI",
    description: "Zygibit Website Machine Learning AI Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

const MachineLearning = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const GridBoxesHeading = "Why Zygobit for AI & ML-Powered Solutions?";
  const GridBoxesDetail =
    " At Zygobit, we harness the power of AI and Machine Learning to develop intelligent, data-driven solutions. Our cutting-edge tools and AI-driven insights enable us to create seamless, efficient, and highly adaptive experiences that drive innovation.";
  const heroHeading =
    "Pioneering AI & Machine Learning Solutions for Smarter Businesses";
  const heroParagraph =
    "Unleash the power of Artificial Intelligence with Zygobit! We build intelligent, data-driven solutions using cutting-edge Machine Learning and AI to revolutionize industries and drive innovation.";

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Proven AI Expertise
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Harness the power of AI-driven solutions tailored to optimize your
          business operations, enhance decision-making, and drive innovation.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Scalable AI Solutions
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Deploy AI models that grow with your business, ensuring efficiency,
          automation, and seamless adaptability to changing demands.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Intelligent User Experience
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Enhance customer interactions with AI-powered personalization,
          predictive analytics, and smart automation for a seamless digital
          experience.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Seamless AI Integration
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Integrate cutting-edge AI and ML models into your existing systems,
          enabling real-time data processing, automation, and intelligent
          insights.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-3 cursor-pointer",
      title: "Proven AI Expertise",
      thumbnail: "/images/Proven_expertise.png",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-2 cursor-pointer",
      title: "Scalable AI Solutions",

      thumbnail: "/images/Scalable_solution.png",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-2 cursor-pointer",
      title: "Intelligent User Experience",

      thumbnail: "/images/User_centric.png",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-3 cursor-pointer",
      title: "Seamless AI Integration",
      thumbnail: "/images/seamless_interaction.jpg",
    },
  ];

  // const webDevData = [
  //   {
  //     title: "Ideation",
  //     content: (
  //       <div>
  //         <p className="text-white text-xs md:text-sm lg:text-xl font-semibold mb-6">
  //           At Zygobit, our web application development journey starts with
  //           creative idea generation, brainstorming sessions, and thorough
  //           validation to ensure the application aligns with innovative
  //           concepts.
  //         </p>
  //         <div className="flex">
  //           <Image
  //             src={"/images/why_two.svg"}
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
  //           market insights, and performs a comprehensive competitive analysis
  //           to position your app effectively.
  //         </p>
  //         <div className="flex">
  //           <Image
  //             src={"/images/why_two.svg"}
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
  //             src={"/images/why_three.svg"}
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
  //           Once developed, we conduct rigorous testing, optimize performance,
  //           and deploy the application, ensuring it delivers seamless user
  //           experiences and scalability.
  //         </p>
  //         <div className="flex">
  //           <Image
  //             src={"/images/why_three.svg"}
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

  return (
    <>
      <AOSInitializer />

      <Suspense fallback={<Loader />}>
        <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
        <WeDeliver />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section className="w-full bg-gradient-to-b from-orange-950  to-black py-12 sm:py-14 lg:py-20">
          <div className="container remove-bg">
            <div className="w-full flex gap-5">
              <div className="w-[45%]">
                <div className="w-full   inline-block">
                  <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] lg:leading-[50px]">
                    Full-Scale AI & Machine Learning Services.
                  </h2>
                  <p className=" sm:font-medium text-sm sm:text-base sm:leading-8 mt-4">
                    Zygobit is a leading AI-driven software development company,
                    delivering cutting-edge machine learning solutions. Our
                    innovative technology enhances efficiency, automation, and
                    decision-making, providing users with a seamless experience.
                  </p>
                </div>
                <button className="mt-10 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Get Assistance{" "}
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </div>
              <div className="w-[55%]">
                <div className="w-full">
                  <AppleCardsCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* <section
        data-aos="fade-up"
        className="w-full pt-10 sm:pt-16 bg-black relative"
      >
        <div className="w-full">
          <WebDevProcess data={webDevData} />
        </div>
      </section> */}

      <section className="w-full px-4 lg:px-11 pb-10 sm:pb-0 pt-10  lg:py-14 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center" data-aos="fade-right">
            <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
              Featured UI UX Design Case Studies
            </h2>
          </div>
          <div data-aos="fade-up">
            <FeaturedSlider />
          </div>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <section className="w-full mb-14 sm:mb-0 pt-5 sm:pt-16">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center " data-aos="fade-right">
              <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
                Leverage AI & Machine Learning to Stay Ahead.
              </h2>
              <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium">
                Our experienced developers offer all-inclusive exchange
                development services with AI and Machine Learning features,
                enabling secure and instant transactions.
              </p>
            </div>
            <div className="w-full  mt-8 sm:mt-12 lg:mt-16">
              <AwareHoverCards />
            </div>
          </div>
        </section>
      </Suspense>
      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <section className="w-full pb-12 sm:pb-14 lg:pb-20 overflow-hidden">
        <div className="container remove-bg">
          <div className="flex justify-between gap-5">
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] lg:leading-[50px] text-gradiant-custom font-bold">
                Select from Our AI & ML-Powered Development Models
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-4 mb-7">
                Being a leading AI & ML-driven web application development
                provider, we offer multiple hiring models tailored to your
                needs.
              </p>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Hire Web Application Developers{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
            <div className="w-full lg:w-1/2 ">
              <WebSlider engagementModels={engagementModelsMlAi} />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>

      <GridBoxes
        GridBoxesDetail={GridBoxesDetail}
        GridBoxesHeading={GridBoxesHeading}
        cards={cards}
      />

      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <Blog />

      <FaqSection faqData={faqData} />

      <ContactForm />
    </>
  );
};

export default MachineLearning;
