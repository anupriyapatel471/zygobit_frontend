"use client";

import React from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderData from "../../utils/content/deliveringTailored/tailored.json";
import { ContactnewForm } from "./ContactNewForm";
import { deliveringTailored } from "@/lib/utils";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function IndustriesSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 750, // For tablets and small devices
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full inline-block pr-4 sm:pr-0">
        <Slider {...settings}>
          {sliderData.map((data, index) => (
            <div key={index} className="">
              <div className="w-full sm:w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 -z-10">
                  <Image
                    fill
                    className="object-cover"
                    src={data?.img}
                    alt="image"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                    {data?.name}
                  </h3>
                  <ContactnewForm formOpen={deliveringTailored} />
                </div>
                <div className="mt-5 lg:mt-10 w-full">
                  <ul className="flex flex-col gap-4">
                    {data?.description.map((item, index) => (
                      <li
                        key={index}
                        className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
