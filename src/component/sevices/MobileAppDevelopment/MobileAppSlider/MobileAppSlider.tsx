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
// import Image from "next/image";
import mobileApp from "../../../../../public/images/mobile_app.png"

export default function MobileAppSlider() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Card className="border-none rounded-xl">
                <CardContent className="w-full flex   items-center justify-center px-4 lg:p-0">
                  <div className="w-full bg-[#D9D9D90D] flex flex-wrap lg:flex-nowrap items-center rounded-2xl overflow-hidden">
                    <div className="w-full lg:w-2/5">
                    <Image
                        src={mobileApp} // Your image source
                        alt="Mobile App"
                        width={500}  // Set a fixed width
                        height={300} // Set a fixed height
                        className="w-full h-auto object-cover lg:h-full"
                      />
                      {/* <img className="w-full h-[300px] sm:h-[400px] object-cover lg:h-full" src="/images/mobile_app.png" alt="" /> */}
                    </div>
                    <div className="w-full lg:w-3/5  p-4 lg:pl-9">
                      <h3 className="font-semibold text-2xl sm:text-4xl text-white tracking-tighter">Android App Development</h3>
                      <p className="text-sm sm:text-lg lg:text-2xl text-white mt-3 lg:mt-4">
                        We specialize in Android app development using Java or
                        Kotlin, creating high-performance, feature-rich apps
                        optimized for Android devices. Our apps ensure seamless
                        compatibility and user experience across various Android
                        devices.
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
