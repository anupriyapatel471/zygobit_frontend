/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import AOSInitializer from "@/component/common/AOSInitializer";
import boxData1 from "../../utils/content/boxreveals/aboutUsOne.json";
import boxData2 from "../../utils/content/boxreveals/aboutUsTwo.json";
import Together from "../../../public/images/about_img.png";
import meeting from "../../../public/images/meeting.png";
import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import HeroBanner from "@/component/common/HeroBanner/HeroBanner";
import GridBoxes from "@/component/common/GridBoxes/GridBoxes";
import DeliveringTailored from "@/component/common/DeliveringTailored/DeliveringTailored";
import Loader from "@/component/common/Loader/Loader";
import { Suspense } from "react";
import { AboutBgParticles } from "@/component/about/AboutBgParticles/AboutBgParticles";
import { EcommerceShineCards } from "@/component/sevices/Ecommerce/EcommerceShineCards/EcomoerceShineCards";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver"),
  { ssr: false }
);
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

const BoxReveals = dynamic(() =>
  import("@/component/common/WebSales/WebSales").then((mod) => mod.BoxReveals)
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

export const metadata: Metadata = {
  title: "About us",
  description: "Zygibit Website About Us Page",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "About us",
    description: "Zygibit Website About Us Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "About us",
    description: "Zygibit Website About Us Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

const About = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const GridBoxesHeading = "Why Choose Zygobit?";
  const GridBoxesDetail =
    "Choose Zygobit for innovative, reliable, and high-quality solutions that drive your business forward with cutting-edge technology and expert support!";
  const deliveringHeading = "Delivering Tailored Excellence";
  const deliveringPara =
    "At Zygobit, we turn your vision into reality with creative, innovative solutions that deliver quality and results.";
  const heroHeading = "Innovatinng the Digital Future";
  const heroParagraph =
    "We are a tech-driven company passionate about building cutting-edge mobile and web solutions, helping businesses thrive in a digital-first world.";
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Proven AI Expertise
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Harness the power of AI-driven solutions tailored to optimize your
          business operations, enhance decision-making, and drive innovation.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Scalable AI Solutions
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Deploy AI models that grow with your business, ensuring efficiency,
          automation, and seamless adaptability to changing demands.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Intelligent User Experience
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Enhance customer interactions with AI-powered personalization,
          predictive analytics, and smart automation for a seamless digital
          experience.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Seamless AI Integration
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Integrate cutting-edge AI and ML models into your existing systems,
          enabling real-time data processing, automation, and intelligent
          insights.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-3 cursor-pointer",
      title: "Proven AI Expertise",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "md:col-span-2 cursor-pointer",
      title: "Scalable AI Solutions",

      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "md:col-span-2 cursor-pointer",
      title: "Intelligent User Experience",
      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-3 cursor-pointer",
      title: "Seamless AI Integration",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <AOSInitializer />
      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <div className="w-full relative">
        <AboutBgParticles />
        <div className="w-full mb-14 sm:mb-0 max-w-[1248px] mx-auto px-4 relative sm:absolute sm:top-10 sm:left-1/2 sm:-translate-x-1/2 inline-block   rounded-lg">
          <div className="w-full border border-[#09090B33] rounded-lg bg-[#fafafa12] ">
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={8} />
            </div>
            <div className=" w-full py-4 sm:py-8 lg:py-16 px-4 lg:px-10">
              <MagicCardDemo />
            </div>
          </div>
        </div>

        <section className="w-full  bg-gradient-custom pt-11 sm:pt-44 lg:pt-52 pb-12 lg:pb-14  overflow-hidden">
          <div className="container remove-bg">
            <div className="w-full mt-0 sm:mt-0 flex flex-wrap lg:flex-nowrap gap-5 lg:gap-0 items-center justify-between ">
              <div
                className="w-full sm:w-auto sm:max-w-3xl pr-4 lg:pr-0"
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
                className="w-full lg:w-auto border-t  lg:border-t-0 lg:border-l  border-white mt-0 sm:mt-0 pt-6 lg:py-12  lg:px-12"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl uppercase lg:text-center font-semibold max-w-80">
                  Breaking Barriers Since Day One
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Suspense fallback={<Loader />}>
        <section className="w-full relative py-12 lg:py-20">
          <div className="container remove-bg">
            <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex items-center flex-wrap lg:flex-nowrap  gap-5 sm:gap-8">
              <div className="w-full lg:w-1/2">
                <BoxReveals data={boxData1} />
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
                  src={Together}
                  alt="Together"
                  width={590}
                  height={753}
                />
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      <GridBoxes
        GridBoxesHeading={GridBoxesHeading}
        GridBoxesDetail={GridBoxesDetail}
        cards={cards}
      />

      {/* web app sales */}
      <section className="w-full relative px-4 lg:px-24 pb-12 pt-5 sm:py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex items-center flex-wrap lg:flex-nowrap  gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src={meeting}
              alt="meating"
              width={590}
              height={753}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10">
            <BoxReveals data={boxData2} />
          </div>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <DeliveringTailored
          deliveringHeading={deliveringHeading}
          deliveringPara={deliveringPara}
        />
      </Suspense>
      <section className="w-full  mb-0 sm:mb-10 lg:mb-0 pt-10 pb-0 sm:py-12 lg:py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img
            className="w-full h-full object-cover"
            src="/images/cta_bg.png"
            alt=""
          />
        </div>
        <div className="container remove-bg">
          <div
            className="w-full  sm:text-center mb-5 sm:mb-10"
            data-aos="fade-right"
          >
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
              Our Values
            </h2>
            <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
              Choose Zygobit for innovative, reliable, and high-quality
              solutions that drive your business forward with cutting-edge
              technology and expert support!
            </p>
          </div>
          <div className="w-full">
            <EcommerceShineCards />
          </div>
        </div>
      </section>

      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />
      <ContactForm />
    </>
  );
};

export default About;
