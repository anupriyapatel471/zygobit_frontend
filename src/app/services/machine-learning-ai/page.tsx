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
import cards from "../../../utils/content/gridboxcardsdata/machineGrid.json";
import appleCardsData from "../../../utils/content/appleCardsCarousel/aiMachineApple.json";

export const metadata: Metadata = {
  title: "Machine Learning AI",
  description: "Zygobit Website Machine Learning AI Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Machine Learning AI",
    description: "Zygobit Website Machine Learning AI Page",
    images: ["/images/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/machine-learning-ai",
  },
  twitter: {
    title: "Machine Learning AI",
    description: "Zygobit Website Machine Learning AI Page",
    images: ["/images/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
  alternates: {
    canonical:
      "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/services/machine-learning-ai",
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

  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section className="w-full relative overflow-hidden  bg-white py-12 sm:py-14 lg:py-20">
          <div className="container remove-bg">
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
                  <button className="mt-5 lg:mt-16 2xl:mt-[144px] btn-primary text-white font-normal  group bg-orange-600 hover:bg-orange-600 duration-500 transition-all">
                    Get Assistance{" "}
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </Link>
              </div>
              <div className="w-full lg:w-[60%] lg:absolute lg:-right-12 2xl:-right-16">
                <div className="w-full">
                  <AppleCardsCarousel appleClass={"h-[215px]"} data={appleCardsData} />
                </div>
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

            {/* <div className="w-full flex justify-center mt-7 sm:mt-10">
              <Link href={"/portfolio"}>
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  View All
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div> */}
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
            <div className="w-full  mt-5 sm:mt-8 lg:mt-10">
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
              provider, we offer multiple hiring models tailored to your needs.
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
