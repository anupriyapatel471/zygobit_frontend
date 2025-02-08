"use client";

import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import Blog from "@/component/common/Blog/Blog";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import FaqSection from "@/component/sevices/Common/FaqSection/FaqSection";
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import TechnologyStack from "@/component/common/TechnologyStack/TechnologyStack";
import { ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import Aos from "aos";


import { WebSlider } from "@/component/ui/WebSlider/WebSlider";
import ScrollTriggered from "@/component/WebAppDevelopment/WebScrollTriggered/WebScrollTriggered";
import Cta from "@/component/common/Cta/Cta";
import { CardSpotlights } from "@/component/WebAppDevelopment/RobustWebCards/RobustWebCards";
import WebDevProcess from "@/component/sevices/Common/WebDevProcess/WebDevProcess";
import ClientSays from "@/component/common/ClientSays/ClientSays";
import Image from "next/image";
import HeroParalax from "@/component/common/HeroParallax/HeroParallax";
import { CustomWebCards } from "@/component/WebAppDevelopment/CustomWebCards/CustomWebCards";
import { BoxReveals } from "@/component/common/WebSales/WebSales";

const WebAppDevelopment = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      Hero banner
      <HeroBanner />

      {/* about us We deliver*/}
      <WeDeliver />

      <section className="w-full pt-10 sm:pt-16 pb-12 lg:pb-40 bg-gradient-to-b via-black from-orange-600 to-black">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            Our Best Web Application Development Services
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl sm:font-medium max-w-7xl mx-auto mt-2">
            We take a personalized approach to progressive web app development
            that perfectly aligns with your business objectives. From concept to
            deployment, we ensure your digital solution is as unique as your
            vision
          </p>
        </div>
        <div className="w-full px-4 lg:px-24 mt-8 sm:mt-14">
          <div className="w-full  relative bg-white/5 border h-[30rem] no-scroll overflow-y-auto rounded-xl border-white">
            <ScrollTriggered />
          </div>
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />
      {/* web application */}
     
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      {/* web app sales */}
      <section className="w-full relative px-4 lg:px-24 py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            {/* <img
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src="/images/sales.png"
              alt=""
            /> */}
            <Image
              className="w-full object-cover rounded-xl"
              src="/images/sales.png"
              alt="Sales"
              // layout="responsive"
              width={590}
              height={753}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <BoxReveals />
          </div>
        </div>
      </section>

      {/* web application  ageny*/}
      <section className="w-full relative pb-10 sm:py-12 lg:py-16 overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Why Partner with Our Web Application Agency?
          </h2>
          <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Partnering with our custom web application development company in
            USA unlocks greater profitability, fosters continuous innovation,
            and accelerates your business growth globally.
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
              {/* <img
                className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl"
                src="/images/process.png"
                alt=""
              /> */}
              <Image
                className="w-full object-cover rounded-2xl"
                src="/images/process.png"
                alt="Process"
                // layout="responsive"
                width={471}
                height={528}
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div data-aos="fade-right" className="w-full lg:w-2/5">
              {/* <img
                className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl"
                src="/images/process.png"
                alt=""
              /> */}
              <Image
                className="w-full object-cover rounded-2xl"
                src="/images/process.png"
                alt="Process"
                width={471}
                height={528}
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
              {/* <img
                className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl"
                src="/images/process.png"
                alt=""
              /> */}
              <Image
                className="w-full object-cover rounded-2xl"
                src="/images/process.png"
                alt="Process"
                // layout="responsive"
                width={471}
                height={528}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* robust web dev */}
      <section className="w-full py-10 sm:py-16 z-10 bg-black relative overflow-hidden">
        <div className="absolute -bottom-[168%] -right-[98%] -z-10">
          {/* <img className="w-full h-full" src="/images/bg_circle.jfif" alt="" /> */}
          <Image
            className="object-cover"
            src="/images/bg_circle.jfif"
            alt="Background Circle"
            width={40}
            height={40}
            // layout="fill"
          />
        </div>
        <div className="w-full px-4 sm:px-0 text-sm sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Proven Strategies for Robust Web Solutions
          </h2>
          <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Here are the key strategies we follow for building robust web
            solutions. Whether you’re looking for custom web application
            developers or an enterprise web application development company,
            we&apos;ve got you covered.
          </p>
        </div>
        <div className="w-full mx-auto max-w-5xl my-10 sm:my-12">
          <CardSpotlights />
        </div>
        <div className="w-full flex justify-center mt-14">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Develop a Custom Web App Today{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* custom web development */}
      <section className="w-full pb-10 sm:py-12 lg:py-16">
        <div className="w-full px-4 sm:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Zygobit Experts in Custom Web App Development
          </h2>
          <p className="sm:font-medium max-w-7xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Developers at our web application design services firm provide web
            based application development services to maximize ROI and boost
            profitability for your business by implementing strategic solutions
            and innovative approaches.
          </p>
        </div>
        <div className="w-full px-4 lg:px-32">
          <CustomWebCards />
        </div>
      </section>

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

      {/* web app sales */}
      <section className="w-full relative px-4 lg:px-24 pb-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            {/* <img
              className="w-full h-[350px] sm:h-[500px] lg:h-full rounded-xl"
              src="/images/web_custom.png"
              alt=""
            /> */}
            <Image
              className="w-full object-cover rounded-xl"
              src="/images/web_custom.png"
              alt="web_custom"
              // layout="responsive"
              width={590}
              height={753}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <BoxReveals />
          </div>
        </div>
      </section>

      {/* technology stack */}
      <TechnologyStack />

      {/* why choose us  */}
      <section
        data-aos="fade-up"
        className="w-full pt-10 sm:pt-16 bg-black relative"
      >
        <div className="w-full">
          <WebDevProcess />
        </div>
      </section>

      {/* client says */}
      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />
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

export default WebAppDevelopment;
