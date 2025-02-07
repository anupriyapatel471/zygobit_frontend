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

export default function FeaturedSlider() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="border-none rounded-xl">
                <CardContent className="p-0">
                  <div className="w-full bg-[linear-gradient(to_right,#EA580C_0%,#09090B_60%,#09090B_100%)] rounded-[20px] mt-9  sm:mt-11">
                    <div className="w-full flex justify-between items-center pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-12 py-8">
                      <div className="w-auto max-w-md text-white">
                        <img className="w-28 sm:w-auto" src="/images/featured_slick.svg" alt="" />
                        <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mt-4 ">
                          Food Delivery App
                        </h3>
                        <p className="text-sm sm:text-base sm:font-medium mt-3 sm:pr-5">
                          Using the latest technology and industry expertise, we
                          built top-end Android and iOS-based applications that
                          add value to the business and user experience.
                        </p>
                        <div className="w-64 my-4 grid grid-cols-2 gap-x-14 gap-y-4">
                          <div className="w-auto">
                            <span className="block text-sm sm:text-base mb-1">
                              Downloads
                            </span>
                            <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                              10k
                            </b>
                          </div>
                          <div className="w-auto">
                            <span className="block text-sm sm:text-base mb-1">
                              Downloads
                            </span>
                            <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                              10k
                            </b>
                          </div>
                          <div className="w-auto">
                            <span className="block text-sm sm:text-base mb-1">
                              Downloads
                            </span>
                            <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                              10k
                            </b>
                          </div>
                          <div className="w-auto">
                            <span className="block text-sm sm:text-base mb-1">
                              Downloads
                            </span>
                            <b className="font-semibold tracking-tighter text-xl sm:text-2xl">
                              10k
                            </b>
                          </div>
                        </div>
                        <ul className="flex gap-3 mb-4">
                          <li>
                            <a href="">
                              <img src="/images/playstore.svg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img src="/images/applestore.svg" alt="" />
                            </a>
                          </li>
                        </ul>
                        <button className=" btn-primary text-themetext font-normal  group bg-white duration-500 transition-all">
                          View Case Study{" "}
                          <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                        </button>
                      </div>
                      <div className="hidden sm:inline w-auto max-w-xl">
                        <img
                          className="w-full"
                          src="/images/featured_mobile.png"
                          alt=""
                        />
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
