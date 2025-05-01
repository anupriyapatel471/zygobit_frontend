"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Loader } from "lucide-react";

import Image from "next/image";
import playStore from "../../../../public/images/playstore.svg";
import appleStore from "../../../../public/images/applestore.svg";
import Link from "next/link";

import { formatDownloads, truncateText } from "@/lib/utils";
import { useProjects } from "@/hooks/dynamoDb/useProjects";
export const revalidate = 60;

export default function FeaturedSlider() {
  const { data, loading } = useProjects();

  const projects = Array.isArray(data) ? data.slice(0, 5) : [];
  return loading ? (
    <Loader />
  ) : (
    <Carousel className="w-full">
      <CarouselContent className="flex lg:ml-0">
        {projects.length > 0 &&
          projects.map((project) => (
            <CarouselItem key={project.id} className="">
              <div>
                <Card className="border-none rounded-xl">
                  <CardContent className="p-0">
                    <div className="w-full   mt-5  sm:mt-11">
                      <div className="w-full flex justify-between items-start">
                        <div className="w-2/5 text-white">
                          <span className="font-light text-sm sm:text-base lg:text-lg block mb-2.5 text-themetext sm:mb-4 lg:mb-6">
                            Case Study
                          </span>
                          <h2 className="font-extrabold text-xl sm:text-2xl lg:text-[32px] tracking-wide">
                            {project.projectName}
                          </h2>
                          {/* <h3 className="font-semibold text-xl sm:text-2xl line-clamp-1 sm:line-clamp-2 lg:text-3xl mt-2 sm:mt-4 ">
                            {project.title}
                          </h3> */}
                          <p className="text-sm sm:text-base sm:font-medium mt-1.5 sm:pr-5">
                            {project.description &&
                              truncateText(project.description, 100)}
                          </p>
                          <div className="font-light text-base lg:text-lg mb-3">
                            Results
                          </div>
                          <div className="w-full my-4 flex items-center gap-4 sm:gap-5">
                            {project.androidDownloads && (
                              <div className="w-auto">
                                <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                                  {formatDownloads(project.androidDownloads)}
                                </b>
                                <span className="block text-sm sm:text-base font-light mbt-1">
                                  Android Downloads
                                </span>
                              </div>
                            )}
                            <div className="w-[0.5px] h-20 bg-white"></div>
                            {project.iosDownloads && (
                              <div className="w-auto">
                                <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                                  {formatDownloads(project.iosDownloads)}
                                </b>
                                <span className="block text-sm sm:text-base font-light mt-1">
                                  iOS Downloads
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <Link href={`/portfolio/${project.slug}`}>
                              <button className=" btn-primary  font-normal text-white group bg-gradient-custom duration-500 transition-all">
                                View More
                                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="hidden sm:inline w-3/5">
                          <div className="w-full relative h-[450px] ">
                            <Image
                              fill
                              className="w-full h-full rounded-lg object-cover"
                              src="/images/her_cal_bg.png"
                              alt="image"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {project.mobileImage && (
                                <Image
                                  className="h-[450px] w-[465px] object-contain"
                                  src={project.mobileImage}
                                  alt="Featured Mobile"
                                  width={500}
                                  height={800}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious  />
      <CarouselNext />
    </Carousel>
  );
}
