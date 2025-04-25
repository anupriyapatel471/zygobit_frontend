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
import { ChevronRight } from "lucide-react";

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

      <section className="w-full relative py-20 overflow-hidden">
        <div className="absolute -top-[12rem] -right-[21%] w-[900px] h-[900px] -z-10">
          <Image fill src="/images/universe.svg" alt="universe image" />
        </div>
        <div className="container">
          <div className="w-full">
            <div className="w-full text-center mb-20">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
                <Image
                  width={59}
                  height={48}
                  className="w-14 h-12 mx-auto object-contain "
                  src="/images/overview_icon.svg"
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-2xl text-white mt-10 mb-5 sm:text-3xl lg:text-[38px]">
                Overview
              </h2>
              <p className="text-[#C4C4C4] text-sm sm:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
            <div className=" max-w-4xl text-center  mx-auto flex flex-col gap-14">
              <div className="w-fit mx-auto flex items-center justify-center gap-2">
                <h2 className="font-bold text-2xl text-white mt-10 mb-5 sm:text-3xl lg:text-[38px]">
                  Design Process
                </h2>
              </div>
              <div className="w-full grid grid-cols-3 gap-24">
                <div className="w-full flex gap-5 justify-between px-8 py-6 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/research_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-lg">
                      Research
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[72px]">
                    1
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between px-8 py-6 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/ux_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-lg">
                      UX Design
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[72px]">
                    2
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between px-5 pt-5 pb-4 border border-white/25 rounded-xl">
                  <div className=" flex flex-col text-left gap-6">
                    <Image
                      width={42}
                      height={42}
                      className="w-[42px] h-[42px]"
                      src="/images/style_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-lg">
                      Style Guide & Ui Element
                    </span>
                  </div>
                  <div className="text-4xl  text-white/15 sm:text-[50px] lg:text-[72px]">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-left sm:text-center my-12 sm:my-20 lg:my-24 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full max-w-6xl mx-auto sm:px-4">
            <div className="w-24 h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
              <Image
                width={65}
                height={65}
                className="w-16 h-16 mx-auto object-contain "
                src="/images/stack.svg"
                alt="icon"
              />
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mt-10 ">
              Technologies Leveraged
            </h2>
            {/* <p className="font-light sm:font-medium text-sm sm:text-base lg:text-lg mt-3 sm:mt-6">
              {projectData.technologyDescription}
            </p> */}
            <div className="w-full mt-8 lg:mt-14 grid grid-cols-2 sm:flex justify-center items-center gap-5 sm:gap-24">
              {projectData.technologyImages &&
                projectData.technologyImages.map((image: string, i: number) => (
                  <div
                    key={i}
                    className="w-full sm:w-32 h-32 lg:w-24 lg:h-24 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative"
                  >
                    <Image src={image} alt="" fill className="object-contain" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 text-black">
        <div className="container">
          <div className="w-full flex gap-[200px]">
            <div className="w-1/2">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
                <Image
                  width={65}
                  height={65}
                  className="w-16 h-16 mx-auto object-contain "
                  src="/images/require_icon.svg"
                  alt="icon"
                />
              </div>
              <h2 className="text-left sm:text-center font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mt-10 mb-5 ">
                Business Requirements
              </h2>
              <ul className="list-disc space-y-1 pl-8">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
                <Image
                  width={65}
                  height={65}
                  className="w-16 h-16 mx-auto object-contain "
                  src="/images/develop_icon.svg"
                  alt="icon"
                />
              </div>
              <h2 className="text-left sm:text-center font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mt-10 mb-5 ">
                Development
              </h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative py-20">
        <div className="container">
          <div className="w-full">
            <div className=" max-w-[1050px] text-center  mx-auto flex flex-col gap-12">
              <div className="w-fit mx-auto flex items-center justify-center gap-2">
                <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                  Other Details
                </h2>
              </div>
              <div className="w-full grid  sm:grid-cols-3 gap-5 lg:gap-20">
                <div className="w-full flex gap-5 justify-between px-6 py-10 border border-white/25 rounded-xl">
                  <div className="w-full items-center flex justify-between gap-6">
                    <div className="text-left">
                      <h4 className="font-medium text-base sm:text-lg">
                        {" "}
                        Client
                      </h4>
                      <span className="font-medium text-xs sm:text-sm">
                        Research
                      </span>
                    </div>
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/client_icon.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between px-6 py-10 border border-white/25 rounded-xl">
                  <div className="w-full items-center flex justify-between gap-6">
                    <div className="text-left">
                      <h4 className="font-medium text-base sm:text-lg">
                        {" "}
                        Services
                      </h4>
                      <span className="font-medium text-xs sm:text-sm">
                        Live Chat Integration
                      </span>
                    </div>
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/livechat_icon.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between px-6 py-10 border border-white/25 rounded-xl">
                  <div className="w-full items-center flex justify-between gap-6">
                    <div className="text-left">
                      <h4 className="font-medium text-base sm:text-lg">
                        {" "}
                        Business Type
                      </h4>
                      <span className="font-medium text-xs sm:text-sm">
                        FemTech
                      </span>
                    </div>
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/fem_icon.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden py-20">
        <div className="container">
          <div className="w-full">
            <div className="w-full text-center mb-20">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
                <Image
                  width={65}
                  height={65}
                  className="w-16 h-16 mx-auto object-contain "
                  src="/images/screen_preview.svg"
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-2xl text-white mt-10 mb-5 sm:text-3xl lg:text-[38px]">
                Screen Preview
              </h2>
              <p className="text-[#C4C4C4] text-sm sm:text-base lg:text-lg">
                Below we will take a look at the most important application
                screens separately.
              </p>
            </div>
            <div className="w-full flex flex-col gap-[320px]">
              <div className="w-full flex items-center gap-28 justify-between">
                <div className="w-2/5">
                  <div className="w-fit  flex items-center  gap-2 mb-8">
                    <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                      Login/Signup
                    </h2>
                  </div>
                  <div className="w-full bg-[#1E1E1E] rounded-[50px] p-9 pb-20">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="w-3/5 relative">
                  <div className="absolute top-[56%] -translate-y-1/2 -right-[220px] -z-10 w-[700px] h-[700px] rounded-full bg-[#F2A5A04D]"></div>
                  <div className="w-full flex relative gap-12">
                    <div className="w-full">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/signup.png"
                        alt="mobile image"
                      />
                    </div>
                    <div className="w-full mt-24">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/otp.png"
                        alt="mobile image"
                      />
                    </div>
                    <div className="w-[307px] absolute -bottom-[250px] left-1/2 -translate-x-1/2">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover h-[574px]"
                        src="/images/signup.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-28 justify-between">
                <div className="w-3/5 relative">
                  <div className="absolute top-[56%] -translate-y-1/2 -left-[220px] -z-10 w-[700px] h-[700px] rounded-full bg-[#F2A5A04D]"></div>
                  <div className="w-full flex relative gap-12">
                    <div className="w-full">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/signup.png"
                        alt="mobile image"
                      />
                    </div>
                    <div className="w-full mt-24">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/otp.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="w-fit  flex items-center  gap-2 mb-8">
                    <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                      Homepage
                    </h2>
                  </div>
                  <div className="w-full bg-[#1E1E1E] rounded-[50px] p-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-28 justify-between">
                <div className="w-2/5">
                  <div className="w-fit  flex items-center  gap-2 mb-8">
                    <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                      Detail Page
                    </h2>
                  </div>
                  <div className="w-full bg-[#1E1E1E] rounded-[50px] p-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="w-3/5 relative">
                  <div className="absolute top-[56%] -translate-y-1/2 -right-[220px] -z-10 w-[700px] h-[700px] rounded-full bg-[#F2A5A04D]"></div>
                  <div className="w-full flex relative gap-12">
                    <div className="w-full">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/signup.png"
                        alt="mobile image"
                      />
                    </div>
                    <div className="w-full mt-24">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/otp.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-28 justify-between">
                <div className="w-3/5 relative">
                  <div className="absolute top-[56%] -translate-y-1/2 -left-[220px] -z-10 w-[700px] h-[700px] rounded-full bg-[#F2A5A04D]"></div>
                  <div className="w-full flex relative gap-12">
                    <div className="w-full">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/signup.png"
                        alt="mobile image"
                      />
                    </div>
                    <div className="w-full mt-24">
                      <Image
                        width={264}
                        height={574}
                        className="w-full rounded-2xl object-cover max-h-[575px]"
                        src="/images/otp.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="w-fit  flex items-center  gap-2 mb-8">
                    <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                      Profile
                    </h2>
                  </div>
                  <div className="w-full bg-[#1E1E1E] rounded-[50px] p-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative py-20">
        <div className="container">
          <div className="w-full">
            <div className="w-fit mx-auto flex items-center justify-center gap-2 mb-10">
              <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                More Case Studies
              </h2>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-10">
              <div className="w-full flex group justify-between items-center gap-10 p-10 relative bg-white z-10 rounded-2xl overflow-hidden">
                {/* 45% SECOND */}
                <div className="w-[45%] flex justify-between items-start flex-col gap-[126px]">
                  <div>
                    <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                      MH Ride
                    </div>
                    <p className="line-clamp-4 sm:line-clamp-5 text-sm sm:text-base lg:text-lg text-black mt-3.5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-6 flex gap-5 items-center">
                      <div className="w-fit flex flex-col">
                        <b className="text-3xl text-black">2M+</b>
                        <span className="font-light text-lg text-black">
                          App downloads
                        </span>
                      </div>
                      <div className="w-[1px] h-20 bg-black"></div>
                      <div className="w-fit flex flex-col">
                        <b className="text-3xl text-black">500k</b>
                        <span className="font-light text-lg text-black">
                          New users acquired
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                    View Case Study
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </div>

                {/* 55% FIRST */}
                <div className="w-[55%] relative">
                  <div className="relative w-full h-[500px]">
                    <Image fill src="/images/mh_bg.png" alt="image" />
                    <div className="w-[445px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img
                        className="w-full h-full object-contain"
                        src="/images/mh_mobile.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex group justify-between items-center gap-10 p-10 relative bg-white z-10 rounded-2xl overflow-hidden">
                {/* 55% FIRST */}
                <div className="w-[55%] relative">
                  <div className="relative w-full h-[500px]">
                    <Image fill src="/images/bee_bg.png" alt="image" />
                    <div className="w-[445px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img
                        className="w-full h-full object-contain"
                        src="/images/bee_mobile.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
                {/* 45% SECOND */}
                <div className="w-[45%] flex justify-between items-start flex-col gap-[126px]">
                  <div>
                    <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Bee Inspection
                    </div>
                    <p className="line-clamp-4 sm:line-clamp-5 text-sm sm:text-base lg:text-lg text-black mt-3.5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-6 flex gap-5 items-center">
                      <div className="w-fit flex flex-col">
                        <b className="text-3xl text-black">2M+</b>
                        <span className="font-light text-lg text-black">
                          App downloads
                        </span>
                      </div>
                      <div className="w-[1px] h-20 bg-black"></div>
                      <div className="w-fit flex flex-col">
                        <b className="text-3xl text-black">500k</b>
                        <span className="font-light text-lg text-black">
                          New users acquired
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                    View Case Study
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </div>
              </div>
              <div className="w-full flex group justify-between items-center gap-10 p-10 relative bg-white z-10 rounded-2xl overflow-hidden">
                {/* 45% SECOND */}
                <div className="w-[45%] flex justify-between items-start flex-col gap-[126px]">
                  <div>
                    <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                    TIA
                    </div>
                    <p className="line-clamp-4 sm:line-clamp-5 text-sm sm:text-base lg:text-lg text-black mt-3.5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-6 flex gap-5 items-center">
                      <div className="w-fit flex flex-col">
                        <b className="text-3xl text-black">2M+</b>
                        <span className="font-light text-lg text-black">
                          App downloads
                        </span>
                      </div>
                      <div className="w-[1px] h-20 bg-black"></div>
                      <div className="w-fit flex flex-col">
                        <b className="text-3xl text-black">500k</b>
                        <span className="font-light text-lg text-black">
                          New users acquired
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                    View Case Study
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </div>

                {/* 55% FIRST */}
                <div className="w-[55%] relative">
                  <div className="relative w-full h-[500px]">
                    <Image fill src="/images/tia_bg.png" alt="image" />
                    <div className="w-[445px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img
                        className="w-full h-full object-contain"
                        src="/images/tia_mobile.png"
                        alt="mobile image"
                      />
                    </div>
                  </div>
                </div>
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
