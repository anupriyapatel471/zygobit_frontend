import dynamic from "next/dynamic";

const UiuxSlider = dynamic(
  () => import("@/component/common/uiuxSlider/uiuxSlider")
);
import uiuxSliderData from "../../../utils/content/uiUxSlider/uiUx.json";

interface DeliveringTailoredProps {
  deliveringHeading: string;
  deliveringPara: string;
}

const DeliveringTailored: React.FC<DeliveringTailoredProps> = ({
  deliveringHeading,
  deliveringPara,
}) => {
  return (
    <>
      <section className="w-full pt-0  sm:pt-0 lg:pt-5">
        <div
          className="w-full px-4 sm:px-0  sm:text-center"
          data-aos="fade-right"
        >
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-3xl lg:text-[38px] mb-2 sm:mb-6">
            {deliveringHeading}
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            {deliveringPara}
          </p>
        </div>
        <div className="w-full relative  mt-8 sm:mt-12 mb-12 sm:mb-24 lg:mb-32">
          <div className="pointer-events-none absolute z-[1] -top-8 sm:-top-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
          <UiuxSlider firstRow={uiuxSliderData} />
          <div className="pointer-events-none absolute -bottom-8 sm:-bottom-12 rounded-[50%] right-0 w-full h-16 sm:h-20 lg:h-24 bg-[#09090B]"></div>
        </div>
      </section>
    </>
  );
};
export default DeliveringTailored;
