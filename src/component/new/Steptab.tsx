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

const StebTab = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-20 bg-white"
      >
        <div className="container remove-bg">
          <div className="w-full sm:text-center mb-5 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl  font-bold text-black lg:text-[38px] ">
              Transforming Ideas into Scalable, High-Performance Applications
            </h2>
            <p className="sm:font-medium text-sm sm:text-lg lg:text-xl mx-auto mt-2 sm:mt-5 text-black">
              We offer end-to-end custom mobile app development services to help
              businesses innovate and succeed in the digital era. Our structured
              process ensures the creation of user-centric, high-quality
              applications tailored to your unique needs.
            </p>
          </div>
          <div className="w-full">
            <Tabs
              defaultValue="Frontend"
              className="w-full flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10"
            >
              <TabsList className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 w-full lg:w-[160px] gap-5 text-black">
                <TabsTrigger className="text-black" value="Frontend">
                  Step 1
                </TabsTrigger>
                <TabsTrigger value="Backend">Step 2</TabsTrigger>
                <TabsTrigger value="Mobile">Step 3</TabsTrigger>
                <TabsTrigger value="Microsoft">Step 4</TabsTrigger>
                <TabsTrigger value="AL & ML">Step 5</TabsTrigger>
              </TabsList>
              <TabsContent value="Frontend">
                <div className="w-full bg-[#FF71461A] rounded-2xl lg:h-[455px] p-4 lg:p-10">
                  <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center">
                    <div className="w-[315px] h-[250px] sm:h-[330px] lg:h-[390px] relative">
                      <Image
                        fill
                        className="rounded-2xl object-cover"
                        src="/images/discover_new.png"
                        alt=""
                      />
                    </div>
                    <div className="w-full sm:w-[calc(100%-315px)] flex flex-col gap-2 sm:gap-5 text-black">
                      <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px]">
                        Discovery Phase
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        We begin by understanding your vision, business
                        objectives, and target audience. This phase involves
                        brainstorming, competitor analysis, and gathering key
                        insights to lay a strategic roadmap for your app
                        development journey.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Backend">
              <div className="w-full bg-[#FF71461A] rounded-2xl lg:h-[455px] p-4 lg:p-10">
                  <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center">
                    <div className="w-[315px] h-[250px] sm:h-[330px] lg:h-[390px] relative">
                      <Image
                        fill
                        className="rounded-2xl object-cover"
                        src="/images/discover_new.png"
                        alt=""
                      />
                    </div>
                    <div className="w-full sm:w-[calc(100%-315px)] flex flex-col gap-2 sm:gap-5 text-black">
                      <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px]">
                        Lorem Ipsum
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        We begin by understanding your vision, business
                        objectives, and target audience. This phase involves
                        brainstorming, competitor analysis, and gathering key
                        insights to lay a strategic roadmap for your app
                        development journey.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Mobile">
              <div className="w-full bg-[#FF71461A] rounded-2xl lg:h-[455px] p-4 lg:p-10">
                  <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center">
                    <div className="w-[315px] h-[250px] sm:h-[330px] lg:h-[390px] relative">
                      <Image
                        fill
                        className="rounded-2xl object-cover"
                        src="/images/discover_new.png"
                        alt=""
                      />
                    </div>
                    <div className="w-full sm:w-[calc(100%-315px)] flex flex-col gap-2 sm:gap-5 text-black">
                      <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px]">
                        Plan Phase
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        We begin by understanding your vision, business
                        objectives, and target audience. This phase involves
                        brainstorming, competitor analysis, and gathering key
                        insights to lay a strategic roadmap for your app
                        development journey.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Microsoft">
              <div className="w-full bg-[#FF71461A] rounded-2xl lg:h-[455px] p-4 lg:p-10">
                  <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center">
                    <div className="w-[315px] h-[250px] sm:h-[330px] lg:h-[390px] relative">
                      <Image
                        fill
                        className="rounded-2xl object-cover"
                        src="/images/discover_new.png"
                        alt=""
                      />
                    </div>
                    <div className="w-full sm:w-[calc(100%-315px)] flex flex-col gap-2 sm:gap-5 text-black">
                      <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px]">
                        Research Phase
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        We begin by understanding your vision, business
                        objectives, and target audience. This phase involves
                        brainstorming, competitor analysis, and gathering key
                        insights to lay a strategic roadmap for your app
                        development journey.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="AL & ML">
              <div className="w-full bg-[#FF71461A] rounded-2xl lg:h-[455px] p-4 lg:p-10">
                  <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center">
                    <div className="w-[315px] h-[250px] sm:h-[330px] lg:h-[390px] relative">
                      <Image
                        fill
                        className="rounded-2xl object-cover"
                        src="/images/discover_new.png"
                        alt=""
                      />
                    </div>
                    <div className="w-full sm:w-[calc(100%-315px)] flex flex-col gap-2 sm:gap-5 text-black">
                      <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px]">
                        Content Phase
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        We begin by understanding your vision, business
                        objectives, and target audience. This phase involves
                        brainstorming, competitor analysis, and gathering key
                        insights to lay a strategic roadmap for your app
                        development journey.
                      </p>
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

export default StebTab;
