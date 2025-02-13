"use client";
import React from "react";
import ConnectForm from "@/component/common/ConnectForm";
import Image from "next/image";
// import Image from "next/image";
import spaceX from "../../../../public/images/space_x.png";

export default function ContactForm() {
  return (
    <>
      <section className="w-full px-4 lg:px-24 relative overflow-hidden">
        <div className="w-full grid items-center   bg-white/5 rounded-2xl grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-5">
          <div data-aos="fade-right" className="w-auto relative h-[415px] sm:h-[800px]">
            <Image
              className="w-full rounded-2xl object-cover"
              src={spaceX}
              alt="Space X"
              // layout="responsive"
              fill
            />
            <div className="absolute bottom-0 left-0 px-3 sm:px-8 py-8">
              <p className="tracking-tighter text-sm sm:text-lg mb-2">
                “Two lunar months revealed Earth&apos;s fragile beauty against vast
                silence, transforming my view of our place in the universe.
              </p>
              <b className="sm:font-medium text-base sm:text-lg tracking-tight">
                Irinel Traista
              </b>
            </div>
          </div>

          <ConnectForm />
        </div>
      </section>
    </>
  );
}
