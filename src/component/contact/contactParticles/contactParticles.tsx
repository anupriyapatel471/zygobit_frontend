"use client";

import { useState } from "react";
import { Particles } from "@/components/ui/particles";
import ConnectForm from "@/component/common/ConnectForm";
import Image from "next/image";
import contactImage from "../../../../public/images/contact_new.png";

export function ContactParticles() {
  const [color] = useState("#fff");

  return (
    <>
      {/* contact form */}
      <section className="w-full  relative overflow-hidden">
        <div className="w-full absolute top-0 left-0 size-full -z-10">
          <Particles
            className="absolute size-full inset-0 z-0"
            quantity={200}
            ease={10}
            color={color}
            refresh
          />
        </div>
        <div className="container remove-bg">
          <div className="w-full grid items-center bg-white/5 rounded-2xl lg:rounded-3xl grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-10">
            <div
              data-aos="fade-left"
              className="w-auto relative hidden lg:inline"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-full h-full bg-black/30 text-center ">
                <h2 className="font-bold text-2xl sm:text-4xl lg:text-4xl text-white mt-10 ">
                  Looking forward to connecting
                </h2>
              </div>
              <Image
                className="rounded-2xl lg:h-[715px] object-cover"
                src={contactImage}
                alt="image"
                width={590}
                height={1000}
              />
            </div>
            <ConnectForm />
          </div>
        </div>
      </section>
    </>
  );
}
