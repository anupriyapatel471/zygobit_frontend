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
import fireImg from "../../../../../public/images/fire.png";

interface EngagementModel {
  title: string;
  description: string;
  points: string[];
  image?: string;
}

export function WebSlider({
  engagementModels,
}: {
  engagementModels: EngagementModel[];
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent className=" lg:ml-0 gap-10">
        {engagementModels.map((model, index) => (
          <CarouselItem key={index} className="max-w-[500px]">
            <div className="border-none">
              <Card className="border-[#686868] border p-0 bg-[#1E1E1E] rounded-2xl">
                <CardContent className=" px-4 lg:p-0 flex  items-center justify-center">
                  <div className="w-full text-white relative p-4 sm:p-5 overflow-hidden rounded-2xl">
                    <h3 className="relative z-10 font-semibold text-2xl sm:text-2xl">
                      {model.title}
                    </h3>
                    <p className="relative z-10 text-sm sm:text-base sm:leading-8 my-4">
                      {model.description}
                    </p>
                    <ul className=" relative z-10 list-disc h-auto inline-block overflow-x-hidden bg-transparent pl-5 text-sm sm:text-base space-y-2">
                      {model.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
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
