import React from "react";
import { Vortex } from "../../../components/ui/vortex";

export default function VortexBg() {
  return (
    <div className="w-full mx-auto rounded-md  h-full overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center   w-full h-full"
      >
        
      </Vortex>
    </div>
  );
}
