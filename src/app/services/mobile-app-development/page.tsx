import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import BoostBussiness from "@/component/sevices/Common/BoostBussiness/BoostBussiness";
import ClientSays from "@/component/common/ClientSays/ClientSays";
import AOSInitializer from "@/component/common/AOSInitializer";
import faqMobileApp from "../../../utils/content/faq/faqMobileApp.json";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const AppleCardsCarousel = dynamic(
  () =>
    import(
      "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel"
    )
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const ThreeDCards = dynamic(() =>
  import(
    "@/component/sevices/MobileAppDevelopment/ThreedCards/ThreedCards"
  ).then((mod) => mod.ThreeDCards)
);
const MobileAppSlider = dynamic(
  () =>
    import(
      "@/component/sevices/MobileAppDevelopment/MobileAppSlider/MobileAppSlider"
    )
);
const HeroParalax = dynamic(
  () => import("@/component/common/HeroParallax/HeroParallax")
);
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const MobileAppGrid = dynamic(() =>
  import("@/component/common/MobileAppGrid/MobileAppGrid").then(
    (mod) => mod.MobileAppGrid
  )
);
const SharedLayoutAnimation = dynamic(
  () =>
    import("@/component/sevices/MobileAppDevelopment/MobileDevTab/MobileDevTab")
);
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description: "Zygibit Website Mobile App Development Page",
};
const MobileAppDevelopment = () => {
  const heading = "Accelerate Your Business with Tailored Mobile App Solutions";
  const paragraph =
    "we specialize in crafting custom mobile applications that empower businesses to thrive in today’s digital-first world. Our innovative solutions are designed to align with your unique goals, helping you unlock new opportunities, engage your audience, and drive sustainable growth.";
  const clientHeading = "Hear It from Our Happy Clients!";
  const clientSaysDetails =
    "See how our custom app development services have transformed businesses and driven success for our happy clients";

  const heroHeading = "";
  const heroParagraph = "";

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

  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <WeDeliver />
      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pb-14 lg:pb-24">
        <BoostBussiness heading={heading} paragraph={paragraph} />

        <div className="w-full">
          <AppleCardsCarousel />
        </div>
        <div className="w-full flex justify-center mt-8 sm:mt-12 lg:mt-16">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Get Assistance{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      <section className="w-full lg:mt-10 inline-block">
        <div className="w-full px-4 lg:px-0 sm:text-center mb-8 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl ">
            Revolutionizing Mobile Apps with Cutting-Edge Technology
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl sm:font-medium mt-2">
            Transforming businesses through innovative mobile solutions powered
            by AI, machine learning, and automation.
          </p>
        </div>
        <div className="w-full px-4 lg:px-[167px]">
          <ThreeDCards />
        </div>
        <div className="w-full flex justify-center mt-5 sm:mt-12">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Build Your App Today!{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      <section className="w-full lg:pb-10">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-9">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            End-to-End Mobile App Development
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl lg:max-w-6xl mx-auto mt-2">
            We create dynamic, feature-rich mobile applications using the latest
            technologies, ensuring seamless performance across all devices.
            Whether you need native development for optimal performance or
            cross-platform solutions for cost efficiency, we deliver robust
            applications tailored to your needs.
          </p>
        </div>
        <div className="w-full">
          <MobileAppSlider />
        </div>
        <div className="w-full flex justify-center mt-16 sm:mt-24 lg:mt-40">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Discuss Your Business Requirements{" "}
            <ChevronRight className="group-hover:left-2 w-5 sm:w-auto left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      <section className="w-full">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-5 sm:mb-9">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Transforming Ideas into Scalable, High-Performance Applications
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl lg:max-w-6xl mx-auto mt-2">
            We offer end-to-end custom mobile app development services to help
            businesses innovate and succeed in the digital era. Our structured
            process ensures the creation of user-centric, high-quality
            applications tailored to your unique needs.
          </p>
        </div>
        <div className="w-full px-4 lg:px-0">
          <SharedLayoutAnimation />
        </div>
      </section>

      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      <section className="w-full pt-10 sm:pt-10 pb-14 sm:pb-32 lg:pb-40 bg-black">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Why Zygobit for Mobile Apps ?
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-4xl mx-auto mt-2">
            Partner with Zygobit for innovative, secure, and scalable mobile app
            development solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid cards={cards} />
        </div>
      </section>

      <section className="w-full px-4 lg:px-11 py-10 sm:py-14 overflow-hidden">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Our Projects
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-4xl sm:mx-auto">
            Partner with Zygobit for innovative, secure, and scalable mobile app
            development solutions tailored to your unique business needs.
          </p>
        </div>
        <div data-aos="fade-up">
          <FeaturedSlider />
        </div>
      </section>

      <TechnologyStack />

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <Blog />

      <FaqSection faqData={faqMobileApp} />

      <ContactForm />
    </>
  );
};

export default MobileAppDevelopment;
