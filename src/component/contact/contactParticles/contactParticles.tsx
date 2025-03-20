"use client";

import { useState } from "react";
import { Particles } from "@/components/ui/particles";
import ConnectForm from "@/component/common/ConnectForm";
import Image from "next/image";
import spacex from "../../../../public/images/space_x.png";

export function ContactParticles() {
  const [color] = useState("#fff");

  return (
    <>
      {/* contact form */}
      <section className="w-full px-4 lg:px-24 relative overflow-hidden">
        <div className="w-full absolute top-0 left-0 size-full -z-10">
          <Particles
            className="absolute size-full inset-0 z-0"
            quantity={200}
            ease={10}
            color={color}
            refresh
          />
        </div>
        <div className="w-full grid items-center bg-white/5 rounded-2xl grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-5">
          <ConnectForm />

          <div data-aos="fade-left" className="w-auto relative">
            <Image
              className="rounded-2xl object-cover"
              src={spacex}
              alt="Space X"
              width={590}
              height={885}
            />
            <div className="absolute bottom-0 left-0 px-3 sm:px-8 py-8">
              <p className="tracking-tighter text-sm sm:text-lg mb-2">
                “Two lunar months revealed Earth&apos;s fragile beauty against
                vast silence, transforming my view of our place in the universe.
              </p>
              <b className="sm:font-medium text-base sm:text-lg tracking-tight">
                Irinel Traista
              </b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
