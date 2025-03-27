"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../components/ui/3d-card";
import aiImg from "../../../../../public/images/ai_img.png";
import machine from "../../../../../public/images/machine.png";
import generateAi from "../../../../../public/images/generate_ai.png";
import iot from "../../../../../public/images/iot.png";
import blockChain from "../../../../../public/images/blockchain.png";
import arVr from "../../../../../public/images/ar_vr.png";

export function ThreeDCards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 w-full">
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src={aiImg}
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
                Enhance your mobile applications with AI-driven capabilities,
                including facial recognition, smart text scanning, barcode
                detection, and predictive analytics, delivering seamless and
                intelligent user interactions.
              </CardItem>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src={machine}
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
                Our AI-powered machine learning models adapt to your business
                needs, optimizing efficiency, automating key processes, and
                ensuring cost-effective, scalable solutions for long-term
                success.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src={generateAi}
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
                Leverage the power of generative AI to create dynamic content,
                automate complex workflows, and drive deeper engagement, making
                your applications smarter and more user-centric.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src={iot}
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
                We develop IoT applications that enable seamless device
                connectivity, real-time monitoring, and advanced automation. Our
                solutions help businesses optimize operations, enhance
                efficiency, and create smarter environments.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src={blockChain}
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
                We build secure and decentralized blockchain applications
                designed for modern businesses. From digital transactions to
                smart contracts and web3 integration, our solutions ensure
                transparency, reliability, and innovation in every process.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className=" relative group/card  bg-black border-white/15 w-full h-auto rounded-xl  border  ">
            <CardItem translateZ="50" className="w-full">
              <Image
                src={arVr}
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
                We craft immersive AR/VR applications that transform digital
                interactions. Whether it&apos;s for gaming, training, or
                enterprise solutions, our apps deliver highly engaging and
                interactive experiences that redefine user engagement.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
