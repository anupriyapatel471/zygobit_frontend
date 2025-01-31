"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../components/ui/3d-card";

export function ThreeDCards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 w-full">
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src="/images/ai_img.png"
                height="1000"
                width="1000"
                className="h-[350px] sm:h-[400px] lg:h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem className="absolute sm:text-center z-20 bottom-0 left-0 p-4 sm:p-7">
              <CardItem
                translateZ="50"
                className="text-xl  font-bold text-white"
              >
                Artificial Intelligence
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                We integrate AI into your mobile apps, offering features like
                face recognition, text scanning, barcodes, and predictive
                modeling for smarter user experiences.
              </CardItem>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src="/images/machine.png"
                height="1000"
                width="1000"
                className="h-[350px] sm:h-[400px] lg:h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="absolute sm:text-center z-20 bottom-0 left-0 p-4 sm:p-7">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Machine Learning
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                Our scalable machine learning app solutions grow with your
                business, offering competitive costs and maximum value.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src="/images/generate_ai.png"
                height="1000"
                width="1000"
                className="h-[350px] sm:h-[400px] lg:h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="absolute sm:text-center z-20 bottom-0 left-0 p-4 sm:p-7">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Generative AI
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                We build AI-powered mobile apps that create dynamic content,
                automate workflows, and boost user engagement.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src="/images/iot.png"
                height="1000"
                width="1000"
                className="h-[350px] sm:h-[400px] lg:h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="absolute sm:text-center z-20 bottom-0 left-0 p-4 sm:p-7">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Internet of Things (IoT)
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                We create IoT apps for seamless device connectivity, real-time
                monitoring, and smart automation.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src="/images/blockchain.png"
                height="1000"
                width="1000"
                className="h-[350px] sm:h-[400px] lg:h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="absolute sm:text-center z-20 bottom-0 left-0 p-4 sm:p-7">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Blockchain
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                We develop blockchain-powered apps that are secure,
                decentralized, and web3-ready for modern businesses.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src="/images/ar_vr.png"
                height="1000"
                width="1000"
                className="h-[350px] sm:h-[400px] lg:h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="absolute sm:text-center z-20 bottom-0 left-0 p-4 sm:p-7">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                AR/VR
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-white"
              >
                We create AR/VR apps for interactive and engaging user
                experiences like never before.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
