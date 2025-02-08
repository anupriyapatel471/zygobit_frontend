"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Critical components that should be loaded immediately (above the fold)
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import { AboutBgParticles } from "@/component/ui/AboutBgParticles/AboutBgParticles";
import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import GridBoxes from "@/component/common/GridBoxes/GridBoxes";
import AboutValueCards from "@/components/ui/aboutValueCards";

// Dynamically load non-critical or heavier components
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const UiuxSlider = dynamic(
  () => import("@/component/common/uiuxSlider/uiuxSlider")
);
const BoxReveals = dynamic(() =>
  import("@/component/common/WebSales/WebSales").then((mod) => mod.BoxReveals)
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const GridBoxesHeading = "Why Choose Zygobit?";
  const GridBoxesDetail =
    "Choose Zygobit for innovative, reliable, and high-quality solutions that drive your business forward with cutting-edge technology and expert support!";

  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* about us */}
      <WeDeliver />

      <div className="w-full relative">
        <AboutBgParticles />
        <div className="w-full mb-14 sm:mb-0 px-4 lg:px-24 relative sm:absolute sm:top-10 sm:left-1/2 sm:-translate-x-1/2 inline-block   rounded-lg">
          <div className="w-full border border-[#09090B33] rounded-lg bg-[#fafafa12] ">
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={8} />
            </div>
            <div className=" w-full py-4 sm:py-10 lg:py-16 px-4">
              <MagicCardDemo />
            </div>
          </div>
        </div>

        <section className="w-full  bg-gradient-custom pt-11 sm:pt-52 pb-12 lg:pb-14 px-4 lg:px-24 overflow-hidden">
          <div className="w-full mt-0 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center justify-between ">
            <div
              className="w-full sm:w-auto sm:max-w-4xl pr-4 lg:pr-0"
              data-aos="fade-up"
            >
              <span className="mb-2 block font-semibold text-base">
                Trusted Across the Galaxy
              </span>
              <p className="sm:font-semibold text-base sm:text-xl lg:text-2xl tracking-tighter">
                We&apos;ve partnered with forward-thinking brands across
                multiple industries, delivering innovative solutions through a
                diverse range of services.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="border-t sm:border-t-0 sm:border-l  border-white mt-6 sm:mt-0 pt-6 sm:py-12  sm:px-12"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl uppercase sm:text-center font-semibold max-w-80">
                Breaking Barriers Since Day One
              </h3>
            </div>
          </div>
        </section>
      </div>

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

      {/* GridBxes */}
      <GridBoxes GridBoxesHeading={GridBoxesHeading} GridBoxesDetail={GridBoxesDetail} />

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

      <section className="w-full px-4 sm:px-0 ">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Our Values
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Choose Zygobit for innovative, reliable, and high-quality solutions
            that drive your business forward with cutting-edge technology and
            expert support!
          </p>
        </div>
        <div className="w-full  max-w-6xl mx-auto">
          <AboutValueCards />
        </div>
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
