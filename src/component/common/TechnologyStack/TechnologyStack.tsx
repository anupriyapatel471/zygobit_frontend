import React from "react";
import { BackgroundBeam } from "./Backgroundbeams/Backgroundbeams";
import { OrbitingCircle } from "./Orbitingcircle/Orbitingcircle";
import Image from "next/image";
import planet from "../../../../public/images/planet.svg";

const TechnologyStack = () => {
  return (
    <>
      {/* Technology stack */}
      <section data-aos="fade-up" className="w-full relative overflow-hidden">
        {/* <div className="w-full -z-10 absolute h-full top-0 left-0 ">
          <BackgroundBeam />
        </div> */}
        {/* <div className="w-full text-center mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradiant-custom">
            Technology Stack
          </h2>
        </div> */}
        {/* <div className="w-full">
          <OrbitingCircle />
          <div className="w-[740px] h-[515px] max-w-[400px] sm:max-w-full sm:h-[430px] lg:h-auto absolute bottom-0 left-1/2 -translate-x-1/2">
              <Image
              src={planet}
              alt="Planet"
              width={740} 
              height={515} 
              className="mx-auto h-[570px] sm:h-auto sm:object-contain relative sm:right-5"
              priority 
            />
          </div>
        </div> */}
        <div className="container">
          <div className="w-full text-center mb-5 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradiant-custom">
              Technology Stack
            </h2>
          </div>
          <div className="w-full flex  justify-between">
            <div className="relative  flex items-center h-[300px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className=" hover:mt-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/react.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px] mt-[200px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className=" hover:mb-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/flutter_new.png"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className=" hover:mt-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/white_css3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px] mt-[200px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className=" hover:mb-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/white_nodejs.png"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px] ">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className="hover:mt-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/white_html5.png"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px] mt-[200px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className=" hover:mb-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/white_js.png"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className=" hover:mt-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/white_angulalr.png"
                  alt=""
                />
              </div>
            </div>
            <div className="relative flex items-center h-[300px] mt-[200px]">
              <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img src="/images/line.png" alt="" />
              </span>
              <div className="hover:mb-14 transition-all duration-500 w-[100px] h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
                <img
                  className="w-12 h-12 brightness-0 invert"
                  src="/images/white_java.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;
