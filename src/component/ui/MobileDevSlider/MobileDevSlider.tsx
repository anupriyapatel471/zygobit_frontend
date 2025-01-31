import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MobileAppCards } from "../../common/mobileAppCard/mobileAppCard";
import Image from "next/image";

export default function MobiledevSlider() {
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Card className="border border-white rounded-xl">
                <CardContent className="w-full flex  items-center justify-center p-0">
                  <div className="w-full bg-[#D9D9D90D] p-2 sm:py-5 lg:py-10 sm:px-5 lg:px-14 flex flex-wrap sm:flex-nowrap items-center rounded-2xl overflow-hidden">
                    <div className="w-full sm:w-2/5">
                      <MobileAppCards/>
                    </div>
                    <div className="w-full sm:w-3/5 p-2 sm:p-0 sm:pl-9">
                      <h3 className="font-semibold text-2xl sm:text-4xl text-white tracking-tighter">
                        Proven Expertise
                      </h3>
                      <p className="text-sm sm:text-lg lg:text-base max-w-md text-white mt-2 sm:mt-4">
                        With over 11 years of industry experience and 3000+
                        successful projects, we have a proven track record of
                        delivering high-quality mobile apps that drive results.
                      </p>
                      <div className="w-full grid gap-5 lg:gap-11 grid-cols-1 sm:grid-cols-2 mt-5 lg:mt-12">
                        <div className="w-full">
                          {/* <img className="w-full rounded-2xl h-[250px] sm:h-[300px] lg:h-[350px]" src="/images/laptop.png" alt="" /> */}
                        </div>
                        <Image
                              className="rounded-2xl"
                              src="/images/laptop.png"
                              alt="Laptop Image"
                              // height={}
                              // width={}
                               />
                        <div className="w-full">
                          {/* <img className="w-full rounded-2xl h-[250px] sm:h-[300px] lg:h-[350px]" src="/images/laptop_two.png" alt="" /> */}
                          <Image
                              className="rounded-2xl"
                              src="/images/laptop_two.png"
                              alt="Laptop Two Image"
                              // height={}
                              // width={}
                            />
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
      <CarouselPrevious className="custom-pre previous-btn" />
      <CarouselNext className="custom-left next-btn" />
    </Carousel>
  );
}
