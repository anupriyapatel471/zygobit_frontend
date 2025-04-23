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

export function ClientSlider() {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="ml-0 lg:ml-0  gap-9">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-[382px]"
          >
            <div className="border-[6px] border-[#FFFFFF38] relative bg-[#FEF8FF36] backdrop-blur-2xl h-[555px] rounded-3xl p-4">
              <CardContent className="flex  items-center justify-center p-0">
                <div className="w-full">
                  <p className="text-base text-white">
                    The scalability and performance have bee game changing
                    for our organization. Highly recommend to any growing business.
                  </p>
                  <div className="flex gap-1.5 max-w-[90%] mx-auto  w-full p-5 items-center absolute bottom-5 left-1/2 -translate-x-1/2 border border-[#F2F2F71A] bg-black/40 rounded-2xl">
                    <div className="w-14 h-14 overflow-hidden rounded-full relative">
                      <Image
                        fill
                        className="w-full h-full object-cover"
                        src="/images/client_img.png"
                        alt="client image"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium uppercase tracking-wide text-sm text-[#E0E0E0]">
                        john smith
                      </h4>
                      <p className="font-light text-sm">Founder & CEO, Kai</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:-left-20" />
      <CarouselNext className="lg:-right-[90px]" />
    </Carousel>
  );
}
