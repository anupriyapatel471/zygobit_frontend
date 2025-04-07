/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";
import MarqueeSlider from "@/component/common/Marque/Marqueslider";
import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import TrustedAcross from "../common/TrustedAcross/TrustedAcross";

const HomeBanner = () => {
  return (
    <>
      <section className="w-full h-[650px] sm:h-[720px] lg:h-[900px] relative">
        <div className="container">
          <div className="absolute top-0 left-0 w-full flex justify-between gap-24 z-10 h-full px-16">
            <div className="w-1 h-full border-r border-[#515151] border-opacity-60 relative">
              <div className="absolute top-[15%] left-0 w-2 h-2 rounded-full bg-[#515151]"></div>
            </div>
            <div className="w-1 h-full border-r border-[#515151] border-opacity-60 relative">
              <div className="absolute top-[18%] left-0 w-2 h-2 rounded-full bg-[#515151]"></div>
            </div>
            <div className="w-1 h-full border-r border-[#515151] border-opacity-60 relative">
              <div className="absolute top-[40%] left-0 w-2 h-2 rounded-full bg-[#515151]"></div>
            </div>
            <div className="w-1 h-full border-r border-[#515151] border-opacity-60 relative">
              <div className="absolute top-[70%] left-0 w-2 h-2 rounded-full bg-[#515151]"></div>
            </div>
            <div className="w-1 h-full border-r border-[#515151] border-opacity-60 relative">
              <div className="absolute top-[25%] left-0 w-2 h-2 rounded-full bg-[#515151]"></div>
            </div>
            <div className="w-1 h-full border-r border-[#515151] border-opacity-60 relative">
              <div className="absolute top-[80%] left-0 w-2 h-2 rounded-full bg-[#515151]"></div>
            </div>
          </div>
          {/* bg overlay */}
          <div className="w-full absolute top-20 sm:top-28 left-1/2 -translate-x-1/2  py-5 lg:py-14 z-10 max-w-[1248px] mx-auto">
            <div className="w-full  px-4 lg:px-0 flex flex-wrap sm:flex-nowrap justify-between">
              <div className="w-full sm:w-3/4 lg:w-[60%]">
                <div className="w-auto">
                  <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-shadow-2xl  text-gradiant-custom pr-10">
                    Innovative IT Solutions for Your 
                    <span className="text-themetext"> Business Growth</span>
                  </h1>
                  <button className="mt-7 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                    Talk to an expert!
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </div>
                <div className="w-auto mt-6 sm:mt-16">
                  <span className="block sm:font-bold text-lg mb-7">
                    We are Trusted by
                  </span>
                  <div className="max-w-md">
                    <MarqueeSlider />
                  </div>
                </div>
              </div>
              <div className="hidden  lg:inline sm:w-1/4 lg:w-[60%] absolute top-[90px] right-0">
                <img
                  className="w-[550px]  relative ml-auto object-contain z-20"
                  src="/images/banner_img.png"
                  alt=""
                />
                <img
                  className="w-[250px] absolute top-1/2 -translate-y-1/2 left-[150px] z-10"
                  src="/images/dotted_bg.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full hidden sm:inline max-w-[1248px] mx-auto  absolute -bottom-[170px] left-1/2 -translate-x-1/2 rounded-lg z-10">
            <div className="w-full border border-[#09090B33] overflow-hidden rounded-lg bg-[#fafafa12] px-24  ">
              <div className="w-full  z-[1111]  max-w-sm mx-auto rounded-lg">
                <RippleBg numCircles={10} />
              </div>
              <div className=" w-full px-6 lg:px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MagicCardDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedAcross />
    </>
  );
};
export default HomeBanner;
