"use client";

import { useState } from "react";
import { Particles } from "@/components/ui/particles";

export function AboutBgParticles() {
  const [color] = useState("#fff");

  return (
    <div className="relative hidden sm:flex h-[250px] w-full flex-col items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
