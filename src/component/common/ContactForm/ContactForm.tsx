"use client";
import React from "react";
import ConnectForm from "@/component/common/ConnectForm";
import Image from "next/image";
import contactImage from "../../../../public/images/contact_svg.svg";

export default function ContactForm() {
  return (
    <>
      <section className="w-full  bg-[url('/images/contact_bg.png')] py-20 bg-cover bg-center relative overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full grid items-center   grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16">
            <div
              className="hidden sm:inline-block w-auto relative h-[415px] sm:h-[580px]"
            >
              <Image
                className="w-full r rounded-[40px] object-cover"
                src={contactImage}
                alt="Space X"
                fill
              />
              {/* <div className="absolute bottom-0 left-0 px-3 sm:px-8 py-8">
                <p className="tracking-tighter text-sm sm:text-lg mb-2">
                  “Two lunar months revealed Earth&apos;s fragile beauty against
                  vast silence, transforming my view of our place in the
                  universe.
                </p>
                <b className="sm:font-medium text-base sm:text-lg tracking-tight">
                  Irinel Traista
                </b>
              </div> */}
            </div>

            <ConnectForm />
          </div>
        </div>
      </section>
    </>
  );
}
