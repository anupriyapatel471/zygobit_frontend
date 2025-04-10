/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BusinessCardsProps {
  id: number;
  img: string;
  title: string;
  items: string[];
}

export function BussinessCardsSlider({
  solutions,
}: {
  solutions: BusinessCardsProps[];
}) {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {solutions &&
          solutions.map((solution) => (
            <CarouselItem key={solution.id}>
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
                    {solution.title}
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 sm:space-y-0 text-sm sm:text-base">
                    {solution.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
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
