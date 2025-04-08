"use client";
import React from "react";
import Image from "next/image";
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const RippleBg = dynamic(() => import("@/component/common/Ripplebg/Ripplebg"));

import dynamic from "next/dynamic";
import MagicCard from "@/components/ui/magic-card";
import { ChevronRight } from "lucide-react";
import { MagicCardDemo } from "../common/Magiccard/Magiccard";

interface ProjectData {
  title: string;
  description: string;
  mobileImage?: string;
  clientLocation?: string;
  developmentTime?: string;
  targetUsers?: string;
  technologyDescription?: string;
  technologyImages?: string[];
  evaluationDescription?: string;
  evaluationImage?: string;
}

const ClientCaseStudy = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <>
      <section className="w-full relative">
        <div className="w-full h-[365px] sm:h-[550px] lg:h-[900px]">
          <Image
            className="w-full"
            src="/images/case_study_banner.png"
            fill
            alt="case_study_banner"
          />
        </div>
        <div className="container remove-bg">
          <div className="w-full max-w-[1248px] mx-auto px-4 absolute top-20 sm:top-28 left-1/2 -translate-x-1/2  py-5 lg:py-14">
            <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center">
              <div className="w-full sm:w-full lg:w-[60%]">
                <div className="w-auto max-w-2xl">
                  <ul className="flex items-center flex-wrap sm:flex-nowrap gap-2.5 text-white mb-5 lg:mb-40">
                    <li className="text-sm sm:text-base cursor-pointer flex gap-1.5 items-center">
                      Portfolio <ChevronRight className="text-sm" />{" "}
                    </li>
                    <li className="text-sm sm:text-base cursor-pointer flex gap-1.5 items-center">
                      Mobile Application <ChevronRight className="text-sm" />{" "}
                    </li>
                    <li className="text-sm sm:text-base cursor-pointer flex gap-1.5 items-center text-orange-600">
                      Her Calendar{" "}
                    </li>
                  </ul>
                  <h1 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl  text-gradiant-custom">
                    {projectData.title}
                  </h1>
                  <p className="text-sm sm:text-base mt-2.5 line-clamp-3">
                    {projectData.description}
                  </p>
                </div>
                <div className="w-auto mt-6 sm:mt-16">
                  <span className="block sm:font-bold text-lg mb-7"></span>
                </div>
              </div>
              <div className="mt-6 w-full sm:w-full lg:w-[44%] lg:mt-5 hidden lg:inline text-right">
                {projectData.mobileImage && (
                  <Image
                    className="ml-auto"
                    src={projectData.mobileImage}
                    alt="case_banner"
                    width={500}
                    height={500}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-full hidden sm:inline absolute max-w-[1248px] mx-auto px-4 -bottom-[170px] left-1/2 -translate-x-1/2 rounded-lg">
            <div className="w-full border border-[#09090B33] overflow-hidden rounded-lg bg-[#fafafa12] px-4 lg:px-10  ">
              <div className="w-full  z-[1111]  max-w-sm mx-auto rounded-lg">
                <RippleBg numCircles={10} />
              </div>
              <div className=" w-full px-8 lg:px-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className=" grid grid-cols-1 sm:grid-cols-3  w-full flex-col gap-4  lg:flex-row">
                  <MagicCard
                    data-aos="fade-right"
                    className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
                  >
                    <div className="w-full block pb-4 border-b-2 border-[#EA580C]">
                      <h3 className="w-full order-2 sm:order-none sm:min-h-[76px] sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-170px)] text-xl lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
                        Client Location
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base mt-3">
                      {projectData.clientLocation}
                    </p>
                  </MagicCard>
                  <MagicCard
                    data-aos="fade-right"
                    className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
                  >
                    <div className="w-full block pb-4 border-b-2 border-[#EA580C]">
                      <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)]  2xl:w-[calc(100%-125px)] text-xl lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
                        Development Time
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base mt-3">
                      {projectData.developmentTime}
                    </p>
                  </MagicCard>
                  <MagicCard
                    data-aos="fade-right"
                    className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
                  >
                    <div className="w-full block pb-4 border-b-2 border-[#EA580C]">
                      <h3 className="w-full order-2 sm:order-none sm:min-h-[76px] sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-195px)] text-xl lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
                        Target Users
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base mt-3">
                      {projectData.targetUsers}
                    </p>
                  </MagicCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  bg-gradient-custom pt-11 sm:pt-52 pb-12 lg:pb-14  overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full  relative inline-block sm:hidden  rounded-lg">
            <div className="w-full border border-[#09090B33] rounded-lg bg-[#fafafa12] ">
              <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
                <RippleBg numCircles={8} />
              </div>
              <div className=" w-full py-4 px-4">
                <MagicCardDemo />
              </div>
            </div>
          </div>
          <div className="w-full mt-0 sm:mt-0 flex flex-wrap lg:flex-nowrap gap-5 lg:gap-0 items-center justify-between ">
            <div
              data-aos="fade-up"
              className="w-full lg:w-[375px] border-b  lg:border-b-0 lg:border-r  border-white pb-5 lg:pb-12 mt-0 sm:mt-0 pt-6 lg:py-12  lg:px-0"
            >
              <h3 className="lg:w-24 text-lg sm:text-2xl lg:text-3xl uppercase lg:text-left font-semibold max-w-80">
                Her Calendar
              </h3>
            </div>
            <div
              className="w-full sm:w-auto sm:max-w-3xl pr-4 lg:pr-0"
              data-aos="fade-up"
            >
              <p className=" text-base sm:text-base lg:text-lg tracking-tighter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-left sm:text-center mt-12 sm:mt-20 lg:mt-32 mb-8 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full max-w-6xl mx-auto sm:px-4">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
              Technologies Leveraged
            </h2>
            <p className="sm:font-medium text-sm sm:text-base lg:text-lg mt-3 sm:mt-6">
              {projectData.technologyDescription}
            </p>
            <div className="w-full mt-8 lg:mt-14 grid grid-cols-2 sm:flex justify-center items-center gap-5 sm:gap-24">
              {projectData.technologyImages &&
                projectData.technologyImages.map((image: string, i: number) => (
                  <div
                    key={i}
                    className="w-full sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-0 rounded-3xl flex items-center justify-center border-[5px] border-white/20 relative"
                  >
                    <Image src={image} alt="" fill className="object-contain" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section className="w-full overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 text-left sm:text-center lg:text-left">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
                Project Outcomes : Evaluation
              </h2>
              <p className="sm:font-medium text-sm sm:text-base lg:text-lg mt-3 sm:mt-6">
                {projectData.evaluationDescription}
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full sm:w-[496px] mx-auto lg:mx-0 lg:ml-auto  relative  bg-[#EA580C] h-[350px] sm:h-[440px] rounded-2xl">
                {projectData.evaluationImage && (
                  <Image
                    className="w-full h-full object-cover rounded-2xl relative z-[11]"
                    src={projectData.evaluationImage}
                    alt=""
                    fill
                  />
                )}
                <div className="absolute hidden sm:inline top-10 opacity-70 -rotate-[15deg] z-10 left-0 w-[355px] h-[400px] bg-[#EA580C] rounded-2xl shadow-[0_0_48px_0_#EA580C99]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientCaseStudy;
