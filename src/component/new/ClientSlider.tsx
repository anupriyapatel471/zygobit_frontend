"use client";
import * as React from "react";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    quote: "",
    name: "Alan",
    designation: "Total Wireless Tracker",
    src: "/images/clientOne.png",
    videosrc:
      "https://zygobit-images.s3.ap-south-1.amazonaws.com/Review+videos/alan.mp4",
  },

  {
    quote: "",
    name: "Daniel",
    designation: "TrackDay Hub",
    src: "/images/clientTwo.png",
    videosrc:
      "https://zygobit-images.s3.ap-south-1.amazonaws.com/Review+videos/daniel.mp4",
  },
  {
    quote: "",
    name: "David Hakki",
    designation: "Ascent Above and ClaimEase",
    src: "/images/clientThree.png",
    videosrc:
      "https://zygobit-images.s3.ap-south-1.amazonaws.com/Review+videos/david.mp4",
  },
  // {
  //   quote: "",
  //   name: "Rakesh",
  //   designation: "",
  //   src: "/images/rakesh.png",
  //   videosrc:
  //     "https://zygobit-images.s3.ap-south-1.amazonaws.com/Review+videos/rakesh.mp4",
  // },
  {
    quote: "",
    name: "Ismael",
    designation: "Rumy",
    src: "/images/ismael.png",
    videosrc:
      "https://zygobit-images.s3.ap-south-1.amazonaws.com/Review+videos/ismael.mp4",
  },
  {
    quote:
      "Zygobit’s team delivered a highly effective solution for our app. They ensured a user-friendly interface and smooth functionality, helping us meet our business goals in no time.",
    name: "Sasson Moulavi",
    designation: "ABBSI",
    src: "/images/abbsi_admin.png",
    // videosrc: "",
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

export function ClientSlider() {
  const videoRefs = React.useRef<HTMLVideoElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="ml-0 lg:ml-0 gap-5 lg:gap-9">
        {testimonials.map((data, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-[48%] lg:basis-[382px]"
          >
            <div
              className="border-[6px] border-[#FFFFFF38] relative bg-[#FEF8FF36] backdrop-blur-2xl h-[400px] lg:h-[555px] rounded-3xl p-4 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {!data.videosrc && (
                <div className="w-full h-full absolute top-0 left-0 -z-10">
                  <Image
                    className="p-8"
                    fill
                    src="/images/client_bg_img.svg"
                    alt="icon"
                  />
                </div>
              )}
              {data.videosrc && (
                <video
                  width="600"
                  height="500"
                  className="absolute rounded-3xl top-0 left-0 z-10 w-full h-full object-contain"
                  loop
                  playsInline
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.play();
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    setHoveredIndex(null);
                  }}
                >
                  <source src={data.videosrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <CardContent className="flex items-center justify-center p-0 ">
                <div className="w-full">
                  {!data.videosrc && (
                    <p className="text-sm sm:text-base text-white">
                      {data.quote}
                    </p>
                  )}

                  {(data.videosrc ? hoveredIndex !== index : true) && (
                    <div className="z-20 flex gap-1.5 max-w-[90%] mx-auto w-full p-5 items-center absolute bottom-5 left-1/2 -translate-x-1/2 border border-[#F2F2F71A] bg-black/40 rounded-2xl">
                      <div className="w-14 h-14 border-[3px] border-[#FF4D00] overflow-hidden rounded-full relative">
                        <Image
                          fill
                          className="w-full h-full object-cover"
                          src={data.src}
                          alt="client image"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium uppercase tracking-wide text-sm text-[#E0E0E0]">
                          {data.name}
                        </h5>
                        <p className="font-light text-sm">{data.designation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] -bottom-20 sm:-bottom-24 sm:top-auto lg:top-1/2 sm:right-20 sm:left-auto lg:-left-[65px] 2xl:-left-[90px]" />
      <CarouselNext className="w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] -bottom-20 sm:-bottom-24 sm:top-auto sm:right-2 lg:top-1/2 lg:-right-[65px] 2xl:-right-[90px]" />
    </Carousel>
  );
}
