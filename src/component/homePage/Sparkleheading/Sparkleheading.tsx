"use client";
import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";

export function SparklesHeading() {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-gradiant-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative z-20">
        Our Expertise
      </h1>
      <div className="w-[40rem] h-8 sm:h-24 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-800 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-800 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-600 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-primaryBg [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
