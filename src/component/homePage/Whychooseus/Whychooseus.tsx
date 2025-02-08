import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function WhychooseUs() {
  const data = [
    {
      title: "Unmatched Quality",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm lg:text-xl font-semibold mb-6">
            We prioritize <b className="font-bold">quality</b> in everything we
            do, delivering high-performance, end-to-end IT solutions tailored to
            your needs. With years of experience and a skilled team of
            developers and designers, we’ve successfully completed over 20
            client projects across various industries.
          </p>
          <div className="flex">
            <Image
              src="/images/why_one.svg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px] w-full lg:w-3/5 ml-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Innovation at Core",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm lg:text-xl font-semibold mb-6">
            Our focus on <b>innovation</b> ensures that your business stays
            ahead. By leveraging cutting-edge technologies like AI and
            automation, we create scalable, future-ready solutions designed to
            align with the latest industry trends.
          </p>
          <div className="flex">
            <Image
              src="/images/why_two.svg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px]  ml-auto w-full lg:w-3/5 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Exceptional Support",
      content: (
        <div>
          <p className=" text-xs md:text-sm lg:text-xl  font-semibold mb-6">
            With <b>exceptional support</b>, we prioritize clear communication
            and client satisfaction. Our team is available 24/7 to ensure
            seamless operations and provide proactive assistance at every stage
            of your project journey.
          </p>
          <div className="flex">
            <Image
              src="/images/why_three.svg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-[340px] w-full lg:w-3/5 ml-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
