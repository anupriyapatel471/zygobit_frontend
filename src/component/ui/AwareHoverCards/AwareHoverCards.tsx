"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";

export function AwareHoverCards() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
        <div className="w-full h-auto relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
              <h3 className="font-semibold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="font-normal text-sm sm:text-base">
                At Zygobit, our custom web app development solutions are
                designed for cost-effectiveness, ensuring your project is
                executed efficiently without compromising quality
              </p>
            </div>
          </DirectionAwareHover>
        </div>
      </div>
    </>
  );
}
