/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface ctaProp {
  content: string;
  Aurora: string;
  vortex: string;
}

const CtaSecond = ({ content, Aurora, vortex }: ctaProp) => {
  return (
    <>
      <section className="w-full relative my-20 sm:my-20 lg:my-32">
        <div className="container remove-bg">
          <div className="w-full relative">
            <div className="w-full  absolute top-1/2 -translate-y-1/2 left-0 -z-10">
              <Image
                className="w-full h-[330px] rounded-tl-2xl sm:rounded-tl-3xl lg:rounded-tl-none lg:rounded-br-none rounded-br-2xl sm:rounded-br-3xl sm:h-[325px] lg:h-[475px] object-cover lg:object-contain"
                width={475}
                height={475}
                src="/images/cta_new_bg.png"
                alt="image"
              />
            </div>
            <div className="inter-var py-0 w-full">
              <div className=" w-full pb-0 sm:pb-0 relative  group/card justify-between items-center   rounded-xl flex-wrap lg:flex-nowrap flex  ">
                <div className="w-full order-2 lg:order-none  p-3 sm:p-5 lg:pr-12 lg:py-12 lg:pl-14 text-left">
                  <div className="inline text-2xl sm:text-4xl lg:text-5xl text-center sm:text-left text-white font-bold ">
                    Shape the Future of Technology with Us
                  </div>
                  <p className="text-left sm:font-medium text-sm leading-6 sm:leading-normal sm:text-base lg:text-xl mt-2.5 mb-5 lg:mb-10">
                    Shape the Future of Technology with Us Partner with our team
                    for a free, no-obligation technical proposal tailored to
                    your next enterprise custom project.
                  </p>
                  <div>
                    <Link href={"/contact"}>
                      <Button className="  bg-white hover:bg-white text-themetext font-normal  group  duration-500 transition-all">
                        Our Engagement Model
                        <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSecond;
