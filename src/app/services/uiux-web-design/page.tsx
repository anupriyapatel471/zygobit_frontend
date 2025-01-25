"use client";

import Blog from "@/component/ui/Blog/Blog";
import ContactForm from "@/component/ui/ContactForm/ContactForm";
import FaqSection from "@/component/ui/FaqSection/FaqSection";
import React, { useEffect } from "react";
import Aos from "aos";
import HeroBanner from "@/component/ui/HeroBanner/HeroBanner";
import AboutUs from "@/component/ui/AboutUs/AboutUs";
import { MobileAppGrid } from "@/component/ui/MobileAppGrid/MobileAppGrid";
import TechnologyStack from "@/component/ui/TechnologyStack/TechnologyStack";
import Cta from "@/component/ui/Cta/Cta";
import FeaturedSlider from "@/component/ui/Featuredslider/Featuredslider";
import { ChevronRight } from "lucide-react";
import { BackgroundGradientCard } from "@/component/ui/BgGradientCard/BgGradientCard";
import WebDevProcess from "@/component/ui/WebDevProcess/WebDevProcess";
import UiuxSlider from "@/component/ui/uiuxSlider/uiuxSlider";
import UiuxTimeline from "@/component/ui/uiuxTimeline/uiuxTimeline";
import { ParticlesCards } from "@/component/ui/ParticlesCards/ParticlesCards";
import { UiuxTeams } from "@/component/ui/uiuxTeam/uiuxTeam";

const uiuxWebDesign = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <AboutUs />

      {/* boost bussiness  */}
      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pb-14 lg:pb-24">
        <div className="w-full px-4 lg:px-24 mt-10 lg:mt-16 mb-8 sm:mb-12 lg:mb-20 sm:text-center inline-block">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
            Enhance experiences with user-centric UI/UX services
          </h2>
          <p className=" sm:font-medium text-sm sm:text-lg lg:text-xl mt-2 px-0 lg:px-20">
            Leverage our UI and UX services dedicated to making your brand's
            vision a reality. We ensure your project designs are not only
            intuitive but also provide users with a seamless user experience.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <BackgroundGradientCard />
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* why choose us  */}
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

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* Featured Projects */}
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

      {/* Industries We Serve: Unmatched Experiences */}
      <section className="w-full pt-5   sm:pt-10 lg:pt-16">
        <div className="w-full px-4 sm:px-0  sm:text-center" data-aos="fade-right">
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
          <UiuxSlider />
          <div className="pointer-events-none absolute -bottom-8 sm:-bottom-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
        </div>
      </section>

      {/* Unlock Efficiency with Expert UI/UX Design */}
      <section className="w-full bg-black overflow-y-auto sm:h-[760px] no-scroll py-12 sm:py-16">
        <div className="w-full px-4 sm:px-0 sm:text-center" data-aos="fade-right">
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

      {/* Meet Our Team! */}
      <section className="w-full pt-12 lg:pt-16 pb-16 sm:pb-20">
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
      </section>

      {/* technology stack */}
      <TechnologyStack />

      {/* slider */}
      <section className="w-full sm:pt-10 pb-20 lg:pb-40 bg-black">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Why Zygobit for UI/UX Design?
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
            Here’s a selection of state-of-the-art design tools that empower our
            UI UX design company. With these resources at their fingertips, we
            deliver exceptional user experiences that resonate with audiences.
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid />
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* featured blog */}
      <Blog />

      {/* Faq */}
      <FaqSection />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default uiuxWebDesign;
