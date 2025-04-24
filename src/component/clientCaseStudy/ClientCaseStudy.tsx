"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
const RippleBg = dynamic(() => import("@/component/common/Ripplebg/Ripplebg"));

import dynamic from "next/dynamic";
import MagicCard from "@/components/ui/magic-card";
import arrowRight from "../../../public/images/arrow_right.svg";
import GlobeDemo from "../common/Cta/Globe/Globe";
import VortexBg from "../common/Cta/Vortexbg/Vortexbg";
import ContactForm from "../common/ContactForm/ContactForm";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

interface ProjectData {
  projectName: ReactNode;
  subTitle: ReactNode;
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
  developmentDescription?: string;
}

const ClientCaseStudy = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <>
      <section className="w-full rounded-bl-[100px] relative overflow-hidden backdrop-blur-xl bg-[url('/images/pink_bg.png')]  bg-cover bg-center mt-20">
        <div className="container">
          <div className="w-full flex justify-between ">
            <div className="w-[520px] flex flex-col gap-10 py-6">
              <Button className="w-12 h-12 rounded-full bg-white hover:bg-white">
                <Image
                  width={18}
                  height={18}
                  className="w-4 h-4"
                  src="/images/left_arrow.svg"
                  alt="icon"
                />
              </Button>
              <div className="w-full flex items-center gap-7">
                <div className="w-24 h-24 bg-white shadow-[0_20px_48px_0_#EB00293D] rounded-2xl p-5">
                  <Image
                    width={58}
                    height={64}
                    className="w-16 h-16 object-containF"
                    src="/images/her_new.svg"
                    alt="icon"
                  />
                </div>
                <h2 className="font-bold text-[45px] text-[#D95A6C]">
                  Her Calendar
                </h2>
              </div>
              <p className="text-sm text-black sm:text-base slg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="w-[600px] relative -right-20">
              <div className="w-full grid grid-cols-2 h-fit gap-10 ">
                <div className="w-full flex flex-col gap-8">
                  <Image
                    width={264}
                    height={570}
                    className="w-full h-fit rounded-b-3xl object-cover"
                    src="/images/phone_one.png"
                    alt="mobile image"
                  />
                  <Image
                    width={264}
                    height={570}
                    className="w-full h-fit rounded-3xl object-cover"
                    src="/images/phone_three.png"
                    alt="mobile image"
                  />
                </div>
                <div className="w-full flex flex-col gap-8">
                  <Image
                    width={264}
                    height={570}
                    className="w-full h-fit mt-14 rounded-3xl object-cover"
                    src="/images/phone_two.png"
                    alt="mobile image"
                  />
                  <Image
                    width={264}
                    height={570}
                    className="w-full h-fit rounded-t-3xl object-cover"
                    src="/images/phone_four.png"
                    alt="mobile image"
                  />
                </div>
                <div className="w-full absolute bottom-0 -left-[320px]">
                  <Image
                    width={264}
                    height={570}
                    className="w-[280px] h-[500px] rounded-t-3xl object-cover"
                    src="/images/phone_five.png"
                    alt="mobile image"
                  />
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
              <div className=" w-full sm:py-4 sm:px-4">
                <div
                  className={
                    " grid grid-cols-1 sm:grid-cols-3  w-full flex-col gap-4  lg:flex-row"
                  }
                >
                  <MagicCard
                    data-aos="fade-right"
                    className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
                  >
                    <div className="flex flex-wrap sm:flex-nowrap gap-y-3 items-center justify-between">
                      <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-65px)] text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
                        Client Location
                      </h3>
                      <button className="hidden sm:inline order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
                        <Image
                          className="brightness-0 invert"
                          width={20}
                          height={10}
                          src={arrowRight}
                          alt="Arrow right"
                        />
                      </button>
                    </div>
                    <p className="font-[300] sm:font-normal text-sm sm:text-base mt-1.5 sm:mt-3">
                      {projectData.clientLocation}
                    </p>
                  </MagicCard>
                  <MagicCard className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg">
                    <div className="flex flex-wrap sm:flex-nowrap gap-y-3 items-center justify-between">
                      <h3 className="w-full sm:min-h-24 lg:min-h-fit order-2 sm:order-none sm:w-[calc(100%-65px)] xl:w-[calc(100%-80px)] text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
                        Development Time
                      </h3>
                      <button className="hidden sm:inline order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
                        <Image
                          className="brightness-0 invert"
                          width={20}
                          height={10}
                          src={arrowRight}
                          alt="Arrow right"
                        />
                      </button>
                    </div>
                    <p className="font-[300] sm:font-normal text-sm sm:text-base mt-1.5 sm:mt-3">
                      {projectData.developmentTime}
                    </p>
                  </MagicCard>
                  <MagicCard
                    data-aos="fade-left"
                    className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
                  >
                    <div className="flex flex-wrap sm:flex-nowrap gap-y-3 items-center justify-between">
                      <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-65px)] text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
                        Target Users
                      </h3>
                      <button className="hidden sm:inline order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
                        <Image
                          className="brightness-0 invert"
                          width={20}
                          height={10}
                          src={arrowRight}
                          alt="Arrow right"
                        />
                      </button>
                    </div>
                    <p className="font-[300] sm:font-normal text-sm sm:text-base mt-1.5 sm:mt-3">
                      {projectData.targetUsers}
                    </p>
                  </MagicCard>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-0 sm:mt-0 flex flex-wrap lg:flex-nowrap gap-5 lg:gap-0 items-center justify-between ">
            <div
              data-aos="fade-up"
              className="w-full lg:w-[375px] border-b  lg:border-b-0 lg:border-r  border-white pb-5 lg:pb-12 mt-0 sm:mt-0 pt-6 lg:py-12  lg:px-0"
            >
              <h3 className="lg:w-24 text-lg sm:text-2xl lg:text-3xl uppercase lg:text-left font-semibold max-w-80">
                {projectData.projectName}
              </h3>
            </div>
            <div
              className="w-full sm:w-auto sm:max-w-3xl pr-4 lg:pr-0"
              data-aos="fade-up"
            >
              <p className=" text-base sm:text-base lg:text-lg tracking-tighter">
                {projectData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-left sm:text-center mt-12 sm:mt-20 lg:mt-32 mb-8 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full max-w-6xl mx-auto sm:px-4">
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
              Technologies Leveraged
            </h2>
            <p className="font-light sm:font-medium text-sm sm:text-base lg:text-lg mt-3 sm:mt-6">
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

      <section className="w-full relative my-12 sm:my-14 lg:my-16 overflow-hidden">
        <div className="container remove-bg">
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <VortexBg />
          </div>
          <div className="w-full relative">
            <div className="inter-var py-0 w-full">
              <div className="overflow-hidden w-full pb-0 sm:pb-0 relative bg-[#2D2E34] bg-opacity-20 backdrop-blur-md group/card justify-between items-center border-[#FFFFFF26]  rounded-xl flex-wrap lg:flex-nowrap flex border-2  ">
                <div
                  data-aos="fade-right"
                  className="w-full order-2 lg:order-none lg:max-w-3xl p-3 sm:p-5 lg:pr-0 lg:py-12 lg:pl-8 text-center sm:text-left"
                >
                  <div className="inline text-2xl sm:text-[28px] lg:text-4xl text-center sm:text-left text-white font-bold ">
                    Development
                    {/* <span className="text-themetext">Technology </span> */}
                  </div>
                  <div className="text-center sm:text-left sm:font-medium text-sm leading-6 sm:leading-normal sm:text-base lg:text-lg mt-2 mb-5">
                    {projectData?.developmentDescription}
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="order-1 lg:order-none lg:w-[575px] mx-auto lg:mx-0"
                >
                  <GlobeDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Cta
        vortex={"VortexBg"}
        Aurora={""}
        content={"Globe"}
        projectData={projectData}
      /> */}

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

      <ContactForm />
    </>
  );
};

export default ClientCaseStudy;
