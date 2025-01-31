"use client";

import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import AppleCardsCarousel from "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel";
import Cta from "@/component/common/Cta/Cta";
import { ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThreeDCards } from "@/component/sevices/MobileAppDevelopment/ThreedCards/ThreedCards";
import MobileAppSlider from "@/component/sevices/MobileAppDevelopment/MobileAppSlider/MobileAppSlider";
import HeroParalax from "@/component/common/HeroParallax/HeroParallax";
import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";
import { Testimonials } from "@/component/common/Testimonials/Testimonials";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import TechnologyStack from "@/component/common/TechnologyStack/TechnologyStack";
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import Blog from "@/component/common/Blog/Blog";
import FaqSection from "@/component/sevices/Common/FaqSection/FaqSection";
import { MobileAppGrid } from "@/component/common/MobileAppGrid/MobileAppGrid";
import SharedLayoutAnimation from "@/component/sevices/MobileAppDevelopment/MobileDevTab/MobileDevTab";

const MobileAppDevelopment = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <WeDeliver />

      {/* boost bussiness  */}
      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pb-14 lg:pb-24">
        <div className="w-full px-4 lg:px-24 mt-10 lg:mt-16 mb-8 sm:mb-12 lg:mb-20 sm:text-center inline-block">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
            Boost Business Growth with Custom App Solutions
          </h2>
          <p className=" sm:font-medium text-sm sm:text-lg lg:text-xl mt-2 px-0 lg:px-20">
            Our team is passionate about experimenting with next-gen tech that
            flawlessly aligns with your brand, vision and target audience. As a
            custom mobile application development services provider we use a
            design sprint-centric methodology to identify opportunities to drive
            growth outside your core business.
          </p>
        </div>
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

      {/* Cta section */}
      <Cta Aurora={"Aurora"} />

      {/* advance tech */}
      <section className="w-full lg:mt-10 inline-block">
        <div className="w-full px-4 lg:px-0 sm:text-center mb-8 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl ">
            Next-Gen Mobile Apps Powered by Advanced Tech
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl sm:font-medium mt-2">
            Empowering your business with custom mobile applicaiton development
            and cutting-edge technology solutions.
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

      {/* Cta section */}
      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      {/* slider */}
      <section className="w-full lg:pb-10">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-9">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Innovative Custom Apps for a Digital-First Future
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl lg:max-w-6xl mx-auto mt-2">
            Our mobile app development experts create robust, scalable, and
            user-centric solutions that accelerate business growth, keeping you
            at the forefront of the rapidly evolving digital landscape.
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

      {/* Cta section */}
      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      <section className="w-full">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-5 sm:mb-9">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            Elite Custom App Development for Your Business
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl lg:max-w-6xl mx-auto mt-2">
            We deliver end-to-end custom mobile app development services
            provider to help businesses thrive in the digital era. Our process
            is designed to create innovative, user-centric applications tailored
            to your needs.
          </p>
        </div>
        <div className="w-full px-4 lg:px-0">
          <SharedLayoutAnimation />
        </div>
      </section>

      {/* Cta section */}
      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      {/* Revolutionizing business */}
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      {/* Cta section */}
      <Cta Aurora={"Aurora"} vortex={""} content={""} />

      {/* slider */}

      <section className="w-full sm:pt-10 pb-32 lg:pb-40 bg-black">
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
          <MobileAppGrid />
        </div>
      </section>

      {/* Featured Projects */}
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

      {/* Technology stack */}
      <TechnologyStack />

      {/* client says */}
      <section className="w-full px-4 sm:px-5 lg:px-14 mt-4 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <div data-aos="fade-left" className="w-full sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            Hear It from Our Happy Clients!
          </h2>
          <p className="font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-3">
            See how our custom app development services have
            transformed businesses and driven success for our happy clients
          </p>
        </div>
        <div className="w-full sm:px-4 lg:px-12">
          <Testimonials />
        </div>
      </section>

      {/* Featured Blogs section */}
      <Blog />

      {/* Faq */}
      <FaqSection />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default MobileAppDevelopment;
