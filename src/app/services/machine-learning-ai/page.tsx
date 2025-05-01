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
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Machine Learning AI",
  description: "Zygobit Website Machine Learning AI Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Machine Learning AI",
    description: "Zygobit Website Machine Learning AI Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Machine Learning AI",
    description: "Zygobit Website Machine Learning AI Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
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

  // const cards = [
  //   {
  //     id: 1,
  //     content: <SkeletonOne />,
  //     className: "md:col-span-3 cursor-pointer",
  //     title: "Proven AI Expertise",
  //     thumbnail: "/images/Proven_expertise.png",
  //   },
  //   {
  //     id: 2,
  //     content: <SkeletonTwo />,
  //     className: "md:col-span-2 cursor-pointer",
  //     title: "Scalable AI Solutions",

  //     thumbnail: "/images/Scalable_solution.png",
  //   },
  //   {
  //     id: 3,
  //     content: <SkeletonThree />,
  //     className: "md:col-span-2 cursor-pointer",
  //     title: "Intelligent User Experience",

  //     thumbnail: "/images/User_centric.png",
  //   },
  //   {
  //     id: 4,
  //     content: <SkeletonFour />,
  //     className: "md:col-span-3 cursor-pointer",
  //     title: "Seamless AI Integration",
  //     thumbnail: "/images/seamless_interaction.jpg",
  //   },
  // ];

  const cards = [
    {
      id: 1,
      title: "Proven Expertise",
      content:
        "Harness the power of AI-driven solutions tailored to optimize your business operations, enhance decision-making, and drive innovation.",
      className: "sm:col-span-2",
      bgClass: "bg-black/70",
      thumbnail: "/images/Proven_expertise.png",
      boxIcon: "/images/setting_icon.svg",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      content:
        " Deploy AI models that grow with your business, ensuring efficiency, automation , and seamless adaptability to changing demands.",
      className: "",
      bgClass: "bg-orange-600",
      thumbnail: "/images/Scalable_solution.png",
      boxIcon: "/images/black_arrow.svg",
    },
    {
      id: 3,
      title: "User-Centric Design",
      content:
        " Enhance customer interactions with AI-powered personalization, predictive analytics, and smart automation for a seamless digital experience.",
      className: "",
      bgClass: "bg-orange-600",
      thumbnail: "/images/User_centric.png",
      boxIcon: "/images/pen_icon.svg",
    },
    {
      id: 4,
      title: "Seamless Interactions",
      content:
        "Integrate cutting-edge AI and ML models into your existing systems, enabling real-time data processing, automation, and intelligent insights.",
      className: "sm:col-span-2",
      bgClass: "bg-black/70",
      boxIcon: "/images/repeat.svg",
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

      <Suspense fallback={<Loader />}>
        <section className="w-full custom-apple-slider  bg-white py-12 sm:py-14 lg:py-20">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-5">
            <div className="w-full lg:w-[40%]">
              <div className="w-full  inline-block text-black">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] lg:leading-[50px]">
                  Full-Scale Machine Learning & AI Services.
                </h2>
                <p className=" sm:font-medium text-sm sm:text-base sm:leading-8 mt-4">
                  Zygobit is a leading AI-driven software development company,
                  delivering cutting-edge machine learning solutions. Our
                  innovative technology enhances efficiency, automation, and
                  decision-making, providing users with a seamless experience.
                </p>
              </div>
              <Link href="/contact">
                <button className="mt-5 lg:mt-10 btn-primary text-white font-normal  group bg-orange-600 hover:bg-orange-600 duration-500 transition-all">
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
      </Suspense>
      <Suspense fallback={<Loader />}>
        <section className="w-full  pt-10 sm:pt-14 lg:pt-20 overflow-hidden">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center" data-aos="fade-right">
              <h2 className="text-gradiant-custom-second font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
                Featured UI UX Design Case Studies
              </h2>
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
        <section className="w-full  py-12 sm:py-14 lg:py-20">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center " data-aos="fade-right">
              <h2 className="text-gradiant-custom-second font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-5">
                Leverage AI & Machine Learning to Stay Ahead.
              </h2>
              <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium">
                Our experienced developers offer all-inclusive exchange
                development services with AI and Machine Learning features,
                enabling secure and instant transactions.
              </p>
            </div>
            <div className="w-full  mt-8 sm:mt-8 lg:mt-10">
              <AwareHoverCards />
            </div>
          </div>
        </section>
      </Suspense>

      <div className="">
        <ClientSays
          clientHeading={clientSaysHeading}
          clientSaysDetails={clientSaysDetails}
        />
      </div>

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <section className="w-full custom-apple-slider pb-12 sm:pb-16 lg:pb-20 mb-5 sm:mb-12 lg:mb-12 lg:mt-32 overflow-hidden">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-20 sm:gap-5">
            <div className="w-full lg:w-2/5 ">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] lg:leading-[50px] text-gradiant-custom-second font-bold">
                Select from Our AI & ML-Powered Development Models
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-2.5 sm:mt-4 mb-4 sm:mb-7">
                Being a leading AI & ML-driven web application development
                provider, we offer multiple hiring models tailored to your
                needs.
              </p>
              <Link href="/contact">
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Hire Web Application Developers{" "}
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-3/5 ">
              <WebSlider engagementModels={engagementModelsMlAi} />
            </div>
          </div>
      </section>

      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div className="mt-12 sm:mt-0 -mb-10">
          <GridBoxes
            GridBoxesDetail={GridBoxesDetail}
            GridBoxesHeading={GridBoxesHeading}
            cards={cards}
          />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Blog />
      </Suspense>

      <FaqSection faqData={faqData} />

      <ContactForm />
    </>
  );
};

export default MachineLearning;
