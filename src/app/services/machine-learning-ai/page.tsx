"use client";

import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import Blog from "@/component/common/Blog/Blog";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import Cta from "@/component/common/Cta/Cta";
import FaqSection from "@/component/sevices/Common/FaqSection/FaqSection";
import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import WebDevProcess from "@/component/sevices/Common/WebDevProcess/WebDevProcess";
import React, { useEffect } from "react";
import Aos from "aos";
import { ShineBorderCards } from "@/component/sevices/MachineLearning/ShineBorderCards/ShineBorderCards";
import { ChevronRight } from "lucide-react";
import { AwareHoverCards } from "@/component/sevices/MachineLearning/AwareHoverCards/AwareHoverCards";
import TechnologyStack from "@/component/common/TechnologyStack/TechnologyStack";
import ClientSays from "@/component/common/ClientSays/ClientSays";
import Slider from "@/component/common/Slider/Slider";

const MachineLearning = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const sliderHeading = "Why Zygobit for UI/UX Design?";
  const sliderDetail =
    " Here’s a selection of state-of-the-art design tools that empower our UI UX design company. With these resources at their fingertips, we deliver exceptional user experiences that resonate with audiences.";

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <WeDeliver />

      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pb-14 lg:pb-24">
        <div className="w-full px-4 lg:px-0 mt-10 lg:mt-16 mb-8 sm:mb-12 lg:mb-20 sm:text-center inline-block">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
            Full-Scale Machine Learning & AI Services.
          </h2>
          <p className=" sm:font-medium text-sm sm:text-lg lg:text-xl mt-2 sm:mt-3 lg:mt-5 px-0 lg:px-20">
            Zygobit is an innovative software development company that creates
            advanced solutions using cutting-edge technology, empowering you to
            stay ahead in your industry. are not only intuitive but also provide
            users with a seamless user experience.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <ShineBorderCards />
        </div>
        <div className="w-full flex justify-center mt-12">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Get Started!{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
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
          <WebDevProcess />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full px-4 lg:px-11 pb-10 sm:pb-0 pt-10  lg:py-14 overflow-hidden">
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

      <section className="w-full pt-5 sm:pt-16">
        <div
          className="w-full  sm:text-center px-4 lg:px-0"
          data-aos="fade-right"
        >
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
            Leverage AI & Machine Learning to Stay Ahead.
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Our experienced developers offer all-inclusive exchange development
            services with AI and Machine Learning features, enabling secure and
            instant transactions.
          </p>
        </div>
        <div className="w-full max-w-5xl px-4 lg:px-0 mx-auto mt-8 sm:mt-12 lg:mt-16">
          <AwareHoverCards />
        </div>
      </section>

      {/* client says */}
      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* technology stack */}
      <TechnologyStack />

      {/* slider */}
      <Slider sliderDetail={sliderDetail} sliderHeading={sliderHeading} />
    
      {/* featured blog */}
      <Blog />

      {/* Faq */}
      <FaqSection />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default MachineLearning;
