import React from "react";
import { WorldMapMap } from "../worldMap/worldMap";

const WeDeliver = () => {
  return (
    <>
      <section className="w-full relative overflow-hidden">
        <div className="absolute -z-10 top-0 left-0 w-full h-full">
          <WorldMapMap />
        </div>
        <div className="w-full pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-36">
          <div className="w-full px-4 sm:px-0 text-center mb-10 sm:mb-16 lg:mb-24">
            <h2 className="font-bold text-2xl sm:text-4xl text-gradiant-custom max-w-4xl mx-auto">
              We provide cutting-edge mobile app development services and IT
              solutions designed to keep your business ahead in the digital
              era.&quot;
            </h2>
          </div>
          <div className="w-full px-4 lg:px-0 max-w-6xl mx-auto grid gap-5 sm:gap-8 lg:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="w-full text-center py-14 px-4 rounded-lg bg-[#2D2E34] bg-opacity-20 backdrop-blur-md ">
              <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                2+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Years of Experience
              </span>
            </div>
            <div className="w-full text-center py-14 px-4 rounded-lg bg-[#2D2E34] bg-opacity-20 backdrop-blur-md ">
              <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                25+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Countries Served
              </span>
            </div>
            <div className="w-full text-center py-14 px-4 rounded-lg bg-[#2D2E34] bg-opacity-20 backdrop-blur-md ">
              <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                25+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Tech Enthusiast
              </span>
            </div>
            <div className="w-full text-center py-14 px-4 rounded-lg bg-[#2D2E34] bg-opacity-20 backdrop-blur-md ">
              <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                300+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Products Delivered
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(WeDeliver);
