import MagicCard from "@/components/ui/magic-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import arrowRight from "../../../../public/images/arrow_right.svg";

export function MagicCardDemo() {
  return (
    <div
      className={
        " grid grid-cols-1 sm:grid-cols-3  w-full flex-col gap-4  lg:flex-row"
      }
    >
      <MagicCard
        data-aos="fade-right"
        className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
      >
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
          <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-125px)] text-xl lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
            Custom Solution Architects
          </h3>
          <button className="order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
            <Image
              className="brightness-0 invert"
              width={20}
              height={10}
              src={arrowRight}
              alt="Arrow right"
            />
          </button>
        </div>
        <p className="text-sm sm:text-base mt-3">
          Experts in building tailor-made technologies that align with your
          business objectives.
        </p>
      </MagicCard>
      <MagicCard className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
          <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-125px)] text-xl lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
            Application Innovators
          </h3>
          <button className="order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
            <Image
              className="brightness-0 invert"
              width={20}
              height={10}
              src={arrowRight}
              alt="Arrow right"
            />
          </button>
        </div>
        <p className="text-sm sm:text-base mt-3">
          Skilled developers creating seamless, scalable software for modern
          challenges.
        </p>
      </MagicCard>
      <MagicCard
        data-aos="fade-left"
        className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
      >
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
          <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-125px)] text-xl lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
            Performance Optimization Experts
          </h3>
          <button className="order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
            <Image
              className="brightness-0 invert"
              width={20}
              height={10}
              src={arrowRight}
              alt="Arrow right"
            />
          </button>
        </div>
        <p className="text-sm sm:text-base mt-3">
          Specialists ensuring your digital solutions run smoothly, securely,
          and efficiently.
        </p>
      </MagicCard>
    </div>
  );
}
