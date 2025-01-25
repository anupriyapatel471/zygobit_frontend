"use client";

import AboutUs from "@/component/ui/AboutUs/AboutUs";
import HeroBanner from "@/component/ui/HeroBanner/HeroBanner";
import React, { useEffect } from "react";
import Aos from "aos";
import { MobileAppGrid } from "@/component/ui/MobileAppGrid/MobileAppGrid";
import ContactForm from "@/component/ui/ContactForm/ContactForm";
import { Testimonials } from "@/component/ui/Testimonials/Testimonials";
import UiuxSlider from "@/component/ui/uiuxSlider/uiuxSlider";
import { BoxReveals } from "@/component/ui/WebSales/WebSales";

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

      {/* slider */}
      <section className="w-full sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Why Choose Zygobit?
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
            Choose Zygobit for innovative, reliable, and high-quality solutions
            that drive your business forward with cutting-edge technology and
            expert support!
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid />
        </div>
      </section>

      {/* web app sales */}
      <section className="w-full relative px-4 lg:px-24 py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src="/images/sales.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <BoxReveals />
          </div>
        </div>
      </section>

      {/* Delivering Tailored Excellence */}
      <section className="w-full pt-0  sm:pt-0 lg:pt-5">
        <div
          className="w-full px-4 sm:px-0  sm:text-center"
          data-aos="fade-right"
        >
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Delivering Tailored Excellence
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            At Zygobit, we turn your vision into reality with creative,
            innovative solutions that deliver quality and results.
          </p>
        </div>
        <div className="w-full relative  mt-8 sm:mt-12 mb-12 sm:mb-24 lg:mb-32">
          <div className="pointer-events-none absolute z-[1] -top-8 sm:-top-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
          <UiuxSlider />
          <div className="pointer-events-none absolute -bottom-8 sm:-bottom-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
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

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default page;
