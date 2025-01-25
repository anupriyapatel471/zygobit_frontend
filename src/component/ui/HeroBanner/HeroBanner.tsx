import { ChevronRight } from "lucide-react";
import React from "react";
import MarqueeSlider from "../Marque/Marqueslider";
import { BannerGridBg } from "../BannerGridBg/BannerGridBg";

const HeroBanner = () => {
  return (
    <>
      {/* Hero banner */}
      <section className="w-full relative pt-16 sm:pt-32">
        <div className="w-full h-full absolute z-10 top-0 left-0 ">
          <BannerGridBg />
        </div>
        <div className=" w-full text-center relative py-10 sm:py-16  lg:py-24">
          <div className="w-full">
            <div className="w-full px-4 lg:px-0">
              <h1 className="font-bold relative z-10 text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
                Custom Mobile App Development Services
              </h1>
              <p className="text-sm sm:text-base relative z-10 max-w-2xl mx-auto sm:font-semibold mt-5">
                Turn your ideas into innovative mobile experiences with our
                AI-driven and blockchain-secured mobile app development
              </p>
              <div className="lg:max-w-sm mx-auto relative z-10">
                <button className="lg:w-full mt-9  btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Book your free consultance
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </div>
            </div>
            <div className="w-auto mt-6 sm:mt-16">
              <span className="block relative z-10 sm:font-bold text-lg mb-7">
                We are Trusted by
              </span>
              <div className="max-w-lg relative z-10 mx-auto">
                <MarqueeSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
