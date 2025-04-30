import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/TechnologyTabs";
import Image from "next/image";
import technologyData from "../../../utils/content/technologyStack.json";

const TechnologyStack = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-20 bg-white"
      >
        <div className="container remove-bg">
          <div className="w-full text-center mb-5 sm:mb-36 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl  font-bold text-black lg:text-[38px] ">
              Technology Stack
            </h2>
          </div>
          <div className="w-full">
            <Tabs
              defaultValue="Frontend"
              className="w-full flex items-center gap-10"
            >
              <TabsList className="grid grid-cols-1 w-[240px] gap-10 text-black">
                <TabsTrigger value="Frontend">Frontend</TabsTrigger>
                <TabsTrigger value="Backend">Backend</TabsTrigger>
                <TabsTrigger value="Mobile">Mobile</TabsTrigger>
                <TabsTrigger value="Microsoft">Microsoft</TabsTrigger>
                <TabsTrigger value="AL & ML">AL & ML</TabsTrigger>
                <TabsTrigger value="Devops">Devops</TabsTrigger>
              </TabsList>
              {Object.entries(technologyData).map(([category, techList]) => (
                <TabsContent key={category} value={category}>
                  <div className="w-full bg-[#FF71461A] rounded-2xl h-[650px] p-10">
                    <div className="w-full grid grid-cols-5 gap-y-10 gap-[70px]">
                      {techList.map((tech, i: number) => (
                        <div
                          key={i}
                          className="w-fit flex flex-col items-center justify-center gap-4"
                        >
                          <div>
                            <Image
                              width={100}
                              height={100}
                              className="w-24 h-24"
                              src={tech.icon}
                              alt="icon"
                            />
                          </div>
                          <span className="text-black text-base sm:text-lg">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          {/* <TechnologySlider /> */}
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;
