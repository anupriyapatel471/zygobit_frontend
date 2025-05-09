/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/TechnologyTabs";
import Image from "next/image";

interface StebTabProps {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

const StebTab = ({ stebTabData }: { stebTabData: StebTabProps[] }) => {
  return (
    <section
      data-aos="fade-up"
      className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-20 bg-white">
      <div className="container remove-bg">
        <div className="w-full sm:text-center mb-5 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black lg:text-[38px]">
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
            defaultValue={stebTabData[0].label}
            className="w-full flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10"
          >
            {/* Tab Triggers */}
            <TabsList className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 w-full lg:w-[160px] gap-5 text-black">
              {stebTabData.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.label}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {stebTabData.map((tab) => (
              <TabsContent key={tab.id} value={tab.label}>
                <div className="w-full bg-[#FF71461A] rounded-2xl lg:h-[455px] p-4 lg:p-10">
                  <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center">
                    <div className="w-[315px] h-[250px] sm:h-[330px] lg:h-[390px] relative">
                      <Image
                        fill
                        className="rounded-2xl object-cover"
                        src={tab.image}
                        alt={tab.title}
                      />
                    </div>
                    <div className="w-full sm:w-[calc(100%-315px)] flex flex-col gap-2 sm:gap-5 text-black">
                      <h3 className="font-semibold text-xl sm:text-2xl lg:text-[32px]">
                        {tab.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StebTab;
