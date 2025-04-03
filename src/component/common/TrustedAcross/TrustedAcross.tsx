import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";

const TrustedAcross = () => {
  return (
    <>
      <section className="w-full  bg-gradient-custom pt-11 sm:pt-52 pb-12 lg:pb-14 px-4 lg:px-24 overflow-hidden">
        <div className="w-full  relative inline-block sm:hidden  rounded-lg">
          <div className="w-full border border-[#09090B33] rounded-lg bg-[#fafafa12] ">
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={8} />
            </div>
            <div className=" w-full py-4 px-4">
              <MagicCardDemo />
            </div>
          </div>
        </div>
        <div className="mt-6 w-full sm:w-full lg:w-full lg:mt-5 text-right">
          <div className="w-full sm:w-auto  ml-auto grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:gap-y-10">
            <div className="w-full text-center">
              <b className="font-extrabold text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl text-white block">
                11+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Years of Experience
              </span>
            </div>
            <div className="w-full text-center">
              <b className="font-extrabold text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl text-white block">
                25+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Countries Served
              </span>
            </div>
            <div className="w-full text-center">
              <b className="font-extrabold text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl text-white block">
                250+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Tech Enthusiast
              </span>
            </div>
            <div className="w-full text-center">
              <b className="font-extrabold text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl text-white block">
                1000+
              </b>
              <span className="font-medium text-sm sm:text-base">
                Products Delivered
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrustedAcross;
