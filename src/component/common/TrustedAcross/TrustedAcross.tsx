import RippleBg from "@/component/common/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/common/Magiccard/Magiccard";
import Count from "@/components/ui/Count";

const stats = [
  { id: 1, value: "2+", label: "Years of Experience" },
  { id: 2, value: "15+", label: "Countries Served" },
  { id: 3, value: "25+", label: "Tech Enthusiast" },
  { id: 4, value: "250+", label: "Products Delivered" },
];

const TrustedAcross = () => {
  return (
    <>
      <section className="w-full  bg-gradient-custom pt-11 sm:pt-52 pb-12 lg:pb-14  overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full  relative inline-block sm:hidden  rounded-lg">
            <div className="w-full sm:border border-[#09090B33] rounded-lg sm:bg-[#fafafa12] ">
              <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
                <RippleBg numCircles={8} />
              </div>
              <div className=" w-full sm:py-4 sm:px-4">
                <MagicCardDemo />
              </div>
            </div>
          </div>
          <div className="mt-6 w-full sm:w-full lg:w-full lg:mt-5 text-right">
            <div className="w-full sm:w-auto  ml-auto grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:gap-y-10">
              {stats.map((stat) => (
                <div key={stat.id} className="w-full text-center">
                  <b className="font-extrabold text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl text-white block">
                    <Count endValue={stat.value} />+
                  </b>
                  <span className="font-medium text-sm sm:text-base">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrustedAcross;
