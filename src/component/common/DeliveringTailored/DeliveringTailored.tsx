/* eslint-disable @typescript-eslint/no-explicit-any */
import IndustriesSlider from "@/component/new/IndustriesSlider";

interface DeliveringTailoredProps {
  deliveringHeading: string;
  deliveringPara: string;
  deliveringTailoredData?: any;
}

const DeliveringTailored: React.FC<DeliveringTailoredProps> = ({
  deliveringHeading,
  deliveringPara,
  deliveringTailoredData,
}) => {
  return (
    <>
      <section className="w-full  bg-[#FFF1ED] pt-10 pb-20 sm:pt-14 sm:pb-24 lg:py-20 lg:pb-40">
        <div className="w-full px-4 sm:px-0  sm:text-center">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-black mb-2 sm:mb-5">
            {deliveringHeading}
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto text-black">
            {deliveringPara}
          </p>
        </div>
        <div className="w-full custom-apple-slider about-slider-padding  relative mt-5 sm:mt-7 lg:mt-10">
          <IndustriesSlider deliveringTailoredData={deliveringTailoredData} />
        </div>
      </section>
    </>
  );
};
export default DeliveringTailored;
