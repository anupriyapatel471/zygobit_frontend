import React from "react";
import GlobeDemo from "../Globe/Globe";
import { ChevronRight } from "lucide-react";
import TypewriterEffect from "../Typewriter/Typewriter";
import VortexBg from "../Vortexbg/Vortexbg";
import MarqueeVertical from "../Ctaslider/Ctaslider";
import { AuroraBg } from "../AuroraBg/AuroraBg";

const Cta = ({content, Aurora , vortex}:any)  => {

  return (
    <>
      {/* Cta section */}
      <section className="w-full relative px-4 sm:px-8 lg:px-24 my-14 sm:my-16 overflow-hidden">
        {vortex ==="VortexBg" && <div className="absolute top-0 left-0 w-full h-full -z-10">
          <VortexBg />
        </div>}
       
        <div className="w-full relative">
        {Aurora ==="Aurora" && <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden">
          <AuroraBg/></div>}
          
          <div className="inter-var py-0 w-full">
            <div className="w-full pb-5 sm:pb-0 relative bg-[#2D2E34] bg-opacity-20 backdrop-blur-md group/card justify-between items-center border-[#FFFFFF26]  rounded-xl flex-wrap lg:flex-nowrap flex border-2  ">
              <div
                data-aos="fade-right"
                className="w-full order-2 lg:order-none lg:max-w-3xl p-4  sm:p-5 lg:pr-0 lg:py-12 lg:pl-8"
              >
                <TypewriterEffect />
                <div className="sm:font-medium text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl mt-2 mb-5">
                  Shape the Future of Technology with Us Partner with our team
                  for a free, no-obligation technical proposal tailored to your
                  next enterprise custom project.
                </div>
                <div>
                  <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                    Our Engagement Model{" "}
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="order-1 lg:order-none w-[575px] mx-auto lg:mx-0"
              >
                {content ==="Globe"  && <GlobeDemo />} 
                {content === "Marquee" && <MarqueeVertical />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
