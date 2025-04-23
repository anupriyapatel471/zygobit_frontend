/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";
import MarqueeSlider from "@/component/common/Marque/Marqueslider";
import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import TrustedAcross from "../common/TrustedAcross/TrustedAcross";
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <>
      <section className="w-full  relative pt-[100px]">
        <div className="container">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-[930px] -z-10">
              <div className="w-full flex justify-between h-full">
                <div className="w-[1px] h-full bg-[#51515182] opacity-30 relative">
                  <div className="bg-[#666666] w-2.5 h-2.5 rounded-full absolute top-[145px] left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="w-[1px] h-full bg-[#51515182] opacity-30 relative">
                  <div className="bg-[#666666] w-2.5 h-2.5 rounded-full absolute top-[50px] left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="w-[1px] h-full bg-[#51515182] opacity-30 relative">
                  <div className="bg-[#666666] w-2.5 h-2.5 rounded-full absolute top-[50%] left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="w-[1px] h-full bg-[#51515182] opacity-30 relative">
                  <div className="bg-[#666666] w-2.5 h-2.5 rounded-full absolute top-[300px] left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="w-[1px] h-full bg-[#51515182] opacity-30 relative">
                  <div className="bg-[#666666] w-2.5 h-2.5 rounded-full absolute top-[100px] left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="w-[1px] h-full bg-[#51515182] opacity-30 relative">
                  <div className="bg-[#666666] w-2.5 h-2.5 rounded-full absolute bottom-[145px] left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
            <div className="w-full relative px-2">
              <div className="w-full relative h-[420px]">
                <Image
                  className="w-full  object-contain"
                  fill
                  src="/images/banner_logo.svg"
                  alt="Logo"
                />
              </div>
              <div className="w-full absolute top-0 left-0 flex items-end justify-between px-24 pt-7">
                <div className="w-fit custom-move-animation group flex flex-col items-center justify-center gap-6 transition-all duration-300 cursor-pointer">
                  <div className="move-img w-14 h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/banner_profile_one.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-sm">
                    Strategist
                    <div className="absolute -top-7 left-0">
                      <Image
                        className="w-5 h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-fit custom-move-animation group flex flex-col items-center justify-center gap-6 transition-all duration-300 cursor-pointer mb-56">
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-sm">
                    Tester
                    <div className="absolute -top-7 -left-0">
                      <Image
                        className="w-5 h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="move-img w-14 h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/tester.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-fit custom-move-animation group flex flex-col items-center justify-center gap-6 transition-all duration-300 cursor-pointer">
                  <div className="move-img w-14 h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/designer.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-sm">
                    Designer
                    <div className="absolute -top-7 right-0">
                      <Image
                        className="w-5 h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-fit relative -left-12 custom-move-animation group flex flex-col items-center justify-center gap-5 transition-all duration-300 cursor-pointer mb-56">
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-sm">
                    Manager
                    <div className="absolute -top-7 -left-0">
                      <Image
                        className="w-5 h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="move-img w-14 h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/manager.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-fit custom-move-animation group flex flex-col items-center justify-center gap-6 transition-all duration-300 cursor-pointer">
                  <div className="move-img w-14 h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/developer.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-sm">
                    Developer
                    <div className="absolute -top-7 right-0">
                      <Image
                        className="w-5 h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between gap-14 mt-11">
              <div className="w-3/5">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gradiant-custom">
                  Innovative IT Solutions for Your 
                  <span className="text-themetext">Business Growth</span>
                </h1>
              </div>
              <div className="w-2/5">
                <span className="font-light text-xl">We are Trusted by</span>
                <ul className="flex flex-wrap gap-10 gap-y-6 mt-6 mb-9">
                  <li>
                    <img src="/images/trackday.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/slick.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/recovery.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/pilot.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/abbsi.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/residence.png" alt="" />
                  </li>
                </ul>
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Build Your Success Story
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* <TrustedAcross /> */}
    </>
  );
};
export default HomeBanner;
