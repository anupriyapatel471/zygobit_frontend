/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import Loader from "../common/Loader/Loader";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
// import { formatDownloads } from "@/lib/utils";

const client = generateClient();

interface Project {
  backgroundImage: string;
  slug: any;
  technologyImages: ReactNode;
  id?: string | null;
  title: string | null;
  description: string | null;
  projectName: string | null;
  mobileImage: string | null;
  androidDownloads: number | null;
  iosDownloads: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  clientLocation: string | null;
  developmentTime: string | null;
  targetUsers: string | null;
  subDescription: string | null;
  subTitle: string | null;
  technologyDescription: string | null;
  developmentDescription: string | null;
  evaluationDescription: string | null;
  evaluationImage: string | null;
  category?: string | null;
  googlePlayAppLink: string;
  appStoreAppLink: string;
}

const PortfolioProjects = () => {
  useAmplifyConfig();
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await (client.models as any).Projects.list();
        setData(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  const categories = Array.from(
    new Set<string>(data.map((project) => project.category || "Uncategorized"))
  );

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full relative overflow-hidden mt-10 mb-14 sm:mb-20">
      <div className="container remove-bg">
        <div className="w-full">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className=" gap-5 grid lg:flex lg:justify-center lg:items-center  w-full grid-cols-2 lg:grid-cols-5 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  className="justify-center "
                  value={category}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-10">
                  {data
                    .filter(
                      (project) =>
                        (project.category || "Uncategorized") === category
                    )
                    .map((project, index) => {
                      const isEven = index % 2 === 1;
                      return (
                        <div
                          key={project.id}
                          className="w-full flex flex-wrap lg:flex-nowrap group justify-between items-center gap-4 sm:gap-5 lg:gap-10 p-4 lg:p-10 relative bg-white z-10 rounded-2xl overflow-hidden"
                        >
                          {isEven ? (
                            <>
                              {/* 45% FIRST */}
                              {/* 45% SECOND */}
                              <div className="order-2 lg:order-none w-full lg:w-[45%] flex justify-between items-start flex-col gap-5 sm:gap-5 lg:gap-[126px]">
                                <div>
                                  <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-2 sm:border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                                    {project.projectName}
                                  </div>
                                  <p className="line-clamp-4 sm:line-clamp-5 text-sm  lg:text-lg text-black mt-1 sm:mt-2 lg:mt-3.5">
                                    {project.description}
                                  </p>
                                  {/* <div className="mt-6 flex gap-5 items-center">
                                    <div className="w-fit flex flex-col">
                                      <b className="text-2xl sm:text-3xl text-black">
                                        {project.androidDownloads &&
                                          formatDownloads(
                                            project?.androidDownloads
                                          )}
                                      </b>
                                      <span className="font-light text-base sm:text-lg text-black">
                                        App downloads
                                      </span>
                                    </div>
                                    <div className="w-[1px] h-20 bg-black"></div>
                                    <div className="w-fit flex gap-2.5 flex-col">
                                      <Link
                                        href={project.googlePlayAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/playstore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                      <Link
                                        href={project?.appStoreAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/applestore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                    </div>
                                  </div> */}
                                </div>
                                <Link
                                  href={`/portfolio/${project.slug}`}
                                  className="cursor-pointer"
                                >
                                  <button className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                                    View Case Study
                                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                                  </button>
                                </Link>
                              </div>

                              {/* 55% SECOND */}
                              <div className="order-1 lg:order-none w-full lg:w-[55%] relative">
                                <div className="relative w-full h-[265px] sm:h-[370px] lg:h-[500px]">
                                  <Image
                                    fill
                                    src={project.backgroundImage}
                                    alt="image"
                                  />
                                  <div className="w-full lg:w-[465px] h-[170px] sm:h-[320px] lg:h-[419px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {project.mobileImage && (
                                      <img
                                        className="w-full h-full object-contain"
                                        src={project.mobileImage}
                                        alt="mobile image"
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* 55% FIRST */}
                              <div className="order-1 lg:order-none w-full lg:w-[55%] relative">
                                <div className="relative w-full h-[265px] sm:h-[370px] lg:h-[500px]">
                                  <Image
                                    fill
                                    src={project.backgroundImage}
                                    alt="image"
                                  />
                                  <div className="w-full lg:w-[465px] h-[170px] sm:h-[320px] lg:h-[419px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {project.mobileImage && (
                                      <img
                                        className="w-full h-full object-contain"
                                        src={project.mobileImage}
                                        alt="mobile image"
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* 45% SECOND */}
                              <div className="order-2 lg:order-none w-full lg:w-[45%] flex justify-between items-start flex-col gap-5 sm:gap-5 lg:gap-[126px]">
                                <div>
                                  <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-2 sm:border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                                    {project.projectName}
                                  </div>
                                  <p className="line-clamp-4 sm:line-clamp-5 text-sm  lg:text-lg text-black mt-1 sm:mt-2 lg:mt-3.5">
                                    {project.description}
                                  </p>
                                  {/* <div className="mt-6 flex gap-5 items-center">
                                    <div className="w-fit flex flex-col">
                                      <b className="text-2xl sm:text-3xl text-black">
                                        {project.androidDownloads &&
                                          formatDownloads(
                                            project?.androidDownloads
                                          )}
                                      </b>
                                      <span className="font-light text-base sm:text-lg text-black">
                                        App downloads
                                      </span>
                                    </div>
                                    <div className="w-[1px] h-20 bg-black"></div>
                                    <div className="w-fit flex gap-2.5 flex-col">
                                      <Link
                                        href={project.googlePlayAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/playstore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                      <Link
                                        href={project?.appStoreAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/applestore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                    </div>
                                  </div> */}
                                </div>
                                <Link
                                  href={`/portfolio/${project.slug}`}
                                  className="cursor-pointer"
                                >
                                  <button className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                                    View Case Study
                                    <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                                  </button>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
