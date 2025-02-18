import { ChevronRight } from "lucide-react";
import MarqueeSlider from "@/component/common/Marque/Marqueslider";
import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import Count from "@/components/ui/Count";
import TrustedAcross from "../common/TrustedAcross/TrustedAcross";

const HomeBanner = () => {
  const stats = [
    { value: 2, label: "Years of Experience" },
    { value: 25, label: "Countries Served" },
    { value: 25, label: "Tech Enthusiast" },
    { value: 300, label: "Products Delivered" }
  ];
  return (
    <>
       <section className="w-full relative">
        {/* bg overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        {/* galaxy */}
        <div className="w-full">
          <div className="sketchfab-embed-wrapper">
            <iframe
              className="w-full h-[715px] sm:h-[775px] lg:h-[900px]"
              frameBorder="0"
              allowFullScreen
              // mozAllowFullScreen="true"
              // webkitAllowFullScreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              // xrSpatialTracking
              execution-while-out-of-viewport="true"
              execution-while-not-rendered='true'
              web-share='true'
              src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&ui_loader=0"
            ></iframe>
          </div>
        </div>
        <div className="w-full absolute top-20 sm:top-28 left-0 px-4 lg:px-24 py-5 lg:py-14">
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between">
            <div className="w-full sm:w-3/4 lg:w-[60%]">
              <div className="w-auto">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
                  Exploring the Digital Galaxy: Innovative IT Solutions for Your{" "}
                  <span className="text-themetext"> Business Growth</span>
                </h1>
                <button className="mt-7 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Let&apos;s talk{" "}
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </div>
              <div className="w-auto mt-6 sm:mt-16">
                <span className="block sm:font-bold text-lg mb-7">
                  We are Trusted by
                </span>
                <div className="max-w-lg">
                  <MarqueeSlider />
                </div>
              </div>
            </div>
            <div className="mt-6 w-full sm:w-1/4 lg:w-[44%] lg:mt-5 text-right">
              <div className="w-full sm:w-auto sm:max-w-[157px] ml-auto grid grid-cols-2 sm:grid-cols-1 gap-y-5 sm:gap-y-10">
              {stats.map((stat, index) => (
                  <div key={index} className="w-full text-center">
                    <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                      <Count endValue={stat.value} /> +
                    </b>
                    <span className="font-medium text-sm sm:text-base">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden sm:inline px-4 lg:px-24 absolute -bottom-[170px] left-1/2 -translate-x-1/2 rounded-lg">
          <div className="w-full border border-[#09090B33] overflow-hidden rounded-lg bg-[#fafafa12] px-24  ">
            <div className="w-full  z-[1111]  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={10} />
            </div>
            <div className=" w-full px-6 lg:px-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MagicCardDemo />
            </div>
          </div>
        </div>
      </section>

      <TrustedAcross />
    </>
  );
};
export default HomeBanner;
