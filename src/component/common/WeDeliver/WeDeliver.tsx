"use client"

import React, { useEffect, useState } from "react";
// import { WorldMapMap } from "../worldMap/worldMap";

import dynamic from 'next/dynamic';
import MapSkeleton from "@/component/Loader/MapSkeleton";

// Dynamically import with no SSR
const WorldMapMap = dynamic(() => import('../worldMap/worldMap').then(mod => mod.WorldMapMap), {
  ssr: false,
  loading: () => <div className="w-full h-full" />, // optional placeholder
});

const WeDeliver = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowMap(true), 100); 
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <section className="w-full relative overflow-hidden">
        <div className="absolute -z-10 top-0 left-0 w-full h-full">
       
        {showMap ? <WorldMapMap /> : <MapSkeleton/>}
        </div>
        <div className="container remove-bg">
          <div className="w-full pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-24">
            <div className="w-full px-4 sm:px-0 text-center mb-10 sm:mb-16 lg:mb-24">
              <h2 className="font-bold text-2xl sm:text-4xl lg:text-[35px] text-white ">
                We provide cutting-edge mobile app development services and IT
                solutions designed to keep your business ahead in the digital
                era.
              </h2>
            </div>
            <div className="w-full px-4 lg:px-0  grid gap-5 sm:gap-8 lg:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
                  15+
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
                  250+
                </b>
                <span className="font-medium text-sm sm:text-base">
                  Products Delivered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(WeDeliver);
