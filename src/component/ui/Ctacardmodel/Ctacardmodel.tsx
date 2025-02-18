"use client";

// import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import { ChevronRight } from "lucide-react";

export function ThreeDCard({img}:any) {
  console.log(img, "here is a ")
  return (
    <CardContainer className="inter-var py-0 w-full">
      <CardBody className="w-full relative bg-gradient-cta group/card justify-between  border-[#FFFFFF26]  rounded-xl flex border-2  ">
        <div className="max-w-3xl py-12 pl-14">
          <CardItem
            translateZ="50"
            className="text-5xl text-gradiant-custom font-bold">
            <span className="text-themetext">Let’s Build</span> the Future of
            Technology Together
          </CardItem>
          <CardItem as="p" translateZ="60" className="font-medium text-xl my-5">
            Let our team provide you with a no-cost, no-commitment technical
            proposal for your next enterprise custom project.
          </CardItem>
          <CardItem translateZ="60" >
            <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
              Our Engagement Model{" "}
              <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
            </button>
          </CardItem>
        </div>
        <CardItem translateZ="130" className="w-auto overflow-hidden text-right">
          {img && <div>{img}</div>}
          
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
