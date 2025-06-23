"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Loader } from "lucide-react";

import Image from "next/image";

import Link from "next/link";

import { truncateText } from "@/lib/utils";
import { useProjects } from "@/hooks/dynamoDb/useProjects";
export const revalidate = 60;

export default function FeaturedSlider() {
  const { data, loading } = useProjects();

  const [current, setCurrent] = React.useState(0);

  const [api, setApi] = React.useState<CarouselApi>();
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const projects = Array.isArray(data) ? data.slice(0, 5) : [];
  return loading ? (
    <Loader />
  ) : (
    <Carousel setApi={setApi} className="w-full relative">
      <CarouselContent className="flex lg:ml-0">
        {projects.length > 0 &&
          projects.map((project) => (
            <CarouselItem key={project.id} className="">
              <div>
                <Card className="border-none rounded-xl">
                  <CardContent className="p-0">
                    <div className="w-full   mt-5  sm:mt-11">
                      <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 justify-between items-start xl:px-10">
                        <div className="order-2 sm:order-2 w-full sm:w-1/2 lg:w-2/5 h-full xl:h-[450px] gap-4 sm:gap-20 lg:gap-[75px] flex flex-col justify-between  text-white">
                          <div>
                            <span className="font-light text-sm sm:text-base lg:text-lg block mb-2 text-themetext sm:mb-4 lg:mb-6">
                              Case Study
                            </span>
                            <h2 className="font-extrabold text-xl sm:text-2xl lg:text-[32px] tracking-wide">
                              {project.projectName}
                            </h2>
                            <p className="text-sm sm:text-base sm:font-medium mt-1.5 sm:pr-5 min-h-[140px] sm:min-h-fit">
                              {project.description &&
                                truncateText(project.description, 300)}
                            </p>
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
                        <div className="order-1 sm:order-2 inline w-full sm:w-1/2 lg:w-3/5">
                          <div className="w-full relative h-[250px] sm:h-[400px] lg:h-[450px] ">
                            {project.backgroundImage && (
                              <Image
                                fill
                                className="w-full h-full rounded-lg object-cover"
                                src={project?.backgroundImage}
                                alt="image"
                              />
                            )}
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
      <span className="text-base sm:text-xl absolute bottom-1.5 sm:bottom-0 right-[35px] sm:right-auto left-auto sm:left-[32%] font-normal">
        {current}/5
      </span>

      <CarouselPrevious className="featured-left-btn featured-btn" />
      <CarouselNext className="featured-right-btn featured-btn" />
    </Carousel>
  );
}
