import Image from "next/image";

interface ApplicationAgencyProps {
  data: {
    title: string;
    description: string;
    cards: {
      cardTitle: string;
      cardDescription: string;
      image: string;
    }[];
  };
}

const ApplicationAgeny = ({ data }: ApplicationAgencyProps) => {
  return (
    <>
      <section className="w-full relative pb-10 pt-10 sm:py-12 lg:py-16 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
              {data.title}
            </h2>
            <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
              {data.description}
            </p>
          </div>
          <div className="w-full  grid grid-cols-1 gap-10 sm:gap-14 lg:gap-10  mt-5 sm:mt-12 lg:mt-24">
            {data?.cards?.map((card, index) => (
              <div
                key={index}
                className={`w-full flex flex-wrap lg:flex-nowrap gap-4  lg:gap-7 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="w-full lg:w-3/5 order-2 lg:order-none"
                >
                  <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                    {card.cardTitle}
                  </h3>
                  <p className="text-sm sm:text-base mt-2 sm:mt-3 lg:mt-5">
                    {card.cardDescription}
                  </p>
                </div>
                <div
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  className="w-full lg:w-2/5 order-1 lg:order-none"
                >
                  <div className="w-full h-[18rem] sm:h-[20rem] lg:h-[22rem] object-cover rounded-2xl overflow-hidden relative ">
                    <Image
                      src={card.image}
                      className="object-cover rounded-2xl"
                      fill
                      alt="process img"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ApplicationAgeny;
