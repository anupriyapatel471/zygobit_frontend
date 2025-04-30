/* eslint-disable @next/next/no-img-element */
//
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/TechnologyTabs";
import Image from "next/image";

const TechnologyStack = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-20 bg-white"
      >
        <div className="container remove-bg">
          <div className="w-full text-center mb-5 sm:mb-9 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl  font-bold text-black lg:text-[38px] ">
              Technology Stack
            </h2>
          </div>
          <div className="w-full">
            <Tabs
              defaultValue="Frontend"
              className="w-full flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-10"
            >
              <TabsList className="grid grid-cols-2 sm:grid-cols-1 w-full sm:w-[240px] gap-5 sm:gap-10 text-black">
                <TabsTrigger className="text-black" value="Frontend">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="Backend">Backend</TabsTrigger>
                <TabsTrigger value="Mobile">Mobile</TabsTrigger>
                <TabsTrigger value="Microsoft">Microsoft</TabsTrigger>
                <TabsTrigger value="AL & ML">AL & ML</TabsTrigger>
                <TabsTrigger value="Devops">Devops</TabsTrigger>
              </TabsList>
              <TabsContent value="Frontend">
                <div className="w-full bg-[#FF71461A] rounded-2xl sm:h-[650px] p-4 sm:p-10">
                  <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-[70px]">
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_react.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_angular.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_nextjs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_vuejs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_js.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_html.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_css.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_metor.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_ember.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Backend">
                <div className="w-full bg-[#FF71461A] rounded-2xl sm:h-[650px] p-10">
                  <div className="w-full grid grid-cols-5 gap-y-10 gap-[70px]">
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_react.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_angular.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_nextjs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_vuejs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_js.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_html.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Mobile">
                <div className="w-full bg-[#FF71461A] rounded-2xl sm:h-[650px] p-10">
                  <div className="w-full grid grid-cols-5 gap-y-10 gap-[70px]">
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_react.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_angular.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_nextjs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_vuejs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_js.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_html.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Microsoft">
                <div className="w-full bg-[#FF71461A] rounded-2xl sm:h-[650px] p-10">
                  <div className="w-full grid grid-cols-5 gap-y-10 gap-[70px]">
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_react.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_angular.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_nextjs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_vuejs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_js.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_html.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="AL & ML">
                <div className="w-full bg-[#FF71461A] rounded-2xl sm:h-[650px] p-10">
                  <div className="w-full grid grid-cols-5 gap-y-10 gap-[70px]">
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_react.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_angular.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_nextjs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_vuejs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_js.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_html.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Devops">
                <div className="w-full bg-[#FF71461A] rounded-2xl sm:h-[650px] p-10">
                  <div className="w-full grid grid-cols-5 gap-y-10 gap-[70px]">
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_react.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_angular.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_nextjs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_vuejs.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_js.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                    <div className="w-full sm:w-fit flex flex-col items-center justify-center gap-4">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          className="w-24 h-24"
                          src="/images/new_html.svg"
                          alt="icon"
                        />
                      </div>
                      <span className="text-black text-base sm:text-lg">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          {/* <TechnologySlider /> */}
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;
