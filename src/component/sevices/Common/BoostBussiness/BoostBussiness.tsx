interface BoostBusinessProps {
  heading: string;
  paragraph: string;
}
const BoostBussiness = ({ heading, paragraph }: BoostBusinessProps) => {
  return (
    <>
      <div className="w-full   inline-block">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] lg:leading-[50px] text-black">
          {heading}
        </h2>
        <p className=" sm:font-medium text-sm sm:text-base sm:leading-8 mt-2 lg:mt-4 text-[#6B6B6B]">
          {paragraph}
        </p>
      </div>
    </>
  );
};
export default BoostBussiness;
