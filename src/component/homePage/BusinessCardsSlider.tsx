import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BussinessCardsSlider() {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <div className="w-full  rounded-2xl border-2 border-white/20 p-4 text-white group">
                <span className=" border-2 border-white/20 flex items-center justify-center rounded-xl w-14 h-14 sm:w-20 sm:h-20 overflow-hidden">
                  <img
                    className="brightness-0 invert size-full"
                    src="/images/sol_three.png"
                    alt=""
                  />
                </span>
                <h3 className="font-bold text-base sm:text-xl my-2.5 sm:my-4">
                  Agile, Collaborative Process
                </h3>
                <ul className="list-disc pl-4 space-y-1 sm:space-y-0 text-sm sm:text-base">
                  <li>Comprehensive analysis of your unique business needs.</li>
                  <li>Custom-built strategies designed to drive results.</li>
                  <li>Scalable solutions adaptable to future growth.</li>
                  <li>Focused on delivering measurable outcomes.</li>
                </ul>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-[50px]" />
      <CarouselNext className="top-[50px]" />
    </Carousel>
  );
}
