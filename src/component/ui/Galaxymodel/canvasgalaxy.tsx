"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Galaxymodel } from "./Galaxymodel";

export default function GalaxyScene() {
  return (
    <div className="cursor-grab absolute top-0 left-0 w-full h-full">
      <Canvas>
        {/* <OrbitControls/>
        <mesh>
            <boxGeometry/>
            <meshBasicMaterial color={"white"}/>
        </mesh> */}
        <Environment preset="night" />
        <OrbitControls />
        <Galaxymodel />
      </Canvas>
    </div>
  );
}
