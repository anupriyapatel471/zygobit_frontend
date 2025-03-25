"use client";
import React from "react";
import Image from "next/image";
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const RippleBg = dynamic(() => import("@/component/common/Ripplebg/Ripplebg"));
const TrustedAcross = dynamic(
  () => import("@/component/common/TrustedAcross/TrustedAcross")
);
import { useProjects } from "@/hooks/dynamoDb/useProjects";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import Loader from "@/component/common/Loader/Loader";

const CaseStudy = () => {
  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;
  const { data: projectData, loading } = useProjects(projectId);
  const project = Array.isArray(projectData) ? projectData[0] : projectData;

  return loading ? (
    <Loader />
  ) : (
    project && (
      <>
        <section className="w-full relative">
          <div className="w-full h-[440px] sm:h-[550px] lg:h-[900px]">
            <Image
              className="w-full"
              src="/images/case_study_banner.png"
              fill
              alt="case_study_banner"
            />
          </div>
          <div className="w-full absolute top-20 sm:top-28 left-0 px-4 lg:px-24 py-5 lg:py-14">
            <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center">
              <div className="w-full sm:w-full lg:w-[60%]">
                <div className="w-auto max-w-2xl">
                  <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-shadow-2xl  text-gradiant-custom">
                    {project.title}
                  </h1>
                  <p className="text-sm sm:text-lg lg:text-xl mt-2.5">
                    {project.description}
                  </p>
                </div>
                <div className="w-auto mt-6 sm:mt-16">
                  <span className="block sm:font-bold text-lg mb-7"></span>
                </div>
              </div>
              <div className="mt-6 w-full sm:w-full lg:w-[44%] lg:mt-5 hidden lg:inline text-right">
                <Image
                  className="ml-auto"
                  src="/images/case_banner.png"
                  alt="case_banner"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="w-full hidden sm:inline px-4 lg:px-24 absolute -bottom-[170px] left-1/2 -translate-x-1/2 rounded-lg">
            <div className="w-full border border-[#09090B33] overflow-hidden rounded-lg bg-[#fafafa12] px-24  ">
              <div className="w-full  z-[1111]  max-w-sm mx-auto rounded-lg">
                <RippleBg numCircles={10} />
              </div>
              <div className=" w-full px-6 lg:px-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MagicCardDemo />
              </div>
            </div>
          </div>
        </section>

        <TrustedAcross />

        <section className="w-full text-left sm:text-center mt-12 sm:mt-20 lg:mt-32 mb-8 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
              Technologies Leveraged
            </h2>
            <p className="sm:font-medium text-sm sm:text-lg mt-3 sm:mt-6">
              {project.technologyDescription}
            </p>
            <div className="w-full mt-8 lg:mt-14 grid grid-cols-2 sm:flex justify-center items-center gap-5 sm:gap-24">
              <div className="w-full sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-0 rounded-3xl flex items-center justify-center border-[5px] border-white/20 relative">
                <Image
                  src="/images/case_flutter.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-0 rounded-3xl flex items-center justify-center border-[5px] border-white/20 relative">
                <Image
                  src="/images/case_go.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

        <section className="w-full overflow-hidden">
          <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-8 sm:gap-16 px-4 lg:px-24">
            <div className="w-full lg:w-1/2 text-left sm:text-center lg:text-left">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
                Project Outcomes : Evaluation
              </h2>
              <p className="sm:font-medium text-sm sm:text-lg mt-3 sm:mt-6">
                {project.evaluationDescription}
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full sm:w-[496px] mx-auto relative  bg-[#EA580C] h-[350px] sm:h-[440px] rounded-2xl">
                <Image
                  className="w-full h-full object-cover rounded-2xl relative z-[11]"
                  src="/images/tia_img.png"
                  alt=""
                  fill
                />
                <div className="absolute hidden sm:inline top-10 opacity-70 -rotate-[15deg] z-10 left-0 w-[355px] h-[400px] bg-[#EA580C] rounded-2xl shadow-[0_0_48px_0_#EA580C99]"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
};

export default CaseStudy;
