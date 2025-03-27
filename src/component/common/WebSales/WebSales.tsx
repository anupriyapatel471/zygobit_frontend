"use client";

import BoxReveal from "@/components/ui/box-reveal";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

interface BoxRevealsProps {
  data: {
    title1: string;
    title2: string;
    description: string;
    subTitle: string;
    features: string[];
    btnText: string;
  };
}

export function BoxReveals({ data }: BoxRevealsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="size-full  items-center justify-center overflow-hidden pt-8">
      {/* <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <span className="sm:font-medium text-base sm:text-xl lg:text-2xl ">
          10X Your eCommerce Sales Growth!
        </span>
      </BoxReveal> */}

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <h2 className="text-gradient-custom text-2xl sm:text-4xl lg:text-5xl font-bold my-3 sm:my-5 pr-5">
          {data.title1}
          <span className="text-orange-600">{data.title2}</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <p className="text-sm sm:text-lg lg:text-xl sm:font-medium">
          {data.description}
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <p className="text-sm sm:text-lg lg:text-xl sm:font-medium">
          {data.title1}
          {data.subTitle}
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <ul className="list-decimal pl-6 my-4 sm:my-7 space-y-3 sm:font-medium text-sm sm:text-lg lg:text-xl">
          {data.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
          {data.btnText}
          <ChevronRight className="group-hover:left-2 w-4 sm:w-auto left-0 relative duration-500 transition-all" />
        </button>
      </BoxReveal>
    </div>
  );
}
