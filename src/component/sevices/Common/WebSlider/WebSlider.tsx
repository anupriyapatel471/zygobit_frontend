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
}

export function WebSlider({
  engagementModels,
}: {
  engagementModels: EngagementModel[];
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="gap-12 lg:-ml-20 lg:pl-52">
        {engagementModels.map((model, index) => (
          <CarouselItem key={index} className="max-w-4xl">
            <div className="border-none">
              <Card className="border-none p-0 bg-transparent">
                <CardContent className=" px-4 lg:p-0 flex  items-center justify-center">
                  <div className="w-full text-white max-w-4xl relative p-4 sm:py-10 sm:px-16 overflow-hidden rounded-2xl">
                    <div className="absolute top-0 left-0 w-full h-full p-1">
                      <Image fill src={fireImg} alt="Fire image" />
                    </div>
                    <h3 className="relative z-10 font-semibold text-2xl sm:text-2xl">
                      {model.title}
                    </h3>
                    <p className="relative z-10 text-sm sm:text-base my-5">
                      {model.description}
                    </p>
                    <ul className="relative z-10 list-disc h-auto inline-block overflow-x-hidden bg-transparent pl-5 text-sm sm:text-base space-y-2">
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
