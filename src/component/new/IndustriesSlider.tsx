"use client";

import React from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// react-slick ko dynamically import karo server side rendering disable karke
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
      <div className="w-full inline-block">
        <Slider {...settings}>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[350px] lg:w-[415px] h-[340px] lg:h-96 p-5 bg-black/60 rounded-2xl relative overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                  fill
                  className="object-cover"
                  src="/images/doctor.jpg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="sm:font-semibold text-xl sm:text-2xl lg:text-[32px]">
                  Healthcare
                </h3>
                <Button className="bg-transparent hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
                  <Image
                    width={10}
                    height={10}
                    className="w-3 h-3 object-contain"
                    src="/images/up_arrow.svg"
                    alt=""
                  />
                </Button>
              </div>
              <div className="mt-10 w-full">
                <ul className="flex flex-col gap-4">
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    AI based patient monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Fraud Detention
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Remote Monitoring
                  </li>
                  <li className="border w-fit rounded-lg py-2 px-3 text-sm  lg:text-base border-white">
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
