/* eslint-disable @next/next/no-img-element */
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClientSaysCards = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <CardContent className="mt-14 w-full h-full flex flex-col justify-center items-center  text-center  p-6 text-white">
                  <div className="ml-12 w-fit mr-auto mb-3">
                    <img className="" src="images/qoutus.png" alt="" />
                  </div>
                  <p className="text-sm sm:text-base mb-8 max-w-xs mx-auto">
                    The scalability and performance have bee game changing for
                    our organization. Highly recommend to any growing business.
                  </p>
                  <div className="w-12 h-12 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full mx-auto "
                      src="/images/profile.png"
                      alt=""
                    />
                  </div>
                  <h4 className="font-medium text-sm text-[#E0E0E0] mt-3 mb-1">
                    john smith
                  </h4>
                  <span className="font-[300] text-sm">
                    Founder of Awesomeux Technology
                  </span>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent hover:bg-transparent border-none sm:w-auto sm:h-auto sm:top-auto sm:bottom-[82px] sm:left-12 lg:left-16 sm:right-auto" />
        <CarouselNext className="bg-transparent hover:bg-transparent border-none sm:w-auto sm:h-auto sm:left-auto sm:right-12 lg:right-16 sm:top-auto sm:bottom-[82px]" />
      </Carousel>
    </div>
  );
};
export default ClientSaysCards;
