/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
const RippleBg = dynamic(() => import("@/component/common/Ripplebg/Ripplebg"));

import dynamic from "next/dynamic";
import ContactForm from "../common/ContactForm/ContactForm";
import { Button } from "@/components/ui/button";

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
      <section className="w-full  lg:rounded-bl-[100px] relative overflow-hidden backdrop-blur-xl bg-[url('/images/pink_bg.png')]  bg-cover bg-center mt-20">
        <div className="container">
          <div className="w-full flex justify-between ">
            <div className="w-full lg:w-[520px] flex flex-col gap-5 sm:gap-10 py-6">
              <Button className="w-10 h-10 p-0 sm:p-0 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-white">
                <Image
                  width={18}
                  height={18}
                  className="w-4 h-4"
                  src="/images/left_arrow.svg"
                  alt="icon"
                />
              </Button>
              <div className="w-full flex items-center gap-7">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 flex items-center justify-center lg:h-24 bg-white shadow-[0_20px_48px_0_#EB00293D] rounded-xl sm:rounded-2xl p-5">
                  <Image
                    width={58}
                    height={64}
                    className="w-10 sm:w-14 h-10 sm:h-14 lg:w-16 lg:h-16 object-containF"
                    src="/images/her_new.svg"
                    alt="icon"
                  />
                </div>
                <h2 className="font-bold text-3xl sm:text-[35px] lg:text-[45px] text-[#D95A6C]">
                  Her Calendar
                </h2>
              </div>
              <p className="text-sm text-black sm:text-base slg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="w-full lg:max-w-sm grid grid-cols-2 gap-5">
                <div className="w-full flex flex-col justify-center items-center text-center gap-2.5 border border-[#D95A6C] rounded-lg p-2.5">
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-10 mx-auto h-10"
                      src="/images/client_a.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="text-black">
                    <b className="text-xs inline-block w-full">Client</b>
                    <span className="text-xs">John Doe</span>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-center gap-2.5 border border-[#D95A6C] rounded-lg p-2.5">
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-10 mx-auto h-10"
                      src="/images/chat_icon.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="text-black">
                    <b className="text-xs inline-block w-full">Services</b>
                    <span className="text-xs">Live Chat Integration</span>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-center gap-2.5 border border-[#D95A6C] rounded-lg p-2.5">
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-10 mx-auto h-10"
                      src="/images/idea_i.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="text-black">
                    <b className="text-xs inline-block w-full">Business Type</b>
                    <span className="text-xs">FemTech</span>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-center gap-2.5 border border-[#D95A6C] rounded-lg p-2.5">
                  <div>
                    <Image
                      width={40}
                      height={40}
                      className="w-10 mx-auto h-10"
                      src="/images/time_i.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="text-black">
                    <b className="text-xs inline-block w-full">
                      Project Duration
                    </b>
                    <span className="text-xs">6 months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[600px] hidden lg:inline relative -right-28">
              <div className="w-full grid grid-cols-2 h-fit gap-10 ">
                <div className="w-full flex flex-col gap-8 lg:pl-4">
                  <Image
                    width={264}
                    height={570}
                    className="w-[275px] h-fit rounded-b-3xl object-cover"
                    src="/images/phone_one.png"
                    alt="mobile image"
                  />
                  <Image
                    width={264}
                    height={570}
                    className="w-[275px] h-fit rounded-3xl object-cover"
                    src="/images/phone_three.png"
                    alt="mobile image"
                  />
                </div>
                <div className="w-full flex flex-col gap-8">
                  <Image
                    width={264}
                    height={570}
                    className="w-[275px] h-fit mt-14 rounded-3xl object-cover"
                    src="/images/phone_two.png"
                    alt="mobile image"
                  />
                  <Image
                    width={264}
                    height={570}
                    className="w-[275px] h-fit rounded-t-3xl object-cover"
                    src="/images/phone_four.png"
                    alt="mobile image"
                  />
                </div>
                <div className="w-full absolute bottom-0 -left-[300px]">
                  <Image
                    width={264}
                    height={570}
                    className="w-[275px] h-[500px] rounded-t-3xl object-cover"
                    src="/images/phone_five.png"
                    alt="mobile image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden pt-12 sm:pt-14 lg:pt-20">
        <div className="container">
          <div className="w-full">
            <div className="w-full text-center mb-8 sm:mb-20">
              <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
                <Image
                  width={65}
                  height={65}
                  className="w-10 h-10 sm:w-16 sm:h-16 mx-auto object-contain "
                  src="/images/overview_icon.svg"
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-2xl text-white mt-4 sm:mt-10 mb-5 sm:text-3xl lg:text-[38px]">
                About The Project
              </h2>
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap flex-col gap-10 sm:gap-32">
              <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-5 lg:gap-14 justify-between">
                <div className="w-full order-2 sm:order-none sm:w-1/2 lg:w-3/5">
                  <div className="w-fit  flex items-center  gap-2 mb-2 sm:mb-5 lg:mb-8">
                    <h2 className="font-bold text-xl text-white  sm:text-3xl lg:text-[38px]">
                      Project Idea
                    </h2>
                  </div>
                  <p className="text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="w-full order-1 sm:order-none sm:w-1/2 lg:w-2/5 relative">
                  <div className="hidden sm:inline absolute -top-20  -right-[120px] sm:-right-[220px] -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#F2A5A04D]"></div>
                  <Image
                    width={520}
                    height={400}
                    className="w-full h-[250px] sm:h-[400px] object-cover"
                    src="/images/project_one.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-5 lg:gap-14 justify-between">
                <div className="w-full order-1 sm:order-none sm:w-1/2 lg:w-2/5 relative">
                  <div className="hidden sm:inline absolute -top-20  -left-[120px] sm:-left-[220px] -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#F2A5A04D]"></div>
                  <Image
                    width={520}
                    height={400}
                    className="w-full h-[250px] sm:h-[400px] object-cover"
                    src="/images/project_two.png"
                    alt="image"
                  />
                </div>
                <div className="w-full order-2 sm:order-none sm:w-1/2 lg:w-3/5">
                  <div className="w-fit  flex items-center  gap-2 mb-2 sm:mb-5 lg:mb-8">
                    <h2 className="font-bold text-xl text-white  sm:text-3xl lg:text-[38px]">
                      Project Challenges
                    </h2>
                  </div>
                  <p className="text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="w-full flex  flex-wrap sm:flex-nowrap items-center gap-5 lg:gap-14 justify-between">
                <div className="w-full order-2 sm:order-none sm:w-1/2 lg:w-3/5">
                  <div className="w-fit  flex items-center  gap-2 mb-2 sm:mb-5 lg:mb-8">
                    <h2 className="font-bold text-xl text-white  sm:text-3xl lg:text-[38px]">
                      The Solution
                    </h2>
                  </div>
                  <p className="text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="w-full order-1 sm:order-none sm:w-1/2 lg:w-2/5 relative">
                  <div className="hidden sm:inline absolute -top-20 -right-[120px] sm:-right-[220px] -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#F2A5A04D]"></div>
                  <Image
                    width={520}
                    height={400}
                    className="w-full  h-[250px] sm:h-[400px] object-cover"
                    src="/images/project_three.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-center mb-12 sm:my-20 lg:my-24 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mt-10 ">
              Technology Stack
            </h2>
            <div className="w-full mt-8 lg:mt-14 grid grid-cols-2 sm:grid-cols-3 sm:grid xl:grid-cols-6 justify-center items-center gap-y-10 sm:gap-y-0  gap-5 sm:gap-10 lg:gap-14">
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                  <Image
                    src="/images/flutter_n.svg"
                    alt=""
                    width={53}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">Flutter</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                  <Image
                    src="/images/flutter_n.svg"
                    alt=""
                    width={53}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">GoLang</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                  <Image
                    src="/images/flutter_n.svg"
                    alt=""
                    width={53}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">React</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                  <Image
                    src="/images/flutter_n.svg"
                    alt=""
                    width={53}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">Python</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                  <Image
                    src="/images/flutter_n.svg"
                    alt=""
                    width={53}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">Ruby</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                  <Image
                    src="/images/flutter_n.svg"
                    alt=""
                    width={53}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  text-black">
        <div className="container remove-bg">
          <div className="w-full text-center mb-5 sm:mb-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto flex items-center justify-center bg-[#D95A6C] rounded-2xl">
              <Image
                width={65}
                height={65}
                className="w-10 h-10 sm:w-16 sm:h-16 mx-auto object-contain "
                src="/images/star.svg"
                alt="icon"
              />
            </div>
            <h2 className="text-center text-white font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mt-5 sm:mt-10 ">
              Main Features of The Project
            </h2>
          </div>
          <div className="w-full flex relative items-center gap-[200px] bg-[#FFF1ED] overflow-hidden rounded-2xl lg:rounded-[60px] px-4 py-5 lg:px-14 lg:py-14 lg:pt-7">
            <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -top-10 -right-10"></div>
            <div className="w-9 h-9 bg-[#FFE5DD] rounded-full absolute top-48 right-5"></div>
            <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -bottom-12  left-1/2"></div>
            <div className="w-full lg:w-1/2 relative z-10 lg:static">
              <h3 className=" font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mb-3 sm:mb-5">
                Mobile App
              </h3>
              <ul className="list-decimal sm:font-bold text-sm space-y-4 pl-5">
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
            <div className="w-1/2 hidden lg:inline relative">
              <div className="relative top-12">
                <Image
                  width={380}
                  height={467}
                  className="object-contain"
                  src="/images/mobile_app_new.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative py-12 sm:py-20 overflow-hidden">
        <div className="container">
          <div className="w-full">
            <div className="w-full text-center  mx-auto flex flex-col gap-5 sm:gap-10">
              <div className="w-fit mx-auto flex items-center justify-center gap-2">
                <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                  Process
                </h2>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12">
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/research_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Research
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[65px]">
                    1
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/ux_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium whitespace-nowrap text-sm sm:text-base lg:text-base">
                      UI/UX Design
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[65px]">
                    2
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 pb-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col text-left gap-6">
                    <Image
                      width={42}
                      height={42}
                      className="w-[42px] h-[42px]"
                      src="/images/style_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Development
                    </span>
                  </div>
                  <div className="text-4xl  text-white/15 sm:text-[50px] lg:text-[65px]">
                    3
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/ux_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Deployment
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[65px]">
                    4
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col text-left gap-6">
                    <Image
                      width={42}
                      height={42}
                      className="w-[42px] h-[42px]"
                      src="/images/style_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Maintenance
                    </span>
                  </div>
                  <div className="text-4xl  text-white/15 sm:text-[50px] lg:text-[65px]">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  text-black pb-12 sm:pb-14 lg:pb-20">
        <div className="container remove-bg">
          <div className="w-full flex relative items-center gap-14 bg-[#FFF1ED] overflow-hidden rounded-2xl lg:rounded-[60px] px-4 py-5 lg:px-14 lg:py-14 lg:pt-7">
            <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -top-10 -left-10"></div>
            <div className="w-9 h-9 bg-[#FFE5DD] rounded-full absolute top-5 left-60"></div>
            <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -bottom-12  left-[40%]"></div>
            <div className="w-3/5 hidden lg:inline relative">
              <div className="w-full top-5 h-[399px] relative">
                <Image
                  fill
                  className="w-full object-contain"
                  src="/images/moniter.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="w-full relative z-10 lg:static lg:w-2/5">
              <h3 className=" font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mb-3 sm:mb-5">
                Admin Panel
              </h3>
              <ul className="list-decimal sm:font-bold text-sm space-y-4 pl-5">
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

      <ContactForm />
    </>
  );
};

export default ClientCaseStudy;
