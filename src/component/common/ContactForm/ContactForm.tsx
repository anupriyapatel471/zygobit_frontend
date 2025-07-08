import React from "react";
import ConnectForm from "@/component/common/ConnectForm";
import Image from "next/image";
import contactImage from "../../../../public/images/contact_svg.svg";

export default function ContactForm() {
  return (
    <>
      <section className="w-full relative bg-[url('/images/contact_bg.png')] py-12 sm:py-14 lg:py-20 bg-cover bg-center overflow-hidden min-h-[600px]">
        <div className="container remove-bg">
          <div className="w-full grid items-center relative grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <ConnectForm />
          </div>
        </div>
        <div className="hidden lg:inline-block w-[715px] h-[415px] sm:h-[715px] absolute bottom-0 right-0">
          <Image
            className="w-full object-cover"
            src={contactImage}
            alt="contact image"
            fill
            priority
          />
        </div>
      </section>
    </>
  );
}
