"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Critical components that should be loaded immediately (above the fold)
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import TrustedAcross from "@/component/common/TrustedAcross/TrustedAcross";

// Dynamically load non-critical or heavier components
const ContactForm = dynamic(() => import("@/component/common/ContactForm/ContactForm"));
const UiuxSlider = dynamic(() => import("@/component/common/uiuxSlider/uiuxSlider"));
const BoxReveals = dynamic(() =>
  import("@/component/common/WebSales/WebSales").then((mod) => mod.BoxReveals)
);
const ClientSays = dynamic(() => import("@/component/common/ClientSays/ClientSays"));
const Slider = dynamic(() => import("@/component/common/Slider/Slider"));


const About = () => {

  useEffect(() => {
    Aos.init({});
  }, []);

  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const sliderHeading = "Why Choose Zygobit?";
  const sliderDetail =
    "Choose Zygobit for innovative, reliable, and high-quality solutions that drive your business forward with cutting-edge technology and expert support!";

  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <WeDeliver />

      <TrustedAcross />
      {/* web app sales */}
      <section className="w-full relative px-4 lg:px-24 py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <BoxReveals />
          </div>
          <div className="w-full lg:w-1/2">
            {/* <img
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src="/images/together.png"
              alt=""
            /> */}
            <Image
              className="w-full object-cover rounded-xl"
              src="/images/together.png"
              alt="Together"
              // layout="responsive"
              width={590} // Define the aspect ratio width
              height={753} // Define the aspect ratio height
            />
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider sliderDetail={sliderDetail} sliderHeading={sliderHeading} />

      {/* web app sales */}
      <section className="w-full relative px-4 lg:px-24 py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            {/* <img
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src="/images/meeting.png"
              alt=""
            /> */}
            <Image
              className="w-full object-cover rounded-xl"
              src="/images/meeting.png"
              alt="meating"
              // layout="responsive"
              width={590} // Define the aspect ratio width
              height={753} // Define the aspect ratio height
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

      <section className="w-full">
        <div
          className="w-full px-4 sm:px-0  sm:text-center"
          data-aos="fade-right"
        >
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Our Values
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Choose Zygobit for innovative, reliable, and high-quality solutions
            that drive your business forward with cutting-edge technology and
            expert support!
          </p>
        </div>
        <div className="w-full"></div>
      </section>

      {/* client says */}
      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default About;
