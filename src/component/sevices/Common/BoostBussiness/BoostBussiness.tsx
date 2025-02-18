interface BoostBusinessProps {
  heading: string;
  paragraph: string;
}
 const BoostBussiness = ({ heading, paragraph }: BoostBusinessProps) => {
  return (<>
  <div className="w-full px-4 lg:px-24 mt-10 lg:mt-16 mb-8 sm:mb-12 lg:mb-20 sm:text-center inline-block">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
           {heading}
          </h2>
          <p className=" sm:font-medium text-sm sm:text-lg lg:text-xl mt-2 px-0 lg:px-20">
            {paragraph}
          </p>
        </div>
  </>)
}
export default BoostBussiness;