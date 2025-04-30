import IndustriesSlider from "@/component/new/IndustriesSlider";

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
      <section className="w-full custom-apple-slider bg-[#FFF1ED] py-12 sm:py-14 lg:py-20 lg:pb-40">
        <div
          className="w-full px-4 sm:px-0  sm:text-center"
          data-aos="fade-right"
        >
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-black mb-5">
            {deliveringHeading}
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto text-black">
            {deliveringPara}
          </p>
        </div>
        <div className="w-full relative mt-10">
          <IndustriesSlider />
        </div>
      </section>
    </>
  );
};
export default DeliveringTailored;
