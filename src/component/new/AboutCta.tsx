import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutCta = () => {
  return (
    <>
      <section className="w-full relative mb-12 sm:my-14 lg:my-20">
        <div className="container remove-bg">
          <div className="w-full bg-[#17181B] rounded-xl sm:rounded-3xl lg:rounded-[40px] p-4 sm:p-5 lg:p-[60px] relative overflow-hidden">
            <div className="absolute bottom-0 left-20 z-10">
              <Image
                width={20}
                height={20}
                className="w-[300px] h-auto object-contain"
                src="/images/g.svg"
                alt="background image"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-4 gap-y-6 sm:gap-y-0 sm:gap-0 sm:flex justify-between text-white">
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-2xl sm:text-4xl lg:text-6xl">11+</b>
                <div className="w-full h-[1px] bg-white/30 my-1.5 sm:mt-3 sm:mb-3"></div>
                <span className="sm:font-medium text-sm sm:text-base inline-block">
                  Years of Experience
                </span>
              </div>
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-2xl sm:text-4xl lg:text-6xl">25+</b>
                <div className="w-full h-[1px] bg-white/30 my-1.5 sm:mt-3 sm:mb-3"></div>
                <span className="sm:font-medium text-sm sm:text-base inline-block">
                  Countries Served
                </span>
              </div>
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-2xl sm:text-4xl lg:text-6xl">250+</b>
                <div className="w-full h-[1px] bg-white/30 my-1.5 sm:mt-3 sm:mb-3"></div>
                <span className="sm:font-medium text-sm sm:text-base inline-block">
                  Tech Enthusiast
                </span>
              </div>
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-2xl sm:text-4xl lg:text-6xl">1000+</b>
                <div className="w-full h-[1px] bg-white/30 my-1.5 sm:mt-3 sm:mb-3"></div>
                <span className="sm:font-medium text-sm sm:text-base inline-block">
                  Products Delivered
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-5 sm:mt-10 lg:mt-14">
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Build Your Success Story
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCta;
