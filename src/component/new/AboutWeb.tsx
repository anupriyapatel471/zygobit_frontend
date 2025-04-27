import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutWeb = () => {
  return (
    <>
       <section className="w-full relative overflow-hidden py-12 sm:py-14 lg:py-20">
        <div className="container remove-bg">
          <div className="w-full max-w-[1248px] lg:px-4 mx-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
            <div className="w-3/5 mr-auto absolute top-1/2 -translate-y-1/2 lg:left-4 bg-[#1F1F21] rounded-2xl  p-10">
              <div className="absolute bottom-0 right-0 ">
                <Image
                  width={253}
                  height={380}
                  className="w-[253px] brightness-0 invert h-auto object-contain"
                  src="/images/white_g.png"
                  alt="background image"
                />
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-gradiant-custom-second">
                Accelerate Growth with Our{" "}
                <span className="text-themetext">Web Development Services</span>
              </h2>
              <p className="sm:font-medium text-sm sm:text-base my-5">
                With billions of online users and rapidly growing digital
                markets, having a fast, secure, and scalable web application is
                essential for business success.<br></br>
                Accelerate Growth with OurWhy Choose Zygobit?
              </p>
              <ul className="space-y-1 list-disc pl-5">
                <li>
                  Lightning-Fast Load Times – Optimized for seamless performance
                </li>
                <li>
                  Secure Payment Integration – Ensuring safe transactions for
                  your users
                </li>
                <li>
                  Mobile & Desktop Compatibility – A flawless experience across
                  all devices
                </li>
                <li>
                  Advanced Analytics & Reporting – Gain insights to drive
                  business decisions
                </li>
              </ul>
              <button className="mt-5 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Build your web app today
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
          </div>
          <div className="w-full max-w-[960px] ml-auto relative h-[580px]">
            <Image
              fill
              className="object-cover rounded-2xl"
              src="/images/web_bg.png"
              alt="web image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWeb;
