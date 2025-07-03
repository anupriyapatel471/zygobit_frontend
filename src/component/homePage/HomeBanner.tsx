import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <>
      <section className="w-full  relative pt-[88px] sm:pt-[100px]">
        <div className="container remove-bg">
          <div className="w-full flex flex-wrap sm:inline relative">
            <div className="hidden sm:inline absolute top-0 left-0 w-full h-[830px] -z-10">
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
            <div className="w-full order-2 sm:order-none relative px-2">
              <div className="w-full relative top-7 sm:top-0 h-[250px] sm:h-[420px]">
                <Image
                  className="w-full object-contain"
                  fill
                  src="/images/banner_logo.svg"
                  alt="Logo"
                  priority
                />
              </div>
              <div className="w-full absolute top-7 sm:top-0 left-0 grid grid-cols-3 gap-y-20 sm:gap-y-0 sm:flex items-end justify-between px-0 lg:px-24 pt-0 sm:pt-7">
                <div className="w-full sm:w-fit custom-move-animation group flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-300 cursor-pointer">
                  <div className="move-img w-7 h-7 sm:w-14 sm:h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/banner_profile_one.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-[10px] sm:text-sm">
                    Strategist
                    <div className="absolute -top-7 left-0">
                      <Image
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-fit custom-move-animation group flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-300 cursor-pointer mb-0 sm:mb-56">
                  <div className="order-2 sm:order-none bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-[10px] sm:text-sm">
                    Tester
                    <div className="absolute -top-7 -left-0">
                      <Image
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-none move-img w-7 h-7 sm:w-14 sm:h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/tester.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-fit custom-move-animation group flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-300 cursor-pointer">
                  <div className="move-img w-7 h-7 sm:w-14 sm:h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/designer.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-[10px] sm:text-sm">
                    Designer
                    <div className="absolute -top-7 right-0">
                      <Image
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-fit relative sm:-left-12 custom-move-animation group flex flex-col items-center justify-center gap-5 transition-all duration-300 cursor-pointer mb-0 sm:mb-56">
                  <div className="bg-[#2A2A2A] order-2 sm:order-none relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-[10px] sm:text-sm">
                    Manager
                    <div className="absolute -top-7 -left-0">
                      <Image
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        width={15}
                        height={15}
                        src="/images/direction_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-none move-img w-7 h-7 sm:w-14 sm:h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/manager.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-fit custom-move-animation group flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-300 cursor-pointer">
                  <div className="move-img w-7 h-7 sm:w-14 sm:h-14 rounded-full relative">
                    <Image
                      className="w-full mx-auto h-full rounded-full object-cover"
                      fill
                      src="/images/developer.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-[#2A2A2A] relative group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 rounded-sm px-2.5 py-0.5 text-white text-[10px] sm:text-sm">
                    Developer
                    <div className="absolute -top-7 right-0">
                      <Image
                        className="w-4 h-4 sm:w-5 sm:h-5"
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
            <div className="w-full flex  order-1 sm:order-none flex-wrap  lg:flex-nowrap justify-between gap-5 lg:gap-14 sm:mt-8 lg:mt-11">
              <div className="w-full lg:w-3/5">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gradiant-custom">
                  Innovative IT Solutions for Your 
                  <span className="text-themetext">Business Growth</span>
                </h1>
              </div>
              <div className="w-full my-3 sm:my-0 lg:w-2/5">
                <span className="font-semibold sm:font-light text-base sm:text-xl">
                  We are Trusted by
                </span>
                <ul className="flex flex-wrap gap-5  sm:gap-10 sm:gap-y-6 mt-4 sm:mt-6 mb-6 sm:mb-9">
                  <li>
                    <Image
                      width={200}
                      height={200}
                      className="w-[150px] sm:w-[199px] h-auto sm:h-auto"
                      src="/images/trackday.svg"
                      alt="Trackday logo"
                    />
                  </li>
                  <li>
                    <Image
                      width={100}
                      height={100}
                      className="w-[100px] sm:w-auto h-auto sm:h-auto"
                      src="/images/slick.svg"
                      alt="Slick logo"
                    />
                  </li>
                  <li>
                    <Image
                      width={66}
                      height={66}
                      className="w-auto h-auto"
                      src="/images/recovery.svg"
                      alt="Recovery logo"
                    />
                  </li>
                  <li>
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] sm:w-auto h-auto sm:h-auto"
                      src="/images/pilot.svg"
                      alt="pilot logo"
                    />
                  </li>
                  <li>
                    <Image
                      width={150}
                      height={150}
                      className="w-[110px] h-auto sm:w-auto sm:h-auto"
                      src="/images/abbsi_new.svg"
                      alt="Abbsi logo"
                    />
                  </li>
                  <li>
                    <Image
                      width={100}
                      height={100}
                      className="w-[60px] h-auto sm:w-auto sm:h-auto"
                      src="/images/residence.svg"
                      alt="Residence logo"
                    />
                  </li>
                </ul>
                <Link href="/contact">
                  <button className=" btn-primary text-sm sm:text-base text-white font-normal  group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                    Build Your Success Story
                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                  </button>
                </Link>
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
