import React from "react";
import GlobeDemo from "./Globe/Globe";
import { ChevronRight } from "lucide-react";
import TypewriterEffect from "./Typewriter/Typewriter";
import VortexBg from "./Vortexbg/Vortexbg";
import MarqueeVertical from "./Ctaslider/Ctaslider";
import { AuroraBg } from "./AuroraBg/AuroraBg";
import Link from "next/link";
interface ctaProp {
  content: string;
  Aurora: string;
  vortex: string;
}

const Cta = ({ content, Aurora, vortex }: ctaProp) => {
  return (
    <>
      <section className="w-full relative my-12 sm:my-14 lg:my-16 overflow-hidden">
        <div className="container">
          {vortex === "VortexBg" && (
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <VortexBg />
            </div>
          )}

          <div className="w-full relative">
            {Aurora === "Aurora" && (
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden">
                <AuroraBg />
              </div>
            )}

            <div className="inter-var py-0 w-full">
              <div className="overflow-hidden w-full pb-0 sm:pb-0 relative bg-[#2D2E34] bg-opacity-20 backdrop-blur-md group/card justify-between items-center border-[#FFFFFF26]  rounded-xl flex-wrap lg:flex-nowrap flex border-2  ">
                <div
                  data-aos="fade-right"
                  className="w-full order-2 lg:order-none lg:max-w-3xl p-3 sm:p-5 lg:pr-0 lg:py-12 lg:pl-8 text-center sm:text-left"
                >
                  <TypewriterEffect />
                  <div className="inline sm:hidden text-2xl sm:text-[28px] lg:text-4xl text-center sm:text-left text-white font-bold ">
                    Shape the Future of <span className="text-themetext">Technology </span> with Us
                  </div>
                  <div className="text-center sm:text-left sm:font-medium text-sm leading-6 sm:leading-normal sm:text-base lg:text-lg mt-2 mb-5">
                    Shape the Future of Technology with Us Partner with our team
                    for a free, no-obligation technical proposal tailored to
                    your next enterprise custom project.
                  </div>
                  <div>
                    <Link href={"/contact"}>
                      <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                        Our Engagement Model{" "}
                        <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="order-1 lg:order-none lg:w-[575px] mx-auto lg:mx-0"
                >
                  {content === "Globe" && <GlobeDemo />}
                  {content === "Marquee" && <MarqueeVertical />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
