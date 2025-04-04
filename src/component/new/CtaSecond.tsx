import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
interface ctaProp {
  content: string;
  Aurora: string;
  vortex: string;
}

const CtaSecond = ({ content, Aurora, vortex }: ctaProp) => {
  return (
    <>
      <section className="w-full relative my-14 sm:my-16 overflow-hidden">
        <div className="container remove-bg">
          <div className="inter-var py-0 w-full">
            <div className="w-full pb-5 sm:pb-0 relative bg-orange-600  group/card justify-between items-center border-white/20  rounded-xl flex-wrap lg:flex-nowrap flex border-2  ">
              <div
                data-aos="fade-right"
                className="w-full order-2 lg:order-none lg:max-w-2xl p-4 text-white  sm:p-5 lg:pr-0 lg:py-12 lg:pl-8"
              >
                <h2 className="text-2xl sm:text-[28px] lg:text-4xl  text-white font-bold">
                  Shape the Future of Technology with Us
                </h2>
                <div className="sm:font-medium text-sm leading-6 sm:leading-normal sm:text-base lg:text-lg mt-2 mb-5">
                  Shape the Future of Technology with Us Partner with our team
                  for a free, no-obligation technical proposal tailored to your
                  next enterprise custom project.
                </div>
                <div>
                  <Link href={"/contact"}>
                    <button className=" btn-primary  text-themetext font-normal  group bg-white duration-500 transition-all">
                      Our Engagement Model{" "}
                      <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                    </button>
                  </Link>
                </div>
              </div>
              <div
                // data-aos="fade-left"
                className="order-1 lg:order-none w-auto mx-auto lg:mx-0"
              >
                <img src="/images/cta_circle.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSecond;
