"use client";

import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export function BoxReveals() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="size-full  items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <span className="sm:font-medium text-base sm:text-xl lg:text-2xl ">
          10X Your eCommerce Sales Growth!
        </span>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <h2 className="text-gradient-custom text-2xl sm:text-4xl lg:text-5xl font-bold my-3 sm:my-5 pr-5">
          Accelerate Sales With Our 
          <span className="text-orange-600">
            Ecommerce Web App Development Services
          </span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <p className="text-sm sm:text-lg lg:text-xl sm:font-medium">
          With over 2.14 billion global online shoppers and a projected revenue
          of $6.39 trillion in eCommerce sales by 2024, having a powerful web
          application is essential for business success
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <ul className="list-decimal pl-6 my-4 sm:my-7 space-y-3 sm:font-medium text-sm sm:text-lg lg:text-xl">
          <li>Lightning-Fast Load Times</li>
          <li>Secure Payment Integration</li>
          <li>Mobile & Desktop Compatibility</li>
          <li>Advanced Analytics & Reporting</li>
        </ul>
      </BoxReveal>

      <BoxReveal boxColor={"#EA580C"} duration={0.5}>
        <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
        Build eCommerce Web App Today{" "}
          <ChevronRight className="group-hover:left-2 w-4 sm:w-auto left-0 relative duration-500 transition-all" />
        </button>
      </BoxReveal>
    </div>
  );
}
