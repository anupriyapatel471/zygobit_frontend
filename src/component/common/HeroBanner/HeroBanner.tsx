import { ChevronRight } from "lucide-react";
import React from "react";
import MarqueeSlider from "../Marque/Marqueslider";
import { BannerGridBg } from "./BannerGridBg/BannerGridBg";
import Link from "next/link";

const HeroBanner = ({
  heroParagraph,
  heroHeading,
}: {
  heroParagraph: string;
  heroHeading: string;
}) => {
  return (
    <>
      <section className="w-full relative pt-16 sm:pt-32">
        <div className="container remove-bg">
          <div className="w-full h-full absolute z-10 top-0 left-0 ">
            <BannerGridBg />
          </div>
          <div className=" w-full text-center relative py-10 sm:py-16  lg:py-24">
            <div className="w-full">
              <div className="w-full">
                <h1 className="font-bold relative z-10 text-2xl sm:text-3xl lg:text-5xl lg:leading-[48px]">
                  {heroHeading}
                </h1>
                <p className="text-sm sm:text-base relative z-10 max-w-5xl mx-auto sm:font-semibold mt-4 sm:mt-7">
                  {heroParagraph}
                </p>
                <div className="lg:max-w-fit mx-auto relative z-10">
                  <Link href="/contact">
                    <button className="lg:w-full mt-5 sm:mt-9  btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                      Book your free consultation
                      <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                    </button>
                  </Link>
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
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
