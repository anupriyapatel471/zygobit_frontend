import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";

const TrustedAcross = () => {
  return (
    <>
      <section className="w-full  bg-gradient-custom pt-11 sm:pt-52 pb-12 lg:pb-14 px-4 lg:px-24 overflow-hidden">
        <div className="w-full  relative inline-block   rounded-lg">
          <div className="w-full border border-[#09090B33] rounded-lg bg-[#fafafa12] ">
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={8} />
            </div>
            <div className=" w-full py-16 px-4">
              <MagicCardDemo />
            </div>
          </div>
        </div>
        <div className="w-full mt-5 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center justify-between ">
          <div
            className="w-full sm:w-auto sm:max-w-4xl pr-4 lg:pr-0"
            data-aos="fade-up"
          >
            <span className="mb-2 block font-semibold text-base">
              Trusted Across the Galaxy
            </span>
            <p className="sm:font-semibold text-base sm:text-xl lg:text-2xl tracking-tighter">
              We&apos;ve partnered with forward-thinking brands across multiple
              industries, delivering innovative solutions through a diverse
              range of services.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border-t sm:border-t-0 sm:border-l  border-white mt-6 sm:mt-0 pt-6 sm:py-12  sm:px-12"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl uppercase sm:text-center font-semibold max-w-80">
              Breaking Barriers Since Day One
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrustedAcross;
