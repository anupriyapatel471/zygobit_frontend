import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";
import { SparklesHeading } from "@/component/homePage/Sparkleheading/Sparkleheading";
import { ourExpertiseData } from "../component/homePage/OurExpertise";
import React from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeBanner = dynamic(() => import("@/component/homePage/HomeBanner"));
const FeaturedProjects = dynamic(
  () => import("@/component/homePage/FeaturedProjects")
);
const BusinessCards = dynamic(
  () => import("@/component/homePage/Businesscards/Businesscards")
);
const BackgroundBeamNew = dynamic(
  () => import("@/component/homePage/Bgbeam/Bgbeam")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const WhychooseUs = dynamic(
  () => import("@/component/homePage/Whychooseus/Whychooseus")
);
// const HeroParalax = dynamic(
//   () => import("@/component/common/HeroParallax/HeroParallax")
// );
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const OurPartners = dynamic(
  () => import("@/component/common/OurPartners/OurPartners")
);
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Zygibit Website Home Page",
};

const Home = () => {
  const clientHeading = "Lets’s Hear What Our Clients Say";
  const clientSaysDetails =
    "Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";

  return (
    <>
      <AOSInitializer />

      <HomeBanner />
      <FeaturedProjects />
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 px-0 overflow-hidden"
      >
        {/* <div className="w-full h-full">
          <BackgroundBeamNew />
        </div> */}
        {/* <BusinessCards /> */}
        <div className="container">
          <div className="w-full sm:text-center mb-5 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] text-gradiant-custom 2xl:text-[40px] font-bold">
              Revolutionizing Businesses with Excellence & Expertise
            </h2>
          </div>
          <div className="w-full grid grid-cols-4 gap-5">
            <div className="w-full hover:bg-orange-600 rounded-2xl border-2 border-white/20 p-5 text-white group">
              <span className="border-2 border-white/20 flex items-center justify-center rounded-xl w-20 h-20 overflow-hidden">
                <img
                  className="group-hover:brightness-0 group-hover:invert size-full"
                  src="/images/sol_one.png"
                  alt=""
                />
              </span>
              <h3 className="font-bold text-xl my-4">
                Strategic Business Solutions
              </h3>
              <ul className="list-disc pl-4 text-base">
                <li>Comprehensive analysis of your unique business needs.</li>
                <li>Custom-built strategies designed to drive results.</li>
                <li>Scalable solutions adaptable to future growth.</li>
                <li>Focused on delivering measurable outcomes.</li>
              </ul>
            </div>
            <div className="w-full hover:bg-orange-600 rounded-2xl border-2 border-white/20 p-5 text-white group">
              <span className="border-2 border-white/20 flex items-center justify-center rounded-xl w-20 h-20 overflow-hidden">
                <img
                  className="group-hover:brightness-0 group-hover:invert size-full"
                  src="/images/sol_one.png"
                  alt=""
                />
              </span>
              <h3 className="font-bold text-xl my-4">
                Strategic Business Solutions
              </h3>
              <ul className="list-disc pl-4 text-base">
                <li>Comprehensive analysis of your unique business needs.</li>
                <li>Custom-built strategies designed to drive results.</li>
                <li>Scalable solutions adaptable to future growth.</li>
                <li>Focused on delivering measurable outcomes.</li>
              </ul>
            </div>
            <div className="w-full hover:bg-orange-600 rounded-2xl border-2 border-white/20 p-5 text-white group">
              <span className="border-2 border-white/20 flex items-center justify-center rounded-xl w-20 h-20 overflow-hidden">
                <img
                  className="group-hover:brightness-0 group-hover:invert size-full"
                  src="/images/sol_three.png"
                  alt=""
                />
              </span>
              <h3 className="font-bold text-xl my-4">
                Strategic Business Solutions
              </h3>
              <ul className="list-disc pl-4 text-base">
                <li>Comprehensive analysis of your unique business needs.</li>
                <li>Custom-built strategies designed to drive results.</li>
                <li>Scalable solutions adaptable to future growth.</li>
                <li>Focused on delivering measurable outcomes.</li>
              </ul>
            </div>
            <div className="w-full hover:bg-orange-600 rounded-2xl border-2 border-white/20 p-5 text-white group">
              <span className="border-2 border-white/20 flex items-center justify-center rounded-xl w-20 h-20 overflow-hidden">
                <img
                  className="group-hover:brightness-0 group-hover:invert size-full"
                  src="/images/sol_four.png"
                  alt=""
                />
              </span>
              <h3 className="font-bold text-xl my-4">
                Strategic Business Solutions
              </h3>
              <ul className="list-disc pl-4 text-base">
                <li>Comprehensive analysis of your unique business needs.</li>
                <li>Custom-built strategies designed to drive results.</li>
                <li>Scalable solutions adaptable to future growth.</li>
                <li>Focused on delivering measurable outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section data-aos="fade-up" className="w-full  mb-20 overflow-hidden">
        <div className="container">
          <div className="w-full text-center mb-0">
            <SparklesHeading />
          </div>
          <div className="w-full mt-5 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            {ourExpertiseData?.map((data, index) => (
              <div
                key={index}
                className="border border-[#EA580C] cursor-context-menu p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto group"
              >
                <span>{data?.image}</span>
                <h5 className="pl-4 group-hover:text-themetext font-semibold text-lg my-2">
                  {data?.heading}
                </h5>
                <p className="pl-4 text-sm sm:text-base text-muted-foreground">
                  {data?.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyStack />

      {/* <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section> */}
      {/* 
      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      /> */}

      <section className="w-full inline-block py-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="container">
          <div className="w-full flex gap-16 items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradiant-custom mb-2">
                Lets’s Hear What Our Clients Say
              </h2>
              <p className="font-medium text-base lg:text-lg 2xl:text-xl">
                Using the latest technology and industry expertise, we built
                top-end Android and iOS-based applications that add value to the
                business and user experience.
              </p>
            </div>
            <div className="w-1/2 relative">
              <div className="w-full relative">
                <div className="w-full h-[400px] bg-[#FEF8FF36] backdrop-blur-2xl border-[12px] border-white/20 rounded-2xl relative"></div>
                <div className="absolute top-20 -right-24 -z-20">
                  <img src="/images/square.png" alt="" />
                </div>
                <div className="absolute -bottom-14 -left-14 -z-20">
                  <img src="/images/circle.png" alt="" />
                </div>
                <div className="absolute -top-16 left-12 -z-20">
                  <img src="/images/ring.png" alt="" />
                </div>
                <div className="absolute top-0 left-0 w-full">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <CardContent className="mt-14 w-full h-full flex flex-col justify-center items-center  text-center  p-6 text-white">
                              <div className="ml-12 w-fit mr-auto mb-3">
                                <img className="" src="images/qoutus.png" alt="" />
                              </div>
                              <p className="text-sm sm:text-base mb-8 max-w-xs mx-auto">
                                The scalability and performance have bee game
                                changing for our organization. Highly recommend
                                to any growing business.
                              </p>
                              <div className="w-12 h-12 mx-auto rounded-full overflow-hidden">
                                <img
                                  className="w-full h-full mx-auto "
                                  src="/images/profile.png"
                                  alt=""
                                />
                              </div>
                              <h4 className="font-medium text-sm text-[#E0E0E0] mt-3 mb-1">
                                john smith
                              </h4>
                              <span className="font-[300] text-sm">
                                Founder of Awesomeux Technology
                              </span>
                            </CardContent>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-transparent hover:bg-transparent border-none sm:w-auto sm:h-auto sm:top-auto sm:bottom-[82px] sm:left-16 sm:right-auto" />
                    <CarouselNext className="bg-transparent hover:bg-transparent border-none sm:w-auto sm:h-auto sm:left-auto lg:right-16 sm:top-auto sm:bottom-[82px]" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPartners />

      <Cta vortex={"VortexBg"} Aurora={""} content={"Marquee"} />

      {/* why choose us  */}
      <section data-aos="fade-up" className="w-full mb-20">
        <div className="container">
          {/* <WhychooseUs /> */}
          <div className="w-full text-center mb-10">
            <h2 className="font-medium text-4xl">Why Choose Us</h2>
            <p className="font-medium text-xl mt-5 max-w-3xl mx-auto">
              More the years, the better the solutions! We have been partnering
              with brands and offering our expertise for more than a decade.
            </p>
          </div>
          <div className="w-full flex gap-10 items-center">
            <div className="w-2/5">
              <img
                className="w-full max-h-[560px] object-cover"
                src="/images/why_choose_us.png"
                alt=""
              />
            </div>
            <div className="w-3/5">
              <div className="grid gap-5">
                <div className="w-full bg-[#2D2E34] rounded-2xl p-4 border border-white/20">
                  <h3 className="font-semibold text-2xl mb-2.5">
                    Unmatched Quality
                  </h3>
                  <p className="font-medium text-sm">
                    We prioritize quality in everything we do, delivering
                    high-performance, end-to-end IT solutions tailored to your
                    needs. With years of experience and a skilled team of
                    developers and designers, we’ve successfully completed over
                    20 client projects across various industries.
                  </p>
                </div>
                <div className="w-full bg-[#2D2E34] rounded-2xl p-4 border border-white/20">
                  <h3 className="font-semibold text-2xl mb-2.5">
                    Exceptional Support
                  </h3>
                  <p className="font-medium text-sm">
                    With exceptional support, we prioritize clear communication
                    and client satisfaction. Our team is available 24/7 to
                    ensure seamless operations and provide proactive assistance
                    at every stage of your project journey.
                  </p>
                </div>
                <div className="w-full bg-[#2D2E34] rounded-2xl p-4 border border-white/20">
                  <h3 className="font-semibold text-2xl mb-2.5">
                    Innovation at Core
                  </h3>
                  <p className="font-medium text-sm">
                    Our focus on innovation ensures that your business stays
                    ahead. By leveraging cutting-edge technologies like AI and
                    automation, we create scalable, future-ready solutions
                    designed to align with the latest industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blog />
      <ContactForm />
    </>
  );
};

export default Home;
