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

export const metadata: Metadata = {
  title: "UI UX Design",
  description: "Zygibit Website Uiux Web Design Page",
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
      className: "md:col-span-2 cursor-pointer",
      title: "Proven Expertise",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1 cursor-pointer",
      title: "Scalable Solutions",

      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1 cursor-pointer",
      title: "User-Centric Design",

      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2 cursor-pointer",
      title: "Seamless Interactions",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const firstRow = uiuxSliderData.slice(0, uiuxSliderData.length / 2);

  return (
    <>
      <AOSInitializer />
      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <WeDeliver />
      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pb-14 lg:pb-24">
        <BoostBussiness heading={heading} paragraph={paragraph} />

        <div className="w-full max-w-6xl mx-auto">
          <BackgroundGradientCard />
        </div>
      </section>
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />
      <section
        data-aos="fade-up"
        className="w-full pt-10 sm:pt-16 bg-black relative"
      >
        <div className="w-full">
          <UiuxTimeline />
        </div>
        <div className="w-full flex justify-center sm:mt-12 lg:mt-16 pb-10">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Hire a UI Designer{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />
      <section className="w-full px-4 lg:px-11 pb-10 sm:pb-0 pt-0 lg:py-14 overflow-hidden">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
            Featured UI UX Design Case Studies
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Our Success Stories
          </p>
        </div>
        <div data-aos="fade-up">
          <FeaturedSlider />
        </div>
      </section>

      <section className="w-full pt-5   sm:pt-10 lg:pt-16">
        <div
          className="w-full px-4 sm:px-0  sm:text-center"
          data-aos="fade-right"
        >
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Industries We Serve: Unmatched Experiences
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Transforming Ideas into Exceptional User Experiences Across Various
            Sectors
          </p>
        </div>
        <div className="w-full relative  mt-8 sm:mt-12 mb-12 sm:mb-24 lg:mb-32">
          <div className="pointer-events-none absolute z-[1] -top-8 sm:-top-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
          <UiuxSlider firstRow={firstRow} />
          <div className="pointer-events-none absolute -bottom-8 sm:-bottom-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
        </div>
      </section>

      <section className="w-full bg-black overflow-y-auto sm:h-[760px] no-scroll py-12 sm:py-16">
        <div
          className="w-full px-4 sm:px-0 sm:text-center"
          data-aos="fade-right"
        >
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
            Unlock Efficiency with Expert UI/UX Design
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-5xl sm:mx-auto">
            Our UI/UX design services are tailored to meet the unique needs of
            your web user interface design project. Here’s a quick overview of
            what we offer:
          </p>
        </div>
        <div className="w-full px-4 lg:px-20 mt-7 sm:mt-14 lg:mt-20">
          <ParticlesCards />
        </div>
      </section>

      {/* <section className="w-full pt-12 lg:pt-16 pb-16 sm:pb-20">
        <div className="w-full px-4 sm:px-0  sm:text-center" data-aos="fade-up">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
            Meet Our Team!
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-5xl sm:mx-auto">
            We are #1 UI UX Design Company with a Team of Highly Experienced
            Designers
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <UiuxTeams />
        </div>
      </section> */}

      <TechnologyStack />

      <section className="w-full sm:pt-10 pb-20 lg:pb-40 bg-black">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Why Zygobit for UI/UX Design?
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
            Empowering businesses with intuitive, aesthetically pleasing, and
            user-friendly experiences. Our expert UI/UX designers leverage
            cutting-edge tools to craft seamless digital journeys that captivate
            and convert.
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid cards={cards} />
        </div>
      </section>

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <Blog />

      <FaqSection faqData={faqUiUx} />

      <ContactForm />
    </>
  );
};

export default UiuxWebDesign;
