"use client";

import AboutUs from "@/component/ui/AboutUs/AboutUs";
import Blog from "@/component/ui/Blog/Blog";
import ContactForm from "@/component/ui/ContactForm/ContactForm";
import Cta from "@/component/ui/Cta/Cta";
import FaqSection from "@/component/ui/FaqSection/FaqSection";
import FeaturedSlider from "@/component/ui/Featuredslider/Featuredslider";
import HeroBanner from "@/component/ui/HeroBanner/HeroBanner";
import { Testimonials } from "@/component/ui/Testimonials/Testimonials";
import WebDevProcess from "@/component/ui/WebDevProcess/WebDevProcess";
import React, { useEffect } from "react";
import Aos from "aos";
import { ShineBorderCards } from "@/component/ui/ShineBorderCards/ShineBorderCards";
import { ChevronRight } from "lucide-react";
import { AwareHoverCards } from "@/component/ui/AwareHoverCards/AwareHoverCards";
import { MobileAppGrid } from "@/component/ui/MobileAppGrid/MobileAppGrid";
import TechnologyStack from "@/component/ui/TechnologyStack/TechnologyStack";
import { WebSlider } from "@/component/ui/WebSlider/WebSlider";

const page = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <AboutUs />

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
      <section className="w-full px-4 sm:px-5 lg:px-14 mt-12 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <div data-aos="fade-left" className="w-full sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            We Are a Trusted Web App Development Company
          </h2>
          <p className="font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-3">
            Hear from our satisfied clients who have transformed their ideas
            into successful businesses with Apptunix's expert web development
            services and solutions
          </p>
        </div>
        <div className="w-full sm:px-4 lg:px-12">
          <Testimonials />
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section className="w-full pb-12 overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Select from Our Flexible Custom Web App Models
          </h2>
          <p className="sm:font-medium max-w-7xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Being a top custom web application development services provider, we
            offer multiple hiring models that best suit your needs
          </p>
        </div>
        <div className="w-full mt-7 sm:mt-12 lg:mt-16">
          <WebSlider />
        </div>
        <div className="w-full px-4 lg:px-32 mt-10 sm:mt-0 lg:mt-10 flex  justify-center sm:justify-normal">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Hire Web Application Developers{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* technology stack */}
      <TechnologyStack />

      {/* slider */}
      <section className="w-full sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
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

      {/* featured blog */}
      <Blog />

      {/* Faq */}
      <FaqSection />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default page;
