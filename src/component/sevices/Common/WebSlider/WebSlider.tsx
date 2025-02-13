import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import fireImg from "../../../../public/images/fire.png"

export function WebSlider() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="gap-12 lg:-ml-20 lg:pl-52">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="max-w-4xl">
            <div className="border-none">
              <Card className="border-none p-0 bg-transparent" >
                <CardContent className=" px-4 lg:p-0 flex  items-center justify-center">
                  <div className="w-full text-white max-w-4xl relative p-4 sm:py-10 sm:px-16 overflow-hidden rounded-2xl">
                    <div className="absolute top-0 left-0 w-full h-full p-1">
                      <Image fill src={fireImg} alt="Fire image" />
                    </div>
                    <h3 className="relative z-10 font-semibold text-2xl sm:text-2xl">
                      1. Time and Material Model
                    </h3>
                    <p className="relative z-10 text-sm sm:text-base my-5">
                      Being a leading custom web development company, we clearly
                      defined the scope. This model offers a set budget and
                      timeline. It&apos;s the perfect fit for businesses that focus
                      on small to mid-sized projects with minimal changes in
                      requirements.
                    </p>
                    <ul className="relative z-10 list-disc h-auto inline-block overflow-x-hidden bg-transparent pl-5 text-sm sm:text-base space-y-2">
                      <li>Best For Project With Fixed Features</li>
                      <li>Clear timeline and cost upfront.</li>
                      <li>Minimal risk of budget overruns</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="web_previous_btn" />
      <CarouselNext className="web_next_btn" />
    </Carousel>
  );
}
