"use client";

import React, { useEffect } from "react";
import Aos from "aos";

import { ChevronRight } from "lucide-react";
import { EcommerceShineCards } from "@/component/ui/EcommerceShineCards/EcomoerceShineCards";
import { WebSlider } from "@/component/ui/WebSlider/WebSlider";
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import Cta from "@/component/common/Cta/Cta";
import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";
import UiuxSlider from "@/component/common/uiuxSlider/uiuxSlider";
import { ThreeDCards } from "@/component/sevices/MobileAppDevelopment/ThreedCards/ThreedCards";
import { Testimonials } from "@/component/common/Testimonials/Testimonials";
import { HeroHighlightDemo } from "@/component/common/Partnersbg/Partnersbg";
import PartnerSlider from "@/component/common/Partnerslider/Partnerslider";
import Blog from "@/component/common/Blog/Blog";
import FaqSection from "@/component/sevices/Common/FaqSection/FaqSection";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import { MobileAppGrid } from "@/component/common/MobileAppGrid/MobileAppGrid";
import TechnologyStack from "@/component/common/TechnologyStack/TechnologyStack";

const Ecommerce = () => {

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <WeDeliver/>

      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pt-16 pb-[8rem] overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-bold">
            Drive Success with AI Ecommerce Solutions
          </h2>
          <p className="sm:font-medium max-w-7xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Boost your eCommerce store with our tailored app development
            solutions. Connect with our experts to build a robust platform that
            drives engagement and sales.
          </p>
        </div>
        <div className="w-full mt-7 sm:mt-12 lg:mt-16">
          <WebSlider />
        </div>
      </section>

      <section className="w-full bg-[url(/images/stars_bg.png)] bg-cover bg-no-repeat bg-center py-16 px-4 sm:px-0 ">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-16">
            Boost your business with AI & ML eCommerce.
          </h2>
        </div>
        <div className="w-full px-0 sm:px-4  max-w-6xl mx-auto">
          <EcommerceShineCards />
        </div>
        <div className="flex justify-center mt-10 lg:mt-14">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Schedule a Call{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      {/* Cta section */}
      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      {/* Featured Projects */}
      <section className="w-full px-4 lg:px-11 py-10 sm:py-14 overflow-hidden">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Zygobit: Ecommerce App Experts
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Don&apos;t just choose an ecommerce app developer. Choose a collaborator.
            Let Zygobit co-create your e-commerce app masterpiece.
          </p>
        </div>
        <div data-aos="fade-up">
          <FeaturedSlider />
        </div>
      </section>

      {/* web application  ageny*/}
      <section className="w-full relative pb-10 sm:py-12 lg:py-16 overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Build Your AR/VR eCommerce Store
          </h2>
          <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            We integrate AR/VR into eCommerce apps to deliver immersive,
            realistic shopping experiences and enhance your business&apos;s user
            engagement.
          </p>
        </div>
        <div className="w-full  grid grid-cols-1 gap-10 sm:gap-14 lg:gap-10 px-4 lg:px-24 mt-10 sm:mt-12 lg:mt-24">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div
              data-aos="fade-right"
              className="w-full order-2 lg:order-none lg:w-3/5"
            >
              <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                Streamline Business Process
              </h3>
              <p className="text-sm sm:text-xl lg:text-2xl mt-2 sm:mt-3 lg:mt-10">
                Our custom web application development firm streamlines your
                business processes and simplifies complex operations for
                enhanced productivity.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="w-full order-1 lg:order-none lg:w-2/5"
            >
              <img
                className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl"
                src="/images/process.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div data-aos="fade-right" className="w-full lg:w-2/5">
              <img
                className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl"
                src="/images/process.png"
                alt=""
              />
            </div>
            <div data-aos="fade-left" className="w-full lg:w-3/5">
              <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                Streamline Business Process
              </h3>
              <p className="text-sm sm:text-xl lg:text-2xl mt-2 sm:mt-3 lg:mt-10">
                Our custom web application development firm streamlines your
                business processes and simplifies complex operations for
                enhanced productivity.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div
              data-aos="fade-right"
              className="w-full order-2 lg:order-none lg:w-3/5"
            >
              <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                Streamline Business Process
              </h3>
              <p className="text-sm sm:text-xl lg:text-2xl mt-2 sm:mt-3 lg:mt-10">
                Our custom web application development firm streamlines your
                business processes and simplifies complex operations for
                enhanced productivity.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="w-full order-1 lg:order-none lg:w-2/5"
            >
              <img
                className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl"
                src="/images/process.png"
                alt=""
              />
            </div>
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

      {/* Cta section */}
      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      {/* advance tech */}
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

      {/* slider */}
      <section className="w-full sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
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
          <MobileAppGrid />
        </div>
      </section>

      {/* Technology stack */}
      <TechnologyStack />

      {/* client says */}
      <section className="w-full px-4 sm:px-5 lg:px-14 mt-10 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <div data-aos="fade-left" className="w-full sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            We Are a Trusted Web App Development Company
          </h2>
          <p className="font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-3">
            Hear from our satisfied clients who have transformed their ideas
            into successful businesses with Apptunix&apos;s expert web development
            services and solutions
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

      {/* featured blog */}
      <Blog />

      {/* Faq */}
      <FaqSection />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default Ecommerce;
