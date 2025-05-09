import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EngagementModel {
  title: string;
  description: string;
  points: string[];
  image?: string;
}

export default function WebSliderSecond({
  engagementModels,
}: {
  engagementModels: EngagementModel[];
}) {
  return (
    <Carousel className="pr-4 sm:pr-0 w-full">
      <CarouselContent className="pb-3 lg:pb-0 lg:ml-0 gap-5 lg:gap-10">
        {engagementModels.map((model, index) => (
          <CarouselItem key={index} className="max-w-[600px] lg:max-w-[580px]">
            <div className="border-none">
              <Card className="border-[#C4C4C4] border p-0 bg-white rounded-2xl">
                <CardContent className="p-0 sm:px-4 lg:p-0 flex  items-center justify-center">
                  <div className="w-full h-[258px] sm:h-auto text-black relative p-4 sm:p-5 overflow-hidden rounded-2xl">
                    <h3 className="relative z-10 font-semibold text-black text-xl sm:text-2xl line-clamp-1">
                      {model.title}
                    </h3>
                    <p className="relative z-10 text-sm sm:text-base text-[#6B6B6B] sm:leading-8 sm:min-h-16 lg:min-h-fit mt-2  mb-2 line-clamp-2">
                      {model.description}
                    </p>
                    <ul className="text-[#6B6B6B] relative z-10 list-disc h-auto inline-block overflow-x-hidden bg-transparent pl-5 text-sm sm:text-base space-y-2">
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
      <CarouselPrevious className="border border-orange-600 web_previous_btn" />
      <CarouselNext className="border border-orange-600 web_next_btn" />
    </Carousel>
  );
}
