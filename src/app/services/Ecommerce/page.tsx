/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import { EcommerceShineCards } from "@/component/sevices/Ecommerce/EcommerceShineCards/EcomoerceShineCards";
import { ThreeDCards } from "@/component/sevices/MobileAppDevelopment/ThreedCards/ThreedCards";
import { MobileAppGrid } from "@/component/common/MobileAppGrid/MobileAppGrid";
import { WebSlider } from "@/component/sevices/Common/WebSlider/WebSlider";
import AOSInitializer from "@/component/common/AOSInitializer";
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const ApplicationAgeny = dynamic(
  () => import("@/component/sevices/Common/ApplicationAgeny/ApplicationAgeny")
);
const DeliveringTailored = dynamic(
  () => import("@/component/common/DeliveringTailored/DeliveringTailored")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const OurPartners = dynamic(
  () => import("@/component/common/OurPartners/OurPartners")
);

const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
import applicationAgencyData from "../../../utils/content/applicationAgency/ecommerce.json";

import { Metadata } from "next";
import engagementModelsEcomerce from "../../../utils/content/webSlider/ecommerce.json";

import faqEcommerceData from "../../../utils/content/faq/faqEcommerce.json";
import CtaSecond from "@/component/new/CtaSecond";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Zygibit Website Ecommerce Page",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Ecommerce",
    description: "Zygibit Website Ecommerce Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Ecommerce",
    description: "Zygibit Website Ecommerce Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};
const Ecommerce = () => {
  const clientHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions";
  const deliveringHeading = "Industries We Serve: Unmatched Experiences";
  const deliveringPara =
    "Transforming Ideas into Exceptional User Experiences Across Various Sectors";
  const heroHeading = "Expert E-Commerce Development Services";
  const heroParagraph =
    "We build powerful and scalable e-commerce solutions tailored to your business needs. From custom store development to seamless integrations, our team ensures your online store is optimized for performance, conversions, and user experience.";

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
      className: "col-span-2 cursor-pointer",
      title: "Scalable Solutions",

      thumbnail: "/images/Scalable_solution.png",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-2 cursor-pointer",
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
      <WeDeliver />

      <section className="w-full pb-12 sm:pb-14 lg:pb-20 lg:pt-12 overflow-hidden">
        <div className="container remove-bg">
          <div className="flex justify-between gap-5">
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] lg:leading-[50px] text-gradiant-custom font-bold">
                Drive Success with AI Ecommerce Solutions
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-4 mb-7">
                Boost your eCommerce store with our tailored app development
                solutions. Connect with our experts to build a robust platform
                that drives engagement and sales.
              </p>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Hire Web Application Developers{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
            <div className="w-full lg:w-1/2 ">
              <WebSlider engagementModels={engagementModelsEcomerce} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[url(/images/cta_bg.png)] bg-cover bg-no-repeat bg-center py-16 ">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center" data-aos="fade-right">
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-16">
              Boost your business with AI & ML eCommerce.
            </h2>
          </div>
          <div className="w-full">
            <EcommerceShineCards />
          </div>
          <div className="flex justify-center mt-10 lg:mt-14">
            <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
              Schedule a Call{" "}
              <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
            </button>
          </div>
        </div>
      </section>

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <section className="w-full  py-10 sm:py-14 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center" data-aos="fade-right">
            <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
              Zygobit: Ecommerce App Experts
            </h2>
            <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
              Don&apos;t just choose an ecommerce app developer. Choose a
              collaborator. Let Zygobit co-create your e-commerce app
              masterpiece.
            </p>
          </div>
          <div data-aos="fade-up">
            <FeaturedSlider />
          </div>
        </div>
      </section>

      <OurPartners />

      <Blog />

      <TechnologyStack />

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <FaqSection faqData={faqEcommerceData} />

      <ContactForm />

      {/* <ApplicationAgeny data={applicationAgencyData} />

      <DeliveringTailored
        deliveringHeading={deliveringHeading}
        deliveringPara={deliveringPara}
      />

      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      <section className="w-full lg:mt-10 inline-block">
        <div className="w-full px-4 lg:px-0 sm:text-center mb-8 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl ">
            E-Commerce App Development Success
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl sm:font-medium mt-2">
            Ideal for small to large businesses that need an ecommerce app
            development solution to sell online!
          </p>
        </div>
        <div className="w-full px-4 lg:px-[167px]">
          <ThreeDCards />
        </div>
      </section>

      <section className="w-full pt-12 sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            How Zygobit Drives E-Commerce Success
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
            Zygobit delivers expert app development, integrating innovative
            features to enhance user experience, boost sales, and ensure
            seamless performance for your e-commerce business.
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid cards={cards} />
        </div>
      </section> */}
    </>
  );
};

export default Ecommerce;
