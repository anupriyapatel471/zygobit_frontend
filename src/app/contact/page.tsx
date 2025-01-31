"use client";

import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import React, { useEffect } from "react";
import Aos from "aos";
import { Testimonials } from "@/component/common/Testimonials/Testimonials";
import { HeroHighlightDemo } from "@/component/common/Partnersbg/Partnersbg";
import PartnerSlider from "@/component/common/Partnerslider/Partnerslider";
import { ContactParticles } from "@/component/contact/contactParticles/contactParticles";

const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className="w-full mt-24">
        {/* contact form */}
        <ContactParticles />
      </div>

      {/* about us */}
      <WeDeliver />

      {/* client says */}
      <section className="w-full px-4 sm:px-5 lg:px-14 mt-12 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <div data-aos="fade-left" className="w-full sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            Lets’s Hear What Our Clients Say
          </h2>
          <p className="font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-3">
            Using the latest technology and industry expertise, we built top-end
            Android and iOS-based applications that add value to the business
            and user experience.
          </p>
        </div>
        <div className="w-full sm:px-4 lg:px-12">
          <Testimonials />
        </div>
      </section>

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
    </>
  );
};

export default Contact;
