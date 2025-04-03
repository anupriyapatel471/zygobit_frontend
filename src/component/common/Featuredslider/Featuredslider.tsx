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
import { ChevronRight } from "lucide-react";

import Image from "next/image";
import playStore from "../../../../public/images/playstore.svg";
import appleStore from "../../../../public/images/applestore.svg";
import Link from "next/link";

import { formatDownloads, truncateText } from "@/lib/utils";
import { useProjects } from "@/hooks/dynamoDb/useProjects";
import Loader from "../Loader/Loader";

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
            <CarouselItem key={project.id}>
              <div>
                <Card className="border-none rounded-xl">
                  <CardContent className="p-0">
                    <div className="w-full bg-gradient-to-r from-orange-600 to-[#09090B] lg:bg-[linear-gradient(to_right,#EA580C_0%,#09090B_60%,#09090B_100%)] rounded-[20px] mt-9  sm:mt-11">
                      <div className="w-full flex justify-between items-center pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-12 py-8">
                        <div className="w-auto max-w-md text-white">
                          {/* <Image
                            className="w-28 sm:w-auto"
                            src={featured}
                            alt="Featured Slick"
                            width={150}
                            height={50}
                          /> */}
                          <h2 className="font-extrabold text-4xl sm:text-5xl tracking-wide">
                            {project.projectName}
                          </h2>

                          <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mt-4 ">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base sm:font-medium mt-3 sm:pr-5">
                            {project.description &&
                              truncateText(project.description, 100)}
                          </p>
                          <div className="w-64 my-4 grid grid-cols-2 gap-x-14 gap-y-4">
                            {project.androidDownloads && (
                              <div className="w-auto">
                                <span className="block text-sm sm:text-base mb-1">
                                  Android Downloads
                                </span>
                                <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                                  {formatDownloads(project.androidDownloads)}
                                </b>
                              </div>
                            )}
                            {project.iosDownloads && (
                              <div className="w-auto">
                                <span className="block text-sm sm:text-base mb-1">
                                  iOS Downloads
                                </span>
                                <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                                  {formatDownloads(project.iosDownloads)}
                                </b>
                              </div>
                            )}
                          </div>
                          <ul className="flex gap-3 mb-4">
                            <li>
                              <Link href="">
                                <Image
                                  src={playStore}
                                  alt="Playstore"
                                  width={100}
                                  height={30}
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <Image
                                  src={appleStore}
                                  alt="AppStore"
                                  width={100}
                                  height={30}
                                />
                              </Link>
                            </li>
                          </ul>
                          <Link href={`/case-study/${project.id}`}>
                            <button className=" btn-primary text-themetext font-normal  group bg-white duration-500 transition-all">
                              View Case Study
                              <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                            </button>
                          </Link>
                        </div>
                        <div className="hidden sm:inline w-auto max-w-md">
                          {project.mobileImage && (
                            <Image
                              className="h-[450px] w-[450px]"
                              src={project.mobileImage}
                              alt="Featured Mobile"
                              width={500}
                              height={800}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
