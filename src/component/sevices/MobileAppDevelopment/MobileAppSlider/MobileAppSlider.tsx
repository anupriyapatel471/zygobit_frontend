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
      <CarouselContent className="lg:ml-0">
        {cardsData.map((card, index: number) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Card className="border-none rounded-xl bg-transparent">
                <CardContent className="w-full flex bg-transparent  items-center justify-center p-0 lg:p-0">
                  <div className="w-full  flex flex-col items-center justify-center sm:text-center  overflow-hidden">
                    <div className="w-full lg:w-full">
                      <Image
                        src={card.image}
                        alt="Mobile App"
                        width={500}
                        height={300}
                        className="w-[400x] mx-auto h-[270px] object-contain"
                      />
                    </div>
                    <div className="w-full lg:w-full  sm:text-center">
                      <h3 className="font-semibold text-xl sm:text-2xl sm:leading-[55px] text-white tracking-tighter">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white mt-2 line-clamp-4 lg:mt-2.5">
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
      <CarouselPrevious className="lg:-left-[180px] lg:-bottom-6 lg:top-auto" />
      <CarouselNext className="lg:-left-[110px] lg:-bottom-6 lg:top-auto" />
    </Carousel>
  );
}
