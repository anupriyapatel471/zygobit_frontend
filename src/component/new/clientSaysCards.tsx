/* eslint-disable @next/next/no-img-element */

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Zygobit’s team delivered a highly effective solution for our app. They ensured a user-friendly interface and smooth functionality, helping us meet our business goals in no time. ",
    name: "Sasson Moulavi",
    designation: "ABBSI",
    src: "/images/abbsi_admin.png",
  },
  {
    quote:
      "Zygobit’s expertise made the development of our project a seamless experience. They understood our vision and executed it with precision, delivering a fantastic solution.",
    name: "ellered",
    designation: "OPSY",
    src: "/images/opsy_admin.png",
  },
  {
    quote:
      "The Zygobit team helped us transform our website, combining great design with excellent usability. Their approach exceeded expectations and truly captured the essence of our brand.",
    name: "Mark",
    designation: "Inspired Meadows",
    src: "/images/inspired_admin.jpeg",
  },
  {
    quote:
      "Collaborating with Zygobit was a game-changer. Their innovative development strategies helped us create a robust and feature-rich app that perfectly meets the needs of our users.",
    name: "Alan",
    designation: "TIA",
    src: "/images/tia_admin.png",
  },
];
const ClientSaysCards = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <CardContent className="mt-0 sm:mt-14 w-full h-full flex flex-col justify-center items-center  text-center  p-6 text-white">
                  <div className="ml-1 sm:ml-12 w-fit mr-auto mb-3">
                    <img className="" src="images/qoutus.svg" alt="" />
                  </div>
                  <p className="font-light sm:font-normal text-sm sm:text-base mb-5 sm:mb-8 max-w-xs mx-auto line-clamp-4">
                    {testimonial.quote}
                  </p>
                  <div className="w-12 h-12 mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover mx-auto "
                      src={testimonial.src}
                      alt=""
                    />
                  </div>
                  <h4 className="font-medium text-sm text-[#E0E0E0] mt-3 mb-1">
                    {testimonial.name}
                  </h4>
                  <span className="font-[300] text-sm">
                    {testimonial.designation}
                  </span>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent hover:bg-transparent border-none sm:w-auto sm:h-auto top-auto sm:top-auto bottom-20 sm:bottom-[82px] left-10 sm:left-12 lg:left-16 right-auto sm:right-auto" />
        <CarouselNext className="bg-transparent hover:bg-transparent border-none sm:w-auto sm:h-auto left-auto sm:left-auto right-10 sm:right-12 lg:right-16 top-auto sm:top-auto bottom-20 sm:bottom-[82px]" />
      </Carousel>
    </div>
  );
};
export default ClientSaysCards;
