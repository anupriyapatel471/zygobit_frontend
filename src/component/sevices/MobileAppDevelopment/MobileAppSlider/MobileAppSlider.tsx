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
import cardsData from "../../../../utils/content/mobileAppSlider/mobileAppSlider.json";

export default function MobileAppSlider() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {cardsData.map((card, index: number) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Card className="border-none rounded-xl">
                <CardContent className="w-full flex   items-center justify-center px-4 lg:p-0">
                  <div className="w-full bg-[#D9D9D90D] flex flex-wrap lg:flex-nowrap items-center rounded-2xl overflow-hidden">
                    <div className="w-full lg:w-2/5">
                      <Image
                        src={card.image}
                        alt="Mobile App"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover lg:h-full"
                      />
                    </div>
                    <div className="w-full lg:w-3/5  p-4 lg:pl-9">
                      <h3 className="font-semibold text-2xl sm:text-4xl text-white tracking-tighter">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-lg lg:text-2xl text-white mt-3 lg:mt-4">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="custom-pre" />
      <CarouselNext className="custom-left" />
    </Carousel>
  );
}
