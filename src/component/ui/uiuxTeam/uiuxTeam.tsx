"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import Link from "next/link";

export function UiuxTeams() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-10 w-full px-4 lg:px-0">
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              <img className="size-full" src="/images/teams_bg.png" alt="" />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              @nextjs
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm  sm:text-base mt-3 mb-2"
            >
              Design Manager
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/member.png"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              <img className="size-full" src="/images/teams_bg.png" alt="" />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              @nextjs
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm  sm:text-base mt-3 mb-2"
            >
              Design Manager
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/member.png"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              <img className="size-full" src="/images/teams_bg.png" alt="" />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              @nextjs
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm  sm:text-base mt-3 mb-2"
            >
              Design Manager
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/member.png"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              <img className="size-full" src="/images/teams_bg.png" alt="" />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              @nextjs
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm  sm:text-base mt-3 mb-2"
            >
              Design Manager
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/member.png"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              <img className="size-full" src="/images/teams_bg.png" alt="" />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              @nextjs
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm  sm:text-base mt-3 mb-2"
            >
              Design Manager
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/member.png"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              <img className="size-full" src="/images/teams_bg.png" alt="" />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              @nextjs
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm  sm:text-base mt-3 mb-2"
            >
              Design Manager
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/member.png"
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
