"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ourExpertiseData } from "../component/homePage/OurExpertise";

// Dynamically import non-critical or heavy components
const HomeBanner = dynamic(() => import("@/component/homePage/HomeBanner"));
const FeaturedProjects = dynamic(() => import("@/component/homePage/FeaturedProjects"));
const BusinessCards = dynamic(() => import("@/component/homePage/Businesscards/Businesscards"));
const BackgroundBeamNew = dynamic(() => import("@/component/homePage/Bgbeam/Bgbeam"));
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const PartnerSlider = dynamic(() => import("@/component/common/Partnerslider/Partnerslider"));
const WhychooseUs = dynamic(() => import("@/component/homePage/Whychooseus/Whychooseus"));
const HeroParalax = dynamic(() => import("@/component/common/HeroParallax/HeroParallax"));
const TechnologyStack = dynamic(() => import("@/component/common/TechnologyStack/TechnologyStack"));
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(() => import("@/component/common/ContactForm/ContactForm"));
const ClientSays = dynamic(() => import("@/component/common/ClientSays/ClientSays"));
import { SparklesHeading } from "@/component/homePage/Sparkleheading/Sparkleheading";
import { HeroHighlightDemo } from "@/component/common/Partnersbg/Partnersbg";

const Home = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const clientHeading = "Lets’s Hear What Our Clients Say";
  const clientSaysDetails =
    "Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";

  return (
    <>
      {/* banner */}
      <HomeBanner />

      {/* Featured Projects */}
      <FeaturedProjects />
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 px-0 overflow-hidden">
        <div className="w-full h-full">
          <BackgroundBeamNew />
        </div>
        <div className="w-full absolute top-3 sm:top-6 left-1/2 -translate-x-1/2 ">
          <div className="w-full px-4 sm:px-0 sm:text-center mb-6 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-[45px] 2xl:text-5xl font-bold">
              Revolutionizing Businesses with Excellence & Expertise
            </h2>
          </div>
          <div className="w-full px-4 lg:px-24">
            <BusinessCards />
          </div>
        </div>
      </section>
      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* Our Expertise */}
      <section
        data-aos="fade-up"
        className="w-full px-4 lg:px-44 mb-20 overflow-hidden"
      >
        <div className="w-full text-center mb-0">
          <SparklesHeading />
        </div>
        <div className="w-full mt-5 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {ourExpertiseData?.map((data, index) => (
            <div
              key={index}
              className="border border-[#EA580C] p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto group"
            >
              <span>{data?.image}</span>
              <h5 className="pl-4 group-hover:text-themetext font-semibold text-lg my-2">
                {data?.heading}
              </h5>
              <p className="pl-4 text-sm sm:text-base text-muted-foreground">
                {data?.paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology stack */}
      <TechnologyStack />

      {/* Revolutionizing business */}
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      {/* client says */}
      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      {/* our partners */}
      <section
        data-aos="fade-up"
        className="w-full relative inline-block pt-48 pb-16 sm:py-24 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <HeroHighlightDemo />
        </div>

        <div className="w-full mt-0 sm:mt-16 lg:mt-[172px] relative z-20">
          <PartnerSlider />
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Marquee"} />

      {/* why choose us  */}
      <section data-aos="fade-up" className="w-full">
        <div className="w-full">
          <WhychooseUs />
        </div>
      </section>

      {/* Featured Blogs section */}
      <Blog />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default Home;
